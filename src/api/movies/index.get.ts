export default defineEventHandler(async () => {
  try {
    return await prisma.movie.findMany()
  }
  catch (e) { throw InternalError(e.message) }
})
