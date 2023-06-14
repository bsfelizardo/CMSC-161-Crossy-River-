char_head_front1 = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0, 0.1, 1,
  0.1, 0, 0.1, 1,

  0.1, 0, 0.1, 1,
  0.1, 0.3, 0.1, 1,
  -0.1, 0.3, 0.1, 1,
]

char_head_top1 = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0.3, -0.1, 1,
  0.1, 0.3, 0.1, 1,

  0.1, 0.3, 0.1, 1,
  -0.1, 0.3, -0.1, 1,
  0.1, 0.3, -0.1, 1,

]

char_head_left1 = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0, 0.1, 1,
  -0.1, 0, -0.1, 1,

  -0.1, 0, -0.1, 1,
  -0.1, 0.3, -0.1, 1,
  -0.1, 0.3, 0.1, 1,
]

char_head_lefteye1 = [
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

char_head_back1 = char_head_front1.map((x) => x);
char_head_right1 = char_head_left1.map((x) => x);
char_head_righteye1 = char_head_lefteye1.map((x) => x);

for (let i = 2; i < char_head_back1.length; i+=4){
  char_head_back1[i] = -0.1
}

for (let i = 0; i < char_head_right1.length; i+=4){
  char_head_right1[i] = 0.1
}

for (let i = 0; i < char_head_righteye1.length; i+=4){
  char_head_righteye1[i] = char_head_righteye1[i] * -1
}

for (let i = 2; i < char_head_righteye1.length; i+=4){
  char_head_righteye1[i] = -0.1
  char_head_lefteye1[i] = -0.1
}

// scale
for (let i = 0; i < char_head_front1.length; i+=4){
  char_head_front1[i] = char_head_front1[i] * 0.5 + 0.15
  char_head_front1[i+1] = char_head_front1[i+1] * 0.5
  char_head_front1[i+2] = 0.4
}

for (let i = 0; i < char_head_back1.length; i+=4){
  char_head_back1[i] = char_head_back1[i] * 0.5 + 0.15
  char_head_back1[i+1] = char_head_back1[i+1] * 0.5
  char_head_back1[i+2] = 0.3
}

for (let i = 0; i < char_head_left1.length; i+=4){
  char_head_left1[i] = char_head_left1[i] * 0.5 + 0.15
  char_head_left1[i+1] = char_head_left1[i+1] * 0.5
  char_head_left1[i+2] = char_head_left1[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_right1.length; i+=4){
  char_head_right1[i] = char_head_right1[i] * 0.5 + 0.15
  char_head_right1[i+1] = char_head_right1[i+1] * 0.5
  char_head_right1[i+2] = char_head_right1[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_top1.length; i+=4){
  char_head_top1[i] = char_head_top1[i] * 0.5 + 0.15
  char_head_top1[i+1] = char_head_top1[i+1] * 0.5
  char_head_top1[i+2] = char_head_top1[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_lefteye1.length; i+=4){
  char_head_lefteye1[i] = char_head_lefteye1[i] * 0.5 + 0.15
  char_head_lefteye1[i+1] = char_head_lefteye1[i+1] * 0.5
  char_head_lefteye1[i+2] = 0.3
}

for (let i = 0; i < char_head_righteye1.length; i+=4){
  char_head_righteye1[i] = char_head_righteye1[i] * 0.5 + 0.15
  char_head_righteye1[i+1] = char_head_righteye1[i+1] * 0.5
  char_head_righteye1[i+2] = 0.3
}



function start_to_river1(
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

  for (let i = 0; i < char_head_front1.length; i+=4){
    char_head_front1[i+2] += move
  }
  
  for (let i = 0; i < char_head_back1.length; i+=4){
    char_head_back1[i+2] += move
  }
  
  for (let i = 0; i < char_head_left1.length; i+=4){
    char_head_left1[i+2] += move
  }
  
  for (let i = 0; i < char_head_right1.length; i+=4){
    char_head_right1[i+2] += move
  }
  
  for (let i = 0; i < char_head_top1.length; i+=4){
    char_head_top1[i+2] += move
  }
  
  for (let i = 0; i < char_head_lefteye1.length; i+=4){
    char_head_lefteye1[i+2] += move
  }
  
  for (let i = 0; i < char_head_righteye1.length; i+=4){
    char_head_righteye1[i+2] += move
  }

  console.log(move)
  

  const front_buffer1 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer1);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_front1), gl.DYNAMIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const back_buffer1 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer1);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_back1), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const left_buffer1 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer1);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_left1), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const right_buffer1 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer1);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_right1), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const lefteye_buffer1 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer1);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_lefteye1), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const righteye_buffer1 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer1);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_righteye1), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const top_buffer1 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer1);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_top1), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
    
  console.log(face)
  console.log(move)
  if(face == true){
    gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 0, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

    gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 255, 255, 255, 1);
    gl.drawArrays(gl.TRIANGLES, 12, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 0, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

    gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 255, 255, 255, 1);
    gl.drawArrays(gl.TRIANGLES, 12, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.1882, 0.2157, 0.3373, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

  }else{

    gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer1);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.1882, 0.2157, 0.3373, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);
  }

}
