const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    skill: {type: String,unique:true,required: true},
    percentage: {type: Number,unique:true,required: true}
});


const Skill = mongoose.model("Skill", skillSchema);

async function skill() {
    const skill = new Skill({
        skill: 'HTML',
        percentage: 100
    });
    const result = await skill.save();
    console.log(result); 
}

skill();