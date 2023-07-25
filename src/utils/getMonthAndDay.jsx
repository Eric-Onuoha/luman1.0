export const getPlainDate = (dateToChange) => {
    const changedDate = new Date(dateToChange);
    let year = changedDate.getUTCFullYear();
    let month = changedDate.getUTCMonth() + 1;
    let day = changedDate.getUTCDate();
    let months = ['january', 'february', 'march', 'april',
            'may', 'june', 'july', 'august', 'september',
            'october', 'november', 'december'];
    return (day + " " + months[month - 1] + " " + year);
}

export const getTodaysPlainDate = () => {
    const todaysDate = new Date();
    let year = todaysDate.getUTCFullYear();
    let month = todaysDate.getUTCMonth() + 1;
    let day = todaysDate.getUTCDate();
    let months = ['january', 'february', 'march', 'april',
            'may', 'june', 'july', 'august', 'september',
            'october', 'november', 'december'];
    return (day + " " + months[month - 1] + " " + year);
}


export const getDate = (dateToChange) => {
    const changedDate = new Date(dateToChange);
    let year = changedDate.getUTCFullYear();
    let month = changedDate.getUTCMonth() + 1;
    let day = changedDate.getUTCDate();
    let months = ['january', 'february', 'march', 'april',
            'may', 'june', 'july', 'august', 'september',
            'october', 'november', 'december'];
    return (year + "" + months[month - 1] + "" + day);
}

export const getTodaysDate = () => {
    const todaysDate = new Date();
    let year = todaysDate.getUTCFullYear();
    let month = todaysDate.getUTCMonth() + 1;
    let day = todaysDate.getUTCDate();
    let months = ['january', 'february', 'march', 'april',
            'may', 'june', 'july', 'august', 'september',
            'october', 'november', 'december'];
    return (year + "" + months[month - 1] + "" + day);
}

