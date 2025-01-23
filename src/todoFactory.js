import { name } from "pubsub-js";

export const dog = (thename,otheroptions) =>
{
    let state = {
        name: thename,



    }

    return Object.assign({},
        barker(state),
        {
            yummy: () =>{
                console.log("really yummy");
            }
        },
        {
        talk: () =>
            {
                console.log(thename);
            }
        }
    )
}

const barker = (state) => ({
    bark: () =>
    {
        console.log("bark")
    }
})

const yum = (state) => ({
    yummy: () => {
        console.log("yummy")
    }
})

console.log("anything ran from here will automatically run when imported -- Triston")