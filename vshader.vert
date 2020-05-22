precision mediump float; 
varying vec2 vPos;
attribute vec3 aPosition;

void main() { 

    vec3 pos = aPosition; 
    pos.xy = pos.xy * 2.0 - 1.0;
    vPos = pos.xy;
    gl_Position = vec4(pos,1.0);
    }