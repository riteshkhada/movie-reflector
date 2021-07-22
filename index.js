const modal = document.querySelector (".modal");
const loginBtn = document.querySelector (".btn-login");
const btnClose = document.querySelector (".closeImg");


loginBtn.addEventListener ("click", openModal);
btnClose.addEventListener ("click", closeModal);
window.addEventListener ("click", clickOut);

function openModal () {
    modal.style.display = "block";
    
};
function closeModal () {
    modal.style.display = "none";
};
function clickOut (e) {
    if (e.target == modal) {
        closeModal ();
    }};





















