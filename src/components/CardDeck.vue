
<template>
  <div class="wrap">
      <SwipeCard v-for="(film,index) in this.films" :key="film.filmId"
                 v-bind:style="'z-index:'+ index"
                 :film-img="film.filmImg"
                 :film-name="film.name"
                 :year="film.year"
                 :film-synopsys="film.synopsys"
                 @swipeLeft="onSwipeLeft"
                 @swipeRight="onSwipeRight"
      />
  </div>
</template>

<script>
import SwipeCard from "@/components/SwipeCard.vue";
export default {
  name: 'App',
  components: {
    SwipeCard,
  },
  data() {
    return {
      films:[
        {
          filmId:1,
          filmImg: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
          name: 'Titanic',
          year: 1997,
          synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
        },
        {
          filmId:2,
          filmImg: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
          name: 'Titanic2',
          year: 1997,
          synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
        },
        {
          filmId:3,
          filmImg: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
          name: 'Titanic3',
          year: 1997,
          synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
        },
        {
          filmId:4,
          filmImg: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
          name: 'Titanic4',
          year: 1997,
          synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
        },
      ],
    };
  },
  methods: {
    onSwipeLeft() {
      this.films.pop()
      console.log('Swiped left');
    },
    onSwipeRight() {
      this.films.pop()
      console.log('Swiped right');
    },
  },
};
</script>

<style lang="scss">
.wrap{
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr;
  height: 80vh;
}
</style>
