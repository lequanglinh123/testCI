var trueValue = 7;
let time = 3;
document.getElementsByClassName("button")[0].addEventListener("click",checkValue);
function checkValue() {
    let value=document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("input")[0].value='';
    if (value!=trueValue && time!=1){
        time-=1;
        document.getElementsByClassName("returnInfo")[0].innerHTML=`Bạn còn ${time} lần thử`;
    }else if(value!=trueValue){
        document.getElementsByClassName("returnInfo")[0].innerHTML=`Bạn đã hết số lần thử, con số may mắn là 7`;
        trueValue = 1000;
    }else if(value==trueValue){
        document.getElementsByClassName("returnInfo")[0].innerHTML="Bạn đã trúng giải thưởng trị giá 10.000đ"
    }    
}