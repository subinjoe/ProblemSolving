
var truncateSentence = function(s, k) {
    
    let n = s.split (" ");
        console.log (n);
    
    let v = "";
    // console.log (v);
    
    for (i=0; i<=(k-1); i++){
        let m = n[i] ;
        // console.log (m,v)
        if (i!=0){
        v = v + " " + m;
        // console.log (v);
        }
        else{
            v = m;
        }
    }
    return v;

    // return s.split(" ").slice(0, k).join(" ");
   
};


var result = truncateSentence ("How are you", 2)
console.log (result);