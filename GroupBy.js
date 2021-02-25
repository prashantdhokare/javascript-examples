var groupBy = function(xs, key1, key2) {
  return xs.reduce(function(rv, x) {
     if(!x[key]) {
         (rv["parent"] = rv["parent"] || []).push(x[key2]);
     }
      else {
         (rv[x[key1]] = rv[x[key1]] || []).push(x[key1]);
      }
    
    return rv;
  }, {});
};

//{1: Array(2), 6: Array(1), 11: Array(2), 17: Array(3), parent: Array(2)}
//1: (2) [1, 1]
//6: [6]
//11: (2) [11, 11]
//17: (3) [17, 17, 17]
//parent: (2) [1, 17]
