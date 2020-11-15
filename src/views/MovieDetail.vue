<template>
  <div>
  <Header />
    <div v-if="movie" id="Detail">
      <div id="containerDetail">
        <div id="descriptionsContainer">
          <div id="movieTitle">
            <h1>{{ movie.title }}</h1>
          </div>
          <div id="movieDetail">
            <div class="col-md-6">
              <img :src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2/'+movie.poster_path" alt="" id="imagemPosterSlide" />
            </div>
            <div class="col-md-6 descript">
              <h2>
                Résumé :
              </h2>
              <p>
                <span>{{ movie.overview }}</span>
              </p>
            </div>
          </div>
          <div id="descriptions">
            <p>
              Titre original
              <span>{{ movie.original_title }}</span>
            </p>
            <p>
              Popularité
              <span>{{ movie.popularity }}</span>
            </p>
            <p>
              Nombre de vote
              <span class="genrer" v-for="genre in movie.genres">{{ genre.name }}</span>
            </p>
            <p>
              Notes
              <span>{{ movie.vote_average }}</span>
            </p>

            <p>
              Date de sortie
              <span>{{ movie.release_date }}</span>
            </p>
            <p>
              Langue originale
              <span>{{ movie.original_language }}</span>
            </p>
          </div>
          <button id="myList" v-on:click="addToMyList">
            Ajouter à ma liste
            <font-awesome-icon icon="list-ul" class="cr"/>
          </button>
        </div>
      </div>
    </div>
    <div id="newMovies">
      <div id="slide">
        <h1 class="hm">Récommandations</h1>
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
              v-for="recommendation in recommendations " v-bind:key="recommendation.id + removeIdDuplicate()"
              id="movieDiv"
          >
            <div v-on:click="showDetail(recommendation.id)">
              <img :src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2/'+recommendation.poster_path" alt="" id="imagemPosterSlidee" />
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>

    import Header from "@/components/Header";
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import ApiMovies from "../mixins/ApiMovies";

    export default {
      name: "MovieDetail",
        data: function () {
            return {
                movie:null,
                recommendations:[]
            }
        },
      components: {
        Header,
      },
        mixins:[ApiMovies],
        created() {
            console.log(this.$route.params.id);
            this.getMovie(this.$route.params.id)
            .then(data=> this.movie=data)
            .catch(err=> console.log(err))
            this.getRecommendations(this.$route.params.id)
              .then(data=> this.recommendations=data.results)
              .catch(err=> console.log(err))
        },
      methods: {
        addToMyList() {
          this.$store.commit("addToMyList", this.movie);
          this.showToast();
        },
        showToast() {
          this.$toast.open({
            message: "Ajouté à ma liste",
            type: "success",
            duration: 5000,
            dismissible: true,
            queue: true,
            position: "top-right"
          });
        },
        showDetail(_id) {
          this.$router.push({ name: "MovieDetail", params: { id: _id } });
        },
        removeIdDuplicate() {
          return String(Math.random());
        }
      }
    }
</script>

<style lang="scss" scoped>
#Detail {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222222;
}
iframe {
  width: 100%;
  max-width: 650px;
}
#containerDetail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#rateContainer {
  width: 100%;
}
#rateNumber {
  color: #e9e9e9;
  font-size: 17px;
  border: 2px solid white;
  background-color: rgb(255, 196, 0);
  border-radius: 10px;
  width: 45px;
  height: 45px;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
#myList {
  background: #ff142d;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  border: none;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s;
  margin-bottom: 30px;
}
#myList:hover {
  transform: scale(1.2);
  cursor: pointer;
  background: #c20b1d;
}
#movieDetail {
  display: flex;
  width: 45%;
  justify-content: space-around;
  margin-top: 1%;
  margin-bottom: 3%;
}
#imagemPosterSlide {
  border-radius: 15px;
  transition: 0.5s;
  margin-bottom: 20px;
  width: 80%;
  margin-left: 10%;
  height: 100%;
}

#movieDetail p {
  color: #e9e9e9;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
  "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: justify;
}
.descript{
  margin-top: 2%;
}
.descript h2{
  color: #ffffff;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-align: justify;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-weight: 900;
  margin-bottom: 20px;
  font-size: 40px
}
.descript p{
  font-family: Avenir, Helvetica, Arial, sans-serif!important;
  font-size: 25px;
  text-align: left!important;
}
#descriptionsContainer {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
#descriptionsContainer h1 {
  color: #ffffff;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
#descriptions {
  border-radius: 20px;
  width: 90%;
  height: 38%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}
#descriptions span {
  color: #969696;
}
#descriptions p {
  color: #ffffff;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-align: justify;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: capitalize;
}

#movieTitle {
  width: 58%;
  text-align: center;
}
p span {
  font-weight: 100;
  font-size: 20px;
  padding-top: 10px;
}
@media only screen and (max-width: 900px) {
  #movieDetail {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  #descriptions p {
    color: #ffffff;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    text-align: justify;
    text-shadow: black 0.1em 0.1em 0.2em;
    font-weight: bold;
    margin-bottom: 30px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    text-transform: capitalize;
  }
  p span {
    font-weight: 100;
    font-size: 18px;
    padding-top: 10px;
  }
}
@media only screen and (max-width: 699px) {
  iframe {
    height: 200px;
  }
  #movieDetail {
    display: block;
    width: 100%;
    justify-content: space-around;
    margin-top: 5%;
    margin-bottom:5%;
  }
  #descriptions p {
    color: #ffffff;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    text-align: justify;
    text-shadow: black 0.1em 0.1em 0.2em;
    font-weight: bold;
    margin-bottom: 30px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    text-transform: capitalize;
  }
  p span {
    font-weight: 100;
    font-size: 14px;
    padding-top: 10px;
  }
}
@media only screen and (max-width: 450px) {
  #descriptions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
}

//recommentations
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
  background: #222222;
  padding-bottom: 15px;
}
#newMovies .hm {
  color: white;
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 10px;
  margin-top: 0px!important;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: capitalize;
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
#imagemPosterSlidee {
  border-radius: 15px;
  transition: 0.5s;
  height: 100%;
  margin-bottom: 20px;
  width: 100%;
}
#imagemPosterSlidee:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.VueCarousel-navigation-button[data-v-453ad8cd] {
  color: #e9e9e9 !important;
  outline: none !important;
}
@media only screen and (max-width: 1024px) {
  #imagemPosterSlide {
    height: 100%;
  }
  #newMovies h1 {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
}
@media only screen and (max-width: 768px) {
  #imagemPosterSlide {
    height: 100%;
  }
  #newMovies h1 {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
}
@media only screen and (max-width: 375px) {
  #imagemPosterSlide {
    height: 100%;
  }
  #newMovies h1 {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
}
</style>