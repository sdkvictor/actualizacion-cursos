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
    <!-- Módulo 1 -->
    <li class="nav-item dropdown">
        <a class="dropdown-toggle" href="javascript:void(0);">
            <span class="title side-index-general">Módulo 1: Cuida tu salud</span>
            <span class="arrow">
                <i class="ti-angle-right"></i>
            </span>
        </a>
        <ul class="dropdown-menu">
            <li>
                <a href="./../modulo1/modulo1-diabetes.html" class="side-index-general">
                    Diabetes
                </a>
            </li>
            <li>
                <a href="./../modulo1/modulo1-menopausia.html" class="side-index-general">
                    Menopausia
                </a>
            </li>
            <li>
                <a href="./../modulo1/modulo1-ejercicio-fisico.html" class="side-index-general">
                    Ejercicio Físico
                </a>
            </li>
            <li>
                <a href="./../modulo1/modulo1-salud-mental.html" class="side-index-general">
                    Salud mental
                </a>
            </li>
        </ul>
    </li>

    <!-- Módulo 2 -->
    <li class="nav-item dropdown">
        <a class="dropdown-toggle" href="javascript:void(0);">
            <span class="title side-index-general">Módulo 2: Conoce tus derechos</span>
            <span class="arrow">
                <i class="ti-angle-right"></i>
            </span>
        </a>
        <ul class="dropdown-menu">
            <li>
                <a href="./../modulo2/modulo2-ser-mujer.html" class="side-index-general">
                    Ser mujer
                </a>
            </li>
            <li>
                <a href="./../modulo2/modulo2-derechos-de-la-mujer.html" class="side-index-general">
                    Derechos de la mujer
                </a>
            </li>
            <li>
                <a href="./../modulo2/modulo2-riesgos-del-embarazo.html" class="side-index-general">
                    Riesgos de trabajo en el embarazo
                </a>
            </li>
        </ul>
    </li>

    <!-- Módulo 3 -->
    <li class="nav-item dropdown">
        <a class="dropdown-toggle" href="javascript:void(0);">
            <span class="title side-index-general">Módulo 3: Protege a tu familia</span>
            <span class="arrow">
                <i class="ti-angle-right"></i>
            </span>
        </a>
        <ul class="dropdown-menu">
            <li>
                <a href="./../modulo3/modulo3-sexualidad.html" class="side-index-general">
                    Sexualidad
                </a>
            </li>
            <li>
                <a href="./../modulo3/modulo3-mayores.html" class="side-index-general">
                    Nuestros mayores
                </a>
            </li>
            <li>
                <a href="./../modulo3/modulo3-adicciones.html" class="side-index-general">
                    Adicciones
                </a>
            </li>
        </ul>
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