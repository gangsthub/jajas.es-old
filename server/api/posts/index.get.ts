import { tables, useDrizzle } from '~/server/utils/drizzle'

export default eventHandler(async () => {
  const todos = await useDrizzle().select().from(tables.posts).all()

  return todos
})
