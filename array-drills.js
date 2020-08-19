function URLify(str) {
    return str.replace(/ /g, "%20")
}

function removeAll(arr) {
    let ans = arr
    for (let i = 0; i < arr.length - 1; i++ ) {
        if (arr[i +1] < 5) {
            ans = arr.splice(1,i)
        }
    }
    return ans
}

function main() {
    console.log(URLify("tauhida parveen"))
    console.log(URLify("www.thinkful.com /tauh ida parv een"))
    let arr = [1,2,3,4,5,6,7,8,9,10]
    console.log(removeAll(arr))

}

main()