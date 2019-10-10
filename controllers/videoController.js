export const homeController = (req, res) => res.render("home", {
    pageTitle: "Home"
});
export const searchController = (req, res) => res.render("search", {
    pageTitle: "Search"
});
export const videoHomeController = (req, res) => res.render("Home", {
    pageTitle: "Video Home"
});
export const uploadController = (req, res) => res.render("upload", {
    pageTitle: "Upload"
});
export const videoDetailController = (req, res) => res.render("videoDetail", {
    pageTitle: "Video Detail"
});
export const editVideoController = (req, res) => res.render("editVideo", {
    pageTitle: "Edit Video"
});
export const deleteVideoController = (req, res) => res.render("deleteVideo", {
    pageTitle: "Delete Video"
});