
function capitalize(str){
    words = [];
    for(let word of str.split(' ')){
       words.push(word[0].toUpperCase() + word.slice(1));
    }
          

    console.log(words.join(' '))
}

capitalize('i am software developer living in Houston');