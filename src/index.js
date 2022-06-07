

// let lim1 = parseInt(prompt("Введите число lim1: "))
//  let lim2 = parseInt(prompt("Введите число lim2: "))
 let lim1 = 5;
  let lim2 = 8;
let tmp_total_for = 0 ;
let tmp_total_while = 0 ;

for (let i = lim1; i <= lim2; i++) {
  tmp_total_for += i
}

let tmp_lim1 = lim1
let tmp_lim2 = lim2


while (tmp_lim1 <= tmp_lim2)
  {
    
  tmp_total_while += tmp_lim1
  tmp_lim1++

  }
 
 function func_arraySum(lim1, lim2) {
  var tmp_total_func = 0
  for (let i = lim1; i <= lim2; i++) {
  tmp_total_func += i
  }
  
return tmp_total_func
}
 let tmp_total_func = func_arraySum(lim1, lim2);

var multiply = () => { 
  let lim1 = 5;
  let lim2 = 8;
//   let lim1 = parseInt(prompt("Введите число lim1: "))
//  let lim2 = parseInt(prompt("Введите число lim2: "))
  return lim1*lim2; };


document.querySelector('#main_for').innerHTML =  tmp_total_for
document.querySelector('#main_while').innerHTML = tmp_total_while
document.querySelector('#main_function').innerHTML = tmp_total_func 
document.querySelector('#main_arrowFunc').innerHTML = multiply() 
// Log to console
console.log("цикл for - " + tmp_total_for)

console.log("цикл while - " + tmp_total_while)
console.log("function - " +tmp_total_func)
console.log("arrow multiply function - " + multiply())




