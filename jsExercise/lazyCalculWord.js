function GetIterWordFromString(str){
    let emptyRex=/\s+|$/g;
    emptyRex.lastIndex=str.match(/[^\s]/).index;
    return {
        [Symbol.iterator](){return this},
        next(){
            let from=emptyRex.lastIndex;
            let match=emptyRex.exec(str);
            if(from<str.length){
            if(match){
                return {value:str.substring(from,match.index)};
            }
        }
            return {done:true};
        }      
    }
}

let vt=GetIterWordFromString("  fenu.e fuck  sb    nx   hh!");
console.log(...vt);
let kod=GetIterWordFromString("  fenu.e fuck  sb    nx   hh!");
console.log(kod.next());
console.log(kod.next());
console.log(kod.next());
console.log(kod.next());
console.log(kod.next());
console.log(kod.next());