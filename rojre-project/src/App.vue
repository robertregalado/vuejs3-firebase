<template>
  <h1>{{ title }}</h1>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: "Rojre App:)"
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
  border-bottom: 1pc solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
