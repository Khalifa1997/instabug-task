<template>
  <div class="landingPage-container">
    <img :src="instabug" style="width: 48px; height: 48px" />
    <h2 class="title">Log in to Instabug</h2>
    <SocialButton
      class="social-Button"
      :url="google"
      text="Google"
      bgColor="white"
      textColor="white"
      color="#4285f4"
    />
    <SocialButton
      class="social-Button"
      :url="github"
      text="Github"
      bgColor="black"
      textColor="white"
      color="black"
    />
    <SocialButton
      class="social-Button"
      :url="microsoft"
      text="Microsoft"
      bgColor="white"
      textColor="black"
      color="white"
    />
    <h2 class="divider">
      <span class="divider-text">OR</span>
    </h2>
  </div>
</template>

<script>
import SocialButton from "@/components/SocialButton.vue";
import instabug from "../assets/instabug.svg";
import github from "../assets/git.png";
import google from "../assets/google.svg";

import microsoft from "../assets/microsoft.png";
export default {
  setup() {
    return {
      github,
      microsoft,
      instabug,
      google,
    };
  },
  components: {
    SocialButton,
  },
};
</script>

<style lang="scss" src="../assets/css/LandingPageLogin.scss"></style>
