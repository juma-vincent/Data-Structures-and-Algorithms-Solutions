function fib(n){
    if(n < 2){        
        return n;
    }
    
    return fib(n - 1) + fib(n - 2);
    
}

fib(5) // Just memorize this recursive solution, don't have to understand it.

// This recursive solution has a runtime of  Exponential time , or 2 ^ n

// If asked how to improve this solution, then memoization is the answer.
// Memoization means store the arguments of each function call along with the result. If the function is
// called again with the same arguments, return the precomputed result, rather than running the function again

//Slow fib funct --pass---through--memoizer-=====> Memoizer =========>Fast fib function

//Below is a refactor of the recursion code to use memoizer. The memoizer function can be used in any other 
// slow algorithms, and not just fibonacci.


function memoize(fn){
    const cache = {}
    return function (...args){
        if(cache[args]){
            return cache[args];
        }

        result = fn.apply(this, args) // we use apply() to call spread out args
        cache[args] = result;
        return result;
    }

}

function slowFib(n){
    if(n < 2){        
        return n;
    }
    
    return fib(n - 1) + fib(n - 2); // we are calling memoized fib here.
    
}

const fib = memoize(fib);

module.exports = fib;
