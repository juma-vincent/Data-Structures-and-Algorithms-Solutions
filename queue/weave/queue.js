// -- Directions
// Implement a 'peek' method in the below Queue class.
// peek should return the last element (the next one to be returned) from the queue *without removing it*
// peek allows us to peek the last element at the queue, to check if it is not undefined before
// deciding to remove it.

class Queue {
    constructor(){
        this.data = [];
    }

    add = record => {
        this.data.unshift(record);
    }
    remove =() => {
        return this.data.pop();
    }
    peek =() => {
        return this.data[this.data.length-1]
    }
}

module.exports = Queue;