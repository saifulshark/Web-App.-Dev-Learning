let value="xChain";
value="chainX";
console.log(value);
let user1={
    email: "saifulire@hotmail.com",
    bkash_id_no: "23289"
}
let user2=user1;
user2.email="2001025@iot.bdu.ac.bd";
user2.bkash_id_no= "ax2387"
console.log(user1.email,user1.bkash_id_no);
console.log(user2.email,user2.bkash_id_no);

//Memory two types: Stack Memory and Heap Memory

//primitive:symbol,string,number,boolean,null,undefined,BigInt
//Non-primitive:objects,array,function


//Stack(primitive: makes a copy of variable to a container, when value gets changed,,only copy gets changed and main value remains unchanged)
//Heap(non-primitive: makes a reference of the variable values, when variable value gets changed,,main value also gets changed)

