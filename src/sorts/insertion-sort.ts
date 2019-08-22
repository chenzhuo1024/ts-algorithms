/**
 * 插入排序是一个原地排序算法，只需要常量级存储空间，空间复杂度为O(1)
 * 相等元素不交换，稳定的排序算法
 * 最好情况时间复杂度O(n)
 * 最坏情况时间复杂度O(n²)
 * 平均时间复杂度O(n²)
 * @export
 * @param {Array<number>} datas
 * @returns
 */
export default function insertSort(datas: Array<number>) {
  if (!datas || datas.length <= 1) return;
  const aLens = datas.length;
  for (let i = 1; i < aLens; i++) {
    const curElem = datas[i]; // 当前要比较的元素
    let j = i - 1;
    for (; j >= 0; j--) {
      if (curElem < datas[j]) {
        // 向后移动
        datas[j + 1] = datas[j];
      } else {
        break;
      }
    }
    datas[j + 1] = curElem;
  }
}