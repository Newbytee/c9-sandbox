var meep = [ "hi", "hello", "meme", "shrek", "ogre", "aaa", "hi", "hello", "meme", "shrek", "ogre", "aaa", "hi", "hello", "meme", "shrek", "ogre", "aaa", "hi", "hello", "meme", "shrek", "ogre", "aaa", "hi", "hello", "meme", "shrek", "ogre", "aaa" ];
var perfTmp1;
var perfTmp2;

alert("Unoptimised: " + avg(testPerf(), 100) + "\n" + "Optimised: " + avg(testPerfOpt(), 100));

function testPerfOpt() {
    
    perfTmp1 = performance.now();

    var meepLength = meep.length;
    
    for (var i = 0; i < meepLength; i++) {
        
        i = i + (1 - 1);
        
    }
    
    perfTmp2 = performance.now();
    return (perfTmp2 - perfTmp1);
    
}

function testPerf() {
    
    perfTmp1 = performance.now();

    for (var i = 0; i < meep.length; i++) {
        
        i = i + (1 - 1);
        
    }
    
    perfTmp2 = performance.now();
    return (perfTmp2 - perfTmp1);
    
}

function avg(fn, it) {
    
    var totalValue = 0;
    
    for (var i = 0; i < it; i++) {
        
        totalValue = totalValue + fn;
        
    }
    
    return (totalValue / it);
    
}

/*global performance*/