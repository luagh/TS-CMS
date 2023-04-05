<template>
  <div class="dashboard">
   <el-row :gutter="10">
 <template v-for="item in 4" :key="item">
  <el-col :span="6">
  <count-card></count-card>
  </el-col>
 </template>
   </el-row>
  </div>
</template>

<script setup lang="ts">
import CountCard from './c-cpns/count-card.vue'


</script>

<style lang="less" scoped>
.dashboard {
  color: red;
}

.el-row {
  margin-bottom: 10px;
}
</style>
