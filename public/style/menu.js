const menu = document.getElementById('menuLateral');
const overlay = document.getElementById('overlay');
const botonAbrir = document.getElementById('abrirMenu');
const botonCerrar = document.getElementById('cerrarMenu');

function abrirMenu() {
    menu.classList.remove('translate-x-full');
    if (overlay) overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function cerrarMenu() {
    menu.classList.add('translate-x-full');
    if (overlay) overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

botonAbrir.addEventListener('click', abrirMenu);
botonCerrar.addEventListener('click', cerrarMenu);
if (overlay) overlay.addEventListener('click', cerrarMenu);

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') cerrarMenu();
});

console.log('✅ Menú lateral derecho cargado');