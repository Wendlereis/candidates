<template>
  <div>
    <label :class="style">
      {{ text }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Label',
  data: function() {
    return {
      style: ''
    }
  },
  props: {
    text: String,
    variant: String
  },
  methods: {
    getStyle: function() {
      switch (this.variant) {
        case 'title':
          this.style = 'title'
          break
        case 'heading':
          this.style = 'heading'
          break
        case 'body':
          this.style = 'body'
          break
        default:
          this.style = 'body2'
          break
      }
    }
  },
  mounted: function() {
    this.getStyle()
  }
}
</script>

<style scoped>
label {
  line-height: 1.3;
}

.title {
  font-size: 20px;
}

.heading {
  font-size: 18px;
}

.body {
  font-size: 16px;
}

.body2 {
  font-size: 12px;
  line-height: 2;
}
</style>
