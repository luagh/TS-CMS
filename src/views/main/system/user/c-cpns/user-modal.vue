<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" title="Warning" width="30%" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';



// 1.定义内部的属性
const dialogVisible = ref(false)


function  setModalVisible(){
  dialogVisible.value=true
}
// 暴露的属性和方法
defineExpose({ setModalVisible })
</script>

<style lang="less" scoped>
.user-modal{
}
</style>
