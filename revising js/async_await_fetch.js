//promises and async await

// var name= 'pedro'
// console.log(name);
// var name= 'pedro'
// console.log(name);

// var listofmovies=fetch("google.com/movies")
// console.log(listofmovies)

// const event =new Promise((resolve,reject)=>{
//     var name='john';
//     if (name=="pedro"){
//         resolve(name);
//     }else {
//         reject("name was not pedro, name was"+name);
//     }

// })
// event
//     .then((name)=>{
//     console.log(name);
// })
//     .catch((err)=>{
//     console.log(err)
//     }).finally(()=> {
//         console.log("promise finished")
//     });






const axios = require("axios");
const data = axios.get("https://cat-fact.herokuapp.com/facts");

data
    .then((res)=>{
    console.log(res.data);
})
    .catch((err)=>{
    console.log(err)
    }).finally(()=> {
        console.log("promise finished")
    });


