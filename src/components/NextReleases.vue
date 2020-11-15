<template>
  <div class="nextReleasesContainer">
    <div class="videoContainer">
      <video autoplay muted loop src="../assets/video.mp4">
        <track kind="subtitles" srclang="fr-FR" src="subtitles.fr.vtt" lang="fr-FR">
      </video>
    </div>

    <div class="containerReleases">
      <h1>Demon Slayer : Le Train de l'infini</h1>
      <p>
        Véritable carton au Japon, le film Demon Slayer : Le Train de l'infini est la plus grande surprise de cette année 2020. Malgré un contexte sanitaire difficile qui n'a pas épargné les salles de cinéma, le film a réuni pas moins de 12 millions de spectateurs japonais, permettant d'amasser pas moins 129 millions d'euros. Et ce en à peine trois semaines d'exploitation. Des chiffres impressionnants. Demon Slayer : Le Train de l'infini fait directement suite à la première saison de la série animée. Un coup de marketing assez malin, puisque le visionnage du film devient de ce fait indispensable, et qui permet d'expliquer l'immense succès du film.
      </p>
      <button id="buttonPlay">
        <font-awesome-icon icon="play" />
        <span>Lecture</span>
      </button>
      <button id="buttonInfo">
        <font-awesome-icon icon="info-circle" />
        <span>Plus d'infos</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextRealeses",
  data() {
    return {};
  },
  components: {
  }
};
</script>
<style >
.nextReleasesContainer {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #1414147e;
  display: flex;
  align-items: center;
}
.nextReleasesContainer > .videoContainer {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 99%;
  overflow: hidden;
}
.nextReleasesContainer > .videoContainer > video {
  width: 100%;
}
.containerReleases {
  width: 500px;
  margin-left: 40px;
}
.containerReleases h1 {
  color: #ffffff;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 30px;
  position: relative;
  text-transform: uppercase;
}
.containerReleases p {
  color: #e9e9e9;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: #e9e9e9 0em 0em 0em;
  font-size: 15px;
  margin-bottom: 30px;
  text-align: justify;
}
.containerReleases button {
  border: none;
  background: rgba(78, 78, 78, 0.562);
  color: #e9e9e9;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  transition: transform 0.5s;
}
.containerReleases button:hover {
  border: none;
  background: rgb(255, 255, 255);
  color: #141414;
  transform: scale(1.1);
  cursor: pointer;
}
.containerReleases button span {
  padding-left: 10px;
}
#buttonPlay {
  width: 180px;
  height: 60px;
  border-radius: 4px;
  margin-right: 20px;
}
#buttonInfo {
  width: 180px;
  height: 60px;
  border-radius: 4px;
}

@media only screen and (max-width: 1024px) {
  .nextReleasesContainer {
    height: 42vh;
  }
  .containerReleases h1 {
    font-size: 40px;

  }
}
@media only screen and (max-width: 768px) {
  .nextReleasesContainer {
    height: 42vh!important;
  }
  .containerReleases h1 {
    font-size: 30px!important;
  }
  .containerReleases p {
    font-size: 12px!important;
  }
}
@media only screen and (max-width: 375px) {
  .nextReleasesContainer {
    height: 26vh!important;
  }
  .containerReleases h1 {
    font-size:12px!important;
    margin-bottom: 10px!important;
  }
  .containerReleases p {
    font-size: 7px!important;
    margin-bottom: 10px!important;
  }
  #buttonPlay {
    font-size: 12px;
    width: 25%!important;
    height: 40px!important;
  }
  #buttonInfo {
    font-size: 12px;
    width: 30%!important;
    height: 40px!important;
  }
}
@media only screen and (max-width: 900px) {
  .nextReleasesContainer {
    height: 50vh;
  }
}
@media only screen and (max-width: 790px) {
  .containerReleases h1 {
    font-size: 40px;
  }
}
@media only screen and (max-width: 699px) {
  .nextReleasesContainer {
    height: 40vh;
  }
  .containerReleases p {
    font-size: 13px;
  }
}
@media only screen and (max-width: 599px) {
  .containerReleases {
    width: 400px;
  }
  .containerReleases p {
    font-size: 13px;
  }

  #buttonPlay {
    width: 120px;
  }
  #buttonInfo {
    width: 170px;
  }
}
@media only screen and (max-width: 470px) {
  .containerReleases {
    width: 350px;
    margin-left: 20px;
  }
  .containerReleases h1 {
    font-size: 30px;
  }

  .containerReleases p {
    font-size: 11px;
  }

  #buttonPlay {
    font-size: 12px;
  }
  #buttonInfo {
    font-size: 12px;
  }
  .nextReleasesContainer {
    height: 33vh;
  }
}
@media only screen and (max-width: 399px) {
  .containerReleases {
    width: auto;

    margin-top: 5%;
  }
  .containerReleases h1 {
    padding-right: 20%;
    font-size: 14px;
  }

  .containerReleases p {
    padding-right: 30%;
    font-size: 8px;
  }
  button span {
    padding-bottom: 300px;
  }
  #buttonPlay {
    font-size: 12px;
    width: 45%;
    height: 50px;
  }
  #buttonInfo {
    font-size: 12px;
    width: 45%;
    height: 50px;

  }
}
</style>
