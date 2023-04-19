import {defineStore} from "pinia";
import type {FilmInfo} from "@/stores/types";
import {Swipe} from "@/stores/enums";
import router from "@/router";

interface FilmSwiped {
    id: number;
    state: Swipe;
}

interface State {
    filmsList: FilmInfo[],
    filmsToSend: FilmSwiped[]
}

export const useFilmStore = defineStore('film', {
    state: (): State => {
        return {
            filmsToSend: [],
            // for initially empty lists
            filmsList: [
                {
                    filmId: 1,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender: [],
                    valueRating: 7.9,
                    ageRating: "+13",
                    cast: []
                },
                {
                    filmId: 2,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic2',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender: [],
                    valueRating: 7.9,
                    ageRating: "+13",
                    cast: []
                },
                {
                    filmId: 3,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic3',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender: [],
                    valueRating: 7.9,
                    ageRating: "+13",
                    cast: []
                },
                {
                    filmId: 4,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic4',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender: [],
                    valueRating: 7.9,
                    ageRating: "+13",
                    cast: []
                },
                {
                    filmId: 1,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender: [],
                    valueRating: 7.9,
                    ageRating: "+13",
                    cast: []
                },
                {
                    filmId: 2,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic2',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender: [],
                    valueRating: 7.9,
                    ageRating: "+13",
                    cast: []
                },
                {
                    filmId: 3,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic3',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender: [],
                    valueRating: 7.9,
                    ageRating: "+13",
                    cast: []
                },
                {
                    filmId: 4,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic4',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender: [],
                    valueRating: 7.9,
                    ageRating: "+13",
                    cast: []
                },
                {
                    filmId: 1,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender: [],
                    valueRating: 7.9,
                    ageRating: "+13",
                    cast: []
                },
                {
                    filmId: 2,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic2',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender: [],
                    valueRating: 7.9,
                    ageRating: "+13",
                    cast: []
                },
                {
                    filmId: 3,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic3',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender: [],
                    valueRating: 7.9,
                    ageRating: "+13",
                    cast: []
                },
                {
                    filmId: 4,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic4',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender: [],
                    valueRating: 7.9,
                    ageRating: "+13",
                    cast: []
                },
            ],
        }
    },
    getters: {
        getFilmsList: (state: State) => state.filmsList,
    },
    actions: {
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
            const filmId = this.filmsList.shift()?.filmId
            if( filmId !== undefined){
                const filmSwiped ={
                    id:filmId,
                    state:liking
                }
                this.filmsToSend.push(filmSwiped)
            }
            if(this.filmsToSend.length>=10){
                //TODO Send data to BACK
                console.log(this.filmsToSend)
            }
            if(this.filmsList.length===0){
                router.push("/results")
            }
        }

    }
})
