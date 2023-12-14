// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};
//======================================================================================================================
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [new User(31, 'olya', 'pupkin', 'olya@gmail.com', +380811111111),
    new User(22, 'anna', 'petrov', 'anna@gmail.com', +380822222222),
    new User(13, 'kolya', 'shevchenko', 'kolya@gmail.com', +380833333333),
    new User(42, 'ivan', 'pupkin', 'ivan@gmail.com', +380444444444),
    new User(15, 'max', 'ivanov', 'max@gmail.com', +380555555555),
    new User(6, 'kokos', 'nikolaev', 'kokos@gmail.com', +380866666666),
    new User(72, 'petya', 'trofimov', 'petya@gmail.com', +380877777777),
    new User(18, 'oleg', 'peregudov', 'oleg@gmail.com', +380888888888)
];
let user = new User(39, 'vasya', 'nechaev', 'vasya@gmail.com', +38089999999999);
users.push(user);
users.push(new User(84, 'petya', 'petuhov', 'petya1@gmail.com', +38081000000000));
console.log(users);
//======================================================================================================================
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = users.filter(item => item.id %2 === 0);
console.log(filter);
//======================================================================================================================
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = users.sort((a, b) => {
    return a.id - b.id;
});
console.log(sort);
//======================================================================================================================
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    };
};
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [new Client(1, 'olya', 'pupkin', 'olya@gmail.com', +380811111111,
    ['meat', 'beer', 'potato', 'banana']),
    new Client(22, 'anna', 'petrov', 'anna@gmail.com', +380822222222,
        ['milk', 'meat', 'beer', 'potato', 'carrot', 'banana', 'tomato', 'apple']),
    new Client(43, 'kolya', 'shevchenko', 'kolya@gmail.com', +380833333333,
        ['beer', 'banana']),
    new Client(14, 'ivan', 'pupkin', 'ivan@gmail.com', +380444444444,
        ['banana']),
    new Client(35, 'max', 'ivanov', 'max@gmail.com', +380555555555,
        ['milk', 'beer', 'potato', 'carrot', 'banana']),
    new Client(16, 'kokos', 'nikolaev', 'kokos@gmail.com', +380866666666,
        ['milk', 'meat', 'beer', 'potato', 'carrot', 'banana']),
    new Client(27, 'petya', 'trofimov', 'petya@gmail.com', +380877777777,
        ['potato', 'carrot', 'banana', 'tomato', 'apple']),
    new Client(8, 'oleg', 'peregudov', 'oleg@gmail.com', +380888888888,
        ['milk', 'potato', 'carrot', 'banana']),
    new Client(39, 'vasya', 'nechaev', 'vasya@gmail.com', +38089999999999,
        ['meat', 'beer', 'potato', 'carrot', 'banana']),
    new Client(10, 'petya', 'petuhov', 'petya1@gmail.com', +38081000000000,
        ['potato', 'carrot', 'banana'])
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort1 = clients.sort((a, b) => {
    return a.order.length - b.order.length;
});
console.log(sort1);
//======================================================================================================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Cars (model, manufacturer, production, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.production = production;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`model-${this.model}, manufacturer-${this.manufacturer}, production-${this.production}, maxSpeed-${maxSpeed}, engine-${this.engine}`)
    };
    this.increaseMaxSpeed = function (newSpeed){
        console.log('newSpeed =', this.maxSpeed += newSpeed);
    };
    this.changeYear = function (newValue) {
        console.log(this.production = newValue);;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    };
};
let car = new Cars('Toyota', 'Japan', 2012, 190, 2.5);
console.log(car)
car.drive();
car.info();
car.increaseMaxSpeed(55);
car.changeYear(2023);
console.log(car);
car.addDriver({name: 'kokos', age: 35});
console.log(car)
console.log(car.driver)
//======================================================================================================================
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars1 {
    constructor(model, manufacturer, production, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.production = production;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
        };
        this.info = function () {
            console.log(`model-${this.model}, manufacturer-${this.manufacturer}, production-${this.production}, maxSpeed-${maxSpeed}, engine-${this.engine}`)
        };
        this.increaseMaxSpeed = function (newSpeed){
            console.log('newSpeed =', this.maxSpeed += newSpeed);
        };
    }
    changeYear (newValue) {
        console.log(this.production = newValue);;
    }
    addDriver (driver) {
        this.driver = driver;
    };
};
let car1 = new Cars1('Toyota', 'Japan', 2012, 190, 2.5);
console.log(car1)
car1.info();
car1.increaseMaxSpeed(40);
console.log(car1);
car1.addDriver({name: 'vasya', age: 45});
//======================================================================================================================
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella (name, age, sizeFoot) {
    this.name = name;
    this.age = age;
    this.sizeFoot = sizeFoot
}
let cinderellas = [ new Cinderella('Olya', 23, 35),
    new Cinderella('Tanya', 27, 40),
    new Cinderella('Katya', 26, 34),
    new Cinderella('Juliya', 18, 36),
    new Cinderella('Svitlana', 22, 37),
    new Cinderella('Tanya', 31, 41),
    new Cinderella('Olya', 38, 39),
    new Cinderella('Anna', 21, 33),
    new Cinderella('Olya', 28, 35),
    new Cinderella('Dasha', 33, 38)
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, sizeShoes) {
        this.name = name;
        this.age = age;
        this.sizeShoes = sizeShoes
    }
}
let prince = new Prince('Tolya', 35, 36);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const item of cinderellas) {
    if (item.sizeFoot === prince.sizeShoes) {
        console.log(`Prince found Cinderella ${item.name}`)
    }
};
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellas.find(u => u.sizeFoot === prince.sizeShoes));