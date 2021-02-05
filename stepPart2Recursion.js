//Recursion steps
// 1. First always identify a base case, after which there is no more work for us to do.
// 2. After checking to see if you have met the base case, then write code that would do some amount of work 
// 3. Call the function again, but now with a new set of arguments, to avoid infinite loop.

//Recursion Tips
// 1. Figure out the bare minimum pieces of information to represent your problem. i.e when printing a 
//    number down to zero, call the function with function(n-1) in sunsequent calls.
// 2. Give reasonable defaults to these bare minimum pieces of information, i.e function(n, dec=1)
//    hence function(n-dec) for subsequent calls for the function.
// 3. Check the base case, is there any work to do? If not, return.
// 4. Do some work, then call the function again, making sure the arguments have changed in some fashion.

//In this problem, here are some of the base cases:
// a. if(row === n) then we have reached the end of our problem.
// b. if the 'stair' string has a length === n, then we are at the end of a row and the stair value is ready  
//    to be printed.
// c. if the length of the stair string is less than or equal to the row number we are working on, we add 
//  a '#', otherwise, add a space.     

function steps(n, row=0, stair=''){
    if(row === n){
        return;
    }

    if(stair.length === n){
        console.log(stair); 
        row += 1       
        steps(n, row, stair);      // we call the function again with new args(row) stair value is the default 
        return;                 // we dont want to execute anything else in the current function
    }

    if(stair.length <= row){
        stair += '#';
    }else{
        stair += ' ';
    }

    steps(n, row, stair)     // we then call the function again to trigger a recursion, to start the entire
                            // process again but with the row not changed yet, but the stair length has.
                            // so we pass it as an argument to the next call
}

steps(8);
