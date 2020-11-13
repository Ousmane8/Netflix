<template>
    <b-col v-if="movie" class="product-card">
<!--        <b-col class="product-image">-->
<!--            <img src="http://www.aendesign.co.uk/images/hc%20t-shirt%20mock-up%20front%401-crop-u22496.png?crc=114384536">-->
<!--        </b-col>-->
        <b-col class="product__detail">
            <h1>{{movie.title}}</h1>
            <p>{{movie.description}}</p>
           <!-- <Button  type="button" v-if="movie" btnTitle="Add to cart" classList="btn btn-red" :btnFunction="()=>addToCart(movie)"/>-->
        </b-col>
    </b-col>
</template>

<script>
    // import TitlePage from "../components/TitlePage";
    // import Button from "../components/Button";
    import ApiProducts from "../mixins/ApiMovies";
    import Card from "../mixins/Card";
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import ApiMovies from "../mixins/ApiMovies";

    export default {
        // components: {
        //     TitlePage,
        //     Button
        // },
        data: function () {
            return {
                movie:null
            }
        },
        mixins:[ApiMovies, Card],
        created() {
            console.log(this.$route.params.id);
            this.getMovie(this.$route.params.id)
            .then(data=> this.movie=data)
            .catch(err=> console.log(err))
        }
    }
</script>

<style lang="scss" scoped>

    body {
        background-color: #f3f3f3;
    }

    .product-card {
        background-color: #fdfefe;
        max-width: 650px;
        min-height: 500px;
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 150px;
        box-shadow: 8px 12px 30px darken( #f3f3f3, 25%);
        color: #919495;
        font-weight: normal;
        text-align: left;
        font-size: 18px;
        position: relative;
    }

    .product__detail {
        width: auto;
        float: left;
        height: 100%;
        padding: 30px;
        h1 {
            color: #333;
            font-family: 'Pacifico', cursive;
            margin-bottom: 35px;
        }
        button {
            width: 150px;
            height: 50px;
            margin-top: 20px;
            background-color: #337AB7;
            border-radius: 0;
            color: #fff;
            box-shadow: 2px 2px 7px darken(#337AB7, 25%);
            &:hover, &:active, &:focus {
                color: #fff;
            }
        }
    }

    //.product-image {
    //   position: absolute;
    //    right: -20px;
    //    top: -40px;
    //    img {
    //  max-width: 400px;
            //    }
    //}

    @media (max-width: 700px) {
        .product-card {
            margin-left: 20px;
            margin-right: 20px;
        }

    }

    @media (max-width: 540px) {
        .product-card {
            overflow: hidden;
            margin-bottom: 50px;
        }
        .product__detail {
            width: auto;
            z-index: 1;
        }
        //.product-image {
        //    width: 100%;
         //   left: 40%;
        //    top: -50px;
        //}
    }

    @media (max-width: 440px) {
        .product__detail {
            width: auto;
        }
    }

    @media (max-width: 365px) {
        .product__detail {
            width: auto;
            position: relative;
            color: #333;
            background-color: rgba(255, 255, 255, 0.7);
        }
    }
</style>