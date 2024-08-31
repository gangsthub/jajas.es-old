<template>
  <ul class="flex flex-col gap-4">
    <li v-for="post in posts" :key="post._id" class="bg-red-100">
      <ThreadItem :post="post" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Post } from '~/types'

const posts = ref<Post[]>([])
</script>
