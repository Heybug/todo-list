<template>
    <div id="home">
        <h2 class="in-project">星标项目</h2>
        <div class="project-items">
            <router-link to="/project" class="project" v-for="(item,index) in star" :key="index">
                <div class="project-info">
                    <p class="project-title">{{item.name}}</p>
                    <p class="project-desc">{{item.desc}}</p>
                </div>
            </router-link>
        </div>
        <h2 class="in-project">我参与的项目</h2>
        <div class="project-items">
            <router-link to="/project" class="project" v-for="(item,index) in participate" :key="index">
                <div class="project-info">
                    <p class="project-title">{{item.name}}</p>
                    <p class="project-desc">{{item.desc}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                star: [],
                participate: []
            }
        },
        created () {
            this.axios.get('http://192.168.50.18:3030').then((response) => {
                console.log(response.data);
                this.star = response.data.star;
                this.participate = response.data.participate;
            })
        },
        components: {}
    }
</script>

<style scoped lang="scss">
    /*@import "../../../assets/style/mixin";*/

    #home {
        margin: 0 50px 0 50px;
    }

    h2 {
        padding-top: 50px;
    }

    .project-items {
        padding-top: 20px;
        .project {
            display: inline-block;
            text-decoration: none;
            width: 280px;
            height: 150px;
            border-radius: 4px;
            margin: 0 20px 20px 0;
            background-size: cover;
            background-image: url("../../../assets/images/189519512223351134.jpg");
        }
        .project-info {
            margin-left: 10px;
            color: #fff;
            font-weight: bolder;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        }
        .project-title {
            font-size: 18px;
        }
        .project-desc {
            font-size: 14px;
        }
    }
</style>
