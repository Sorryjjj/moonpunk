<template>
    <div class="app-wrapper">
        <div class="top-bar clearfix">
            <img :src="logo" class="logo" alt="">
            <div class="menus">
                <router-link to="/index">twitter</router-link>
                <router-link to="/index">discord</router-link>
                <router-link to="/index">medium</router-link>
                <el-button type="danger" round>connect-wallet</el-button>

            </div>
        </div>
        <el-divider></el-divider>
        <transition name="el-fade-in" mode="out-in">
              <router-view></router-view>
        </transition>
    </div>
  </template>

<script>
import Logo from '@/assets/logo.png'
export default {
  name: 'Layout',
  data () {
    return {
      logo: Logo
    }
  }
}
</script>

<style lang="less">
.app-wrapper {
    .top-bar {
        padding: 20px 50px;
    }
    a {
        text-decoration: none;
    }
    .clearfix {
        display: block;
        content: "";
        clear: both;
    }
    .logo {
        width: 200px;
        height: 30px;
        float: left;
    }
    .menus {
        float: right;
    }
    .router-link-exact-active {
        margin-right: 20px;
    }
}
</style>
