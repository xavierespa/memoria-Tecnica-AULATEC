

/**********************************************************
 *  PROGRESO DEL JUGADOR
 **********************************************************/
let puntos = parseInt(localStorage.getItem("puntos")) || 0;
let xp = parseInt(localStorage.getItem("xp")) || 0;
let nivel = parseInt(localStorage.getItem("nivel")) || 1;
let respondidas = JSON.parse(localStorage.getItem("respondidas")) || [];

/**********************************************************
 *  BANCO DE PREGUNTAS
 **********************************************************/
const bancoPreguntas = {
         diseno_basico: [],
    diseno_avanzado: [],
    sistemas_basico: [],
    sistemas_avanzado: [],
    soporte_basico: [],
    soporte_avanzado: [],
    
    // ===== DISEÑO WEB =====
    diseno_basico: [
        {
            id: "dw-b-1",
            pregunta: "¿Qué etiqueta HTML crea un título principal?",
            opciones: ["&lt;p&gt;", "&lt;h1&gt;", "&lt;div&gt;"],
            correcta: "&lt;h1&gt;"
        },

        {
            id: "dw-b-2",
            pregunta: "¿Qué lenguaje se usa para dar estilo a una página web?",
            opciones: ["HTML", "CSS", "Java"],
            correcta: "CSS"
        },
        {
            id: "dw-b-3",
            pregunta: "¿Qué etiqueta se usa para crear un enlace?",
            opciones: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;"],
            correcta: "&lt;a&gt;"
        },
        {
            id: "dw-b-4",
            pregunta: "¿Qué etiqueta se usa para insertar una imagen?",
            opciones: ["&lt;img&gt;", "&lt;image&gt;", "&lt;pic&gt;"],
            correcta: "&lt;img&gt;"
        },

        {
            id: "dw-b-5",
            pregunta: "¿Qué atributo indica la ruta de una imagen?",
            opciones: ["src", "alt", "href"],
            correcta: "src"
        },
        {
            id: "dw-b-6",
            pregunta: "¿Qué etiqueta agrupa contenido en bloque?",
            opciones: ["&lt;span&gt;", "&lt;div&gt;", "&lt;strong&gt;"],
            correcta: "&lt;div&gt;"
        },
        {
            id: "dw-b-7",
            pregunta: "¿Qué propiedad CSS cambia el color del texto?",
            opciones: ["color", "background", "font-style"],
            correcta: "color"
        },
        {
            id: "dw-b-8",
            pregunta: "¿Qué archivo suele tener extensión .html?",
            opciones: ["Página web", "Hoja de estilos", "Imagen"],
            correcta: "Página web"
        }
    ],

    diseno_avanzado: [
        {
            id: "dw-a-1",
            pregunta: "¿Qué propiedad CSS centra un elemento horizontalmente?",
            opciones: ["float", "margin: auto", "position"],
            correcta: "margin: auto"
        },
        {
            id: "dw-a-2",
            pregunta: "¿Qué propiedad CSS controla el tamaño del texto?",
            opciones: ["font-size", "text-align", "display"],
            correcta: "font-size"
        },
        {
            id: "dw-a-3",
            pregunta: "¿Qué valor de display coloca elementos en línea?",
            opciones: ["block", "inline", "none"],
            correcta: "inline"
        },
        {
            id: "dw-a-4",
            pregunta: "¿Qué propiedad permite usar Flexbox?",
            opciones: ["display: flex", "position: flex", "float: flex"],
            correcta: "display: flex"
        },
        {
            id: "dw-a-5",
            pregunta: "¿Qué propiedad controla el espacio interno de un elemento?",
            opciones: ["margin", "padding", "border"],
            correcta: "padding"
        },
        {
            id: "dw-a-6",
            pregunta: "¿Qué selector CSS apunta a una clase?",
            opciones: ["#", ".", "*"],
            correcta: "."
        },
        {
            id: "dw-a-7",
            pregunta: "¿Qué propiedad permite posicionar un elemento respecto a la pantalla?",
            opciones: ["relative", "absolute", "fixed"],
            correcta: "fixed"
        },
        {
            id: "dw-a-8",
            pregunta: "¿Qué propiedad define el orden de prioridad en capas?",
            opciones: ["z-index", "opacity", "overflow"],
            correcta: "z-index"
        }
    ],

    // ===== SISTEMAS OPERATIVOS =====
    sistemas_basico: [
        {
            id: "so-b-1",
            pregunta: "¿Cuál es la función principal de un sistema operativo?",
            opciones: [
                "Controlar el hardware y software",
                "Abrir programas",
                "Encender la computadora"
            ],
            correcta: "Controlar el hardware y software"
        },
        {
            id: "so-b-2",
            pregunta: "¿Cuál es un ejemplo de sistema operativo?",
            opciones: ["Windows", "Excel", "Google"],
            correcta: "Windows"
        },
        {
            id: "so-b-3",
            pregunta: "¿Qué sistema operativo es de código abierto?",
            opciones: ["Linux", "Windows", "macOS"],
            correcta: "Linux"
        },
        {
            id: "so-b-4",
            pregunta: "¿Qué software permite administrar archivos?",
            opciones: ["Explorador de archivos", "Antivirus", "BIOS"],
            correcta: "Explorador de archivos"
        },
        {
            id: "so-b-5",
            pregunta: "¿Qué se ejecuta al iniciar la computadora?",
            opciones: ["Sistema operativo", "Word", "Navegador"],
            correcta: "Sistema operativo"
        },
        {
            id: "so-b-6",
            pregunta: "¿Qué dispositivo es de entrada?",
            opciones: ["Teclado", "Monitor", "Impresora"],
            correcta: "Teclado"
        },
        {
            id: "so-b-7",
            pregunta: "¿Qué sistema operativo usan la mayoría de PCs?",
            opciones: ["Windows", "Android", "iOS"],
            correcta: "Windows"
        },
        {
            id: "so-b-8",
            pregunta: "¿Qué controla la memoria RAM?",
            opciones: ["Sistema operativo", "Mouse", "Monitor"],
            correcta: "Sistema operativo"
        }
    ],

    sistemas_avanzado: [
        {
            id: "so-a-1",
            pregunta: "Si la computadora no enciende, ¿qué se revisa primero?",
            opciones: ["Fuente de poder", "Mouse", "Teclado"],
            correcta: "Fuente de poder"
        },
        {
            id: "so-a-2",
            pregunta: "¿Qué es la BIOS?",
            opciones: [
                "Firmware que inicia el hardware",
                "Un programa de oficina",
                "Un antivirus"
            ],
            correcta: "Firmware que inicia el hardware"
        },
        {
            id: "so-a-3",
            pregunta: "¿Qué tipo de memoria es volátil?",
            opciones: ["RAM", "Disco duro", "ROM"],
            correcta: "RAM"
        },
        {
            id: "so-a-4",
            pregunta: "¿Qué sistema de archivos usa Windows?",
            opciones: ["NTFS", "EXT4", "FAT12"],
            correcta: "NTFS"
        },
        {
            id: "so-a-5",
            pregunta: "¿Qué ocurre si se llena la memoria RAM?",
            opciones: [
                "El sistema se vuelve lento",
                "La PC se apaga",
                "Se borra el disco"
            ],
            correcta: "El sistema se vuelve lento"
        },
        {
            id: "so-a-6",
            pregunta: "¿Qué es un proceso?",
            opciones: [
                "Programa en ejecución",
                "Archivo guardado",
                "Dispositivo externo"
            ],
            correcta: "Programa en ejecución"
        },
        {
            id: "so-a-7",
            pregunta: "¿Qué permite el multitarea?",
            opciones: [
                "Ejecutar varios programas",
                "Usar varios monitores",
                "Conectar USB"
            ],
            correcta: "Ejecutar varios programas"
        },
        {
            id: "so-a-8",
            pregunta: "¿Qué software gestiona los recursos del sistema?",
            opciones: [
                "Sistema operativo",
                "Aplicación",
                "Driver"
            ],
            correcta: "Sistema operativo"
        }
    ],

    // ===== SOPORTE TÉCNICO =====
    soporte_basico: [
        {
            id: "sp-b-1",
            pregunta: "Cuando no hay internet, ¿qué se revisa primero?",
            opciones: [
                "Cable de red o WiFi",
                "Formatear la PC",
                "Cambiar el monitor"
            ],
            correcta: "Cable de red o WiFi"
        },
        {
            id: "sp-b-2",
            pregunta: "¿Qué hace un antivirus?",
            opciones: [
                "Detecta malware",
                "Aumenta la RAM",
                "Instala programas"
            ],
            correcta: "Detecta malware"
        },
        {
            id: "sp-b-3",
            pregunta: "¿Qué dispositivo muestra la imagen?",
            opciones: ["Monitor", "CPU", "Router"],
            correcta: "Monitor"
        },
        {
            id: "sp-b-4",
            pregunta: "¿Qué hacer si el teclado no responde?",
            opciones: [
                "Revisar conexión",
                "Cambiar pantalla",
                "Formatear"
            ],
            correcta: "Revisar conexión"
        },
        {
            id: "sp-b-5",
            pregunta: "¿Qué equipo permite conexión a internet?",
            opciones: ["Router", "Impresora", "Escáner"],
            correcta: "Router"
        },
        {
            id: "sp-b-6",
            pregunta: "¿Qué es mantenimiento preventivo?",
            opciones: [
                "Evitar fallas",
                "Reparar daños",
                "Cambiar piezas"
            ],
            correcta: "Evitar fallas"
        },
        {
            id: "sp-b-7",
            pregunta: "¿Qué se usa para limpiar una PC?",
            opciones: [
                "Aire comprimido",
                "Agua",
                "Alcohol con azúcar"
            ],
            correcta: "Aire comprimido"
        },
        {
            id: "sp-b-8",
            pregunta: "¿Qué revisas si no hay sonido?",
            opciones: [
                "Configuración de audio",
                "Pantalla",
                "Teclado"
            ],
            correcta: "Configuración de audio"
        }
    ],

    soporte_avanzado: [
        {
            id: "sp-a-1",
            pregunta: "Si la PC se apaga sola, ¿qué causa es más probable?",
            opciones: [
                "Sobrecalentamiento",
                "Falla del mouse",
                "Error del teclado"
            ],
            correcta: "Sobrecalentamiento"
        },
        {
            id: "sp-a-2",
            pregunta: "¿Qué componente enfría el procesador?",
            opciones: ["Disipador", "RAM", "Fuente"],
            correcta: "Disipador"
        },
        {
            id: "sp-a-3",
            pregunta: "¿Qué indica un pitido al encender la PC?",
            opciones: [
                "Error de hardware",
                "Inicio normal",
                "Conexión a internet"
            ],
            correcta: "Error de hardware"
        },
        {
            id: "sp-a-4",
            pregunta: "¿Qué herramienta sirve para diagnosticar disco duro?",
            opciones: [
                "Administrador de discos",
                "Paint",
                "Bloc de notas"
            ],
            correcta: "Administrador de discos"
        },
        {
            id: "sp-a-5",
            pregunta: "¿Qué causa lentitud extrema en el sistema?",
            opciones: [
                "Malware",
                "Buen mantenimiento",
                "Drivers actualizados"
            ],
            correcta: "Malware"
        },
        {
            id: "sp-a-6",
            pregunta: "¿Qué es un driver?",
            opciones: [
                "Controlador de hardware",
                "Programa de oficina",
                "Sistema operativo"
            ],
            correcta: "Controlador de hardware"
        },
        {
            id: "sp-a-7",
            pregunta: "¿Qué acción previene pérdida de información?",
            opciones: [
                "Copias de seguridad",
                "Formatear",
                "Apagar mal"
            ],
            correcta: "Copias de seguridad"
        },
        {
            id: "sp-a-8",
            pregunta: "¿Qué se revisa si un USB no es reconocido?",
            opciones: [
                "Puertos y drivers",
                "Monitor",
                "Teclado"
            ],
            correcta: "Puertos y drivers"
        }
    ]
};


/**********************************************************
 *  CARGAR PREGUNTAS DEL DOCENTE DESDE LOCALSTORAGE
 **********************************************************/
const preguntasDocente = JSON.parse(localStorage.getItem("preguntasDocente"));

if (preguntasDocente) {
    for (let modulo in preguntasDocente) {
        if (bancoPreguntas[modulo]) {
            bancoPreguntas[modulo] =
                bancoPreguntas[modulo].concat(preguntasDocente[modulo]);
        }
    }
}



/**********************************************************
 *  AL CARGAR LA PÁGINA
 **********************************************************/
document.addEventListener("DOMContentLoaded", () => {
    actualizarPuntaje();
    actualizarBarra();
    actualizarXP();
    actualizarLogros();
});

/**********************************************************
 *  FUNCIONES DE INTERFAZ
 **********************************************************/
function actualizarPuntaje() {
    const p = document.getElementById("puntos");
    if (p) p.textContent = puntos + " puntos";
}

function actualizarBarra() {
    const barra = document.getElementById("progreso");
    if (!barra) return;
    barra.style.width = Math.min(puntos, 100) + "%";
}

function mostrarMensaje(texto, tipo) {
    const m = document.getElementById("mensaje");
    if (!m) return;
    m.textContent = texto;
    m.className = "mensaje " + tipo + " mostrar";
    setTimeout(() => m.classList.remove("mostrar"), 3000);
}

/**********************************************************
 *  RESPUESTAS
 **********************************************************/
function respuestaCorrecta(id) {

    if (respondidas.includes(id)) {
        mostrarMensaje("⚠ Esta pregunta ya fue respondida", "error");
        return;
    }

    puntos += 10;
    xp += 10;
    respondidas.push(id);

    if (xp >= nivel * 50) {
        nivel++;
        mostrarMensaje("🎉 Subiste de nivel!", "exito");
    }

    localStorage.setItem("puntos", puntos);
    localStorage.setItem("xp", xp);
    localStorage.setItem("nivel", nivel);
    localStorage.setItem("respondidas", JSON.stringify(respondidas));

    actualizarPuntaje();
    actualizarBarra();
    actualizarXP();
    actualizarLogros();

    mostrarMensaje("✔ Respuesta correcta", "exito");
}

function respuestaIncorrecta() {
    mostrarMensaje("✖ Respuesta incorrecta", "error");
}

/**********************************************************
 *  CARGAR PRUEBAS
 **********************************************************/
function cargarPrueba(modulo) {

    const contenedor = document.getElementById("preguntas");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    bancoPreguntas[modulo].forEach(p => {
        contenedor.innerHTML += `
            <section>
                <h3>${p.pregunta}</h3>
                <div class="opciones">
                    ${p.opciones.map(op => `
                        <button onclick="${op === p.correcta
                            ? `respuestaCorrecta('${p.id}')`
                            : `respuestaIncorrecta()`}">
                            ${op}
                        </button>
                    `).join("")}
                </div>
            </section>
        `;
    });
}

/**********************************************************
 *  XP Y NIVEL
 **********************************************************/
function actualizarXP() {
    const barraXP = document.getElementById("barraXP");
    const textoNivel = document.getElementById("nivelJugador");
    if (!barraXP) return;

    const porcentaje = (xp % 50) / 50 * 100;
    barraXP.style.width = porcentaje + "%";

    if (textoNivel) {
        textoNivel.textContent = "Nivel " + nivel;
    }
}

/**********************************************************
 *  LOGROS Y MEDALLAS
 **********************************************************/
function actualizarLogros() {

    const bronce = document.getElementById("bronce");
    const plata = document.getElementById("plata");
    const oro = document.getElementById("oro");

    if (bronce && puntos >= 30) bronce.classList.add("desbloqueada");
    if (plata && puntos >= 60) plata.classList.add("desbloqueada");
    if (oro && puntos >= 90) oro.classList.add("desbloqueada");

    const lista = document.getElementById("listaLogros");
    if (!lista) return;

    lista.innerHTML = "";

    if (puntos >= 30) lista.innerHTML += "<li>💻 Sistemas Operativos aprobado</li>";
    if (puntos >= 60) lista.innerHTML += "<li>🛠 Soporte Técnico aprobado</li>";
    if (puntos >= 90) lista.innerHTML += "<li>🎨 Diseño Web aprobado</li>";
}

/**********************************************************
 *  REINICIAR PROGRESO
 **********************************************************/
function reiniciarProgreso() {

    if (!confirm("¿Deseas reiniciar todo el progreso?")) return;

    puntos = 0;
    xp = 0;
    nivel = 1;
    respondidas = [];

    localStorage.setItem("puntos", 0);
    localStorage.setItem("xp", 0);
    localStorage.setItem("nivel", 1);
    localStorage.setItem("respondidas", JSON.stringify([]));

    actualizarPuntaje();
    actualizarBarra();
    actualizarXP();
    actualizarLogros();

    mostrarMensaje("🔄 Progreso reiniciado", "exito");
}
