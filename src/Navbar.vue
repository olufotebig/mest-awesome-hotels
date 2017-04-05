<template>
    <div class="nav navbar">
        <router-link class="brand" to="/">Awesome Hotels</router-link>
        <ul class="navbar-right">
            <router-link to="/">FAQ</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
            }
        }
    }
</script>


<style>
    .nav.navbar {
        background: #ffffff;
        margin: 0;
        padding: 0 24px;
        text-align: left;
        height: 80px;
    }
    .nav.navbar a{
        text-decoration: none;
        color: #0083BD;
        font-weight: 500;
    }

    .nav.navbar .brand {
        display: inline-block;
        margin: 29px 0;

    }

    .nav.navbar .navbar-right{
        display: inline-block;
        float: right;
        margin: 29px 0;
    }

</style>