//exercises
const is100 = (a,b) => a === 100 || b === 100 || a+b === 100 ? true : false;

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

const formatDate = (today = new Date()) => {
    let date = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();

    if (date < 10) {
        date = '0' + date;
    }

    if (month < 10) {
        month = '0' + month;
    }

    today = date + '-' + month + '-' + year;
    return `${date}/${month}/${year}`;
}

const addNew = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;

const getNewStr = (str) => str.length >= 3 ? str.slice(0,3) + str.slice(-3) : str;

const getHalf = (str) => str.slice(0,str.length/2);

const concat = (str1, str2) => (str1.slice(1) + str2.slice(1));

function getTriArea(a,b,c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt( s * ((s-a) * (s-b) * (s-c)));
    console.log('Area: '+area);
}
// getTriArea(5,6,7);

const getArea = (a,b,c) => {
    let s = (a + b + c) / 2;
    let area = Math.sqrt( s * ((s-a) * (s-b) * (s-c)));
    console.log('Area: '+area);
}
// getArea(5,6,7);

function animate_string(id) {
    // Get the HTML element by its id
    var element = document.getElementById(id);

    // Access the text node inside the element (assuming no other children)
    var textNode = element.childNodes[0];
    
    // Extract the initial text content of the text node
    var text = textNode.data;

    // Set up an interval to rotate the characters in the text every 100 milliseconds
    setInterval(function () {
        // Move the last character to the beginning of the string
        text = text[text.length - 1] + text.substring(0, text.length - 1);

        // Update the text content of the text node with the modified string
        textNode.data = text;
    }, 300);
} 
// animate_string('anime');

function getNameInput() {
    let name = prompt('Insert a name: ');
    console.log(name);
    alert(name);
}
// getNameInput();

function multiply(id1,id2) {
    let num1 = document.getElementById(id1).value;
    let num2 = document.getElementById(id2).value;
    result = num1 * num2;
    document.getElementById("result").innerText = "\nThe Result Is: \n" +result;
}

function divide(id1,id2) {
    let num1 = document.getElementById(id1).value;
    let num2 = document.getElementById(id2).value;
    result = num1 / num2;
    document.getElementById("result").innerText = "\nThe Result Is: \n" +result;
}

function getUrl() {
    console.log(`${document.URL}`);
    alert(document.URL);
}

getUrl();



//notes
// use camelNotation for naming
// getNewStr, concat, getHalf
let person = {
    name: 'Kah Yan',
    age: 24
}

// console.log(person.name);
// console.log(person.age);
// console.log(person);

// console.log(person['name']);

let selectedColors = [];
selectedColors = ['red','blue','black','yellow'];

// console.log(selectedColors);
// console.log(selectedColors[0]);
// console.log(selectedColors.length);

function greet(name) {
    console.log('Hello '+name);
}

// greet('KahYan');
// name is parameter
// 'KahYan' is argument

function greeting(firstName, lastName) {
    console.log(`Hello, ${lastName} ${firstName}`);
}

// greeting('Kah Yan','Looi');

function square(num) {
    return num ** 2;
}

// console.log(square(6));
