import inquirer from "inquirer";
import qr from "qr-image"
import fs from "fs"

const questions = [
    {
      type: 'input',
      name: 'link',
      message: "Write your link here",
    }
]


inquirer.prompt(questions).then((answers) => {

    let mainLink = answers.link;

    fs.writeFile("link.txt", mainLink, (err) => {
        if(err) throw err;
    });

    let qr_svg = qr.image(mainLink);
    qr_svg.pipe(fs.createWriteStream('myLink.png'));
});
