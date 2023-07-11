export default defineEventHandler(async (event) => {
  const { title, description } = await useValidatedBody(event, z.object({
    title: z.string().max(50),
    description: z.string().optional(),
  }))

  try {
    return await prisma.movie.create({ data: { title, description } })
  }
  catch (e) { throw InternalError(e.message) }
})
