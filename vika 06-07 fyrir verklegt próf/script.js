const Destination = "Osló"
const Days = 5
const CostPerDay = 24000
const hasDiscount = true

const totalCost = Days * CostPerDay

if (hasDiscount === true) {
    const discount = totalCost * 0.9
}

console.log("Áfangastaður: " + Destination)
console.log("Lokakostnaður: " + totalCost )

if(totalCost > 100000) {
    console.log("Dýr ferð");
} else {
    console.log("Innan fjárhags");
}