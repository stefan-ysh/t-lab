export default defineEventHandler(async (event) => {
  debugger
  // 读取请求体中的参数，使用 await 的方式通过 readBody() 方法
  const { inputName } = await readBody(event);
  return `你的名字叫${inputName}`;
});
