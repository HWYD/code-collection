const insertSort = (arr) =>{
  for(let i =1 ; i<arr.length;i++){
    const temp = arr[i]
    let j = i
    while (j>0) {
      if(arr[j-1]>temp){
        arr[j] = arr[j-1]
      }else{
        break
      }
      j--
    }
    arr[j] = temp
  }
  return arr
}


let testArr = [2, 5, 7, 2, 10, 9, 1, 2, 3, 8, 2, 1]

console.log(insertSort(testArr))