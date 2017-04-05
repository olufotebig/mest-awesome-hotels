// How might we break this component into even more reusable components
<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="hero">
        <div class="search-box">
            <input type="text" placeholder="Search cities" v-model="search_query"><input class="date-input" type="date" placeholder="Checkin Date" v-bind:value="checkin_date" v-on:input="checkin_date = $event.target.value"><input class="date-input" type="date" placeholder="Checkout Date" v-bind:value="checkout_date"
                v-on:input="checkout_date = $event.target.value"><button class="button button-primary" v-on:click="search">Search</button>
        </div>
    </div>
</template>

<script>
    //TODO bind search_query keyboard enter event to click submit
    const moment = require('moment');
    export default {
        name: 'hero',
        data() {
            return {
                search_query: "",
                checkin_date: moment().format('YYYY-MM-DD'),
                checkout_date: moment().add(1, 'day').format('YYYY-MM-DD')
            }
        },
        methods: {
            search() {
                // TODO: gracefully handle invalid search e.g blank stringss
                // TODO: accomodate for plain text search 
                if (this.isValidCity())
                    this.pushHotels();
            },
    
            isValidCity() {
                // TODO: make this method more robust
                return this.search_query.trim().length !== 0;
            },
            pushHotels() {
                this.$router.push({
                    name: 'hotels',
                    params: {
                        city: this.search_query
                    },
                    query: {
                        checkin_date: this.checkin_date,
                        checkout_date: this.checkout_date
                    }
                });
            }
    
    
        }
    }
</script>

<style>
    .hero {
        background: #c3c3c3;
        background: url('/media/bg.png') no-repeat;
        background-size: cover;
        height: 200px;
        text-align: center;
        padding-top: 120px;
    }
    
    .hero .search-box {
        margin: 0 auto;
        width: 80%;
    }
    
    .hero .search-box input {
        width: 200px;
        margin: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        height: 38px;
        padding: 6px 10px;
        background-color: #fff;
        border: 0 solid #d1d1d1;
        border-radius: 0;
        box-shadow: none;
        box-sizing: border-box;
        display: inline;
    }
    
    button.button.button-primary {
        margin: 0;
        width: 200px;
        height: 38px;
        border-radius: 0;
        display: inline;
        font-weight: 600;
        font-size: 14px;
        line-height:12px;
    }

    .hero .search-box input.date-input {
        border-left: 1px solid #d1d1d1;
    }
</style>