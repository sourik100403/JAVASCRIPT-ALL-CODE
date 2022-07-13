console.log('tut44');
// let a = "Harry bhai";
// // a = undefined;
// if (a !=undefined){
//     throw new Error('This is not undefined');
// }
// else{
//     console.log('This is undefined');
// }
// try{
//     throw new Error ('This is a new error')
//   }
//   catch(error){
//     console.log(error)
//     console.log("End of try-catch block")
//   }
try{
    console.log('this is try block');
    // functionharry();
    throw new Error('this is own create error');
}
catch(error){

    console.log('this is a catch block');
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('this is a finally block');
}
  