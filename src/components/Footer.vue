<template>
    <div class="col-md-12 " id="footer">
        <div class="col-md-12">
            <ul class="list-unstyled list-inline social text-center">
                <li class="list-inline-item fb"><a href="https://www.facebook.com/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/></a></li>
                <li class="list-inline-item twi "><a href="https://twitter.com/"><font-awesome-icon :icon="{prefix: 'fab', iconName: 'twitter'}"/></a></li>
                <li class="list-inline-item insta"><a href="https://www.instagram.com/"><font-awesome-icon :icon="{prefix: 'fab', iconName: 'instagram'}"/></a></li>
                <li class="list-inline-item snap"><a href="https://www.snapchat.com/"><font-awesome-icon :icon="{prefix: 'fab', iconName: 'snapchat-ghost'}"/></a></li>
                <li class="list-inline-item snap"><a href="http://youtube.com/"><font-awesome-icon :icon="{prefix: 'fab', iconName: 'youtube'}"/></a></li>
                <li class="list-inline-item env"><a href="mailto:#" target="_blank"><font-awesome-icon icon="envelope"/></a></li>
            </ul>
        </div>
        <hr>
        <div class="col-md-12 text-center text-white">
            <p><a href="#" class="transition">Ynov Paris Campus - Netflix <b><span>© 2020</span> </b></a> All rights reserved.</p>
        </div>
    </div>

</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: "Footer"
    }
</script>

<style  lang="scss" scoped>
    // footer
    #footer {
        background: black !important;
        padding: 40px 0;
    }

    #footer a {
        color: #ffffff;
        text-decoration: none !important;
        background-color: transparent;
    }
    ul.list-unstyled.list-inline.social.text-center {
        font-size: 35px;
    }
    svg.svg-inline--fa.fa-facebook-f.fa-w-10:hover {
        color:#1877f2;
    }
    svg.svg-inline--fa.fa-twitter.fa-w-16:hover {
        color:#1da1f2;
    }
    svg.svg-inline--fa.fa-instagram.fa-w-14:hover{
        color:#c32aa3;
    }
    svg.svg-inline--fa.fa-snapchat-ghost.fa-w-16:hover{
        color:#fffc00;
    }
    svg.svg-inline--fa.fa-youtube.fa-w-18:hover{
        color:#ff0000;
    }
    svg.svg-inline--fa.fa-envelope.fa-w-16:hover{
        color:darkgrey;
    }

    #footer p{
        font-size: 15px;
        font-weight: bold;
    }
    // fin footer
</style>