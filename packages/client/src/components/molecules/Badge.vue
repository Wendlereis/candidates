<template>
  <section :class="{'badge': true, 'is-highlighted': highlight}">
    <Label v-bind:text="text" body />
  </section>
</template>

<script>
import Label from '../atoms/Label'

export default {
  name: 'Badge',
  props: {
    text: String,
    highlight: Boolean
  },
  components: {
    Label
  }
}
</script>

<style>
.badge {
  display: inline-block;
  padding: 0px 8px;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 16px;
}

.badge.is-highlighted {
  border: 1px solid #f25a5a;
  color: #f25a5a;
  background-color: #fff;
}
</style>
