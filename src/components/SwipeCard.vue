<template>
  <div class="card-wrapper" :style="wrapperStyle" @pointerdown="onPointerDown" @pointerup="onPointerUp" @pointermove="onPointerMove">
    <div class="card" :style="cardStyle">
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
      isDragging: false,
      startPos: {
        x: 0,
        y: 0,
      },
      currentPos: {
        x: 0,
        y: 0,
      },
      endPos: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    wrapperStyle() {
      return {
        transform: `translate(${this.currentPos.x}px, ${this.currentPos.y}px)`,
      };
    },
    cardStyle() {
      const rotation = ((this.currentPos.x) * Math.PI) / 180;
      const rotateString = `rotate(${rotation}deg)`;
      const scale = 1;
      const scaleString = `scale(${scale})`;
      return {
        transform: `${rotateString} ${scaleString}`,
      };
    },
  },
  methods: {
    onPointerDown(e) {
      console.log("DOWN")
      this.isDragging = true;
      this.startPos = {
        x: e.clientX,
        y: e.clientY,
      };
    },
    onPointerMove(e) {
      if (!this.isDragging) return;
      let dx =0
      let dy =0
      if (e.pointerType === 'mouse') {
        console.log("pc")
        dx = e.clientX - this.startPos.x;
        dy = e.clientY - this.startPos.y;
      }else{
        console.log("mobile")
        dx = e.pageX - this.startPos.x;
      }
      this.currentPos = {
        x: dx,
        y: dy,
      };
    },
    onPointerUp() {
      console.log("UP")
      if (!this.isDragging) return;
      this.isDragging = false;
      this.endPos = {
        x: this.currentPos.x,
        y: this.currentPos.y,
      };
      if (Math.abs(this.endPos.x) > 150) {
        if (this.endPos.x < 0) {
          this.onSwipeLeft();
        } else {
          this.onSwipeRight();
        }
        this.currentPos = {
          x: 0,
          y: 0,
        };
      } else {
        this.currentPos = {
          x: 0,
          y: 0,
        };
      }
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  color: black;
  position:relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  position: relative;
  width: 350px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: grab;
}

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
</style>