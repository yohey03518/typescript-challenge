/**
 * 任務：實作一個函式 `createObjectAccessor`，該函式接收一個物件，並回傳一個新的物件，該物件有兩個方法：get 和 set。
 * get 方法用於獲取原物件的屬性值，set 方法用於設定原物件的屬性值。
 *
 * 範例：
 * const obj = { name: 'John', age: 30 };
 * const accessor = createObjectAccessor(obj);
 * accessor.get('name') 應該回傳 'John'
 * accessor.set('age', 31);
 * accessor.get('age') 應該回傳 31
 *
 * @param obj - 一個物件
 * @returns - 回傳一個物件，該物件有 get 和 set 兩個方法
 */

interface ObjectAccessor<T> {
    get: (key: keyof T) => any,
    set: (key: keyof T, value: any) => void
}
export function createObjectAccessor<T>(obj: T): ObjectAccessor<T> {
    return {
        get: (key: keyof T) => obj[key],
        set: (key: keyof T, value: any) => obj[key] = value
    };
}