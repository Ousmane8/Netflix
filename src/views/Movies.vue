<template>
  <div id="newMovies">
            <div id="slide">
             <h1>{{ typeDescription }}</h1>
              <carousel
                  :perPage="4"
                  :navigateTo="0"
                  :mouseDrag="true"
                  :paginationEnabled="false"
                  :navigationEnabled="true"
                  :navigationClickTargetSize="9"
                  :perPageCustom="[[375, 2],[768, 3], [1024, 4],[1366, 5]]"
              >
                <slide
                    v-for="movie in moviesList " v-bind:key="movie.id + removeIdDuplicate()"
                    id="movieDiv"
                >
                  <div v-on:click="showDetail(movie.id)">
                    <img :src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2/'+movie.poster_path" alt="" id="imagemPosterSlide" />
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
</template>

<script>

    import ApiMovies from "@/mixins/ApiMovies";
    import { Carousel, Slide } from 'vue-carousel';
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {

        name: "Movies",

        data: function() {

            return {
              moviesList:[],
              paginationButtons: false
            }
        },
      props: ["typeMovie", "typeDescription"],
        components: {
          Carousel,
          Slide
        },
        methods: {
          showDetail(_id) {
            this.$router.push({ name: "MovieDetail", params: { id: _id } });
          },
          removeIdDuplicate() {
            return String(Math.random());
          }
        },
        created() {
          this.getMovies()
              .then(data => this.moviesList = data.results)
              .catch(err => console.log(err));
        },
        mixins:[ApiMovies]
    }
</script>

<style lang="scss">
#slide {
  width: 90%;
  height: 100%;
  text-align: center;
  margin: auto;
}
#newMovies {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
}
#newMovies h1 {
  color: white;
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 10px;
  margin-top: 15px;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: capitalize;
  border-top: 2px solid white;
  border-left-style: double;

}
#loadingMovie {
  display: flex;
  justify-content: center;
  align-items: center;
}
#movieDiv {
  margin-top: 23px;
  padding-left: 20px;
}
#imagemPosterSlide {
  border-radius: 15px;
  transition: 0.5s;
  height: 100%;
  margin-bottom: 20px;
  width: 100%;
}
#imagemPosterSlide:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.VueCarousel-navigation-button[data-v-453ad8cd] {
  color: #e9e9e9 !important;
  outline: none !important;
}

@media only screen and (max-width: 599px) {
  #imagemPosterSlide {
    height: 100%;
    width: 100%;
  }
  #newMovies h1 {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
}
</style>