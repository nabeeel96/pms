export const writeToSS = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export const readFromSS = (key) => JSON.parse(sessionStorage.getItem(key));

export const removeFromSS = (key) => sessionStorage.removeItem(key);
