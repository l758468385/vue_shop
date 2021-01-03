<template>
  <div>
    <el-button type="info" @click="quitBtn">退出</el-button>
  </div>
</template>

<script>
export default {
  
  methods:{
    quitBtn(){
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>

</style>>
