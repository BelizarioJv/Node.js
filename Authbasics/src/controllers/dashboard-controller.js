import { users } from "../models/users.js";

export const dashboardController = {
  dashboard: (req, res) => {
    console.log(req.session.authenticated);
    console.log(req.session.currentUser);
    res.render("dashboard", { user: req.session.currentUser });
  },

  users: (req, res) => {
    res.render("users", { users });
  },
};
