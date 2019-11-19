/*
ajax request function, return Promise object
*/

import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {
    if (type === 'GET') {
        let str = ''
        Object.keys(data).forEach(key => {
            str += key + '=' + data[key] + '&'
        })
        if (str !== '') {
            str = str.substring(0, str.length - 1)
            url = url + '?' + str
        }
        return axios.get(url) 
    } else {
        return axios.post(url, data)
    }
}