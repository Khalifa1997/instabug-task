<template>
  <div
    class="social-btn"
    style="position: relative"
    :style="{ 'background-color': color }"
  >
    <div class="social-icon-container" :style="{ 'background-color': bgColor }">
      <img class="social-icon" :src="url" />
    </div>
    <div class="btn-text" :style="{ color: textColor }">
      <b>{{ this.text }}</b>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: {
    url: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
    },
    color: {
      type: String,
      default: "#4285f4",
    },
    bgColor: {
      type: String,
      default: "white",
    },
    textColor: {
      type: String,
      default: "white",
    },
    text: {
      type: String,
      default: "Google",
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/SocialButton.scss";
</style>
