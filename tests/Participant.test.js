var expect = require('chai').expect;
var mongoose = require('mongoose');
var Participant = require('../models/Participant');


describe('Participant Model',()=>{
    
    beforeEach(() => {
        mongoose.connect('mongodb://localhost:27017/NILSW')
        var test = new Participant({
            firstName:'Joey',
            lastName:'Davis',
            address:{
                street:'9531 Applegate Wy',
                street2:null,
                city:'Riverside',
                state:'California',
                zipCode:'95015',
            },
            age:'13',
            guardian:{
                firstName:'Chloe',
                lastName:'Davis',
                phoneNumber:'9518625162',
                email:'chloe.davis@gmail.com'
            },
            phoneNumber:'9518625162'
        });

        test.save();
    })

    afterEach((done)=>{
        Participant.remove({})
        .then(()=> done());
        mongoose.disconnect();
    })

    it('should fetch Participant',()=>Participant.find())
    it('should fetch Participant and have first name Joey',()=>{
        return Participant.find()
        .then(result =>{
            console.log(result.firstName);
            expect(result.firstName).to.equal('Joey');
        })
    })
})