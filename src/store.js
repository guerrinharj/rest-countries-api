import { createStore } from 'vuex';


const store = createStore({
    state() {
        return {
           title: "Where in the world?",
           themeswitcher: [
            {
                name: 'Dark Mode',
                icon: require('@/assets/moon-outline.svg'),
            }, 
            {
                name:  'Light Mode',
                icon: require('@/assets/sunny-outline.svg'),
            }
            ],
           dark: false,
           search: 
           {
               icon: require('@/assets/search-outline.svg'),
               placeholder: 'Search for a country...'
            },
            filter: 
            {
                title: 'Filter by Region',
                continents: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
                icon: require('@/assets/caret-down-outline.svg'),
                open: false
            },
           countries: null,
           categories: ['Native Name', 'Population', 'Region', 'Sub Region', 'Capital', 'Top Level Domain', 'Currencies', 'Languages', 'Border Countries'],
           back: 
           {
               icon: require('@/assets/arrow-back-outline.svg'),
               title: 'Back'
           },
           searchValue: '',
           page: {
               on: false,
               country: null
           },
           
        }
    },
    getters: {
           
        title(state) {
            return state.title 
        },
        themeswitcher(state) {
            return state.themeswitcher
        },
        dark(state) {
            return state.dark
        },
        search(state) {
            return state.search
        },
        filter(state) {
            return state.filter
        },
        countries(state) {
            return state.countries
        },
        categories(state) {
            return state.categories
        },
        back(state) {
            return state.back
        },
        searchValue(state) {
            return state.searchValue
        },
        page(state) {
            return state.page
        }
    },


    mutations: {

        openTheMenu(state) {
            state.filter.open = !state.filter.open
        },

        switchTheTheme(state) {
            state.dark = !state.dark
        },

        createTheCountries(state) {
      
            fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => state.countries = data)
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
              });

        },

        updateTheSearch(state, payload) {

            state.searchValue = payload

        },

        searchTheCountries(state, payload) {

            const searched = payload.searchInput
            
            if (state.searchValue === '') {

                fetch('https://restcountries.eu/rest/v2/all')
                .then(response => response.json())
                .then(data => state.countries = data)
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });

            } else {

                

                fetch(`https://restcountries.eu/rest/v2/name/${searched}`)
                .then(response => response.json())
                .then(data => state.countries = data)
    
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                  });

            }
        },

        filterTheRegion(state, payload) {

            const filtered = payload

            fetch(`https://restcountries.eu/rest/v2/region/${filtered}`)
                .then(response => response.json())
                .then(data => state.countries = data)
    
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                  });

                  state.filter.open = false

        },


        chooseTheCountry(state, payload) {

            const chosed = payload.country

            state.page.on = true

            state.page.country = chosed
    

        },

        closeThePage(state) {

            state.page.on = false

        },
        
        borderTheCountry(state, payload) {

            const borderCountry = payload.bordercountry

           
            const found = state.countries.filter(country => {
                
                    if (country.alpha3Code === borderCountry) {
                        return country
                    }


            })

            state.page.country = found[0]


        }


    },

    actions: {
        openingMenu(context, payload) {
            context.commit('openTheMenu', payload)
        },
        switchingTheme(context, payload) {
            context.commit('switchTheTheme', payload)
        },
        creatingCountries(context, payload) {
            context.commit('createTheCountries', payload)
        },
        updatingSearch(context, payload) {
            context.commit('updateTheSearch', payload)
        },
        searchingCountries(context, payload) {
            context.commit('searchTheCountries', payload)
        },
        filteringRegion(context, payload) {
            context.commit('filterTheRegion', payload)
        },
        choosingCountry(context, payload) {
            context.commit('chooseTheCountry', payload)
        },
        closingPage(context, payload) {
            context.commit('closeThePage', payload)
        },
        borderingCountry(context, payload) {
            context.commit('borderTheCountry', payload)
        }
    }


})

export default store