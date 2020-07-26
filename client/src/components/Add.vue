<template>
  <div>
    <div class="addModal">
      <h1>Add Post</h1>
      <form @submit.prevent="addPost">
        <label>Title</label> <br>
        <input type="text" v-model="title" placeholder="Title"> <br>

        <label>Caption</label> <br>
        <input type="text" v-model="caption" placeholder="Caption"> <br>

        <label>ImgUrl</label> <br>
        <input type="text" v-model="image_url" placeholder="ImgUrl"> <br>

        <button type="submit" >Add</button>
        <button @click="closeAdd">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Add',
  data() {
    return {
      title: '',
      image_url: '',
      caption: '',
      postData: {
        title: '',
        image_url: '',
        caption: '',
      },
    };
  },
  methods: {
    addPost() {
      console.log(this.postData);
      this.postData.title = this.title;
      this.postData.image_url = this.image_url;
      this.postData.caption = this.caption;
      this.$store.dispatch('add', this.postData); // access action di store
      this.title = '';
      this.image_url = '';
      this.caption = '';
    },
    closeAdd() {
      this.$store.commit('setToggleAdd', false);
    },
  },
};
</script>

<style media="screen">

.addModal {
  color: black;
  position: absolute;
  text-shadow: none;
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

button {
  padding: 7px;
  margin-top: 10px;
  background-color: green;
  color: white;
  font-size: 1.1rem;
}

.overlay {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}

</style>
