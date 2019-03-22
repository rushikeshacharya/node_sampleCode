
/* --> Before executing this code read the comments, so that you can get idea of callback function. and its calling mechanism.
 -->Below is the simple addition function for callback demo.
 -->The function takes 3 arguments first two arguments are numbers tobe add and the last is callback.
 -->the argument name 'callback' is user defined you can give any name(example 'cb') to it but use it accordingly in further code.
 -->callback function always return either error and result, it's first argument is always 'error' and second one is result.*/
 
//Function Definition 
function addition(num1,num2,callback){
    if((num1 != 0) && (num2 != 0)){
        //here in this case both numbers are valid, hence we are returning result here and as mentioned above
        // the first argument is error so we are returning first parameter as null and second one is the answer.
        callback(null,(num1+num2));
    }
    else{
        //here it is error case therefore it is returning error only no need of result.
        errMsg="The numbers should be greater than 0"
        callback(errMsg);
    }
}



//Below two are the function calls for both result and error scenario
//1. it will get result as both numbers are greater than 0
addition(10,20,(error,result)=>{
    if(error){
        console.log("Error occurred",error);
    }
    else{
        console.log("Result is",result);
    }
});

//2. it will get error as second number is 0.
addition(10,0,(error,result)=>{
    if(error){
        console.log("Error occurred",error);
    }
    else{
        console.log("Result is",result);
    }
});