export const isEmptyString = (value: string) => {
    return value === ''
}

export const isInvalidEmail = (value: string) => {
    return !value.includes('@') || !value.includes('.com')
}

