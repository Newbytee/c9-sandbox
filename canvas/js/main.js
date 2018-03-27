'use strict';

var useOptimisedRender = true;
var funcOneActive = false;

var playerX = 0;
var playerY = 0;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var white = "#FFFFFF";
var blue = "#0000FF";

movePlayer(100, 100);

function functionOne() {
    
    if (!funcOneActive) {
        
        funcOneActive = true;
        
    } else {
        
        funcOneActive = false;
        
    }
    
    reDraw();
    
}

function clearCanvas() {
    
    ctx.fillStyle = white;
    
    ctx.rect(0, 0, 500, 500);
    ctx.fillRect(0, 0, 500, 500);
    
}

function debug(debugVar) {
    
    if (debugVar) {
        
        window.alert("Variable has value: " + debugVar);
        
    } else {
        
        window.alert("x: " + playerX + " y: " + playerY);
        
    }
    
}

function movePlayer(moveX, moveY) {

    playerX += moveX;
    playerY += moveY;
    
    switch (playerX) {
        
        case (500):
                playerX = 490;
            break;
        case (-10):
                playerX = 0;
            break;
        
    }
    
    switch (playerY) {
        
        case (500):
                playerY = 490;
            break;
        case (-10):
                playerY = 0;
            break;
        
    }
    
    reDraw();
    
}

function reDraw() {
    
    if (useOptimisedRender === false) {
    
        ctx.fillStyle = white;
        ctx.fillRect(0, 0, 500, 500);
        
        ctx.fillStyle = blue;
        ctx.fillRect(playerX, playerY, 10, 10);
        
        if (funcOneActive === true) {
            
            for (var i = 0; i < 30; i++) {
            
            ctx.moveTo((18 * i), (15 * i));
            ctx.lineTo((12 * i), (5 * i));
            ctx.stroke();
            
            }
            
        }
        
    } else {
        
        ctx.fillStyle = white;
        ctx.fillRect((playerX - 10), (playerY - 10), 30, 30);
        
        ctx.fillStyle = blue;
        ctx.fillRect(playerX, playerY, 10, 10);
        
        if (funcOneActive === true) {
            
            for (var i = 0; i < 30; i++) {
            
            ctx.moveTo((18 * i), (15 * i));
            ctx.lineTo((12 * i), (5 * i));
            ctx.stroke();
            
            }
            
        }
        
    }
        
}