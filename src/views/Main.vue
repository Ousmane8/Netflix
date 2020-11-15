<template>
  <div id="app">
    <Header />
    <NextReleases />
    <div id="app-movies">
      <Movies :movies="popular" typeDescription="Populaires" />
      <Movies :movies="toprated" typeDescription="Les mieux notés" />
      <Movies :movies="upcoming" typeDescription="Film à venir" />
      <Movies :movies="wishlist" typeDescription="Ma liste" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Movies from "@/views/Movies";
import NextReleases from "@/components/NextReleases";
import ApiMovies from "@/mixins/ApiMovies";

export default {
  name: "App",
  data: function() {
    return{
      popular:[],
      toprated:[],
      upcoming:[],
      wishlist:[]
    }
  },
  components: {
    Header,
    NextReleases,
    Movies
  },
  created() {
    this.getMovies()
        .then(data => this.popular = data.results)
        .catch(err => console.log(err));
    this.getToprated()
        .then(data => this.toprated = data.results)
        .catch(err => console.log(err));
    this.getUpcoming()
        .then(data => this.upcoming = data.results)
        .catch(err => console.log(err));
    this.wishlist= JSON.parse(localStorage.getItem("list")) || [];
  },
  mixins:[ApiMovies]
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
#app-movies  {
  background: #141414;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
