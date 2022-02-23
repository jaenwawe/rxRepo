let center = 1; 
let isLive = false;
let  isChecked = false;

let noCellObj = null;
let cellOneObj = null;
let cellTwoObj= null;
let cellThreeObj=null;
let cellFourObj = null;
let cellFiveObj = null;
let cellSixObj = null;
let cellSevenObj= null;
let cellEightObj = null;
let cellNineObj = null;

const grid = new Set();

noCellObj= {
    gridNumber: "0",
    row: null,
    col: null,
    living: false,
    isSelected:false
    }
cellOneObj = {
    gridNumber: "one",
    row: center - 1, 
    col: center - 1,
    living: true,
    isSelected: isChecked
    }
grid.add(cellOneObj)



cellTwoObj= {
    gridNumber: "two",
    row: center - 1, 
    col: center,
    living: true,
    isSelected: false
    }
grid.add(cellTwoObj)

cellThreeObj= {
    gridNumber: "three",
    row: center-1, 
    col: center+1,
    living:true,
    isSelected: isChecked
    }
grid.add(cellThreeObj)


cellFourObj= {
    gridNumber: "four",
    row: center, 
    col: center-1,
    living: isLive,
    isSelected: true
    }
grid.add(cellFourObj)

cellFiveObj= {
    gridNumber: "five",
    row: center, 
    col: center,
    living: isLive,
    isSelected: isChecked
    }
grid.add(cellFiveObj)

    
cellSixObj= {
    gridNumber: "six",
    row: center, 
    col: center+1,
    living: isLive,
    isSelected: isChecked
    }
grid.add(cellSixObj)


cellSevenObj= {
    gridNumber: "seven",
    row: center +1, 
    col: center-1,
    living: isLive,
    isSelected: isChecked
    }
grid.add(cellSevenObj)

cellEightObj= {
    gridNumber: "eight",
    row: center +1, 
    col: center,
    living: isLive,
    isSelected: isChecked
    }
grid.add(cellEightObj)

cellNineObj= {
    gridNumber: "nine",
    row: center +1, 
    col: center+1,
    living: isLive,
    isSelected: isChecked
    }
grid.add(cellNineObj)



let neighbor=0;
const neighbors = {
    five :[cellOneObj,cellTwoObj,cellThreeObj,cellFourObj,cellSixObj,cellSevenObj,cellEightObj,cellNineObj]
}


let gridSet = new Set()
gridSet.add(cellFiveObj)
let aroundSet= new Set();


const surroundingSet=()=>{
    let aliveNeighborSet = null;
    neighbors['five'].forEach((cell) =>{
        const { gridNumber, row , col, living, isSelected} = cell
        if(isSelected || !living){
          neighborSet.delete(cell)  
    
        } else{
            neighbor++;
            cell.isSelected = true;
        }
    })
    return neighbor;
} 
console.log(surroundingSet())



