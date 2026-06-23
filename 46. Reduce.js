const Marks=[75,50,87,96,67,21];

const Maximum=Marks.reduce(getMax);
const Minimum=Marks.reduce(getMin);
console.log(Maximum);
console.log(Minimum);

function getMax(previous,next){
    return Math.max(previous,next);
}

function getMin(previous,next){
    return Math.min(previous,next);
}