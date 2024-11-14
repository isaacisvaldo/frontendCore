import { Request, Response } from 'express';

export class DashboardController {
    async dashboard(req: Request, res: Response,) {
        try {
            const user = req.session.user;
            res.render("private/dashboard", {
                user, error: req.flash("error"),
                warning: req.flash("warning"),
                sucess: req.flash("sucess"),
            })
        } catch (error) {
            console.log(error);

        }
    }

}