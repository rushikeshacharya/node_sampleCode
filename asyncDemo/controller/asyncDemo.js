// below is the sample code for async-await function

// function definitions
var f1 = async function fun1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("fun1 invoked");
            resolve(1)
        }, 1500)
    })

}

var f2 = async function fun2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("fun2 invoked");
            resolve(2)
        }, 1300)
    })
}


//function calling
const callingFunction = async function () {
    // this is sequential call
    var n1 = await f1();
    var n2 = await f2();

    // this is parallel call
    var a1 = f1();
    var a2 = f2();
    const num1 = await a1;
    const num2 = await a2;
}

callingFunction();