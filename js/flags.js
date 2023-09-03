const flag = document.getElementById("flag");
const codeSelector = document.getElementById("code-selector");

const loadData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.number;
        option.text = country.idd.root + country.idd.suffixes[0];
        codeSelector.appendChild(option);
      });
    });
};

loadData();

// codeSelector.addEventListener("change", () => {
//     const code = codeSelector.value;
//     fetch(`https://restcountries.com/v3.1/alpha/${code}`)
//         .then((response) => response.json())
//         .then((data) => {
//         flag.src = data.flags.svg;
//         });
// });
