<script setup lang="ts">
import { ref } from 'vue'
import Child from './child.vue'

const foo = ref('parent-prop')
</script>

<template>
  <div>defineProp demo</div>

  <input v-model="foo" type="text" />
  <Child :foo="foo" bar="bar" />
</template>
