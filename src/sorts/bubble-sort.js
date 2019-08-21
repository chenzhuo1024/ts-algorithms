"use strict";
exports.__esModule = true;
/**
 * 冒泡排序是一个原地排序算法，只需要常量级存储空间，空间复杂度为O(1)
 * 相等元素不交换，稳定的排序算法
 * 最好情况时间复杂度O(n) 比较n次，交换0次
 * 最坏情况时间复杂度O(n²)
 * 平均时间复杂度O(n²) 交换次数为逆序度
 * @export
 * @param {Array<number>} datas
 * @returns
 */
function bubbleSort(datas) {
    if (!datas || datas.length < 1)
        return;
    var aLens = datas.length;
    for (var i = 0; i < aLens; i++) {
        var hasChanged = false; // 交换标识
        for (var j = 0; j < aLens - i - 1; j++) {
            if (datas[j] > datas[j + 1]) {
                var temp = datas[j];
                datas[j] = datas[j + 1];
                datas[j + 1] = temp;
                hasChanged = true;
            }
        }
        if (!hasChanged) {
            break;
        }
    }
}
exports.bubbleSort = bubbleSort;
function insertSort(datas) {
    if (!datas || datas.length <= 1)
        return;
    var aLens = datas.length;
    for (var i = 1; i < aLens; i++) {
        var curElem = datas[i]; // 当前要比较的元素
        var j = i - 1;
        for (; j >= 0; j--) {
            if (curElem < datas[j]) {
                // 向后移动
                datas[j + 1] = datas[j];
            }
            else {
                break;
            }
        }
        datas[j + 1] = curElem;
    }
}
exports.insertSort = insertSort;
