# rxRepo

The software depends on the JavaScript Set cell object passed into surroundingSet function to return the number of neighbors of the selected cell.  


let cellObj = cellOneObj;  SpecificCellsNeighbors.js Line 128   
-Sets grid unit, known as cellObj.
-User selects one value cellOneObj,cellTwoObj,cellThreeObj,cellFourObj,cellFiveObj, cellSixObj,cellSevenObj,cellEightObj, or cellNineObj
   

let neighborSet= new Set(neighbors['five']);     NeighboringCells.js line 121  
Obtains the neighbors around cellFiveObj
Creates a JavaScript Set hold the surrounding neighbor cell objects regardless of whether it they alive cells or not. 

   

surroundingSet()   NeighboringCells.js  124- 137  SpecificCellsNeighbors.js Lines 140-154
Returns the number of live cell neighbors
The method iterates through each cell in neighborSet 
Function increments the number of neigbor when currrent iteration cell is...
      a. alive
      b. and has not already been counted



