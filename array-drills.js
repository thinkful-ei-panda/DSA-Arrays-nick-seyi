function URLify(str) {
  return str.replace(/ /g, "%20");
}

function removeAll(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

function maxSum(arr) {

  let currMax = 0;
  let ansMax = 0;

  for (let i = 0; i < arr.length; i++) {
    ansMax = ansMax + arr[i];
    if (currMax < ansMax) {
      currMax = ansMax;
    }

    if (ansMax < 0) {
      ansMax = 0;
    }
  }
  return currMax;
}

function mergeArray(lArr, rArr) {
  let ans = [];
  let lPtr = 0;
  let rPtr = 0;

  for (let i = 0; i < lArr.length + rArr.length; i++) {
    if (lArr[lPtr] <= rArr[rPtr] || (typeof rArr[rPtr] === 'undefined')) {
      ans.push(lArr[lPtr]);
      lPtr += 1;
    } else if ((lArr[lPtr] > rArr[rPtr]) || (typeof lArr[lPtr] === 'undefined')) {
      ans.push(rArr[rPtr]);
      rPtr += 1;
    } else {
      //&& !(rPtr >= rArr.length)
    }
  }
  return ans;

}

function removeChar(str, rmv) {

  for (let i = 0; i < rmv.length; i++) {
    let regex = new RegExp(rmv[i], "g");
    str = str.replace(regex, "");
  }
  return str;

}

function products(arr) {
  let result = [];
  let count = 0
  let track = 0
  let trace = 0
  let acc = 1

  while (count < arr.length * (arr.length + 1)) {
      console.log(count)
    if (track === arr.length) {
        result[trace] = acc
        track = 0
        trace += 1
        acc = 1
    }
    if (trace !== track) {
        acc *= arr[track]
      }
      track += 1
      count +=1
  }
  return result;
}


function twoD(arr) {
    let firstRow = false
    let row = arr.length
    let col = arr[0].length

    for (let i = 0; i < col; i++) {
        if (arr[0][i] === 0)
        firstRow = true
    }

    for (let r=0; r<row; r++){
        for (let c=0; c<col; c++){
            if (arr[r][c] == 0)
                arr[0][c] = 0;
        }
    }
    for (let r=1; r<row; r++){
        let rowZero = false;
        for (let c=0; c<col; c++){
            if (arr[r][c] == 0)
                rowZero = true;
        }
        for (let c=0; c<col; c++){
            if (rowZero || arr[0][c] == 0)
                arr[r][c] = 0;
        }
    }
    for (let c=0; c<col; c++){
        if (firstRow)
            arr[0][c] = 0;
    }
    return arr
}

function isRotation(str1,str2) {
    return (str1.length == str2.length && ((str1 + str1).indexOf(str2) != -1))
}

function main() {
  console.log(URLify("tauhida parveen"));
  console.log(URLify("www.thinkful.com /tauh ida parv een"));
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(removeAll(arr));

  let arr2 = [4, 6, -3, 5, -2, 1];
  console.log(maxSum(arr2));

  let arr3 = [1, 3, 6, 8, 11];
  let arr4 = [2, 3, 5, 8, 9, 10];
  console.log(mergeArray(arr3, arr4));
  console.log(mergeArray(arr4, arr3));

  let str = 'Battle of the Vowels: Hawaii vs. Grozny';
  console.log(removeChar(str, 'aeiou'));


  console.log(products([1, 3, 9, 4])); //Output:[108, 36, 12, 27]
  console.log(products([4, 9, 3, 1,2]));

  console.log(twoD([[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]))

    console.log(isRotation("amazon", "azonam"))
    console.log(isRotation("amazon", "azonma"))

}

main();