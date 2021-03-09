// 1
function allNum() {
    var nums = [];
    for (var i = 0; i < 255; i++) {
        nums[i] = i + 1;
    }
    return nums;
}
//2
function evenSum() {
    var sum = 0;
    for (var i = 1; i < 1001; i++) {
        if (i % 2 == 0) {
            sum = i + sum;
            console.log(sum);
        }
    }
}
// 3
function sumOdd() {
    var sum = 0;
    for (var i = 1; i < 5000; i++) {
        if (i % 2 == 1) {
            sum = i + sum;
            console.log(sum);
        }
    }
}
// 4
function sumAll(arr) {
    var sum = arr[0];
    for (i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// 5
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// 6
function findAvg(arr) {
    var sum = arr[0];
    vsar avg = 0;
    for (var i = 1; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
// 7
function oddNumbers() {
    var arr = [];
    for (var i = 1; i < 51; i++) {
        if (i % 2 == 1) {
            arr.push(i);
        }
    }
    return arr;
}
// 8
function greaterY(arr, Y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}
// 9
function squareVal(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
// 10
function noNeg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
// 11
function minMaxAvg(arr) {
    var sum = arr[0];
    var min = arr[0];
    var max = arr[0];
    var avg = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    return [max, min, sum / arr.length];
}
// 12
function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
//13
function numToStr(arr) {
    for (var = i; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}