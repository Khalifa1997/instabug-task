<template>
  <div class="container">
    <Carousel />
    <LandingPageLogin />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import LandingPageLogin from "@/components/LandingPageLogin.vue";

export default {
  name: "LoginView",
  components: {
    Carousel,
    LandingPageLogin,
  },
};
</script>
<style lang="scss" src="../assets/css/LoginView.scss">
h2 {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

h2 span {
  background: #fff;
  padding: 0 10px;
}
</style>
