// if (true){

// } else{

// }

let age=10;
// let name='jack';

// if(age>10){
//     name='jack'
// }else{
//     name='jones'
// }

// let name=age >10 && 'pedro'; 
/* The line `let name=age >10 || 'pedro';` is using the logical OR operator `||` in JavaScript. */
// let name=age >10 || 'pedro'; 
let name= age>10? "pedro" : "jack";

const component=() => {
    return age>10 ? <div> pedro</div> : <div> jack </div>
}
