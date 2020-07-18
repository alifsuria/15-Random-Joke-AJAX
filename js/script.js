const btn = document.getElementById("joke-receiver");
const display = document.getElementById("display-joke");

btn.addEventListener("click", function() {
  getJoke();
});

function getJoke() {
  const reqJoke = new XMLHttpRequest();
  reqJoke.open("GET", "https://api.chucknorris.io/jokes/random", true);

  reqJoke.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      display.innerHTML = `${data.value}`;
      console.log(reqJoke.status);
    } else {
      console.log(reqJoke.status);
      this.onerror = function() {
        display.textContent = "Connection Error";
      };
    }
  };
  reqJoke.send();
}

// const image = document.querySelector("img");
// const jokeDIV = document.querySelector("#display-joke");
// const button = document.querySelector("#joke-receiver");

// button.addEventListener("click", function() {
//   getRandomJoke();
// });

// function getRandomJoke() {
//   const ajax = new XMLHttpRequest();
//   const url = "https://api.chucknorris.io/jokes/random";

//   ajax.open("GET", url, true);

//   ajax.onreadystatechange = function() {
//     if (this.status === 200 && this.readyState === 4) {
//       console.log(this.responseText);
//       let data = JSON.parse(this.responseText);
//       jokeDIV.innerHTML = `${data.value}`;
//     } else {
//       this.onerror = onerror();
//     }
//   };
//   ajax.send();
// }

// function onerror() {
//   jokeDIV.textContent = "There was an error!";
// }
