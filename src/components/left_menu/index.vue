<template>
    <div class="left-menu">
        <img :src="item" alt="" v-for="(item,index) in headImages" :key="index">
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                headImages: [
                    'https://img1.jollychic.com//uploads/jollyimg/imageMaterialLib/201801/15/IL201801151409035833.jpg',
                    'https://img1.jollychic.com//uploads/jollyimg/imageMaterialLib/201801/22/IL201801221036545407.jpg'
                ]
            }
        },
        methods: {},
        components: {}
    }
</script>

<!--
<style scoped lang="scss">
    @import "../../assets/style/mixin";
</style>-->
