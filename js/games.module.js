import { Details } from "./details.module.js";
import { Display } from "./ui.module.js";

export class Games {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((cat) => {
      cat.addEventListener("click", () => {
       document.querySelector(".nav-link.active").classList.remove("active");
       cat.classList.add("active");

        const category = cat.getAttribute("data-category");

        this.getGames(category);
      });
    });

   
    this.loading = document.querySelector(".loading");

    this.g = new Display();
 
    this.getGames("mmorpg");
  }



  async getGames(category) {
    this.loading.classList.remove("d-none");

    const options = {
      method: "get",
      headers: {
        "X-RapidAPI-Key": "932b4f81eamsh2754dd8f1afe81ep13fc20jsn71d598b215a1",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let req = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    let Data = await req.json();

    this.loading.classList.add("d-none");
    console.log(Data);

     this.g.displyGames(Data);
    
    document.querySelectorAll(".items").forEach((item) => {
      item.addEventListener("click", ()=> {
        document.querySelector(".details").classList.remove("d-none");
        document.querySelector("#header").classList.add("d-none");
        const D = new Details(item.getAttribute("gameId"));
        // for id 
      

     
      });
    });


  }


}
