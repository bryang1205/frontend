

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('introScreen').querySelector('button');
    const modal = document.getElementById('examSelectModal');
    const selectBtns = document.querySelectorAll('.select-exam-btn');

    // 1. Reemplaza la función startExam() del HTML
    startBtn.onclick = showExamModal;

    // Función para mostrar la modal
    function showExamModal() {
        modal.classList.remove('hidden');
        // Ocultar la pantalla de introducción mientras la modal está activa
        document.getElementById('introScreen').classList.add('hidden');
    }

    // 2. Añadir Event Listeners a los botones de selección
    selectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const examType = btn.getAttribute('data-exam-type');
            loadExamScript(examType);
            modal.classList.add('hidden');
        });
    });
});


/**
 * 3. Función para cargar dinámicamente el script de examen
 * @param {string} type - Tipo de examen (A, B, C, D)
 */
function loadExamScript(type) {
    const script = document.createElement('script');
    
    // Mapea el tipo de examen a la ruta del archivo JavaScript
    let scriptPath;
    switch(type) {
        case 'A': scriptPath = 'js/examenAreaA.js'; break;
        case 'B': scriptPath = 'js/examenAreaB.js'; break;
        case 'C': scriptPath = 'js/examenAreaC.js'; break; // Usa el original examenAreaB.js con el nombre de TipoC
        case 'D': scriptPath = 'js/examenAreaD.js'; break;
        default: 
            console.error('Tipo de examen no válido');
            return;
    }
    
    // Valida si el script ya existe para evitar recargas
    if (document.querySelector(`script[src="${scriptPath}"]`)) {
        console.warn(`${scriptPath} ya cargado. Ejecutando startExam...`);
        // Si el script ya está cargado, simplemente llama a la función principal.
        window.startExam(); 
        return;
    }

    // Carga el script
    script.src = scriptPath;
    script.onload = () => {
        console.log(`Script ${scriptPath} cargado exitosamente.`);
        // Una vez cargado, ejecuta la función principal del examen
        // Asumiendo que todos los scripts de examen tienen una función global llamada startExam()
        window.startExam(); 
    };
    script.onerror = () => {
        alert(`Error al cargar el archivo de examen: ${scriptPath}. Asegúrate de que existe.`);
    };

    document.body.appendChild(script);
}

// 4. Implementación del startExam (Dummy)
// Esta función debe existir en el ámbito global para ser llamada por el onload.
// Si no pones esta función aquí, asegúrate de que el script cargado la define.
window.startExam = function() {
    // Esto será sobrescrito por el script cargado (e.g., examenTipoC.js).
    // Si usas el enfoque de cargador dinámico, puedes eliminar el llamado en el HTML
    // y dejar que el script cargado maneje el inicio.
    console.warn("Función startExam provisional. Esperando la carga del examen específico.");
};