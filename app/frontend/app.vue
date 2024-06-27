<script setup lang="ts">
const params = reactive({
  a: 1,
  b: 2
})

const { data } = useFetch(`http://api.kojima.localhost/sum`, { query: params })
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
      {{ data }}
    </div>
    <input type="number" v-model.number="params.a" />
    <input type="number" v-model.number="params.b" />
  </div>
</template>
