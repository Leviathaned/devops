exports.factorial = function(n) {
    if(n==0 || n==1)
        return 1;
    return this.factorial(n-1) * n;
}