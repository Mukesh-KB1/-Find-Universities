
let url = "http://universities.hipolabs.com/search?name=";

let inp = document.querySelector("input");
let btn = document.querySelector("button");

let ul = document.querySelector("ul");


let country = "india";
// let state = "mumbai"

function selCountry(){
    btn.addEventListener("click",async () => {
        let country = inp.value;
        inp.value = "";
        let datas = await getClg(country);
        showlist(datas);
    })
}

function showlist(datas){
    ul.innerText = "";
    for (data of datas){
        console.log(data.name);
        // console.log(data.state-province); //Not working

        let li = document.createElement("li");
        li.innerText = data.name;
        ul.appendChild(li); 
    }
}

async function getClg(country){
    try{
        let res = await axios.get(url+country);
        // console.log(res);
        return res.data;
    }
    catch(err){
        console.log(err);
        
    }
}
selCountry();
