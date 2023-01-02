// let list = ['','Kotlin','Rust','PHP','Ruby','Java','MarkDown','Python','C++','Fortran','Assembler']
// const result = document.getElementById('results')
// renderList(list,result)
// function filter(val,list){
// console.time('test')
//   return list.filter(i=>(~i.indexOf(val)))
// };
// function renderList(_list=[],el=document.body){
// 	el.innerHTML='';
//   _list.forEach(i=>{
//     let new_el = document.createElement('li')
//     new_el.innerHTML=i
//     el.appendChild(new_el)
//   })
//   console.timeEnd('test')
// }
// document.getElementById('search').addEventListener('input',e=>renderList(filter(e.target.value,list),result))
 


// let filters = document.querySelectorAll('a[data-filter]');
// for (let filter of filters) {
//     filter.addEventListener('click', function(e) {
//         e.preventDefault();

//         let catId = filter.getAttribute('data-filter');
//         let workCat = document.querySelectorAll('.portfolio__col[data-cat="' + catId + '"]');
//         let alldivs = document.querySelectorAll('.portfolio__col');

//         alldivs.forEach(function (c) {
//             if (c.getAttribute('data-cat') == catId){
//                 c.classList.add('hide');
//             } else {
//                 c.classList.remove('hide');
//             }
//         })
//     });
// }




filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Добавьте активный класс к текущей кнопке (выделите его)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}