var personList = [
{"id":1,"parentId":undefined},
{"id":2,"parentId":1},
{"id":3,"parentId":1},
{"id":4,"parentId":5},
{"id":12,"parentId":11},
{"id":13,"parentId":11},
{"id":14,"parentId":17},
{"id":15,"parentId":17},
{"id":16,"parentId":18},
{"id":17,"parentId":null},
];

//This function group elements by given property
var groupBy = function(list, key1, key2) {
  return list.reduce(function(newGroupByObj, obj) {
    if(!obj[key1]) {
        (newGroupByObj["parent"] = newGroupByObj["parent"] || []).push(obj[key2]);
    }
    else {
      (newGroupByObj[obj[key1]] = newGroupByObj[obj[key1]] || []).push(obj[key2]);
    }
   return newGroupByObj;
 }, {});
};

var groupedArray = groupBy(personList, "parentId", "id");

console.log(groupedArray);

/*
Output:
  {1: Array(2), 5: Array(1), 11: Array(2), 17: Array(2), 18: Array(1), parent: Array(2)}
  1: (2) [2, 3]
  5: [4]
  11: (2) [12, 13]
  17: (2) [14, 15]
  18: [16]
  parent: (2) [1, 17]
*/
