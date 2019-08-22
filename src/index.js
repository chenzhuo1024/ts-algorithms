"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var selection_sort_1 = __importDefault(require("./sorts/selection-sort"));
var testCase = [4, 5, 6, 1, 2, 3];
//bubbleSort(testCase);
//insertSort(testCase);
selection_sort_1.default(testCase);
console.log(testCase);
