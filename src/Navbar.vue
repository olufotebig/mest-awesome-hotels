<template>
    <div class="nav navbar">
        <router-link class="brand" to="/">Awesome Hotels</router-link>
        <ul class="navbar-right">
            <router-link to="/">Home</router-link>
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
        margin: 0 0 24px 0;
        padding: 0 24px;
        text-align: left;
    }
    .nav.navbar a{
        text-decoration: none;
    }

    .nav.navbar .brand {
        display: inline-block;
        margin: 12px 0;
    }

    .nav.navbar .navbar-right{
        display: inline-block;
        float: right;
        margin: 12px 0;
    }

</style>