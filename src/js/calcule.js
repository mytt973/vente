// export default function(data){
//     return(
//         `
//         <input type="${data}" placeholder="ton Nom">

//         `
//     )
// }

// import {name} from "./fonction.js";
// name()

const body = document.querySelector("#from");
const p = document.createElement("p");
p.innerHTML = "Bienvenue";
body.appendChild(p);

function create() {
  const button_not_success = document.createElement("button");
  const button_success = document.createElement("button");

  button_success.innerHTML = "validé";
  button_not_success.innerHTML = "reset";

  button_success.setAttribute("class", "btn-info");
  button_not_success.setAttribute("class", "btn-secondary");

  button_success.type = "submit";
  button_not_success.type = "reset";

  body.appendChild(button_success);
  body.appendChild(button_not_success);
}

function constData(tab, data) {
  let i = 0;
  tab.forEach((elem) => {
    i++;
    data.setText(elem);
    data.setId("input-" + i);
    // console.log(elem);
    createData(data);
  });
}

function createData(data) {
  const span = document.createElement("span");
  const success = document.createElement(data.element);
  success.setAttribute("placeholder", data.text);
  success.setAttribute("class", data.classe);
  success.setAttribute("id", data.id);
  success.setAttribute("pattern", "[0-9a-z@.]{3,8}");
  success.setAttribute("type", data.changeType());
  span.setAttribute("class", "input-group-text");
  body.appendChild(span);
  span.appendChild(success);
}
function log(nool) {
  if (nool) {
    document.getElementById("inconu2").setAttribute("class", "autre2");
  } else {
    document.getElementById("inconu2").setAttribute("class", "autre");
  }
}
let truc = `        
            <legend>Select the type of your humanity:</legend>
          
            <div>
              <input type="radio" onclick="log(false)" name="drone" value="Homme" checked />
              <label for="Homme">Homme</label>
            </div>
          
            <div>
              <input type="radio" onclick="log(false)" id="dewey" name="drone" value="Femme" />
              <label for="Femme">Femme</label>
            </div>
          
            <div>
              <input type="radio" onclick="log(true)" id="louie" name="drone" value="autre" />
              <label id="inconu" for="autre">autre</label>
              <input id="inconu2" class="autre" placeholder="something"></input>
            </div>`;

const body2 = document.querySelector("#from2");
body2.innerHTML = truc;

let Data = {
  element: "input",
  text: "default",
  classe: "from-control",
  IsInput: true,
  id: 0,
  setText(str) {
    this.text = str;
  },
  setclass(str) {
    this.classe = str;
  },
  setEle(str) {
    this.element = str;
  },
  setId(id) {
    this.id = id;
  }, //le mascage est du a la priorité de porté,
  changeType() {
    return this.text == "password" ? "password" : "text";
  },
};

const tabOfText = ["name", "lastname", "password"];

let [gy, ...resto] = tabOfText; //nouvelle notation  xss  \'
let str = " : ";
console.log(gy, str, resto.toString());
constData(tabOfText, Data);
create();
// const info = document.getElementById("input-1");
// info.addEventListener('input',function (even) {
// console.log(even.target.value+" super?") })

/**
 * seal/freezz
 * i=12
 * i=change(i)+i.length+i
 * i=i+12
 * si tu ne use pas le fonction sa stop
 *
 */
