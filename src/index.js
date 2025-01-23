import styles from "./styles.css"
import { dog,todoItem,todoItemcheck } from "./todoFactory"


// let item1 = todoItem("cool title","easier said then done")

// console.log(item1.getTitle())
// console.log(item1.getDescription())

let checkitem = todoItemcheck("cool")
checkitem.getCheckable()
console.log(checkitem.getTitle())
