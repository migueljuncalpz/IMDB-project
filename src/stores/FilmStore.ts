import {defineStore} from "pinia";
import type {FilmInfo, SeriesInfo} from "@/stores/types";
import {Swipe} from "@/stores/enums";
import router from "@/router";



interface State {
    seriesList:SeriesInfo[],
    filmsList: FilmInfo[],
    filmsToSend: Array<[string,string,string,string]>
}

export const useFilmStore = defineStore('film', {
    state: (): State => {
        return {
            filmsToSend: [],
            // for initially empty lists
            filmsList: [],
            seriesList:[]
        }
    },
    getters: {
        getFilmsList: (state: State) => state.filmsList,
        getSeriesList: (state: State) => state.seriesList,

    },

    actions: {
        getMoviesOrSeries(moviesOrSeries:string){
            if(moviesOrSeries==="movies"){
                console.log("Movies")
                fetch('http://localhost:8080/search/movies')
                    .then(response => response.json())
                    .then(data =>{
                        console.log("Movies GET: "+data.length)
                        let i=0
                        const filmsList:FilmInfo[] = []
                        for( i ; i<20 ; i++){
                            const film:FilmInfo = {
                                director:data[i].directors[0].fullName,
                                name:data[i].primaryTitle,
                                valueRating:data[i].averageRating,
                                runtimeMinutes:data[i].runtimeMinutes,
                                year:data[i].startYear,
                                gender:data[i].genres,
                                filmId:data[i].tconst,
                                cast:data[i].starring,
                                filmImage: "",
                            }
                            console.log(film)
                            filmsList.push(film)
                        }
                        this.filmsList=filmsList
                    })
                    .catch(error => console.error(error));
            }else{
                fetch('http://localhost:8080/search/series')
                    .then(response => response.json())
                    .then(data =>{
                        let i=0
                        const seriesList:SeriesInfo[] = []
                        for( i ; i<20 ; i++){
                            const series:SeriesInfo = {
                                name:data[i].primaryTitle,
                                valueRating:data[i].averageRating,
                                runtimeMinutes:data[i].runtimeMinutes,
                                year:data[i].startYear,
                                gender:data[i].genres,
                                seriesId:data[i].tconst,
                                cast:data[i].starring,
                                filmImage: "",
                                director:data[i].directors[0].fullName
                            }
                            seriesList.push(series)
                        }
                        this.seriesList= seriesList
                    })
                    .catch(error => console.error(error));
            }
        },
        postLike() {
            this.postLiking(Swipe.Like)
        },
        postDislike() {
            this.postLiking(Swipe.Dislike)
        },
        postSuperLike() {
            this.postLiking(Swipe.Superlike)

        },
        postUnwatch() {
            this.postLiking(Swipe.Unwatch)
        },
        postLiking(liking: Swipe) {
            let id
            let director
            let gender
            if(this.filmsList.length!==0){
                const film=this.filmsList.shift()
                id = film?.filmId
                director = film?.director
                gender = film?.gender
            }else{
                const series=this.seriesList.shift()
                id = series?.seriesId
                director = series?.director
                gender = series?.gender
            }
            if( id !== undefined && gender!== undefined && director!==undefined && liking!==undefined){
                const filmSwiped:[string,string,string,string] = [id.toString(),gender?.[0],director,liking]
                this.filmsToSend.push(filmSwiped)
            }
            if(this.filmsToSend.length>=10){
                fetch('http://localhost:8080/search/findr', {
                    method: 'GET',
                    body: JSON.stringify(this.filmsToSend),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => response.json()
                ).then(json => console.log(json)
                ).catch( error => console.log(error));
            }
            if(this.filmsList.length===0 && this.seriesList.length===0){
                router.push("/results")
            }
        }
    },
})
