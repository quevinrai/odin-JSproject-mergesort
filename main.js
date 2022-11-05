function mergeSort(arr) {
    if (arr.length - 1 <= 0) return arr;
   
    let l = 0;
    let r = arr.length - 1;
    let m = l + Math.floor((r - l) / 2);
    
    let leftArr = arr.slice(l, m + 1);
    let rightArr = arr.slice(m + 1);
    
    leftArr = mergeSort(leftArr);
    rightArr = mergeSort(rightArr);
    arr = merge(leftArr, rightArr);
    
    return arr;
  }
  
  function merge(leftArr, rightArr) {
    let tempArr = [];
    let leftLength = leftArr.length - 1;
    let rightLength = rightArr.length - 1;
    
    for(i = 0; i <= leftLength; i++) {
      for (j = 0; j <= rightLength; j++) {
        if (leftArr[i] !== "" && rightArr[j] !== "") {
          if (leftArr[i] <= rightArr[j]) { tempArr.push(leftArr[i]); leftArr[i] = ""; break; }
          else { tempArr.push(rightArr[j]); rightArr[j] = ""; }
        }
      }
      
      if (checkIfEmpty(leftArr)) {
        tempArr.push(...rightArr.filter(num => num != ""));
        break;
      }
      
      else if (checkIfEmpty(rightArr)) {
        tempArr.push(...leftArr.filter(num => num != ""));
        break;
      }
    }
  
    return tempArr;
  }
  
  function checkIfEmpty(arr) {
    let check = false;
    
    for(a = 0; a <= arr.length - 1; a++) {
      if (arr[a] === "") check = true;
      else check = false;
    }
    
    return check;
  }
  
  /****************************************************************/
  
  const arrNum = [10, 1, 7, 3, 5, 2, 6];
  
  console.log(mergeSort(arrNum));