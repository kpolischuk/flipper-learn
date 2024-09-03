let str = 'Hello flipper';
let int = 42;
let b = true;
let o = {
  a: 42,
  b: "43"
};

let serial = require("serial");
let dialog = require("dialog");
let submenu = require("submenu");

dialog.message('Soo, what Marsellos Wallace looks like?', 'What?');

let d_pararms = ({
  header: "We are happy, Wince?",
  text: "Wince, we are happy?",
  button_left: "What?",
  button_right: "Again?",
  button_center: "Oh, yes, we are happy!"
});

dialog.custom(d_pararms);

let setMenu1 = function() {
  submenu.setHeader("Flycolor ESC");
  submenu.addItem("Item1", 1);
  submenu.addItem("return", 2);
  submenu.addItem("exit", 0);
}

setMenu1();
let smr = submenu.show();
while (smr !== 0) {


if (smr === 1) 
{
  dialog.message("menu 1", "values");
} else if (smr ===2) { 
  setMenu1();
  smr = submenu.show();
} else {
  console.log("end");
}
  setMenu1();
  smr = submenu.show();
}

console.log("Good Bye");

