let htmlNavBar = `
<li class="nav-item active">
    <a class="mrg-top-30" href="./../../index.html">
        <span class="icon-holder">
            <i class="ti-home"></i>
        </span>
        <span class="title">Bienvenida</span>
    </a>
</li>
<li class="nav-item active">
    <a href="./../introduccion/introduccion.html">
        <span class="icon-holder">
            <i class="ei-foggy"></i>
        </span>
        <span class="title">Introducción</span>
    </a>
</li>
<li class="nav-item dropdown">
</li>
<li class="nav-item active">
    <a href="./../politicas/politicas.html">
        <span class="icon-holder">
            <i class="ei-preview"></i>
        </span>
        <span class="title">Políticas</span>
    </a>
</li>
<li class="nav-item active">
    <a href="./../contacto/contacto.html">
        <span class="icon-holder">
            <i class="ei-email"></i>
        </span>
        <span class="title">Contáctanos</span>
    </a>
</li>
<li class="nav-item active">
    <a href="./../creditos/creditos.html">
        <span class="icon-holder">
            <i class="ti-info-alt"></i>
        </span>
        <span class="title">Créditos</span>
    </a>
</li>
`
let htmlModulos = `
<a class="dropdown-toggle" href="javascript:void(0);">
    <span class="icon-holder">
        <i class="ti-agenda"></i>
    </span>
    <span class="title">Módulos</span>
    <span class="arrow">
        <i class="ti-angle-right"></i>
    </span>
</a>
<ul class="dropdown-menu">
    <li>
        <a href="./../temario/temario.html" class="side-index-general">Temario</a>
    </li>
    <li>
        <a href="./../temas/tema1.html" class="side-index-general">
            Tema 1: Resfriado común
        </a>
    </li>
    <li>
        <a href="./../temas/tema2.html" class="side-index-general">
            Tema 2: La influenza
        </a>
    </li>
    <li>
        <a href="./../temas/tema3.html" class="side-index-general">
            Tema 3: Diferencia entre resfriado e influenza
        </a>
    </li>
    <li>
        <a href="./../temas/tema4.html" class="side-index-general">
            Tema 4: Descartando rintis alérgica
        </a>
    </li>
    <li>
        <a href="./../temas/tema5.html" class="side-index-general">
            Tema 5: Faringoamigdalitis aguda bacteriana
        </a>
    </li>
    <li>
        <a href="./../temas/tema6.html" class="side-index-general">
            Tema 6: Complicaciones
        </a>
    </li>
    <li>
        <a href="./../temas/tema7.html" class="side-index-general">
            Tema 7: Cuidados generales
        </a>
    </li>
    <li>
        <a href="./../temas/tema8.html" class="side-index-general">
            Tema 8: Prevención
        </a>
    </li>
</ul>
`

function makeNavBar() {
    let navMenu = document.querySelectorAll(".side-nav-menu.scrollable");
    console.log(navMenu);
    navMenu[0].innerHTML = htmlNavBar;

    let dropdownMenus = document.querySelectorAll(".nav-item.dropdown");
    console.log(dropdownMenus);
    dropdownMenus[0].innerHTML = htmlModulos;
}

makeNavBar();