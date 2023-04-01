<template>
  <div class="curmb">
    <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login';
import { mapPathToBreadcrumbs } from '@/utils/map-menus';
import { computed } from 'vue';
import { useRoute } from 'vue-router'


const route =useRoute()
const userMenus=useLoginStore().userMenus
const breadcrumbs =computed(()=>{
  return mapPathToBreadcrumbs(route.path,userMenus)
})

</script>

<style lang="less" scoped>
.curmb{
  color: aliceblue;
}
</style>
