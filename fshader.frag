#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
varying vec2 vPos ; 

void main() {
    vec2 st = vPos;
    //st.y += u_time;
  //  st.y = st.y/st.x;
   // st = fract(st*5.0 );
    //st.x += u_time;
    vec3 col = vec3(0.0);
    //st= fract(st*2.0);
    vec3 x = vec3(st.x, st.y/st.x, st.y);
    x.x = sin(x.z/x.y) + cos (x.x );
    //x.y = cos(sin(x.y))/sin(cos(x.x));
    x = fract(x*200.0 * sin(u_time));
    col+= x;

    gl_FragColor = vec4(col,1.0);
}