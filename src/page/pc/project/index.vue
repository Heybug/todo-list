<template>
    <div id="project">
        <nav>
            <router-link to="/">首页</router-link>
            <router-link to="project">远信集团 · 俏猫团队</router-link>
        </nav>
        <div class="project-items">
            <div class="box">
                <div class="items" v-for="(item,index) in groupItems" :key="index">
                    <p class="group-name">{{item.groupName}} <b>·</b> {{item.taskList.length}}</p>
                    <div class="task-list">
                        <div class="task" v-for="(task,j) in item.taskList" :key="j">
                            <div class="left-box">
                                <span></span>
                            </div>
                            <div class="right-box">
                                <div class="task-title f14">{{task.title}}{{++j}}</div>
                                <span class="label">标签</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                groupItems: []
            }
        },
        created () {
            this.funcTask();
        },
        methods: {
            funcTask () {
                this.axios.get('http://192.168.50.18:3030/task').then((response) => {
                    this.groupItems = response.data;
                })
            }
        },
        components: {}
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/style/mixin";

    a {
        text-decoration: none;
    }

    #project {
        height: 100%;
        background: #fff;
    }

    nav {
        @include lineHeight(50px);
        background: #fff;
        padding: 0 15px;
    }

    .project-items {
        position: absolute;
        top: 50px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        .box {
            overflow-y: hidden;
            overflow-x: scroll;
            -webkit-overflow-scrolling: touch;
            white-space: nowrap;
            height: 100%;
        }
        .items {
            position: relative;
            display: inline-block;
            width: 288px;
            height: 100%;
            background: #f5f5f5;
            margin: 0 10px 0 0;
            border-radius: 4px;
            &:after {
                position: absolute;
                display: block;
                content: '';
                height: 1px;
                left: 5px;
                right: 5px;
                bottom: 0;
                background: #f5f5f5;
            }
            &:last-child {
                margin: 0;
            }
            .group-name {
                @include lineHeight(50px);
                text-indent: 1em;
                font-weight: bold;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                background: #f5f5f5;
                border-radius: 4px 4px 0 0;
            }
            .task-list {
                white-space: nowrap;
                overflow-y: auto;
                height: 100%;
            }
            .task {
                @include fj();
                margin: 0 10px 10px 10px;
                padding-bottom: 10px;
                background: #fff;
                border-radius: 4px;
                &:first-child {
                    margin-top: 50px;
                }
                .left-box {
                    width: 40px;
                    min-width: 40px;
                    span {
                        @include wh(14px, 14px);
                        display: block;
                        margin: 10px auto 0 auto;
                        /*border: 1px solid #d9d9d9;*/
                        border: 2px solid #a6a6a6;
                        border-radius: 4px;
                        /*background-color: #eee;*/
                    }
                }
                .right-box {
                    flex: 1;
                    overflow: hidden;
                    margin: 10px 10px 0 0;
                    line-height: 20px;
                    .task-title {
                        display: inline-block;
                        font-weight: 400;
                        white-space: normal;
                        @include lineHeight(20px);
                    }
                }
            }
        }
    }
</style>
