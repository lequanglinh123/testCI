function merge2String(string1, string2) {
    let length1 = string1.length;
    let length2 = string2.length;
    let returnString = '';
    if(length1<=length2){
        for(let i=0; i<length2;i++){
            if(i<length1){
                returnString = returnString + string1.charAt(i) + string2.charAt(i);
            }else{
                returnString += string2.charAt(i);
            }
        }
    }else{
        for(let i=0; i<length1;i++){
            if(i<length2){
                returnString = returnString + string1.charAt(i) + string2.charAt(i);
            }else{
                returnString += string1.charAt(i);
            }
        }
    }
    return returnString;
}