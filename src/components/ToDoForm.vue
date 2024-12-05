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
    <button type="submit" class="btn btn__primary btn__lg">添加</button>
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
