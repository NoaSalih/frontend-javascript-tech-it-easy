
//1a.
const TvNames = inventory.map((tvName)=>{
    return tvName.name;
})
console.log(TvNames);

//1b.

const soldOut = inventory.filter((soldOut)=>{
    if (soldOut.originalStock - soldOut.sold === 0)

    return soldOut;
});

console.log(soldOut);

//1c.
const tvAmbilight = inventory.filter((ambilight)=>{ if (ambilight.options.ambiLight === true)
    return ambilight;

});
console.log(tvAmbilight);

//1d.
const sortTVsPrice = inventory.sort
((a ,b)=> a.price - b.price);
console.log(sortTVsPrice);