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
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 100%;
      "
    >
      <label
        style="
          margin: 0 0 0.25rem 0;
          color: #445065;
          font-size: 0.875rem;
          cursor: pointer;
          font-style: bold;
          font-family: Arial, Helvetica, sans-serif;
        "
        >Work Email</label
      >
      <input
        type="email"
        placeholder="you@company.com"
        style="
          box-sizing: border-box;
          margin: 0;
          padding: 0.5rem 0 0.5rem 0.5rem;
          width: 100%;
          height: 32px;
          outline: 0;
          border: 1px solid #dcdee3;
          border-radius: 4px;
          background-color: #fff;
          color: #445065;
          font-weight: normal;
          padding: 15px;
          font-size: 0.875rem;
        "
      />
      <div
        style="
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 8px;
        "
      >
        <label
          style="
            color: #445065;
            font-size: 0.875rem;
            cursor: pointer;
            font-style: bold;
            font-family: Arial, Helvetica, sans-serif;
          "
          >Password</label
        >
        <p
          style="
            color: #a6a6a6;
            font-size: 0.875rem;
            cursor: pointer;
            font-weight: 400;
            margin-left: auto;
            font-family: 'ProximaNova', Helvetica, Arial, sans-serif;
          "
        >
          Forgot Password?
        </p>
      </div>
      <input
        type="password"
        placeholder="8+ Characters"
        style="
          box-sizing: border-box;
          margin: 0;
          padding: 0.5rem 0 0.5rem 0.5rem;
          width: 100%;
          height: 32px;
          outline: 0;
          border: 1px solid #dcdee3;
          border-radius: 4px;
          background-color: #fff;
          color: #445065;
          font-weight: normal;
          padding: 15px;

          font-size: 0.875rem;
        "
      />
      <button
        type="submit"
        style="
          background-color: #ccc;
          color: #fff;
          height: 40px;
          margin-top: 8px;
          cursor: not-allowed;
          font-size: 0.875rem;
          line-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: 'ProximaNova', Helvetica, Arial, sans-serif;
          padding: 0 1rem;
          height: 32px;
          outline-width: 0;
          border: none;
          border-radius: 4px;
          white-space: nowrap;
          font-weight: 600;
        "
      >
        Log in
      </button>
      <div
        style="
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 8px;
        "
      >
        <p
          style="
            color: #445065;
            font-size: 0.875rem;
            cursor: pointer;
            font-style: bold;
            font-family: Arial, Helvetica, sans-serif;
          "
        >
          Don't have an account?
        </p>

        <p
          style="
            margin-left: 2px;
            color: #0089e5;
            font-family: 'ProximaNova', Helvetica, Arial, sans-serif;
          "
        >
          Sign up
        </p>
        <p
          style="
            color: #0089e5;
            font-size: 0.875rem;
            cursor: pointer;
            font-weight: 400;
            margin-left: auto;
            font-family: 'ProximaNova', Helvetica, Arial, sans-serif;
          "
        >
          Login Via SSO
        </p>
      </div>
    </div>
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <p
        style="
          color: #a1a7b2;
          font-weight: 400;
          font-family: 'ProximaNova', Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;
        "
      >
        Trusted by the top companies.
      </p>
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        "
      >
        <img :src="lyft" style="height: 26px" />
        <img :src="buzzfeed" style="height: 26px; margin-left: 24px" />
        <img :src="asana" style="height: 26px; margin-left: 24px" />
        <img :src="oneplus" style="height: 26px; margin-left: 24px" />
        <img :src="houseparty" style="height: 26px; margin-left: 24px" />
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
  components: {
    SocialButton,
  },
};
</script>

<style lang="scss" src="../assets/css/LandingPageLogin.scss"></style>
