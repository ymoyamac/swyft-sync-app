
export function onlyLetters(value: string) {
    if (value === '') {
        return false;
    }
    const onlyLetters = new RegExp(/^[a-zA-Z\s]*$/);
    return !onlyLetters.test(value);
}

export function isEmail(value: string) {
    if (value === '') {
        return false;
    }
    const email = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return !email.test(value);
}

export function required(value: string) {
    return value === '';
}

export function notBlank(value: string) {
    if (value === '') {
        return false;
    }
    const notBlank = new RegExp(/^\S.*$/);
    return !notBlank.test(value);
}
