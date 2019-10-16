import routes from "../routes";
import Video from "../models/Video";

// Home Controller
export const home = async(req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", {
            pageTitle: "Home",
            videos
        });
    } catch (error) {
        console.log(error);
        res.render("home", { pasgeTitle: "Home", videos: [] });
    }
};

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

export const postUpload = async(req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;

    // To Do: Upload and save the video uploaded
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });

    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
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