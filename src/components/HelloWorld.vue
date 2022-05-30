<template>
  <div class="slideshow-container">
    <div v-if="slide == 1" class="fade">
      <img src="../assets/SlideOne.svg" style="width: 100%" />
    </div>

    <div v-else-if="slide == 2" class="fade">
      <img src="../assets/SlideTwo.svg" style="width: 100%" />
    </div>

    <div v-else class="fade">
      <img src="../assets/SlideThree.svg" style="width: 100%" />
    </div>
    <div class="dot-container">
      <span
        v-for="i in 3"
        :key="i"
        class="dot"
        :class="slide == i ? 'dot-selected' : null"
        @click="setSlide(i)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      slide: 1,
      users: [
        { email: "mohamed@instabug.com", password: "A12345678" },
        { email: "mohamed1@instabug.com", password: "A12345678" },
        { email: "mohamed2@instabug.com", password: "A12345678" },
        { email: "mohamed3@instabug.com", password: "A12345678" },
        { email: "mohamed4@instabug.com", password: "A12345678" },
        { email: "mohamed5@instabug.com", password: "A12345678" },
        { email: "mohamed6@instabug.com", password: "A12345678" },
        { email: "mohamed7@instabug.com", password: "A12345678" },
      ],
    };
  },
  methods: {
    setSlide(n) {
      this.slide = n;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  box-sizing: border-box;
}

/* Slideshow container */
.slideshow-container {
  width: 50%;
  position: relative;
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  /*   position: absolute;
  bottom: 8px;
  width: 100%; */
  text-align: center;
}

.dot-container {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &-selected {
    background-color: #717171;
  }
  &:hover {
    background-color: #717171;
  }
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}
</style>
