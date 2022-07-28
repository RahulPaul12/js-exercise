function sumdigit(num){
    let sum=0;
    while(num){
        sum+=num%10;
        num= Math.floor(num/10);
    }
    return sum;
}
function checknum(num){
    if(/^([0-9])\1*$/.test(num)){
         return false;
    }
    else{
        return true;
    }
    }
   

function check(num){
    if(!isNaN(num) && num.toString().length==16){
        
        if(sumdigit(num)>=16){
            
            if((num%10)%2==0){
                
                if(checknum(num)){
                    return num;
                }
               
            }
        }
    }
    
    else{
        return 0;
    }
}
console.log(check(6666666666661666));
