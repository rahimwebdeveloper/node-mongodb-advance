const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success")
    }, 1000)
});

// promise.then(res => console.log(res))

async function get() {
    // const res = [] ;
    const res = await promise ;
    console.log(res) ;
}

get();