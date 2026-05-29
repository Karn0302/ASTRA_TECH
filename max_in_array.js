arr = [12,43,21,56,7,55,42];
let max=-1;
let min=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(max<arr[i])
        max=arr[i];
    if(min>arr[i])
        min=arr[i];
}
console.log(max);
console.log(min);