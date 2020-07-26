<template>
  <div class="home-page" >
    <div class="login-box">
      <form @submit.prevent="login">
        <h1>Log in</h1>
        <label>Email</label> <br>
        <input type="text" v-model="emailLogin" placeholder="Your email"> <br>

        <label>Password</label> <br>
        <input type="password" v-model="passwordLogin" placeholder="Your password"> <br>

        <input type="submit" value="submit">
      </form>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Welcome from '@/components/Welcome.vue';

export default {
  name: 'Login',
  data() {
    return {
    };
  },
  components: {
    // Welcome,
  },
  computed: { // setiap perubahan
    emailLogin: {
      get() {
        return this.$store.state.emailLogin;
      },
      set(val) {
        this.$store.commit('setEmail', val);
      },
    },
    passwordLogin: {
      get() {
        return this.$store.state.passwordLogin;
      },
      set(val) {
        this.$store.commit('setPassword', val);
      },
    },
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
  },
};
</script>
