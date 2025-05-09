import { defineMiddleware, sequence } from "astro:middleware";
import { middleware } from "astro:i18n"; // function available with `manual` routing

const customLogic = defineMiddleware(async (_context, next) => {
    return await next();;
});

export const onRequest = sequence(customLogic, middleware({
    prefixDefaultLocale: true,
    redirectToDefaultLocale: false,
    fallbackType: "redirect"
}))