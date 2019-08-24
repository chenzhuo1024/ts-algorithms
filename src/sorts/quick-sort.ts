
/**
 *快速排序是一种原地不稳定排序算法
 * 分组已经有序的情况下，会导致分区的不均衡，时间复杂度会退化为O(n²)
 * 平均时间复杂度为O(nlogn)
 * @export
 * @param {Array<number>} datas
 * @returns
 */
export default function quickSort(datas: Array<number>) {
  if (!datas || datas.length < 2) return;
  quickSortImpl(datas, 0, datas.length - 1);
}
const quickSortImpl = (
  datas: Array<number>,
  startIdx: number,
  endIdx: number
) => {
  if (startIdx >= endIdx) return;

  // 计算pivot点
  const pivotIdx = partitionByLastEle(datas, startIdx, endIdx);
  quickSortImpl(datas,startIdx,pivotIdx-1);
  quickSortImpl(datas,pivotIdx+1,endIdx);

};

const partitionByLastEle = (
  datas: Array<number>,
  startIdx: number,
  endIdx: number
) => {
  const partitionVal = datas[endIdx];
  let j = startIdx; // j 之前的元素都比partitionVal小
  for (let i = startIdx; i < endIdx; i++) {
    // 如果当前i元素比partitionVal 小, 交换当前元素和j所指向元素，使j之前的元素都比partitionVal小
    if (datas[i] < partitionVal) {
      // swap
      const temp = datas[i];
      datas[i]=datas[j];
      datas[j] = temp;
      j++;
    }
  }

  datas[endIdx]=datas[j];
  datas[j]=partitionVal;
  return j;
};
