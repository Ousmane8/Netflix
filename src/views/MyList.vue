<template>
  <div>
    <Header />
    <div id="myListContainer">
      <div id="myListContent">
        <div v-bind:key="movie.id" v-for="movie in this.$store.state.list" id="moviesSaved">
          <div id="changeColorImage" v-if="movies.includes(movie.id)">
            <img :src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2/'+movie.poster_path" alt="" id="movieSaveImage" />
          </div>
          <div id="normalColorImage" v-else>
            <img :src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2/'+movie.poster_path" alt="" id="movieSaveImagee" />
          </div>

          <div id="buttonsMyList">
            <button
              id="checkedButton"
              title="Déjà regardé"
              v-if="movies.includes(movie.id)"
              @click="$store.commit('removeWatched', movie); updateValues()"
            >
              <font-awesome-icon icon="check" class="cr" color="#010"/>
            </button>
            <button
              id="checkAsWatched"
              v-on:click="markAsWatched(movie); checkIfWatched()"
              @click="markAsWatchedToast"
              title="Marquer comme regardé"
              v-else
            >
              <font-awesome-icon icon="chevron-right" class="cr" color="#00e500"/>
            </button>
            <button
              id="markToRemove"
              title="Supprimer de ma liste"
              v-on:click="$store.commit('removeData', movie); removeToast()"
            >
              <font-awesome-icon icon="trash" class="cr"  color="#e50931" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "MyList",
  data() {
    return {
      booleanMovie: true,
      movies: []
    };
  },
  components: {
    Header,
  },
  mounted() {
    this.checkIfWatched();
  },
  methods: {
    markAsWatched(movie) {
      this.$store.commit("markAsWatched", movie);
    },
    removeToast() {
      this.$toast.open({
        message: "Supprimé de ma liste\n",
        type: "error",
        duration: 3000,
        dismissible: true,
        queue: true,
        position: "top-right"
      });
    },
    markAsWatchedToast() {
      this.$toast.open({
        message: "Marqué comme regardé",
        type: "success",
        duration: 3000,
        dismissible: true,
        queue: true,
        position: "top-right"
      });
    },
    checkIfWatched() {
      this.$store.state.movieWatched.map(current => {
        this.movies.push(current.id);
      });
    },
    updateValues() {
      window.location.reload();
    }
  }
};
</script>

<style>
#myListContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #141414;
  padding-top: 1%;
  padding-bottom: 3%;
}
#myListContent {
  height: 100%;
  margin-top: 20px;
  margin-left: 2%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}
#moviesSaved {
  display: flex;
  flex-direction: column;
  width: 90%;
  transition: 0.5s;
  cursor: pointer;
}
#normalColorImage {
  width: 100%;
  position: relative;
}
#changeColorImage {
  width: 100%;
  height: 300px;
  position: relative;
  background: #414040be;
}
#movieSaveImagee {
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
#movieSaveImage {
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}

#moviesSaved:hover {
  transform: scale(1.05);
}
#buttonsMyList {
  display: flex;
  margin-top: 10px;
}
#buttonsMyList button {
  border: none;
  background: rgba(78, 78, 78, 0.562);
  font-size: 15px;
  text-align: center;
  transition: transform 0.5s;
  height: 30px;
}
#buttonsMyList button:hover {
  border: none;
  background: rgba(250, 250, 250, 0.26);
  color: #141414;
  transform: scale(1.1);
  cursor: pointer;
}
#checkedButton {
  width: 50%;
  margin-right: 2px;
}
#checkedButton:hover {
  width: 50%;
  margin-right: 2px;
}
#checkAsWatched {
  width: 50%;
  margin-right: 2px;
}
#markToRemove {
  width: 50%;
  margin-left: 2px;
}
@media only screen and (max-width: 999px) {
  #myListContent {
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
}
@media only screen and (max-width: 730px) {
  #myListContent {
    width: 60%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }
}
</style>
