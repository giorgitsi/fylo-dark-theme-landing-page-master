// // Object literal - 

// let obj = {
//     age: 32,
//     name: "nika",
//     num: 55,
//     b1: true,
//     arr: [3, 6, 4, 8, 10],
//     obj2: {
//         address: "georgia",
//         num1: 44,
//         num2: 59
//     }
// }



// console.log(obj)

// const user1 = {
//     name: "Mick",
//     age: 22
// }

// const user2 = {
//     name: "Nick",
//     age: 11
// }

// const arr = ["Nick", 33, user2, {
//     num1: 22,
//     num2: 3
// }]


// const users = [
//     user1,
//     user2,
// ]


// let person = {
//     age: 27,
//     name: "Giorgi",
//     weight: 60,
//     height: 180
// }

// person.age = 28
// person.adress = "Tbilisi"
// console.log(person)

// let arrNum = [3, 8, 5, 0, 4, 19]
// arrNum.push(30)
// arrNum.unshift(32)

// number, string, boolen -> პრიმიტიული მონაცემთ ტიპები
// object - არაპრიმიტიული

// მას ტელეფონი გამომერთო ორი წამით 
// ოკ
// მას შევაერთე მალე ჩართვება
// კარგი, მოდი arrNum ze moaxdine iteracia და კონსოლში დააბეჭდინე რიცხვები სათითაოდ და ფეიჯზეც დაარენდერე button ელემენტების დახმარებით.
// კარგით მას


// arrNum.forEach((num, index) => {
//     let btn = document.createElement("button")
//     btn.textContent = num
//     document.body.append(btn)
//     console.log(num, index)
//     let btnNum = num 
//     btn.addEventListener("click", () =>{
//         // btnNum += 1
//         // btn.textContent = btnNum
//         arrNum[index] += 1
//         btn.textContent = arrNum[index]
//     })
// });

let obj = {
    name: "Nick",
    age: 23,
    arr: [3, 5, 2, 7, 4],
    objChild: {
        num1: 3,
        str: "hello",
        num2: 5,
        str2: "hi",
        
    }
    
}


const num = 10 


console.log(obj.arr[1])
obj.age = 24
obj.arr[obj.arr.length - 1] = 2

obj.num3 = 40
console.log(obj)

obj.arr.forEach(num => {
    console.log(num)
});