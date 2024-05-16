import React from "react";
import "./exercices_One.css";
function Exercices_One() {
  // //! *************************** RED**************************
  // function RedColors() {
  //   console.log("Tableau Red ===> Ok");
  //   let Tabcolors = [];

  //   let red = 255; // Rouge constant à 255
  //   let blue = 0; // Bleu constant à 0

  //   for (let green = 0; green <= 255; green++) {
  //     // Génère une couleur en format RGB
  //     const rgb = `Couleur(${red}, ${green}, ${blue})`;
  //     Tabcolors.push(rgb);
  //   }

  //   return Tabcolors;
  // }

  // // Utilisation de la fonction
  // const redColors = RedColors();
  // console.table(redColors);
  // //! *************************** RED**************************

  // //&* ************************** Green **************************
  // function GreenColors() {
  //   console.log("Tableau Green ==> Ok");
  //   let Tabcolors = [];

  //   let green = 255;
  //   let blue = 0;

  //   for (let red = 255; red >= 0; red--) {
  //     // Génère une couleur en format RGB
  //     const vert = `Couleur( ${red},${green},${blue})`;
  //     Tabcolors.push(vert);
  //   }

  //   return Tabcolors;
  // }
  // // Utilisation de la fonction
  // const greenColors = GreenColors();
  // console.table(greenColors);
  // //&*************************** Green **************************

  // //? *************************** Blue **************************
  // function BlueColors() {
  //   console.log("Tableau Blue ==> OK");
  //   let Tabcolors = [];

  //   let red = 0;
  //   let green = 255;

  //   for (let blue = 0; blue <= 255; blue++) {
  //     // Génère une couleur en format RGB
  //     const rgb = `Couleur( ${red}, ${green},${blue})`;
  //     Tabcolors.push(rgb);
  //   }
  //   return Tabcolors;
  // }
  // // Utilisation de la fonction
  // const blueColors = BlueColors();
  // console.table(blueColors);
  // //? *************************** Blue **************************

  //! Fonction d incrémentation  une de decrementation en fonction des valeur initial
  // *les paramettre utiliser en fonction sont les variable definit dns celle ci

  function incrementation(val1, val2, val3, valeur, X) {
    console.log(`Tableau ${valeur}`);
    let Tabcolors = [];

    let red = val1;
    let green = val2;
    let blue = val3;

    switch (valeur) {
      case "red":
        for (red = 0; red <= 255; red += 5) {
          // Génère une couleur en format RGB
          const rgb = `${X}${valeur}:color(rgb( ${red}, ${green},${blue}));`;
          Tabcolors.push(rgb);
        }
        break;
      case "green":
        for (green = 0; green <= 255; green += 5) {
          // Génère une couleur en format RGB
          const rgb = `${X}${valeur}:color(rgb( ${red}, ${green},${blue}));`;
          Tabcolors.push(rgb);
        }
        break;
      case "blue":
        for (blue = 0; blue <= 255; blue += 5) {
          // Génère une couleur en format RGB
          const rgb = `${X}${valeur}:color(rgb( ${red}, ${green},${blue}));`;
          Tabcolors.push(rgb);
        }
        break;

      default:
        break;
    }

    return Tabcolors;
  }
  function decrementation(val1, val2, val3, valeur, X) {
    console.log(`Tableau ${valeur}`);
    let Tabcolors = [];

    let red = val1;
    let green = val2;
    let blue = val3;

    switch (valeur) {
      case "red":
        for (red = 255; red >= 0; red -= 5) {
          // Génère une couleur en format RGB
          const rgb = `${X}${valeur}:color(rgb( ${red}, ${green},${blue}));`;
          Tabcolors.push(rgb);
        }
        break;
      case "green":
        for (green = 255; green >= 0; green -= 5) {
          // Génère une ${X}${valeur}::: en format RGB
          const rgb = `${X}${valeur}:color(rgb( ${red}, ${green},${blue}));`;
          Tabcolors.push(rgb);
        }
        break;
      case "blue":
        for (blue = 255; blue >= 0; blue -= 5) {
          // Génère une ${X}${valeur}:: en format RGB
          const rgb = `${X}${valeur}:color(rgb( ${red}, ${green},${blue}));`;
          Tabcolors.push(rgb);
        }
        break;

      default:
        break;
    }

    return Tabcolors;
  }
  console.log(
    "teste incrementation== > ",
    incrementation(255, 0, 0, "green", "@green1")
  );
  console.log(
    "teste decrementation== > ",
    decrementation(255, 255, 0, "red", "@red1")
  );
  console.log(
    "teste incrementation== > ",
    incrementation(0, 255, 0, "blue", "@blue1")
  );
  console.log(
    "teste decrementation== > ",
    decrementation(0, 255, 255, "green", "@green1")
  );
  console.log(
    "teste incrementation== > ",
    incrementation(0, 0, 255, "red", "@red1")
  );
  console.log(
    "teste decrementation== > ",
    decrementation(255, 0, 255, "blue", "@blue1")
  );

  return (
    <div className="containCenter">
      <h2>Ma Super Palette de couleur </h2>
      {/* <ul>
        <li>
          <h1>Palette de Rouge</h1> -- {redColors}
        </li>
        <li>
          <h1>Palette de Vert</h1> -- {greenColors}
        </li>
        <li>
          <h1>Palette de Bleu</h1> -- {blueColors}
        </li>
      </ul> */}
    </div>
  );
}

export default Exercices_One;
