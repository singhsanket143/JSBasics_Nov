function pattern(n) {
    // upper
    for(let row = 1; row <= n; row++) {
        let str = "";
        let spaces = row - 1;
        for(let i = 1; i <= spaces; i++) {
            str += " ";
        }
        let num = row;
        while(num <= n) {
            str += num + " ";
            num++;
        }
        console.log(str);
    }

    // lower part
    for(let row = 1; row <= n-1; row++) {
        let str = "";
        let spaces = n - row - 1;
        for(let i = 1; i <= spaces; i++) {
            str += " ";
        }
        let num = n - row;
        while(num <= n) {
            str += num + " ";
            num++;
        }
        console.log(str);
    }
}

pattern(3);