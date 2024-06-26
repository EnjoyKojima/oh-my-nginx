<script setup lang="ts">
// const data = await $fetch('http://api.kojima.localhost/sum?a=1&b=2')
// const { data } = useFetch('http://api.kojima.localhost/sum?a=1&b=2', {
//   lazy: true
// })
function f() {
  $fetch('http://api.kojima.localhost/sum?a=1&b=2')
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <div>
      {{ data }}
    </div> -->
    <button @click="f">click</button>
  </div>
</template>
