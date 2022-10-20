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
            try{
                display.innerText = eval(display.innerText)
            }catch(error){
                display.innerText = "Syntax error"
                setTimeout(() => {
                    display.innerText = ""
                }, 2000)
            }
        }else if(item.id == "iqual" && display.innerText == ""){
            display.innerText = "null";
            setTimeout(() => (display.innerText = ""), 2000)
        }else if(item.id == "00" && display.innerText == ""){
            display.innerText = display.innerText   
        }else if(item.id == "."){
            let exist = display.innerText.includes(".")
            if(!exist){
                display.innerText += item.id 
            }
        }else if(item.id == "-"){
            validateOperator(item.id)
        }else if(item.id == "+"){
            validateOperator(item.id)
        }else if(item.id == "/"){
            validateOperator(item.id)
        }else if(item.id == "*"){
            validateOperator(item.id)
        }else{
            display.innerText += item.id 
        }
    }
}) 


function validateOperator(item){
    let exist = display.innerText.substr(-1)

    if(item == "-" && exist != item){
        display.innerText += item
    }else if(display.innerText.length > 0 && exist != item){
        display.innerText += item
    }
}




const calculator = document.querySelector(".calculator")
const themeTogglebtn = document.querySelector(".theme-toggle")

let isDark = true
themeTogglebtn.onclick = () =>{
    calculator.classList.toggle("dark")
    themeTogglebtn.classList.toggle("active")
    isDark = !isDark
}