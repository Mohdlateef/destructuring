let a=[1,2,3,4];
console.log(a);
let[ , , e]=a;
console.log(e)
let obj1={
    age:10,
    birth:30,
    code:40,
}
console.log(obj1);
let {birth:age1,code:code1,age:birth1}=obj1;
console.log("One way of doing desturing",age1,code1,birth1)


let{birth,age,code}=obj1;
console.log("another way of doing destructring ",birth,age,code);
