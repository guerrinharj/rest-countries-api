<template>
     <div class='the-filter' > 
         <div class="the-filter-title" :class="{darkFilter: dark}" @click="openMenu"> 
                <div > 
                    {{filter.title}}
                </div> 
                <div> 
                    <img :src="filter.icon">
                </div>
        </div>
         
         <div class="the-filter-menu" v-if="filter.open" :class="{darkFilter: dark}">
            <ul name="filter-menu" id="filter"> 
                <li v-for="continent in filter.continents" :key="continent" @click="filterRegion(continent)"> 
                    {{ continent }}
                </li>
            </ul>
        </div>
     </div>
</template>


<script>
export default {
    computed: {
        filter() {
            return this.$store.getters.filter
        },
        dark() {
            return this.$store.getters.dark
         },
    },
    
    methods: {
        openMenu() {
            return this.$store.dispatch('openingMenu')
        },
        filterRegion(reg) {
            return this.$store.dispatch('filteringRegion', reg)
        }
    }
    
}
</script>


<style scoped>

.the-filter {
    position: relative
}

.the-filter-title, .the-filter-menu {
    background-color: white;
    border-radius: 5px;
    font-size: 0.9rem;
}

.the-filter-menu {
    box-shadow: 1px 1px 10px #ccc;
}

.the-filter-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 20px 30px;
}

.the-filter:hover .the-filter-menu {
    display: block;
    font-size: 1rem;
    transition: all 0.3s ease
}

.the-filter-title img {
    width: 10px;
    margin-left: 10px;
}

.the-filter-menu {
    transition: all 0.3s ease;
    display: none;
    margin-top: 10px;
    position: absolute;
    padding: 20px 60px;
    z-index: 30
}

.the-filter ul {
    border: none;
    width: 100%;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.9rem;
    outline: none;
    list-style-type: none;
    padding: 0;
}

.the-filter li {
    margin: 10px;
    cursor: pointer;
}

.darkFilter {
    background-color: hsl(209, 23%, 22%);
    box-shadow: none;
    color: white;
}


@media (max-width: 600px) {


    .the-filter {
        margin: 1rem 0;
    }


    .the-filter-menu {
        display: block;
        width: 100%;
        padding: 0
    }

    .the-filter ul {
        padding: 1rem;
    }



}


</style>