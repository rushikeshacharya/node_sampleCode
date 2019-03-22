//this is sample code for async Waterfall 
//it contains 3 callback functions addition, subtraction, multiplication 
//output of addition function is input for next function and so on.
//this code needs async library.
const async = require('async');
function addition(callback) {

    callback(null, (10 + 20), 20);

}

function subtraction(num1, num2, callback) {
    if (num1 != 0 && num2 != 0) {
        if (num1 >= num2) {
            console.log(num1, " ", num2);
            callback(null, (num1 - num2), num2);
        } else {
            callback(null, (num2 - num1), num2);
        }
    }
    else {
        callback('numbers should be greater than 0');
    }
}

function multiplication(num1, num2, callback) {
    if (num1 != 0 && num2 != 0) {
        console.log(num1, " ", num2);
        callback(null, (num1 * num2), num2);
    }
    else {
        callback('numbers should be greater than 0');
    }
}


//function call
async.waterfall([addition, subtraction, multiplication], function (err, result) {
    if (err) {
        console.log("Final error", err);
    }
    else {
        console.log("Final answer", result);
    }
})