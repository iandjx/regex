// whatever is inside the parentheses is a captured group
// https://dev.to/admitkard/regexp-cheatsheet-to-speed-up-code-editing-and-refactor-d2d
// 12312x12312, 1231x12412
// group 1 123213
// group 2 1237
const a = /(0-9+)x(0-9)+/;

//ian dejesus, chris hraha
const b = /([a-zA-Z]+)\s([a-zA-Z]+)/;

// 7:12, 12:23
// group 1 7
// group 2 12
// const c = /[(0-9]{1,2}:(0-9]{1,2}/

// 123.142.1234
// group 1 1234
const d = /[0-9{3}.[0-9]{3}.([0-9]{4})]/;

// jan 12 1987
// group 1 jan
// grp 2 12
// grp 3 87
const e = /([a-zA-Z]{3})\s([0-9]{1,2})[a-z]{2}\s[0-9]{2}([0-9]{2})/;

// (822).213.1421
// grp 1 822
// grp 2 213.1421
const f = /\(([0-9]{3}\)) (\.[0-9]{3}\.[0-9]{4})/;

// ian.dejesus.md@gmail.com
const g = /([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]{2,3}) /;
