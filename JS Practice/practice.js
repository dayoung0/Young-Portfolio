function bubbleSort(arr){

    let n = arr.length;

    for(var i=0;i<n-1;i++){

        for(j=0;j< n-i-1;j++){

            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp; 
                
            }

        }


    }
    return arr;
}
var arr = [2,3,8,9,4];
console.log(bubbleSort(arr));
