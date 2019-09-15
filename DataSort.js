function Text2Array(){
	
	var st = document.getElementById("arrayinputdata").value;
	var intarray = st.split(',').map(function(item) {
    return parseInt(item, 10);});
    
	document.getElementById("arrayinputdata").value = "";
	var mergearray = intarray;
	var bubblearray = intarray;
	var selectionarray = intarray;
	var insertionarray = intarray;
	var heaparray = intarray;
	var quickarray = intarray;
	
	
	var tm0 = performance.now();
	document.getElementById("merged").innerHTML = mergeSort(mergearray);
	var tm1 = performance.now();
	document.getElementById("merget").innerHTML = (tm1 - tm0)+"ms";
	
	var tb0 = performance.now();
	document.getElementById("bubbled").innerHTML = bubbleSort(bubblearray);
	var tb1 = performance.now();
	document.getElementById("bubblet").innerHTML = (tb1 - tb0)+"ms";
	
	var ts0 = performance.now();
	document.getElementById("selectiond").innerHTML = selectionSort(selectionarray);
	var ts1 = performance.now();
	document.getElementById("selectiont").innerHTML = (ts1 - ts0)+"ms";
	
	var ti0 = performance.now();
	document.getElementById("insertiond").innerHTML = insertionSort(insertionarray);
	var ti1 = performance.now();
	document.getElementById("insertiont").innerHTML = (ti1 - ti0)+"ms";
	
	var th0 = performance.now();
	document.getElementById("heapd").innerHTML = heapSort(selectionarray);
	var th1 = performance.now();
	document.getElementById("heapt").innerHTML = (th1 - th0)+"ms";
	
	var tq0 = performance.now();
	document.getElementById("quickd").innerHTML = quickSort(quickarray,0,quickarray.length - 1);
	var tq1 = performance.now();
	document.getElementById("quickt").innerHTML = (tq1 - tq0)+"ms";
}
function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
function heapSort(arr){
  var len = arr.length,
      end = len-1;

  heapify(arr, len);
  
  while(end > 0){
   swap1(arr, end--, 0);
   siftDown(arr, 0, end);
  }
  return arr;
}
function heapify(arr, len){
   // break the array into root + two sides, to create tree (heap)
   var mid = Math.floor((len-2)/2);
   while(mid >= 0){
    siftDown(arr, mid--, len-1);    
  }
}
function siftDown(arr, start, end){
   var root = start,
       child = root*2 + 1,
       toSwap = root;
   while(child <= end){
      if(arr[toSwap] < arr[child]){
        swap1(arr, toSwap, child);
      }
      if(child+1 <= end && arr[toSwap] < arr[child+1]){
        swap1(arr, toSwap, child+1)
      }
      if(toSwap != root){
         swap1(arr, root, toSwap);
         root = toSwap;
      }
      else{
         return; 
      }
      toSwap = root;
      child = root*2+1
  }
}
function swap1(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
function insertionSort(array) {
  var length = array.length;
  
  for(var i = 1, j; i < length; i++) {
    var temp = array[i];
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  
  return array;
}
function mergeSort(arr){
   var len = arr.length;
   if(len <2)
      return arr;
   var mid = Math.floor(len/2),
       left = arr.slice(0,mid),
       right = arr.slice(mid);
   return merge(mergeSort(left),mergeSort(right));
}
function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}
function selectionSort(arr){
  var minIdx, temp, 
      len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}