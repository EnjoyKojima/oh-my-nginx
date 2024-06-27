<script setup lang="ts">
// const data = await $fetch('http://api.kojima.localhost/sum?a=1&b=2')

const params = reactive({
  a: 1,
  b: 2
})

const { data } = useFetch(`http://backend/sum?a=${params.a}&b=${params.b}`)
// const { data } = useFetch(`http://backend/sum?a=${params.a}&b=${params.b}`)

async function fire() {
  const data = await $fetch(`http://backend/sum?a=${params.a}&b=${params.b}`)
  console.log(data)
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
      {{ data }}
    </div>
    <input type="number" v-model.number="params.a" />
    <input type="number" v-model.number="params.b" />

    <button @click="fire">計算</button>
  </div>
</template>
