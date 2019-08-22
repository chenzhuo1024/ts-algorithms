
/**
 * 选择排序是原地排序算法
 * 由于每次都要找最值进行交换，所以破坏了稳定性
 * 最好，最坏和平均时间复杂度都为O(n²)  交换次数为逆序度
 * @export
 * @param {Array<number>} datas
 * @returns
 */
export default function selectionSort(datas: Array<number>){
  if (!datas || datas.length <2) return;
  const aLens = datas.length;

  for(let i = 0;i<aLens-1;i++){
    let minIndex=i+1;
    for( let j =i+1;j<aLens;j++){
      if(datas[j]<datas[minIndex]){
        minIndex=j;
      }
    }
    // swap
    if(datas[i]>datas[minIndex]){
      let temp= datas[i];
      datas[i]=datas[minIndex];
      datas[minIndex]=temp;
    }
  }
}