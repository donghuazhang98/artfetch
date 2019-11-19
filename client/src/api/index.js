/*
export two request modules for login and signup
*/

import ajax from './ajax'

export const reqLogin = ({ username, password }) => ajax('/login', { username, password }, 'POST')

export const reqSignup = (user) => ajax('/signup', user, 'POST')