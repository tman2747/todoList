
export const dog = (thename) =>
{
    let name = thename
    return {
        talk: () =>
        {
            console.log(name)
        },
        changename: () => {
            name = "null"
        }
    }
}

const barker = (state) => ({
    bark: () => {
        console.log("bark")
    }
})

console.log("hello form ")