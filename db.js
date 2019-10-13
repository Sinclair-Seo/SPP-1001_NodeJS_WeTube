import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connect to DB");
const handleError = error => console.log(`❌  Error on DB Connection ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

/* export const videos = [{
        id: 324393,
        title: "Video awesome",
        description: "This is something I love",
        views: 24,
        videoFile: "https://ia800300.us.archive.org/17/items/BigBuckBunny_124/Content%2Fbig_buck_bunny_720p_surround.mp4",
        creator: {
            id: 121212,
            name: "Nicolas",
            email: "nico@las.com"
        }
        title: "Video super",
    },
    {
        id: 1212121,
        description: "This is something I love",
        views: 24,
        videoFile: "https://ia800300.us.archive.org/17/items/BigBuckBunny_124/Content%2Fbig_buck_bunny_720p_surround.mp4",
        creator: {
            id: 121212,
            name: "Nicolas",
            email: "nico@las.com"
        }
    }, {
        id: 55555,
        title: "Video nice",
        description: "This is something I love",
        views: 24,
        videoFile: "https://ia800300.us.archive.org/17/items/BigBuckBunny_124/Content%2Fbig_buck_bunny_720p_surround.mp4",
        creator: {
            id: 121212,
            name: "Nicolas",
            email: "nico@las.com"
        }
    }, {
        id: 11111,
        title: "Video perfect",
        description: "This is something I love",
        views: 24,
        videoFile: "https://ia800300.us.archive.org/17/items/BigBuckBunny_124/Content%2Fbig_buck_bunny_720p_surround.mp4",
        creator: {
            id: 121212,
            name: "Nicolas",
            email: "nico@las.com"
        }
    }
]; */