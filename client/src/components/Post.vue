<template>
  <div class="post-wrapper">
    <div id="post-header">
        <img id="userImage" :src="avatar" alt="avatar" width="150px" height="150px"/>
        <div id="title-header">
          <h2>{{ post.title }}</h2>
        </div>
    </div>

    <img id="imagePost" :src="post.img" alt="imgPost"/>
    <div id="post-footer">
      <h2>{{ post.title }}</h2>
      <p>{{ post.caption }}</p>
      <p>Posted by: {{email}}</p>
    </div>
    <button id="deleteBtn" @click.prevent="modalDelete">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'],
  data() {
    return {
      avatar: localStorage.getItem('avatar'),
      email: localStorage.getItem('email'),
    };
  },
  methods: {
    modalDelete() {
      this.$store.commit('setToggleDelete', true);
      this.$store.commit('setId', this.post.id);
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.post-wrapper{
  border: 5px solid purple;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:  50px;
}

#post-header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

#userImage {
  margin: 10px;
  border-radius: 50%;
}

#deleteBtn {
  width: 99%;
  color: white;
  background-color: red;
}

img {
  border: 1px solid black;
  max-width: 80%;
}

h2 {
  font-size: 50px;
}

#title-header {
  margin-left: 50px;
}

p {
  font-size: 20px;
}
</style>
