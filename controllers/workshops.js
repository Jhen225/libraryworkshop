var workshop = require('../models/Workshop');
var Participant = require('../models/Participant');
var express = require('express');
var router = express.Router();



//Create new workshop
/** 
 * Get Workshops
 * Determine whether the requirements are met
 * 
 */
router.post('/',(req,res)=>{
    var shop = new workshop({
        'title':req.body.title,
        'ageMin':req.body.ageMin,
        'ageMax':req.body.ageMax,
        'date':req.body.date,
        'startTime':req.body.startTime,
        'endTime':req.body.endTime,
        'capacity':req.body.capacity,
        'location':req.body.location,
        'instructor':req.body.instructor
    });
    
    shop.save()
    .then(() => {
        res.json({success:true,msg:"workshop added"}).end();
    })
    .catch((error)=>{
        console.log(error.message);
        res.status(400).json({success:false,msg:"workshop not added"}).end();
    })
});




//Add a participants id to workshop as reference
router.post('/enroll',(req,res)=>{
    workshop.enrollParticipant(req.body.s_id,req.body.p_id)
    .then((enrolled)=>{
        Participant.findByIdAndUpdate(req.body.p_id,{$push:{'selectedWorkshop':req.body.s_id}})
        .then(x => {

                console.log(x);
                res.send(enrolled);
            
        })
        
    })
    .catch(error=>{
        console.log(error.message)
        res.status(400).json({success:false}).end();
    });
});

router.post('/unenroll',(req,res)=>{
    workshop.unenrollParticipant(req.body.s_id,req.body.p_id)
    .then((unenrolled)=>{
        Participant.findByIdAndUpdate(req.body.p_id,{$pull:{'selectedWorkshop':req.body.s_id}})
        .then(participant => {
            participant.update().exec()
            .then((x)=>{
                console.log(x);
                res.send(unenrolled);
            })
            
        })
    })
    .catch(error=>{
        console.log(error.message)
        res.status(400).json({success:false}).end();
    });
});

router.put('/:id',(req,res)=>{
    workshop.findByIdAndUpdate(req.params.id,req.body).exec()
    .then(result=>{
        if(result){
            // console.log(JSON.stringify(result));
            res.json({success:true,msg:'workshop updated'}).end();
        }
        
    })
    .catch(error=>{
        console.log(error.message);
        res.status(400).json({success:false}).end();
    })
})

//Display all workshops stored in database
router.get('/',(req,res)=>{
    workshop.find().populate('participants alternates').exec()
    .then(workshops => {
        // console.log(workshops)
        res.json(workshops).end();
    })
    .catch(error =>{
        console.log(error.message);
        res.status(400).json({success:false}).end();
    })
});

//Get from database with id
router.get('/:id',(req,res) => {
    workshop.findById(req.params.id).populate('participants alternates').exec()
    .then(workshop =>{
        res.send(workshop);
    })
    .catch(error =>{
        console.log(error.message);
        res.status(404).json({success:false}).end();
    })
});


//Remove from database with id
router.delete('/:id',(req,res) => {
    workshop.findById(req.params.id).exec()
    .then(shop =>{
        if(!shop){
            return res.json({success:false,msg:"workshop not found"}).end();
        }
        shop.remove((err,numAffected)=>{
            if(!err){
                Participant.update({_id:{$in: shop.participants, $in:shop.alternates}},
                {$pull:{selectedWorkshops:shop._id},$pull:{alterateWorkshops:shop._id},$pull:{preferredWorkshops:shop._id}},
                {multi:true},
                (err,numAffected)=>{
                    if(err) throw err;
                    res.json({success:true}).end();
                })
            }
        })
    })
    .catch(error => {
        console.log(error.message);
        res.status(400).json({success:false}).end();
    })
});



module.exports = router;