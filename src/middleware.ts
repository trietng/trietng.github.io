import { defineMiddleware, sequence } from "astro:middleware";
import { middleware, redirectToDefaultLocale } from "astro:i18n"; // function available with `manual` routing

const customLogic = defineMiddleware(async (context, next) => {
    if (context.url.pathname === "/") {
        return redirectToDefaultLocale(context, 302)!;
    }
    return await next();;
});

export const onRequest = sequence(customLogic, middleware({
    prefixDefaultLocale: true,
    redirectToDefaultLocale: false,
    fallbackType: "redirect"
}))