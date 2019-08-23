
/**
 * 归并排序merge操作中未改变元素原始位置，是稳定的排序算法
 * 时间复杂度O(nlogn)
 * 空间复杂度为O(n)

 * @export
 * @param {Array<number>} datas
 * @returns
 */
export default function mergeSort(datas: Array<number>) {
  if (!datas || datas.length < 2) return;
  splitArray(datas, 0, datas.length - 1);
}

const splitArray = (datas: Array<number>, startIdx: number, endIdx: number) => {
  // 返回条件
  if (startIdx >= endIdx) return;

  let splitorIdx = Math.floor((startIdx + endIdx) / 2);
  // 分治：递归拆分成组
  splitArray(datas, startIdx, splitorIdx);
  splitArray(datas, splitorIdx + 1, endIdx);
  // 排序后合并
  mergeArray(datas, startIdx, endIdx, splitorIdx);
};

const mergeArray = (
  datas: Array<number>,
  startIdx: number,
  endIdx: number,
  splitorIdx: number
) => {
  const tmpLen=endIdx - startIdx + 1;
  
  const tempArray = new Array(tmpLen);
  let i = startIdx;
  let j = splitorIdx + 1;
  let k = 0;
  while (i <= splitorIdx && j <= endIdx) {
    if (datas[i] <= datas[j]) {
      tempArray[k++] = datas[i++];
    } else {
      tempArray[k++] = datas[j++];
    }
  }
  let restStart = i;
  let restEnd = splitorIdx;

  if (j <= endIdx) {
    restStart = j;
    restEnd = endIdx;
  }
  while (restStart <= restEnd) {
    tempArray[k++] = datas[restStart++];
  }

  for (let idx = 0; idx < tempArray.length; idx++) {
    datas[startIdx + idx] = tempArray[idx];
  }
};
