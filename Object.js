const S = (a,b) => {
    return a+b;
}
// console.log(S(2,3))

const Str =(string) =>{
let result = [];
for (let i=0; i<string.length; i++){

    let char = string[i].toLowerCase();
    if(/[a-z0-9]/.test(char)){
    if(result[char] > 0){
        result[char]++ 
    }
    else{
        result[char] = 1
    }
}
}
return result;
   
}

// const Str =(string) =>{
//     let result = [];
//     for (let char of string){
    
//        char = char.toLowerCase();
//         // if(/[a-z0-9]/.test(char)){
//         if(result[char] > 0){
//             result[char]++ 
//         }
//         else{
//             result[char] = 1
//         }
//     }
//     // }
//     return result;
       
//     }

// console.log(Str("AAAAaaBBBbadddtttttt"))

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}
console.log(same([1,2,3], [1,4,9]))


