<template>
  <div class="container">
    <img :src="background" class="error-image" />
    <h1 class="error-text">404 - Page Not Found!</h1>
    <p class="error-paragraph">
      Sorry, that page doesn't exist. What would you like to do
    </p>
    <router-link :to="'/welcome'"
      ><button class="error-button">Back to Homepage</button></router-link
    >
  </div>
</template>

<script>
import background from "../assets/notfound.jpg";
export default {
  setup() {
    return {};
  },
  data() {
    return {
      background,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error {
  &-image {
    width: 200px;
    margin-top: 100px;
  }
  &-text {
    font-size: 35px;
    font-family: Arial, Helvetica, sans-serif;
    color: #00287a;
  }
  &-paragraph {
    font-family: Arial, Helvetica, sans-serif;

    color: #a6a6a6;
    font-size: 16px;
  }
  &-button {
    padding: 14px 24px 13px;
    border-style: solid;
    border-width: 1px;
    border-color: #246aff;
    background-color: #246aff;
    color: #fff;
    align-items: center;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>
