import { project } from "./project"

const content = document.querySelector(".content")


export function createrProjectWindow(Project)
{
    content.innerHTML = ""
    const header = document.createElement("div")
    header.classList.add("header")
    header.innerHTML = Project.getProjectName()
    const addButton = document.createElement("div")
    addButton.classList.add("add")
    addButton.innerHTML = "+"

    addButton.addEventListener("click",()=>{
        //call create popup window here
        console.log("add button clicked")
    })

    header.appendChild(addButton)


    const cardContainer = document.createElement("div")
    cardContainer.classList.add("card-container")
        
        for (let i = 0; i < Project.getProjectList().length; i++)
            {
                console.log(i)
                const card = document.createElement("div")
                card.classList.add("card")
                if (i == 0 && i == Project.getProjectList().length)
                {
                    card.id = "first"
                    card.id = "last"
                }
                else if (i == 0)
                {
                    card.id = "first"
                }
                else if (i == Project.getProjectList().length -1)
                {
                    card.id = "last"
                }
                const circle = document.createElement("div")
                circle.classList.add("circle")
                card.appendChild(circle)
        
                const cardText = document.createElement("div")
                cardText.classList.add("card-text")
                cardText.innerHTML = Project.getProjectList()[i].getProjectName()
        
                card.appendChild(cardText)
                cardContainer.appendChild(card)
            }

    content.appendChild(header)    
    content.appendChild(cardContainer)
    
}


export function updateWindow(list)
{

}
export function createPopupWindow(list)
{

}
