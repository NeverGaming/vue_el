<template>
  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__lg">
       要做什么？
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off" 
      v-model.trim.lazy="label"
      class="input__lg"
    />  
    <el-button 
      type="primary" 
      class="btn__lg" 
      @click="onSubmit"
      >
      添加
    </el-button>
  </form>
</template>

<script>
  export default {
    methods: {
        onSubmit() {
            if(this.label ==="") {
                return;
            }
            this.$emit("todo-added", this.label);
            this.label = "";
            console.log("怎么回事，input没有自动清除？原来TMD是防止添加重复项， 以为是可以清空输入框", this.label)
        },
        data() {
            return {
                label: "",
            }
        },
    },
  };
</script>

<style scoped>
/* 覆盖reset.css中的button样式 */
.btn__lg {
  border: 1px solid #409eff; /* Element Plus primary button border color */
  padding: 10px 20px; /* 更新padding */
  background-color: #409eff; /* Element Plus primary button background color */
  color: white; /* 文字颜色 */
  border-radius: 4px; /* 圆角边框 */
  cursor: pointer; /* 鼠标样式 */
  font-size: 24px; /* 字体大小 */
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
