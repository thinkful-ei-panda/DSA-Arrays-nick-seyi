function URLify(str) {
    return str.replace(/ /g, "%20")
}

function removeAll(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] > 5) {
            ans.push(arr[i])
        }
    }
    return ans
}

function maxSum(arr) {

    let currMax = 0
    let ansMax = 0

    for (let i = 0; i < arr.length; i++) {
        ansMax = ansMax + arr[i]
        if(currMax < ansMax) {
            currMax = ansMax
        }

        if(ansMax < 0) {
            ansMax = 0
        }
    }
    return currMax
}

function mergeArray (lArr,rArr) {
    let ans = []
    let lPtr = 0
    let rPtr = 0

    for (let i = 0; i < lArr.length + rArr.length; i++) {
        if (lArr[lPtr] <= rArr[rPtr] || (typeof rArr[rPtr] === 'undefined')){
            ans.push(lArr[lPtr])
            lPtr += 1
        } else if((lArr[lPtr] > rArr[rPtr]) || (typeof lArr[lPtr] === 'undefined') ) {
            ans.push(rArr[rPtr])
            rPtr += 1
        } else {
//&& !(rPtr >= rArr.length)
        }
    }
    return ans

}

function removeChar(str, rmv) {
    
    for (let i = 0; i < rmv.length; i++) {
        let regex = new RegExp(rmv[i],"g")
        str = str.replace(regex,"")
    }
    return str

}

function main() {
    console.log(URLify("tauhida parveen"))
    console.log(URLify("www.thinkful.com /tauh ida parv een"))
    let arr = [1,2,3,4,5,6,7,8,9,10]
    console.log(removeAll(arr))

    let arr2 = [4, 6, -3, 5, -2, 1]
    console.log(maxSum(arr2))

    let arr3 = [1, 3, 6, 8, 11]
    let arr4 = [2, 3, 5, 8, 9, 10]
    console.log(mergeArray(arr3,arr4))
    console.log(mergeArray(arr4,arr3))

    let str = 'Battle of the Vowels: Hawaii vs. Grozny'
    console.log(removeChar(str,'aeiou'))



}

main()