let examQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval;
let timeLeft = 180 * 60; // 3 horas en segundos
const API_EXAM_URL = 'https://mi-plataforma-ia-2.onrender.com/api/ai/generate-exam';

// Categorías consideradas como APTITUD para el Área B/C (se mantienen, pero no se usan para el puntaje final visible)

// 2. Funciones de Carga de Datos y Lógica
async function startExam() {
    const btn = document.querySelector('#introScreen button');
    btn.disabled = true;
    btn.innerHTML = '🤖 Generando examen... (espera)';
    
    try {
        // Intentamos conectar con la IA
        const response = await fetch(API_EXAM_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ area: "A", topics: ["DPCC", "Ciencias Sociales", "Comunicación", "Inglés", "Matemática", "Ciencia y Tecnología"] })
        });

        if (!response.ok) throw new Error('Error de red');
        const data = await response.json();
        
        if (data.success && data.questions.length > 0) {
            examQuestions = data.questions;
        } else {
            throw new Error('Datos inválidos');
        }
    } catch (e) {
        console.warn("Usando modo offline por error:", e);
        generateLocalQuestions(); // ahora usa tus 100 preguntas
    }

    setupExam();
}

function generateLocalQuestions() {
    examQuestions = [
        // --- DESARROLLO PERSONAL, CIUDADANÍA Y CÍVICA ---
        {
            id: 1,
            category: "DPCC",
            question: "María siente un amor pasional y romántico por Juan, le encanta su físico: ojos, piel, cabello. A ese amor que siente María se le denomina:",
            options: ["Eros", "Ludus", "Storge", "Manía", "Pragma"],
            correct: 0
        },
        {
            id: 2,
            category: "DPCC",
            question: "Le preguntan a Gissela ¿Por qué ama a su esposo?, y ella responde: con él viajamos, hacemos locuras, compartimos muchas diversiones juntos. El tipo de amor que siente Gissela es:",
            options: ["Pragma", "Ágape", "Manía", "Storge", "Ludus"],
            correct: 4
        },
        {
            id: 3,
            category: "DPCC",
            question: "Mis abuelos llevan 45 años de casados. Siempre se brindan mucho afecto, respeto y están pendientes uno del otro. Mi abuela ya no puede tener relaciones coitales por su operación, pero ello no ha disminuido su consideración por mi abuelo. EL TIPO DE AMOR QUE SIENTEN SE DENOMINA:",
            options: ["Ágape", "Storge", "Manía", "Pragma", "Ludus"],
            correct: 1
        },
        {
            id: 4,
            category: "DPCC",
            question: "La aptitud perceptiva es la capacidad que sirve para distinguir con rapidez detalles, semejanzas, diferencias entre los objetos.",
            options: ["comprensión verbal", "visualización espacial", "aptitud perceptiva", "fluidez apreciativa", "aptitud mnémica"],
            correct: 2
        },
        {
            id: 5,
            category: "DPCC",
            question: "Un alumno que se dispone a ser arquitecto tendrá como elemento central de formación en su carrera el desarrollo de la inteligencia:",
            options: ["kinestésica", "matemática", "espacial", "ecológica", "musical"],
            correct: 2
        },
        {
            id: 6,
            category: "DPCC",
            question: "De acuerdo a Gardner las habilidades interpersonales a desarrollar son para las personas que tienen la carrera de psicólogos y políticos, mientras que los cirujanos tienen que desarrollar inteligencia kinestésica.",
            options: ["intrapersonal - interpersonal", "lingüística - espacial", "espacial - matemática", "interpersonal - kinestésica", "kinestésica - ecológica"],
            correct: 3
        },
        {
            id: 7,
            category: "DPCC",
            question: "Por medio de la percepción somos, fundamentalmente, capaces de:",
            options: ["decodificar los símbolos lingüísticos", "interpretar estímulos y darles un significado", "elaborar e interpretar ideas o conceptos", "comunicarnos para formar conceptos", "organizar los conocimientos psíquicos"],
            correct: 1
        },
        {
            id: 8,
            category: "DPCC",
            question: "Las bases de la percepción son: la atención, el interés, el (los) (las):",
            options: ["tiempo", "criterios", "experiencias vividas", "juicios", "emociones"],
            correct: 2
        },
        {
            id: 9,
            category: "DPCC",
            question: "La importancia de la percepción permite:",
            options: ["experimentar nuestras sensaciones", "percibir el medio ambiente y responder a sus exigencias", "favorecer la memoria", "tener capacidad ideática y relacional", "reaccionar de forma refleja a los estímulos"],
            correct: 1
        },
        {
            id: 10,
            category: "DPCC",
            question: "Tomando como referente el texto anterior se puede afirmar que el éxito, la asertividad y la independencia, que generalmente, se consideran rasgos masculinos, se clasifican como:",
            options: ["primarios", "dominantes", "expresivos", "instrumentales", "complementarios"],
            correct: 3
        },
        {
            id: 11,
            category: "DPCC",
            question: "Javier posee altos niveles de características asociadas tanto a hombres como a las mujeres. A Javier, entonces se le consideraría como:",
            options: ["asexual", "andrógino", "pansexual", "de género flexible", "indiferenciado"],
            correct: 1
        },
        {
            id: 12,
            category: "DPCC",
            question: "Es definido como sexo:",
            options: ["Un bebé que tiene un patrón cromosomático \"xx\".", "Pedro usa el cabello corto por que aspira a ser militar.", "Las mujeres tienen el don de cuidar niños pequeños.", "La mujer tiene ovarios y cabello largo.", "El varón tiene testículos y juega fútbol."],
            correct: 0
        },
        {
            id: 13,
            category: "DPCC",
            question: "Son caracteristicas que describen a una persona con síndrome de Turner:",
            options: ["músculos débiles, genitales pequeños y retraso mental", "baja estatura, y ovarios no funcionales", "retraso mental, proclividad a la violencia e hiperactividad extrema", "graves problemas de memoria y confusión de la identidad sexual", "propensión a las crisis convulsivas"],
            correct: 1
        },
        {
            id: 14,
            category: "DPCC",
            question: "El patrón cromosómico que presentan los hombres altos con una inteligencia por debajo del promedio y que son proclives a las actividades criminales es:",
            options: ["xxy", "xyo", "xyy", "yyy", "xyx"],
            correct: 2
        },
        {
            id: 15,
            category: "DPCC",
            question: "La medida efectiva para abordar la discriminación laboral sería:",
            options: ["Culpar al afectado, puesto que no se adaptó al puesto laboral.", "Ignorar la denuncia, ya que los casos de discriminación no tienen respaldo jurídico.", "Implementar programas de capacitación sobre diversidad cultural a todo el personal.", "Expulsar a los agresores del lugar de trabajo.", "Limitar el acceso al centro laboral a las personas agresoras."],
            correct: 2
        },
        {
            id: 16,
            category: "DPCC",
            question: "La característica crucial del SINAGERD, en este contexto, para garantizar una respuesta efectiva es su:",
            options: ["enfoque centralizado en la toma de decisiones", "capacidad de generar inmediata coordinación", "estructura descentralizada y participativa", "independencia del Sistema de Defensa Nacional", "enfoque exclusivo en la respuesta estatal"],
            correct: 2
        },
        {
            id: 17,
            category: "DPCC",
            question: "El requisito para poder alistarse en el servicio militar voluntario es:",
            options: ["Tener más de 21 años al momento de la inscripción.", "Haber concluido satisfactoriamente los estudios universitarios.", "Contar con el apoyo de un familiar directo que pertenezca a las fuerzas armadas.", "No tener antecedentes penales ni policiales.", "Tener una experiencia previa en el sector público."],
            correct: 3
        },
        {
            id: 18,
            category: "DPCC",
            question: "Petronila, fiscal del Ministerio Público, investiga un caso de corrupción. En este escenario, Petronila está cumpliendo el rol de:",
            options: ["Ejercer la acción penal pública y representar los intereses del Estado en los procesos judiciales.", "Gestionar la administración de justicia en el ámbito civil y comercial.", "Regular la actividad económica y comercial para asegurar la competencia justa entre litigantes.", "Velar por el cumplimiento de la seguridad social y la garantía jurídica.", "Garantizar la seguridad y defensa jurídica a través del control diligente en las actividades personales."],
            correct: 0
        },
        {
            id: 19,
            category: "DPCC",
            question: "En base a la crisis de representatividad, los deberes que estarían incumpliendo gran parte de la ciudadanía peruana son:\n1. sufragar\n2. vivir pacíficamente con respeto a los derechos de los demás\n3. contribuir con la inestabilidad\n4. practicar el pluralismo político\n5. deliberar y tomar decisiones sobre asuntos de interés privado\nSON CIERTAS:",
            options: ["1, 2 y 4", "1, 4 y 5", "2, 4 y 5", "1, 2 y 3", "solo 1 y 4"],
            correct: 0
        },
        {
            id: 20,
            category: "DPCC",
            question: "Son enunciados que están íntegramente vinculados al desarrollo pleno de una cultura de paz:\n1. Promover debates alturados en las instituciones educativas donde expongan puntos de vista opuestos.\n2. Fomentar capacidades para integrarse en una convivencia sana, priorizando su práctica en zonas rurales.\n3. Desarrollar valores que fortalezcan la convivencia, así como el aprecio hacia la diversidad cultural.\n4. Capacitar de forma exclusiva a los alfabetizados en planes de erradicación de todas las formas de violencia.\nSON CIERTAS:",
            options: ["1, 2 y 4", "1, 3 y 4", "solo 1 y 3", "solo 3 y 4", "solo 2 y 4"],
            correct: 2
        },
        {
            id: 21,
            category: "DPCC",
            question: "El derecho de inviolabilidad de domicilio forma parte de los derechos de:",
            options: ["primera generación", "segunda generación", "tercera generación", "primera y segunda generación", "segunda y tercera generación"],
            correct: 0
        },
        {
            id: 22,
            category: "DPCC",
            question: "En relación al Premier, las funciones son:\n1. Ser el portavoz autorizado del Presidente de la República.\n2. Coordinar funciones con los demás ministros.\n3. Refrendar decretos legislativos y decretos de urgencia.\n4. Deliberar sobre asuntos de interés privado.\n5. Aprobar los proyectos de ley que el Presidente envía al Congreso.\nSON CIERTAS:",
            options: ["solo 1, 2 y 5", "solo 1 y 2", "solo 1, 2 y 3", "solo 3, 4 y 5", "1, 2, 3, 4 y 5"],
            correct: 2
        },
        {
            id: 23,
            category: "DPCC",
            question: "En relación al Consejo de Ministros las atribuciones son:\n1. Aprobar los decretos legislativos y decretos de urgencia.\n2. Aprobar los proyectos de ley que el Presidente envía al Congreso.\n3. Deliberar sobre asuntos de interés público.\n4. Coordinar funciones con los demás ministros.\n5. Refrendar decretos legislativos y decretos de urgencia.\nSON CIERTAS:",
            options: ["solo 2 y 3", "solo 3 y 4", "solo 4 y 5", "3,4 y 5", "1, 2 y 3"],
            correct: 4
        },
        {
            id: 24,
            category: "DPCC",
            question: "Ante lluvias y huaycos, se colocaron grandes bloques de cemento para evitar futuros huaycos. Del texto se puede afirmar que se:",
            options: ["realizó prevención y reducción de riesgos", "facilitó la recuperación social", "logró la promoción de participación", "identificó el riesgo, pero no se solucionó", "evidencia la reactivación económica"],
            correct: 0
        },
        {
            id: 25,
            category: "DPCC",
            question: "Del texto (lluvias y huaycos), deducimos que forman parte de la geodinámica externa:\n1. presencia de lluvias\n2. formación de inundaciones\n3. riesgo de huaycos\n4. formación de sismos\n5. presencia de terremotos\nSON CIERTAS:",
            options: ["1, 2 y 3", "solo 4 y 5", "3, 4 y 5", "solo 2 y 3", "1, 4 y 5"],
            correct: 0
        },
        {
            id: 26,
            category: "DPCC",
            question: "La Defensa Nacional es tarea de todas las fuerzas de la nación y un deber de la ciudadanía. La característica de la Defensa Nacional que se denota en el enunciado es la de ser:",
            options: ["preventiva", "integral", "antiagresiva", "prospectivo", "comunitaria"],
            correct: 1
        },
        {
            id: 27,
            category: "DPCC",
            question: "El enunciado (sobre la Defensa Nacional) guarda relación con la siguiente idea:",
            options: ["La Defensa Nacional involucra tanto a militares como civiles.", "El compromiso de defender el país es solo competencia del Estado.", "Los organismos del sector privado están excluidos de la Defensa Nacional.", "Nuestro país no está preparado para enfrentar amenazas externas.", "La Defensa Nacional involucra solo a la sociedad civil preparada."],
            correct: 0
        },
        {
            id: 28,
            category: "DPCC",
            question: "El incremento del matrimonio bajo el régimen de bienes separados se corresponde con:\n1. Lo establecido por escritura pública inscrita en SUNARP.\n2. Cada cónyuge conserva a plenitud la propiedad, administración y disposición de sus bienes.\n3. Cada cónyuge responde de sus deudas con sus propios bienes.\n4. Ambos cónyuges disponen de los bienes a título gratuito.\n5. Los bienes son dispuestos a título oneroso por la sociedad conyugal.\nSON CIERTAS:",
            options: ["solo 1 y 2", "solo 2 y 3", "solo 1, 2 y 3", "solo 4 y 5", "1, 2, 3, 4 y 5"],
            correct: 2
        },
        {
            id: 29,
            category: "DPCC",
            question: "La atribución que le permite al Presidente de la República, emitir un decreto supremo para combatir minería ilegal y deforestación es:",
            options: ["Convocar al Congreso a legislatura extraordinaria y firmar el decreto de convocatoria.", "Dirigir la política general del Gobierno.", "Negociar los Tratados y Convenios Internacionales y ratificarlos.", "Adoptar medidas extraordinarias mediante decretos de urgencia con fuerza de ley en materia económica y financiera...", "Reglamentar las leyes y expedir decretos y resoluciones."],
            correct: 1
        },
        {
            id: 30,
            category: "DPCC",
            question: "Hay una convención de derechos humanos... defienden la idea de que todo hombre en tanto tal, es acreedor de consideración, de deferencia... hay que defender la:",
            options: ["igualdad de los hombres deudores", "libertad absoluta de los hombres", "dignidad de todo hombre", "solidaridad de los hombres", "vida de los hombres acreedores"],
            correct: 2
        },
        // --- CIENCIAS SOCIALES ---
        {
            id: 31,
            category: "Ciencias Sociales",
            question: "El desarrollo de la inteligencia en el proceso de hominización fue posible gracias a (al):\n1. La manipulación de los objetos de la naturaleza.\n2. Aumento de la capacidad craneana.\n3. La adopción de la bipedación.\n4. La creación y producción de herramientas y bienes.\n5. La formación de la familia.\nSON CIERTAS:",
            options: ["1, 2 y 3", "1, 3 y 4", "2, 3 y 4", "2, 4 y 5", "3, 4 y 5"],
            correct: 2
        },
        {
            id: 32,
            category: "Ciencias Sociales",
            question: "En el proceso de hominización es el fósil cuya antigüedad se considera de 3,5 a 4 millones de años, descubierto en Etiopía, era bípedo y se le conoce como la \"Eva de la humanidad\", nos referimos a:",
            options: ["Australopithecus ramidus", "Australopithecus africanus", "Australopithecus aferensis", "Homo erectus", "Homo habilis"],
            correct: 2
        },
        {
            id: 33,
            category: "Ciencias Sociales",
            question: "Del texto (Elecciones del 2000 y tercer mandato de Fujimori) podemos deducir que a mediados del 2000 el gobierno de Alberto Fujimori:",
            options: ["Promovió una amplia participación popular y democrática.", "Estaba decidido a convocar elecciones presidenciales libres y democráticas.", "Fomentaba un clima político justo y transparente.", "Se resistió a dejar el gobierno y poder político.", "Impulsó la paz social en el país mediante la reforma del Tribunal Constitucional."],
            correct: 3
        },
        {
            id: 34,
            category: "Ciencias Sociales",
            question: "Ante un ambiente político y social turbulento en el país, surgió una importante y significativa respuesta de movilización política de los opositores a la reelección por tercera vez de Fujimori... Esta movilización se la denominó:",
            options: ["Marcha por la Paz", "Movilización Nacional por la Democracia", "Encuentro Nacional por la Democracia", "Caminata por la Paz y la Democracia", "Marcha de los Cuatro Suyos"],
            correct: 4
        },
        {
            id: 35,
            category: "Ciencias Sociales",
            question: "Los grupos sociales cubanos muy apreciados por Fidel Castro en el contexto de la Revolución Cubana fueron los:\n1. latifundistas\n2. obreros\n3. abogados pudientes\n4. pequeños agricultores\n5. comerciantes\nSON CORRECTAS:",
            options: ["1, 2 y 3", "1, 3 y 5", "2, 3 y 4", "2, 4 y 5", "3, 4 y 5"],
            correct: 3
        },
        {
            id: 36,
            category: "Ciencias Sociales",
            question: "Descripción de los bordes donde las placas se destruyen (se sumergen en el manto). Este enunciado hace referencia a:",
            options: ["la zona de bordes convergentes", "el vulcanismo intrusivo", "el epicentro", "la zona de bordes divergentes", "la zona sísmica"],
            correct: 0
        },
        {
            id: 37,
            category: "Ciencias Sociales",
            question: "Respecto a las tectónicas de placas que se produce en nuestro planeta, se puede afirmar que:\n1. Es producido por las corrientes convectivas de la astenósfera.\n2. La subducción de las placas oceánicas genera las fosas marinas.\n3. La convergencia de placas originan los grandes plegamientos orográficos.\nSON CIERTAS:",
            options: ["solo I", "1, 2 y 3", "solo 3", "solo 1 y 2", "solo 2 y 3"],
            correct: 1
        },
        {
            id: 38,
            category: "Ciencias Sociales",
            question: "Ciudad peruana que presenta un clima tropical subtropical árido y, por ello, gran parte de su vida económica, social y cultural está determinada por dicho clima:",
            options: ["Sechura", "Chimbote", "Huaraz", "Tumbes", "Huánuco"],
            correct: 0
        },
        {
            id: 39,
            category: "Ciencias Sociales",
            question: "El clima subtropical de la costa peruana está determinado por el factor geográfico de:",
            options: ["La ubicación tropical del Perú.", "La corriente de El Niño.", "La corriente peruana.", "La cordillera de los Andes.", "La corriente ecuatorial del norte."],
            correct: 2
        },
        {
            id: 40,
            category: "Ciencias Sociales ",
            question: "En la región amazónica del Perú las altas temperaturas y precipitaciones abundantes están determinadas por:",
            options: ["la altitud", "el relieve andino", "su cercanía al mar", "la latitud", "por su amplitud territorial"],
            correct: 3
        },
        // --- ECONOMÍA ---
        {
            id: 41,
            category: "Ciencias Sociales",
            question: "Un empresario industrial... observa que la curva de demanda de sus bienes es elástica, lo que demuestra que su ingreso total tiene un comportamiento:",
            options: ["Directo entre precio y cantidad; es decir, si aumenta el precio, también aumenta el ingreso total.", "Inverso entre precio y cantidad; es decir, si aumenta el precio, disminuye el ingreso total.", "Proporcional entre precio y cantidad; es decir, aumenta el precio en la misma cantidad que lo hace el ingreso total.", "Nulo entre precio y cantidad; es decir, si aumenta el precio, no aumenta el ingreso total.", "Indiferente entre precio y cantidad; es decir, aumenta el precio, y el ingreso total permanece igual."],
            correct: 1
        },
        {
            id: 42,
            category: "Ciencias Sociales",
            question: "El gobierno cambia el Sol por el Inti para frenar la hiperinflación, pero la medida fracasa. Según el texto descrito, el gobierno con esta medida económica violó el principio económico de la:",
            options: ["paridad de poder adquisitivo", "ley de Gossen", "teoría cuantitativa del dinero", "ley de Gresham", "ley de Say"],
            correct: 2
        },
        {
            id: 43,
            category: "Ciencias Sociales",
            question: "De acuerdo a la clase de dinero, el Inti se clasifica como:",
            options: ["dinero mercancía", "dinero giral", "dinero fiduciario", "cuasi-dinero", "medio de pago"],
            correct: 2
        },
        {
            id: 44,
            category: "Ciencias Sociales",
            question: "El indicador que se utiliza para medir el desarrollo económico es:",
            options: ["Producto Bruto Interno", "Índice de precios al consumidor", "Índice de buen gobierno corporativo", "Índice de Desarrollo Humano", "Producto Nacional Bruto Real"],
            correct: 3
        },
        {
            id: 45,
            category: "Ciencias Sociales",
            question: "Es causa del subdesarrollo económico:",
            options: ["insuficiencia de capital humano", "exceso de capital fisico", "buena política de inversión pública", "instituciones sólidas", "industrialización del mercado interno"],
            correct: 0
        },
        // --- COMUNICACIÓN Y LITERATURA ---
        {
            id: 46,
            category: "Comunicación",
            question: "El realismo mágico en \"Cien años de soledad\" (Aureliano y los pergaminos) lo podemos descubrir en los siguientes acontecimientos:\n1. El instante de la concepción de Aureliano.\n2. El ciclón que destruyó puertas y ventanas.\n3. Engendramiento del último vástago de la estirpe.\n4. Aureliano realiza la búsqueda de su descendencia.\n5. La abstracción en la lectura de los pergaminos.\nSON CIERTAS:",
            options: ["1, 2 y 3", "2, 3 y 4", "1, 3 y 5", "3, 4 y 5", "2, 4 y 5"],
            correct: 2
        },
        {
            id: 47,
            category: "Comunicación",
            question: "En el fragmento de \"Cien años de soledad\" el personaje aludido pertenece a la:",
            options: ["primera generación", "segunda generación", "sexta generación", "octava generación", "quinta generación"],
            correct: 2
        },
        {
            id: 48,
            category: "Comunicación",
            question: "Aureliano, el personaje mencionado en el fragmento engendró a:",
            options: ["Renata Remedios, la meme", "Amaranta Úrsula", "Los diecisiete Aurelianos", "Aureliano, el cola de cerdo", "Remedios, la bella"],
            correct: 3
        },
        {
            id: 49,
            category: "Comunicación",
            question: "Sobre la sociedad retratada en el fragmento, podemos afirmar:",
            options: ["La mujer se presenta sumisa al hombre: padre o esposo.", "Las mujeres ejercían un matriarcado impecable y religioso.", "Los hombres ejercían un patriarcado protector.", "Hombres y mujeres cogobernaban armónicamente en una sociedad esclavista.", "El papel de los hombres en la sociedad es cuestionado, pero aceptado."],
            correct: 4
        },
        {
            id: 50,
            category: "Comunicación",
            question: "Los sentimientos que embargan a Laurencia son:\n1. amor\n2. odio\n3. rabia\n4. resentimiento\n5. alegría\nSON CIERTAS:",
            options: ["1, 2 y 3", "2, 3 y 4", "3, 4 y 5", "2, 4 y 5", "1, 4 y 5"],
            correct: 1
        },
        {
            id: 51,
            category: "Comunicación",
            question: "En el fragmento de Hamlet se infiere un rasgo del teatro isabelino conocido como:",
            options: ["nudo", "anagrofisis", "ironía trágica", "hamartia", "hybris"],
            correct: 1
        },
        {
            id: 52,
            category: "Comunicación",
            question: "Como producto de la lectura se infieren las siguientes características de la obra del autor:\n1. la solidaridad con el menesteroso\n2. el sentido humanista y caballeresco\n3. rasgos del estilo renacentista\n4. incoherencia del lenguaje\n5. la razón de la sinrazón del caballero\nSON CIERTAS:",
            options: ["1, 2 y 3", "1, 3 y 5", "solo 2 y 3", "2, 3 y 4", "3, 4 y 5"],
            correct: 0
        },
        {
            id: 53,
            category: "Comunicación",
            question: "En el texto “Ensayo sobre la ceguera” de José Saramago: “…Creo que no nos quedamos ciegos, creo que estamos ciegos, Ciegos que ven, Ciegos que, viendo no ven”. Esto permite inferir que:",
            options: ["El ser humano es capaz de ver desde el fondo de su espiritualidad para el desarrollo social.", "La esperanza de ver a los demás en toda su dimensión depende de la solidaridad.", "El ser humano necesita de la mujer para encontrar su rumbo.", "El conflicto cotidiano ha enajenado al ser humano.", "La sociedad vive sumergida en un mundo individualista, consumista, materialista y ha perdido el lado humano."],
            correct: 4
        },
        {
            id: 54,
            category: "Comunicación",
            question: "El argumento central del texto relativo a la suerte es :",
            options: ["La suerte no se corresponde a la voluntad de cada uno.", "La suerte se puede relacionar con la ley de las probabilidades.", "La suerte no existe para las personas de fe o que son muy supersticiosas.", "La suerte será definida como resultados positivos de sucesos muy probables.", "Hay dos formas de referirse a ella: causalidad o superstición."],
            correct: 4
        },
        {
            id: 55,
            category: "Comunicación",
            question: "En el texto, la palabra subrayada , puede ser sustituida por:",
            options: ["riesgo", "certeza", "atinamiento", "azar", "objetividad"],
            correct: 3
        },
        {
            id: 56,
            category: "Comunicación",
            question: "La frase “Sucesos afortunados” estaría refiriéndose a:",
            options: ["desafíos que han sido resueltos", "huella inmoral de un ser detestable", "hechos solo atribuidos a la constancia y disciplina", "acontecimientos felices", "solo vivencias positivas de quienes tienen fe católica"],
            correct: 3
        },
        {
            id: 57,
            category: "Comunicación",
            question: "Es una idea implícita del texto: “Manolito Gafotas” .",
            options: ["Antes de salir a la calle ingresamos todos en el váter del museo a miccionar.", "Allí estaba el ratero.", "Que no lo había hecho con mala intención, fue lo que le dije.", "Le dije un sitio donde podía atracar a sus anchas.", "Los hechos se desarrollan en una ciudad europea."],
            correct: 4
        },
        {
            id: 58,
            category: "Comunicación",
            question: "La palabra subrayada en el texto “Manolito Gafotas” puede reemplazarse contextualmente por:",
            options: ["defecto", "nombre", "onomatopeya", "seudónimo", "tara"],
            correct: 3
        },
        {
            id: 59,
            category: "Comunicación",
            question: "Según el texto, “Manolito Gafotas”, luego de leer la primera oración del primer párrafo, podemos afirmar que la intención de la autora es:",
            options: ["Añadir un modismo con una finalidad social.", "Dotar de un nivel de lenguaje al narrador para dar credibilidad a la narración.", "Establecer parámetros ideológicos en la narración.", "Resaltar las características físicas del protagonista.", "Resaltar las características psicológicas del protagonista."],
            correct: 1
        },
        {
            id: 60,
            category: "Comunicación",
            question: "Con respecto a la palabra “Sin embargo” es correcto afirmar que:\n1. Es un conector de adición.\n2. Se puede sustituir por la palabra, no obstante.\n3. Es un conector que relaciona dos ideas opuestas.\n4. Corresponde a un caso de cohesión gramatical.\n5. Es una anáfora relativa.\nLA RESPUESTA CORRECTA ES:",
            options: ["solo 1, 3 y 4", "1, 2, 3 y 4", "2, 3, 4 y 5", "1, 3, 4 y 5", "solo 2, 3 y 4"],
            correct: 4
        },
        {
            id: 61,
            category: "Comunicación",
            question: "Ideas literales sobre la Inteligencia Artificial:\n1. La IA reúne un grupo de técnicas que buscan imitar procedimientos parecidos a los procesos inductivos y deductivos del cerebro humano.\n2. La inteligencia artificial busca copiar electrónicamente el funcionamiento del cerebro.\n3. Los dispositivos celulares realizan tareas que normalmente requieren mucha intuición.\n4. Los robots han copiado con exactitud el funcionamiento del cerebro.\n5. Las redes neuronales humanas son parecidos a los de un robot.\nLA RESPUESTA CORRECTA ES:",
            options: ["1, 2 y 3", "solo 1, 2 y 4", "solo 2 y 5", "solo 1 y 2", "1, 2, 4 y 5"],
            correct: 3
        },
        {
            id: 62,
            category: "Comunicación",
            question: "De acuerdo con el caso (mensaje en redes por defunción de cantante), identificamos lo siguiente:\n1. Por el tipo de comunicación es indirecta y privada.\n2. La fase de la decodificación se produce en Elizabeth.\n3. Por el tipo de comunicación es vertical y de masas.\n4. La codificación se produce en Pedro Suárez Vértiz.\n5. El referente es la defunción del cantante peruano.\n6. La función que predomina en la codificación del mensaje es persuasiva.\nSON CIERTAS:",
            options: ["solo 1, 2 y 5", "2, 4, 5 y 6", "3, 5 y 6", "solo 2, 3 y 5", "1, 2, 3 y 5"],
            correct: 3
        },
        {
            id: 63,
            category: "Comunicación",
            question: "Son oraciones en las que se ha empleado incorrectamente el adjetivo calificativo en grado superlativo absoluto sintético :",
            options: ["1, 2 y 3", "2, 3 y 4", "3, 4 y 5", "solo 1 y 2", "solo 4 y 5"],
            correct: 1
        },
        {
            id: 64,
            category: "Comunicación",
            question: "A partir del texto , cuántos pronombres personales se contabilizan:",
            options: ["1", "2", "3", "4", "5"],
            correct: 2
        },
        {
            id: 65,
            category: "Comunicación",
            question: "Del texto anterior, las comillas son utilizadas para:",
            options: ["encerrar una cita directa", "intercalar frases o palabras extranjeras", "señalar lo que se desea destacar en el texto", "indicar títulos de obras literarias", "darle un sentido irónico a una palabra"],
            correct: 0
        },
        {
            id: 66,
            category: "Comunicación",
            question: "Del texto anterior: […] Detrás, se esconde la lógica de que gente más talentosa, más trabajadora, más ahorradora, más creativa y más empeñada… encontramos la coma:",
            options: ["explicativa", "vocativo", "hiperbática", "nexo gramatical", "enumerativa"],
            correct: 4
        },
        {
            id: 67,
            category: "Comunicación",
            question: "Sobre el hecho: \n1. Se resalta lo bipiánico del signo lingüístico.\n2. Se ha hecho uso del código verbal.\n3. Se presenta la arbitrariedad del signo.\n4. No existe código lingüístico.\n5. Sobresale la convención del lenguaje y su canal oral.\nSON CORRECTAS:",
            options: ["1, 2 y 3", "3, 4 y 5", "2, 3 y 4", "1, 3 y 5", "2, 3 y 5"],
            correct: 4
        },
        {
            id: 68,
            category: "Comunicación",
            question: "A partir del texto leído de Valdelomar, identificamos lo siguiente:\n1. presenta 13 adjetivos calificativos\n2. presenta 1 adjetivo determinativo indefinido\n3. hay 2 adjetivos calificativos en grado superlativo absoluto\n4. presenta 15 adjetivos calificativos.\n5. contiene solo un adjetivo determinativo demostrativo\nSON RESPUESTAS CORRECTAS:",
            options: ["1, 2 y 5", "1, 3 y 5", "2, 4 y 5", "solo 1 y 3", "solo 4 y 5"],
            correct: 1
        },
        {
            id: 69,
            category: "Comunicación",
            question: "Se deduce que (sobre un evento de comunicación oral):\n1. Por el tipo de organización, el evento desarrollará comunicación autogestionada.\n2. Este evento a desarrollar es un panel.\n3. Por el tipo de organización, el evento desarrollará comunicación plurigestionada.\n4. Se trata de un foro.\n5. Por las características, lo que se llevará a cabo es un simposio.\nLA RESPUESTA CORRECTA ES:",
            options: ["2 y 3", "1 y 5", "3 y 4", "3 y 5", "1 y 2"],
            correct: 3
        },
        {
            id: 70,
            category: "Comunicación",
            question: "Los verbos del enunciado entrecomillado  están respectivamente en modo:",
            options: ["subjuntivo y subjuntivo", "imperativo y subjuntivo", "indicativo y subjuntivo", "subjuntivo e indicativo", "imperativo e indicativo"],
            correct: 2
        },
        // --- INGLÉS ---
        {
            id: 71,
            category: "Inglés",
            question: "What object is it? ______",
            options: ["sharpener", "ruler", "pencil", "pen", "highlighter"],
            correct: 3
        },
        {
            id: 72,
            category: "Inglés",
            question: "There ______ dos big whiteboards. There ______ a door and three big windows.",
            options: ["are — is — is — are", "is — are — is — are", "are — are — is — are", "are — are — are — is", "are — are — are — are"],
            correct: 2
        },
        {
            id: 73,
            category: "Inglés",
            question: "Is Olenka a hard worker?",
            options: ["Yes, she is", "No, she doesn’t", "Yes, she does", "No, she aren’t", "No, she isn’t"],
            correct: 0
        },
        {
            id: 74,
            category: "Inglés",
            question: "What is the weather like in Peru?",
            options: ["It is cold", "It is rainy", "I like the weather", "It is humid", "It is warm"],
            correct: 4
        },
        {
            id: 75,
            category: "Inglés",
            question: "What does Eve look like?",
            options: ["She has short straight hair, green eyes and she is short and slim.", "She is short, she have long straight hair, brown eyes.", "She is tall, she has long straight hair and blue eyes.", "She have long straight hair and blue eyes. She is short and slim.", "She is tall and slim, she has long straight black hair and green eyes."],
            correct: 4
        },
        {
            id: 76,
            category: "Inglés",
            question: "Choose the best answer to complete the text :",
            options: ["there are – there are – there isn’t – there is – there are – There are", "there are – there isn’t – there isn’t – there is – there isn’t – Are there", "there is – there aren’t – there isn’t – are there – There isn’t", "there are – there isn’t – there isn’t – there is – there aren’t – Are there", "there is – there are – there is – there isn’t – is there – Are there"],
            correct: 1
        },
        {
            id: 77,
            category: "Inglés",
            question: "What places did the author know?",
            options: ["The author journeyed around the world.", "She wasn’t visit any place.", "She didn’t explored any place around the world.", "None. She couldn’t turn her dreams into a reality", "The author didn’t met new places."],
            correct: 3
        },
        {
            id: 78,
            category: "Inglés",
            question: "Choose true or false:\n1. People can call him Jorge.\n2. Hyunk has to eat lunch with his coworkers.\n3. The author’s friend has a relaxed job.\n4. Perhaps he should take time off.\n5. Jorge must make more room in his schedule for his family.",
            options: ["T – T – F – T – F", "T – F – F – T – T", "F – T – F – T – F", "T – T – T – T – F", "F – F – F – T – T"],
            correct: 1
        },
        {
            id: 79,
            category: "Inglés",
            question: "What is Emma doing in her studio?",
            options: ["She is dancing", "She is painting a mural", "She is reading a book", "She is colored", "She is focusing"],
            correct: 1
        },
        {
            id: 80,
            category: "Inglés",
            question: "Who is helping Emma with her work?",
            options: ["Her brother", "Her teacher", "Her friend Sarah", "Her father", "Her mother"],
            correct: 2
        },
        // --- MATEMÁTICA ---
        {
            id: 81,
            category: "Matemática",
            question: "El área del cuadrilátero, es :",
            options: ["12", "14", "16", "17", "18"],
            correct: 2
        },
        {
            id: 82,
            category: "Matemática",
            question: "El área de la región que está fuera del cuadrilátero, es :",
            options: ["10,2", "10,7", "11,2", "11,7", "12,1"],
            correct: 3
        },
        {
            id: 83,
            category: "Matemática",
            question: "La cantidad de dinero en soles que el aficionado tuvo antes de apostar a las carreras fue :",
            options: ["2 376", "2 500", "2 625", "2 750", "2 850"],
            correct: 2
        },
        {
            id: 84,
            category: "Matemática",
            question: "La cantidad de dinero en soles que tuvo el aficionado luego de las dos primeras carreras fue:",
            options: ["1 500", "1 600", "1 650", "1 750", "1 800"],
            correct: 1
        },
        {
            id: 85,
            category: "Matemática",
            question: "El valor de “x” será :",
            options: ["2", "3", "4", "5", "6"],
            correct: 1
        },
        {
            id: 86,
            category: "Matemática",
            question: "La cantidad de formas que obtendrá es :",
            options: ["3 600", "3 960", "4 320", "4 800", "5 040"],
            correct: 3
        },
        {
            id: 87,
            category: "Matemática",
            question: "La cantidad de formas que obtendrá es :",
            options: ["1 260", "1 440", "1 840", "2 160", "2 520"],
            correct: 4
        },
        {
            id: 88,
            category: "Matemática",
            question: "La ecuación que relaciona el número de cajas x y el precio p de cada caja de adornos es:",
            options: ["3p = 4x + 120", "3p + 40x = 120", "3p = 40x + 120", "40x = 3p + 120", "3p + 4x = 120"],
            correct: 2
        },
        {
            id: 89,
            category: "Matemática",
            question: "El costo en soles de cada caja de adornos es:",
            options: ["220", "200", "180", "160", "150"],
            correct: 1
        },
        {
            id: 90,
            category: "Matemática",
            question: "El número de cajas de adornos que compró es:",
            options: ["9", "10", "11", "12", "16"],
            correct: 1
        },
        {
            id: 91,
            category: "Ciencia y Tecnología",
            question: "De los ejemplos citados, se refieren a relaciones negativas :",
            options: ["1 y 2", "2 y 3", "3 y 4", "solo 4 y 5", "1, 4 y 5"],
            correct: 3
        },
        {
            id: 92,
            category: "Ciencia y Tecnología",
            question: "Del texto anterior, son ejemplos donde una especie se beneficia y la otra ni se beneficia ni se perjudica:",
            options: ["1,2 y 3", "3,4 y 5", "solo 1 y 2", "solo 4 y 5", "solo 2 y 3"],
            correct: 4
        },
        // --- CIENCIA Y TECNOLOGÍA ---
        {
            id: 93,
            category: "Ciencia y Tecnología",
            question: "La insulina, al controlar los niveles óptimos de glucosa en la sangre, es considerada una hormona:",
            options: ["hiperglicemiante", "hipoglicemiante", "hipocalcemiante", "hipercalcemiante", "exocrina"],
            correct: 1
        },
        {
            id: 94,
            category: "Ciencia y Tecnología",
            question: "En este contexto (producción de insulina) el páncreas actúa como un órgano:",
            options: ["exocrino", "holocrino", "mercerino", "anfícrino", "endocrino"],
            correct: 4
        },
        {
            id: 95,
            category: "Ciencia y Tecnología",
            question: "Este organelo  se origina a partir de:",
            options: ["la membrana plasmática", "el retículo liso", "el centriolo", "las vacuolas pulsátiles", "golgisonnas"],
            correct: 4
        },
        {
            id: 96,
            category: "Ciencia y Tecnología",
            question: "El organelo de doble membrana que transforma energía física en energía química, es:",
            options: ["lisosoma primario", "lisosoma secundario", "mitocondria", "cloroplasto", "ribosoma"],
            correct: 3
        },
        {
            id: 97,
            category: "Ciencia y Tecnología",
            question: "La fórmula del sulfato ferroso heptahidratado, es:",
            options: ["Fe₂(SO₃)₃·7H₂O", "Fe₂(SO₄)₅·7H₂O", "Fe(SO₄)₂·7H₂O", "FeSO₃·7H₂O", "FeSO₄·7H₂O"],
            correct: 4
        },
        {
            id: 98,
            category: "Ciencia y Tecnología",
            question: "Si uno de los hidrógenos de la metilamina enlazados al nitrógeno es sustituido por un grupo metilo, el nombre del nuevo compuesto es:",
            options: ["etilamina", "etilmetilamina", "etildimetilamina", "dimetilamina", "trimetilamina"],
            correct: 3
        },
        {
            id: 99,
            category: "Ciencia y Tecnología",
            question: "Respecto al caso se encuentra que la distancia de Lima – Comas en Km, es:",
            options: ["48.300", "49.500", "50.000", "50.625", "53.300"],
            correct: 3
        },
        {
            id: 100,
            category: "Ciencia y Tecnología",
            question: "La fuerza a 0,15 m, expresado en N, es:",
            options: ["70", "75", "80", "84", "85"],
            correct: 1
        }
    ];
}
function setupExam() {
    document.getElementById('introScreen').classList.add('hidden');
    document.getElementById('examContent').classList.remove('hidden');
    document.getElementById('finishBtnTop').classList.remove('hidden');
    document.getElementById('totalQNum').textContent = examQuestions.length;
    
    userAnswers = new Array(examQuestions.length).fill(null);
    renderGrid();
    loadQuestion(0);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        const h = Math.floor(timeLeft/3600).toString().padStart(2,'0');
        const m = Math.floor((timeLeft%3600)/60).toString().padStart(2,'0');
        const s = (timeLeft%60).toString().padStart(2,'0');
        document.getElementById('timeDisplay').textContent = `${h}:${m}:${s}`;
        if(timeLeft <= 0) finishExam();
    }, 1000);
}

function renderGrid() {
    const grid = document.getElementById('questionGrid');
    grid.innerHTML = '';
    examQuestions.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className = 'nav-grid-btn bg-gray-100 text-gray-600 hover:bg-gray-200';
        btn.textContent = i+1;
        btn.onclick = () => loadQuestion(i);
        btn.id = `grid-btn-${i}`;
        grid.appendChild(btn);
    });
}

function loadQuestion(index) {
    currentQuestionIndex = index;
    const q = examQuestions[index];
    document.getElementById('currentQNum').textContent = index+1;
    document.getElementById('questionCategory').textContent = q.category;
    document.getElementById('questionText').textContent = q.question;
    
    const cont = document.getElementById('optionsContainer');
    cont.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = `option-btn w-full text-left p-4 border border-gray-200 rounded-xl flex items-center ${userAnswers[index]===i ? 'selected' : ''}`;
        btn.innerHTML = `<span class="w-8 h-8 rounded-full bg-gray-100 mr-4 flex items-center justify-center font-bold">${String.fromCharCode(65+i)}</span><span>${opt}</span>`;
        btn.onclick = () => {
            userAnswers[index] = i;
            loadQuestion(index); // Recargar para actualizar UI
            updateGrid();
        };
        cont.appendChild(btn);
    });
    
    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').textContent = index === examQuestions.length-1 ? 'Finalizar' : 'Siguiente →';
    updateGrid();
    if(window.MathJax) MathJax.typesetPromise();
}

function updateGrid() {
    document.querySelectorAll('.nav-grid-btn').forEach((btn, i) => {
        btn.className = `nav-grid-btn ${userAnswers[i]!==null ? 'answered' : 'bg-gray-100'} ${i===currentQuestionIndex ? 'current' : ''}`;
    });
    document.getElementById('answeredCount').textContent = userAnswers.filter(a => a!==null).length;
}

function prevQuestion() { if(currentQuestionIndex > 0) loadQuestion(currentQuestionIndex-1); }
function nextQuestion() { 
    if(currentQuestionIndex < examQuestions.length-1) loadQuestion(currentQuestionIndex+1); 
    else finishExam();
}

/**
 * Función para calcular y mostrar el puntaje final.
 * REGLA UNT: +4 por Acierto, -1 por Error.
 * Se elimina la distinción y ponderación por tipo de pregunta en los resultados.
 */
function finishExam() {
    clearInterval(timerInterval);
    document.getElementById('examContent').classList.add('hidden');
    document.querySelector('header').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');
    
    let correct = 0, incorrect = 0;

    examQuestions.forEach((q, i) => {
        const ans = userAnswers[i];

        if (ans === q.correct) {
            correct++;
        } else if (ans !== null) {
            incorrect++;
        }
    });

    const POINTS_PER_CORRECT = 4;
    const PENALTY_INCORRECT = 1;

    // Cálculo del puntaje final: (Aciertos * 4) - (Errores * 1)
    const finalScore = (correct * POINTS_PER_CORRECT) - (incorrect * PENALTY_INCORRECT);
    
    // NOTA: El puntaje máximo teórico sigue siendo 400.
    
    // --- Actualización de los elementos en el HTML ---
    
    // Se elimina la actualización de knowledgeScore y aptitudeScore
    document.getElementById('totalScore').textContent     = finalScore;
    document.getElementById('totalCorrect').textContent   = correct;
    document.getElementById('totalIncorrect').textContent = incorrect;
    
    // Como knowledgeScore y aptitudeScore ya no se usan en los cálculos, 
    // se recomienda eliminarlos del HTML, como se muestra en la sección de abajo.
}

if(!localStorage.getItem('prepIA_userID')) window.location.href = 'login.html';