// Global constants
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
    console.error('WebGL 2 is not supported by your browser.');
}

// Set canvas size: 500*500 canvas로 사용
canvas.width = 500;
canvas.height = 500;

// halfWidth, halfHeight 정의
const halfWidth = canvas.width / 2;
const halfHeight = canvas.height / 2;

// Initialize WebGL settings: viewport and clear color
gl.viewport(0, halfHeight, halfWidth, halfHeight);
gl.scissor(0, halfHeight, halfWidth, halfHeight);
gl.clearColor(0.1, 0.2, 0.3, 1.0);

// Start rendering
render();

// Render loop
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);  
    const halfWidth = canvas.width / 2;
    const halfHeight = canvas.height / 2;

    gl.enable(gl.SCISSOR_TEST); // Enable scissor test

    // Top-left (Red)
    gl.viewport(0, halfHeight, halfWidth, halfHeight);
    gl.scissor(0, halfHeight, halfWidth, halfHeight);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Top-right (Green)
    gl.viewport(halfWidth, halfHeight, halfWidth, halfHeight);
    gl.scissor(halfWidth, halfHeight, halfWidth, halfHeight);
    gl.clearColor(0.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Bottom-left (Blue)
    gl.viewport(0, 0, halfWidth, halfHeight);
    gl.scissor(0, 0, halfWidth, halfHeight);
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Bottom-right (Yellow)
    gl.viewport(halfWidth, 0, halfWidth, halfHeight);
    gl.scissor(halfWidth, 0, halfWidth, halfHeight);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.disable(gl.SCISSOR_TEST); // Disable scissor test after rendering
}  
    // Draw something here

// Resize viewport when window size changes
//size에 innerWidth와 innerHeight 중 더 작은 값을 대입시켜 1:1 비율을 유지
window.addEventListener('resize', () => {
    const size = Math.min(window.innerWidth, window.innerHeight);
    canvas.width = size;
    canvas.height = size;
    gl.viewport(0, 0, size, size);
    render();
});

 