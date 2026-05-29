const arr = [12,"Ani","Math",[5,7,10,24],"Hindi"];
console.log(arr);
console.log(arr[2]);
console.log(arr[3][2]);

arr[3][2]= "maths";
console.log(arr);
arr.push(16);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(31);
console.log(arr);
arr.shift();
console.log(arr);
arr.slice(0,3);
console.log(arr.slice(0,3));