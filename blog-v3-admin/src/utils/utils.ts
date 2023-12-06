export function deepClone(obj: any) {
  const objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        //判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          //如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
