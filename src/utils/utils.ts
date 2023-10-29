export const copyDeep = (value: any): any => {
  if (Array.isArray(value)) {
    return value.map(copyDeep);
  }
  if (value && typeof value === "object") {
    const copy: { [key: string]: any } = {};
    for (const k in value) {
      if (Object.prototype.hasOwnProperty.call(value, k)) {
        copy[k] = copyDeep(value[k]);
      }
    }
    return copy;
  }
  return value;
};
