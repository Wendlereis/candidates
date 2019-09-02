<template>
  <button class="button">
    <img :src="icon" :alt="`icon of button`" />
    <p>{{text}}</p>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    onClick: Function,
    icon: String
  }
}
</script>

<style scoped>
.button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  padding: 8px;
}

.button img {
  width: 24px;
  height: 24px;
}
</style>
