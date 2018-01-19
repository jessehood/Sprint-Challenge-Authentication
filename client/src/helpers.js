export function formToJson(form) {
  const data = {};
  const formData = new FormData(form);
  for (let [k,v] of formData.entries()) {
    data[k] = v;
  }
  return data;
}