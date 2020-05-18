/**
 * MERGE SORT
 */
export const mergeSortAnimation = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  const arrCopy = array.slice();
  mergeSort(array, 0, array.length - 1, arrCopy, animations);
  return animations;
};

const mergeSort = (mainArr, start, end, arrCopy, animations) => {
  if (start === end) return;
  const middle = Math.floor((start + end) / 2);
  // console.log("ANIMATIONS ~", animations);
  mergeSort(arrCopy, start, middle, mainArr, animations);
  mergeSort(arrCopy, middle + 1, end, mainArr, animations);
  doMerge(mainArr, start, middle, end, arrCopy, animations);
};

const doMerge = (mainArr, start, middle, end, arrCopy, animations) => {
  let k = start;
  let i = start;
  let j = middle + 1;
  while (i <= middle && j <= end) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (arrCopy[i] <= arrCopy[j]) {
      animations.push([k, arrCopy[i]]);
      mainArr[k++] = arrCopy[i++];
    } else {
      animations.push([k, arrCopy[j]]);
      mainArr[k++] = arrCopy[j++];
    }
  }
  while (i <= middle) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, arrCopy[i]]);
    mainArr[k++] = arrCopy[i++];
  }
  while (j <= end) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, arrCopy[j]]);
    mainArr[k++] = arrCopy[j++];
  }
};
