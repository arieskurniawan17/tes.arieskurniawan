<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Sort</h2>

<p> Klik tombol untuk mengurutkan array dalam urutan dari kecil ke besar. </p>
<button onclick="myFunction()">Klik disini</button>

<p id="demo"></p>

<script>
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;  

function myFunction() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}
</script>

</body>
</html>
