export function validStringByLetter(value) {

    return value.replace(/[^a-zA-Z ]/g, "")
}

export function capitalize(word) {
    return word
        .split(' ')
        .map((letter) => {
            return letter.charAt(0).toUpperCase() + letter.substr(1).toLowerCase()
        })
        .join(' ')
}