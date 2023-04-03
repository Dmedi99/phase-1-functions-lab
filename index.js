function distanceFromHqInBlocks(blocks){
    let distanceInBlocks = Math.abs(42 - blocks)
    return distanceInBlocks
}

function distanceFromHqInFeet(blocks){
    let distanceInFeet =  distanceFromHqInBlocks(blocks) * 264
    return distanceInFeet
}

function distanceTravelledInFeet(start, destination){
 let distanceInFeet = Math.abs(start - destination) * 264 
 return distanceInFeet
}

function calculatesFarePrice(start, destination){
 let fareDistance = distanceTravelledInFeet(start, destination)
 if(fareDistance <= 400){
    return 0
 }
 if(fareDistance > 400 && fareDistance <= 2000){
    let fareCalculation = fareDistance - 400 
    return fareCalculation * 0.02
 }
 if(fareDistance > 2000 && fareDistance <= 2500){
    return 25
 }
 if(fareDistance > 2500){
    return `cannot travel that far`
 }
}