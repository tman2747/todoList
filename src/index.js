import styles from "./styles.css"
import { todoItem } from "./todoFactory"
import { project } from "./project"
import { createrProjectWindow, createWindow } from "./windowManager"
import { saveToJson,convertFromJson } from "./customJsonParsing"


let newproct = convertFromJson()
console.log(newproct)
createrProjectWindow(newproct)