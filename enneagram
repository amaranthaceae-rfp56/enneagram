--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: descriptions; Type: TABLE; Schema: public; Owner: cmoralespv
--

CREATE TABLE public.descriptions (
    id integer NOT NULL,
    etype smallint NOT NULL,
    name_english character varying(30) NOT NULL,
    name_spanish character varying(30) NOT NULL,
    summary_english character varying(1000),
    summary_spanish character varying(1000)
);


ALTER TABLE public.descriptions OWNER TO cmoralespv;

--
-- Name: descriptions_id_seq; Type: SEQUENCE; Schema: public; Owner: cmoralespv
--

CREATE SEQUENCE public.descriptions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.descriptions_id_seq OWNER TO cmoralespv;

--
-- Name: descriptions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cmoralespv
--

ALTER SEQUENCE public.descriptions_id_seq OWNED BY public.descriptions.id;


--
-- Name: questions; Type: TABLE; Schema: public; Owner: cmoralespv
--

CREATE TABLE public.questions (
    question_id integer NOT NULL,
    etype smallint NOT NULL,
    english character varying(500) NOT NULL,
    spanish character varying(500) NOT NULL
);


ALTER TABLE public.questions OWNER TO cmoralespv;

--
-- Name: questions_question_id_seq; Type: SEQUENCE; Schema: public; Owner: cmoralespv
--

CREATE SEQUENCE public.questions_question_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.questions_question_id_seq OWNER TO cmoralespv;

--
-- Name: questions_question_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cmoralespv
--

ALTER SEQUENCE public.questions_question_id_seq OWNED BY public.questions.question_id;


--
-- Name: descriptions id; Type: DEFAULT; Schema: public; Owner: cmoralespv
--

ALTER TABLE ONLY public.descriptions ALTER COLUMN id SET DEFAULT nextval('public.descriptions_id_seq'::regclass);


--
-- Name: questions question_id; Type: DEFAULT; Schema: public; Owner: cmoralespv
--

ALTER TABLE ONLY public.questions ALTER COLUMN question_id SET DEFAULT nextval('public.questions_question_id_seq'::regclass);


--
-- Data for Name: descriptions; Type: TABLE DATA; Schema: public; Owner: cmoralespv
--

COPY public.descriptions (id, etype, name_english, name_spanish, summary_english, summary_spanish) FROM stdin;
2	1	The Organizer	El Orgainzador	\N	\N
3	2	The Helper	El Servidor	\N	\N
4	3	The Achiever	El Realizador	\N	\N
5	4	The Creative	El Creador	\N	\N
6	5	The Observer	El Observador	\N	\N
7	6	The Collaborator	El Colaborador	\N	\N
8	7	The Encourager	El Entusiasta	\N	\N
9	8	The Resolute	El Luchador	\N	\N
10	9	The Peacemaker	El Pacificador	\N	\N
\.


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: cmoralespv
--

COPY public.questions (question_id, etype, english, spanish) FROM stdin;
1	1	Usually, an imperfection ruins the whole	A menudo el defecto final arruina el conjunto
2	1	Usually, I am bothered by things not going the way they should	A menudo me molesta que las cosas no marchen como debieran
3	1	Usually, I feel that time flies and there is too much left to do	A menudo me siento que el tiempo pasa rápido y que queda demasiado por hacer
4	1	Sometimes I feel that I am somewhat prude	A veces siento en mí mismo un toque puritano
5	1	I almost feel compelled to be an honest person	Casi me siento obligado a ser una persona honrada
6	1	I frequently get angry at myself for not doing things better	Con frecuencia me enfado conmigo mismo por no hacer mejor las cosas
7	1	I frequently feel frustrated that neither I nor others are the way we should be	Con frecuencia me siento frustrado porque ni yo ni los demás somos como debiéramos
8	1	Frequently, my self-criticism and the criticism of others abound within my head	Con frecuencia mis propias críticas y las de otros pululan en mi cabeza
9	1	Contact with nature helps me relax	EI contacto con la naturaleza me ayuda a relajarme
10	1	I can easily be or become scrupulous	Es fácil que sea, o llegue a ser, una persona escrupulosa
11	1	People have trusted me because I am fair and do what is right	La gente ha confiado en mí porque soy una persona justa y hago lo que es correcto
12	1	It is difficult for me to relax and be joyful	Me cuesta relajarme y estar alegre
13	1	I feel that I have to be perfect for others to love me or accept me	Me da la sensación que tengo que ser perfecto para que otros me amen o quieran
14	1	I get angry when others don’t listen to what I have to say to them	Me enojo cuando los demás no escuchan lo que tengo para decirles
15	1	I can easily identify myself with those who fight against evil	Me es fácil identificarme con los que luchan contra el mal
16	1	I try hard to amend my mistakes	Me esfuerzo mucho por corregir mis faltas
17	1	I have felt proud of sticking to my points of view, I am firm and coherent with my beliefs	Me he sentido orgulloso de mantener mis puntos de vista, soy firme y congruente con lo que creo
18	1	Wasting money bothers me	Me molesta malgastar el dinero
19	1	I almost feel compelled to improve myself and the things I do	Me siento casi obligado a mejorarme a mí mismo y lo que hago
20	1	My sense of duty makes me sacrifice my rest and leisure time	Mi sentido del deber me lleva a sacrificar el tiempo dedicado al ocio y al descanso
21	1	Usually, I have been too inflexible and demanding with other people	Normalmente he sido una persona demasiado intransigente y exigente con los demás
22	1	I immediately notice if something does not work or is misplaced	Noto enseguida si algo no funciona o está fuera de lugar
23	1	It is important to me to act correctly	Para mí es importante actuar correctamente
24	1	It seems that I worry more than others	Parece que me preocupo más que otros
25	1	It seems I see everything in terms of right or wrong, good or bad	Parece que veo todo en términos de correcto o equivocado, bueno o malo
26	1	If something is not right, it really irritates me	Si algo no está bien, realmente me molesta
27	1	I feel the need to be make myself responsible for most of my own time	Siento la necesidad de hacerme responsable de la mayor parte de mi tiempo
28	1	I am methodical and organized	Soy una persona metódica y organizada
29	1	I tend to take care of detail, order and precision	Tiendo a cuidar los detalles, el orden y la precisión
30	2	Usually, there are people that come to me asking for my comfort and advise	A menudo hay personas que se me acercan pidiéndome que las conforte y las aconseje
31	2	Sometimes I feel like the victim of others, as if I was being used by them	A veces me siento victima de otros, como si me utilizasen
32	2	I have frequently been possessive with my loved ones	Con frecuencia he sido posesivo con mis seres queridos
33	2	Because of all that I have done for some people, I believe that I deserve to be on the top of their lists	Creo que merezco estar en primer término en la vida de algunos, por todo lo que he hecho por ellos
34	2	I believe that I am a person that teaches	Creo que soy una persona que educa
35	2	I usually use my free time to help others	Cuando tengo tiempo libre, me dedico con frecuencia a ayudar a los demás
36	2	I am rigorous at fulfilling my duty with another person	Cumplo rigurosamente con otra persona
37	2	There are many people who depend on my help and generosity	Hay muchas personas que dependen de mi ayuda y generosidad
38	2	I have tried to avoid people seeing me as selfish	He intentado que no me vean como a una persona egoísta
39	2	People have been drawn to me because I am extroverted and I interest and commit myself to them	Los demás se han interesado en mí porque soy extrovertido y me intereso y comprometo por ellos
40	2	I communicate with my friends more often than they communicate with me	Me comunico con mis amigos más a menudo de lo que ellos se comunican conmigo
41	2	I like to take care of others	Me gusta cuidar a los demás
42	2	I like it when people need me	Me gusta que la gente me necesite
43	2	I like to rescue people that are in trouble or in embarrassing situations	Me gusta rescatar a las personas que veo que están en apuros o en situaciones embarazosas
44	2	I like to feel close to people	Me gusta sentirme próximo a las personas
45	2	I have been inclined to act based on my feelings	Me he inclinado a actuar, basándome en mis sentimientos
46	2	Emotional problems are very important to me	Me importan mucho los problemas emocionales
47	2	I show myself more worried about others than what I really am	Me muestro ante los demás como una persona más preocupada por ellos de lo que realmente estoy
48	2	I feel compelled to help others, whether they like it or not	Me siento obligado a ayudar a otras personas, les guste o no
49	2	Because of my attitude of active dedication towards service, I place all my time and effort at the service of others	Mi actitud de servicio me lleva a una dedicación activa, poniendo todo mi tiempo y esfuerzo
50	2	My desire to help others has taken a toll on my health and wellbeing	Mi deseo de ayudar ha repercutido en mi propia salud y bienestar
51	2	There are many times I feel overwhelmed because of how other people depend on me	Muchas veces me encuentro sobrecargado por la dependencia de otros respecto de mí
52	2	In order to feel alive, I need to be in contact with other people	Necesito contacto con los demás para sentirme vivo
53	2	I need to be important in the lives of other people	Necesito ser importante en la vida de otras personas
54	2	I don't believe I have many needs	No creo tener muchas necesidades
55	2	I don't like it when other people set their boundaries with me	No me gusta que me pongan límites
56	2	I don't mind sacrificing myself for others as long as I make them happy	No me importa sacrificarme por los demás, con tal de hacerlos felices
57	2	I don't try to impose my ideas upon others, but if I do, I do it for their wellbeing	No trato de imponer mis ideas a los demás, pero si lo hago es por su bien
58	2	I place more interest in serving others than on any other thing	Pongo mas interés en servir a los demás que en cualquier cosa
59	3	I believe that appearances are important	Creo que las apariencias son importantes
60	3	I believe I need to have many achievements in order for others to appreciate me	Creo que necesito lograr muchas cosas para que los demás me aprecien
61	3	Even if I don’t like someone, I usually try to be kind to that person in spite of my feelings	Cuando alguien no me cae bien, normalmente he intentado ser cordial a pesar de mis sentimientos
62	3	I have avoided intimacy whenever I have felt the needs and demands of others would be overwhelming	Cuando he temido que las necesidades y demandas de los demás me superasen, he evitado la intimidad
63	3	Whenever I look back at my past, I am more prone to remember the things I did right than those I did wrong	Cuando miro mi pasado suelo recordar más, lo que hice bien, que lo que hice mal
64	3	In general I prefer to get involved in the execution of an operation than to oversee its progress	En general, prefiero estar implicado en el desarrollo de una operación que observar como marcha
65	3	Many of my successes were a result of my capacity to give a good impression	Gran parte de mis éxitos se debieron a mi capacidad de dar una buena impresión
66	3	I have been a very motivated and ambitious person	He sido una persona ambiciosa y muy motivada
67	3	Adversity has made me strong and resolved	La adversidad me ha hecho una persona más dura y resuelta
68	3	First impressions are very important	Las primeras impresiones son muy importantes
69	3	I don't like it when people tell me that what I am doing is not good	Me disgusta que me digan que no marcha bien lo que estoy haciendo
70	3	I like to play the leading role	Me gusta ser protagonista
71	3	I like to have clear goals and I like to know where I am at with respect to achieving those goals	Me gusta tener objetivos claros y saber en qué punto del camino hacia esos objetivos me encuentro
72	3	I like to work in teams and be a good team player	Me gusta trabajar en equipo y ser un buen miembro del mismo
73	3	I like workflows, benchmarks and other indicators of my performance	Me gustan los diagramas de procesos, los grados y otros indicadores acerca de cómo me desenvuelvo
74	3	I have tried hard for others to accept me and love me	Me he esforzado mucho para que los demás me acepten y quieran
75	3	I have felt proud of my capacity to be flexible	Me he sentido orgulloso de mi capacidad para ser flexible
76	3	I identify myself with precision and professionalism	Me identifico con la precisión y la profesionalidad
77	3	I identify myself so much with my job role that I forget who I am	Me identifico tanto con mi trabajo o rol que me olvido de quién soy
78	3	I find that organizing and concluding tasks comes natural to me	Me parece natural ser capaz de organizar cosas y terminarlas
79	3	My values and lifestyle have changed several times throughout the years	Mis valores y estilo de vida han cambiado varias veces a lo largo de los años
80	3	I don’t like it when others waste my time	No me gusta que me hagan perder el tiempo
81	3	Other people envy me because I do many things	Otras personas me envidian porque hago muchas cosas
82	3	Sometimes, to achieve success it is necessary to overlook my own rules	Para lograr el éxito, a veces hay que poner entre paréntesis las propias normas
83	3	It is very important to me to project a successful image	Para mí es muy importante proyectar una imagen triunfadora
84	3	Taking decisions is not an issue for me	Para mí no es problema tomar decisiones
85	3	I am seen by others as confident and determined	Soy visto por los demás como una persona segura y decidida
86	3	I tend to be entrepreneurial and goal-oriented, and strongly motivated	Tiendo a ser una persona emprendedora y realizadora, con fuertes motivaciones
87	3	I live with a certain amount of stress because I set myself to many goals	Vivo con cierta tensión porque me propongo demasiados objetivos
88	4	I frequently show a smile, even when I am feeling sad inside	Con frecuencia muestro un rostro sonriente aunque por dentro me sienta triste
89	4	Frequently, other people lack the ability to understand my feelings	Es frecuente que otras personas carezcan de capacidad para comprender mis sentimientos
90	4	Generally, I have done what I wanted to do	Habitualmente he hecho lo que quería hacer
91	4	Most people do not appreciate the authentic beauty of life	La mayoría de la gente no aprecia la auténtica belleza de la vida
92	4	Most people don’t have the strong feelings I have	La mayoría de la gente no tiene sentimientos profundos como los míos
93	4	For me, the arts and crafts are a very important means of channeling my emotions	Las artes y la expresión artística son muy importantes para mí como medio para canalizar emociones
94	4	I idealize people when they are far away	Idealizo a las personas cuando están lejos
95	4	Other people have been interested in me because I am a calm, original and profound person	Los demás se han interesado en mí porque soy tranquilo, original y profundo
96	4	I am accused of being distant	Me acusan de ser distante
97	4	I am accused of being dramatic, but in reality, I am not understood	Me acusan de ser dramático, pero en realidad no me comprenden
98	4	I consider myself a special person	Me considero una persona especial
99	4	I get the feeling that I easily take ownership of a group’s sentiment in such a manner that I frequently lose the sense of where my own emotions end and where the emotions of others begin	Me da la sensación de que me apropio con facilidad de los sentimientos de un grupo, de tal manera que, con frecuencia pierdo el sentido de donde acaban mis propios sentimientos y donde comienzan los de los demás
100	4	I find myself living through ups and downs: either feeling very good or very bad.  When I am in the middle, I don’t feel alive	Me encuentro a mí mismo pasando por altibajos: o bien estoy muy elevado o muy bajo.  En el medio no me siento vivo
101	4	I like doing things good and with class	Me gusta hacer las cosas bien y con clase
102	4	I really like going to the theater and dream that I was on stage	Me gusta mucho el teatro y fantaseo como si estuviese en escena
103	4	I like situations that provoke intense and deep sensations	Me gustan las situaciones que provocan sensaciones intensas y profundas
104	4	I have been inclined to be too emotional and not very disciplined	Me he inclinado a ser demasiado emotivo y poco disciplinado
105	4	It seems to me that ending a relationship affects me more than it affects most	Me parece que el fin de una relación me afecta más que a la mayoría
106	4	My desire to attend to my personal needs has had a negative impact on my relationships	Mi deseo de atender mis necesidades personales ha repercutido negativamente en mis relaciones
107	4	My environment is very important to me	Mi medio ambiente es muy importante para mí
108	4	I don’t like to think that I can be vulgar	No me gusta pensar que yo pueda ser vulgar
109	4	Suffering, loss and death can worry me	Puede preocuparme el sufrimiento, la pérdida y la muerte
110	4	I have always been attracted to symbolisms	Siempre me ha atraído el simbolismo
111	4	Manner and good taste are important to me	Son importantes, para mí, las formas y el buen gusto
112	4	I am a person that is prone to nostalgia, melancholy and reliving the past	Soy una persona propensa a la nostalgia, a la melancolía y a revivir el pasado
113	4	I have an almost compulsive nostalgia for my past	Tengo una nostalgia casi compulsiva de mi pasado
114	4	I tend to be inwardly and remain in my own world	Tiendo a ser voluble y a permanecer en mi mundo
115	4	I try to seem natural	Trato de parecer natural
116	4	One of my qualities has been the ability to describe internal states	Una de mis cualidades ha sido la habilidad para describir estados internos
117	5	I usually sit back to observe others instead of getting involved in the action	A menudo me siento atrás para observar a los demás, en lugar de involucrarme en la acción
118	5	It is usually hard for me to reach out or ask for what I need	A menudo, me cuesta, alcanzar o pedir lo que necesito
119	5	When I feel pressured by others, I turn into an elusive person	Ante la presión de los demás me vuelvo una persona huidiza
120	5	When I am angry with myself or at others, I frequently think of me, or them as: foolish, ignorant, shallow, etc..	Cuando estoy enojado conmigo mismo o con otras personas, pienso con frecuencia en mí o en ellas como: tontas, ignorantes, poco profundas, etc..
121	5	On an intellectual level, I like to synthesize and gather different ideas	Desde el punto de vista intelectual, me gusta sintetizar y reunir ideas diferentes
122	5	I generally take a long time to begin or do something	Generalmente me lleva bastante tiempo empezar o hacer algo
123	5	Surprises make me uncomfortable	Las sorpresas me producen malestar
124	5	I have the feeling that I am quieter than most.  People frequently ask me what I am thinking about	Me da la sensación que soy más callado que la mayoría.  La gente me pregunta con frecuencia que pienso
125	5	I make it an effort to have my freedom and independence respected	Me esfuerzo en hacer que se respete mi libertad y mi independencia
126	5	I get annoyed by people that are not logical	Me fastidian las personas que no son lógicas
127	5	I rather work alone than with a team	Me gusta más trabajar sólo, que en equipo
128	5	I like to see things within perspective, take a step backwards and include everything.  If I leave something out, I accuse myself of being simplistic and naive	Me gusta ver las cosas en perspectiva, retroceder e incluirlo todo.  Si dejo algo fuera, me acuso por ser tan simplista e ingenuo
129	5	I have noticed that I am frequently labeled as “too individual”	Me he dado cuenta que, frecuentemente, me catalogan como "demasiado individual"
130	5	I have felt proud of being an objective and clear person	Me he sentido orgulloso de ser una persona objetiva y clara
131	5	I keep what I have and pick up what I may need some day	Me mantengo con lo que tengo y recojo elementos que pueda necesitar algún día
132	5	I keep silent when found in embarrassing situations or when asked how I feel	Me quedo mudo cuando me encuentro en situaciones embarazosas o cuando alguien me pregunta como me siento
133	5	My tone of voice is very soft and I am usually asked to speak louder.  That irritates me	Mi tono de voz es muy suave y a menudo tienen que pedirme que hable más fuerte.  Esto me irrita
134	5	I need a great amount of space and moments alone	Necesito gran cantidad de espacio y de tiempos privados
135	5	I don’t know how to participate in trivial conversations	No sé como participar en conversaciones intrascendentes
136	5	Usually, I prefer to keep my dependence on other people to a minimum	Normalmente prefiero depender lo menos posible de los demás
137	5	I am a cautious and reserved person by nature	Por naturaleza soy una persona cauta y reservada
138	5	I have rarely been emotionally affectionate	Rara vez he sido demasiado expresivo emocionalmente
139	5	If a problem arises, I study it on my own before I discuss it with other people	Si surge un problema, primero lo estudio por mi cuenta y luego lo discuto con los demás
140	5	I usually leave the initiative to others	Suelo dejar la iniciativa a los otros
141	5	I usually keep my feelings to myself	Suelo guardar mis sentimientos para mí
142	5	I tend to be more of a receiver than a donor	Tiendo a ser más receptor que donante
143	5	I tend to be a lonely person	Tiendo a ser una persona solitaria
144	5	I tend to be a stingy with my time, my money and myself	Tiendo a ser una persona tacaña con mi tiempo, mi dinero y mi yo
145	5	I try to resolve my problems by thinking	Trato de resolver mis problemas pensando
146	6	Before I make a decision, I get additional information to be sure that I am prepared	Antes de tomar una decisión, obtengo información adicional para estar seguro que estoy preparado
147	6	Although I usually do what is expected of me, sometimes I rebel	Aunque suelo hacer lo que se espera de mí, a veces suelo revelarme
148	6	I am frequently full of doubts	Con frecuencia estoy lleno de dudas
149	6	I frequently dream about my things as if I would perform the role of a hero 	Con frecuencia fantaseo sobre mi asunto como si desempeñara el papel de héroe
150	6	I frequently find myself evaluating other people based on whether they could pose a threat to me or not 	Con frecuencia me encuentro evaluando a los demás en relación con la posibilidad de que constituyan o no una amenaza para mí
151	6	I usually act with a sense of duty and responsibility	Con frecuencia, suelo actuar con sentido del deber y responsabilidad
152	6	When I am pressured I become irritable and tense	Cuando me presionan me pongo irascible y tenso
153	6	When I feel insecure, I react by becoming stubborn and defensive	Cuando me siento inseguro reacciono volviéndome terco y poniéndome a la defensiva
154	6	Loyalty towards the group is very important to me	Es muy importante para mi la lealtad al grupo
155	6	For me, prudence is a very important virtue	La prudencia es una virtud muy importante para mí
156	6	I feel that I am always fighting my fears	Me da la sensación de que siempre estoy luchando con mis miedos
157	6	It is very difficult for me to go against what is established by authorities	Me es muy difícil ir en contra de lo dispuesto por la autoridad
158	6	I like to be sure before acting	Me gusta estar seguro antes de actuar
159	6	I like that what has to be done be clearly defined	Me gusta que esté delimitado lo que hay que hacer
160	6	It seems to me that I can feel danger and threat more than others	Me parece que siento el peligro y la amenaza más que otras personas
161	6	I usually ask myself if I have enough courage to do what needs to be done	Me pregunto a menudo si tengo suficiente valor para hacer lo que hay que hacer
162	6	Usually my thoughts have been practical in my intention to get things moving forward	Normalmente mis pensamientos han sido prácticos en el intento de conseguir que las cosas sigan adelante
163	6	I usually have not trusted too much in myself	Normalmente no he confiado demasiado en mí mismo
164	6	It has been more important for me to have certainty than to pursue my own interests	Para mí ha sido más importante disfrutar de la seguridad que desarrollar mis propios intereses
165	6	I think about matters for a long time because I need to fully explore all the different options	Pienso durante mucho tiempo porque necesito explorar exhaustivamente las diversas opciones
166	6	I prefer that things have a beginning and an end rather than leaving them open-ended	Prefiero que las cosas tengan establecido el principio y el fin a que se dejen abiertas en su realización
167	6	I can sacrifice my independence as long as that will make me feel safe	Prefiero sacrificar mi independencia con tal de sentirme seguro
168	6	It is difficult to say what people need to do without strict laws	Sin leyes estrictas, es difícil decir lo que tienen que hacer las personas
169	6	Above all, I have been a pragmatic and realistic person	Sobre todo he sido una persona pragmática y realista
170	6	I am a good collaborator and people can trust me	Soy un buen colaborador y los demás pueden fiarse de mí
171	6	Basically, I am a moderate person	Soy, básicamente, una persona moderada
172	6	I am easily aware of contradictions and very sensitive to them	Suelo ser consciente de las contradicciones y soy muy sensible a ellas
173	6	I have the feeling that defending myself and my stance worries me more than it worries others	Tengo la sensación de que me preocupo más que otras personas de defenderme a mí mismo o a mí posición
174	6	I tend to divide the world in sides and I worry about which side people are on	Tiendo a dividir el mundo en bandos y me preocupa de qué lado están las personas
175	7	Some people consider me superficial	Algunas personas me consideran superficial
176	7	When I am introduced to someone, I am usually an entertaining and affectionate person	Cuando me presentan a alguien, suelo ser una persona entretenida y afectuosa
177	7	There are a few things in life I don't enjoy	En la vida hay pocas cosas que no disfrute
178	7	There are days in life which can be marvelous and others which can be unbearable	Hay días en que la vida es maravillosa y otros en que resulta insoportable
179	7	I have been overly trusting and permissive with myself	He sido una persona demasiado confiada y permisiva conmigo misma
180	7	People usually think of me as the soul of social gatherings	La gente suele pensar que soy el alma de las reuniones
181	7	Most of the time I avoid dedicating my time to serious problems	La mayor parte del tiempo evito dedicarme a problemas graves
182	7	Things always work out in the best possible way	Las cosas siempre funcionan de la mejor manera posible
183	7	I like to encourage people	Me gusta animar a la gente
184	7	I almost always like everything I find	Me gusta casi todo lo que encuentro
185	7	I like to evaluate the cosmic ramifications of the facts and the universal importance of that which occurs	Me gusta considerar las ramificaciones cósmicas de los hechos, la importancia universal de lo que ocurre
186	7	I like to be a storyteller	Me gusta contar relatos
187	7	I like to do nice things	Me gusta hacer cosas bonitas
188	7	I like to be seen happy	Me gusta que los demás me vean contento
189	7	I like to enjoy life	Me gusta saborear la vida
190	7	I like to feel like playful and childish person	Me gusta sentirme una persona juguetona, infantil
191	7	I would like it if others were more willing in regards to everything	Me gustaría que los demás estuviesen mejor dispuestos respecto a todo
192	7	I have been appreciated for my unbreakable spirit and my great sense of humor	Me han apreciado por mi inquebrantable espíritu y mi gran sentido del humor.
193	7	I have been inclined, above all, to risk and adventure	Me he volcado, sobre todo, hacia el riesgo y la aventura
194	7	I easily forget that which causes me pain	Me olvido fácilmente de lo que me produce dolor
195	7	It is difficult for me to accept long-term commitments	Me resulta difícil aceptar compromisos a largo plazo
196	7	My theory is that if something is good, the more the better	Mi teoría es que si algo es bueno, más es mejor
197	7	I don't think it is good to feel gloomy for a long time	No creo que sea bueno estar triste mucho tiempo
198	7	It seems that I am less suspicious than others when it comes to other people and their motives	Parece que soy menos suspicaz que otras personas respecto de los demás y sus motivos
199	7	I remember my childhood as a happy phase of my life	Recuerdo mi infancia como una etapa feliz
200	7	If I have to choose between something new and something I already know, I tend to choose the new	Si tengo que elegir entre algo nuevo y algo conocido, tiendo a escoger lo nuevo
201	7	I tend to see the good side of things and put aside the negative aspect of life	Suelo fijarme en el lado bueno de las cosas y dejar de lado el aspecto negativo de la vida
202	7	I usually move from one thing to another, instead of delving into one	Suelo pasar de una cosa a otra, en vez de profundizar en una sola
203	7	I am usually enthusiastic about the future	Suelo ser muy entusiasta en cuanto al futuro
204	8	Sometimes I have irritated others for being too aggressive	A veces he irritado a los demás por ser una persona demasiado agresiva
205	8	Frequently, the points of view of other people don’t interest me	Con frecuencia el parecer de los demás no me interesa
206	8	For me, control is a key word	Control es una palabra clave para mí
207	8	I believe that other people create their own problems	Creo que los demás se crean sus propios problemas
208	8	I think I am a good worker	Creo que soy un buen trabajador
209	8	When I don’t feel good, I isolate myself	Cuando no me siento bien, me aíslo
210	8	I enjoy the exercise of power	Disfruto en el ejercicio del poder
211	8	I generally don’t worry too much about introspection or self-analysis	En general no me ocupo demasiado de la introspección, ni del autoanálisis
212	8	I have had to be strong for others and have had no time to observe my own feelings and fears	He tenido que ser fuerte para los demás, por lo que no he tenido tiempo para ver mis sentimientos y miedos
213	8	I get bored easily and like to move on	Me aburro con facilidad y me gusta moverme
214	8	It is difficult for me to let things run their course	Me cuesta dejar que las cosas sigan su curso
215	8	I am good at sticking to what I want and fighting for it	Me desenvuelvo muy bien manteniendo lo que quiero y luchando por ello
216	8	I can tell where power resides in a group	Me doy cuenta de donde reside el poder en un grupo
217	8	I can quickly identify the weaknesses of others and attack them if provoked	Me doy cuenta rápidamente de los puntos débiles de los demás y los ataco si me provocan
218	8	I show myself to others as stiffer than what I really am	Me muestro ante los demás como una persona más dura de lo que realmente soy
219	8	I can easily show my dissatisfaction	Me resulta fácil expresar mi insatisfacción
220	8	It doesn’t scare me to confront others and I do so	No me asusta enfrentarme con otros y lo hago
221	8	I don’t like to get cornered	No me gusta estar arrinconado
222	8	I don’t like being told to adapt or to conform	No me gusta que me digan que me adapte o me conforme
223	8	I can’t stand those people who change masks in accordance to their convenience	No soporto a quien cambia de ropas en función de las conveniencias
224	8	Normally, I can easily get worked up, I speak a lot, and am very demanding	Normalmente he sido una persona excitable, habladora y muy exigente
225	8	Normally, I worry about people taking advantage of me when I lower my guard	Normalmente me preocupa que alguien se aproveche de mí, cuando bajo la guardia
226	8	For me, justice and injustice are key words	Para mí, la justicia y la injusticia son palabras claves
227	8	I protect those under my authority	Protejo a quienes se encuentran bajo mi autoridad
228	8	I know how to do things	Sé como hacer las cosas
229	8	I will not listen to the opinions of others if I am confident of my purpose	Si estoy seguro de mi propósito, hago caso omiso de la opinión de los demás
230	8	I am an aggressive and assertive person that can, with firmness and total certainty, affirm a stance	Soy una persona agresiva y asertiva (que afirma sus posiciones con total certeza).
231	8	I have difficulty in accepting and expressing my tender, likable, soft, feminine side	Tengo dificultad para aceptar y expresar mi lado tierno, agradable, suave, femenino
232	8	I tend to act rather than hover in feelings	Tiendo más a actuar que a detenerme en los sentimientos
233	9	Even though I accept that there are some differences, I feel that most people are very similar	Aunque reconozca algunas diferencias, me da la sensación de que la mayoría de las personas se parecen mucho
234	9	I am almost always calm and serene	Casi siempre estoy calmado y tranquilo
235	9	In general, I have been too open and naive	En general he sido demasiado abierto e ingenuo
236	9	In general, I don’t feel much enthusiasm for things 	En general, no tengo gran entusiasmo por las cosas
237	9	Generally, I follow the path of least resistance	Generalmente sigo la línea de menor resistencia
238	9	Adversity makes me feel resigned and discouraged	La adversidad me hace sentir una persona resignada y desanimada
239	9	Harmony and acceptance have been important values for me	La armonía y la aceptación han sido valores importantes para mí
240	9	Most people worry too much about things	La mayoría de la gente se preocupa demasiado por las cosas
241	9	It annoys me to be disturbed	Me fastidia que me perturben
242	9	I like to have the time to do nothing	Me gusta tener tiempo para no hacer nada
243	9	I have been inclined to not be sufficiently imposing with respect to others	Me he inclinado a no imponerme lo suficiente ante los demás
244	9	It bothers me to waste my energy on nothing.  I try to find ways of doing things that don’t imply a waste of energy	Me molesta gastar mi energía en nada. Trato de encontrar enfoques de las cosas que no supongan un gasto de energía
245	9	I pride myself on being a stable person	Me precio de ser una persona estable
246	9	It is difficult for me to say no	Me resulta difícil decir no
247	9	My calmness and slowness can irritate others	Mi calma y lentitud pueden irritar a los demás
248	9	I need external stimulation to move	Necesito estimulación exterior para moverme
249	9	I don’t think I am the only thing that is important	No creo que yo sea lo único importante
250	9	There is nothing that is so urgent that can’t wait until tomorrow	No hay nada tan urgente, que no pueda esperar hasta mañana
251	9	Most things in life don’t merit getting upset about 	No merece la pena molestarse por la mayor parte de las cosas de la vida
252	9	I can be a dispassionate arbitrator because, for me, both parties are equal	Puedo ser un arbitro desapasionado, porque para mí las dos partes son iguales
253	9	I am quite conservative in regards to my set of values	Soy bastante conservador en cuanto a mi escala de valores
254	9	I am more likely to give up than to fight	Soy más propenso a resignarme que a luchar
255	9	I tend to repress feelings	Soy propenso a reprimir los sentimientos
256	9	I am an extremely sociable person	Soy una persona extremadamente tratable
257	9	It is somewhat difficult for me to focus my attention	Tengo cierta dificultad en centrar mi atención
258	9	I tend to undervalue myself	Tengo tendencia a desvalorizarme
259	9	I tend not to judge people	Tiendo a no juzgar a las personas
260	9	I tend to lessen the importance of things so others can calm down	Tiendo a quitar importancia a las cosas para que los demás se tranquilicen
261	9	I tend to be optimistic	Tiendo a ser una persona optimista
\.


--
-- Name: descriptions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cmoralespv
--

SELECT pg_catalog.setval('public.descriptions_id_seq', 10, true);


--
-- Name: questions_question_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cmoralespv
--

SELECT pg_catalog.setval('public.questions_question_id_seq', 261, true);


--
-- Name: descriptions descriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: cmoralespv
--

ALTER TABLE ONLY public.descriptions
    ADD CONSTRAINT descriptions_pkey PRIMARY KEY (id);


--
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: public; Owner: cmoralespv
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (question_id);


--
-- PostgreSQL database dump complete
--

