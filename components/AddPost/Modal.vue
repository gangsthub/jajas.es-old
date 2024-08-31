<template>
  <UModal prevent-close>
    <form class="p-4" @submit.prevent="sendPost">
      <input
        type="text"
        name="title"
        placeholder="Título (opcional)"
        class="w-full p-2 border border-black/10 rounded-md"
      />
      <textarea
        name="content"
        required
        placeholder="Contenido"
        class="w-full p-2 border border-black/10 rounded-md mt-2"
      ></textarea>
      <div class="flex justify-end">
        <UButton type="submit" color="gray" variant="ghost">
          Enviar post
        </UButton>
      </div>
    </form>
  </UModal>
</template>

<script setup lang="ts">
const $emit = defineEmits<{
  close: []
}>()

const toast = useToast()

const sendPost = async (e: Event) => {
  await $fetch('/api/posts', {
    method: 'POST',
    body: new FormData(e.target as HTMLFormElement),
  }).catch((err) => {
    toast.add({
      id: 'submit_form_error',
      title: 'Error al enviar el post',
      icon: 'i-octicon-alert-24',
      description: err.message,
    })
  })

  $emit('close')
}
</script>
