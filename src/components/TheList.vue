<template>

    <div class="the-list"> 
        
        <ul> 

            
                <li v-for="country in countries" :key="country" @click="chooseCountry(country)"> 
                    <router-link to="/country">
                    <list-card
                    :flag="country.flag"
                    :name="country.name"
                    :population="country.population"
                    :region="country.region"
                    :capital="country.capital"
                    > 
                    </list-card>
                     </router-link>
                </li>
           

        </ul>
        
    </div>
    
</template>

<script>

import ListCard from './ListCard.vue'

export default {

    components: {
        ListCard 
     },
    computed: {
        countries() {
            return this.$store.getters.countries
        }
    },
    methods: {
        chooseCountry(co) {
             this.$store.dispatch('choosingCountry', {
                country: co

            })
        }
    }   
}
</script>


<style scoped>

ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%

}

li {
    list-style-type: none;
    cursor: pointer;
    transition: 0.4s ease
}

a {
    text-decoration: none;
    color: black;
}

li:hover {
    transform: translate(-2%, -2%);
    transition: 0.4s ease
}


</style>