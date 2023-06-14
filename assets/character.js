char_head_front = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0, 0.1, 1,
  0.1, 0, 0.1, 1,

  0.1, 0, 0.1, 1,
  0.1, 0.3, 0.1, 1,
  -0.1, 0.3, 0.1, 1,
]

char_head_top = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0.3, -0.1, 1,
  0.1, 0.3, 0.1, 1,

  0.1, 0.3, 0.1, 1,
  -0.1, 0.3, -0.1, 1,
  0.1, 0.3, -0.1, 1,

]

char_head_left = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0, 0.1, 1,
  -0.1, 0, -0.1, 1,

  -0.1, 0, -0.1, 1,
  -0.1, 0.3, -0.1, 1,
  -0.1, 0.3, 0.1, 1,
]

char_head_lefteye = [
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

char_head_back = char_head_front.map((x) => x);
char_head_right = char_head_left.map((x) => x);
char_head_righteye = char_head_lefteye.map((x) => x);

for (let i = 2; i < char_head_back.length; i+=4){
  char_head_back[i] = -0.1
}

for (let i = 0; i < char_head_right.length; i+=4){
  char_head_right[i] = 0.1
}

for (let i = 0; i < char_head_righteye.length; i+=4){
  char_head_righteye[i] = char_head_righteye[i] * -1
}

for (let i = 2; i < char_head_righteye.length; i+=4){
  char_head_righteye[i] = -0.1
  char_head_lefteye[i] = -0.1
}

// scale
for (let i = 0; i < char_head_front.length; i+=4){
  char_head_front[i] = char_head_front[i] * 0.5
  char_head_front[i+1] = char_head_front[i+1] * 0.5
  char_head_front[i+2] = 0.4
}

for (let i = 0; i < char_head_back.length; i+=4){
  char_head_back[i] = char_head_back[i] * 0.5
  char_head_back[i+1] = char_head_back[i+1] * 0.5
  char_head_back[i+2] = 0.3
}

for (let i = 0; i < char_head_left.length; i+=4){
  char_head_left[i] = char_head_left[i] * 0.5
  char_head_left[i+1] = char_head_left[i+1] * 0.5
  char_head_left[i+2] = char_head_left[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_right.length; i+=4){
  char_head_right[i] = char_head_right[i] * 0.5
  char_head_right[i+1] = char_head_right[i+1] * 0.5
  char_head_right[i+2] = char_head_right[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_top.length; i+=4){
  char_head_top[i] = char_head_top[i] * 0.5
  char_head_top[i+1] = char_head_top[i+1] * 0.5
  char_head_top[i+2] = char_head_top[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_lefteye.length; i+=4){
  char_head_lefteye[i] = char_head_lefteye[i] * 0.5
  char_head_lefteye[i+1] = char_head_lefteye[i+1] * 0.5
  char_head_lefteye[i+2] = 0.3
}

for (let i = 0; i < char_head_righteye.length; i+=4){
  char_head_righteye[i] = char_head_righteye[i] * 0.5
  char_head_righteye[i+1] = char_head_righteye[i+1] * 0.5
  char_head_righteye[i+2] = 0.3
}

function start_to_river(
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

  for (let i = 0; i < char_head_front.length; i+=4){
    char_head_front[i+2] += move
  }
  
  for (let i = 0; i < char_head_back.length; i+=4){
    char_head_back[i+2] += move
  }
  
  for (let i = 0; i < char_head_left.length; i+=4){
    char_head_left[i+2] += move
  }
  
  for (let i = 0; i < char_head_right.length; i+=4){
    char_head_right[i+2] += move
  }
  
  for (let i = 0; i < char_head_top.length; i+=4){
    char_head_top[i+2] += move
  }
  
  for (let i = 0; i < char_head_lefteye.length; i+=4){
    char_head_lefteye[i+2] += move
  }
  
  for (let i = 0; i < char_head_righteye.length; i+=4){
    char_head_righteye[i+2] += move
  }

  const front_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_front), gl.DYNAMIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const back_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_back), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const left_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_left), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const right_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_right), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const lefteye_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_lefteye), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const righteye_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_righteye), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const top_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_top), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
    
  if(face == true){
    gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 0, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

    gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 255, 255, 255, 1);
    gl.drawArrays(gl.TRIANGLES, 12, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 0, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

    gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 255, 255, 255, 1);
    gl.drawArrays(gl.TRIANGLES, 12, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 0, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

  }else{

    gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 0, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);
  }
}
