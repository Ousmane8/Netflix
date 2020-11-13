<template xmlns="http://www.w3.org/1999/html">
  <div class="home">
    <div class="col-md-12 our-story-header-wrapper">
      <div class="our-story-header" data-uia-our-story="our-story-header">
        <span class="svg-nfLogo our-story-logo nfLogo" data-uia="netflix-header-svg-logo-noclick">
          <svg viewBox="0 0 111 30" class="svg-icon svg-icon-netflix-logo" focusable="false">
            <g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
          <span class="screen-reader-text">Netflix</span>
        </span>
        <router-link to="/movies" class="authLinks redButton">Voir les films</router-link>
      </div>
    </div>
    <div class="col-md-12 container-fluid home-main our-story-card">
      <div class="concord-img-gradient"></div>
      <div class="our-story-card-text">
        <h1 class="lol">Films, séries&nbsp;TV et bien plus en illimité.</h1>
        <h2 class="lel">Où que vous soyez. Annulez à tout moment.</h2>
        <form class="cta-form email-form" method="GET">
          <h3 class="lil">Prêt à regarder Netflix&nbsp;? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>
          <div class="input-group">
            <input class="btn btn-lg" name="email" id="email" type="email" placeholder="Adresse e-mail" required>
            <button class="btn btn-red btn-lg" type="submit">COMMENCER <font-awesome-icon icon="chevron-right" class="cr"/></button>
          </div>
        </form>
      </div>
    </div>
    <div class="col-md-12 our-story-card animation-card watchOnTv">
      <div class="animation-card-container">
        <div class="our-story-card-text">
          <h1  class="our-story-card-title" data-uia="animation-card-title">
            Regardez Netflix sur votre&nbsp;TV.
          </h1>
          <h2  class="our-story-card-subtitle" data-uia="our-story-card-subtitle">
            Regardez Netflix sur votre Smart&nbsp;TV, PlayStation, Xbox, Chromecast, Apple&nbsp;TV, lecteurs Blu-ray et bien plus.
          </h2>
        </div>
        <div class="our-story-card-img-container">
          <div class="our-story-card-animation-container">
            <img alt="" class="our-story-card-img" src="../assets/tv-netflix.png" data-uia="our-story-card-img">
            <div class="our-story-card-animation">
              <video class="our-story-card-video" autoplay="" playsinline="" muted="" loop="">
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4">
              </video>
              <div class="our-story-card-animation-text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="col-md-12 our-story-card animation-card downloadAndWatch flipped">
        <div class="animation-card-container">
          <div class="our-story-card-text">
            <h1  class="our-story-card-title" data-uia="animation-card-title">
              Téléchargez vos séries préférées pour les regarder hors connexion.
            </h1>
            <h2  class="our-story-card-subtitle" data-uia="our-story-card-subtitle">
              Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.
            </h2></div><div class="our-story-card-img-container">
          <div class="our-story-card-animation-container">
            <img alt="" class="our-story-card-img" src="../assets/mobile-0819.jpg" data-uia="our-story-card-img">
            <div class="our-story-card-animation">
              <div class="our-story-card-animation-image">
                <img alt="" src="../assets/boxshot.png">
              </div>
              <div class="our-story-card-animation-text">
                <div class="text-0" data-uia="">Stranger Things</div>
                <div  class="text-1" data-uia="">Téléchargement en cours...</div>
              </div>
            </div>
          </div>
        </div><div class="center-pixel" style="position:absolute"></div>
        </div>
      </div>
      <div class="col-md-12 our-story-card animation-card watchOnDevice">
        <div class="animation-card-container">
          <div class="our-story-card-text">
            <h1 class="our-story-card-title" data-uia="animation-card-title">
              Où que vous soyez.
            </h1>
            <h2  class="our-story-card-subtitle" data-uia="our-story-card-subtitle">
              Regardez des films et séries&nbsp;TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris.
            </h2>
          </div>
          <div class="our-story-card-img-container">
            <div class="our-story-card-animation-container">
              <img alt="" class="our-story-card-img" src="../assets/device-pile.png" data-uia="our-story-card-img">
              <div class="our-story-card-animation">
                <video class="our-story-card-video" autoplay="" playsinline="" muted="" loop="">
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"></video>
                <div class="our-story-card-animation-text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script >
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  }
}
</script>
<style lang="scss">
  // our-story-header-wrapper
  .our-story-header-wrapper {
    background-color: transparent;
    transition: background-color .5s;
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
    padding-top: 20px;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 5rem;
    z-index: 10;
  }
  .our-story-header {
    position: relative;
    margin: 0 3.5rem;
    height: 100%;
  }
  .nfLogo {
    fill: #e50914;
    line-height: normal;
  }
  .nfLogo .svg-icon-netflix-logo {
    /*padding-top: .5rem;*/
    height: 45px;
    width: 167px;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  :not(svg) {
    transform-origin: 0px 0px;
  }
  .screen-reader-text {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  .authLinks.redButton {
    background-color: #e50914;
    line-height: normal;
    padding: 7px 17px;
    font-weight: 900;
    font-size: 1rem;
    float: right;
    text-transform: uppercase;
    text-decoration: none;
  }
  .authLinks.redButton:hover {
    background: black;
    box-shadow: 0 1px 0 rgba(0,0,0,.45);
    color: white;
    text-decoration: none;
  }

  .authLinks {
    color: #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    margin-top: .5rem;
  }
  a {
    text-decoration: none;
  }

  // fin our-story-header-wrapper

  // div home-main
  .home-main{
    background-image: url("../assets/netflix-bg.jpg") ;
    background-repeat: no-repeat;
    background-size: cover;
    color:#fff;
    height: 90vh;
    text-align: center;
    z-index: 0;
    position: absolute;
    top: -70px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    .home-main{
      top: -100px;
    }
  }
  .home-main .concord-img-gradient {
    position: absolute;
    background: rgba(0,0,0,.4);
    background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .home-main .our-story-card-text {
    position: relative;
    width: 100%;
    padding: 20% 0;
    max-width: 950px;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
  }
  @media only screen and (min-width: 1450px){
    .lol, .lel {
      max-width: 800px;
    }
  }
  .lol{
    line-height: 1.1;
    font-weight: 900;
    margin: 0 auto;
  }
  @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    .lol {
      font-size: 4rem;
    }
  }
  .lel{
    margin: 1rem auto;
    font-weight: 400;
  }
  @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    .lel{
      font-size: 1.625rem;
    }
  }
  .lil{
    padding: 0 5%;
    margin: 0 auto;
    font-weight: 400;
  }
  @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    .lil{
      max-width: none;
      padding-bottom: 20px;
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    .email-form {
      max-width: 950px;
      padding-top: .85rem;
    }
  }
  .input-group {
    margin: 20px auto;
    width: 100%;
  }
  @media only screen and (min-width: 1450px){
    .input-group {
      max-width: 800px;
    }
  }

  @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    .input-group{
      display: flex;
      flex-direction: row;
      margin: 0 auto;
    }
  }
  input.btn.btn-lg,
  input.btn.btn-lg:focus {
    min-width: 500px;
    height: 70px!important;
    background-color: white;
    box-sizing: border-box;
    font-size: 16px;
    border: solid 1px #8c8c8c;
    border-radius: 2px;
    display: block;
    appearance: none;
    color: #000;

  }
  @media only screen and (min-width: 1450px){
    input.btn.btn-lg,
    input.btn.btn-lg:focus {
      min-width: 500px;
      height: 70px!important;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      text-align: start;
    }
  }
  @media only screen and (min-width: 740px){
    .btn-lg {
      font-size: 16px;
    }
  }
  button.btn {
    width:35%;
    height: 70px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    button.btn {
      margin: 0!important;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border-left: 1px solid #333;
    }
  }
  @media only screen and (min-width: 1450px){
    button.btn {
      font-size: 1.65rem;
      min-height: 70px;
    }
  }
  @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    button.btn {
      padding: 0 1em;
      margin: .5em auto;
    }
  }
  .btn {
    position: relative;
    min-width: 74px;
    min-height: 50px;
    border: solid 1px transparent;
    border-radius: 2px;
  }
  .btn-red {
    color: #fff;
    background-color: #e50914;
    background-image: linear-gradient(to bottom,#e50914,#db0510);
    box-shadow: 0 1px 0 rgba(0,0,0,.45);
  }
  .btn-red.hover, .btn-red:focus, .btn-red:hover {
    background: #f40612;
    box-shadow: 0 1px 0 rgba(0,0,0,.45);
  }
  .cr{
    width: .70em;
    flex: 0 1 auto;
    margin: 0 0 0 .5em;
    position: relative;
  }
  // fin div home-main

  // animation-card
  .animation-card {
    background: black;
    color: #fff;
  }
  .animation-card .animation-card-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .animation-card.watchOnTv .our-story-card-text {
    margin: -5% 0;
  }
  .animation-card .our-story-card-text {
    width: 52%;
    height: 100%;
    flex: 0 1 auto;
    padding: 0 3rem 0 0;
    z-index: 3;
  }
  .our-story-card-subtitle, .our-story-card-text {
    font-size: 1.625rem;
    font-weight: 400;
  }
  .our-story-card-title {
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: .5rem;
  }
  .our-story-card-subtitle, .our-story-card-text {
    font-size: 1.625rem;
    font-weight: 400;
  }
  .animation-card .our-story-card-img-container {
    width: 48%;
    height: 100%;
    display: flex;
    flex: 0 1 auto;
    box-sizing: border-box;
  }
  .animation-card.watchOnTv .our-story-card-animation-container {
    margin: -10% -5% -5% 0;
  }
  .animation-card .our-story-card-animation-container {
    position: relative;
    overflow: hidden;
  }
  .animation-card.watchOnDevice .our-story-card-img, .animation-card.watchOnTv .our-story-card-img {
    position: relative;
    z-index: 2;
  }
  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }
  .animation-card.watchOnTv .our-story-card-animation {
    width: 100%;
    height: 100%;
    max-width: 73%;
    max-height: 54%;
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .animation-card.watchOnDevice .our-story-card-video, .animation-card.watchOnTv .our-story-card-video {
    width: 100%;
    height: 100%;
  }
  audio, canvas, progress, video {
    display: inline-block;
    vertical-align: baseline;
  }

  // fin animation-card

  // animation-card downloadAndWatch flipped
  .animation-card.flipped .animation-card-container {
    flex-flow: row-reverse;
  }
  .animation-card .animation-card-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .animation-card.flipped .animation-card-container .our-story-card-text {
    padding: 0 0 0 3rem;
  }
  .animation-card .our-story-card-text {
    width: 52%;
    height: 100%;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    z-index: 3;
  }
  .our-story-card-subtitle, .our-story-card-text {
    font-size: 1.625rem;
    font-weight: 400;
  }
  .our-story-card-title {
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: .5rem;
  }
  .our-story-card-subtitle, .our-story-card-text {
    font-size: 1.625rem;
    font-weight: 400;
  }
  .animation-card .our-story-card-img-container {
    width: 48%;
    height: 100%;
    display: flex;
    flex: 0 1 auto;
    box-sizing: border-box;
  }
  .animation-card.downloadAndWatch .our-story-card-animation-container {
    margin: -8% 0 -4% -15%;
    min-height: 100px;
    width: 100%;
  }
  .animation-card .our-story-card-animation-container {
    position: relative;
    overflow: hidden;
  }
  @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    .animation-card.downloadAndWatch .our-story-card-animation {
      padding: .5em .75em;
    }
  }
  .animation-card.downloadAndWatch .our-story-card-animation {
     position: absolute;
     left: 50%;
     bottom: 8%;
     transform: translateX(-50%);
     margin: 0 auto;
     background: #000;
     display: flex;
     align-items: center;
     width: 60%;
     min-width: 15em;
     padding: .25em .65em;
     border: 2px solid rgba(255,255,255,.25);
     box-shadow: 0 0 2em 0 #000;
     border-radius: .75em;
   }
  .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-image {
    margin: 0 1em 0 0;
    flex-grow: 0;
    flex-shrink: 0;
  }
  @media only screen and (min-width: 1450px){
    .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-image img {
      height: 5em;
    }
  }
  .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text {
    flex-grow: 1;
    flex-shrink: 1;
    margin: .3em 0;
  }
  @media only screen and (max-width: 949px) and (min-width: 550px), only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text .text-0 {
      font-size: 1em;
    }
  }
  .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text .text-0 {
    color: #fff;
    font-weight: 600;
    /*font-size: .9em;*/
  }
  @media only screen and (max-width: 949px) and (min-width: 550px), only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text .text-1, .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text .text-2 {
      font-size: .9em;
    }
  }
  .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text .text-1, .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text .text-2 {
    color: #0071eb;
    /*font-size: .75em;*/
    font-weight: 400;
  }
  @media only screen and (max-width: 949px) and (min-width: 550px), only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    .animation-card.downloadAndWatch .our-story-card-animation:after {
      height: 3.75em;
    }
  }
  .animation-card.downloadAndWatch .our-story-card-animation:after {
    width: 3em;
    /*height: 3em;*/
    outline: 2px solid #000;
    outline-offset: -2px;
    display: block;
    background: url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif) center center no-repeat;
    background-size: 100%;
    content: '';
    flex-grow: 0;
    flex-shrink: 0;
  }
  // fin animation-card downloadAndWatch flipped

  // animation-card watchOnDevice
  .animation-card.watchOnDevice .our-story-card-animation-container {
    margin: -5% -10% 0 0;
  }
  .animation-card.watchOnDevice .our-story-card-img, .animation-card.watchOnTv .our-story-card-img {
    position: relative;
    z-index: 2;
  }
  .animation-card.watchOnDevice .our-story-card-animation {
    width: 100%;
    height: 100%;
    max-width: 63%;
    max-height: 47%;
    position: absolute;
    top: 34%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  // fin animation-card watchOnDevice


  // div border
  @media only screen and (max-width: 949px) and (min-width: 550px), only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px){
    .our-story-card{
      padding: 70px 45px;
    }
  }
  .our-story-card {
    position: relative;
    border-bottom: 8px solid #222;
    /*padding: 50px 5%;*/
    margin-bottom: 0;
    color: #fff;
    top: 0;
  }
  // fin div border

</style>