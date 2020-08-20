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
    }
    return ans;
  }
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

  for (let i = 0; i < arr.length; i++) {
    result.push(1);
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        result[i] *= arr[j];
      }
    }
  }
  return result;
}

// optimized solution for products
function products2(arr) {
  let results = [];
  for (let i in arr) {
    let arr = arr.splice(i, 1);
    results.push(helper(arr));
  }
  return results;
}

function helper(arr) {
  return arr.reduce((a, b) => a * b, 1);
}

//      USE THIS TO SOLVE 11 AGAIN
// for (int i = 0; i < Myarray.length*Myarray.length; i++) {
//   int row = i / Myarray.length;
//   int col = i % Myarray.length;
//   System.out.println(Myarray[row][col]);
// }

function twoDArray(arr) {
  let zeroRows = [];
  let zeroCols = [];

  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        if (!zeroRows.includes(i))
          zeroRows.push(i);
        if (!zeroCols.includes(j))
          zeroCols.push(j);
      }
    }

  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length; j++)
      if (zeroRows.includes(i) || zeroCols.includes(j))
        arr[i][j] = 0;

  return arr;
}

function stringRotation(strA, strB) {
  if (strA.length !== strB.length)
    return false;

  let matches = [];
  let result = false;

  for (let i = 0; i < strB.length; i++)
    if (strB[i] === strA[0])
      matches.push({
        index: i,
        rotation: true,
      });

  for (let i = 0; i < strA.length; i++) {
    matches.forEach(match => {
      if (match.rotation === true) {
        if (match.index + i >= strA.length)
          match.index = -i;
        if (strA[i] !== strB[match.index + i]) {
          match.rotation = false;
        }
      }
    });
  }

  matches.forEach(match => {
    if (match.rotation)
      result = true;
  });

  return result;
}


function main() {
  // console.log(URLify("tauhida parveen"));
  // console.log(URLify("www.thinkful.com /tauh ida parv een"));
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // console.log(removeAll(arr));

  // let arr2 = [4, 6, -3, 5, -2, 1];
  // console.log(maxSum(arr2));

  // let arr3 = [1, 3, 6, 8, 11];
  // let arr4 = [2, 3, 5, 8, 9, 10];
  // console.log(mergeArray(arr3, arr4));
  // console.log(mergeArray(arr4, arr3));

  // let str = 'Battle of the Vowels: Hawaii vs. Grozny';
  // console.log(removeChar(str, 'aeiou'));


  // console.log(products([1, 3, 9, 4])); //Output:[108, 36, 12, 27]

  // const mat = [
  //   [1, 0, 1, 1, 0],
  //   [0, 1, 1, 1, 0],
  //   [1, 1, 1, 1, 1],
  //   [1, 0, 1, 1, 1],
  //   [1, 1, 1, 1, 1]];
  // console.log(twoDArray(mat));

  console.log(stringRotation('amazon', 'azonam'));

}

main();