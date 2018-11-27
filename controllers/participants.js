var express = require('express');
var router = express.Router();
var Participant = require('../models/Participant');
var workshop = require('../models/Workshop');
var passport = require('passport')

router.post('/', (req,res)=>{
    // console.log(req.body)
    new Participant(req.body).save()
    .then(()=>{
        res.json({success:true,msg:"participant added"}).end();
    })
    .catch(error=>{
        console.log(error.message)
        res.status(401).json({success:false, msg:"validation failed"}).end();
    })
})


router.get('/', (req,res)=>{
    Participant.find().populate('selectedWorkshops preferredWorkshops alternateWorkshops').exec()
    .then(participants=>{
        // console.log(participants)
        res.json(participants);
    })
    .catch(error=>{
        console.log(error.message)
        res.status(400).json({success:false}).end();
    })
})

router.put('/many', (req,res)=>{

    //Update all participants
    Participant.updateMultiple(req.body, (err, updated)=>{
        
        if(err) {
            console.log(err);
            // console.log(req.body.selectedWorkshops);
            return res.status(400).json({success:false}).end();
        }

        if(updated){
            // console.log(updated);
            res.json({success:true,msg:updated}).end();
        }else{
            return res.status(400).json({success:false}).end()
        }
    });
})

router.get('/:id', (req,res)=>{  
    Participant.findById(req.params.id).populate('selectedWorkshops preferredWorkshops alternateWorkshops').exec()
    .then(participant=>{
        if(!participant){
            return res.json({success:false,msg:"participant not found"}).end();
        }
        res.send(participant)
    })
    .catch(error=>{
      console.log(error.message);
      res.status(404).json({success:false}).end();
    })
})

// router.put('/many', passport.authenticate('jwt',{session:false}), (req,res)=>{
//     workshop.checkCapacity(req.body)
//     .then(checked => {
//         Participant.findById(req.body._id)
//         .then(participant => {
//             participant.update()
//         })
//     })
//     .catch(error => console.log(error.message));
//     workshop.findById()
//     Participant.findById(req.params.id)
//     .then(participant=>{
//         if(!participant){
//             return res.json({success:false,msg:'participant not found'}).end();
//         }

//         if(req.body.preferredWorkshops){
//             Participant.clearPreferred(req.body, (err)=>{
//                 if(err) console.log(err.message)
//                 participant.update(req.body,(err,numAffected)=>{
//                     if(err) console.log(err.message)
//                     res.json({success:true,msg:"participant updated"}).end();
//                 })
//             })
//         }

        

//     })
//     .catch(error=>{
//         console.log(error.message);
//         res.status(400).json({success:false}).end();
//     })
// })

router.put('/:id', (req,res)=>{
    Participant.findById(req.params.id)
    .then(participant=>{
        if(!participant){
            return res.json({success:false,msg:'participant not found'}).end();
        }

        if(req.body.preferredWorkshops){
            Participant.clearPreferred(req.body, (err)=>{
                if(err) console.log(err.message)
                participant.update(req.body,(err,numAffected)=>{
                    if(err) console.log(err.message)
                    res.json({success:true,msg:"participant updated"}).end();
                })
            })
        }

        

    })
    .catch(error=>{
        console.log(error.message);
        res.status(400).json({success:false}).end();
    })
})


router.delete('/:id', (req,res)=>{
    Participant.findById(req.params.id)
    .then(participant => {
        if(!participant){
            return res.json({success:false,msg:"participant not found"}).end();
        }

        participant.remove((err,numAffected)=>{
            if(!err){
                for(let i = 0; i < participant.selectedWorkshops.length; i++){
                    workshop.update({_id:participant.selectedWorkshops[i]._id},
                        {$pull:{participants:participant._id}},{multi:true},
                        (err,numAffected)=>{
                            if(err) throw err;
                            if((i === participant.selectedWorkshops.length-1) && (participant.alternateWorkshops.length === 0)){
                                res.json({success:true}).end();
                            }
                    })
                }

                for(let i = 0; i < participant.alternateWorkshops.length; i++){
                    workshop.update({_id:participant.alternateWorkshops[i]._id},
                    {$pull:{alternates:participant._id}},{multi:true},
                    (err,numAffected)=>{
                        if(err) throw err;
                        if(i === participant.alternateWorkshops.length-1){
                            res.json({success:true}).end();
                        }
                    })
                }
                
            }
            else{
                throw err
            }
        })
    })
    .catch(error => {
        console.log(error.message);
        res.status(404).json({success:false}).end();
    })
})



module.exports = router;