alert("Hello👋🏽مرحبا")
confirm("هل تريد خضم 20% علي المنتجات🔥؟Do you want to save 20% on products!!🤯")
 document.getElementById("toastbtn").onclick = function() {
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl)
  })
  toastList.forEach(toast => toast.show()) 
} 