import routes from "../routes";

// Join Controller
export const getJoin = (req, res) => {
    res.render("join", {
        pageTitle: "Join"
    });
};
export const postJoin = (req, res) => {
    console.log(req.body);
    const {
        body: { fullname, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", {
            pageTitle: "Join"
        });
    } else {
        // To Do: Register User
        res.redirect(routes.home);
    }
};

// Login Controller
export const getLogin = (req, res) =>
    res.render("login", {
        pageTitle: "Login"
    });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

// Log out Controller
export const logout = (req, res) =>
    res.render("logout", {
        pageTitle: "Logout"
    });

// User Detail Controller
export const userDetail = (req, res) =>
    res.render("userDetail", {
        pageTitle: "User Detail"
    });

// Edit User Profile Controller
export const editProfile = (req, res) =>
    res.render("editProfile", {
        pageTitle: "Edit Profile"
    });

// Change User Password Controller
export const changePassword = (req, res) =>
    res.render("changePassword", {
        pageTitle: "Change Password"
    });