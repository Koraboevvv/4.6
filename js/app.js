// {
//     function kv(arr) {
//     return arr.map((i) => i **2 )
// }

// console.log(kv([1,2,3]));
// console.log(kv([4,6]));

// function a2(arr) {
//     let newArr = []
//     arr.forEach((i) => {
//         newArr.push(i ** 2)
//     })
// }
// console.log(kv([1,2,3]));
// console.log(kv([4,6]));

// function a3(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//          newArr[i] = arr[i] ** 2;
        
//     }
// }
// console.log(kv([1,2,3]));
// console.log(kv([4,6]));
// }

// {
//     function number(arr)  {
//         let newArr = []
//         let index = 0
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] % 2 !== 0) {
//                 newArr[index] = arr[i];
//                index++
//             }
//         }
//         return newArr
//     }
//     console.log(number([1,2,3,4,5,6,7]));
    
//     function number(arr) {
//         return arr.filter(i => i % 2 !== 0)
//     }
//     console.log(number([1,2,3,4,5,6,7]));

//     const oddNumbers = arr => {
//         let r = [];
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] % 2 != 0) r.push(arr[i])
//         }
//         return r
//     }
//     console.log(oddNumbers([1,2,3,4,5,6,7]));
// }


{
    function letter(arr) {
        return arr.map(i => i.length);
    }
    console.log(letter(["lorem","hi"]));
    function letter(arr) {
        let newArr = []
        arr.forEach((i) => {
            newArr.push(i.length)
        });
        return newArr
    }
        console.log(letter(["lorem","hi"]));
    function letter(arr) {
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i].length);
        }
        return newArr
    }
        console.log(letter(["lorem","hi"]));
}