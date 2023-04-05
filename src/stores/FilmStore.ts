import {defineStore} from "pinia";
interface State {
    filmsList: FilmInfo[]
}
export const useFilmStore = defineStore('film', {
    state: (): State => {
        return {
            // for initially empty lists
            filmsList: [
                {
                    filmId:1,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender:[],
                    valueRating:7.9,
                    ageRating:"+13",
                    cast:[]
                },
                {
                    filmId:2,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic2',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender:[],
                    valueRating:7.9,
                    ageRating:"+13",
                    cast:[]
                },
                {
                    filmId:3,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic3',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender:[],
                    valueRating:7.9,
                    ageRating:"+13",
                    cast:[]
                },
                {
                    filmId:4,
                    filmImage: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
                    name: 'Titanic4',
                    year: 1997,
                    synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
                    gender:[],
                    valueRating:7.9,
                    ageRating:"+13",
                    cast:[]
                },
            ],
        }
    },
    getters: {
        getFilmsList: (state:State) => state.filmsList,
    },
})

export interface FilmInfo {
    name: string
    year: number
    gender: string []
    filmImage:string
    filmId:number
    synopsys:string
    cast:string[]
    valueRating:number
    ageRating:string
}
