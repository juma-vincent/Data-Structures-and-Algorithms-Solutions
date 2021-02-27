// --Directions
// Implement a queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove' and 'peek'.

const Stack = require('../stack/stack');

class Queue {
    constructor(){
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }
    
    add = record =>{
        this.stackOne.push(record);
    }

    remove = () =>{
        while(this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop())
            
        }
        const record = this.stackTwo.pop();

        while(this.stackTwo.peek()){
            this.stackOne.push(this.stackTwo.pop())
        }

        return record;
        
    }

    peek = () =>{
        while(this.stackOne.peek()){
            this.stackTwo.push(this.stackOne.pop())
        }
        const record = this.stackTwo.peek();

        while(this.stackTwo.peek()){
            this.stackOne.push(this.stackTwo.pop())
        }

        return record;
    }
}


