var workshop = require('../models/Workshop');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ParticipantSchema = new Schema({
    "firstName":{type: String, required:true, index:true},
    "lastName":{type: String, required:true},
    "age":{type:Number, required:true, min:5,max:17},
    "birthDate":{type:Date},
    "gender":{type:String, required:true},
    "address":{
        "street":String,
        "street2":String,
        "city":String,
        "state":String,
        "zipCode":Number
    },
    "guardian":{
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        phoneNumber:{type:String,required:true},
        email:{type:String}
    },
    "phoneNumber":String,
    "phoneNumberOpt":String,
    "additional":String,
    "photographPermission":{type:Boolean,default:false},
    "preferredWorkshops":[{type:Schema.Types.ObjectId,ref:'Workshop'}],
    "alternateWorkshops":[{type:Schema.Types.ObjectId,ref:'Workshop'}],
    "selectedWorkshops":[{type:Schema.Types.ObjectId,ref:'Workshop'}],
    "dataCreated":{type:Date, default: Date.now()}

});

var Participant = module.exports = mongoose.model('Participant',ParticipantSchema);

module.exports.clearPreferred = (participant,callback) => {
    Participant.findByIdAndUpdate(participant._id,{$unset:{"preferredWorkshops":[]}},{},(err,numAffected)=>{
        if(err) callback(err,null);
        callback(null,participant);
    });
}

module.exports.updateMultiple = (part, callback) => {

    //Loop through participants array
    //Loop through selected workshops array
    //Get selected workshop by id
    //Check capacity
    //Get participant by id
    //Update Participants
    //Update workshops
    //Exit

    if(!part){
        return callback(new Error("Empty object"), null);
    }

    

    //Loop through participants
    // console.log(part);
    Participant.findById(part._id).exec()
    .then((participant)=>{
        
        if(!participant){
            return callback(new Error("No participant returned"), null);
        }

        participant.update(
            {$addToSet:{selectedWorkshops:{$each:part.selectedWorkshops},alternateWorkshops:{$each:part.alternateWorkshops}}},
            {multi:true},
            (err,numAffected)=>{
                if(!err){
                    
                    if(part.selectedWorkshops.length > 0){
                    //Loop through selected workshops
                        for(let j = 0; j<part.selectedWorkshops.length; j++){

                            //Get specific workshop
                            if(part.selectedWorkshops[j] && part.selectedWorkshops[j]._id){

                                workshop.findById(part.selectedWorkshops[j],(err,shop)=>{
                                    if(err){
                                        return callback(err,null);
                                    }
                                    if(shop){

                                        //Update workshops participants with selected participant
                                        shop.update({$addToSet:{participants:part._id},$inc:{numParticipants:1}},(err,numAffected)=>{
                                            if(err){
                                                return callback(err,null);
                                            }

                                            //End of workshops and participants with no alternates
                                            if((j=== (part.selectedWorkshops.length-1) ) && (part.alternateWorkshops.length === 0)){
                                                return callback(null,true);
                                            }
                                        })
                                    }
                                    else{
                                        return callback(new Error('no workshop found'),null);
                                    }
                                });
                            }
                        }
                    }

                    
                    
                    //Loop through alternate workshops
                    for(let k = 0; k < part.alternateWorkshops.length; k++){
                        if(part.alternateWorkshops[k]){
                            //Get specific workshop
                            workshop.findById(part.alternateWorkshops[k],(err,shop)=>{
                                if(err){
                                    return callback(err,null);
                                }
                                if(shop){

                                    //Update workshops alternates with alternate
                                    shop.update({$addToSet:{alternates:part._id},$inc:{numAlternates:1}},(err,numAffected)=>{
                                        if(err){
                                            return callback(err,null);
                                        }

                                        //End of workshops and participants with alternates
                                        if(k === (part.alternateWorkshops.length-1)){
                                            return callback(null,true);
                                        }
                                    })
                                    return;
                                }
                                else{
                                    return callback(new Error("No workshop returned"),null);
                                }
                            })
                        } else{
                            return;
                        }
                    }
                    if(part.alternateWorkshops.length <= 0 && part.selectedWorkshops.length <= 0){
                        return callback(new Error("No workshops given"),null);
                    }   

                    if(part.alternateWorkshops.length <= 0){
                        return callback(null,false);
                    }
                    
                } else{
                    console.log(JSON.stringify(part))
                    // return callback(err,null);
                }
            })
                
            
        
    })
    .catch(err => callback(err, null)); 
    
}




