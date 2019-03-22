//to avoid callback hell we use promise 
//this code gives sample for use of promise and how can we implement promise chaining in different ways.
//it also demonstrates traditional way of calling promises
const f1 = async function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fun1 invoked");
            resolve(1)
        }, 1500)
    })
}

const f2 = async function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fun2 invoked");
            reject(2)
        }, 1300)
    })
}


//calling function using promise chaining

// way1 
const callingFun = async function () {
    f1()
        .then((data) => {
            console.log("-->", data);
            return f2().then((data2) => {
                console.log("f2", data2);
            })
        }).catch((e) => {
            console.log("Error", e);
        })
}


//way2
const callFun = async function () {
    f1().then(f2
    ).catch((e) => {
        console.log("Error", e);
    })
}

// callingFun();
// callFun();

//traditional way call promises

const callFunc = async function () {
    f1()
        .then(() => {
            console.log("In first call");
        }

        ).catch((e) => {
            console.log("Error", e);
        });
    f2()
        .then(() => {
            console.log("In second call");
        }
        ).catch((e) => {
            console.log("Error", e);
        });
}

callFunc();