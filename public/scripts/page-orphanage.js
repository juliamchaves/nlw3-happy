const options ={
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get values from html 
const lat = document.querySelector('span[data-lat').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//CREATE MAP
const map = L.map('mapid', options).setView([lat, lng], 15);

//CREATE AND ADD TILELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//CREATE ICON
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iocnAnchor: [29,68],
    popupAnchor: [170,2]
})

//CREATE AND ADD MARKER

L.marker([lat, lng], {icon}).addTo(map)

//GALERIA DE IMAGEM
function selectImage(event) {
    const button = event.currentTarget

    //REMOVER TODAS AS CLASSES ACTIVE
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass (button){
        button.classList.remove("active")
    }
    //SELECIONAR IMAGEM CLICADA
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //ATUALIZAR O CONTAINER DE IMAGEM
    imageContainer.src = image.src

    //ADD A CLASSE .ACTIVE P/ BOTÃO CLICADO
    button.classList.add('active')

}