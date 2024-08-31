import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  content: text('content', { mode: 'json' })
    .notNull()
    .$type<object>()
    .$default(() => ({})),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
  likes: integer('likes')
    .notNull()
    .$default(() => 0),
  dislikes: integer('dislikes')
    .notNull()
    .$default(() => 0),
})
