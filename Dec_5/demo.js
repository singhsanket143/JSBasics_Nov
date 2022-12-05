let arr = ["abc", "hello", "c", "d", "c", "abc", "d"];
let obj = {};
for(const element of arr) {
    if(!obj[element]) {
        obj[element] = true;
    }
}

for(const key in obj) {
    console.log(key);
}