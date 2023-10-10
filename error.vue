<template>
  <main>
    <Card>

      <pre>
        {{ error }}
       </pre>
      <button @click="consoleError">控制台打印</button>
    </Card>

    <Card>
      <div v-html="error.stack"></div>
    </Card>
  </main>
</template>
<script setup>
const props = defineProps({
  error: Object
})
const consoleError = function () {
  console.log(props.error)
}

</script>

<style scoped>
main {
  padding: 50px;
  color: #FFF;
  font-size: 16px;
  white-space: pre-line;
}
</style>