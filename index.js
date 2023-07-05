'use strict';

// 1 Вычислить площадь и объем куба.

function calculateVolumeAndArea(edge) {
    if (typeof(edge) === 'number' && Number.isInteger(edge) && edge >= 0) {
        let area = Math.pow(edge, 2) * 6;
        let volume = Math.pow(edge, 3);

        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}

console.log(calculateVolumeAndArea(8));

// 2 Интересная задача с вагоном (всего мест - 36, а купе - 9). Идея в том что все делится на 4!

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return 'Таких мест в вагоне не существует';
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

console.log(getCoupeNumber(1));

// 3 Принимает минуты, возвращает строку с часами

function getTimeFromMinutes(min) {
    if (typeof(min) === 'number' && min >= 0 && Number.isInteger(min) === true) {
        let hours = Math.trunc(min / 60);
        let minutes = min - (60 * hours);

        let str;

        if (hours === 1) {
            str = `Это ${hours} час`;
        } else if (hours > 1 && hours < 5) {
            str = `Это ${hours} часа`;
        } else if (hours >= 5 || hours === 0) {
            str = `Это ${hours} часов`;
        }

        if (minutes === 1) {
            str += ` и ${minutes} минута`;
        } else if (minutes > 1 && minutes < 5) {
            str += ` и ${minutes} минуты`;
        } else if (minutes >= 5 || minutes === 0) {
            str += ` и ${minutes} минут`;
        }

        return str;
    } else {
        let error = 'Ошибка, проверьте данные';

        return error;
    }
}

console.log(getTimeFromMinutes(121));

// 4 Возврщает набольшее число

function findMaxNumber(a, b, c, d) {
    return Math.max(a, b, c, d);
}

console.log(findMaxNumber(2, 4, 7, 1));

const personalPlanPeter = {
    name: 'Peter',
    age: '29',
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            pyton: '5%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (obj) {
        const {name, age, skills} = obj;

        let str ='';
        str += `Мне ${age} и я владею языками: ${skills.languages.join(',').toUpperCase()}`;
        return str;
    }
};

function showExperience(plan) {
    const {languages, programmingLangs, exp} = plan.skills;

    return exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    const {languages, programmingLangs, exp} = plan.skills;

    let str = '';
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]} \n`;
    }

    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); 

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    } else {
        let str = `Семья состоит из: ${arr.join(' ')}`;

        return str;
    }
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(el) {
        console.log(el.toLowerCase());
    });
}

standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return 'Ошибка!';
    } else {
        let arr = str.split('');
        let j = arr.length - 1;
        let arr2 = [];

        for (let i = 0; i < arr.length; i++) {
            arr2[i] = arr[j];
            j--;
        }

        let strReverse = arr2.join('');

        return strReverse;
    }
}

// Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr

console.log(reverse(someString));

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let m = [];

    data.shops.forEach((i) => {
        let n = [];
        for (let key in i) {
            n.push(i[key]);
        }
        m.push(n.reduce((acc, rec) => acc * rec));
    });
    
    let area = data.height * (m.reduce((acc, rec) => acc + rec));

    console.log(area);

    if ((area * data.moneyPer1m3) < data.budget) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData));

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (Number(fDish.price.slice(0, -1)) + Number(sDish.price.slice(0, -1)) < average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.create(data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));

// Рекурсия 

function pow(x,n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2,1));
console.log(pow(2,2));
console.log(pow(2,3));
console.log(pow(2,4));
console.log(pow(2,5));

// n! с проверкой на отрицательные значения

 function factorial(x) {
    if (Number.isInteger(x) && typeof(x) === 'number') {
        if (x <= 0) {
            return 1;
        } else if (x === 1) {
            return x;
        } else {
            return x * (factorial (x-1));
        }
    } else {
        return 'Error!';
    }
 }

 console.log(factorial(5));

 // Разбить массив на группы по 3

 const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();

    let obj = {};
    let str ='Оставшиеся студенты:';
    let arrGroup = [];
    let i = 1;

    while (arr.length > 0) {

        if (arr.length >= 3) {
            let newGroup = arr.splice(0, 3);

            obj[i] = newGroup;
        } else if (arr.length < 3) {
            let newStr = arr.splice(0).join(', ');

            obj[i] = str + ' ' + newStr;
        }

        i++;
    }

    for (let key in obj) {
        arrGroup.push(obj[key]);
    }

    return arrGroup;
}

console.log(sortStudentsByGroups(students));

// Посчитать кол-во страниц

function amountOfPages(summary) {
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
      result += i;
      if (result.length === summary) {
        n = i;
        break;
      }
    }

    return n;
}

console.log(amountOfPages(234));

// 5 Задача с собеседования.

// Написать функцию sostavChisla(massivChisel: number[], chislo: number), которая бы находила 
// все возможные комбинации чисел из massivChisel, сумма которых равна chislo. При этом:
// 1) massivChisel содержит, только уникальные положительные числа (> 0)
// 2) в комбинации не должно быть повторений чисел
// 3) все комбинации должны быть уникальными

function checkUniquePositiveNumbers(array) {
    const uniqueNumbers = [];
    
    array.forEach((number) => {
      if (number > 0 && !uniqueNumbers.includes(number)) {
        uniqueNumbers.push(number);
      } else {
        console.log("Неверный формат данных")
        return false;
      }
    });
  }

  const massiv = [7, 8, 3, 4, 5, 6, 1, 2];

  function sostavChisla(massivChisel, chislo) {
    let chek = checkUniquePositiveNumbers(massivChisel);

    if (chek) {const result = [];

        function backtrack(combination, start) {
          const sum = combination.reduce((acc, curr) => acc + curr, 0);
      
          if (sum === chislo) {
            result.push([...combination]);
          }
      
          if (sum > chislo) {
            return;
          }
      
          for (let i = start; i < massivChisel.length; i++) {
            combination.push(massivChisel[i]);
            backtrack(combination, i + 1);
            combination.pop();
          }
        }
      
        backtrack([], 0);
      
        return result;}
	
}

console.log(sostavChisla(massiv, 15));




const arr1 = [7, 8, 3, 4, 5, 6, 1, 2];

function sostavChisla(massivChisel, chislo) {
    const uniqueNumbers = [];
    // проверка массива на уникальность и > 0

    // рекурсия с reduce()

    // new Set для исклбчения повторений
}