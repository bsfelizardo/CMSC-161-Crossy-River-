var tree_vertices = [
    //tree foliage
    //top view corner points 4 points
    -0.15, 0.40, 0, 1,
    0.15, 0.40, 0, 1,
    0.15, -0.40, 0, 1,
    -0.15, -0.40, 0, 1,

    //TRIANGULATION
    //top view
    -0.15, 0.40, 0, 1,
    -0.15, -0.40, 0, 1,
    0.15, 0.40, 0, 1,
    0.15, 0.40, 0, 1,
    0.15, -0.40, 0, 1,
    -0.15, -0.40, 0, 1,

    //side view left
    -0.15, 0.40, 0, 1,
    -0.15, 0.40, 0.30, 1,
    -0.15, -0.40, 0.30, 1,

    -0.15, 0.40, 0, 1,
    -0.15, -0.40, 0, 1,
    -0.15, -0.40, 0.30, 1,

    //side view right
    0.15, 0.40, 0, 1,
    0.15, 0.40, 0.30, 1,
    0.15, -0.40, 0.30, 1,

    0.15, 0.40, 0, 1,
    0.15, -0.40, 0, 1,
    0.15, -0.40, 0.30, 1,

    //front view
    -0.15, -0.40, 0.30, 1,
    0.15, -0.40, 0.30, 1,
    -0.15, -0.40, 0, 1,

    0.15, -0.40, 0.30, 1,
    0.15, -0.40, 0, 1,
    -0.15, -0.40, 0, 1,

    //back view
    0.15, 0.40, 0.30, 1,
    -0.15, 0.40, 0.30, 1,
    -0.15, 0.40, 0, 1,

    0.15, 0.40, 0.30, 1,
    0.15, 0.40, 0, 1,
    -0.15, 0.40, 0, 1,

    //tree trunk top view corner points
    -0.15, -0.40, 0, 1,
    0.15, -0.40, 0, 1,
    0.15, -0.60, 0, 1,
    -0.15, -0.60, 0, 1,

    //triangulation
    //top view
    -0.05, -0.40, 0.10, 1,
    -0.05, -0.60, 0.10, 1,
    0.05, -0.40, 0.10, 1,

    0.05, -0.40, 0.10, 1,
    0.05, -0.60, 0.10, 1,
    -0.05, -0.60, 0.10, 1,

    //side view left
    -0.05, -0.40, 0.10, 1,
    -0.05, -0.40, 0.20, 1,
    -0.05, -0.60, 0.20, 1,

    -0.05, -0.40, 0.10, 1,
    -0.05, -0.60, 0.10, 1,
    -0.05, -0.60, 0.20, 1,

    //side view right
    0.05, -0.40, 0.10, 1,
    0.05, -0.40, 0.20, 1,
    0.05, -0.60, 0.20, 1,

    0.05, -0.40, 0.10, 1,
    0.05, -0.60, 0.10, 1,
    0.05, -0.60, 0.20, 1,

    //front view
    -0.05, -0.60, 0.20, 1,
    0.05, -0.60, 0.20, 1,
    -0.05, -0.60, 0.10, 1,

    0.05, -0.60, 0.20, 1,
    0.05, -0.60, 0.10, 1,
    -0.05, -0.60, 0.10, 1,

    //backview
    0.05, -0.40, 0.20, 1,
    -0.05, -0.40, 0.20, 1,
    -0.05, -0.40, 0.10, 1,

    0.05, -0.40, 0.20, 1,
    0.05, -0.40, 0.10, 1,
    -0.05, -0.40, 0.10, 1,

  ];

  for (let i = 0; i < tree_vertices.length; i+=4){
    tree_vertices[i] = tree_vertices[i] * 0.5 - 0.4
    tree_vertices[i+1] = tree_vertices[i+1] * 0.5 + 0.3
    tree_vertices[i+2] = tree_vertices[i+2] * 0.5 + 0.8
    // tree_vertices[i+2] = tree_vertices[i+2] > 0 ? 0.4 : 0.3
  }

  function forest(
    {
      gl,
      aPositionPointer,
      colorLocation,
    }){
    var treeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,treeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(tree_vertices),gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.bindBuffer(gl.ARRAY_BUFFER,treeBuffer);
    gl.vertexAttribPointer(aPositionPointer,4,gl.FLOAT,false,0,0);
    //Enable assignment
    gl.enableVertexAttribArray(aPositionPointer);

    //trunk
    gl.uniform4f(colorLocation,0.5215,0.3686,0.2588,1.0);
    gl.drawArrays(gl.TRIANGLES,38,6); //top view
    gl.drawArrays(gl.TRIANGLES,44,6); //leftside view 
    gl.drawArrays(gl.TRIANGLES,50,6); //rightside view
    gl.drawArrays(gl.TRIANGLES,56,6); //front view
    gl.drawArrays(gl.TRIANGLES,62,6); //back view
    gl.uniform4f(colorLocation,0.36,0.66,0.02,1.0); //black outline
    gl.drawArrays(gl.LINE_LOOP,0,4); //tree perimeter

    //foliage
    gl.drawArrays(gl.TRIANGLES,4,6); //top view 
    gl.drawArrays(gl.TRIANGLES,10,6); //leftside view 
    gl.drawArrays(gl.TRIANGLES,16,6); //rightside view
    gl.drawArrays(gl.TRIANGLES,22,6); //front view
    gl.drawArrays(gl.TRIANGLES,28,6); //back view


  }