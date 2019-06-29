const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/

const helper = {
    getFormatedDate: getFormatedDate,
    reviver: reviver
}

function reviver(key, value) {
    if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value);
    }
    return value;
}

function getFormatedDate(date) {
    return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
}

export default helper;