const icons = [
   {
      name: "cat",
      prefix: "fa-",
      type: "animal",
      family: "fas",
   },
   {
      name: "crow",
      prefix: "fa-",
      type: "animal",
      family: "fas",
   },
   {
      name: "dog",
      prefix: "fa-",
      type: "animal",
      family: "fas",
   },
   {
      name: "dove",
      prefix: "fa-",
      type: "animal",
      family: "fas",
   },
   {
      name: "dragon",
      prefix: "fa-",
      type: "animal",
      family: "fas",
   },
   {
      name: "horse",
      prefix: "fa-",
      type: "animal",
      family: "fas",
   },
   {
      name: "hippo",
      prefix: "fa-",
      type: "animal",
      family: "fas",
   },
   {
      name: "fish",
      prefix: "fa-",
      type: "animal",
      family: "fas",
   },
   {
      name: "carrot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
   },
   {
      name: "apple-alt",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
   },
   {
      name: "lemon",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
   },
   {
      name: "pepper-hot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
   },
   {
      name: "user-astronaut",
      prefix: "fa-",
      type: "user",
      family: "fas",
   },
   {
      name: "user-graduate",
      prefix: "fa-",
      type: "user",
      family: "fas",
   },
   {
      name: "user-ninja",
      prefix: "fa-",
      type: "user",
      family: "fas",
   },
   {
      name: "user-secret",
      prefix: "fa-",
      type: "user",
      family: "fas",
   },
];

// for (i = 0; i < 5; i++) {
//    let nuovo_elemento = document.createElement("div");
//    nuovo_elemento.setAttribute("id", "icons");
//    nuovo_elemento.setAttribute("class", "box");

//    nuovo_elemento.innerHTML = `
//    <i class="fas fa-crow"></i>
//    <div>CROW</div>
//    `;

//    const iconsContainer = document
//       .getElementById("container")
//       .appendChild(nuovo_elemento);
// }

const iconsContainer = document.getElementById("icons");

print(icons, iconsContainer);

function print(array, container) {
   container.innerHTML = "";

   // ForEach per inserimento dell'attributo color
   array.forEach((element, index) => {
      const { type } = element;

      // Aggiungiamo i colori ai tipi
      if (type == "animal") {
         icons[index].color = "blue";
      } else if (type == "vegetable") {
         icons[index].color = "orange";
      } else if (type == "user") {
         icons[index].color = "violet";
      }
   });

   // ForEach per l'inserimento nell'html
   array.forEach((element) => {
      const { name, family, prefix, color } = element;

      container.innerHTML += `
      <div id="icons" class="box">
            <i class="${family} ${prefix}${name} ${color}"></i>
            <div>${name.toUpperCase()}</div>
      </div>
      `;
   });

   console.log(icons);
}
