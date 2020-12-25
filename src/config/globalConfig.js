
import Axios from 'axios'

export const API_KEY = '';
export const rootUrl = "https://pa-desafio.herokuapp.com/"
export const baseUrl = "http://179.199.151.197:3000/"

const basicFetch = async (endpoint) => {
    return (await fetch(`${rootUrl}${endpoint}`)).json();
}

export const Http = Axios.create({
    baseURL: rootUrl
})

export const getPostList = () => {
    return basicFetch(`api/posts?clientId=${API_KEY}`)
}

