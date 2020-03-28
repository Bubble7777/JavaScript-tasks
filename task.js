http://code.mu/tasks/javascript/base/osnovy-yazyka-javascript-dlya-novichkov.html
Работа с переменными
let num = 3;
alert(num)
//
let a = 10, b = 2;
alert(a/b)
//
let c =15, d =2;
let result = c + d;
alert(result)
//
let a = 17, b = 10;
let c = a - b;
let d = 7;
let result = c + d;
alert(result)
//
let str = "Hello world";
alert(str)
//
let str  = "hello";
let str2 = "world";
alert(str +str2)
//
let str  = "hello ";
let str2 = "world";
let name = " Damir";
let age = 26;
alert(str+str2+name+)
//
let age = 26;
alert('Мне '+ age + " лет!")
//
let name = prompt("What is your name?");
alert("Your name is "+name)
//
let name = prompt("Напишите число");
alert("квадрат вашего числа "+name*name)
//
let str ="abcde"
alert(str[0])
alert(str[2])
alert(str[4])
//
let sec = 60;
alert('Секунд в одном часе'+sec*60)
alert('Секунд в одних сутках'+sec*60*24)
alert('Секунд в одном месяце'+sec*60*24*31)
//
let hour = 21;
let minute = 23;
let sec = 51;
alert(hour+':'+minute+':'+sec)
//
var num = 47;
num += 7;
num -=  18;
num *= 10;
num /=  15;
alert(num);
//
var num = 10;
num++;
num++;
num--;
alert(num);
//
let arr = ['a','b','c'];
alert(arr);
//
let arr = ['a','b','c'];
alert(arr[0]);
alert(arr[1]);
alert(arr[2]);
//
let arr = ['a','b','c','d'];
alert(arr[0]+arr[1]+','+arr[2]+arr[3]);
//
let arr = [2,5,3,9];
let first = arr[0]+arr[1];
let sec = arr[2]+arr[3];
let result = first+sec;
alert(result);
//
var obj = {a: 1, b: 2, c: 3};
alert(obj['c']);
//
let obj = {Коля:'1000',Вася:'500',Петя:'200'};
alert(obj['Петя']);
alert(obj['Коля']);
//
let arr ={1:'ПН',2:'Вт',3:'Ср',4:'Чт',5:'Пт',6:'сб',7:'Вс'};
alert(arr['3'])
//
let arr ={1:'ПН',2:'Вт',3:'Ср',4:'Чт',5:'Пт',6:'сб',7:'Вс'};
let day = arr['3'];
alert(day);
//
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
alert(arr[1][0]);
//
let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
alert(obj['js'][0]);
//
let obj = {
    'ru':['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
    'en':['Mo','Tu','We','th','Fr','sat','san'],
  };
  alert(obj ['ru'][0]);
  alert(obj ['en'][2]);
//
let a = 0;
if( a == 0){
  console.log('Verno');
}
else{
  console.log('Neverno');
}
//
let a = 0;
if(a > 0){
  console.log('Verno');
}
else{
  console.log('Neverno');
}
//
let a = 0;
if(a < 0){
  console.log('verno');
}
else{
  console.log('neverno');
}
//
let a = 0;
if(a >= 0){
  console.log('Verno');
}
else{
  console.log('neverno');
}
//
let a = 0;
if(a <= 0){
  console.log('verno');
}
else{
  console.log('neverno');
}
//
let a = "test";
if(a == "test"){
  console.log('verno');
}
else{
  console.log('neverno');
}
//
let a = "1";
if(a === '1'){
  console.log('verno');
}
else{
  console.log('neverno');
}
//
let test = true;
if (test == true){
  console.log('verno');
}
else{
  console.log('neverno');
}
//
let a = 0;
if(a > 0 && a < 5){
  console.log('verno');
}
else{
  console.log('neverno')
}
//
let a = 0;
if(a == 0 || a == 2 ){
  a += 7;
}
else{
  a / 10;
}
//
let a = 1;
let b = 3;
if(a <= 1 && b >= 3 ){
  console.log(a + b);
}
else{
  console.log(a - b);
}
//
let a = 3;
let b = 5;
if (a > 2 && a < 11 || b >= 6 && b < 14){
  console.log('verno');
}
else{
  console.log('neverno');
}
let num = 1;
let result;
switch (num){
  case 1:
    result = "winter";
    break;
  case 2:
    result = "spring";
    break;
  case 3:
    result = "autumn";
    break;
  case 4:
    result = "summer";
    break;
}
console.log(result);
//
let day = prompt("какое число?");
if (day >= 1 && day <= 10){
  alert("first decade")
}
if(day >= 11 && day <= 20 ){
  alert("second decade");
}
if(day >= 21 && day <= 31){
  alert("third decade");
}
//
let month = prompt("Какой сейчас месяц?");
if (month == 12 || month <= 2){
  alert("winter");
}
if (month >= 3 && month <= 5){
  alert("spring");
}
if (month >= 6 && month <=8){
  alert("summer");
}
if (month >= 9 && month <= 11){
  alert("autumn");
}
//
let str = "abcde";
if(str[0] == "a"){
  alert("da");
}
else{
  alert('net');
}
//
let number = '12345';
if(number[0] == 1 || number[1] == 2 || number[2] == 3){
  alert('da');
}
else{
  alert('net');
}
//
let num 