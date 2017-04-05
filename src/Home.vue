<template>
    <div>
        <hero></hero>
        <featured-hotels></featured-hotels>
    </div>
</template>

<script>
    import Hero from './Hero.vue';
    import FeaturedHotels from './FeaturedHotels.vue';

    export default {
        name: 'home',
        data () {
            return {}
        },
        components: {
            Hero,
            FeaturedHotels
        }
    }
</script>

<style>

</style>
