const getTitle = (state) =>({
    getTitle: () => {
        return state.title
    }
})

const getDescription = (state) =>({
    getDescription: () => {
        return state.description
    }
})
const getCheckable = (state) =>({
    getCheckable:() => {
        console.log(state.checkable)
    }
})
export const todoItem = (inputTitle="Title", description="") =>{
    let state = {
        title: inputTitle, // this is just a different name because of testing could easily be "title: title" or just "title," you would need to change the function signature tho
        description: description, // weird but you referer to the value not the key when using in functions. you could also use state.description or state.complete to do it that way
    }
    return Object.assign(
        {},
        getTitle(state),
        getDescription(state),
    )
}

export const todoItemcheck = (inputTitle="title",description,checked=false) =>{
    let state = {
        checkable: checked,

    }
    return Object.assign(
    {},
    todoItem(inputTitle,state.description),
    getCheckable(state)
)
}