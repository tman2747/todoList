import { project } from "./project";
import { todoItem } from "./todoFactory";

const checkitem = todoItem("cool", null)
const secondItem = todoItem("second item", null)

const projectContainter = new project("My Lists")
const firstProject = new project("Reminders")
const secondProject = new project("To Do")
const thirdProject = new project("Other")
projectContainter.addItem(firstProject)
firstProject.addItem(checkitem)
firstProject.addItem(secondItem)
projectContainter.addItem(secondProject)
projectContainter.addItem(thirdProject)


export function saveToJson(mainProject)
{
    const newproject = new project(mainProject.name)

    mainProject.getProjectList().forEach((element, index)=>
    {
        newproject.projectList.push(new project(element.name))

        for(let i = 0; i < element.getProjectList().length; i++)
        {
            newproject.projectList[index].projectList.push(element.projectList[i].toJson())
            //console.log(JSON.stringify(element.projectList[i].toJson()))
        }
    });
    console.log("saving...")
    localStorage.setItem("mainProject",JSON.stringify(newproject))
}


if (localStorage.getItem("mainProject") == null)
{
    saveToJson(projectContainter)
    console.log("loading default project")
}

export function convertFromJson()
{
    let newproct = new project(JSON.parse(localStorage.getItem("mainProject")).name) 
    JSON.parse(localStorage.getItem("mainProject")).projectList.forEach((element,index) => {
        newproct.projectList.push(new project(element.name))
        if (element.projectList.length > 0)
        {
            for(let i = 0; i < element.projectList.length; i++)
            {
                newproct.getProjectList()[index].addItem(todoItem(element.projectList[i].title,element.projectList[i].description,element.projectList[i].checked,element.projectList[i].date))
            }
        }
    })
    console.log(newproct)
    return newproct
}