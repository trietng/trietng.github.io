export class LangUtils {
    static removeLocaleFromUrl(url: string): string {
        return url.replace(/^\/[a-z]{2}\//, '/');
    }
}