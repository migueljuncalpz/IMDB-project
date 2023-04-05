<template>
  <div class="container">
    <button :class="{'has-changed': clicked }" @click="handleClick" class="filter-button">{{this.buttonText}}</button>
  </div>
  <transition name="blind">
    <div class="filters-container"  v-if="clicked">
      <div class="filter">
        <CheckBoxFilter :content="inputLabels"></CheckBoxFilter>
      </div>
      <hr>
      <div class="filter">
        <RangeSlider></RangeSlider>
      </div>
    </div>
  </transition>
</template>

<script>
import RangeSlider from "@/components/RangeSlider.vue";
import CheckBoxFilter from "@/components/CheckBoxFilter.vue";
export default {

  name: "FilmResults",
  data(){
    return{
      display:"none",
      clicked:false,
      buttonText:"Filters",
      minAngle: 10,
      maxAngle: 30,

      inputLabels:{
        legend:"Choose gender",
        type:"checkbox",
        inputLabels:[
          {
            input:{
              name:"drama",
              id:"drama",
              value:"Drama"
            },
            label:{
              for:"drama",
              text:"Drama"
            }
          }
        ],
      },
    }
  },
  components:{
    CheckBoxFilter,
    RangeSlider
  },
  methods:{
    handleClick(){
      this.clicked = !this.clicked;
      if(this.clicked){
        this.buttonText='⛌';
        this.display="grid"
      }else{
        this.buttonText="Filters"
        this.display="none"

      }
    }
  },
}
</script>

<style scoped lang="scss">
$dark-color: #1a1e24;
$rose-color: #D9247B;
$bone-color: #E4DCCF;
$white-color: #98DFD6;


.container{
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
}

.filter-button{
  border-style: none;
  color: white;
  background-color: $dark-color;
  width: fit-content;
  margin: 1rem 1rem;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  &:hover{
    cursor: pointer;
  }
  transition: all 0.5s ease;
}
.has-changed{
  transform: rotateY(180deg);
}

.filters-container{
  display: grid;
  position: sticky;
  justify-content: center;
  top:4rem;
  background-color: $dark-color;
  padding:1rem 1rem 1rem 1rem;
  .filter{
    padding: 0.5rem 0.5rem;
  }
}
/**Animation to show*/
.blind-enter-active{
  transition: transform 0.5s;

}
.blind-enter-from{
  transform: scaleY(0);
}
.blind-enter-to{
  transform: scaleY(1);
}

/**Animation to close*/
.blind-leave-active {
  transition: transform 0.5s;
}
.blind-leave-to {
  transform: scaleY(0);
}


</style>