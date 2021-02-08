function get(obj, path, defaultValue) {
  let pathArray = path.split('.');
  let objectval = undefined;
  let prevVal = null;
  let finalObject = null;
  for (let i = 0; i < pathArray.length; i += 1) {
    if (prevVal !== null) {
        finalObject = prevVal;
    } else {
        finalObject = obj;
    }
    finalObject.hasOwnProperty(pathArray[i]) ? objectval = finalObject[pathArray[i]] : objectval = undefined;
    if (objectval === undefined) {
        break;
    } else {
        prevVal = objectval;
    }
  }
  if ((!objectval) && (defaultValue)) {
    return defaultValue;
  }
  return objectval;
}
const obj = { 
  a: { 
    b: { 
      c: 'd' 
    },
    e: 'f'
  }
};

console.log(get(obj, 'a.b'));   // { c : 'd' }
console.log(get(obj, 'a.b.c')); // 'd'
console.log(get(obj, 'a.e'));   // 'f'
console.log(get(obj, 'a.x.e')); // undefined
console.log(get(obj, 'a.x.e', true)); // true
console.log(get(obj, 'a.x.e', 'My default value')); // My default value