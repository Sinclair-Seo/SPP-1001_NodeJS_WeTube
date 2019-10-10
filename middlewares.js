import routes from "./routes";

export const localMiddleWares = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    next();
};