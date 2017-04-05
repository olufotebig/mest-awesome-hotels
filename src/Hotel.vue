<template>
    <div>
        <div class="loading" v-if="loading">
            Loading...
        </div>
    
        <div v-if="error" class="error">
    
        </div>
    
        <div v-if="hotel" class="content">
            <h2>{{hotel.name}}</h2>
            <p></p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                hotel: null,
                error: null
            }
        },
        created() {
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData()
        },
        watch: {
            // call again the method if the route changes
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                this.error = this.hotel = null
                this.loading = true
                // replace getPost with your data fetching util / API wrapper
                this.getPost(this.$route.params.slug  , (err, hotel) => {
                    this.loading = false
                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.hotel = hotel
                    }
                })
            },
            getPost(slug, callback){
                let hotel = this.mockHotel();
                setTimeout(function(){
                    callback(null,hotel);
                },3000);
            },
            mockHotel(){
                return {
                    name: "Hotel name"
                }
            }
        }
    }
</script>

<style>
    
</style>