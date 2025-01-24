let id = 1

const getTitle = (state) =>({
    getTitle: () => {
        return state.title
    }
})

const setTitle = (state) => ({
    setTitle: (title) => {
        state.title = title 
    }
})

const getDescription = (state) =>({
    getDescription: () => {
        return state.description
    }
})

const setDescription = (state) => ({
    setDescription: (description) => {
        state.description = description
    }
})

const getChecked = (state) =>({
    getChecked:() => {
        return state.checked
    }
})

const toggleCheck = (state) => ({
    toggleCheck: () => {
        state.checked = !state.checked
    }
})

const getId = (state) =>({
    getId: () => {
        return state.id
    }
})

export const todoItem = (inputTitle="title",description = null, checked=false, date = null) =>{
    let state = {
        id: id++,
        title: inputTitle, // this is just a different name because of testing could easily be "title: title" or just "title," you would need to change the function signature tho
        description: description, // weird but you referer to the value not the key when using in functions. you could also use state.description or state.complete to do it that way
        checked: checked,
        date: date,
    }
    return Object.assign(
        {},
        getTitle(state),
        getDescription(state),
        getChecked(state),
        toggleCheck(state),
        setTitle(state),
        setDescription(state),
        getId(state),
    )
}
