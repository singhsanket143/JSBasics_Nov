function f(n) {
    // base case
    if(n < 1) {
        // dont do anything
        return;
    }
    // recursive assumption
    f(n-1); // function f works correctly for n-1 and prints 1->n-1 correctly on the screen
    console.log(n);
}

f(8);