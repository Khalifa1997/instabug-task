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
<style>
@import "../assets/css/SlideShow.scss";
</style>
