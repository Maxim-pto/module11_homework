//Задание 1______________________________________________________________________________________
let arrN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];


function countEvenOdd (arr){
    let countEven = 0;
    let countOdd = 0;
    let countOther = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }

    return [countEven, countOdd, countOther];
}

let rez = countEvenOdd(arrN);

console.log("Четные " + rez[0]);
console.log("Нечетные " + rez[1]);
console.log("Прочее " + rez[2]);



//Задание 2__________________________________________________________________________________________
function isPrimeNumber(num){
    if (num > 1000){
        return "Такое мы не принимаем";
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return "Составное число";
            }
        }
        return "Простое число";
    }
}

let randNum = Math.floor(Math.random() * 2000);
let p = isPrimeNumber(randNum);
console.log("Результат " + randNum + ' = ' + p);

//Задание 3_____________________________________________________________________________________________
function getSum (number1) {
    return function (number2) {
        return number1 + number2;
    }
}

console.log(getSum(1)(5));



//Задание 4_______________________________________________________________________________________________
function countInOrderEverySecond(number1, number2) {
    let progress = number1;

    let intervalId = setInterval(function () {
        if (progress <= number2) {
            console.log(progress);
            progress++;
        }
        else clearInterval(intervalId);
    }, 1000);
}

countInOrderEverySecond(5, 15);

//Задание 5________________________________________________________________________________________________
const pow = (x, n) => {
    return x ** n;
}

console.log(pow(5, 3));