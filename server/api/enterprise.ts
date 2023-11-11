
export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  return { id };
});
