export default eventHandler(async (event) => {
  const form = await readFormData(event)

  const { title, content } = {
    title: form.get('title'),
    content: form.get('content'),
  }

  const db = hubDatabase()

  await db
    .prepare(
      'INSERT INTO posts (title, content, created_at) VALUES (@title, @content, @created_at)'
    )
    .bind(title, content, Date.now())
    .run()

  return {}
})
