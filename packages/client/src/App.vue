<template>
  <Candidates />
</template>

<script>
import Candidates from './components/pages/Candidates'

export default {
  name: 'app',
  components: {
    Candidates
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: Roboto, Helvetica;
  box-sizing: border-box;
}
</style>
