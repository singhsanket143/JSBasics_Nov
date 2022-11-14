let isUserPrime = true;
let isUserDiscovery = true;
let isUserAccorn = true;

if(isUserPrime) {
    if(isUserDiscovery) {
        if(isUserAccorn) {
            console.log("Enjoy all accorn, prime and discovery content");
        } else {
            console.log("Enjoy both prime and discovery content");
        }
    } else if(isUserAccorn) {
        console.log("Enjoy both prime and accorn");
    }
    else {
        console.log("Enjoy prime content");
    }
}
else {
    console.log("please buy a subscription top enjoy content");
}