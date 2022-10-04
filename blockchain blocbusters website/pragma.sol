pragma solidity 0.5.1;

contract Counter{
    uint count;
    event Increment(uint value);
    event Decrement(uint value);
    


    function increment(){
        count += 1;
        emit Increment(count);

    }
    function decrement(){
        count -= 1;
        emit Decrement(count);
    }

}