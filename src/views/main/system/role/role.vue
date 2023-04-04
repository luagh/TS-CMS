<template>
  <div class="role">
    <page-search :search-config="searchConfig"
     @query-click="handleQueryClick"
     @reset-click="handleResetClick"
    />
    <page-content :content-config="contentConfig"
    ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"

    ></page-content>
    <page-modal ref="modalRef" :modal-config="modalConfig"></page-modal>

  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'
import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'
import pageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'


// 逻辑关系
const {contentRef, handleQueryClick, handleResetClick} =usePageContent()
const { modalRef, handleNewClick, handleEditClick}=usePageModal()
</script>

<style lang="less" scoped>

</style>
