
const boton = document.getElementById('mensajeBtn');
const h1 = document.querySelector('main h1');


function colorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}


boton.addEventListener('click', () => {
    alert('Hola, este es un mensaje desde JavaScript.');
    h1.style.color = colorAleatorio();
});


const inputTarea = document.getElementById('nuevaTarea');
const btnAgregar = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas');


let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
tareas.forEach(tarea => agregarTareaDOM(tarea));


function agregarTareaDOM(texto) {
    const li = document.createElement('li');
    li.textContent = texto;

    
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.style.marginLeft = '10px';
    btnEliminar.addEventListener('click', () => {
        listaTareas.removeChild(li);
        tareas = tareas.filter(t => t !== texto);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    });

    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);
}


btnAgregar.addEventListener('click', () => {
    const texto = inputTarea.value.trim();
    if (texto) {
        agregarTareaDOM(texto);
        tareas.push(texto);
        localStorage.setItem('tareas', JSON.stringify(tareas));
        inputTarea.value = '';
    }
});


inputTarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnAgregar.click();
    }
});
