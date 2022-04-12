//2a

const soldTvs = inventory.map((tv)=>{
    return tv.originalStock - tv.sold;
});
const sumSold = soldTvs.reduce((a,b)=>a+b);
// console.log(sumSold);

//2b.
const opdracht2b = document.getElementById("opdracht2b");
opdracht2b.textContent = `Aantal verkochte tv's is: ${sumSold}` ;
console.log(opdracht2b);

//2c.
const stock = inventory.map((stock)=>{
    return stock.originalStock;

});
const totalBoughtTVs = stock.reduce((a,b)=>a+b);
console.log(totalBoughtTVs);

//2d.
const opdracht2d = document.getElementById("opdracht2d");
opdracht2d.textContent = `Aantal verkochte tv's is: ${sumSold}` ;

//2e
const opdracht2e = document.getElementById("opdracht2e");
opdracht2e.textContent = `Aantal voorraad tv's is: ${totalBoughtTVs}` ;