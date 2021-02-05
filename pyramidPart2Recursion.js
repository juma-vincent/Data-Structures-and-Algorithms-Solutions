function pyramid(n, row= 0, level=''){
    
    if(row === n){
        return;
    }
    
    if(level.length === n * 2 -1){
        console.log(level);
        return pyramid(n, row + 1);        
    }

    const midpoint = Math.floor((2 * n - 1) / 2); // midpoint of the column

    if(midpoint - row <= level.length && midpoint + row >= level.length){
        level += '#';
    }else{
        level += ' ';
    }

    pyramid( n, row, level);

}

pyramid(7);