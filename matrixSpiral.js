// --Directions
// Write a function that accepts an integer N and returns a NxN spiral matrix
// --- Examples
//      matrix(2)
//      [[1, 2],
//       [4, 3]]

//      matrix(3)
//      [[1, 2, 3],
//       [8, 9, 4],
//       [7, 6, 5]]

//      matrix(4)
//      [[1,  2,  3,  4],
//       [12, 13, 14, 5],
//       [11, 16, 15, 6],
//       [10,  9,  8, 7]]


// Create an empty array of arrays called results
// Create sub arrays within the results array, each sub array to represent each 
// row, so the number of rows equals n
// Create a counter variable starting at 1
// As long as (start column <= end column) AND (start row <= end row)
//    Loop from start column to end column
//          At results[start_row][i] assign counter variable
//          Increment counter
//    Increment start row
//    Loop from start row to end row
//          At results[i][end_column] assign counter variable
//          Increment counter
//    Decrement end column
//    Loop from end column to start column
//          At results[end_row][i] assign counter variable
//          Increment counter
//    Decrement end row
//    Loop from end row to start row
//          At results[i][start_column] assign counter variable
//          Increase counter

function matrix(n){
    const results =[];
    for(let i=0; i < n; i++){
        results.push([])
    }

    let count = 1;
    let startColumn = 0;
    let endColumn = n-1;
    let startRow = 0;
    let endRow = n-1;

    while(startColumn <= endColumn && startRow <= endRow){
        for(let i=startColumn; i <= endColumn; i++){
            results[startRow][i] = count;
            count++;
        }

        startRow++;

        for(let i=startRow; i <= endRow; i++){
            results[i][endColumn] = count // We are now at the end column
            count++;
        }

        endColumn--;

        for(let i=endColumn; i >= startColumn; i--){
            results[endRow][i] = count // We are now at the end row
            count++;
        }

        endRow--;

        for(let i=endRow; i >= startRow; i--){
            results[i][startColumn] = count; // We are at the start column
            count++;
        }

        startColumn++;
    }

  console.log(results);
}

matrix(3)
