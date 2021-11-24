function myFunction(){

    var string="";

    for ( i=99; i>=0; i--){
        if (i>2){
            string+="<br/>"+i+" bottles of beer on the wall, "+i+" bottles of beer.<br/>Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.";
        }
        else if (i==2){
            string+="<br/>"+i+" bottles of beer on the wall, "+i+" bottles of beer.<br/>Take one down and pass it around, "+(i-1)+" bottle of beer on the wall";
        }
        else if (i==1){
            string+="<br/>"+i+" bottle of beer on the wall, "+i+" bottle of beer.<br/>Take one down and pass it around, no more bottles of beer on the wall";
        }
        else if (i==0){
            string+="<br/>No more bottles of beer on the wall, no more bottles of beer.<br/>Go to the store and buy some more, 99 bottles of beer on the wall.";
        }
    
    }

    document.getElementById("stringHolder").innerHTML+=string;

    hide();
}

function hide(){
    document.getElementById("myButton").style.display="none";
}