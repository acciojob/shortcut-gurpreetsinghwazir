function shortcut(s1, s2) {
 
    let s1Str= s1[0] ;
    let s2Str= s2[0] ;
    
    if(s1.length == 0 | s2.length  == 0){
        console.log(`""`);
    }else{
        console.log(s1Str + s2Str);    
    }
 }
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
