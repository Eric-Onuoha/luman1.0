const currentDate = new Date();

const months = ['january', 'february', 'march', 'april',
'may', 'june', 'july', 'august', 'september',
'october', 'november', 'december'];

const monthNames = {
    "january": 1, "february": 2, "march": 3, "april": 4, "may": 5, "june": 6,
    "july": 7, "august": 8, "september": 9, "october": 10, "november": 11, "december": 12
};

const regex = /^(\d{4})([a-zA-Z]+)(\d+)$/;

export const getPlainDate = (dateToChange) => {
    const changedDate = new Date(dateToChange);
    let year = changedDate.getUTCFullYear();
    let month = changedDate.getUTCMonth() + 1;
    let day = changedDate.getUTCDate();

    return (day + " " + months[month - 1] + " " + year);
}

export const getCurrentDateToUpdate = () => {
    // This determines what day you are making changes to on LUMAN App
    // return new Date("2024-6-26");
    return new Date();
}

export const getTodaysPlainDate = () => {
    const todaysDate = new Date();
    let year = todaysDate.getUTCFullYear();
    let month = todaysDate.getUTCMonth() + 1;
    let day = todaysDate.getUTCDate();

    return (day + " " + months[month - 1] + " " + year);
}


export const getDate = (dateToChange) => {
    const changedDate = new Date(dateToChange);
    let year = changedDate.getUTCFullYear();
    let month = changedDate.getUTCMonth() + 1;
    let day = changedDate.getUTCDate();

    return (year + "" + months[month - 1] + "" + day);
}

export const getTodaysDate = () => {
    const todaysDate = new Date();
    let year = todaysDate.getUTCFullYear();
    let month = todaysDate.getUTCMonth() + 1;
    let day = todaysDate.getUTCDate();

    return (year + "" + months[month - 1] + "" + day);
}

export const getPlainMonthDate = (date) => {
    const newDate = date.match(regex);

    return (newDate[1]+""+monthNames[newDate[2]]+""+newDate[3]);
}

export const getCurrentMonth = (date = currentDate) =>{
    const month = date.getUTCMonth() + 1;

    return (months[month - 1]);
}

export const getCurrentYear = (date = currentDate) =>{
    const currentYear = date.getFullYear();

    return currentYear;
}

export const getMonthRange = (date = currentDate) => {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const firstDay = (year + "" + months[month - 1] + "" + 1);
    const lastDay = (year + "" + months[month - 1] + "" + lastDate);

    return {firstDay, lastDay};
}

