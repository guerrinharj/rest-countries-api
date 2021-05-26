<template>

<article :class="{dark: dark}">

  <the-header> </the-header>

  <main :class="{dark: dark}" v-if="!page.on">

    <div class="wrapper">

      <div class="search-filter-area"> 
        <the-search> </the-search>
        <the-filter> </the-filter>
      </div>

      <the-list> </the-list>

    </div>

  </main>


  <main v-if="page.on"> 

    <page-card> </page-card>

  </main>

</article>

</template>

<script>

import TheHeader from './components/TheHeader.vue'
import TheSearch from './components/TheSearch.vue'
import TheFilter from './components/TheFilter.vue'
import TheList from './components/TheList.vue'
import PageCard from './components/PageCard.vue'


export default {
  name: 'App',
  components: {
    TheHeader,
    TheSearch,
    TheFilter,
    TheList,
    PageCard
  },
  computed: {
    dark() {
      return this.$store.getters.dark
    },
    page() {
      return this.$store.getters.page
    }
  },
     mounted() {
       return this.$store.dispatch('creatingCountries')
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

body {
  font-family: 'Nunito Sans', sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  background-color:  hsl(0, 0%, 98%)
}

article {
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 90%;
  margin: 50px auto;
}

.search-filter-area {
  display: flex;
  justify-content: space-between;
}

main {
  width: 100%;
}

.dark {
  background-color: hsl(207, 26%, 17%);
  color: white!important;
}


@media (max-width: 600px) {


.search-filter-area {
  display: block;
}



}


</style>
