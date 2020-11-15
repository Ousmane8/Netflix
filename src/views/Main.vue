<template>
  <div id="app">
    <Header />
    <NextReleases />
    <div id="app-movies">
      <Movies typeMovie="s=avengers" typeDescription="Populaires" />
      <Movies typeMovie="s=harry" typeDescription="Recommandés" />
      <Movies typeMovie="s=fast" typeDescription="Nouveautés" />
      <Movies typeMovie="s=super" typeDescription="Film à venir" />
      <Movies typeMovie="s=all" typeDescription="Ma liste" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Movies from "@/views/Movies";
import NextReleases from "@/components/NextReleases";
export default {
  name: "App",
  components: {
    Header,
    NextReleases,
    Movies
  }
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
