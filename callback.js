function array(arr, callback) {
    arr.push(100);
    callback();
  }
  
  var arr = [1, 2, 3, 4, 5];
  
  array(arr, function() {
    console.log("array has been modified", arr);
  });