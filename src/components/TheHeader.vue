<template>
    <div class="header" :class="{dark: dark}"> 
        <div class="header-container"> 
            <div class="header-title"> 
                {{ title }}
            </div>
            <div class="themeswitcher" @click="switchTheme"> 
                <div class="themeswitcher-icon">
                    <span v-if="!dark"><img :src=themeswitcher[0].icon></span>
                    <span v-else><img :src=themeswitcher[1].icon></span>
                </div>
                <div class="themeswitcher-name">
                    <span v-if="!dark"> <p> {{ themeswitcher[0].name }} </p> </span> 
                    <span v-else> <p> {{ themeswitcher[1].name }} </p>  </span>     
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        title() {
            return this.$store.getters.title
        },
        themeswitcher() {
            return this.$store.getters.themeswitcher
        },
        dark() {
            return this.$store.getters.dark
        }
    },
    methods: {
        switchTheme() {
           return this.$store.dispatch('switchingTheme')
        }
    }
}
</script>


<style scoped>

.header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    border-bottom: solid 1px #ccc;
    box-shadow: 0 0 10px #ccc
}

.header-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto
}

.header-title {
    font-size: 1.5rem;
    font-weight: 800
}

.themeswitcher {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.themeswitcher-icon {
    display: flex;
    align-items: center;
    margin-right: 5px
}

img {
    width: 20px;
}

p {
    font-size: 14px;
}


.dark {
    box-shadow: none
}


@media (max-width: 600px) {


    .header-title {
        font-size: 1.1rem

    }



}

</style>