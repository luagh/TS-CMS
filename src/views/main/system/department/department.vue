<template>
  <div class="department">
    <pageSearch :searchConfig="searchConfig"  @query-click="handleQueryClick"
    @reset-click="handleResetClick">
  </pageSearch>
    <pageContent
    :contentConfig="contentConfig"
    ref="contentRef"
    @new-click="handleNewClick"
      @edit-click="handleEditClick">
    </pageContent>
    <pageModal ref="modalRef"></pageModal>
  </div>
</template>

<script setup lang="ts" name="department">
import pageSearch from '@/components/page-search/page-search.vue';
import pageContent from '@/components/page-content/page-content.vue';
import pageModal from './c-cpns/page-modal.vue';
import { ref } from 'vue';

import  searchConfig from './config/search.config'
import contentConfig from './config/content.config';
// 点击search, content的操作
const contentRef = ref<InstanceType<typeof pageContent>>()
function handleQueryClick(queryInfo: any) {
  contentRef.value?.fetchPageListData(queryInfo)
}
function handleResetClick() {
  contentRef.value?.fetchPageListData()
}
// 点击content, modal的操作
const modalRef = ref<InstanceType<typeof pageModal >>()
 function handleNewClick(){
modalRef.value?.setModalVisible()
 }

 function handleEditClick(itemData:any){
  modalRef.value?.setModalVisible(false,itemData)
}
</script>

<style scoped>

</style>
