// function toSmallLetter(){
// const x=5
// const results=x.toLowerCase()
// return results
// }

import joi from "joi";

// function test(){
//     const x=20
//     x=10
// console.log(x);
// }


// function catchError(fn){
// try {
//     fn()
// } catch (error) {
// console.log(error.message);    
// }
// }

// catchError(toSmallLetter)



const person={
    name:"ali",
    age:'20',
    isMarried:true,
    password:"1234",
    rePassword:"1234",
    skills:[{frontend:"HTML"}]
}


const schema=joi.object({
    name: joi.string().required().max(4),
    age:joi.number().required(),
    isMarried:joi.boolean().required(),
    password:joi.string().required(),
    rePassword:joi.string().valid(joi.ref("password")),
    skills:joi.array().items(joi.object({frontend:joi.string().required()})).required()

}).required()
const results=schema.validate(person,{abortEarly:false})
console.log(results);