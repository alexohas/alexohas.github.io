

export const lessons = async function () {
    return fetch('https://mysterious-depths-33235.herokuapp.com/lessons')
        .then(response => response.json())
        .then(data => data);
}

export const user = async function () {
    return fetch('https://mysterious-depths-33235.herokuapp.com/user')
        .then(response => response.json())
        .then(data => data);
}