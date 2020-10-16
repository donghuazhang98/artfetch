/*
export two request modules for login and signup
*/

import ajax from './ajax'

export const reqLogin = (user) => ajax('/login', user, 'POST')

export const reqSignup = (user) => ajax('/signup', user, 'POST')

export const reqUser = () => ajax('/user')

export const reqUserProfile = (username) => ajax(`/user/${username}`)

export const reqUploadImage = (imageObject) => ajax('/uploadImage', imageObject, 'POST')

export const reqMainGallery = () => ajax('/main/gallery')