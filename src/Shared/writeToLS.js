export const writeToLS = (key, value) => {
    localStorage.setItem(key,value)
};

export const readFromLS = (key) => (localStorage.getItem(key))

export const removeFromLS = (key) => localStorage.removeItem(key);
