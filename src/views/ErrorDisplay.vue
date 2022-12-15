<template>
  <h4>Oops! There eas an error:</h4>
  <p>{{ error }}</p>
</template>

<script>
export default {
  props: ['error']
}
</script>
