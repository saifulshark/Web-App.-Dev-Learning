//by for in loop we can get access of directly to the object like for in loop(but in for in loop we can't get the value of the object))
const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by apple"
}

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}
