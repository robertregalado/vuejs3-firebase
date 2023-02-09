<template>
  <h1>{{ title }}</h1>
  <p>Welcome home....</p>
  <Modal :header="header" :text="text" theme="sale"/>
</template>

<script>
import Modal from './components/Modal'
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App!',
      header: 'Signup for Giveaway!',
      text: 'Grab rojre swag for half price.',
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
