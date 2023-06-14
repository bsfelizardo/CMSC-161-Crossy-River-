char_head_front2 = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0, 0.1, 1,
  0.1, 0, 0.1, 1,

  0.1, 0, 0.1, 1,
  0.1, 0.3, 0.1, 1,
  -0.1, 0.3, 0.1, 1,
]

char_head_top2 = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0.3, -0.1, 1,
  0.1, 0.3, 0.1, 1,

  0.1, 0.3, 0.1, 1,
  -0.1, 0.3, -0.1, 1,
  0.1, 0.3, -0.1, 1,

]

char_head_left2 = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0, 0.1, 1,
  -0.1, 0, -0.1, 1,

  -0.1, 0, -0.1, 1,
  -0.1, 0.3, -0.1, 1,
  -0.1, 0.3, 0.1, 1,
]

char_head_lefteye2 = [
  // eyebrow
  -0.07, 0.17, 0.1, 1,
  -0.07, 0.2, 0.1, 1,
  -0.03, 0.2, 0.1, 1,

  -0.03, 0.2, 0.1, 1,
  -0.07, 0.17, 0.1, 1,
  -0.03, 0.17, 0.1, 1,

  // side
  -0.03, 0.17, 0.1, 1,
  -0.05, 0.17, 0.1, 1,
  -0.05, 0.12, 0.1, 1,

  -0.05, 0.12, 0.1, 1,
  -0.03, 0.12, 0.1, 1,
  -0.03, 0.17, 0.1, 1,

  // pupil
  -0.07, 0.17, 0.1, 1,
  -0.07, 0.12, 0.1, 1,
  -0.05, 0.12, 0.1, 1,

  -0.05, 0.12, 0.1, 1,
  -0.05, 0.17, 0.1, 1,
  -0.07, 0.17, 0.1, 1,
]

char_head_back2 = char_head_front2.map((x) => x);
char_head_right2 = char_head_left2.map((x) => x);
char_head_righteye2 = char_head_lefteye2.map((x) => x);

for (let i = 2; i < char_head_back2.length; i+=4){
  char_head_back2[i] = -0.1
}

for (let i = 0; i < char_head_right2.length; i+=4){
  char_head_right2[i] = 0.1
}

for (let i = 0; i < char_head_righteye2.length; i+=4){
  char_head_righteye2[i] = char_head_righteye2[i] * -1
}

for (let i = 2; i < char_head_righteye2.length; i+=4){
  char_head_righteye2[i] = -0.1
  char_head_lefteye2[i] = -0.1
}

// scale
for (let i = 0; i < char_head_front2.length; i+=4){
  char_head_front2[i] = char_head_front2[i] * 0.5 + 0.3
  char_head_front2[i+1] = char_head_front2[i+1] * 0.5
  char_head_front2[i+2] = 0.4
}

for (let i = 0; i < char_head_back2.length; i+=4){
  char_head_back2[i] = char_head_back2[i] * 0.5 + 0.3
  char_head_back2[i+1] = char_head_back2[i+1] * 0.5
  char_head_back2[i+2] = 0.3
}

for (let i = 0; i < char_head_left2.length; i+=4){
  char_head_left2[i] = char_head_left2[i] * 0.5 + 0.3
  char_head_left2[i+1] = char_head_left2[i+1] * 0.5
  char_head_left2[i+2] = char_head_left2[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_right2.length; i+=4){
  char_head_right2[i] = char_head_right2[i] * 0.5 + 0.3
  char_head_right2[i+1] = char_head_right2[i+1] * 0.5
  char_head_right2[i+2] = char_head_right2[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_top2.length; i+=4){
  char_head_top2[i] = char_head_top2[i] * 0.5 + 0.3
  char_head_top2[i+1] = char_head_top2[i+1] * 0.5
  char_head_top2[i+2] = char_head_top2[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_lefteye2.length; i+=4){
  char_head_lefteye2[i] = char_head_lefteye2[i] * 0.5 + 0.3
  char_head_lefteye2[i+1] = char_head_lefteye2[i+1] * 0.5
  char_head_lefteye2[i+2] = 0.3
}

for (let i = 0; i < char_head_righteye2.length; i+=4){
  char_head_righteye2[i] = char_head_righteye2[i] * 0.5 + 0.3
  char_head_righteye2[i+1] = char_head_righteye2[i+1] * 0.5
  char_head_righteye2[i+2] = 0.3
}



function start_to_river2(
  {origin, destination,
    gl, aPositionPointer,
    colorLocation,
  }){

  move = 0;
  face = true;
  if (origin == "start" && destination == "start"){
    move = 0;
    face = true;
  } else if (origin == "upper" && destination == "river"){
    move = -0.35;
    face = true;
  } else if (origin == "river" && destination == "lower"){
    move = -0.65
    face = false;
  } else if (origin == "lower" && destination == "river"){
    move = 0.65
    face = false;
  } else if (origin == "river" && destination == "upper"){
    move = 0.35
    face = true;
  }

  for (let i = 0; i < char_head_front2.length; i+=4){
    char_head_front2[i+2] += move
  }
  
  for (let i = 0; i < char_head_back2.length; i+=4){
    char_head_back2[i+2] += move
  }
  
  for (let i = 0; i < char_head_left2.length; i+=4){
    char_head_left2[i+2] += move
  }
  
  for (let i = 0; i < char_head_right2.length; i+=4){
    char_head_right2[i+2] += move
  }
  
  for (let i = 0; i < char_head_top2.length; i+=4){
    char_head_top2[i+2] += move
  }
  
  for (let i = 0; i < char_head_lefteye2.length; i+=4){
    char_head_lefteye2[i+2] += move
  }
  
  for (let i = 0; i < char_head_righteye2.length; i+=4){
    char_head_righteye2[i+2] += move
  }
  

  const front_buffer2 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer2);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_front2), gl.DYNAMIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const back_buffer2 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer2);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_back2), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const left_buffer2 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer2);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_left2), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const right_buffer2 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer2);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_right2), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const lefteye_buffer2 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer2);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_lefteye2), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const righteye_buffer2 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer2);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_righteye2), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const top_buffer2 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer2);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_top2), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
    
  if(face == true){
    gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 0, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

    gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 255, 255, 255, 1);
    gl.drawArrays(gl.TRIANGLES, 12, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 0, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

    gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 255, 255, 255, 1);
    gl.drawArrays(gl.TRIANGLES, 12, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 1, 1, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

  }else{

    gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer2);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 1, 1, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);
  }

}
