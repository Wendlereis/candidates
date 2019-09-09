<template>
  <button class="button" @click="emitOnClick">
    <img :src="icon" :alt="`icon of button`" />
    <p>{{ text }}</p>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    icon: String
  },
  methods: {
    emitOnClick: function() {
      this.$emit('click')
    }
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

.button:focus {
  outline: 0;
}

.button img {
  width: 24px;
  height: 24px;
}
</style>
