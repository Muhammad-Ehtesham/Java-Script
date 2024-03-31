function parseText(text) {
  var lines = text.split("\n");

  var mcqentered = {};

  lines.forEach(function (line) {
    if (line.includes("?")) {
      mcqentered.question = line.replace("?", "");
    } else if (line.includes("*")) {
      mcqentered.answer = line.replace("*", "");
    } else {
      if (!mcqentered.option1) {
        mcqentered.option1 = line;
      } else if (!mcqentered.option2) {
        mcqentered.option2 = line;
      }
    }
  });

  return mcqentered;
}

function enterMCQ() {
  var textFromTextField = document.getElementById("MCQ").value;
  var mcqentered = parseText(textFromTextField);
  console.log(mcqentered);
}
