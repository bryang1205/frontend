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
            body: JSON.stringify({ area: "A", topics: ["DPCC", "Ciencias Sociales", "Comunicación/Lenguaje", "Inglés", "Matemática", "Ciencia y Tecnología"] })
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
            question: "Mi hermana tiene una relación tóxica y maniática, con su esposo. Se denuncian, se pelean; pero luego, están nuevamente en intensos afectos de amor. Es un claro ejemplo de amor:",
            options: ["Pragma", "Manía", "Ágape", "Ludus", "Storge"],
            correct: 1
        },
        {
            id: 2,
            category: "DPCC",
            question: "Hoy por hoy los jóvenes se casan con bienes separados, siempre tratando de mantener el status social. Ese es el caso de mi amigo que se casó con una doctora. El tipo de amor es:",
            options: ["Ágape", "Pragma", "Manía", "Storge", "Ludus"],
            correct: 1
        },
        {
            id: 3,
            category: "DPCC",
            question: "La juventud de hoy, van sin compromisos, buscan ser feliz con amigos con derechos, y toman las cosas como bienes con disfrute. Este comentario hace referencia al tipo de amor:",
            options: ["Eros", "Ludus", "Storge", "Ágape", "Manía"],
            correct: 1
        },
        {
            id: 4,
            category: "DPCC",
            question: "Según el contexto, la palabra sexo se refiere a una clasificación biológica basada en:",
            options: ["la estructura y carga genética", "genética, su condición anatómica y hormonal", "la composición orgánica", "la composición genética", "el proceso evolutivo"],
            correct: 1
        },
        {
            id: 5,
            category: "DPCC",
            question: "El término género es una:",
            options: ["invención humana.", "construcción social.", "manera del ver al hombre.", "forma de encasillar al individuo.", "Perspectiva de observar los comportamientos."],
            correct: 1
        },
        {
            id: 6,
            category: "DPCC",
            question: "Fenómenos sociales y psicológicos asociados con lo que es ser \"femenino\" o \"masculino\" según los conceptos definidos en una cultura dada. Esta definición se completa con el concepto llamado:",
            options: ["género", "personalidad", "identidad", "sexualidad", "sexo"],
            correct: 0
        },
        {
            id: 7,
            category: "DPCC",
            question: "El machismo refiere a:",
            options: ["Los hombres tienen mayores habilidades que las mujeres.", "Los varones genéticamente son más inteligentes que las mujeres.", "La lógica de que por ser más fuertes los hombres, deben dominar a las mujeres.", "La creencia que los hombres son superiores a las mujeres.", "La creencia que Dios creó primero al hombre y por lo tanto, las mujeres deben obediencia a ellos."],
            correct: 3
        },
        {
            id: 8,
            category: "DPCC",
            question: "El feminicidio es:",
            options: ["muerte de la esposa", "muerte de una mujer", "muerte violentada de las mujeres por razones de género", "muerte de la madre", "muerte de una hija"],
            correct: 2
        },
        {
            id: 9,
            category: "DPCC",
            question: "Los estereotipos implican:",
            options: ["Percibir a la gente en términos de un concepto de creencias.", "Discriminar a los más vulnerables.", "Diferenciar a los individuos de diferentes clases sociales.", "Señalar a los miembros de cada grupo social.", "Determinar conductas."],
            correct: 0
        },
        {
            id: 10,
            category: "DPCC",
            question: "Los estados de la consciencia, son:",
            options: ["vigilia alerta y sueño sin ensueño", "vigilia ensueño y ensoñación", "vigilia y ensueño inconsciente", "vigilia alerta y domitación", "vigilia de ensueño y sensación"],
            correct: 0
        },
        {
            id: 11,
            category: "DPCC",
            question: "Son funciones del Sistema Electoral: 1. el planeamiento de los procesos electorales 2. la organización y ejecución de los procesos electorales 3. la custodia de un registro único de identificación de las personas 4. el registro de actos que modifican el estado civil 5. el control del orden interno durante los regímenes de excepción, si así lo dispone el decreto. SON CIERTAS:",
            options: ["1, 3, 4 y 5", "2, 3, 4 y 5", "1, 2, 3 y 5", "1, 2, 3, 4 y 5", "1, 2, 3 y 4"],
            correct: 4
        },
        {
            id: 12,
            category: "DPCC",
            question: "El Sistema Electoral está conformado por: 1. Jurado Nacional de Elecciones. 2. Oficina Nacional de Procesos Electorales. 3. Registro Nacional de Identificación y Estado Civil. 4. Órganos Tutelares del Estado. 5. Consejo Nacional de la Magistratura. SON CIERTAS:",
            options: ["1, 2 y 3", "2, 3 y 4", "3, 4 y 5", "1, 3 y 5", "2, 4 y 5"],
            correct: 0
        },
        {
            id: 13,
            category: "DPCC",
            question: "No es la función de la ONPE:",
            options: ["Prepara y mantiene actualizado el padrón electoral.", "Elabora y diseña la cédula de sufragio.", "Entrega material para los escrutinios y la difusión de los resultados.", "Brinda información permanente sobre el cómputo desde el inicio del sufragio en las mesas de votación.", "Dicta instrucciones y disposiciones para el mantenimiento del orden y la protección de la libertad personal durante los comicios."],
            correct: 4
        },
        {
            id: 14,
            category: "DPCC",
            question: "No es un fin de la ONU:",
            options: ["Promover la igualdad soberana entre todos los países miembros.", "Mantener la paz y la seguridad internacional.", "Promover la cooperación internacional en la solución de problemas internacionales de carácter económico, social, cultural y humanístico.", "Fomentar el respeto por los derechos y libertades fundamentales de todos.", "Servir de centro que armonice los esfuerzos de las naciones para alcanzar los objetivos y propuestas de la carta."],
            correct: 0
        },
        {
            id: 15,
            category: "DPCC",
            question: "No es un principio de la ONU:",
            options: ["Fomentar entre las naciones relaciones de amistad.", "Cumplir de buena fe las obligaciones contraídas en la carta.", "Emplear los medios pacíficos en la solución de conflictos internacionales.", "Extender los principios de los Estados no miembros.", "Propugnar la no intervención en los asuntos internos de los Estados miembros."],
            correct: 3
        },
        // --- CIENCIAS SOCIALES ---
        {
            id: 16,
            category: "Ciencias Sociales",
            question: "Son proposiciones relacionadas directamente con la cultura Chimú. 1. Naylamp fue su primer soberano. 2. Ai Apaec es su Dios principal. 3. arquitectura urbana. 4. grandes canales de irrigación. 5. Tacaynamo fue su primer soberano legendario. SON CIERTAS:",
            options: ["1, 2 y 3", "1, 3 y 4", "2, 3 y 5", "2, 4 y 5", "3, 4 y 5"],
            correct: 4
        },
        {
            id: 17,
            category: "Ciencias Sociales",
            question: "Son proposiciones relacionadas a la Primera Guerra Mundial: 1. la revolución Bolchevique en Rusia 2. la formación de alianzas: la triple alianza y la triple entente 3. se dio la táctica militar: \"la guerra de posiciones\" 4. se formó la \"gran duma\" 5. se firmó el tratado de Portsmouth entre URSS y EE.UU SON CIERTAS:",
            options: ["1, 2 y 3", "1, 3 y 4", "1, 4 y 5", "2, 3 y 4", "3, 4 y 5"],
            correct: 0
        },
        {
            id: 18,
            category: "Ciencias Sociales",
            question: "Son proposiciones relacionadas al nazismo: 1. implementó la dictadura del proletariado 2. luchó por la defensa de las naciones a su autodeterminación 3. incorporó un ferviente antisemitismo 4. promovió desde el Estado la supremacía de la raza aria 5. fomentó la implantación del Tercer Imperio en Alemania SON CIERTAS:",
            options: ["1, 2 y 3", "1, 3 y 4", "2, 3 y 5", "2, 3 y 4", "3, 4 y 5"],
            correct: 4
        },
        {
            id: 19,
            category: "Ciencias Sociales",
            question: "Es así como el quehacer geográfico transitó a partir de la Edad Antigua y Media hasta mediados del siglo XIX, desde una posición descriptiva de lo observado y en la actualidad hacia:",
            options: ["Una explicación más real como lo sostiene Alexander Von Humboldt.", "Una concepción determinista del medio geográfico sobre el comportamiento humano.", "La recopilación suficiente de información con propósito enciclopedista.", "Una concepción y carácter científico de la geografía.", "La construcción de los fundamentos de la teoría del \"espacio vital\"."],
            correct: 3
        },
        {
            id: 20,
            category: "Ciencias Sociales",
            question: "Lugar ubicado a 16 km de la ciudad de Trujillo donde las diversas especies de flora y fauna que alberga contribuyen a la riqueza ambiental de la zona y en la actualidad es un centro de estudio y conservación a cargo de la Facultad de Ciencias Biológicas de la UNT, corresponde al cerro:",
            options: ["Orejas", "La Virgen", "Chipitur", "Campana", "Cabras"],
            correct: 3
        },
        {
            id: 21,
            category: "Ciencias Sociales",
            question: "En la región yunga de La Libertad encontramos aparte de la arracacha y gungapa un fruto oriundo de la región:",
            options: ["motuy", "saúco", "pitahaya", "guayabo", "yacón"],
            correct: 3
        },
        {
            id: 22,
            category: "Ciencias Sociales",
            question: "Del caso referido; se habla de los siguientes factores de la demanda: 1. precios 2. ingresos 3. la educación 4. costos 5. gustos y preferencias SON CIERTAS:",
            options: ["1, 2 y 3", "1, 2 y 5", "2, 3 y 4", "1, 2, 4 y 5", "2, 3, 4 y 5"],
            correct: 1
        },
        {
            id: 23,
            category: "Ciencias Sociales",
            question: "El Estado con la creación de la Beca 18, Pensión 65 y el Programa Juntos, cumple con:",
            options: ["garantizar la estabilidad económica", "la distribución de la riqueza", "cobro de impuestos equitativos", "creación de programas sociales", "reducción de costos de transacción"],
            correct: 1
        },
        {
            id: 24,
            category: "Ciencias Sociales",
            question: "El tipo de recaudación del Estado, al implementar impuestos que no tienen un impacto negativo en la economía del país, es:",
            options: ["recaudación de impuestos antitécnicos.", "recaudación de impuestos directos.", "recaudación de impuestos neutrales.", "recaudación de impuestos indirectos.", "recaudación a los informales."],
            correct: 2
        },
        {
            id: 25,
            category: "Ciencias Sociales",
            question: "La solución del problema de distribución para la empresa TRUJILLO S.A., sería adquirir un vehículo mediante:",
            options: ["crédito personal.", "crédito empresarial.", "crédito fiducitario.", "leasing.", "crédito fiscal."],
            correct: 3
        },
        // --- COMUNICACIÓN Y LENGUAJE ---
        {
            id: 26,
            category: "Comunicación",
            question: "En el poema se aprecia: 1. El empleo de anáfora 2. Los versos presentan ritmo 3. La identificación con la servidumbre 4. Las interrogantes como cuestionamiento 5. Versos alejandrinos SON CIERTAS:",
            options: ["1, 2 y 3", "1, 2 y 4", "2, 3 y 4", "3, 4 y 5", "solo 3 y 4"],
            correct: 1
        },
        {
            id: 27,
            category: "Comunicación",
            question: "Del poema anterior, la concepción que evidencia el poeta sobre la mujer es:",
            options: ["Una mujer sumisa y dependiente.", "Una mujer dedicada a las labores del hogar.", "La mujer es capaz de llenar los vacíos en el hombre.", "La mujer como ejemplo de superación.", "La mujer es dominante."],
            correct: 2
        },
        {
            id: 28,
            category: "Comunicación",
            question: "La frase que mejor resume al fragmento es:",
            options: ["El trabajo comunitario de los indígenas.", "La organización social de los comuneros.", "Los estratos sociales de las comunidades andinas.", "La organización política de los comuneros.", "La pobreza de los indígenas del Perú."],
            correct: 0
        },
        {
            id: 29,
            category: "Comunicación",
            question: "Del fragmento anterior, el autor empleó los guiones cortos, en el texto, para:",
            options: ["insertar al narrador protagonista", "mostrar una ironía en su descripción", "insertar un diálogo breve del narrador para resaltar aspectos épicos", "presentar una explicación o precisión", "agregar su opinión sobre el hecho"],
            correct: 3
        },
        {
            id: 30,
            category: "Comunicación",
            question: "El texto, por su superestructura es:",
            options: ["descriptivo", "coloquial", "expositivo", "instructivo", "narrativo"],
            correct: 4
        },
        {
            id: 31,
            category: "Comunicación",
            question: "Una idea NO planteada en el texto es:",
            options: ["La esclavitud", "Las costumbres en Arabia Saudita en el pasado", "La política gubernamental", "El deseo de libertad", "Los privilegios de la clase dominante"],
            correct: 2
        },
        {
            id: 32,
            category: "Comunicación",
            question: "Son ideas implícitas en el texto: 1. La influencia que ejercen unas naciones sobre las otras 2. En los mercados de Arabia Saudita se vende solo oro 3. Arabia Saudita es una monarquía 4. El petróleo es la principal fuente de riqueza de Arabia Saudita 5. Nunca existió esclavitud en Arabia Saudita. SON CIERTAS:",
            options: ["1 y 2", "1 y 3", "2 y 4", "3 y 5", "2 y 3"],
            correct: 1
        },
        {
            id: 33,
            category: "Comunicación",
            question: "Según el texto, si en nuestro país se implementara una política específica para controlar el ingreso de migrantes, sería a causa de:",
            options: ["la mano de obra para nuestras industrias serían muy baratas", "el número de migrantes excedió la oferta migratoria del país", "el país se convertiría en un estado paternalista", "la crisis social, política y económica impide controlar el accionar de los migrantes", "hay fondos no gastados en el presupuesto nacional"],
            correct: 1
        },
        {
            id: 34,
            category: "Comunicación",
            question: "El tema central del texto versa sobre:",
            options: ["La propagación del derecho a migrar a países subdesarrollados.", "La migración como base esencial para cubrir la mano de obra faltante.", "La imposición de condiciones de seguridad entre los países migrantes.", "Los antecedentes policiales como requisito base para migrar a un país.", "Las medidas políticas de los Estados para controlar las corrientes migratorias."],
            correct: 4
        },
        {
            id: 35,
            category: "Comunicación",
            question: "Uno de los siguientes enunciados resulta incompatible con el contenido del texto:",
            options: ["Los Estados receptores deben invertir ingentes cantidades de recursos para hacer frente a desequilibrio de oferta y demanda migratoria.", "En nuestro país existen políticas relacionadas con el control de flujo migratorios.", "Las medidas migratorias necesitan una gran inversión económica.", "El derecho a emigrar permite que cualquiera se mude a la nación que desee.", "La visa es una regulación política estatal que busca controlar la migración."],
            correct: 3
        },
        {
            id: 36,
            category: "Comunicación",
            question: "Se aprecian las siguientes características: 1. transmite emociones y sentimientos del autor 2. predomina la subjetividad 3. utiliza adjetivos para caracterizar al personaje 4. el autor transmite al lector unos conocimientos 5. predomina la función apelativa SON CIERTAS:",
            options: ["1, 2, 3 y 4", "1, 3, 4 y 5", "solo 1, 2 y 3", "2, 4 y 5", "solo 4 y 5"],
            correct: 2
        },
        {
            id: 37,
            category: "Comunicación",
            question: "El tipo de DESCRIPCIÓN literaria expresada por el autor en el texto es:",
            options: ["caricatura", "prosopografía", "paralelo", "etopeya", "retrato"],
            correct: 1
        },
        {
            id: 38,
            category: "Lenguaje",
            question: "Cuantifique los SUSTANTIVOS: *Segismundo, muerte, madre, rey, castillo, montes, custodia, Clotaldo*",
            options: ["ocho", "siete", "diez", "cinco", "seis"],
            correct: 1
        },
        {
            id: 39,
            category: "Lenguaje",
            question: "Del texto anterior, cuantifique los VERBOS: *nació, causando, mandó, encerrar*",
            options: ["uno", "dos", "tres", "cuatro", "cinco"],
            correct: 2
        },
        {
            id: 40,
            category: "Lenguaje",
            question: "Del texto anterior, cuantifique (el - los) ADJETIVOS CALIFICATIVOS: *perdido, salvajes*",
            options: ["cuatro", "tres", "uno", "dos", "ninguno"],
            correct: 3
        },
        {
            id: 41,
            category: "Lenguaje",
            question: "Cuantifique los SUSTANTIVOS: *asertividad, respeto, personas, capacidad, emociones, pensamientos, creencias, honestidad, característica, muchedumbre, semejantes*",
            options: ["siete", "ocho", "nueve", "diez", "once"],
            correct: 4
        },
        {
            id: 42,
            category: "Lenguaje",
            question: "Del texto anterior, el SUSTANTIVO muchedumbre, pertenece a la clase de: 1. colectivos 2. abstractos 3. concretos 4. oración sustantiva 5. locución sustantivada SON CIERTAS:",
            options: ["1 y 3", "2 y 3", "3 y 4", "4 y 5", "solo 1"],
            correct: 0
        },
        {
            id: 43,
            category: "Lenguaje",
            question: "Del texto anterior: Es la capacidad que tenemos para expresar las emociones, pensamientos y creencias. Los SUSTANTIVOS presentes en cantidad y clase, respectivamente son: *capacidad* (abstracto), *emociones* (abstracto), *pensamientos* (abstracto), *creencias* (abstracto).",
            options: ["un concreto tres abstractos", "tres concretos un abstracto", "cuatro abstractos", "cuatro concretos", "cuatro sustantivos frase"],
            correct: 2
        },
        {
            id: 44,
            category: "Lenguaje",
            question: "Enunciado en el que se emplea correctamente el ADJETIVO en grado superlativo:",
            options: ["El ejercicio es correcto.", "El saber fue muy básico.", "La ley resultó importante.", "No tengo la más mínima idea.", "Tu nota fue más mejor."],
            correct: 3
        },
        {
            id: 45,
            category: "Lenguaje",
            question: "En el caso siguiente: \"Lucas es un destacado periodista y escribe el editorial del diario por pedido del jefe de prensa quien es el encargado de transmitir a los trabajadores la linea de pensamiento del director general\". El emisor es:",
            options: ["Lucas", "El diario", "El jefe de prensa", "El director general", "Los trabajadores del diario"],
            correct: 3
        },
        // --- INGLÉS ---
        {
            id: 46,
            category: "Inglés",
            question: "Choose if the sentences are TRUE \"T\" or FALSE \"F\". 1. Mary's parents shouldn't work full time in the farm. 2. Mary rarely makes the brothers' beds. 3. She usually does the dishes and laundry. 4. She has three brothers. 5. She shouldn't carry the food it can be dangerous for her back. 6. She shouldn't make the lunch every day. Her brothers can do it and help her.",
            options: ["TTTFFT", "TFFTFT", "FTTFFT", "FFTTFF", "TFTFTF"],
            correct: 2
        },
        {
            id: 47,
            category: "Inglés",
            question: "Fill in the blanks on the text above: A. Good morning, I'd like ___ ham, please. B: How ___ would you like? A: Four slices B: Would you like anything else? A: Yes, I'd like ___ rice. Do you have any \"costeño\"? B: I'm afraid we don't have ___ \"costeño\", what about \"El Granadito\"? A: No, thank you. Just the ham then. How ___ is that? B: It's twelve soles.",
            options: ["some – much – some – any – much", "much – some – some – any – a lot of", "a lot of – many – some – any – few", "any – many – much – some – any", "any – many – some – much – a few..."],
            correct: 4
        },
        {
            id: 48,
            category: "Inglés",
            question: "Why do fans like Taylor Swift?",
            options: ["Because she's pretty.", "Because she's a teenager.", "Because she's an actress.", "Because she writes lovely songs.", "Because she's an American."],
            correct: 3
        },
        {
            id: 49,
            category: "Inglés",
            question: "Why did the family leave Venezuela?",
            options: ["They wanted to visit another country", "Because they wanted to explore new places and meet new people.", "Because of Venezuela's economic crisis and the family lost their jobs.", "Because Venezuela had delinquency and violence", "The text doesn't mention."],
            correct: 2
        },
        {
            id: 50,
            category: "Inglés",
            question: "How many times have they visited Machu Picchu?",
            options: ["They haven't gone to Machu Picchu yet.", "They have never gone to Cuzco.", "They have visited Machu Picchu twice.", "They have visited Machu Picchu a lot.", "They have visited Machu Picchu five times."],
            correct: 4
        },
        // --- MATEMÁTICA ---
        {
            id: 51,
            category: "Matemática",
            question: "La suma de las cifras de la suma de los dos primeros números omitidos es:",
            options: ["10", "11", "12", "8", "13"],
            correct: 1
        },
        {
            id: 52,
            category: "Matemática",
            question: "La suma de las cifras del 3° término omitido es:",
            options: ["9", "10", "4", "7", "14"],
            correct: 2
        },
        {
            id: 53,
            category: "Matemática",
            question: "La diferencia entre el vigésimo y décimo término es:",
            options: ["10", "30", "22", "40", "25"],
            correct: 3
        },
        {
            id: 54,
            category: "Matemática",
            question: "La longitud de la altura de la base de la estatua es:",
            options: ["1,2 m", "2,4 m", "1,6 m", "4,8 m", "5,0 m"],
            correct: 3
        },
        {
            id: 55,
            category: "Matemática",
            question: "La medida del ángulo que forma el soporte de hierro AC con AD es:",
            options: ["24°", "37°", "15°", "41°", "74°"],
            correct: 1
        },
        {
            id: 56,
            category: "Matemática",
            question: "El área de la sección longitudinal de la base de la estatua es:",
            options: ["20 m²", "22 m²", "24 m²", "26 m²", "28 m²"],
            correct: 3
        },
        {
            id: 57,
            category: "Matemática",
            question: "Los estudiantes del área \"A\" mencionan que la academia tiene \"M\" años, donde: M = 3θ(sin²α + cos²α) - 2θ(sin²α + cos²α), entonces el tiempo de creación de la academia, en años, es:",
            options: ["2", "4", "6", "8", "10"],
            correct: 2
        },
        {
            id: 58,
            category: "Matemática",
            question: "Los estudiantes del área \"B\" menciona que la academia tiene \"P\" años, donde: P = 25·sinα·cosα y sinα - cosα = 3/5, entonces el tiempo de creación de la academia, en años, es:",
            options: ["8", "9", "10", "11", "12"],
            correct: 2
        },
        {
            id: 59,
            category: "Matemática",
            question: "Los estudiantes del área \"C - D\" mencionan que la academia tiene \"R\" años, donde: R = (sinα + sinθ + sinφ)/3 y se sabe que: sinα + sinθ + sinφ = 2, a + b + c = 0, abc = 3, entonces el tiempo de creación de la academia, en años, es:",
            options: ["7", "9", "11", "13", "15"],
            correct: 2
        },
        {
            id: 60,
            category: "Matemática",
            question: "La ecuación de la sección longitudinal del depósito, es:",
            options: ["x² = 12y", "x² = -12y", "y² = 12x", "x² = 16y", "y² = 12x"],
            correct: 4
        },
        {
            id: 61,
            category: "Matemática",
            question: "Si el nivel del agua desciende 15 metros, su ancho, en metros es:",
            options: ["20", "22", "24", "26", "28"],
            correct: 4
        },
        {
            id: 62,
            category: "Matemática",
            question: "Si el ancho del nivel del agua es 12 metros, la cantidad de metros que descendió el agua, respecto a la situación inicial, es:",
            options: ["12", "16", "20", "24", "28"],
            correct: 2
        },
        {
            id: 63,
            category: "Matemática",
            question: "Juan y Erika desean sentarse juntos, la probabilidad que esto suceda, es:",
            options: ["1/9", "1/3", "1/5", "1/6", "1/7"],
            correct: 0
        },
        {
            id: 64,
            category: "Matemática",
            question: "En una función de la película, los enamorados discuten y deciden no sentarse juntos, la probabilidad que esto suceda, es:",
            options: ["1/7", "2/3", "4/5", "8/9", "6/7"],
            correct: 3
        },
        {
            id: 65,
            category: "Matemática",
            question: "Si las mujeres deciden sentarse juntas, la probabilidad que esto suceda, es:",
            options: ["1/7", "1/14", "1/21", "1/35", "1/42"],
            correct: 2
        },
        {
            id: 66,
            category: "Matemática",
            question: "Con la información alcanzada anteriormente se afirma que el promedio aritmético, es:",
            options: ["57,50", "58,50", "59,20", "59,56", "60,30"],
            correct: 3
        },
        {
            id: 67,
            category: "Matemática",
            question: "La MODA del conjunto de datos brindados anteriormente, es:",
            options: ["57,86", "58,18", "58,58", "59,40", "60,98"],
            correct: 1
        },
        {
            id: 68,
            category: "Matemática",
            question: "El porcentaje de estudiantes que no alcanza los 62 kilogramos, es:",
            options: ["51 %", "62 %", "68 %", "70 %", "72 %"],
            correct: 3
        },
        {
            id: 69,
            category: "Matemática",
            question: "La diferencia de dichos números es:",
            options: ["24", "26", "28", "30", "32"],
            correct: 3
        },
        {
            id: 70,
            category: "Matemática",
            question: "El mínimo común múltiplo de los números es:",
            options: ["38", "40", "42", "43", "44"],
            correct: 4
        },
        // --- CIENCIA Y TECNOLOGÍA (Biología / Química / Física) ---
        {
            id: 71,
            category: "Ciencia y Tecnología",
            question: "La secuencia correcta de los pasos del Método Científico, es:",
            options: ["observación, problema, hipótesis, experimentación y documentación.", "observación, problema, hipótesis, experimentación y conclusiones.", "observación, hipótesis, problema, experimentación y conclusiones.", "observación, problema, experimentación, hipótesis y conclusiones.", "problema, observación, hipótesis, experimentación y conclusiones."],
            correct: 2
        },
        {
            id: 72,
            category: "Ciencia y Tecnología",
            question: "El paso del Método Científico que comprueba la veracidad o falsedad de la hipótesis, es la:",
            options: ["observación", "problema", "experimentación", "documentación", "conclusión"],
            correct: 2
        },
        {
            id: 73,
            category: "Ciencia y Tecnología",
            question: "El punto de partida de toda investigación es la:",
            options: ["hipótesis", "planteamiento del problema", "conclusión", "juicio de valor", "observación"],
            correct: 4
        },
        {
            id: 74,
            category: "Ciencia y Tecnología",
            question: "Al respecto señale lo correcto: 1. La arteria pulmonar transporta sangre pobre en O₂. 2. La vena pulmonar transporta sangre oxigenada. 3. La arteria pulmonar llega hasta los alvéolos pulmonares. 4. Las dos aurículas forman el corazón izquierdo y los dos ventrículos forman el corazón izquierdo. 5. El lado derecho del corazón no hay mezcla de sangre venosa con arterial. SON CIERTAS:",
            options: ["1, 2, 5", "1, 2, 3", "2, 3, 4", "2, 4, 5", "1, 4, 5"],
            correct: 1
        },
        {
            id: 75,
            category: "Ciencia y Tecnología",
            question: "El proceso por el cual se convierte la sangre venosa en arterial, se denomina:",
            options: ["hematostasis", "hemoptisis", "hemocrosis", "hematosis", "venocliasis"],
            correct: 3
        },
        {
            id: 76,
            category: "Ciencia y Tecnología",
            question: "Vaso sanguíneo que lleva sangre venosa al pulmón:",
            options: ["arteria pulmonar", "vena pulmonar", "aorta", "vena cava superior", "vena cava inferior"],
            correct: 0
        },
        {
            id: 77,
            category: "Ciencia y Tecnología",
            question: "Al respecto, señale la respuesta correcta:",
            options: ["Todas las células tienen membrana plasmática.", "Solo las células poseen núcleo definido.", "Algunas células animales poseen pared celulósica.", "Todas las células tienen la misma forma.", "Todas las células están rodeadas por un medio interno y otro externo."],
            correct: 4
        },
        {
            id: 78,
            category: "Ciencia y Tecnología",
            question: "Estructura básica fundamental de la membrana plasmática, que es responsable de su estabilidad, es (son):",
            options: ["las proteínas intrínsecas", "las proteínas de superficie", "los fosfolípidos", "las moléculas de colesterol", "el agua"],
            correct: 4
        },
        {
            id: 79,
            category: "Ciencia y Tecnología",
            question: "La pared muréínica es exclusiva de una de los siguientes organismos:",
            options: ["bacterias", "algas", "hongos", "levaduras", "protozoos"],
            correct: 0
        },
        {
            id: 80,
            category: "Ciencia y Tecnología",
            question: "Una célula en Interfase, se caracteriza por: 1. Presentar un intenso metabolismo. 2. Se duplican sus organelas. 3. Hay un intenso movimiento del ADN. 4. Ocurre la citocinesis. 5. Ocurre la cariocinesis. SON CIERTAS:",
            options: ["1, 2 y 3", "1, 2 y 4", "2, 3 y 4", "1, 2 y 5", "3, 4 y 5"],
            correct: 3
        },
        {
            id: 81,
            category: "Ciencia y Tecnología",
            question: "Fase de la mitosis en la que los cromosomas se acortan en el plano ecuatorial:",
            options: ["anafase", "citocinesis", "metafase", "telofase", "anafase"],
            correct: 2
        },
        {
            id: 82,
            category: "Ciencia y Tecnología",
            question: "En la profase se realiza lo siguiente, excepto:",
            options: ["Se condensa la cromatina", "Se desintegra el nucléolo", "Se forman los filamentos de cromatina", "Se forma el huso acromático", "La cromatina divierte a su máximo grado de condensación"],
            correct: 4
        },
        {
            id: 83,
            category: "Ciencia y Tecnología",
            question: "La fotosíntesis es un proceso que se caracteriza por: 1. Ser de la conversión de energía luminosa en energía física. 2. En la fase luminosa se realiza la fijación del CO₂. 3. En la fase luminosa se realiza la fotólisis del agua. 4. Se libera CO₂ a la atmósfera. 5. La fase luminosa se realiza en los tilacoides. SON CIERTAS:",
            options: ["1, 2 y 3", "1, 3 y 4", "1, 3 y 5", "3, 4 y 5", "solo 2 y 3"],
            correct: 2
        },
        {
            id: 84,
            category: "Ciencia y Tecnología",
            question: "Es una característica del catabolismo:",
            options: ["generar moléculas complejas", "lo realizan células eucariotas y procariotas", "ocurren sólo reacciones endergónicas", "formación de compuestos intermedios", "demandan energía"],
            correct: 3
        },
        {
            id: 85,
            category: "Ciencia y Tecnología",
            question: "Es un evento que se lleva a cabo en la fase oscura, excepto:",
            options: ["fijación del CO₂", "reducción del fosfoglicerato.", "síntesis de glúcidos", "activación de la ribulosa.", "se realiza en las membranas tilacoidales"],
            correct: 4
        },
        {
            id: 86,
            category: "Ciencia y Tecnología",
            question: "Al respecto, si 2 moles de SO₂ reaccionan con 3 moles de H₂O, los moles producidos de ácido sulfúrico, son:",
            options: ["2", "1", "3", "4", "6"],
            correct: 1
        },
        {
            id: 87,
            category: "Ciencia y Tecnología",
            question: "Si la pureza del ácido sulfúrico obtenido es del 98 %, la masa de un recipiente con ácido sulfúrico comercial, la cantidad en gramos del recipiente obtenida por la reacción química entre 10 moles de SO₂ y 6 moles de H₂O (masa molar de azufre: 32 g/mol) es:",
            options: ["98", "490", "980", "558", "400"],
            correct: 2
        },
        {
            id: 88,
            category: "Ciencia y Tecnología",
            question: "Si reaccionan 10 moles de SO₂ y 6 moles de H₂O; así mismo, se recuperan solamente 490 g de H₂SO₄, el rendimiento de la reacción es: (masa molar del azufre: 32 g/mol)",
            options: ["16,5 %", "23,1 %", "49,0 %", "57,1 %", "83,3 %"],
            correct: 4
        },
        {
            id: 89,
            category: "Ciencia y Tecnología",
            question: "La reacción química que representa el tratamiento del óxido férrico, es:",
            options: ["FeO + C → Fe + CO", "FeO + CO → Fe + CO₂", "2Fe₂O₃ + 3C → 4Fe + 3CO₂", "Fe + C → FeC", "2Fe₂O₃ + O₂ → 2Fe₂O₃ + O₂"],
            correct: 4
        },
        {
            id: 90,
            category: "Ciencia y Tecnología",
            question: "Si 4 moles de óxido férrico reaccionan con exceso de carbono, la masa de hierro, en gramos, que se obtendría sin pérdidas, es:",
            options: ["28", "56", "112", "224", "448"],
            correct: 4
        },
        {
            id: 91,
            category: "Ciencia y Tecnología",
            question: "Si reaccionan 2 moles de óxido férrico con 3 moles de carbono, los gramos de dióxido de carbono liberados al medioambiente, son:",
            options: ["44", "56", "88", "132", "264"],
            correct: 3
        },
        {
            id: 92,
            category: "Ciencia y Tecnología",
            question: "El cociente de moles de O₂(g) para combustionar 1 mol de propano, son:",
            options: ["1", "2", "3", "4", "5"],
            correct: 4
        },
        {
            id: 93,
            category: "Ciencia y Tecnología",
            question: "Los gramos de CO₂(g) producidos al combustionarse completamente 1 mol de propano, son:",
            options: ["94", "132", "120", "150", "88"],
            correct: 1
        },
        {
            id: 94,
            category: "Ciencia y Tecnología",
            question: "Las velocidades de ambos buses expresadas, en Km/hr, son:",
            options: ["50; 80", "50; 40", "60; 80", "60; 40", "85; 90"],
            correct: 1
        },
        {
            id: 95,
            category: "Ciencia y Tecnología",
            question: "El tiempo en horas y la distancia a Trujillo en Km cuando los buses se cruzan, respectivamente, son:",
            options: ["3; 60", "3; 40", "3; 40", "4; 60", "3; 50"],
            correct: 4
        },
        {
            id: 96,
            category: "Ciencia y Tecnología",
            question: "La distancia de separación en Km de ambos buses, cuando han transcurrido 5 hrs, son:",
            options: ["180", "190", "210", "230", "240"],
            correct: 2
        },
        {
            id: 97,
            category: "Ciencia y Tecnología",
            question: "La eficiencia del motor térmico es:",
            options: ["20 %", "30 %", "40 %", "50 %", "60 %"],
            correct: 1
        },
        {
            id: 98,
            category: "Ciencia y Tecnología",
            question: "El calor (en J) suministrado por la fuente caliente, es:",
            options: ["20,500", "20,400", "20,160", "20,050", "20,000"],
            correct: 2
        },
        {
            id: 99,
            category: "Ciencia y Tecnología",
            question: "El calor (en J) expulsado hacia el foco frío, es:",
            options: ["12,000", "12,100", "12,200", "12,300", "12,400"],
            correct: 4
        },
        {
            id: 100,
            category: "Ciencia y Tecnología",
            question: "La densidad del objeto en kg/m³, es:",
            options: ["100", "150", "200", "250", "300"],
            correct: 2
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