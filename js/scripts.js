let body = document.getElementById('dateFunction');
body.onload = function(){
         var d = new Date();
         document.getElementById("year").innerHTML = d.getFullYear();
}
