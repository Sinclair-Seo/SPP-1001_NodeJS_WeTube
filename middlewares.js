import routes from "./routes";

export const localMiddleWares = (req, res, next) => {
    res.locals.siteName = "Wetube Template";
    res.locals.routes = routes;
    next();
};