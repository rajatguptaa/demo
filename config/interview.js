// function mongodb() {


//     mongodb.aggregate({
//         $group

//     })
// }

// application 


// |
// mongo

// mongo-server1  mongo-server2 mongo-server3


// application -> nodejs -> event stack -> 


// START
// END
//Immediate 2
// Immediate 4
// Promise 1
//Timeout 1


console.log('START');

setTimeout(function() {console.log('Timeout 1')}, 0);

setImmediate(function() {console.log('Immediate 2')}, 0);

Promise.resolve()
.then(() => console.log('Promise 1'));

setTimeout(function() {console.log('Timeout 3')}, 0);

setImmediate(function() {console.log('Immediate 4')}, 0);

console.log('END');