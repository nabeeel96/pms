export const handleError = error => {
    if(error.response) {
        if(error.response.status === 419)
            return error.response.data.message
        else
            return error.response.data
    } else {
        return error.message
    }
}