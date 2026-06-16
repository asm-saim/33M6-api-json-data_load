//object:
const info = {
    name: "Hasib",
    age: 34,
    married: true,
    numbers: [23, 56, 78, 34],
    location: {
        brother: "Qasim"
    }
}
console.log(typeof info);

//object to json:
const objToJson = JSON.stringify(info);
console.log(objToJson);
console.log(typeof objToJson)

//json to object:
const jsonToObj = JSON.parse(objToJson);
console.log(jsonToObj);
console.log(typeof jsonToObj); 