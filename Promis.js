// Pending 

//resolved

//rejected

const myPromise = new Promise((resolved, rejected) => {
    const user = true;
    if (!user) {
        rejected("Something went wrong!")
    }
    setTimeout(() => {
        resolved({ name: "rahim" })
    }, 1000);
})


const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let userData = [];

for (let i = 0; i < userIds.length; i++) {
    const userId = userIds[i];
    userData.push(myPromise);
}

Promise.all(userData).then(res => {
    console.log(res);
})




myPromise
    .then(res => console.log(res))
    .catch(error => console.log(error));

console.log("done")