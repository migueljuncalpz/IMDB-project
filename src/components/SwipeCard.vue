<template>
  <div class="card-wrapper" @touchstart="onTouchStart" @touchend="onTouchEnd" @touchmove="onTouchMove">
    <div class="card" :style="{ transform: 'translateX(' + this.x + 'px)' }">
      <img :src="filmImg" class="profile-img" />
      <div class="profile-info">
        <h2>{{ filmName }}</h2>
        <p>{{ year }}, {{ filmSynopsys }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwipeCard',
  props: {
    filmImg: {
      type: String,
      required: true,
    },
    filmName: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    filmSynopsys: {
      type: String,
      required: true,
    },
    onSwipeLeft: {
      type: Function,
      default: () => {},
    },
    onSwipeRight: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      x: 0,
      y: 0,
      dragging: false,
      swipeDirection: null
    };
  },
  methods: {
    onTouchStart(event) {
      console.log("start")
      this.dragging = true;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    onTouchMove(event) {
      console.log("move")
      if (this.dragging) {
        const dx = event.touches[0].clientX - this.x;
        const dy = event.touches[0].clientY - this.y;
        this.x += dx;
        this.y += dy;
      }
    },
    onTouchEnd(){
      this.dragging = false;
      // Calculate swipe direction
      const dx = this.x - this.startX;
      const dy = this.y - this.startY;
      const threshold = 150
      if(Math.abs(dx)>=threshold){
        if(dx>0){
          this.swipeDirection="right"
          this.onSwipeRight()
        }else{
          this.swipeDirection="left"
          this.onSwipeLeft()
        }
      }
      this.x=0
      this.y=0
      // Trigger swipe event if necessary
      if (this.swipeDirection) {
        this.$emit("swipe", this.swipeDirection);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  touch-action: pan-x pan-y;
  color: black;
  position:relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    position: relative;
    width: 350px;
    height: 500px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    cursor: grab;
    transition: transform 1s;

    .profile-img {
      width: 100%;
      height: 60%;
      object-fit: cover;
    }

    .profile-info {
      padding: 20px;
    }

    h2 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }

    p {
      margin: 10px 0 0;
      font-size: 18px;
      color: #666;
    }
  }
  .dislike-card{
    transform: scale(0.8);
  }
}






</style>