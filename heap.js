/* var test = [
    [ 'a', 'b', 'c', 'd' ],
    [ 'b', 'a', 'c', 'd' ],
    [ 'c', 'a', 'b', 'd' ],
    [ 'a', 'c', 'b', 'd' ],
    [ 'b', 'c', 'a', 'd' ],
    [ 'c', 'b', 'a', 'd' ],
    [ 'd', 'b', 'c', 'a' ],
    [ 'b', 'd', 'c', 'a' ],
    [ 'c', 'd', 'b', 'a' ],
    [ 'd', 'c', 'b', 'a' ],
    [ 'b', 'c', 'd', 'a' ],
    [ 'c', 'b', 'd', 'a' ],
    [ 'd', 'a', 'c', 'b' ],
    [ 'a', 'd', 'c', 'b' ],
    [ 'c', 'd', 'a', 'b' ],
    [ 'd', 'c', 'a', 'b' ],
    [ 'a', 'c', 'd', 'b' ],
    [ 'c', 'a', 'd', 'b' ],
    [ 'd', 'a', 'b', 'c' ],
    [ 'a', 'd', 'b', 'c' ],
    [ 'b', 'd', 'a', 'c' ],
    [ 'd', 'b', 'a', 'c' ],
    [ 'a', 'b', 'd', 'c' ],
    [ 'b', 'a', 'd', 'c' ]
]; */

/* 
Heap's Algorithm for permutation
https://en.wikipedia.org/wiki/Heap%27s_algorithm
 */
class HeapPermutation {
    constructor(elements) {
        this.elements = elements;
        this.numElements = elements.length;
        this.permutation = [];
    }

    doPermutation(callback) {
        
        var arr = this.elements.slice();
        this.check(this.numElements, arr);
        
        if (typeof callback == "function")
            callback(this);
    }

    check(n, array) {
        if (n==1) {
            this.permutation.push(array.slice());
        }
        else {
            for(var i=0; i<n; i++) {
                this.check(n-1,array);
    
                if (n % 2 == 0) {
                    swap(array, i, n-1);
                } else {
                    swap(array, 0, n-1);
                }
            }
        }
    
        function swap (_arr, a, b) {
            var tmp;
            tmp = _arr[a];
            _arr[a] = _arr[b];
            _arr[b] = tmp;
       }
    }
}

function isEqual(object1, object2) {
    if (object1 === null || object2 === null) {
        if (object1 === null && object2 === null)
            return true;
        else
            return false;
    }
    
    if (typeof object1 === 'object' && typeof object2 === 'object') {
        return (
            (Object.entries(object1).toString() === Object.entries(object2).toString())?true:false
        );       
    } 
    else
        return (object1 === object2)?true:false;
}

module.exports = { HeapPermutation, isEqual };

/* var heap = new HeapPermutation(["a", "b", "c", "d"]);
heap.doPermutation((h)=>{
    console.log(h.permutation);
    console.log(test);
    console.log(isEqual(h.permutation, test)?"TEST OK":"TEST FAILED");
}); */
