
// const name= 'pedro'

const person={
    name:'pedro',
    age:20,
    ismarried:false,
};

// const name= person.name 


const{name, age, ismarried }=person

const person2={...person, name:'jack'}
const names=['pedro','jack', 'jessics ']
const names2=[...names,'joel']