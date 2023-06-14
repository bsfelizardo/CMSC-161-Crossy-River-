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
  char_head_righteye[i] = -0.2
}