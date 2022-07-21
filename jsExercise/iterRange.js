class Range{
    constructor(from,to)
    {
        this.from=from;
        this.to=to;
    }

    [Symbol.iterator](){
        let Nfrom=Math.ceil(this.from);
        let Nto=Math.floor(this.to);
        return {
            [Symbol.iterator](){
                return this;
            },
            next(){
                if(Nfrom<=Nto){
                    return {value:Nfrom++,done:false};
                }
                return {done:true};
            }
        }
    }
}

let j=new Range(-1.2,3);
console.log(...j);
let x=new Range(-7.87,0.2);
let x_iter=x[Symbol.iterator]();
x_iter.next();
console.log(...x_iter);