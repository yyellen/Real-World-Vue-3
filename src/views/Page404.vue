<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>404 NOT FOUND</h1>
  <h4>Redirect after 5 seconds</h4>
</template>

<script>
export default {
  created() {
    setTimeout(() => this.$router.push({ path: '/' }), 5000)
  }
}
</script>
