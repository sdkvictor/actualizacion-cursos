function makeNavBar() {

    $(".side-nav-menu").append(`<li class="nav-item active">
    <a class="mrg-top-30" href="index.html">
        <span class="icon-holder">
            <i class="ti-home"></i>
        </span>
        <span class="title">Bienvenida</span>
    </a>
</li>
<li class="nav-item active">
    <a href="html/introduccion/introduccion.html">
        <span class="icon-holder">
            <i class="ei-foggy"></i>
        </span>
        <span class="title">Introducción</span>
    </a>
</li>
<li class="nav-item dropdown">
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
            <a href="html/temario/temario.html" class="side-index-general">Temario</a>
        </li>
        <!-- Módulo 1 -->
        <li class="nav-item dropdown">
            <a class="dropdown-toggle" href="javascript:void(0);">
                <span class="title side-index-general">Módulo 1: Control <br>biológico</span>
                <span class="arrow">
                    <i class="ti-angle-right"></i>
                </span>
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a href="html/modulo1/modulo1-control-biologico.html" class="side-index-general">
                        Control biológico
                    </a>
                </li>
                <li>
                    <a href="html/modulo1/modulo1-enemigos-naturales-plagas.html" class="side-index-general">
                        Enemigos naturales de las plagas
                    </a>
                </li>
                <li>
                    <a href="html/modulo1/modulo1-consideraciones-control-biologico.html" class="side-index-general">
                        Consideraciones del control biológico
                    </a>
                </li>
                <li>
                    <a href="html/modulo1/modulo1-origen-plagas.html" class="side-index-general">
                        Origen de las plagas
                    </a>
                </li>
            </ul>
        </li>

        <!-- Módulo 2 -->
        <li class="nav-item dropdown">
            <a class="dropdown-toggle" href="javascript:void(0);">
                <span class="title side-index-general">Módulo 2: Enemigos <br>de los
                    bosques</span>
                <span class="arrow">
                    <i class="ti-angle-right"></i>
                </span>
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a href="html/modulo2/modulo2-plagas.html" class="side-index-general">
                        Las plagas
                    </a>
                </li>
                <li>
                    <a href="html/modulo2/modulo2-prevencion-incendios.html" class="side-index-general">
                        Prevención de incendios
                    </a>
                </li>
            </ul>
        </li>

        <!-- Módulo 3 -->
        <li class="nav-item dropdown">
            <a class="dropdown-toggle" href="javascript:void(0);">
                <span class="title side-index-general">Módulo 3: <br>Reforestación</span>
                <span class="arrow">
                    <i class="ti-angle-right"></i>
                </span>
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a href="html/modulo3/modulo3-guia-establecimiento-reforestacion.html"
                        class="side-index-general">Guía para el establecimiento y
                        cuidados de una reforestación
                    </a>
                </li>
                <li>
                    <a href="html/modulo3/modulo3-eucalipto.html" class="side-index-general">
                        Eucalipto, ejemplo de un árbol ideal para reforestar
                    </a>
                </li>
            </ul>
        </li>

        <!-- Módulo 4 -->
        <li class="nav-item dropdown">
            <a class="dropdown-toggle" href="javascript:void(0);">
                <span class="title side-index-general">Módulo 4: Otros <br>ejemplos para <br>elaborar tu curso</span>
                <span class="arrow">
                    <i class="ti-angle-right"></i>
                </span>
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a href="html/modulo4/otros-ejemplos.html" class="side-index-general">
                        Otros ejemplos
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</li>
<li class="nav-item active">
    <a href="html/examen/introduccion.html">
        <span class="icon-holder">
            <i class="ei-checked-box"></i>
        </span>
        <span class="title">Examen</span>
    </a>
</li>
<li class="nav-item active">
    <a href="html/politicas/politicas.html">
        <span class="icon-holder">
            <i class="ei-preview"></i>
        </span>
        <span class="title">Políticas</span>
    </a>
</li>
<li class="nav-item active">
    <a href="html/contacto/contacto.html">
        <span class="icon-holder">
            <i class="ei-email"></i>
        </span>
        <span class="title">Contáctanos</span>
    </a>
</li>
<li class="nav-item active">
    <a href="html/creditos/creditos.html">
        <span class="icon-holder">
            <i class="ti-info-alt"></i>
        </span>
        <span class="title">Créditos</span>
    </a>
</li>
`)
    
}

makeNavBar();