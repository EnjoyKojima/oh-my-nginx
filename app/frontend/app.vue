<script setup lang="ts">
// const data = await $fetch('http://api.kojima.localhost/sum?a=1&b=2')
const { data } = useFetch('http://api.kojima.localhost/sum?a=1&b=2', {
  lazy: false
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
      {{ data }}
    </div>
  </div>
</template>
