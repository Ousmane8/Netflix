import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getMovies(){
            return fetch(apiConfigs.apiUrl+"movie/popular?api_key=4760d21789a44566c3865f7919b9e23c")
                .then(res =>res.json())
        },
        getMovie(id) {
            return fetch(apiConfigs.apiUrl+"movie/"+id+"?api_key=4760d21789a44566c3865f7919b9e23c")
            .then(res=>res.json())
        }
    }
}