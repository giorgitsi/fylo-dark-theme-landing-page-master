let obj = {
    num1: 5,
    num2: 3,
    b1: true,
    arr: [2, 6, 4, 7,],
    str: "abc",
    person: {
        name: "maik",
        age: 32
    },
}
obj.num1 = 15
obj.person.name
console.log(obj.num1)

obj.arr.forEach(num => {
    console.log(num * num)
});