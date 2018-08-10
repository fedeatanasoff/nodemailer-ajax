var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/mail", (req, res, next) => {
  console.log(req.body);
  let transporte = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "qwerty.repair.pc@gmail.com",
      pass: "P1a2s3s4"
    }
  });

  let mailOptions = {
    from: "QWERTY Repair <qwerty.repair.pc@gmail.com>",
    to: "qwerty.repair.pc@gmail.com",
    subject: "Has recibido un mensaje desde QWERTY Repair",
    text: `Has recibido un nuevo mensaje de ${req.body.name} Email: ${
      req.body.email
    } Mensaje: ${req.body.message}`,
    html: `<p>Has recibido un nuevo mensaje</p>
            <ul><li> Nombre ${req.body.name}</li> 
            <li>Email: ${req.body.email} </li>
            <li>Mensaje: ${req.body.message}</li></ul>`
  };

  transporte.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      // res.render("error", { msg: "error al enviar el formulario" });
    } else {
      console.log("mensaje enviado " + info.response);
      res.send(mailOptions.text);
      // res.render("enviado", { msg: "mensaje enviado", title: "QWERTY Repair" });
      // res.render("enviado", { msg: "el mensaje fue enviado" });
    }

    //res.redirect("/");
  });
});

module.exports = router;
