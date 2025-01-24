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

    console.log(Project.getProjectList())
    Project.getProjectList().forEach(element => {
        const card = document.createElement("div")
        card.classList.add("card")

        const circle = document.createElement("div")
        circle.classList.add("circle")
        card.appendChild(circle)

        const cardText = document.createElement("div")
        cardText.classList.add("card-text")
        cardText.innerHTML = element.getProjectName()
        
        card.appendChild(cardText)
        cardContainer.appendChild(card)
    });

    content.appendChild(header)    
    content.appendChild(cardContainer)
    
}
            /*<div class="card">
                <div class="circle"></div>
                reminders
            </div>*/
export function updateWindow(list)
{

}
export function createPopupWindow(list)
{

}
