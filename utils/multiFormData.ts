/* eslint-disable @typescript-eslint/no-unsafe-argument */

const createMultiFormData = <T extends Record<string, any>>(data: T): FormData => {
  const formData = new FormData();

  const appendFormData = (key: string, value: any, parentKey?: string) => {
    if (value === null || value === undefined) {
      return;
    }

    const formattedKey = parentKey ? `${parentKey}[${key}]` : key;

    if (Array.isArray(value)) {
      value.forEach((item: any, index: number) => {
        appendFormData(index.toString(), item, formattedKey);
      });
    } else if (typeof value === "object" && !(value instanceof File)) {
      Object.entries(value).forEach(([subKey, subValue]) => {
        appendFormData(subKey, subValue, formattedKey);
      });
    } else if (value instanceof File) {
      formData.append(formattedKey, value, value.name);
    } else {
      formData.append(formattedKey, value);
    }
  };

  Object.entries(data).forEach(([key, value]) => {
    appendFormData(key, value);
  });

  return formData;
};

export default createMultiFormData;
