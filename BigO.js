//Time Increases As NO. of Inputs Increase

//Reverse a STRING
function revers(s){
    let o ='';
    for (let i= s.length-1 ; i >=0 ; i--){
        o += s[i];
    }
    return o;
}
// console.log(revers('aron'))

//Adding up no.
const Add1 = (n) =>{
    let total = 0;
    for (let i=1; i<=n; i++){
        total +=i;
    }
    return total
}
// console.log(Add1(4))

//Adding n no. 
const Add2 = (n) =>{
    return n*(n+1) /2
}
// console.log(Add2(5))

//Count  UP AND DOWN
const CountupandDown = (n)=>{
    console.log("Going Up");
    for (let i=0 ; i < n ; i++){
        console.log(i)
    }
    console.log("Going Down");
    for(let j = n- 1; j >= 0; j--){
        console.log(j);
    }
    console.log("Bye")
}
// console.log(CountupandDown(3))

//AllPairs 
const AllPairs = (n) =>{
    for(let i=0; i< n; i++)
    for(let j=0; j<n; j++){
        console.log(i, j)
    }
}
// console.log(AllPairs(4))

//More then given input
const ThreeorMore = (n) =>{
    for(let i=1; i <= Math.max(3,n);i++){
        console.log(i);
    }
}
// console.log(ThreeorMore(2))

//Adding
const S = (arr) => {
      let NewArr = [];

      for(let i = 0; i<arr.length; i++){
        NewArr.push(2* arr[i]) 
      }
      return NewArr;
}


console.log(S([1,2,3]))