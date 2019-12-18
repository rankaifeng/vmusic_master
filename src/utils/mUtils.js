
/**
 * 保存localStorage
 * @param {*} name 保存的键
 * @param {*} content 保存的值
 */
export const setStorage = (name, content) => {
    if (!name) { return; };
    if (typeof (content) !== "string") {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}
/**
 * 获取localStorage的值
 * @param {*} name 
 */
export const getStorage = (name) => {
    if (!name) { return; };
    window.localStorage.getItem(name)
}
/**
 * 删除localStorage的值
 * @param {*} name 
 */
export const removeStorage = (name) => {
    if (!name) { return; };
    window.localStorage.removeItem(name);
}
/**
 * 清空所有保存的值
 */
export const clearStorage = () => {
    window.localStorage.clear();
}