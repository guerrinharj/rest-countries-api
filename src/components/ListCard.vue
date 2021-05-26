<template>

    <div class="the-card" :class="{darkCard: dark}">

        <div class="the-flag"> 
            <img :src="flag">
        </div>

        <div class="card-info">
            <h3> {{ name }} </h3>
            <p> <strong> Population: </strong> {{ population }} </p>
            <p> <strong> Region: </strong> {{ region }} </p>
            <p> <strong> Capital: </strong> {{ capital }} </p>
        </div>

    </div>
    
</template>


<script>
export default {

    props: ['flag', 'name', 'population', 'region', 'capital'],
    computed: {
        dark() {
            return this.$store.getters.dark
         }
    }
    
}
</script>


<style scoped>

    .the-card {
        width: 20vw;
        height: 50vh;
        margin: 10px;
        background: white;
        box-shadow: 1px 1px 5px 1px rgb(231 231 231);
    }

    .the-flag {
        height: 50%;
    }

    .the-flag img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-info {
        margin: 2rem
    }

    .darkCard {
    background-color: hsl(209, 23%, 22%);
    box-shadow: none;
    color: white;
}


@media (max-width: 600px) {


    .the-card {
        width: 100%
    }



}

</style>