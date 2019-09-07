<template>
  <span class="dropdown-button">
    <Button
      class="dropdown-button__button"
      :icon="require('../../assets/dots.svg')"
      v-on:click="toggleItems"
    />
    <ul class="dropdown-button__list" v-show="showItems">
      <li
        class="dropdown-button__list-item"
        v-for="item in items"
        :key="item.text"
        @click="item.action(item.id)"
      >
        {{ item.text }}
      </li>
    </ul>
  </span>
</template>

<script>
import Button from '../atoms/Button'

export default {
  name: 'DropdownButton',
  data: function() {
    return {
      showItems: false
    }
  },
  props: {
    items: Array
  },
  components: {
    Button
  },
  methods: {
    toggleItems: function() {
      this.showItems = !this.showItems
    }
  }
}
</script>

<style scoped>
.dropdown-button {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 150px;
}

.dropdown-button__button {
  align-self: flex-end;
}

.dropdown-button__list {
  padding: 0;
  margin: 0;
  list-style-type: none;
  position: absolute;
  right: 0px;
  top: 43px;
}

.dropdown-button__list-item {
  background: #f0f0f0;
  padding: 8px;
}

.dropdown-button__list-item:hover {
  background: #e0e0e0;
}
</style>
