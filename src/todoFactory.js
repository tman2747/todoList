export const todoItem = (inputTitle="Title", description="") =>{
    let state = {
        title: inputTitle, // this is just a different name because of testing could easily be "title: title" or just "title," you would need to change the function signature tho
        description: description, // weird but you referer to the value not the key when using in functions.
    }
    return Object.assign(
        {},
        {
            getTitle: () =>{
                return inputTitle
            }
        },        
        {
            getDescription: () => description
            
        },
    )
}




































export const dog = (thename,otheroptions) =>
{
    let state = {
        name: thename,



    }

    return Object.assign({},
        barker(state),
        {
            yum: () =>{
                console.log("really yummy");
            }
        },
        {
        talk: () =>
            {
                console.log(thename);
            }
        },
        yum(state),
    )
}

const barker = (state) => ({
    bark: () =>
    {
        console.log("bark")
    }
})

const yum = (state) => ({
    yum: () => {
        console.log("yummy")
    }
})

console.log("anything ran from here will automatically run when imported and before anything in index.js -- Triston")