async function getData() {
    try {
        // undefined.find();

        const emailError = new Error("Email already exits")
        throw emailError ;


    } catch (error) {
        errorHandler(error);
    }
}

getData();


function errorHandler(error) {
    const { name, message, stack } = error;
    console.log(name, message)
}

console.log("Done");