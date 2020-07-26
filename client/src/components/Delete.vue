<template>
  <div>
    <div class="deleteModal">
      <h1>Delete Post</h1>
        <h2>Are you sure you want to delete this ?</h2>
        <button @click.prevent="deletePost">Yes</button>
        <button @click="closeDelete">No</button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Delete',
  methods: {
    deletePost() {
      this.$store.dispatch('delete');
    },
    closeDelete() {
      this.$store.commit('setToggleDelete', false);
    },
  },
};
</script>

<style media="screen">

.deleteModal {
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
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

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}

button {
  padding: 7px;
  margin-top: 10px;
  background-color: green;
  color: white;
  font-size: 1.1rem;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}

</style>
