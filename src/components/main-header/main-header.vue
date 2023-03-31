<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="28px">
        <!-- //动态组件 -->
        <component :is="isFold ?'Expand':'Fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
     <div class="info">个人信息</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref} from 'vue'

// 0.内部自定义事件
const emit =defineEmits(['foldChange'])
// 1.记录状态
 const isFold =ref(false)
function handleMenuIconClick(){
  // 1.内部改变状态
 isFold.value = !isFold.value
//将事件和状态传递给父组件
emit('foldChange',isFold.value)

}

</script>

<style lang="less" scoped>
.main-header{
  color: #000;
}
</style>
