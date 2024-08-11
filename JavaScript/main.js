alert("Hello👋🏽مرحبا")
confirm("هل تريد خضم 20% علي المنتجات🔥؟Do you want to save 20% on products!!🤯")
 document.getElementById("toastbtn").onclick = function() {
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl)
  })
  toastList.forEach(toast => toast.show()) 
} 
 
/* 
var students = [['js', 100], ['bs', 7], ['css', 88], ['eg', 95], ['html', 68], ['ar', 88]];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length);
}

// Calculate and log the average grade
console.log("Average grade: " + (Avgmarks) / students.length);

if (avg < 60) {
    console.log("Grade: Failed");
} else if (avg < 70) {
    console.log("Grade: acceptable");
} else if (avg < 80) {
    console.log("Grade: good");
} else if (avg < 90) {
    console.log("Grade: very good");
} else if (avg <= 100) {
    console.log("Grade: excellent");
}
 */
 
/*  let n1 = 100;

for (let i = 0; i < n1; i++){
    
   let  b = i * 2;

    if (b <= n1){
        if (b == 0) {} else 
        { console.log('Count',b);}
    };
       
}; */



 /* var x = prompt ("Enter Your Deg :")
  switch(x) {

    case "a" :
     console.log("CAR")
      break;

     case "b" :
     console.log("Iphone")
     break;

       case "c":
      console.log("5000 LE")
      break;

     case "d":
       console.log("روح يبنى ربنا يسهلك")
      break;

     default :
      console.log("هتتنفخ")
       
  }
 */