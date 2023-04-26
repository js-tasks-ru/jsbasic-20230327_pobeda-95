function isEmpty(obj) {
  let schedule = {}
  if (null in schedule) {
  return false;}
  else {
  return true;}
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false
```
