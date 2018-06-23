<template>
    <div id="app">
        <web-gl></web-gl>
    </div>
</template>

<script>
    import webGl from './webGl'

    export default {
        name: 'App',
        components: {
            webGl
        }
    }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
