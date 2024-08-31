<template>
  <UButton variant="ghost" @click="openModal"> Enviar post </UButton>

  <LazyAddPostModal v-if="isOpen" v-model="isOpen" @close="isOpen = false" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const openModal = () => {
  isOpen.value = true
}

// Opens automatically with query parameter ?addPost=true or ?addPost=1
const router = useRouter()
onMounted(() => {
  if (router.currentRoute.value.query.addPost) openModal()
})
</script>
