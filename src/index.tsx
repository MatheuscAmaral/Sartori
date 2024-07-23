import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import Email from "./email";

var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5753c06e4f9738",
      pass: "472440640865a9"
    }
});

const emailHtml = render(<Email text="teste" name="Matheus Amaral" url={""}/>);

const options = {
    from: "sartorieletricamg@gmail.com",
    to: "matheuscamposdoamaral15@gmail.com",
    subject: "ola pae",
    html: emailHtml
}

transporter.sendMail(options).then(() => console.log('Sent'));