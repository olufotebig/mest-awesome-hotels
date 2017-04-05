<template>
    <div>
        <div class="container">
            <p class="header u-center">Hotels in {{search_query}}</p>
            <div class="loading  u-center" v-if="loading">
                <h5>Searching...</h5>
            </div>
    
            <div v-if="error" class="error">
                Error
            </div>
            <div v-if="hotels" class="row">
                <div class="twelve columns">
                    <hotel-search-card v-for="hotel in hotels" v-bind:hotel="hotel" :key="hotel.id"></hotel-search-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HotelSearchCard from './HotelSearchCard.vue';
    export default {
        data() {
            return {
                search_query: this.$route.params.city, //should not initialize like this
                loading: false,
                hotels: null,
                error: null,
            }
        },
        created() {
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData();
        },
        watch: {
            // call again the method if the route changes
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                this.error = this.post = null;
                this.loading = true;
                // replace getPost with your data fetching util / API wrapper
                this.getPost(this.$route.params.city, (err, hotels) => {
                    console.log(err);
                    this.loading = false
                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.hotels = hotels
                    }
                })
            },
            getPost(city, callback) {
                let hotels = this.mockHotels();
                setTimeout(function() {
                    callback(null, hotels);
                }, 3000);
    
            },
            mockHotels() {
                return [{
                    id: 0,
                    title: "beni gold hotel and apartments",
                    slug: "beni-gold-hotel-and-apartments-23234",
                    address: "Victoria Island, Lagos - 18 Adeleke Adedoyin Off Kofo Abayomi, Victoria-island, Lagos",
                    img: "/media/hotel.png",
                    price: "$41.00",
                    social: {
                        likes: 120,
                        dislikes: 30
                    }
    
                }, {
                    id: 0,
                    title: "Hotel Ibis Lagos Ikeja",
                    slug: "hotel-ibis-lagos-ikeja",
                    address: "Ikeja, Lagos - 23 Toyin Street, Ikeja, Lagos",
                    img: "/media/hotel.png",
                    price: "$82.00",
                    social: {
                        likes: 120,
                        dislikes: 30
                    }
    
                }, {
                    id: 0,
                    title: "Wazobia Plaza Hotel",
                    slug: "wazobia-plaza-hotel",
                    address: "Wazobia Plaza Hotel",
                    img: "/media/hotel.png",
                    price: "$14.00",
                    social: {
                        likes: 120,
                        dislikes: 30
                    }
    
                }, {
                    id: 0,
                    title: "Limeridge Hotel, Lekki",
                    slug: "limeridge-hotel-lekki",
                    address: "Lekki, Lagos - Plot 10, Chevron Drive",
                    img: "/media/hotel.png",
                    price: "$41.00",
                    social: {
                        likes: 120,
                        dislikes: 30
                    }
    
                }]
            }
        },
        components: {
            HotelSearchCard
        }
    }
</script>

<style>
    .header {
        font-weight: 400;
        font-size: 22px;
        margin: 24px 0;
        padding: 12px;
        text-transform: capitalize;
        background: #fff;
    }
    
    .row {
        padding: 0;
    }
    
    .u-center {
        text-align: center;
    }
</style>