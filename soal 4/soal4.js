for(a = 1; a < 10; a++){
    for(b = 1; b < 10; b++){
        if(a == 5 || a + b == 10 || b == 5 || b === a){
            document.write(a)
        }else{
            document.write("_")
        } 
    }
    document.write("<br>")
}