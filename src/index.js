import styles from "./styles.css"
import { dog } from "./todoFactory"


let mydog = dog("name")

mydog.talk()

mydog.changename()
mydog.talk()