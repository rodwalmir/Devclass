<button onclick="myFunction()">Sed Request</button>

<p id="demo"></p>

<script>
function myFunction() {
  var txt;
  var r = confirm("Make sure you fill all informations correct before procedure");
  if (r == true) {
    txt = "Confirmed";
  } else {
    txt = "Canceled";
  }
  document.getElementById("demo").innerHTML = txt;
}
</script>