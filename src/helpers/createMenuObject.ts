type MenuOption = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObject = (activeOption: MenuOption) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if (activeOption !== ''){
        returnObject[activeOption] = true
    }

    return returnObject
}