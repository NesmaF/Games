import { Display } from "./ui.module.js";

export class Details {
  constructor(id) {
    document.getElementById("btnClose").addEventListener("click", () => {
      document.getElementById("details").classList.add("d-none");
      document.getElementById("header").classList.remove("d-none");
    });
    this.getDetails(id);
  }

  async getDetails(id) {
    let loading = document.querySelector(".loading");
    loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "932b4f81eamsh2754dd8f1afe81ep13fc20jsn71d598b215a1",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let reqid = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    let Dataid = await reqid.json();

    console.log(Dataid);

    new Display().displayDetails(Dataid);

    loading.classList.add("d-none");
  }
}
