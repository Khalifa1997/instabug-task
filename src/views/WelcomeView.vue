<template>
  <div class="welcome">
    <h1 class="welcome-text">Hello {{ this.email }}</h1>
    <button class="logout" @click.prevent="logout">Log out</button>
  </div>
</template>

<script>
export default {
  name: "WelcomeView",
  methods: {
    async logout() {
      await this.$store.commit("logout");
      await this.$router.push("/welcome");
    },
  },
  computed: {
    email() {
      return this.$store.state.email;
    },
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/background.jpg");
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: -10px;
  left: -30px;
  &-text {
    font-family: sans-serif;
    text-align: center;
    align-self: center;
    background-color: wheat;
    width: 300px;
    height: 100px;
    font-size: 35px;
    padding: 15px;
    border: 20px wheat;
    border-radius: 15px;
    box-shadow: 0px 2px 37px 13px rgba(0, 0, 0, 0.49);
    -webkit-box-shadow: 0px 2px 37px 13px rgba(0, 0, 0, 0.49);
    -moz-box-shadow: 0px 2px 37px 13px rgba(0, 0, 0, 0.49);
  }
}
.logout {
  background: no-repeat 5px 5px #484b4f;
  width: 120px;
  cursor: pointer;
  border-radius: 50px;
  padding: 10px 20px 10px 20px;
  color: White;
  font-size: 14px;
  text-align: center;
}
</style>
