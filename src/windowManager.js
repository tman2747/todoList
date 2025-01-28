import { project } from "./project"
import { todoItem } from "./todoFactory"

const content = document.querySelector(".content")


export function createrProjectWindow(mainProject)
{
    addHeader(mainProject)
    addCards(mainProject)
    
}

function addHeader(mainProject)
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
        createPopupWindow(mainProject)
    })
    header.appendChild(addButton)
    content.appendChild(header)    
}

function addCards(mainProject)
{
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
                    openProject(mainProject.getProjectList()[i],mainProject)
                })
        
                card.appendChild(cardText)
                cardContainer.appendChild(card)
            }

    content.appendChild(cardContainer)
}


function openProject(project,mainProject)
{
    content.innerHTML = ""
    const header = document.createElement("div")
    header.classList.add("header")
    header.innerHTML = project.getProjectName()
    // back button
    const backButton = document.createElement("div")
    backButton.classList.add("add")
    backButton.innerHTML = "<"

    backButton.addEventListener("click",()=>{
        //call create popup window here
        createrProjectWindow(mainProject)
    })
    header.appendChild(backButton)

    // add button
    const addButton = document.createElement("div")
    addButton.classList.add("add")
    addButton.innerHTML = "+"

    addButton.addEventListener("click",()=>{
        //call create popup window here
        createNewTodoWindow(project,mainProject)
    })
    header.appendChild(addButton)
    content.appendChild(header)    


    const cardContainer = document.createElement("div")
    cardContainer.classList.add("card-container")
    const color = ["blue","red","yellow","green"]
        for (let i = 0; i < project.getProjectList().length; i++)
            {
                const card = document.createElement("div")
                card.classList.add("card")
                if (i == 0)
                {
                    card.id = "first"
                }
                else if (i == project.getProjectList().length -1)
                {
                    card.id = "last"
                }
                if (i == 0 && i == project.getProjectList().length-1)
                {
                    card.id = "first-last"
                }
                const circle = document.createElement("div")
                circle.classList.add("circle")
                circle.style.backgroundColor=(color[i % color.length]) // modulo loops through the color array cyclically
                card.appendChild(circle)
        
                const cardText = document.createElement("div")
                cardText.classList.add("card-text")
                cardText.innerHTML = project.getProjectList()[i].getTitle()
                card.addEventListener("click", ()=>{
                    // details of clicked todo
                    console.log("details of clicked todo")
                    
                })
        
                card.appendChild(cardText)
                cardContainer.appendChild(card)
            }

    content.appendChild(cardContainer)
}


function createNewTodoWindow(currentProject,mainProject)
{
    const popupWindow = document.createElement("div")
    popupWindow.classList.add("popup-window")
    popupWindow.addEventListener("click", (event) => {
        if (event.target == popupWindow)
        {
            popupWindow.remove()
        }
    })

    const createProjectWindow = document.createElement("div")
    createProjectWindow.classList.add("create-project-window")    

    const closeButton = document.createElement("div")
    closeButton.classList.add("close")
    closeButton.innerHTML = "x"
    closeButton.addEventListener("click", ()=>{
        popupWindow.remove()
    })
    createProjectWindow.appendChild(closeButton)
    
    const windowField = document.createElement("div")
    windowField.classList.add("window-field")

    const form = document.createElement("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission on submit button
        currentProject.addItem(todoItem(input.value))
        createProjectWindow(mainProject)
    });
    const label =  document.createElement("label")
    label.htmlFor = "listName"
    label.innerText = "New List"

    const input = document.createElement("input")
    input.type = "text"
    input.id = "listName"
    input.placeholder = "List Name"
    input.name = "listName"

    windowField.appendChild(label)
    windowField.appendChild(input)

    const addButton = document.createElement("button")
    addButton.innerHTML = "Add"
    addButton.type = "button"
    addButton.addEventListener("click", ()=>{
        currentProject.addItem(todoItem(input.value))
        openProject(currentProject,mainProject)
    })

    form.appendChild(windowField)
    form.appendChild(addButton)

    createProjectWindow.appendChild(form)

    
    
    popupWindow.appendChild(createProjectWindow)


    

    content.appendChild(popupWindow)
}

function createPopupWindow(mainProject)
{
    const popupWindow = document.createElement("div")
    popupWindow.classList.add("popup-window")
    popupWindow.addEventListener("click", (event) => {
        if (event.target == popupWindow)
        {
            popupWindow.remove()
        }
    })

    const createProjectWindow = document.createElement("div")
    createProjectWindow.classList.add("create-project-window")    

    const closeButton = document.createElement("div")
    closeButton.classList.add("close")
    closeButton.innerHTML = "x"
    closeButton.addEventListener("click", ()=>{
        popupWindow.remove()
    })
    createProjectWindow.appendChild(closeButton)
    
    const windowField = document.createElement("div")
    windowField.classList.add("window-field")

    const form = document.createElement("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission on submit button
        mainProject.addItem(new project(input.value))
        createrProjectWindow(mainProject)
    });
    const label =  document.createElement("label")
    label.htmlFor = "listName"
    label.innerText = "New List"

    const input = document.createElement("input")
    input.type = "text"
    input.id = "listName"
    input.placeholder = "List Name"
    input.name = "listName"

    windowField.appendChild(label)
    windowField.appendChild(input)

    const addButton = document.createElement("button")
    addButton.innerHTML = "Add"
    addButton.type = "button"
    addButton.addEventListener("click", ()=>{
        mainProject.addItem(new project(input.value))
        createrProjectWindow(mainProject)
    })

    form.appendChild(windowField)
    form.appendChild(addButton)

    createProjectWindow.appendChild(form)

    
    
    popupWindow.appendChild(createProjectWindow)


    

    content.appendChild(popupWindow)
}