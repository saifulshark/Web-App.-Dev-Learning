let array=[1,3,45,2,1,55];
let maxnum= array[0];
console.log(maxnum);
for(let i=1;i<array.length;i++)
{
    if(array[i]>maxnum)
    {
        maxnum=array[i];
    }
}
console.log("Max Number in Array:",maxnum);
