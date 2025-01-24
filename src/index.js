import styles from "./styles.css"
import {todoItem} from "./todoFactory"
import { project } from "./project"
import { createrProjectWindow, createWindow } from "./windowManager"


// let item1 = todoItem("cool title","easier said then done")

// console.log(item1.getTitle())
// console.log(item1.getDescription())

const checkitem = todoItem("cool",null)

const projectContainter = new project("My Lists")
const firstProject = new project("Reminders")
const secondProject = new project("To Do")
const thirdProject = new project("Other")
projectContainter.addItem(firstProject)
projectContainter.addItem(thirdProject)
projectContainter.addItem(secondProject)


createrProjectWindow(projectContainter)