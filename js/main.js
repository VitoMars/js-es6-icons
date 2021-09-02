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

// -----------------------------------------------
// Print delle icone
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
}

console.log(icons);

// -----------------------------------------------
// Implementazione select
const select = document.getElementById("type");

select.onchange = function (element) {
   const filtered = filteredValues(icons, element.target.value);
   console.log(filtered);

   print(filtered, iconsContainer);
};

function filteredValues(array, type) {
   const filteredIcons = array.filter((element) => {
      if (element.type === type) {
         return true;
      }
      return false;
   });

   if (type === "all") {
      return array;
   }

   return filteredIcons;
}
