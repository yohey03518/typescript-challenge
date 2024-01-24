/**
 * 任務：實作一個函式 `parseUrl`，嘗試用 URL 方法，解析網址並 return 其組成部分。
 *
 * 範例：
 * parseUrl('https://www.example.com/path') 應該回傳
 * {
 *   protocol: 'https:',
 *   hostname: 'www.example.com',
 *   path: '/path'
 * }
 *
 * @param url - 一個需要被解析的 URL
 * @returns - 回傳一個物件，包含 protocol、hostname 和 path
 */
interface UrlParts {
    protocol: string;
    hostname: string;
    path: string;
}

export function parseUrl(url: string): UrlParts {
    let url1 = new URL(url);
    return {
        protocol: url1.protocol,
        hostname: url1.hostname,
        path: url1.pathname
    };

    // by regex
    // let urlRegex = /(\w+:)\/\/([\w.]+)(\/\S*)/;
    // let regExpMatchArray = url.match(urlRegex)!;
    // return {
    //       protocol: regExpMatchArray[1],
    //       hostname: regExpMatchArray[2],
    //       path: regExpMatchArray[3]
    // };
}