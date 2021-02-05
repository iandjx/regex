//zero or more occurences of a
const allA = /a*/

// select foo then all characters then bar at the end
const b = /foo.*bar/

// select foo then any whitespace then bar at the end
// foo bar
const c = /foo\s*bar/

// select any char in fcplb then oo
// poo, foo
const d =/[fcplb]oo/

// select any cchar no in mh then oo
// poo, foo
const e = /[^mh]oo/

//select any char from a to d then oo
// boo, coo, doo
const f = /[a-d]oo/

// select any char from a to d or z then oo
// zoo
const g= /[a-dz]oo/

// select 0-n x then a . then 0-n y 
//  \ is a escape character
// xxxx.yyy
const h= /x*\.y*/

// x#y
const i= /x[#:.]y/

// x then  # or \ or ^  then y
// x\y
const j = /x[#\\\^]y/

// start of the line then foo then any chars
// fooasdasd, foobarrrr
const k = /^foo.*/

// end of the string should be bar
// asjkdjkasdkbar
const l =/.*bar$/

// foo is beginning and end
// foo
const m = /^foo$/