
<template>
  <div>
    <SwipeCard
        v-if="this.films.length!==0"
        :film-img="films[0].filmImg"
        :film-name="films[0].name"
        :year="films[0].year"
        :film-synopsys="films[0].synopsys"
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
          filmImg: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
          name: 'Titanic',
          year: 1997,
          synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
        },
        {
          filmImg: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
          name: 'Titanic2',
          year: 1997,
          synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
        },
        {
          filmImg: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
          name: 'Titanic3',
          year: 1997,
          synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
        },
        {
          filmImg: "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg",
          name: 'Titanic4',
          year: 1997,
          synopsys: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against ... waters of the North Atlantic in the early hours of April 15, 1912.',
        },
      ]
    };
  },
  methods: {
    onSwipeLeft() {
      this.films.shift()
      console.log('Swiped left');
    },
    onSwipeRight() {
      this.films.shift()
      console.log('Swiped right');
    },
  },
};
</script>
