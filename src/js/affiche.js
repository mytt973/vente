
const button_success =document.getElementsByClassName('btn-info')[0]

const button_not_success = document.getElementsByClassName('btn-secondary')[0]
let  logeur=""





button_success.addEventListener('click', function (e) {
    e.preventDefault()

    AllBool(false,e);
    getRadio();
    // console.log(logeur);
  })
  
   button_not_success.addEventListener('click',function (e) {
    e.preventDefault()
    AllBool(true,e)
  })



  function AllBool(bool,e){
    e.preventDefault();
    
    for (let i = 1; i <=tabOfText.length; i++) {// a legth 
            let str= `input-${i}`//litérale / interpolation?
            const info = document.getElementById(str);
//             info.addEventListener('input',function (even) {
// console.log(even.target.value+" super?")              
//             })  
            if(getError(info)) {bool=true;}
            if(bool) {info.value=""}
            else{
              console.log(`${info.value}, ${i} \n`);        
}
            }   console.log(e.target.type, logeur)
        }

//   /^[1-9a-zA-Z.@!] 101regex
function getRadio(){
 var up_forms = document.getElementsByName("drone");
 let selectedSize=false
 logeur=""
 for(radio of up_forms){  
        if (radio.checked) {
            selectedSize = radio.value; 
        if(selectedSize=="autre"){
         
          logeur+=` ${document.getElementById("inconu2").value} :\t`}
        }}
        logeur+=selectedSize;
}

function log(nool) {
    if(nool){document.getElementById("inconu2").setAttribute("class","autre2");}
    else {document.getElementById("inconu2").setAttribute("class","autre");}}


    function getError(elemts){
let tab=["fucking"];
let elem=elemts.value;
let oki=false;
for(el of tab){if(elem!=el) oki= true
     else oki= false}
    const re = new RegExp(/[0-9a-z@.]{3,8}/);
    oki= oki&& (re.exec(elem)!=null);//ou exe()
    console.log(oki);
    if(!oki){elemts.setAttribute("class","null");}
    else{elemts.setAttribute("class","valid")}
    return !oki;//todo refaire et analyzé
 }
    