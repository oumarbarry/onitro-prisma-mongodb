export default defineEventHandler(async (event) => {
  console.log(useExample().hello())

  try {
    const query = await useValidatedQuery(event, z.object({ limit: z.coerce.number() }))

    return { success: true, query }
  }
  catch (e) { throw InternalError(e.message) }
})
