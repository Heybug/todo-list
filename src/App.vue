<template>
    <div id="app">
        <img src="./assets/logo_owl.png" alt="" class="logo">
        <img src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .logo {
        width: 100px;
        height: 100px;
        display: block;
        margin: auto;
    }
</style>
