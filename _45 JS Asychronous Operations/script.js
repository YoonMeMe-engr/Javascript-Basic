// synchronous and asynchronous operations
// synchronous
// console.log("First");
// console.log("Second");
// console.log("Third");
// console.log("Fourth");
// console.log("Fifth");

// // asynchronous
// console.log("First");
// setTimeout(()=> {
//     console.log("Second");
// }, 2000);
// console.log("Third");

// let randomNum;
// setTimeout(() => {
//     randomNum = Math.random();
// }, 2000);
// setTimeout(() => {
//     console.log(randomNum);
// }, 3000);

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let randomNum = Math.random();
//     if(randomNum > 0.4) {
//         resolve("Fetch data successfully!");
//     } else {
//         reject("Fetch data fails!");
//     }
//     }, 2000);
// });
// myPromise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // let data = "Fetch data successfully";
        let data = null;
    if(data) {
        resolve(data);
    } else {
        reject("Fetch data Fail");
    }
    }, 1000);
});
myPromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

// https://api.github.com/users