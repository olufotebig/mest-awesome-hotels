<template>
    <div class="hotel-card">
        <div class="hotel-thumbnail-wrapper">
            <img class="hotel-thumbnail" v-bind:src="hotel.img">
        </div>
        <div class="hotel-details">
            <p>
                <span class="hotel-title"  v-on:click="showHotel"> {{hotel.title}} </span> 
                <span class="hotel-price u-pull-right">{{hotel.price}}</span>                
            </p>
            <p>
                <span>{{hotel.address}}</span>
            </p>
            <p class="padtop">
                <span class="social social-like">Likes {{hotel.social.likes}}</span> &nbsp;&nbsp;
                <span class="social social-dislike">Dislikes {{hotel.social.dislikes}}</span>
                <button class="button button-primary u-pull-right" v-on:click="showHotel">Book Now</button>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['hotel'],
        methods: {
            showHotel(){
                this.$router.push({
                    name: 'hotel',
                    params: {
                        slug: this.hotel.slug
                    }
                });
            },
            
        }
    }
</script>

<style>
    
    .hotel-card {
        background: #ffffff;
        text-align: left;
        height: 180px;
        padding: 12px;
        margin-bottom: 24px;
    }
    
    .hotel-card .hotel-thumbnail {
        width: 180px;
        float: left;
    }
    
    .hotel-card .hotel-thumbnail {
        width: 176px;
        height: 176px;
        border: 4px solid #efefef;
        border-radius: 12px;
    }
    
    .hotel-card .hotel-details {
        margin-left: 192px;
    }
    
    .hotel-details p {
        margin: 0;
        font-size: 14px;
    }
    
    .hotel-card .hotel-details .hotel-title, .hotel-price {
        margin: 0;
        text-transform: capitalize;
        font-size: 18px;
        font-weight: 600;
    }
    .hotel-title{
        color: #0083BD;
        cursor: pointer;
        /* Dissuss the disadvantages of using pointer as regards to SEO*/
    }
    .hotel-price {
        color: #55DCBC;
    }
    .social {
        font-weight: 500;
    }
    .social-like{
        color: #0083BD;
    }
     .social-dislike{
        color: #F6A623;
    }

     .padtop{
        padding-top: 12px;
    }
</style>