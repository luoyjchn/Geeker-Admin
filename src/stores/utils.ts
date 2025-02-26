/**
 * @description 获取store id
 * @param key
 */
export const getStoreId = (key: string | number) => [APP_ID, key].join("-");
