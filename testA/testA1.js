function findOppositeNumber(n, inputNumber){
    if(inputNumber <= n){
        return inputNumber+n/2;
    }else{
        return inputNumber-n/2;
    }
}