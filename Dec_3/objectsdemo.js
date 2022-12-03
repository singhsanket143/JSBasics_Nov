let x = {name: "Sanket", age: 24};
let y = {
    name: "Sarthak",
    age: 24,
    marks: 24
};
// access any value using the key
// NOTE: from key u can access values but not vice-a-versa
console.log(x["name"]); 
console.log(y.name);
console.log("key not present", y.college); // in case key is not present, object will return undefined
// Are objects mutable ?
// Yes
y.name = "Tanmay"; // update object
console.log(y);
// how to add a new property to an already created object
x.marks = 100; // if marks key is present it will update it, otherwise, it adds it
x["company"] = "Google";
console.log(x);
// delete a key value pair ?
// we can use delete operator along with object.key
delete x.name;
console.log(x);