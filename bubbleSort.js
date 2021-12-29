function bubbleSort(inputArr){
    let n = inputArr.length;
    let sorted = false;

    for(let i = 0; i < n; i++){
        for(let i = 0; i < n; i++){
            
            if(inputArr[i] > inputArr[i+1]){
                let t = inputArr[i];
                inputArr[i] = inputArr[i+1];
                inputArr[i+1] = t;
                
            }
        }
    }
    return inputArr;
}
console.log(bubbleSort([1,65,23,87,5,3,6]));