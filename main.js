
//outer loop
for (var a = 0; a <= 8; a++) {
  var line = "";

  //inner loop
  //a & i are loop iterators
  for (var i = 0; i <=8; i++) {
    var total = a + i;
    // console.log("total ", total);
    //   console.log("i ", i);
    //   console.log("a ", a);
    if (total%2===0){
      line+=" "
    }
    else{
      line+="#"
    }
 }
  console.log(line);
}
