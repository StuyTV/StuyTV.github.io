let isOut = false;
let height_list = 0;
function loader() {
    checkSize()
    setTimeout(() => {document.querySelector("#h1time").style.opacity = 1;}, 1300)

}
const checkSize  = () => {
    console.log("this ran");
    if (window.innerWidth <= 880) {
        document.querySelector("#h1time h6").style.display="none";
        document.querySelector("#h1time h1").innerHTML = "STV";
    }
    else {
        document.querySelector("#h1time h6").style.display="block";
        document.querySelector("#h1time h1").innerHTML = "Welcome to StuyTV";
    }
}
window.addEventListener('resize', checkSize)

function work() {
    
    if (!isOut) {
        console.log("firstran")
        document.querySelector("#dropbtn").setAttribute("disabled", "")
        
        document.querySelector("#dropbtn").style.border = "3px solid rgb(116, 156, 221)"
    var list_expand = setInterval(() => {
        document.querySelector("#dropdown").style.height = `${height_list}px`
        height_list += 10
        if (height_list == 230) {
            document.querySelector("#dropdown").style.height = `${height_list}px`
            document.querySelector("#dropbtn").removeAttribute("disabled")
            clearInterval(list_expand)
        }
    }, 10)
    
    
    isOut = true
    
    }
    else {
        console.log("secondran")
        document.querySelector("#dropbtn").setAttribute("disabled", "")
        
        document.querySelector("#dropbtn").style.border = "1px solid rgb(116, 156, 221)"
        var list_decrease = setInterval(() => {
        document.querySelector("#dropdown").style.height = `${height_list}px`
        height_list -= 10
        if (height_list == 0) {
            document.querySelector("#dropdown").style.height = `${height_list}px`
            document.querySelector("#dropbtn").removeAttribute("disabled")
            clearInterval(list_decrease)
        }
    }, 10)
    

    isOut = false
    
        
    }
}

