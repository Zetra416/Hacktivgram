<template>
  <div>
    <div class="nav-bar">
      <div class="nav-left">
        <h2>HacktivGram</h2>
      </div>

      <div class="nav-mid">
        <a id="mypostBtn" href="" @click.prevent="postDatas">My Post</a>
        <a id="addBtn" href="" @click.prevent="addModal">Add Post</a>
        <Add v-if="toggleAdd"/>
      </div>

      <div class="nav-right">
      <a id="logoutBtn" href="" @click.prevent="logout">Logout</a>
      </div>
    </div>

    <div class="pusher">
    </div>

    <Delete v-if="toggleDelete"/>
    <div id="post-list">
      <Post v-for="(Post, index) in PostDatas" :key="index" :post="Post"/>
    </div>
  </div>
</template>

<script>
import Add from '../components/Add.vue';
import Post from '../components/Post.vue';
import Delete from '../components/Delete.vue';

export default {
  name: 'Posts',
  created() {
    this.$store.dispatch('getAll');
  },
  computed: {
    PostDatas() {
      return this.$store.state.postDatas;
    },
    toggleAdd() {
      return this.$store.state.toggleAdd;
    },
    toggleDelete() {
      return this.$store.state.toggleDelete;
    },
  },
  components: {
    Add,
    Post,
    Delete,
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
    addModal() {
      this.$store.commit('setToggleAdd', true);
    },
    postDatas() {
      this.$store.dispatch('getAll');
    },
    deleteModal() {
      this.$store.commit('setToggleDelete', true);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  height: 10vh;
  position: sticky;
  background-color: purple;
  border-bottom:5px solid black;
  text-shadow: 3px 2px black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 20px;
  z-index: 1;
}

.nav-mid{
  margin: 20px;
  margin-right: 5%;
  padding: 10px;
  display: flex;
}
.pusher {
  margin-bottom: 10px;
}

.nav-right{
  margin: 20px;
  padding: 10px;
  display: flex;
}

a {
  text-decoration: none;
}

#logoutBtn{
    color: white;
}

#mypostBtn {
  margin-right: 30px;
  color: white;
}

#addBtn {
  margin-left: 30px;
  color: white;
}

.columns {
  text-shadow: 3px 2px black;
  color: white;
  display: flex;
  align-items: flex-start;
  word-break: break-all;
  justify-content: space-around;

}

</style>
