function binarySearch(array,key){
    let start = 0;
    let end = array.length - 1;
    while(start <= end){
        let middle = Math.floor((start + end)/2);
        if(array[middle] === key) {
            return middle;
        }
        else if(array[middle] < key){
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,8,4,7,2,6,9],9));
