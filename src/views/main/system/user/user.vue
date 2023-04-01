<template>
  <div class="user">
    <user-search></user-search>
    <div class="content">
      <div class="header">头部</div>
      <div class="table">表格</div>
      <div class="pagination">分页</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userSearch from './c-cpns/user-search.vue';

</script>

<style lang="less" scoped>
.user {
  color: red;
  border-radius: 9px;
  overflow: hidden;
}
</style>
