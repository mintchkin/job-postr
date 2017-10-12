import jwt_decode from 'jwt-decode'

export const isLoggedIn = () => {
    // token exists and exp is in the future
    if (sessionStorage.jwt && jwt_decode(sessionStorage.jwt).exp > new Date() / 1000) {
        return sessionStorage.jwt;
    } else {
        return false;
    }
}

export const getUserId = () => {
    return jwt_decode(sessionStorage.jwt).sub
}