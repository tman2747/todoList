import styles from "./styles.css"
import { todoItem } from "./todoFactory"
import { project } from "./project"
import { createrProjectWindow, createWindow } from "./windowManager"
import { saveToJson,convertFromJson } from "./customJsonParsing"
import { compareAsc, format } from "date-fns";


let newproct = convertFromJson()
console.log(newproct)
createrProjectWindow(newproct)


// let date = document.querySelector("#date")
// let button = document.querySelector(".add-button")
// button.addEventListener("click", ()=>{
//     console.log(date.value)
//     let thisdate = new Date(date.value)
//     console.log(format(thisdate,"MMM-dd-yyyy")) 
// })

