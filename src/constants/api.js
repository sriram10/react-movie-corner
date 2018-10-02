import Axios from "axios";

export const BASE_API = 'https://api.themoviedb.org/3/'
export const API_KEY = '89d9f2c1bef774c23805c97cbc5f0056'

export const TRENDING = "/trending/all/day"
export const TOP_RATED = "/movie/top_rated"
export const UPCOMING = "/movie/upcoming"
export const SEARCH = "/search/movie"
export const GET_MOVIE = "/movie/"


export const moviesAPI = Axios.create({
  baseURL: BASE_API,
  params: {
    api_key: API_KEY
  }
})
