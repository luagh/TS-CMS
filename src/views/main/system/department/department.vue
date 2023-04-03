<template>
  <div class="department">
    <pageSearch @query-click="handleQueryClick" @reset-click="handleResetClick"></pageSearch>
    <pageContent></pageContent>
  </div>
</template>

<script setup lang="ts" name="department">
import pageSearch from './c-cpns/page-search.vue';
import pageContent from './c-cpns/page-content.vue';
import { ref } from 'vue';

// 点击search, content的操作
const contentRef = ref<InstanceType<typeof pageContent>>()
function handleQueryClick(queryInfo: any) {
  contentRef.value?.fetchPageListData(queryInfo)
}
function handleResetClick() {
  contentRef.value?.fetchPageListData()
}
</script>

<style scoped>

</style>
