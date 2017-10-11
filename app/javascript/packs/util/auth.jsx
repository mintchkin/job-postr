import jwt_decode from 'jwt-decode'

export const isLoggedIn = () => {
    return sessionStorage.jwt;
}

export const getUserId = () => {
    return jwt_decode(sessionStorage.jwt).sub
}