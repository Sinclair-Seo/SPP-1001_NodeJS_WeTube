import routes from "../routes";
import { videos } from "../db";

// Home Controller
export const home = (req, res) =>
    res.render("home", {
        pageTitle: "Home",
        videos
    });

// Search Video Controller
export const search = (req, res) => {
    // console.log(req.query.term);
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", {
        pageTitle: "Search",
        searchingBy,
        videos
    });
};

// Upload Controller
export const getUpload = (req, res) =>
    res.render("upload", {
        pageTitle: "Upload"
    });

export const postUpload = (req, res) => {
    const {
        body: { file, Title, Description }
    } = req;
    // To Do: Upload and save the video uploaded
    res.redirect(routes.videoDetail(1212121));
};

// Video Detail Controller
export const videoDetail = (req, res) =>
    res.render("videoDetail", {
        pageTitle: "Video Detail"
    });

// Edit Video Controller
export const editVideo = (req, res) =>
    res.render("editVideo", {
        pageTitle: "Edit Video"
    });

// Delete Video Controller
export const deleteVideo = (req, res) =>
    res.render("deleteVideo", {
        pageTitle: "Delete Video"
    });