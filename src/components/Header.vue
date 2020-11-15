<template>
  <div id="header">
    <img class="logoHeader" :src="image" v-on:click="NavigateMain" />
    <nav role="navigation">
      <ul>
        <li id="selections">
          <a id="navigate">
            <font-awesome-icon icon="bars" size="2x" />
          </a>
          <ul class="dropdown">
            <li v-on:click="NavigateMain">
              <a>Accueil</a>
            </li>
            <li>
              <a>Films</a>
            </li>
            <li>
              <a>Nouveautés</a>
            </li>
            <li v-on:click="NavigateMyList">
              <a>Ma liste</a>
            </li>
          </ul>
        </li>
        <li class="items" v-on:click="NavigateMain">Accueil</li>
        <li class="items">Films</li>
        <li class="items">Nouveautés</li>
        <li class="items" v-on:click="NavigateMyList">Ma liste</li>
        <li></li>
      </ul>
    </nav>
    <div id="textForm">
      <form>
        <input type="text" name="text" placeholder="Titres, personnes et genres" />
      </form>
    </div>
  </div>
</template>

<script>
import image from "../assets/netflix-logo.png";
import Icon from "vue-awesome/components/Icon";
export default {
  name: "Header",
  data() {
    return {
      image: image,
      inputSearch: ""
    };
  },
  components: {
    "v-icon": Icon
  },
  methods: {
    NavigateMain() {
      this.$router.push({ name: "Main" });
    },
    NavigateMyList() {
      this.$router.push({ name: "MyList" });
    }
  }
};
</script>

<style>
#header {
  width: 100%;
  background: #141414;
  display: flex;
  align-items: center;
}

.logoHeader {
  margin-left: 30px;
}
.logoHeader:hover {
  cursor: pointer;
}
nav {
  width: 70vw;
  color: white;
  display: flex;
  align-items: center;
}
ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
li {
  color: #fff;
  display: table-cell;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
}

li a {
  color: #fff;
  cursor: default;
}
li:hover {
  cursor: pointer;
}
.items:hover {
  color: #ccc;
}
ul li ul {
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}
ul li ul li {
  clear: both;
  width: 100%;
}
.dropdown {
  background: #141414c7;
}
#navigate {
  opacity: 0;
  height: 0;
}

input[type="text"] {
  width: 1px;
  border: none;
  color: #e5e5e5;
  border-bottom: 2px solid #ccc;
  font-size: 13px;
  background-color: #141414;
  background-image: url("../assets/search.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 7px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

input[type="text"]:focus {
  width: 100%;
}
#textForm {
  width: 15%;
}

@media only screen and (max-width: 900px) {
  nav {
    width: 80vw;
  }
  ul li:hover > ul,
  ul li:focus-within > ul,
  ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
    font-size: 15px;
    position: absolute;
    z-index: 9999;
  }
  li :hover {
    color: #ccc;
  }
  #navigate {
    color: white;
    opacity: 10;
    height: auto;
  }
  .items {
    opacity: 0;
    height: 0;
    font-size: 0;
  }
  li {
    color: #fff;
    display: table-cell;
    padding: 1rem;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
  }

  li a {
    cursor: pointer;
  }
  nav {
    width: 30%;
    height: 30px;
    padding-top: 3px;
  }
  #textForm {
    width: 30%;
  }
}
@media only screen and (max-width: 626px) {
  .logoHeader {
    width: 50%;
    margin: 10px;
  }
  nav {
    width: 30%;
    padding-top: 25%;
    padding-left: 10px;

  }
  li {
    color: #fff;
    display: block;
    float: left;
    padding: 1rem;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
  }
  #selections {
    text-align: center;
  }
}

@media only screen and (max-width: 320px) {
  .logoHeader {
    margin-left: 0px;
  }
  #selections {
    padding-top: 60px;
    text-align: center;
  }
}
</style>
