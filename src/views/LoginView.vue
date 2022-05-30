<template>
  <div class="container">
    <Carousel />
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 30px;
      "
    >
      <img :src="instabug" style="width: 48px; height: 48px" />
      <h2
        style="
          color: #445065;
          font-weight: 400;
          font-family: 'ProximaNova', Helvetica, Arial, sans-serif;
          line-height: 1.4;
        "
      >
        Log in to Instabug
      </h2>
      <SocialButton />
      <SocialButton
        :url="github"
        text="Github"
        bgColor="black"
        textColor="white"
        color="black"
      />
      <SocialButton
        :url="microsoft"
        text="Microsoft"
        bgColor="white"
        textColor="black"
        color="white"
      />
      <h2
        style="
          width: 400px;
          text-align: center;
          border-bottom: 1px solid #000;
          line-height: 0.1em;
          margin: 10px 0 20px;
        "
      >
        <span
          style="
            background: #fff;
            padding: 0 10px;
            font-family: Helvetica, Arial, sans-serif;
            color: #445065;
          "
          >OR</span
        >
      </h2>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import SocialButton from "@/components/SocialButton.vue";
import instabug from "../assets/instabug.svg";
import github from "../assets/git.png";
import microsoft from "../assets/microsoft.png";

export default {
  name: "LoginView",
  components: {
    Carousel,
    SocialButton,
  },
  data() {
    return {
      github,
      microsoft,
      instabug,
    };
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
