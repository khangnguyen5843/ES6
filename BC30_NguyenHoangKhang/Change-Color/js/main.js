const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar']; 

// const renderButton = () => {
//     for (let i = 0; i < colorList.length; i++){
//         let color = colorList[i];
//         let btn = document.createElement('button');
//         btn.id = `btn-${color}`;
//         btn.className = `color-button ${color}`;
//         btn.style.backgroundColor = color;
//         btn.onclick = function(){
//             document.querySelector('#house').style.color = color;
//         }
//         document.querySelector('#colorContainer').appendChild(btn);
//     }
// }

const renderButton = () => {
    let html = '';

    for (let i = 0; i < colorList.length; i++){
        let color = colorList[i];
        let button = `<button onclick = "changeColor('${color}')" class = "color-button ${color}" style = "background-color: ${color};"></button>`;
        html += button;
    }
    document.querySelector('#colorContainer').innerHTML = html;
}

window.changeColor = (color) => {
    document.querySelector('#house').classList.add(color);
}

window.onload = function (){
    renderButton();
}