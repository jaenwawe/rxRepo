let center = 1; 
let isLive = false;
let neighbors

const grid = []


 let cellOneObj= {
    row: center - 1, 
    col: center - 1,
    living: isLive,
    selected:false
   }
grid.push(cellOneObj)

let cellTwoObj= {
    row: center - 1, 
    col: center,
    living: isLive,
    selected:false
    }
grid.push(cellTwoObj)


let cellThreeObj= {
    row: center-1, 
    col: center+1,
    living:true,
    selected:false
    }
grid.push(cellThreeObj)

let cellFourObj= {
    row: center, 
    col: center-1,
    living: isLive,
    selected:false
    }
grid.push(cellFourObj)

let cellFiveObj= {
    row: center, 
    col: center,
    living: isLive,
    selected:false
    }
grid.push(cellFiveObj)

    
let cellSixObj= {
    row: center, 
    col: center+1,
    living: true,
    selected:false
    }
grid.push(cellSixObj)


let cellSevenObj= {
    row: center +1, 
    col: center-1,
    living: true,
    selected:false
    }
grid.push(cellSevenObj)

let cellEightObj= {
    row: center +1, 
    col: center,
    living: true,
    selected:false
    }
grid.push(cellEightObj)

let cellNineObj= {
    row: center +1, 
    col: center+1,
    living: true,
    selected:false
    }
grid.push(cellNineObj)

let neighborCount = 0;
for (cell of grid) {
    let above = (cell.row=== center && cell.col=== center+1) 
    let below = (cell.row=== center && cell.col=== center+1)
    let rightRow = cell.row=== (center-1)
    let leftRow =  cell.row=== (center+1)


    if(rightRow && cell.living==true && cell.selected==false) {
        neighborCount+=1;
        cell.selected=true;
    
    }
    if(leftRow && cell.living==true && cell.selected==false) {
        neighborCount+=1;
        cell.selected=true;
    
    }
    if((above || below) && (cell.living==true && cell.selected==false)) {
        neighborCount+=1;
        cell.selected=true;
    }
}



console.log('neighborCount =' + neighborCount)
console.log(cellOneObj)
console.log(grid)


    // && cell.col===0) && cell.living === true && cell.selected === false) 
    // neighborCount+=1;
    // console.log(cell)


//if((cell.row=== (0) && cell.col===0) && cell.living === true && cell.selected === false) 

