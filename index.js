const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button")


buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == "clear"){
            display.innerText = "";
        }else if(item.id == "backspace"){
            let string = display.innerText.toString()
            display.innerText = string.substr(0, string.length - 1)  
        }else if(item.id == "iqual" && display.innerText != ""){
            display.innerText = eval(display.innerText) 
        }else if(item.id == "iqual" && display.innerText == ""){
            display.innerText = "null";
            setTimeout(() => (display.innerText = ""), 2000)
        }else{
            display.innerText += item.id 
        }
    }
}) 


const calculator = document.querySelector(".calculator")
const themeTogglebtn = document.querySelector(".theme-toggle")

let isDark = true
themeTogglebtn.onclick = () =>{
    calculator.classList.toggle("dark")
    themeTogglebtn.classList.toggle("active")
    isDark = !isDark
}