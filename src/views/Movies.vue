<template>
        <div>
          <div v-for="movie in moviesList">
            {{movie.title}}
            <img :src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2/'+movie.poster_path" alt="">

          </div>
        </div>
</template>

<script>
    import ApiMovies from "@/mixins/ApiMovies";
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
        name: "Movies",

        data: function() {

            return {
                moviesList:[]
            }
        },
        components: {

        },
        methods: {

        },
        created() {
          this.getMovies()
              .then(data => this.moviesList = data.results)
              .catch(err => console.log(err));
        },
        mixins:[ApiMovies]
    }
</script>

<style>

</style>