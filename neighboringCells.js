let center = 1; 
let isLive = false;
let neighbors

const grid = []


 let cellOneObj= {
    row: center - 1, 
    col: center - 1,
    living: isLive
   }
grid.push(cellOneObj)

let cellTwoObj= {
    row: center - 1, 
    col: center,
    living: isLive
    }
grid.push(cellTwoObj)


let cellThreeObj= {
    row: center-1, 
    col: center+1,
    living: isLive
    }
grid.push(cellThreeObj)

let cellFourObj= {
    row: center, 
    col: center-1,
    living: isLive
    }
grid.push(cellFourObj)

let cellFiveObj= {
    row: center, 
    col: center,
    living: isLive
    }
grid.push(cellFiveObj)

    
let cellSixObj= {
    row: center, 
    col: center+1,
    living: isLive
    }
grid.push(cellSixObj)


let cellSevenObj= {
    row: center +1, 
    col: center-1,
    living: isLive
    }
grid.push(cellSevenObj)

let cellEightObj= {
    row: center +1, 
    col: center,
    living: isLive
    }
grid.push(cellEightObj)

let cellNineObj= {
    row: center +1, 
    col: center+1,
    living: isLive
    }
grid.push(cellNineObj)



console.log(cellOneObj)
console.log(grid)






