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

    header.appendChild(addButton)


    const cardContainer = document.createElement("div")
    cardContainer.classList.add("card-container")

    console.log(Project.getProjectList())
    Project.getProjectList().forEach(element => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = element.getProjectName()
        cardContainer.appendChild(card)
    });

    // cardContainer.appendChild()
    
    
    content.appendChild(header)    
    content.appendChild(cardContainer)
    
}

export function updateWindow(list)
{

}
export function createPopupWindow(list)
{

}
