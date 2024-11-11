const monthlyButton = document.querySelector("[data-key='monthly']")
const annualButton = document.querySelector("[data-key='annual']")
const monthlyPrice = document.querySelector(".monthly-price")
const annualPrice = document.querySelector(".annual-price")
const cursor = document.querySelector("[data-slot='cursor']")
const whaleSpan = document.querySelector(".whale-span");
const plebSpan = document.querySelector(".pleb-span");



monthlyButton.addEventListener("click", () => {
    monthlyPrice.innerHTML = "0.48";
    annualPrice.innerHTML = "1.40";
    cursor.style.transform = "translateX(-85px)"
    cursor.style.width = "85px"
    monthlyButton.style = "z-index: 5 !important"
    monthlyButton.querySelector('div').style.color = "white";
    annualButton.querySelector('div').style.color = "rgb(100, 116, 139)";
    whaleSpan.innerHTML = `<span class="flex self-center items-baseline gap-1"><span class="shrink-0"><span class="notranslate">$24 </span>billed monthly</span></span>`
    plebSpan.innerHTML = `<span class="flex self-center items-baseline gap-1"><span class="shrink-0"><span class="notranslate">$7 </span>billed monthly</span></span>`
})

annualButton.addEventListener("click", () => {
    monthlyPrice.innerHTML = "0.36";
    annualPrice.innerHTML = "1.15";
    cursor.style.transform = "translateX(0)"
    cursor.style.width = "auto"
    monthlyButton.querySelector('div').style.color = "rgb(100, 116, 139)";
    annualButton.querySelector('div').style.color = "white";
    whaleSpan.innerHTML = `<span class="flex self-center items-baseline gap-1"><span class="line-through opacity-80 notranslate">$288</span><span class="shrink-0"><span class="notranslate">$215 </span>billed yearly</span></span>`
    plebSpan.innerHTML = `<span class="flex self-center items-baseline gap-1"><span class="line-through opacity-80 notranslate">$84</span><span class="shrink-0"><span class="notranslate">$69 </span>billed yearly</span></span>`
})

console.log(monthlyButton, 'monthlyButton')