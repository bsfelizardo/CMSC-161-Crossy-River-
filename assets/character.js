char_head_front = [
  -0.1, 0.7, 0.1, 1,
  -0.1, 0.4, 0.1, 1,
  0.1, 0.4, 0.1, 1,

  0.1, 0.4, 0.1, 1,
  0.1, 0.7, 0.1, 1,
  -0.1, 0.7, 0.1, 1,
]

char_head_top = [
  -0.1, 0.7, 0.1, 1,
  -0.1, 0.7, -0.1, 1,
  0.1, 0.7, 0.1, 1,

  0.1, 0.7, 0.1, 1,
  -0.1, 0.7, -0.1, 1,
  0.1, 0.7, -0.1, 1,

]

char_head_left = [
  -0.1, 0.7, 0.1, 1,
  -0.1, 0.4, 0.1, 1,
  -0.1, 0.4, -0.1, 1,

  -0.1, 0.4, -0.1, 1,
  -0.1, 0.7, -0.1, 1,
  -0.1, 0.7, 0.1, 1,
]

char_head_lefteye = [
  // eyebrow
  -0.07, 0.57, 0.1, 1,
  -0.07, 0.60, 0.1, 1,
  -0.03, 0.60, 0.1, 1,

  -0.03, 0.60, 0.1, 1,
  -0.07, 0.57, 0.1, 1,
  -0.03, 0.57, 0.1, 1,

  // side
  -0.03, 0.57, 0.1, 1,
  -0.05, 0.57, 0.1, 1,
  -0.05, 0.52, 0.1, 1,

  -0.05, 0.52, 0.1, 1,
  -0.03, 0.52, 0.1, 1,
  -0.03, 0.57, 0.1, 1,

  // pupil
  -0.07, 0.57, 0.1, 1,
  -0.07, 0.52, 0.1, 1,
  -0.05, 0.52, 0.1, 1,

  -0.05, 0.52, 0.1, 1,
  -0.05, 0.57, 0.1, 1,
  -0.07, 0.57, 0.1, 1,
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
  char_head_front[i+2] = 0.2
}

for (let i = 0; i < char_head_back.length; i+=4){
  char_head_back[i] = char_head_back[i] * 0.5
  char_head_back[i+1] = char_head_back[i+1] * 0.5
  char_head_back[i+2] = 0.1
}

for (let i = 0; i < char_head_left.length; i+=4){
  char_head_left[i] = char_head_left[i] * 0.5
  char_head_left[i+1] = char_head_left[i+1] * 0.5
  char_head_left[i+2] = char_head_left[i+2] > 0 ? 0.2 : 0.1
}

for (let i = 0; i < char_head_right.length; i+=4){
  char_head_right[i] = char_head_right[i] * 0.5
  char_head_right[i+1] = char_head_right[i+1] * 0.5
  char_head_right[i+2] = char_head_right[i+2] > 0 ? 0.2 : 0.1
}

for (let i = 0; i < char_head_top.length; i+=4){
  char_head_top[i] = char_head_top[i] * 0.5
  char_head_top[i+1] = char_head_top[i+1] * 0.5
  char_head_top[i+2] = char_head_top[i+2] > 0 ? 0.2 : 0.1
}

for (let i = 0; i < char_head_lefteye.length; i+=4){
  char_head_lefteye[i] = char_head_lefteye[i] * 0.5
  char_head_lefteye[i+1] = char_head_lefteye[i+1] * 0.5
  char_head_lefteye[i+2] = 0.1
}

for (let i = 0; i < char_head_righteye.length; i+=4){
  char_head_righteye[i] = char_head_righteye[i] * 0.5
  char_head_righteye[i+1] = char_head_righteye[i+1] * 0.5
  char_head_righteye[i+2] = 0.1
}

