#include <iostream>
using namespace std;

string f(string &s, int idx, int n) {
    // base case
    if(idx == n) return "";
    string curr = "";
    curr += s[idx];
    return ((s[idx] == 'a') ? "" : curr) + f(s, idx + 1, n);
}

int main() {
    string s = "abcax";
    int n = 5;
    cout<<f(s, 0, n);
    return 0;
}