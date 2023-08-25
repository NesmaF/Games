let loading = document.querySelector(".loading");
let details = document.getElementById("details");
let header = document.getElementById("header");

async function getGames(category = "mmorpg") {
  loading.classList.remove("d-none");

  const options = {
    method: "GET",
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

  loading.classList.add("d-none");

  console.log(Data);
  displyGames(Data);
}
getGames();

function displyGames(Data) {
  let temp = "";
  Data.forEach((element) => {
    temp += ` <div class="col ">
                        <div class="card h-100 bg-dark text-white-50 items" gameId="${
                          element.id
                        }">
                            <img src="${
                              element.thumbnail
                            }" class="card-img-top " alt="roblox">
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
  navlist();
  getId();
}

function getId() {
  let items = document.querySelectorAll(".items");
  items.forEach((el) => {
    el.addEventListener("click", function () {
      details.classList.remove("d-none");
      header.classList.add("d-none");

      //   forid

      let id = this.getAttribute("gameId");

      loading.classList.remove("d-none");
      getDetails(id);
    });
  });
}

async function getDetails(id) {
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

  displayDetails(Dataid);
}

function displayDetails(element) {
  let temp = ` <div class="col-md-4">
                            <img src="${element.thumbnail}" id="gameImage" alt="photo games" class="w-100" >
                        </div>
                        <div class="col-md-8">
                            <h3 id="title" class="text-white">Title: ${element.title}</h3>
                            <p class="text-white fs-5">Category:  <span
                                    class="text-bg-info rounded fs-5 p-0 px-1">${element.genre}</span></p>
                            <p class="text-white fs-5">Platform: <span
                                    class="text-bg-info rounded fs-5 p-0 px-1">${element.platform}</span></p>
                            <p class="text-white fs-5">status: <span
                                    class="text-bg-info rounded fs-5 p-0 px-1">${element.status}</span>
                            </p>


                            <p id="text" class="text-white">${element.description}</p>
                            <button class="btn btn-outline-warning text-white">show game</button>
                        </div>

                  `;
    document.getElementById("mydetails").innerHTML = temp;
    loading.classList.add("d-none");
}

// for close btn
document.getElementById("btnClose").addEventListener("click", () => {
  header.classList.remove("d-none");
  details.classList.add("d-none");
});

// link choose category
function navlist() {
  let navLink = document.querySelectorAll(".nav-link");
  navLink.forEach((cat) => {
    cat.addEventListener("click", function () {
      let game = cat.dataset.category;
      //   let game = this.getAttribute("data-category");
      getGames(game);
    });
  });
}
// link change color
$(".nav-link").click(function () {
  $(".nav-link").removeClass("active"); // it remove all the active links
  $(this).addClass("active"); // it adds active class to the current link you have opened
});
