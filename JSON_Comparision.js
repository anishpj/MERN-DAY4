
var arg1 = {name:"Person 1", age:5, };
var arg2 = {age:5, name:"Person 1"} ;   
var compare = (arg1,arg2)=>{
    keys1 = Object.keys(arg1);
    keys2 = Object.keys(arg2);
    return keys1.length === keys2.length && keys1.every(key=>arg1[key]===arg2[key]);
}
console.log("Given two JSON have same properties : "+ compare(arg1, arg2));

