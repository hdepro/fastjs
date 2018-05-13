export function indexOf (arr, ele) {
    const {length} = arr;
    for (let i=0; i<length; i++){
        if (arr[i] === ele) {
            return ele;
        }
    }
    return -1;
}