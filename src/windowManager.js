const content = document.querySelector(".content")


export function createWindow(Project, list)
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
    
    content.appendChild(header)
}

export function updateWindow(list)
{

}
/*<div class="header">My lists <div class="add">+</div></div>
<div class="card-container">
    <div class="card">
        reminders
    </div>
    <div class="card">To do</div>
</div>
*/