char_head_front6 = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0, 0.1, 1,
  0.1, 0, 0.1, 1,

  0.1, 0, 0.1, 1,
  0.1, 0.3, 0.1, 1,
  -0.1, 0.3, 0.1, 1,
]

char_head_top6 = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0.3, -0.1, 1,
  0.1, 0.3, 0.1, 1,

  0.1, 0.3, 0.1, 1,
  -0.1, 0.3, -0.1, 1,
  0.1, 0.3, -0.1, 1,

]

char_head_left6 = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0, 0.1, 1,
  -0.1, 0, -0.1, 1,

  -0.1, 0, -0.1, 1,
  -0.1, 0.3, -0.1, 1,
  -0.1, 0.3, 0.1, 1,
]

char_head_lefteye6 = [
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

char_head_back6 = char_head_front6.map((x) => x);
char_head_right6= char_head_left6.map((x) => x);
char_head_righteye6 = char_head_lefteye6.map((x) => x);

for (let i = 2; i < char_head_back6.length; i+=4){
  char_head_back6[i] = -0.1
}

for (let i = 0; i < char_head_right6.length; i+=4){
  char_head_right6[i] = 0.1
}

for (let i = 0; i < char_head_righteye6.length; i+=4){
  char_head_righteye6[i] = char_head_righteye6[i] * -1
}

for (let i = 2; i < char_head_righteye6.length; i+=4){
  char_head_righteye6[i] = -0.1
  char_head_lefteye6[i] = -0.1
}

// scale
for (let i = 0; i < char_head_front6.length; i+=4){
  char_head_front6[i] = char_head_front6[i] * 0.5 - 0.30
  char_head_front6[i+1] = char_head_front6[i+1] * 0.5
  char_head_front6[i+2] = 0.4
}

for (let i = 0; i < char_head_back6.length; i+=4){
  char_head_back6[i] = char_head_back6[i] * 0.5 - 0.30
  char_head_back6[i+1] = char_head_back6[i+1] * 0.5
  char_head_back6[i+2] = 0.3
}

for (let i = 0; i < char_head_left6.length; i+=4){
  char_head_left6[i] = char_head_left6[i] * 0.5 - 0.30
  char_head_left6[i+1] = char_head_left6[i+1] * 0.5
  char_head_left6[i+2] = char_head_left6[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_right6.length; i+=4){
  char_head_right6[i] = char_head_right6[i] * 0.5 - 0.30
  char_head_right6[i+1] = char_head_right6[i+1] * 0.5
  char_head_right6[i+2] = char_head_right6[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_top6.length; i+=4){
  char_head_top6[i] = char_head_top6[i] * 0.5 - 0.30
  char_head_top6[i+1] = char_head_top6[i+1] * 0.5
  char_head_top6[i+2] = char_head_top6[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_lefteye6.length; i+=4){
  char_head_lefteye6[i] = char_head_lefteye6[i] * 0.5 - 0.30
  char_head_lefteye6[i+1] = char_head_lefteye6[i+1] * 0.5
  char_head_lefteye6[i+2] = 0.3
}

for (let i = 0; i < char_head_righteye6.length; i+=4){
  char_head_righteye6[i] = char_head_righteye6[i] * 0.5 - 0.30
  char_head_righteye6[i+1] = char_head_righteye6[i+1] * 0.5
  char_head_righteye6[i+2] = 0.3
}

function start_to_river6(
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

  for (let i = 0; i < char_head_front6.length; i+=4){
    char_head_front6[i+2] += move
  }
  
  for (let i = 0; i < char_head_back6.length; i+=4){
    char_head_back6[i+2] += move
  }
  
  for (let i = 0; i < char_head_left6.length; i+=4){
    char_head_left6[i+2] += move
  }
  
  for (let i = 0; i < char_head_right6.length; i+=4){
    char_head_right6[i+2] += move
  }
  
  for (let i = 0; i < char_head_top6.length; i+=4){
    char_head_top6[i+2] += move
  }
  
  for (let i = 0; i < char_head_lefteye6.length; i+=4){
    char_head_lefteye6[i+2] += move
  }
  
  for (let i = 0; i < char_head_righteye6.length; i+=4){
    char_head_righteye6[i+2] += move
  }
  

  const front_buffer6 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer6);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_front6), gl.DYNAMIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const back_buffer6 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer6);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_back6), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const left_buffer6 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer6);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_left6), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const right_buffer6 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer6);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_right6), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const lefteye_buffer6 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer6);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_lefteye6), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const righteye_buffer6 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer6);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_righteye6), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const top_buffer6 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer6);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_top6), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  if(face == true){
    gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 0, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

    gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 255, 255, 255, 1);
    gl.drawArrays(gl.TRIANGLES, 12, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 0, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

    gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 255, 255, 255, 1);
    gl.drawArrays(gl.TRIANGLES, 12, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.4824, 0.667, 0.745, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

  }else{

    gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer6);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.4824, 0.667, 0.745, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);
  }

}
