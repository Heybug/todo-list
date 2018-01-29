<template>
    <div class="pc-base">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .pc-base {
        height: 100%;
    }
</style>
