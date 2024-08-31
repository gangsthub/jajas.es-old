<template>
  <article class="p-4 flex flex-col justify-between min-h-[400px]">
    {{ post.title }}
    {{ post.date }}
    <slot />
  </article>
</template>

<script setup lang="ts">
import type { Post } from '~/types'

defineProps<{
  post: Post
}>()
</script>
