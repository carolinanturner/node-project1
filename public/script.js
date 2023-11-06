//Carolina Turner CSCE 242
const getJSON = async ()=>{
    try{
        let response = await fetch("https://node-project1-8gtg.onrender.com/");
       return await response.json();
    }   catch (error){
    console.log("error retrieving json");
    return "";
    }
}

const showSingers = async () => {
const singerJSON = await getJSON();
    if(singerJSON == ""){
        return ;
    }
    let singerDiv= document.getElementById("singers-list");

    singerJSON.forEach((singer)=>{
        let section = document.createElement("section");
        singerDiv.append(section);
        let title=singer.name;

        let h3=document.createElement("h3");
        section.append(h3);
        h3.innerHTML = singer.name;

        let img = document.createElement("img");
        section.append(img);
        img.src="https://node-project1-8gtg.onrender.com/" + singer.img;

        let ul = document.createElement("ul");
        section.append(ul);
        ul.append(getLi(`Band/Solo Artist: ${singer.band}`));
        ul.append(getLi(`My Favorite Song By ${singer.name}: ${singer.best_song}`));
        ul.append(getLi(`Years Active: ${singer.active}`));
        ul.append(getLi(`Birthplace: ${singer.born}`));
        ul.append(getLi(`Genre(s) ${singer.genre}`));
        section.classList.add("singer");
    
        return section;
    
    });
}
 
const getLi = data=>{
    const li =document.createElement("li");
    li.textContent= data;
    return li;
}

window.onload = () =>{
    showSingers();
};