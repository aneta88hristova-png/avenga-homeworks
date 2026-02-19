function func1(name, callback) {
    callback(name);
}

function func2(a, b, callback) {
    console.log("Sum: " + callback(a, b));
}

function func3(a, b, callback) {
    console.log("Product: " + callback(a, b));
}

function func4(text, callback) {
    console.log(callback(text));
}

function func5(num, callback) {
    console.log(num + " is even? " + callback(num));
}

function func6(num, callback) {
    console.log("Double: " + callback(num));
}

function func7(text, callback) {
    console.log("Length: " + callback(text));
}

function func8(text, callback) {
    console.log("First letter: " + callback(text));
}

function func9(num, callback) {
    console.log(num + " is positive? " + callback(num));
}

function func10(a, b, callback) {
    console.log("Combined: " + callback(a, b));
}


const functions = [
    () => func4("hej", t => t.toUpperCase()),
    () => func3(4, 5, (x, y) => x * y),
    () => func2(5, 3, (x, y) => x + y),
    () => func1("Anna", n => console.log("Hello " + n)),
    () => func6(7, n => n * 2),
    () => func7("JavaScript", t => t.length),
    () => func8("hej", t => t[0]),
    () => func9(5, n => n > 0),
    () => func5(8, n => n % 2 === 0),
    () => func10("Hello", "World", (x, y) => x + " " + y)
];


console.log("========== FUNCTIONS CALLED IN ORDER ==========");

for (let i = 0; i < functions.length; i++) {
    console.log("\n--- Calling function " + (i + 1) + " ---");
    functions[i]();
}