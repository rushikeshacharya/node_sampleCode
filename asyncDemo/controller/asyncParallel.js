// below code gives demo for async parallel and series 
const async = require('async');
const f1 = async function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fun1 invoked");
            resolve(1)
        }, 1300)
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


const x = function () {
    async.parallel([f1, f2], () => {
        console.log('ok');
    })
}
const y = function () {
    async.series([f1, f2], () => {
        console.log('Done');
    })
}
x();
y();
