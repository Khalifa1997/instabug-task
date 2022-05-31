<template>
  <div class="slideshow-container">
    <div v-if="slide == 0" class="fade">
      <img
        src="../assets/SlideOne.svg"
        style="margin: 20 auto; max-height: 400px; padding-top: 20"
      />
      <p class="slide-text">Accelerate Your Entire Mobile Team Workflow</p>
    </div>

    <div v-else-if="slide == 1" class="fade">
      <img
        src="../assets/SlideTwo.svg"
        style="margin: 20 auto; max-height: 400px; padding-top: 20"
      />
      <p class="slide-text">
        The Most Comprehensive Bug Reporting Tool for Mobile Apps
      </p>
    </div>

    <div v-else class="fade">
      <img
        src="../assets/SlideThree.svg"
        style="margin: 20 auto; max-height: 400px; padding-top: 20"
      />
      <p class="slide-text">Secure Crash Reporting with Real-Time Alerts</p>
    </div>
    <div class="dot-container">
      <span
        v-for="i in 3"
        :key="i"
        class="dot"
        :class="slide == i - 1 ? `dot-selected` : null"
        @click="setSlide(i - 1)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselSlider",

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
    interval() {
      setInterval(() => {
        this.setSlide((this.slide + 1) % 3);
      }, 5000);
    },
  },
  mounted() {
    this.interval();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/SlideShow.css"></style>
