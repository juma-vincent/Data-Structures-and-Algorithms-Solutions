// Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape with N levels using  the '#' character.
// Make sure the pyramid has spaces on both the left and right hand sides.
// -----Examples
//  pyramid(1);
//        '#'
//  pyramid(3);
//        '  #  '
//        ' ### '
//        '#####'
//  pyramid(5);
//        '    #    '
//        '   ###   '
//        '  #####  '
//        ' ####### '
//        '#########'

function pyramid(n){

    const midpoint = Math.floor((2 * n - 1) / 2);
    for(let row=0; row < n; row++){
        let level = '';
        for(let column=0; column < n * 2 - 1; column++)//In pyramids, we get the number of columns by (n x 2)-1
        {
         // we will find the midpoint index, and take row number of elements on either sides of the mid index
         // and convert them to '#' . so if row = 0, then we take 0 elements on both sides, if row=1, then take
         // one element from both sides of the midpoint index.
         // hence midpoint = number of columns/2
         
            if(midpoint - row <= column && midpoint + row >= column){
                // checks whether the current column is in the bounds of midp-row and midp+row
                level += '#';
            }else{
                level += ' ';
            }
        
        }

        console.log(level);
    }   
}
 
pyramid(5);