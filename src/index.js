import styles from "./styles.css"
import {todoItem} from "./todoFactory"
import { project } from "./project"
import { createWindow } from "./windowManager"


// let item1 = todoItem("cool title","easier said then done")

// console.log(item1.getTitle())
// console.log(item1.getDescription())

const checkitem = todoItem("cool","mydis",false)

console.log(checkitem.getTitle())
checkitem.setTitle("new Title")
console.log(checkitem.getTitle())
console.log(checkitem.getChecked())
checkitem.toggleCheck()
console.log(checkitem.getChecked())
console.log(checkitem.getDescription())
checkitem.setDescription("hello")
console.log(checkitem.getDescription())


const projectOne = new project("Reminders")
const projectTwo = new project("To do")

projectOne.addItem(checkitem)
projectOne.projectLog()
projectOne.removeItem(checkitem.getId())
projectOne.projectLog()
const checkitem2 = todoItem("cool","mydis",false)
projectOne.addItem(checkitem2)
projectOne.projectLog()

createWindow(projectOne)