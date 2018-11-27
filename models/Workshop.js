var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var WorkshopSchema = new Schema({
    'title':{type:String, required:true},
    'ageMin':{type:Number, required:true, min:5, max:17},
    'ageMax':{type:Number, required:true, min:5, max:17},
    'date':{type:Date,required:true},
    'startTime':{type:String, required:true},
    'endTime':{type:String, required:true},
    'capacity':{type:Number, required:true},
    'location':{type:String, required:true},
    'instructor':{type:String, required:true},
    'numParticipants':{type:Number, Default:0},
    'numAlternates':{type:Number, Default:0},
    'participants':[{type:Schema.Types.ObjectId, ref:'Participant', unique:true,validation:isFull}],
    'alternates':[{type:Schema.Types.ObjectId, ref:'Participant', unique:true}]
});

var Workshop = module.exports = mongoose.model('Workshop',WorkshopSchema);

function isFull(){
    Workshop.get
}

module.exports.enrollParticipant = (s_id,p_id) => {
    return Workshop.findOneAndUpdate({_id:s_id},{$inc:{numEnrolled:1},$push:{'participants':p_id}},{new:true}).exec();
}

module.exports.unenrollParticipant = (s_id,p_id) => {
    return Workshop.findOneAndUpdate({_id:s_id},{$inc:{numEnrolled:-1},$pull:{'participants':p_id}},{new:true}).exec();
}

module.exports.unenrollParticipants = (s_id,id_array) => {
    return Workshop.findByIdAndUpdate({_id:s_id},{$inc:{numEnrolled:(id_array.length)*-1},$pull:{'participants':{$in:id_array}}},{new:true}).exec();
}


module.exports.getWorkshopByName = (name) => {
    return Workshop.findOne({name: name}).exec();
}

module.exports.getWorkshopById = (id) => {
    return Workshop.findById(id).exec()
    .then(shop => shop);
}

module.exports.getAvailableWorkshops = () => {
    let retWork = []
    Workshop.find().exec()
    .then(workshops => {
        for(workshop in workshops){
            if(workshop.capacity > workshop.numEnrolled){
                retWork.push(workshop);
            }
        }
    })
    .then(() => {
        return retWork;
    })
    .catch(error => {
        throw error
    });
}

module.exports.isWorkshopFull = (id) => {

}

module.exports.getFullWorkshops = () => {
    let retWork = []
    Workshop.find().exec()
    .then(workshops => {
        for(workshop in workshops){
            if(workshop.capacity <= workshop.numEnrolled){
                retWork.push(workshop);
            }
        }
    })
    .then(() => {
        return retWork;
    })
    .catch(error => {
        throw error
    });
}

module.exports.getWorkshops = callback => {
   
    Workshop.find({},(err,workshops)=>{
        if(err){
            console.log(error);
            return callback(error,null);
        }else{
            console.log('shops:' + workshops);
            return callback(null,workshops);
        }
    })
}


module.exports.getEligibleWorkshops = () => {
    
}

module.exports.checkSelectedCapacity = (participant) => {
    return new Promise((resolve,reject) => {

        if(!participant._id){
            return reject(new Error('No participant?'));
        }

        let shopLen;
        if(participant.selectedWorkshops.length === 1){
            shopLen = 0;
        } else{
            shopLen = participant.selectedWorkshops.length - 1;
        }

        
        while(shopLen > -1){
            // return resolve(participant);
            // if(participant.selectedWorkshops[shopLen] !== null){
            //     Workshop.findById(participant.selectedWorkshops[shopLen]).then(selectedShop => {
            //         // console.log(selectedShop.title);
            //         if(selectedShop){
            //             console.log('Shop: ' + selectedShop.title + '-- enrolled: ' + selectedShop.participants.length + '/' + selectedShop.capacity)

            //             // if(selectedShop.participant.length < selectedShop.capacity){
            //             //     //continue
            //             // }
            //             // else{
            //             //     //Remove workshop from participants selected workshops
            //             //     if(participant.alternateWorkshops.length > 0){
                                
            //             //         for(let i =0; i < participant.alternateWorkshops.length; i++){
            //             //             Workshop.findById(participant.alternateWorkshops[i]).then(altShop => {

            //             //             })
            //             //         }
            //             //         participant.alternateWorkshops.push(participant.selectedWorkshops.splice(shopLen,1));
            //             //         if(shopLen <= 0){
            //             //             return resolve(participant);
            //             //         }
            //             //     }
            //             // }

            //             if(selectedShop.participants.length === selectedShop.capacity){
            //                 // console.log('selected full');
            //                 if(!participant.alternateWorkshops){
            //                     return reject(new Error('Alternate workshops undefined'));
            //                 }
                            
            //                 if(participant.alternateWorkshops.length > 0){
            //                     // return resolve(participant)
            //                     for(let i = 0; i < participant.alternateWorkshops.length; i++){
            //                         if(participant.alternateWorkshops[i] !== null){
            //                             Workshop.findById(participant.alternateWorkshops[i]).then(altShop => {
            //                                 if(!altShop){return reject(new Error("No alternate shop returned"))}
            //                                 if(altShop.participants.length < altShop.capacity){
            //                                     return resolve(participant);
            //                                 }
            //                                 else{
            //                                     reject(new Error("alternate full"))
            //                                 }
                                            
                                            
            //                             })
            //                         } else{
            //                             return reject("Done fucked up somehow")
            //                         }
                                    
            //                     }
                                

            //                 } else {
            //                     // return reject(new Error("Empty alternate workshops"))
            //                     // participant.alternateWorkshops.push(participant.selectedWorkshops.splice(shopLen,1)[0]);
            //                     // console.log(participant.alternateWorkshops);
            //                     if(shopLen === 0){
            //                         participant.alternateWorkshops.push(participant.selectedWorkshops.splice(shopLen,1)[0]);
            //                         console.log(participant.alternateWorkshops);
            //                         // return resolve(participant);
            //                     }else{
            //                         participant.alternateWorkshops.push(participant.selectedWorkshops.splice(shopLen,1)[0]);
            //                     }
            //                 }

            //             }  
            //             else{
            //                 if(shopLen < 0){
            //                     return resolve(participant);
            //                 } else {
            //                     return reject(new Error("I have no idea"));
            //                 }
            //                 // reject(new Error("Why is there still more cases?!?"));
            //             }
            //         } else{
            //             console.log('P_id: ' + participant._id + ' | shop: ' + participant.selectedWorkshops[shopLen].title + ' | shopLen: ' + shopLen);
            //             return reject(new Error('No workshops returned'));
            //         }
                    
            //     })
            // }
            if(shopLen !== 0){
                shopLen--;
            } else {
                shopLen = -1;
            }
        }


















        /** 
        var k = 0,
            i = 0;
        
        while(selectedCount >= selectedCapacity){
            while(i < altLength){
                if(altCount < altCapacity){
                    swap(selected[k],alt[i])
                    break;
                }else{
                    i++
                }
            }
            if(k == (selectedLength-1)){
                break;
            }
        }

        */




        












        // // for(let j = 0; j < participant.selectedWorkshops.length; j++){
        //     while(len > -1){
        //         // console.log(participant.selectedWorkshops[j]._id)
        //         // if(!participant.selectedWorkshops[j]._id){
        //         //     console.log(participant.selectedWorkshops[j])
        //         //     // reject()
        //         // }

        //         Workshop.findById(participant.selectedWorkshops[len]._id).then(selectedShop => {
        //             // console.log('Slt #' + j + ' -- enrolled: ' + selectedShop.participants.length + '/' + selectedShop.capacity);
        //             //Check whether the selected workshops are at capacity
        //             if(!selectedShop){
        //                 console.log('no shop found line 113');
        //                 return reject(new Error('No workshop returned'))
        //             }
        //             if(selectedShop && selectedShop.participants.length >= selectedShop.capacity){
                        
        //                 let removed = participant.selectedWorkshops.splice(len,1)[0];
        //                 //Loop through alternate workshops
        //                 // let k = 0;
        //                 // let exit = false;
        //                 for(let k = 0; k < participant.alternateWorkshops.length; k++){
        //                     // console.log(participant.alternateWorkshops[k]._id);
        //                     Workshop.findById(participant.alternateWorkshops[k])
        //                     .then(alternateShop => {
        //                         console.log('Id: ' + participant._id + ' | Alt #' + k + '  -- enrolled: ' + alternateShop.participants.length + '/' + alternateShop.capacity);
        //                         //Check whether the alternate workshop is not full
        //                         if(alternateShop){
        //                             if(alternateShop.participants.length < alternateShop.capacity){
        //                                 let temp = participant.selectedWorkshops[len];
        //                                 participant.selectedWorkshops[len] = participant.alternateWorkshops[k];
        //                                 participant.alternateWorkshops[k] = temp;
                                        

        //                             }

        //                             //Check to see if all of the alternate workshops were full and adds selected to alternate
        //                             if(k === (alternateShop.length-1) && (alternateShop.participants.length >= alternateShop.capacity)){
        //                                 participant.alternateWorkshops.push(removed)

        //                                 if(len == (participant.selectedWorkshops.length-1)){
        //                                     return resolve(participant);
        //                                 }

        //                             }
        //                         } else{
        //                             console.log('no shop found line 113');
        //                             return reject(new Error('No workshop returned'))
        //                         }
        //                     })
        //                     .catch(err => reject(err));
        //                 }
        //             } else{
        //                 console.log('here')
        //                 //if both checked resolve
        //                 if(len == 0){
        //                     return resolve(participant);
        //                 } 

        //                 len--;
        //             }
        //         })
        //         .catch(err => reject(err));
        //     }
        
    })
}

module.exports.checkAlternateCapacity = (altArray) => {
    if(altArray.length > 0){
        // return resolve(participant)
        for(let i = 0; i < altArray.length; i++){
            
            Workshop.findById(participant.alternateWorkshops[j]).then(altShop => {
                if(!altShop){
                    return reject(new Error("Alternate Workshop Undefined"));
                } else {
                    if(altShop.participants.length < altShop.capacity){
                        // console.log('Before: ' + participant.selectedWorkshops[shopLen].title);
                        let temp = participant.selectedWorkshops[shopLen];
                        participant.selectedWorkshops[shopLen] = participant.alternateWorkshops[j];
                        participant.alternateWorkshops[j] = participant.selectedWorkshops[shopLen];

                        // if(shopLen < 0){
                        //     // console.log('After: ' + participant.selectedWorkshops[shopLen].title);
                        //     return resolve(participant);
                        // }
                    }

                    if(i === (participant.alternateWorkshops.length -1) && (altShop.participants.length < altShop.capacity)){
                        participant.alternateWorkshops.push(participant.selectedWorkshops.splice(shopLen,1)[0]);
                        if(shopLen < 0){
                            return resolve(participant);
                        }
                    }

                        
                    
                    
                }
            });
        }

    } else {
        // return reject(new Error("Nothing to see here"))
        participant.alternateWorkshops.push(participant.selectedWorkshops.splice(shopLen,1)[0]);
        
        if(shopLen < 0){
            return resolve(participant);
        }
    }
}