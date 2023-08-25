export class Display {
  constructor(){}
  displyGames(Data) {
    let temp = "";
    Data.forEach((element) => {
      temp += ` <div class="col ">
        <div class="card h-100 bg-dark text-white-50 items" gameId="${
          element.id
        }">
        <img src="${element.thumbnail}" class="card-img-top " alt="roblox">
         <div class="card-body d-flex justify-content-between">
         <h5 id="nameGame">${element.title}</h5>
        <button type="button" class="btn px-2 py-0 ">free</button>

     </div>
        <p id="gameDesc" class="mx-3">${element.short_description
          .split(" ")
          .slice(0, 10)
          .join(" ")}</p>
        <div class="card-footer d-flex justify-content-between">
          <h6 id="home" class="sec">home</h6>
        <h6 class="pc">pc (windows)</h6>

          </div>
       </div>
      </div> `;
    });
    document.getElementById("dgames").innerHTML = temp;
  }

  displayDetails(Data) {
    let temp = ` <div class="col-md-4">
     <img src="${Data.thumbnail}" id="gameImage" alt="photo games" class="w-100" >
     </div>
     <div class="col-md-8">
     <h3 id="title" class="text-white">Title: ${Data.title}</h3>
       <p class="text-white fs-5">Category:  <span class="text-bg-info rounded fs-5 p-0 px-1">${Data.genre}</span></p>
        <p class="text-white fs-5">Platform: <span
         class="text-bg-info rounded fs-5 p-0 px-1">${Data.platform}</span></p>
      <p class="text-white fs-5">status: <span class="text-bg-info rounded fs-5 p-0 px-1">${Data.status}</span></p>
       <p id="text" class="text-white">${Data.description}</p>
      <button class="btn btn-outline-warning text-white">show game</button>
        </div>`;
    document.getElementById("mydetails").innerHTML = temp;
  }
}
