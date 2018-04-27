var asynchAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
               resolve(a + b);
            } else {
                reject('must be a number');
        }
        }, 3000);
    });
};


asynchAdd(2,'7').then((result) => {
   console.log(result);
   return asynchAdd(result, 33);
}, (errorMessage) => {
    console.log(errorMessage);
}).then((result) => {
    console.log(result);
}, (errorMessage) => {
    console.log(errorMessage);
}).then();


// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('Hey. It worked');
//         reject('Unable to fulfill promise');
//     }, 2600)
// });
//
// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error:', errorMessage)
// });

