//COMENTARIOS EM JS
//CREATE MAP
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

//CREATE AND ADD TILELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//CREATE ICON
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iocnAnchor: [29,68]
})

let marker;

//create and add MARKER
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})


//select photos
function addPhotoField(){
    //pegar container de fotos #images
    const container = document.querySelector('#images')
    //pegar container p/ duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //clonar ultima img add.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se campo está vazio e não add ao container se vazio
    const input = newFieldContainer.children[0]
    if (input.value == ""){
        return
    }
    //limpar campo antes de add ao container
    input.value = ""
    //add o clone ao container de #images.
    container.appendChild(newFieldContainer)
}
function deleteField(){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value =""
        return
    }
    //deletar o campo
    span.parentNode.remove();
}

//Seleção do btn 'Sim' ou 'Não'
function toggleSelect(event){
    //remove class .active from buttons
    document.querySelectorAll('.button-select button')
    //short function
    .forEach((button) => button.classList.remove('active'))

    //add class .active to clicked button
    const button = event.currentTarget
    button.classList.add('active')

    //update input hidden with new value
    const input = document.querySelector('[name="open_on_weekends"]')
    //check 'Yes' or 'No'
    input.value = button.dataset.value
}

function validate(event){

    //validar se lat e lang estão prenchidos
    const needsLatAndLng = false;
    if(needsLatAndLng){
    event.preventDefault()
    alert('Selecione um ponto no mapa')
    }
}