// --Directions
// Write a function that returns the number or vowels used in a string.
// Example
// vowels('Hi there!') ---> 3
// vowels('Why?) ---> 0

function vowels(str){
    const sounds = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for(let char of str.toLowerCase()){
        if(sounds.includes(char)){
            count +=1;
        }
    }

   console.log(count);
}

vowels('My profession is coding')