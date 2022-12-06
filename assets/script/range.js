const $bar = document.querySelector(".fill"),
$range = document.querySelector(".rangeGB"),
$value = document.getElementById("value");

$range.addEventListener("input",(e)=>{
 $bar.style.setProperty("width",`${Math.floor(e.target.value/10)}%`);
 $value.textContent = Math.floor(e.target.value);
});

