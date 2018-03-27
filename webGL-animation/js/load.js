window.addEventListener("load", startup, false);

function startup() {
    
    glCanvas = document.getElementById("glcanvas");
    gl = glCanvas.getContext("webgl");
    
    const shaderSet = [
        
        {
            
            type: gl.VERTEX_SHADER,
            id: "vertex-shader"
            
        },
        {
            
            type: gl.FRAGMENT_SHADER,
            id: "fragment-shader"
            
        }
        
    ];
    
    shaderProgram = buildShaderProgram(shaderSet);
    
    aspectRatio = glCanvas.width/glCanvas.height;
    currentRotation = [ 0, 1 ];
    currentScale = [ 1.0, aspectRatio ];
    
    vertexArray = new Float32Array([
        
        -0.5, 0.5, 0.5, 0.5, 0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, -0.5, -0.5
        
        ]);
        
        vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertexArray, gl.STATIC_DRAW);
        
        vertexNumComponents = 2;
        vertexCount = vertexArray.length/vertexNumComponents;
        
        currentAngle = 0.0;
        rotationRate = 6;
        
        animateScene();
    
}

function buildShaderProgram(shaderInfo) {
    
    let program = gl.createProgram();
    
    shaderInfo.forEach(function(desc) {
       
       let shader = compileShader(desc.id, desc.type);
       
       if (shader) {
           
           gl.attachShader(program, shader);
           
       }
        
    });
    
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        
        console.log("Error linking shader program: ");
        console.log(gl.getProgramInfoLog(program));
        
    }
    
    return program;
    
}

function compileShader(id, type) {
    
    let code = document.getElementById(id).firstChild.nodeValue;
    let shader = gl.createShader(type);
    
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        
        console.log(`Error compiling ${type === gl.VERTEX_SHADER ? "vertex" : "fragment" } shader: `)
        console.log(gl.getShaderInfoLog(shader));
        
    }
    
    return shader;
    
}