<template>
    <div class="the-search" > 
        <div class="the-search-bar" :class="{darkSearch: dark}" > 
            <img :src="search.icon">
            <input type="text" v-model="searchValue" :class="{darkSearch: dark}" :placeholder=search.placeholder @keyup="searchCountries(searchValue)"> 
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        search() {
            return this.$store.getters.search
        },
        dark() {
            return this.$store.getters.dark
         },
        searchValue: {
            get () {
                return this.$store.getters.searchValue
            },
            set (value) {
                return this.$store.dispatch('updatingSearch', value)
            },

        }
    },
    methods: {
        searchCountries(sc) {
            this.$store.dispatch('searchingCountries', {

                searchInput: sc

            })
        }
    }
    
}
</script>


<style scoped>

.the-search-bar {
    display: flex;
    background-color: white;
    box-shadow: 0 1px 5px #ccc;
    padding: 1rem;
    border-radius: 5px
}

.the-search-bar img {
    width: 8%;
    opacity: 0.6;
    margin-right: 8px
}

.the-search-bar input[type="text"] {
    border: none;
    font-family: 'Nunito Sans', sans-serif;
    outline: none;
}

.darkSearch {
    background-color: hsl(209, 23%, 22%);
    box-shadow: none;
    color: white;
}

.darkSearch img {
    color: white;
}

</style>