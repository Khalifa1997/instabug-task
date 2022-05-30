<template>
  <div class="container">
    <HelloWorld />
    <div>
      <img :src="instabug" />
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
      <p>this is some content other</p>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import SocialButton from "@/components/SocialButton.vue";
import instabug from "../assets/instabug.svg";
import github from "../assets/git.png";
import microsoft from "../assets/microsoft.png";

export default {
  name: "LoginView",
  components: {
    HelloWorld,
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
