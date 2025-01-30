var map = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++){
        result.push(fn(arr[i], i))
    }
    return result
}

var map = (arr, fn) => {
    return arr.map(fn)
}