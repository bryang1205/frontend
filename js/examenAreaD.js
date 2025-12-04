function generateLocalQuestions() {
    examQuestions = [
        // --- DESARROLLO PERSONAL, CIUDADANÍA Y CÍVICA ---
        {
            id: 1,
            category: "DPCyC",
            question: "Pedro vivió en la pobreza y la miseria familiar, por lo que tenía que trabajar y estudiar, su padre vendía pescado y su madre lavaba ropa, sin embargo, él salió adelante. La capacidad demostrada de Pedro se denomina:",
            options: ["empatía", "asertividad", "resiliencia", "enfrentamiento del estrés", "manejo de conflictos"],
            correct: 2 // C: resiliencia
        },
        {
            id: 2,
            category: "DPCyC",
            question: "Cecilia trata siempre de evitar el conflicto con sus compañeros de trabajo y la mayoría de veces, lo consigue. El tipo de habilidad de Cecilia se denomina:",
            options: ["resiliencia", "asertividad", "empatía", "habilidad de negociación", "habilidad de planificación"],
            correct: 3 // D: habilidad de negociación
        },
        {
            id: 3,
            category: "DPCyC",
            question: "El orden de nacimiento dentro de la familia como una influencia importante en la infancia para el desarrollo de la personalidad es teorizado por:",
            options: ["Freud", "Bandura", "Rogers", "Adler", "Jung"],
            correct: 3 // D: Adler
        },
        {
            id: 4,
            category: "DPCyC",
            question: "El estilo de crianza que se caracteriza por ser pasivo e indiferente y ser uno de los más dañinos para el normal desarrollo de los niños, es el:",
            options: ["permisivo", "negligente", "democrático", "autoritario", "amoroso"],
            correct: 1 // B: negligente
        },
        {
            id: 5,
            category: "DPCyC",
            question: "Zoila es una adolescente que le encanta ir de compras, hace poco se compró un par de zapatillas caras y una casaca de cuero, luego reacciona y se arrepiente de la compra. El componente de la emoción que ha primado en ella es el:",
            options: ["fisiológico", "expresivo", "subjetivo", "motor", "social"],
            correct: 2 // C: subjetivo
        },
        {
            id: 6,
            category: "DPCyC",
            question: "La función de la emoción que dirige la conducta hacia una determinada meta y cuya persistencia dependerá de su menor o mayor intensidad, es:",
            options: ["motivacional", "social", "adaptativa", "motora", "expresiva"],
            correct: 0 // A: motivacional
        },
        {
            id: 7,
            category: "DPCyC",
            question: "Al caerse el techo en una gran tienda comercial, muchas personas en vez de apoyar a los heridos optaron por alejarse de ellos. Se puede sospechar que estas personas no han desarrollado:",
            options: ["habilidades sociales", "automotivación", "autorregulación", "autoconocimiento", "empatía"],
            correct: 4 // E: empatía
        },
        {
            id: 8,
            category: "DPCyC",
            question: "Es una estrategia para la autorregulación emocional y nos ayuda a la toma de conciencia de nuestra mente y cuerpo al momento de conducirnos:",
            options: ["ejercicio de respiración", "catarsis emocional", "mindfulness", "supresión de pensamiento", "reconsideración emocional"],
            correct: 2 // C: mindfulness
        },
        {
            id: 9,
            category: "DPCyC",
            question: "En esta etapa, según Piaget, el niño es egocéntrico por lo que solo puede tener una forma de ver un asunto moral. No tiene en cuenta las intenciones y solo se fija en las consecuencias de los hechos. Esta condición del desarrollo moral del niño se denomina:",
            options: ["relativismo moral", "moral convencional", "moral post convencional", "moral pre convencional", "realismo moral"],
            correct: 4 // E: realismo moral
        },
        {
            id: 10,
            category: "DPCyC",
            question: "De acuerdo a las dimensiones de la inteligencia emocional, Daniel (jugador expulsado por provocación) debería desarrollar para evitar ser expulsado la (el):",
            options: ["empatía", "asertividad", "motivación", "interacción con sus pares", "autocontrol"],
            correct: 4 // E: autocontrol
        },
        {
            id: 11,
            category: "DPCyC",
            question: "Notable psicólogo que teoriza el aprendizaje social por imitación:",
            options: ["Bandura", "Maslow", "Vygotsky", "Sternberg", "Rogers"],
            correct: 0 // A: Bandura
        },
        {
            id: 12,
            category: "DPCyC",
            question: "Psicólogo que enfatiza la importancia social en la transmisión del conocimiento y propone la zona de desarrollo próximo para el logro del aprendizaje:",
            options: ["Maslow", "Bandura", "Sternberg", "Vygostsky", "Rogers"],
            correct: 3 // D: Vygostsky
        },
        {
            id: 13,
            category: "DPCyC",
            question: "Antonio (adolescente) presenta cambios e inestabilidad para aprender, atender, memorizar y pensar. Los cambios que está experimentado son de tipo:",
            options: ["físico", "cognitivo", "psicosocial", "actitudinal", "afectivo"],
            correct: 1 // B: cognitivo
        },
        {
            id: 14,
            category: "DPCyC",
            question: "Juan se defendió enfrentándose al ladrón, indicando que tenía la certeza de que no le pasaría nada porque él se sabe más fuerte y más rápido. Esto es una expresión de:",
            options: ["fábula de la invencibilidad", "fábula personal", "audiencia imaginaria", "rebeldía", "mito de la providencia"],
            correct: 0 // A: fábula de la invencibilidad
        },
        {
            id: 15,
            category: "DPCyC",
            question: "Una persona: 'yo respeto la cola para que haya más orden'. Otra persona: 'respeto la cola porque hay un vigilante supervisando'. Según Kohlberg, hace referencia, respectivamente, a los niveles del razonamiento moral:",
            options: ["pre convencional - convencional", "pos convencional - convencional", "convencional - pos convencional", "pre convencional - pos convencional", "convencional - pre convencional"],
            correct: 4 // E: convencional - pre convencional
        },
        {
            id: 16,
            category: "DPCyC",
            question: "Hoy en día diríamos que los antiguos filósofos y epistemólogos, cuando de la verdad se trataba, buscaban el conocimiento:",
            options: ["común", "técnico", "científico", "ordinario", "religioso"],
            correct: 2 // C: científico
        },
        {
            id: 17,
            category: "DPCyC",
            question: "Cuando Matías apela más a sus emociones y subjetividad que a los hechos reales y transparentes, está en una posición denominada:",
            options: ["verdad", "falsedad", "posverdad", "racionalidad", "logos"],
            correct: 2 // C: posverdad
        },
        {
            id: 18,
            category: "DPCyC",
            question: "Las predicciones que realizan los meteorólogos sobre el tiempo se basan en un (a):",
            options: ["hipótesis confirmada", "propuesta científica", "teoría científicas", "información empírica", "método científico"],
            correct: 2 // C: teoría científicas
        },
        {
            id: 19,
            category: "DPCyC",
            question: "No es una atribución del Poder Legislativo:",
            options: ["Ejercer el derecho de amnistía.", "Ejercer el derecho de indulto.", "Consentir el ingreso de tropas extranjeras.", "Autorizar al Presidente de la República salir del país.", "Aprobar el Presupuesto General de la República."],
            correct: 1 // B: Ejercer el derecho de indulto (es atribución del Presidente)
        },
        {
            id: 20,
            category: "DPCyC",
            question: "Si un contingente de soldados del ejército ruso quisiera ingresar a nuestro país, necesitaría el consentimiento del:",
            options: ["Presidente de la República", "Primer Ministro", "Canciller peruano", "Congreso de la República", "Poder Judicial"],
            correct: 3 // D: Congreso de la República
        },
        {
            id: 21,
            category: "DPCyC",
            question: "El fallecido ex Presidente de la República, Alberto Fujimori, fue indultado por el:",
            options: ["Presidente del Congreso", "Poder Legislativo", "Presidente de la República", "Presidente del Poder Judicial", "Tribunal Constitucional"],
            correct: 2 // C: Presidente de la República
        },
        {
            id: 22,
            category: "DPCyC",
            question: "Frente a una iniciativa ciudadana para referéndum, los temas que pueden ser sometidos a referéndum, serían:\n1. Reforma total y parcial de la Constitución\n2. Revocatoria de autoridades\n3. Demanda de rendición de cuentas\n4. Aprobación de normas con rango de ley\n5. Ordenanzas municipales\nSON CIERTAS:",
            options: ["solo 1, 2 y 3", "solo 2, 3 y 5", "solo 1 y 5", "solo 2, 3 y 4", "1, 2, 3, 4 y 5"],
            correct: 2 // C: solo 1 y 5
        },
        {
            id: 23,
            category: "DPCyC",
            question: "El monopolio de la violencia en el Perú, lo tiene(n), el(los):",
            options: ["Estado peruano", "grupos terroristas", "extorsionadores", "grupos pandilleros", "grupos de poder"],
            correct: 0 // A: Estado peruano
        },
        {
            id: 24,
            category: "DPCyC",
            question: "El Sistema de Seguridad y Defensa Nacional está integrado por el:\n1. Ministro de Economía y Finanzas\n2. Ministro del Interior\n3. Ministro de Justicia y Derechos Humanos\n4. Presidente de República\n5. Presidente de la Dirección Nacional de Inteligencia\nSON CIERTAS:",
            options: ["solo 1, 2 y 3", "solo 2, 3 y 4", "solo 3, 4 y 5", "solo 1", "1, 2, 3, 4 y 5"],
            correct: 4 // E: 1, 2, 3, 4 y 5
        },
        {
            id: 25,
            category: "DPCyC",
            question: "Ana Paula en su tesis sobre 'El desempeño docente y su relación con el rendimiento académico de los estudiantes' sigue todo un plan específico para no caer en errores. Esto es una característica de la ciencia, denominada:",
            options: ["fáctica", "especializada", "empírica", "metódica", "predictiva"],
            correct: 3 // D: metódica
        },
        {
            id: 26,
            category: "DPCyC",
            question: "José afirma que en el año 2050 el poder económico ya no será de Estados Unidos sino de China. La afirmación de José refleja la característica de la ciencia de ser:",
            options: ["sistemática", "metódica", "predictiva", "analítica", "fáctica"],
            correct: 2 // C: predictiva
        },
        {
            id: 27,
            category: "DPCyC",
            question: "Max factura a nombre propio por el servicio brindado, por lo que el tipo de persona que le corresponde es:",
            options: ["jurídica", "natural", "familiar", "social", "universal"],
            correct: 1 // B: natural
        },
        {
            id: 28,
            category: "DPCyC",
            question: "La empresa de Roberto se denomina 'El Buen Samaritano' y factura a nombre de su empresa, por lo que el tipo de persona que le corresponde es:",
            options: ["social", "natural", "individual", "jurídica", "familiar"],
            correct: 3 // D: jurídica
        },
        {
            id: 29,
            category: "DPCyC",
            question: "Cuando se afirma que los derechos humanos son imperativos, es porque:",
            options: ["No tienen fecha de culminación.", "No pueden ser lesionados.", "Su cumplimiento es obligatorio.", "Son inherentes a la naturaleza humana.", "No pueden ser negociados."],
            correct: 2 // C: Su cumplimiento es obligatorio
        },
        {
            id: 30,
            category: "DPCyC",
            question: "María Luisa considera que los derechos no pueden ser objeto de negociación comerciables, porque los derechos son:",
            options: ["inalienables", "inviolables", "universales", "indivisibles", "imperativos"],
            correct: 0 // A: inalienables
        },

        // --- CIENCIAS SOCIALES / ECONOMÍA ---
        {
            id: 31,
            category: "Cs. Sociales",
            question: "La función principal del ayllu en la sociedad incaica fue el/la:",
            options: ["Comercio y trueque entre diferentes regiones.", "Unidad básica de organización social y económica.", "Grupo de guerreros encargados de la defensa del imperio.", "Grupo de sacerdotes responsables de los rituales religiosos.", "Grupo de hombres encargados de las labores agrícolas."],
            correct: 1 // B: Unidad básica de organización social y económica
        },
        {
            id: 32,
            category: "Cs. Sociales",
            question: "El papel que jugaron las órdenes militares, como los Templarios, en las cruzadas fue:",
            options: ["Actuar como mercaderes y diplomáticos entre Europa y el Medio Oriente.", "Centrarse en la conversión religiosa de los pueblos musulmanes.", "Fundamentalmente en las campañas militares para la defensa de los territorios conquistados.", "Responsable de organizar las peregrinaciones a Tierra Santa.", "Reunir y difundir las corrientes culturales helenistas, orientales y cristianas."],
            correct: 2 // C: Campañas militares de defensa
        },
        {
            id: 33,
            category: "Cs. Sociales",
            question: "El efecto que tuvo la introducción del Cristianismo en el imperio Romano fue:",
            options: ["Ningún impacto relevante en la vida religiosa.", "Conducir a la persecución masiva de cristianos y su eventual eliminación.", "Transformar profundamente la cultura y la política romana.", "Influir en la importante arquitectura religiosa.", "Compartir características como el antropomorfismo y el animismo."],
            correct: 2 // C: Transformar profundamente la cultura y la política romana
        },
        {
            id: 34,
            category: "Cs. Sociales",
            question: "El resultado de la batalla de Tacna y Arica para las fuerzas aliadas de Perú y Bolivia fue de una:",
            options: ["derrota significativa", "victoria decisiva", "retirada estratégica", "conspiración boliviana", "victoria pírrica"],
            correct: 0 // A: derrota significativa
        },
        {
            id: 35,
            category: "Geografía",
            question: "El argumento: Trujillo crece cada vez más en sentido horizontal y también en sentido vertical. El principio geográfico al que pertenece esta descripción es:",
            options: ["actividad", "extensión", "descripción", "causalidad", "comparación"],
            correct: 0 // A: actividad
        },
        {
            id: 36,
            category: "Geografía",
            question: "De los siguientes atributos relacionados a la meteorización:\n1. Formación de grietas o fisuras en la superficie.\n2. Es un proceso que ocurre in situ.\n3. Degradación, acarreo y agregación de materiales.\n4. La desintegración viene a ser el proceso mecánico.\n5. Actúa para recuperar el equilibrio de la isostasia.\nSON CIERTAS:",
            options: ["1, 2 y 3", "2, 4 y 5", "1, 3 y 5", "solo 2 y 4", "solo 2 y 5"],
            correct: 3 // D: solo 2 y 4
        },
        {
            id: 37,
            category: "Geografía",
            question: "Según el XII Censo Nacional de Población, la ciudad que concentra más de la mitad de la población del departamento de La Libertad es:",
            options: ["Ascope", "Virú", "Pacasmayo", "Chepén", "Trujillo"],
            correct: 4 // E: Trujillo
        },
        {
            id: 38,
            category: "Geografía",
            question: "Sobre Cascas y Sayapullo (anexados en 1990) se puede afirmar que antes de 1990 formaban parte de la provincia de:",
            options: ["En un inicio formaban parte de la Región Lambayeque.", "Anteriormente formaban parte de la provincia de Sánchez Carrión.", "Antes de 1990 formaban parte de la provincia de Cajamarca.", "Antes de 1990 formaban parte de la provincia de Contumazá.", "En un inicio pertenecieron a la provincia de Bolívar."],
            correct: 3 // D: Contumazá
        },
        {
            id: 39,
            category: "Economía",
            question: "La producción de mascarillas por la empresa textil en el marco de la pandemia COVID-19, satisface la necesidad de tipo:",
            options: ["primaria", "secundaria", "terciaria", "cuaternaria", "quinaria"],
            correct: 0 // A: primaria
        },
        {
            id: 40,
            category: "Economía",
            question: "Para lograr la identificación de problemas o dificultades sociales (deficiente salud, bajo nivel educativo, desempleo), Arturo necesitó:",
            options: ["los datos del INEI.", "los datos del MEF.", "conocer la teoría económica.", "conocer a los agentes económicos de su localidad.", "aprender sobre los aspectos socioeconómicos en países en vías de desarrollo."],
            correct: 0 // A: datos del INEI
        },
        {
            id: 41,
            category: "Economía",
            question: "Edwin (ingeniero) ha conseguido controlar los procesos productivos y producir más con menos. La manera de producción se define como:",
            options: ["productividad", "producción", "oportunidad", "costo", "utilidad"],
            correct: 0 // A: productividad
        },
        {
            id: 42,
            category: "Economía",
            question: "Los factores que determinan la demanda de un bien o servicio, es:",
            options: [
                "El precio del bien o servicio y el ingreso de los productores.",
                "El precio del bien o servicio y el costo de producción.",
                "El precio del bien o servicio, el ingreso de los consumidores, el precio de los bienes sustitutos y complementarios, los gustos y preferencias y las expectativas.",
                "El ingreso de los consumidores, las preferencias y los gustos, y la tecnología.",
                "El precio de los bienes sustitutos y complementarios, las preferencias y los gustos, y la tecnología."
            ],
            correct: 2 // C
        },

        // --- COMUNICACIÓN Y LENGUAJE ---
        {
            id: 43,
            category: "Comunicación",
            question: "De acuerdo a la estructura o modelos de mercado, ¿qué clase de mercado le corresponde al tipo de cambio ocasional de un costo?",
            options: ["fijo", "variable", "inesperado", "constante", "fluctuante"],
            correct: 4 // E: fluctuante
        },
        {
            id: 44,
            category: "Comunicación",
            question: "Al plantearle el incremento del vehículo, se ha ocasionado un costo:",
            options: ["1, 2, 3, 4", "2, 3, 4", "1, 2, 3, 5", "2, 4, 5", "1, 2, 5"],
            correct: 2 // C: 1, 2, 3, 5
        },
        {
            id: 45,
            category: "Comunicación",
            question: "De acuerdo a la estructura o modelos de mercado, el incremento de una unidad extra dentro del mercado de:",
            options: ["monopolio", "monopsolio", "monopsonio", "oligopolio", "competencia monopolística"],
            correct: 4 // E
        },
        {
            id: 46,
            category: "Literatura",
            question: "El docente pregunta: ¿A qué especie narrativa pertenece el texto? Cinco estudiantes respondieron, pero solo uno dio la respuesta correcta. La respuesta correcta fue:",
            options: [
                "Martín: \"Yo creo que es una anécdota, porque sucede una sola vez\".",
                "Joaquín: \"Es probablemente un reportaje, porque es breve y tiene muchos detalles\".",
                "Ana: \"Para mí es una fábula, porque los personajes tienen a la vez un rol central de tipo animal como los 'Cherokees'\".",
                "Carlos: \"Definitivamente es una leyenda, porque el abuelo ha vivido esa experiencia\".",
                "Gloria: \"Es claramente una autobiografía, porque el abuelo cuenta una experiencia que él ha vivido\"."
            ],
            correct: 3 // D
        },
        {
            id: 47,
            category: "Literatura",
            question: "Fragmento de la obra 'El Caballero Carmelo' (Abraham Valdelomar). ¿A qué tipo de género narrativo pertenece?",
            options: ["Prosa épica", "Prosarelato", "Verso - Cantar de gesta", "Verso-épica", "Verso-relato"],
            correct: 1 // B
        },
        {
            id: 48,
            category: "Economía",
            question: "No es un objetivo de la microempresa o del micro-negocio:\n1. humanístico\n2. comercial\n3. social\n4. espiritual\n5. cooperativo\nSON CIERTAS las que NO son objetivo:",
            options: ["solo 1, 2 y 3", "solo 2, 3 y 5", "solo 1 y 5", "solo 2, 3 y 4", "1, 2, 3, 4 y 5"],
            correct: 2 // C
        },
        {
            id: 49,
            category: "Literatura",
            question: "El género al que pertenece la obra 'Edipo Rey' (de Sófocles) es:",
            options: ["moda temporal", "teatro costumbrista", "diálogo telescópico", "monólogo interior", "teatro excelente"],
            correct: 4 // E (tragedia clásica)
        },
        {
            id: 50,
            category: "Literatura",
            question: "Fragmento de la obra 'Hamlet' (Shakespeare) y preguntas sobre 'Edipo Rey'. Son ciertas:\n1. Edipo es el reflejo de valentía al poder elegir y no morir pronto.\n2. Edipo guarda la esperanza de un mejor lugar dentro de sí mismo.\n3. El hombre puede morir con nobleza.\n4. El hombre puede morir sin deshonrar a la humanidad.\n5. El hombre posee una ciudad interna donde puede gobernar por sí mismo.",
            options: ["solo 1, 3 y 5", "solo 1, 4 y 5", "solo 3 y 5", "solo 1, 2 y 4", "1, 2, 3, 4 y 5"],
            correct: 2 // C
        },
        {
            id: 51,
            category: "Literatura",
            question: "Sobre la biografía de 'El Ingenioso Hidalgo Don Quijote de la Mancha'. Son correctas (afirmaciones dadas en el texto):",
            options: ["1, 2, 3", "1, 3, 4", "2, 4, 5", "3, 4, 5", "1 y 5"],
            correct: 3 // D
        },
        {
            id: 52,
            category: "Comunicación",
            question: "La enfermedad que padece la persona en la lectura (asumido: la gripe) tiene el sinónimo alterno de:",
            options: ["catarral", "técnico", "científico", "ordinario", "religioso"],
            correct: 2 // C
        },
        {
            id: 53,
            category: "Literatura",
            question: "El principal riesgo que la sociedad española del siglo XVII que se refleja en la descripción de Hidalgo, anteponiendo el título de la obra, es:",
            options: [
                "La opulencia y riqueza generalizada de la nobleza.",
                "La inmensidad social y el aumento de deudas.",
                "El interés por la innovación tecnológica y científica.",
                "La inestabilidad social y la ausencia de clases.",
                "El fervor religioso y la fatiga moralística."
            ],
            correct: 1 // B
        },
        {
            id: 54,
            category: "Lenguaje",
            question: "Con respecto a la palabra 'sin embargo' el sinónimo alterno es:",
            options: ["no obstante", "así que", "no obstante, y también cuando", "es un conector de causa", "es un conector de ejemplificación"],
            correct: 0 // A
        },
        {
            id: 55,
            category: "Comunicación",
            question: "Sobre el texto anterior referido a la gripe, es afirmativo:\n1. Es expositivo.\n2. Presenta más de una idea principal.\n3. Aborda diferentes aspectos sobre la 'gripe'.\n4. No es coherente porque no presenta unidad textual.\n5. Posee una estructura simple que se propaga rápidamente en forma de epidemia.\nSON CIERTAS:",
            options: ["solo 1, 2", "1, 3, 4", "1, 4", "4, 2 y 3", "1, 3, 5"],
            correct: 4 // E
        },
        {
            id: 56,
            category: "Lenguaje",
            question: "En el contexto de las complicaciones de la gripe, ¿cuál es el nexo de la primera oración con la segunda alternancia?",
            options: ["sin embargo, así que", "luego, entonces", "luego, por lo tanto", "no obstante, sin embargo", "así que, ya que"],
            correct: 3 // D
        },
        {
            id: 57,
            category: "Comunicación",
            question: "La superestructura del texto (sobre la gripe) es:",
            options: ["expositivo", "argumentativo", "narrativo", "descriptivo", "alternativo"],
            correct: 0 // A
        },
        {
            id: 58,
            category: "Lenguaje",
            question: "Las palabras en negritas y subrayadas en el texto (nexos) corresponden respectivamente al:",
            options: [
                "causal - consecuencia - ejemplificación - contraste - temporal",
                "causa - consecuencia - justificación - contraste - temporal",
                "temporal - causal - contraste - consecuencia - causa",
                "condicional - consecuencia - consecuencia - orden - disyuntiva",
                "causa - consecuencia - consecuencia - orden - disyuntiva"
            ],
            correct: 1 // B
        },
        {
            id: 59,
            category: "Comunicación",
            question: "Dado que la constante cósmica es un error, se deduce que el universo es:",
            options: ["estático", "dinámico", "errático", "finito", "perdurable"],
            correct: 1 // B
        },
        {
            id: 60,
            category: "Comunicación",
            question: "Por su estructura, el párrafo anterior es:",
            options: [
                "deductivo - inductivo",
                "inductivo - deductivo",
                "de idea principal múltiple",
                "de idea principal implícita",
                "de idea principal"
            ],
            correct: 0 // A
        },
        {
            id: 61,
            category: "Comunicación",
            question: "El tema central de la lectura referida a la meteorización es:",
            options: [
                "La meteorización y sus efectos.",
                "La desintegración física por el aire y el agua de las rocas.",
                "Los diversos factores de la meteorización de las rocas.",
                "Las causas y consecuencias de la meteorización.",
                "La situación climática mundial."
            ],
            correct: 2 // C
        },
        {
            id: 62,
            category: "Lenguaje",
            question: "CRUJIENTE, VIVIENDO Y PINTAR, corresponden respectivamente a las formas no personales del verbo en:",
            options: ["infinitivo", "gerundio", "participio activo", "participio pasivo", "participio, gerundio, infinitivo"],
            correct: 4 // E: participio, gerundio, infinitivo
        },
        {
            id: 63,
            category: "Lenguaje",
            question: "CRUJIENTE, VIVIENDO Y PINTAR, corresponden respectivamente a las formas no personales del verbo en:",
            options: ["participio, infinitivo, gerundio", "gerundio, participio, infinitivo", "infinitivo, gerundio, infinitivo", "participio, gerundio, participial", "participio, gerundio, potencial"],
            correct: 0 // A
        },
        {
            id: 64,
            category: "Lenguaje",
            question: "\"En el cielo húmedo me abro sus manos las hojas secas\". Los elementos subrayados son adjetivos en grado:",
            options: ["superlativo", "negativo", "positivo", "indefinido", "comparativo"],
            correct: 2 // C
        },
        {
            id: 65,
            category: "Lenguaje",
            question: "\"Tu dibujo es mejor que el mío, pero tú crees que es superior a todos\". Podemos señalar:",
            options: [
                "Dos adjetivos en grado positivo",
                "Dos adjetivos en grado comparativo",
                "Un adjetivo en grado superlativo y otro superlativo",
                "Un adjetivo interrogativo",
                "Dos adjetivos"
            ],
            correct: 1 // B
        },
        {
            id: 66,
            category: "Comunicación",
            question: "En el enunciado, \"La maestra de comunicación, ha roto la cuerda que une sus manos\". El canal de la comunicación es (el):",
            options: ["la maestra", "el aire", "las manos", "la escuela", "la luz"],
            correct: 1 // B
        },
        {
            id: 67,
            category: "Comunicación",
            question: "En la situación comunicativa donde: \"el árbitro ha suspendido a los jugadores, necesita de una penalidad de palabra para cobrar un penal...\". Señale que no es un elemento de la comunicación:",
            options: ["el árbitro", "el público", "el silencio", "los jugadores", "el fútbol"],
            correct: 4 // E
        },
        {
            id: 68,
            category: "Comunicación",
            question: "En la situación comunicativa: \"Don Tomás, le pones a Ana una fruta en la mano, pero el proceso comunicativo falló porque:",
            options: [
                "Don Tomás no empleó el código correcto.",
                "el mensaje no fue el adecuado.",
                "el mensaje fue bien formulado.",
                "el código no tuvo en cuenta el contexto.",
                "el padre no tuvo en cuenta el mensaje."
            ],
            correct: 0 // A
        },

        // --- INGLÉS ---
        {
            id: 69,
            category: "Inglés",
            question: "El antónimo de la palabra \"oportunidades\" en el contexto del texto es:",
            options: ["posibilidades", "ventajas", "beneficios", "privilegios", "dificultades"],
            correct: 4 // E
        },
        {
            id: 70,
            category: "Inglés",
            question: "El sinónimo contextual de la palabra \"privileges\" subrayada en el texto es:",
            options: ["facilidades", "ingresos", "intereses", "aptitudes", "productivas"],
            correct: 0 // A
        },
        {
            id: 71,
            category: "Inglés",
            question: "Contexto sobre Edison Valverde. Where is he from?",
            options: ["He is from Piura", "He is from Peru", "Edison is tall and handsome", "Edison is twelve", "He is best friend"],
            correct: 1 // B
        },
        {
            id: 72,
            category: "Inglés",
            question: "Complete the text with the correct possessive adjective. This is ___ best friend.",
            options: ["our - my - his - outs", "any - my - her - she", "my - any - the - their", "our - my - my - ours", "a - he - his - our"],
            correct: 2 // C (my)
        },
        {
            id: 73,
            category: "Inglés",
            question: "Contexto sobre Gary. Does Gary have a great time together every weekend?",
            options: ["No, he doesn't.", "Yes, he does.", "He always does exercise.", "He has a small apartment.", "Yes, he likes the gym."],
            correct: 1 // B
        },
        {
            id: 74,
            category: "Inglés",
            question: "Read carefully and answer the question. Everybody enjoys Today is New Year. (Selecciona la secuencia correcta de preposiciones)",
            options: ["in - in - at - in - in", "at - in - at - in - in", "at - at - in - at - at", "in - at - in - on - on", "on - in - at - in - in"],
            correct: 4 // E
        },
        {
            id: 75,
            category: "Inglés",
            question: "What is there on the dinner table at New Year?",
            options: [
                "There are turkey meat, sparkling wine, and grapes.",
                "They buy new clothes and presents.",
                "Food.",
                "There are firecrackers, decoration items and goods.",
                "There isn't a table."
            ],
            correct: 0 // A
        },
        {
            id: 76,
            category: "Inglés",
            question: "Contexto sobre 'Red Riding Hood'. Which sentence is false based on the story?",
            options: [
                "Red Riding Hood went to visit her grandmother.",
                "The wolf was friendly and helped Red Riding Hood.",
                "The wolf locked the grandmother in a closet.",
                "The lumberjack saved Red Riding Hood and her grandmother.",
                "The wolf ran away and did not come back."
            ],
            correct: 1 // B
        },

        // --- MATEMÁTICA ---
        {
            id: 77,
            category: "Matemática",
            question: "Un ánfora contiene esferas de color rojo, azul y blanco. En promedio, el 40% de las esferas son rojas y el 30% son azules... El porcentaje, respecto al total, que representa las esferas rojas, es:",
            options: ["16 %", "18 %", "20 %", "22 %", "24 %"],
            correct: 2 // C
        },
        {
            id: 78,
            category: "Matemática",
            question: "Si el siguiente argumento (~p ∧ q) → (p → r) es inválido. Entonces:",
            options: ["~r", "~q", "~p", "p", "r"],
            correct: 0 // A
        },
        {
            id: 79,
            category: "Matemática",
            question: "La cantidad de toneladas que produce el trapiche de Laredo, en los dos meses mejores, es:",
            options: ["75", "76", "77", "78", "79"],
            correct: 0 // A (asumida)
        },
        {
            id: 80,
            category: "Matemática",
            question: "La cantidad de toneladas que produce el trapiche de Cartavio en los dos meses mejores, es:",
            options: ["100", "101", "102", "103", "104"],
            correct: 2 // C (asumida)
        },
        {
            id: 81,
            category: "Matemática",
            question: "Si la expresión 329y es divisible entre 2, entonces, la cantidad de valores que puede tomar \"y\" es:",
            options: ["6", "5", "4", "3", "2"],
            correct: 1 // B (0,2,4,6,8)
        },
        {
            id: 82,
            category: "Matemática",
            question: "La cantidad de números de la forma 329x que es divisible entre 3 y 4 es:",
            options: ["43", "44", "45", "46", "47"],
            correct: 1 // B (asumida)
        },
        {
            id: 83,
            category: "Matemática",
            question: "En un sistema de numeración \"n\" se sabe que VVVₙ → VVV₃₂. Respectivamente son:",
            options: ["V V V", "V V T", "V Y V", "V Y T", "V F F"],
            correct: 0 // A (asumida)
        },
        {
            id: 84,
            category: "Matemática",
            question: "La edad de Margarita es:",
            options: ["20", "25", "30", "35", "40"],
            correct: 1 // B (asumida)
        },
        {
            id: 85,
            category: "Matemática",
            question: "La edad de Mayela es:",
            options: ["20", "25", "30", "35", "40"],
            correct: 2 // C (asumida)
        },
        {
            id: 86,
            category: "Matemática",
            question: "Los puntos A, B, C y D son ubicados consecutivamente en una recta, de modo que BC = 10 y AC + BD = 40. Entonces, la medida de AD es:",
            options: ["22", "23", "24", "25", "26"],
            correct: 2 // C (asumida)
        },
        {
            id: 87,
            category: "Matemática",
            question: "El valor máximo aproximado del radio en cm, que cumple con la restricción del volumen es:",
            options: ["10.4", "11.3", "12.6", "13.8", "15.8"],
            correct: 1 // B (asumida)
        },
        {
            id: 88,
            category: "Matemática",
            question: "Si 1 + (3 - 1)/2 + (5 - 1)/4 + ... + (2n - 1)/2^{n-1} = 1 + 997/1996. Entonces, el valor de \"n\" es:",
            options: ["1996", "1997", "1998", "1999", "2000"],
            correct: 1 // B (asumida)
        },

        // --- CIENCIA Y TECNOLOGÍA / BIOLOGÍA / QUÍMICA / FÍSICA ---
        {
            id: 89,
            category: "Física",
            question: "El valor máximo aproximado del radio en cm, que cumple con la restricción del volumen es:",
            options: ["20.180", "21.286", "21.306", "22.306", "22.308"],
            correct: 2 // C (asumida)
        },
        {
            id: 90,
            category: "Matemática",
            question: "El número de formas distintas que se puede obtener la primera situación de ganar es:",
            options: [
                "2πr² ≤ 5000",
                "2πr² = 5000",
                "2πr² ≥ 5000",
                "πr² ≤ 5000",
                "πr² = 5000"
            ],
            correct: 0 // A (asumida)
        },
        {
            id: 91,
            category: "Matemática",
            question: "La expresión que representa la situación es:",
            options: ["20", "25", "30", "35", "40"],
            correct: 2 // C (asumida)
        },
        {
            id: 92,
            category: "Matemática",
            question: "Un fabricante de envases cilíndricos desea diseñar un recipiente que tenga una capacidad máxima... La expresión que representa la situación es:",
            options: [
                "2πr² ≤ 5000",
                "2πr² = 5000",
                "2πr² ≥ 5000",
                "πr² ≤ 5000",
                "πr² = 5000"
            ],
            correct: 0 // A (asumida)
        },
        {
            id: 93,
            category: "Biología",
            question: "En este contexto, Lázaro Spallanzani es:",
            options: ["Químico", "Bioquímico", "Biólogo", "Fisiológico", "Cirujano"],
            correct: 2 // C
        },
        {
            id: 94,
            category: "Biología",
            question: "Fueron coetáneos y contrarios de Spallanzani:\n1. Pasteur\n2. Redi\n3. Needham\n4. Boyle\n5. Cock\nSON CIERTAS:",
            options: ["1, 2 y 3", "2, 4 y 5", "1, 3 y 4", "3, 4 y 5", "3 y 5"],
            correct: 4 // E
        },
        {
            id: 95,
            category: "Biología",
            question: "En las plantas superiores se encuentran órganos de reserva para guardar sus tallos en las hojas o raíces. El órgano mencionado en el texto corresponde a la (el):",
            options: ["tallo.", "el fruto.", "la raíz.", "la hoja.", "la semilla."],
            correct: 2 // C
        },
        {
            id: 96,
            category: "Biología",
            question: "La definición correcta de fruto en las plantas superiores, es:",
            options: [
                "El evento fecundado y desarrollado.",
                "El estigma del gineceo transformado y maduro.",
                "El estilo modificado.",
                "El fruto polinizado y desarrollado.",
                "El ovario desarrollado, transformado y maduro."
            ],
            correct: 4 // E
        },
        {
            id: 97,
            category: "Química",
            question: "La fórmula molecular del compuesto (amida: N-metilpentanamida, CH3-(CH2)3-CO-NH-CH3) es:",
            options: ["C6H13O2", "C6H13NO", "C6H13NO2", "C6H12O", "C6H13O3"],
            correct: 1 // B: C6H13NO
        },
        {
            id: 98,
            category: "Química",
            question: "El nombre de la siguiente amida según la IUPAC, es: (CH3-CH2-CO-NH-CH3).",
            options: ["N-etilpropilamida", "N-metilpropanamida", "butanamida", "N-etilbutanamida", "2-oxibutanamida"],
            correct: 1 // B: N-metilpropanamida
        },
        {
            id: 99,
            category: "Química",
            question: "El nombre de la siguiente amida según la IUPAC, es: (CH3-CH2-CH2-CH2-CO-N(CH3)2).",
            options: [
                "N-metil-N-etil-4-metilhexanamida",
                "N-etil-N-metil-3-butilpropanamida",
                "N-etil-N-metil-4-metilhexanamida",
                "N,N-dimetil-N-etilhexanamida",
                "N,N-dimetilhexanamida"
            ],
            correct: 4 // E: N,N-dimetilhexanamida
        },
        {
            id: 100,
            category: "Física",
            question: "El trabajo neto, en Joules, que realiza desde A hasta B, es:",
            options: ["680", "720", "740", "760", "800"],
            correct: 0 // A
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
