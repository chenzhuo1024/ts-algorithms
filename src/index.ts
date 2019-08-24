import  bubbleSort from "./sorts/bubble-sort";
import insertSort from './sorts/insertion-sort';
import  selectionSort  from "./sorts/selection-sort";
import mergeSort from "./sorts/merge-sort"
import quickSort from "./sorts/quick-sort"
const testCase=[4,5,6,1,2,3];


//bubbleSort(testCase);
//insertSort(testCase);
//selectionSort(testCase)

quickSort(testCase);
console.log(testCase); 

