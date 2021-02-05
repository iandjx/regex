// 012, 011
const a = /[0-3][0-3][0-3]/

// 3123,1413,1412,6542
// {} is for number of repeats
const b = /^[0-9]{4}/

// asdlk,asda,asdasa
const c = /^[a-z]{4,6}$/

// hahahaha, hahahahahahah
const d = /(ha){4,}/

// haha, ha
const e = /(ha){,2}/

//fooaaaaabar, fooaabar
const f = /fooa+bar/

// logwood, plywood
const n = /(log|ply)wood/

// x then  # or \ or ^  then y
// x\y
const j = /x[#\\\^]y/

// https://website, http://website
// ? 0 -1 occurence
const k = /https?:\/\/website/

// start of the line then foo then any chars
// fooasdasd, foobarrrr
const k = /^foo.*/

// end of the string should be bar
// asjkdjkasdkbar
const l =/.*bar$/

// foo is beginning and end
// foo
const m = /^foo$/



const t = "t=8917389123,le="
const asd = /^t=[0-9]+/