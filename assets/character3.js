char_head_front3 = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0, 0.1, 1,
  0.1, 0, 0.1, 1,

  0.1, 0, 0.1, 1,
  0.1, 0.3, 0.1, 1,
  -0.1, 0.3, 0.1, 1,
]

char_head_top3 = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0.3, -0.1, 1,
  0.1, 0.3, 0.1, 1,

  0.1, 0.3, 0.1, 1,
  -0.1, 0.3, -0.1, 1,
  0.1, 0.3, -0.1, 1,

]

char_head_left3 = [
  -0.1, 0.3, 0.1, 1,
  -0.1, 0, 0.1, 1,
  -0.1, 0, -0.1, 1,

  -0.1, 0, -0.1, 1,
  -0.1, 0.3, -0.1, 1,
  -0.1, 0.3, 0.1, 1,
]

char_head_lefteye3 = [
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

char_head_back3 = char_head_front3.map((x) => x);
char_head_right3= char_head_left3.map((x) => x);
char_head_righteye3 = char_head_lefteye3.map((x) => x);

for (let i = 2; i < char_head_back3.length; i+=4){
  char_head_back3[i] = -0.1
}

for (let i = 0; i < char_head_right3.length; i+=4){
  char_head_right3[i] = 0.1
}

for (let i = 0; i < char_head_righteye3.length; i+=4){
  char_head_righteye3[i] = char_head_righteye3[i] * -1
}

for (let i = 2; i < char_head_righteye3.length; i+=4){
  char_head_righteye3[i] = -0.1
  char_head_lefteye3[i] = -0.1
}

// scale
for (let i = 0; i < char_head_front3.length; i+=4){
  char_head_front3[i] = char_head_front3[i] * 0.5 + 0.45
  char_head_front3[i+1] = char_head_front3[i+1] * 0.5
  char_head_front3[i+2] = 0.4
}

for (let i = 0; i < char_head_back3.length; i+=4){
  char_head_back3[i] = char_head_back3[i] * 0.5 + 0.45
  char_head_back3[i+1] = char_head_back3[i+1] * 0.5
  char_head_back3[i+2] = 0.3
}

for (let i = 0; i < char_head_left3.length; i+=4){
  char_head_left3[i] = char_head_left3[i] * 0.5 + 0.45
  char_head_left3[i+1] = char_head_left3[i+1] * 0.5
  char_head_left3[i+2] = char_head_left3[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_right3.length; i+=4){
  char_head_right3[i] = char_head_right3[i] * 0.5 + 0.45
  char_head_right3[i+1] = char_head_right3[i+1] * 0.5
  char_head_right3[i+2] = char_head_right3[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_top3.length; i+=4){
  char_head_top3[i] = char_head_top3[i] * 0.5 + 0.45
  char_head_top3[i+1] = char_head_top3[i+1] * 0.5
  char_head_top3[i+2] = char_head_top3[i+2] > 0 ? 0.4 : 0.3
}

for (let i = 0; i < char_head_lefteye3.length; i+=4){
  char_head_lefteye3[i] = char_head_lefteye3[i] * 0.5 + 0.45
  char_head_lefteye3[i+1] = char_head_lefteye3[i+1] * 0.5
  char_head_lefteye3[i+2] = 0.3
}

for (let i = 0; i < char_head_righteye3.length; i+=4){
  char_head_righteye3[i] = char_head_righteye3[i] * 0.5 + 0.45
  char_head_righteye3[i+1] = char_head_righteye3[i+1] * 0.5
  char_head_righteye3[i+2] = 0.3
}



function start_to_river3(
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

  for (let i = 0; i < char_head_front3.length; i+=4){
    char_head_front3[i+2] += move
  }
  
  for (let i = 0; i < char_head_back3.length; i+=4){
    char_head_back3[i+2] += move
  }
  
  for (let i = 0; i < char_head_left3.length; i+=4){
    char_head_left3[i+2] += move
  }
  
  for (let i = 0; i < char_head_right3.length; i+=4){
    char_head_right3[i+2] += move
  }
  
  for (let i = 0; i < char_head_top3.length; i+=4){
    char_head_top3[i+2] += move
  }
  
  for (let i = 0; i < char_head_lefteye3.length; i+=4){
    char_head_lefteye3[i+2] += move
  }
  
  for (let i = 0; i < char_head_righteye3.length; i+=4){
    char_head_righteye3[i+2] += move
  }

  console.log(move)
  

  const front_buffer3 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer3);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_front3), gl.DYNAMIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const back_buffer3 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer3);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_back3), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const left_buffer3 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer3);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_left3), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const right_buffer3 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer3);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_right3), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const lefteye_buffer3 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer3);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_lefteye3), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const righteye_buffer3 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer3);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_righteye3), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const top_buffer3 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer3);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(char_head_top3), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
    
  console.log(face)
  console.log(move)
  if(face == true){
    gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 0, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

    gl.bindBuffer(gl.ARRAY_BUFFER, lefteye_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 255, 255, 255, 1);
    gl.drawArrays(gl.TRIANGLES, 12, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 0, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

    gl.bindBuffer(gl.ARRAY_BUFFER, righteye_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 255, 255, 255, 1);
    gl.drawArrays(gl.TRIANGLES, 12, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 1, 0.7373, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);

  }else{

    gl.bindBuffer(gl.ARRAY_BUFFER, front_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.bindBuffer(gl.ARRAY_BUFFER, left_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, back_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9216, 0.8588, 0.4039, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, right_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0.9766, 0.5039, 0.1406, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 18);

    gl.bindBuffer(gl.ARRAY_BUFFER, top_buffer3);
    gl.vertexAttribPointer(aPositionPointer, 4, gl.FLOAT, false, 0, 0);
    gl.uniform4f(colorLocation, 0, 1, 0.7373, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 12);
  }

}
