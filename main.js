//Step 1
const orderedList = document.querySelectorAll("ol li");

// for (let i = 0; i < orderedList.length; i++) {
    
//     let list = orderedList[i];
    
//     list.addEventListener('click', function () {
//         list.target.style.textDecoration = "line-through";
//     });
// }



strikeThrough = function (list) {
    list.target.style.textDecoration = "line-through";
};
for (const list of orderedList) list.addEventListener("click", strikeThrough);

//Step 2

const unorderedList = document.querySelectorAll("ul li");

// for (let i = 0; i < unorderedList.length; i++) {
//     let list = unorderedList[i];

//     list.addEventListener("click", function () {
//         list.style.opacity = "0";
//     })
    
// };

fadeAway = function(list) {
    list.target.style.opacity = "0";
};

for (const list of unorderedList) list.addEventListener("click", fadeAway);

//Step 3

const images = document.querySelectorAll("#row img");

// for (let i = 0; i < images.length; i++) {
//     let pics = images[i];

//     pics.addEventListener("click", function () {
//         pics.style.width = "0px";
//     })
    
// }

collapse = function(pics) {
    pics.target.style.width = "0px";
}
for(const pics of images) pics.addEventListener("click", collapse);

//Step 4

const meteor = document.querySelector("#destroy-all");

destroy = function () {
    for (const list of orderedList) list.style.textDecoration = "line-through";
    for (const list of unorderedList) list.style.opacity = "0";
    for(const pics of images) pics.style.width = "0px";
};
meteor.addEventListener("click", destroy);

    
