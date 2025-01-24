import { project } from "./project"

const content = document.querySelector(".content")


export function createrProjectWindow(mainProject)
{
    content.innerHTML = ""
    const header = document.createElement("div")
    header.classList.add("header")
    header.innerHTML = mainProject.getProjectName()
    const addButton = document.createElement("div")
    addButton.classList.add("add")
    addButton.innerHTML = "+"

    addButton.addEventListener("click",()=>{
        //call create popup window here
        console.log("add button clicked")
    })
    header.appendChild(addButton)
    content.appendChild(header)    


    const cardContainer = document.createElement("div")
    cardContainer.classList.add("card-container")
    const color = ["blue","red","yellow","green"]
        for (let i = 0; i < mainProject.getProjectList().length; i++)
            {
                const card = document.createElement("div")
                card.classList.add("card")
                if (i == 0 && i == mainProject.getProjectList().length)
                {
                    card.id = "first"
                    card.id = "last"
                }
                else if (i == 0)
                {
                    card.id = "first"
                }
                else if (i == mainProject.getProjectList().length -1)
                {
                    card.id = "last"
                }
                const circle = document.createElement("div")
                circle.classList.add("circle")
                circle.style.backgroundColor=(color[i % color.length]) // modulo loops through the color array cyclically
                card.appendChild(circle)
        
                const cardText = document.createElement("div")
                cardText.classList.add("card-text")
                cardText.innerHTML = mainProject.getProjectList()[i].getProjectName()
                card.addEventListener("click", ()=>{
                    // call opening the list view from here
                })
        
                card.appendChild(cardText)
                cardContainer.appendChild(card)
            }

    content.appendChild(cardContainer)
    
}

export function createPopupWindow(list)
{

}
