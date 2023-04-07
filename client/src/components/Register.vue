<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="email" type="email" name="email" placeholder="email" />
    <br />
    <input
      v-model="password"
      type="password"
      name="password"
      placeholder="password"
    /><br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      msg: "Register",
      email: "",
      password: ""
    };
  },

  methods: {
    async register() {
      const responce = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(responce.data);
    }
  }
};
</script>
<style scoped></style>
