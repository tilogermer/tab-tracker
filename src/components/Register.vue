<template>
  <div>
    <h1>Register</h1>
    <input v-model="email" type="email" name="email" placeholder="Email" />
    <br />
    <input v-model="password" type="password" name="password" placeholder="Password" />
    <br />
    <div class="error" v-html="error" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        // this.$store.dispatch("setToken", response.data.token);
        // this.$store.dispatch("setUser", response.data.user);
        // this.$router.push({
        //   name: "songs"
        // });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>