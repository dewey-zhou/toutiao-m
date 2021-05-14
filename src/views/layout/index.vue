<template>
  <div>
    <router-view></router-view>
    <div>
        <van-tabbar route v-model="active">
            <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="comment-o" to="/qa">问答</van-tabbar-item>
            <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
            <van-tabbar-item icon="user-o" to="/my">我的</van-tabbar-item>
        </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="" scoped>

</style>
