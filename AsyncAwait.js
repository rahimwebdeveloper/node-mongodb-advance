const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success")
    }, 1000)
});

// promise.then(res => console.log(res))

async function get() {
    // const res = [] ;
    const res = await promise;
    console.log(res);
}

get();


// fetch("").then(res => res.json()).then(data => console.log(data));

async function getUser() {
    // const res = await fetch("");
    // const data = await res.json();

    const res = await fetch(`https://www.example.com/${user.id}`);
    const data2 = await res.json();
    console.log( data2);
}


getUser();