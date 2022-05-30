<template>
  <div class="landingPage-container">
    <img :src="instabug" class="instaBug-icon" />
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
    <div class="form-container">
      <label class="form-label" style="margin-bottom: 8px">Work Email</label>
      <input
        type="email"
        placeholder="you@company.com"
        class="form-input"
        v-model="email"
        :class="[
          emailClicked ? `form-input-selected` : null,
          errorMessage1.length > 0 ? 'form-input-error' : null,
        ]"
        @click="emailWasClicked"
      />
      <p v-if="errorMessage1.length > 0" class="form-input-error-text">
        {{ this.errorMessage1 }}
      </p>
      <div class="form-passwordContainer">
        <label class="form-label">Password</label>
        <p class="forgotPassword-text">Forgot Password?</p>
      </div>
      <input
        type="password"
        placeholder="8+ Characters"
        class="form-input"
        v-model="password"
        :class="[
          passwordClicked ? `form-input-selected` : null,
          errorMessage2.length > 0 ? 'form-input-error' : null,
        ]"
        @click="passwordClicked = true"
      />
      <p v-if="errorMessage2.length > 0" class="form-input-error-text">
        {{ this.errorMessage2 }}
      </p>
      <button type="submit" class="form-button">Log in</button>
      <div class="form-passwordContainer">
        <p class="form-noAccount">Don't have an account?</p>
        <p style="margin-left: 2px" class="form-sso">Sign up</p>
        <p style="margin-left: auto" class="form-sso">Login Via SSO</p>
      </div>
    </div>
    <div class="bottom-container">
      <p class="sponsor-container-text">Trusted by the top companies.</p>
      <div class="sponsor-container">
        <img :src="lyft" style="height: 26px" />
        <img :src="buzzfeed" class="sponsor-icon" />
        <img :src="asana" class="sponsor-icon" />
        <img :src="oneplus" class="sponsor-icon" />
        <img :src="houseparty" class="sponsor-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import SocialButton from "@/components/SocialButton.vue";
import instabug from "../assets/instabug.svg";
import lyft from "../assets/lyft.svg";
import buzzfeed from "../assets/BuzzFeed.svg";
import oneplus from "../assets/oneplus.svg";
import asana from "../assets/asana.svg";
import houseparty from "../assets/houseparty.svg";
import github from "../assets/git.png";
import google from "../assets/google.svg";

import microsoft from "../assets/microsoft.png";
const ValidateEmail = (inputText) => {
  //eslint-disable-next-line
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return true;
  } else {
    return false;
  }
};
const isUpperCase = (string) => /^[A-Z]$/.test(string);
const hasNumber = (myString) => {
  return /\d/.test(myString);
};
export default {
  setup() {
    return {
      github,
      microsoft,
      instabug,
      asana,
      lyft,
      google,
      buzzfeed,
      houseparty,
      oneplus,
    };
  },
  methods: {
    emailWasClicked() {
      this.emailClicked = true;
    },
    ValidatePassword(inputText) {
      if (inputText.length < 6) {
        this.errorMessage2 = "Password Must be atleast 6 characters";
        return false;
      }
      const firstPart = this.email.split("@")[0];
      if (inputText.includes(firstPart)) {
        this.errorMessage2 =
          "Password Can not contain the first word in your Email";
        return false;
      }
      if (!isUpperCase(inputText)) {
        this.errorMessage2 = "Password Must contain an Uppercase Letter";
        return false;
      }
      if (!hasNumber(inputText)) {
        this.errorMessage2 = "Password Must contain a number";
        return false;
      }
      return true;
    },
  },
  components: {
    SocialButton,
  },
  data() {
    return {
      email: "",
      emailClicked: false,
      password: "",
      passwordClicked: false,
      errorMessage1: "",
      errorMessage2: "",
    };
  },
  watch: {
    email(newValue) {
      console.log(newValue);
      if (!ValidateEmail(newValue)) {
        this.emailClicked = false;
        this.errorMessage1 = "Enter a valid Email Address.";
      } else {
        this.errorMessage1 = "";
      }
    },
    password(newValue) {
      if (!this.ValidatePassword(newValue)) {
        this.passwordClicked = false;
      } else {
        this.errorMessage2 = "";
      }
    },
  },
};
</script>

<style lang="scss" src="../assets/css/LandingPageLogin.scss"></style>
