<template>

<div class="color-page" :class="{darkPage: dark}">

    <div class="the-page"> 


        <div class="the-page-container"> 

            <div class="back-area" @click="closePage"> 
             <router-link to="/">   

                <img :src="back.icon">
                <p> {{ back.title }} </p>

             </router-link>
            </div>

            <div class="country-area"> 

                <div class="flag-area"> 

                    <img :src="country.flag">

                </div>

                <div class="info-area">

                    <h2> {{ country.name }} </h2> 

                    <div class="general-info-area"> 

                        <p> <strong> Native Name: </strong> {{ country.nativeName }} </p>

                        <p> <strong> Population: </strong> {{ country.population }} </p>

                        <p> <strong> Region: </strong> {{ country.region }} </p>

                        <p> <strong> Subregion: </strong> {{ country.subregion }} </p>

                        <p> <strong> Capital: </strong> {{ country.capital }} </p>

                        <p> <strong> Top Level Domain: </strong> {{ country.topLevelDomain }} </p>

                        <p> <strong> Currencies: </strong> {{ country.currencies[0].name }} </p>

                        <p> <strong> Languages: </strong> {{ country.languages[0].name }} </p>

                    </div>

                    <div class="border-area"> 

                        <h4> Border Countries: </h4>
                        <ul> 
                            <li v-for="border in country.borders" :key="border" @click="borderCountry(border)"> 
                                {{ border }} 
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    </div>
</div>
    
</template>


<script>
export default {

    computed: {
        country() {
            return this.$store.getters.page.country
        },
        back() {
            return this.$store.getters.back
        },
        dark() {
            return this.$store.getters.dark
         },
    },
    methods: {
        closePage() {
            return this.$store.dispatch('closingPage')
        },
        borderCountry(bc) {
            return this.$store.dispatch('borderingCountry', {

                bordercountry: bc

            })
        }
    }
    
}
</script>



<style scoped>


    .the-page {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0;
    }

    .the-page-container {
        width: 90%;
    }

    .back-area {
        cursor: pointer;
        transition: 0.4s ease;
        border: solid 1px #ccc;
        border-radius: 10px;
        padding: 0.5rem 1.5rem;
        width: 5%;
        box-shadow: 0 1px 5px #ccc;
    }

    .back-area a {
        display: flex;
        align-items: center;  
        text-decoration: none;
        color: black;
    }

    .back-area:hover img {
        transform: translateX(-18%);
        transition: 0.4s ease
    }

    .back-area img {
        width: 25%;
        margin-right: 10px
    }

    .country-area {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 4rem 0
    }

    .flag-area, .info-area {
        width: 50%
    }

    .flag-area img {
        width: 100%
    }
    
    .info-area {
        padding: 0 4rem;
    }

    .general-info-area {
        display: flex;
        flex-wrap: wrap;
        width: 40%
    }

    .general-info-area strong {
        font-size: 1rem;
        margin-right: 2px;
    }

    p {
        margin: 3px;
        font-size: 14px;
    }

    ul {
        display: flex;
        align-items: center;
        padding: 0;
        justify-content: flex-start;
        flex-wrap: wrap
    }

    li {
        list-style-type: none;
        margin: 5px 10px 0 0;
        border: solid 1px #ccc;
        padding: 8px 12px;
        border-radius: 16px;
        cursor: pointer;
        transition: 0.2s ease
    }

    li:hover {
       background-color: black;
       color: white;
       transition: 0.2s ease
    }

    article {
        width: 100%;
        height: 100%;
    }

    .color-page {
        height: 88vh;
        overflow: hidden
    }

    .darkPage {
        background-color: hsl(207, 26%, 17%);
        color: white!important;
}

@media (max-width: 600px) {

    .color-page {
        overflow: initial
    }


    .back-area {
        width: 20%;
        padding: 0rem 1.5rem;
    }

    .country-area {
        display: block;
        margin: 4rem auto;
        width: 90%;
    }

    .flag-area, .info-area {
        margin: auto;    
        width: 100%;
    }

    .info-area {
        padding: 1px
    }

    .general-info-area {
        display: block;
        width: 100%;
    }

    p {
        margin: 12px 0
    }



}



</style>