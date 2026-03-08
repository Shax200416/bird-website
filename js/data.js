const birds = [
{
  id: 1,
  name: {
    en: "House Sparrow",
    ru: "Домовый воробей",
    kg: "Үй чабарсы"
  },
  diet: ["omnivore"],
  habitat: ["urban","rural"],
  description: { en: "The House Sparrow is a small, adaptable bird commonly found in urban and rural areas around the world. It feeds on seeds, grains, and insects, often foraging near humans. House Sparrows are social birds, frequently seen in flocks, and they are known to nest in buildings, trees, or shrubs. They have short, stout beaks suited for seed eating and exhibit a chirpy, lively behavior. Typically, they lay 3–5 eggs per clutch and may have multiple broods in a season. These birds are highly resilient, able to live close to humans, and can thrive in a variety of environments.",
  ru: "Домовый воробей — маленькая, приспособляемая птица, часто встречающаяся в городских и сельских районах по всему миру. Питается семенами, зерном и насекомыми, часто кормится рядом с людьми. Домовые воробьи — социальные птицы, часто собираются в стаи, строят гнёзда в зданиях, деревьях или кустарниках. У них короткий крепкий клюв для поедания семян и живой, веселый характер. Обычно откладывают 3–5 яиц за кладку и могут иметь несколько выводков за сезон. Эти птицы очень выносливы, легко живут рядом с людьми и могут процветать в разных условиях.",
  kg: "Үй чабарсы — кичинекей жана адаптациялана алган канаттуу, дүйнөнүн ар кайсы жериндеги шаар жана айыл жерлеринде көп кездешет. Ун, үрөн жана курт-кумурскалар менен азыктанат, көп учурда адамдардын жанында азыктанат. Үй чабарсы социалдык, топтордо жашайт жана уяларын имараттарда, дарактарда же куурайларда курат. Кыска жана күчтүү тумшугу бар, үрөн менен азыктанууга ылайыктуу, жандуу жана жыргалчан мүнөзгө ээ. Адатта 3–5 жумуртка салат жана бир нече уя сезону болушу мүмкүн. Бул канаттуулар өтө чыдамкай жана адамдардын жанында жашап, ар кандай чөйрөлөрдө тиричилик кылышат." },
  image: "img/image1.png"   
},
  {
  "id": 2,
  name: {
    en: "Golden Eagle",
    ru: "Беркут",
    kg: "Бүркүт"
  },
  diet: ["carnivore"],
  habitat: ["mountains", "forests", "plains", "cliffs", "river valleys"],
  description: {
    en: "The Golden Eagle is a large and powerful bird of prey with exceptional eyesight, capable of spotting prey from great distances. It has a strong hooked beak and broad wings that allow it to soar at high altitudes. Golden Eagles are solitary hunters, feeding mainly on mammals such as hares and rodents, but they may also hunt birds. They are highly territorial and aggressively defend their nesting areas. Nests are built on cliffs or tall trees, and females typically lay 1–4 eggs per season. Golden Eagles can live up to 20–30 years in the wild and are widely regarded as symbols of strength and freedom.",
    ru: "Беркут — крупная и мощная хищная птица с исключительным зрением, способная замечать добычу на большом расстоянии. Имеет сильный крючковатый клюв и широкие крылья, позволяющие парить на большой высоте. Питается преимущественно млекопитающими, такими как зайцы и грызуны, иногда охотится на птиц. Отличается выраженной территориальностью и активно защищает свои гнёзда. Строит гнёзда на скалах или высоких деревьях, откладывая 1–4 яйца за сезон. Может жить до 20–30 лет в дикой природе и считается символом силы и свободы.",
    kg: "Бүркүт — чоң жана күчтүү жырткыч куш, көрүүсү өтө курч болуп, алыс аралыктагы олжону байкай алат. Күчтүү ийри тумшугу жана кең канаттары бар, бийик бийиктиктерде эркин уча алат. Негизинен коён жана кемирүүчүлөр менен азыктанат, кээде башка куштарды да кармайт. Аймагын катуу коргойт жана уясын аска-зоолорго же бийик дарактарга курат. Адатта 1–4 жумуртка тууйт. Жапайы жаратылышта 20–30 жылга чейин жашай алат жана күч менен эркиндиктин символу болуп эсептелет."
  },
  image: "/img/image2.png"
},
{
  id: 3,
  name: {
    en: "Duck",
    ru: "Утка",
    kg: "Өрдөк"
  },
  diet: ["omnivore"],
  habitat: ["freshwater lakes", "rivers", "ponds", "wetlands", "marshes"],
  description: {
    en: "Ducks are medium-sized waterfowl known for their webbed feet and broad bills adapted for swimming and feeding in water. They consume aquatic plants, insects, small fish, and grains, making them omnivorous and highly adaptable. Ducks inhabit freshwater lakes, rivers, ponds, and wetlands, and many species can also live in urban parks. They usually nest on the ground near water, laying 5–12 eggs per season. Many species are migratory and travel long distances in flocks.",
    ru: "Утки — средние водоплавающие птицы с перепончатыми лапами и широкими клювами, приспособленными для плавания и добычи пищи в воде. Питаются водными растениями, насекомыми, мелкой рыбой и зерном. Обитают в пресноводных озёрах, реках и болотах, некоторые виды живут и в городских парках. Обычно гнездятся на земле возле воды, откладывая 5–12 яиц за сезон. Многие виды являются перелётными.",
    kg: "Өрдөк — орто өлчөмдөгү суу канаттуусу, сөңгөктүү буттары жана кең тумшугу бар, сууда сүзүүгө жана азыктанууга ылайыкташкан. Суу өсүмдүктөрүн, курт-кумурскаларды, майда балыктарды жана дан азыктарын жейт. Көлдөрдө, дарыяларда жана саздак жерлерде жашайт, айрым түрлөрү шаар парктарында да кездешет. Көп учурда суунун жээгине уя куруп, 5–12 жумуртка тууйт. Көптөгөн түрлөрү көчмөн болуп саналат."
  },
  image: "/img/image3.png"
},
  {
  id: 4,
  name: {
    en: "Parrot",
    ru: "Попугай",
    kg: "Попугай"
  },
  diet: ["herbivore", "omnivore"],
  habitat: ["tropical forests", "subtropical forests", "savannas", "mangroves", "urban areas"],
  description: {
    en: "Parrots are colorful, intelligent birds known for their strong curved beaks, zygodactyl feet, and ability to mimic sounds, including human speech. They feed mainly on seeds, fruits, nuts, and sometimes insects. Parrots live in tropical and subtropical forests, savannas, mangroves, and even urban areas where food is available. They are social birds, often forming flocks and engaging in complex social interactions. Parrots nest in tree cavities, cliffs, or hollows, laying 2–8 eggs per season. Many species are long-lived, with lifespans ranging from 20 to 80 years depending on the species, and they are valued for their intelligence and vibrant plumage.",
    ru: "Попугаи — яркие и умные птицы, известные своими сильными изогнутыми клювами, двупалыми лапами и способностью имитировать звуки, включая человеческую речь. Питаются в основном семенами, фруктами, орехами и иногда насекомыми. Попугаи живут в тропических и субтропических лесах, саваннах, мангровых зарослях и даже в городских районах, где есть еда. Социальные птицы, часто собираются в стаи и участвуют в сложных социальных взаимодействиях. Гнездятся в дуплах деревьев, на утёсах или в пустотах, откладывая 2–8 яиц за сезон. Многие виды долгоживущие, срок жизни от 20 до 80 лет в зависимости от вида, ценятся за интеллект и яркое оперение.",
    kg: "Попугай — түстүү, акылдуу канаттуулар, күчтүү ийри тумшугу жана эки манжасы менен кармоочу сөңгөктөрү бар, адамдын үнүн жана башка үндөрдү кайталай алышат. Негизинен үрөн, мөмө, жаңгак менен азыктанат, кээде курт-кумурскаларды да жейт. Попугайлардын жашоо чөйрөсү тропикалык жана субтропикалык токойлор, саванналар, мангров ормандары жана шаарлар, азык табылган жерде жашайт. Социалдык, көбүнчө топтордо жашайт жана татаал социалдык өз ара аракеттерге катышат. Дарак тешиктеринде, жээктерде же тешиктерде уя курат, 2–8 жумуртка салат. Көптөгөн түрлөрү узак жашайт, өмүрү 20–80 жылга чейин, акылдуулугу жана түстүү коңгуроо канаты үчүн бааланат."
  },
  image: "/img/image4.png"
},
{
 id: 5,
  name: {
    en: "Falcon",
    ru: "Сокол",
    kg: "Сокол"
  },
  diet: ["carnivore"],
  habitat: ["open plains", "mountains", "deserts", "forests", "urban areas"],
  description: {
    en: "Falcons are fast and agile birds of prey, known for their pointed wings and keen eyesight. They primarily feed on small birds, mammals, and insects, hunting with incredible speed and precision. Falcons inhabit diverse environments, including open plains, mountains, deserts, forests, and even cities where prey is abundant. They are mostly solitary hunters but can form small groups during migration. Falcons nest on cliffs, tall trees, or buildings, laying 2–6 eggs per season. They are highly adaptable and can reach flight speeds exceeding 200 km/h during hunting dives, making them among the fastest animals on Earth.",
    ru: "Соколы — быстрые и ловкие хищные птицы с заостренными крыльями и острым зрением. Основной рацион — мелкие птицы, млекопитающие и насекомые, охотятся с невероятной скоростью и точностью. Соколы обитают в разнообразных средах — открытые равнины, горы, пустыни, леса, а также города, где много добычи. В основном охотятся в одиночку, но могут собираться в небольшие группы во время миграции. Гнездятся на утёсах, высоких деревьях или зданиях, откладывая 2–6 яиц за сезон. Очень адаптивны и могут достигать скорости полёта более 200 км/ч во время охотничьего пикирования, что делает их одними из самых быстрых животных на Земле.",
    kg: "Соколдор — ылдам жана ийкемдүү жырткыч канаттуулар, учу тик канаттары жана жакшы көрүнүшү менен белгилүү. Негизинен чакан канаттуулар, жаныбарлар жана курт-кумурскаларды жейт, аңдоодо абдан ылдам жана так иштейт. Соколдор ачык талааларда, тоолордо, чөлдөрдө, токойлордо жана шаарларда жашайт. Көбүнчө жалгыз аңдайт, бирок көчүү учурунда кичинекей топторго чогулат. Жээкте, бийик дарактарда же имараттарда уя курат, 2–6 жумуртка салат. Өтө адаптацияланат жана аңдоодо учуу ылдамдыгы 200 км/сааттан ашып, жер бети боюнча эң ылдам жаныбарлардын катарына кирет."
  },
  image: "/img/image5.png"
},
  {
  id: 6,
  name: {
    en: "Owl",
    ru: "Сова",
    kg: "Бүркүт"
  },
  diet: ["carnivore"],
  habitat: ["forests", "deserts", "urban areas", "tree hollows", "barns"],
  description: {
    en: "Owls are nocturnal birds of prey known for their large eyes, silent flight, and excellent hearing. They feed mainly on small mammals, birds, insects, and occasionally fish. Owls inhabit diverse environments including forests, grasslands, deserts, and urban areas, often nesting in tree hollows, cliffs, or barns. They are solitary and territorial, using calls to communicate during the night. Their eyes are adapted for low-light vision, allowing them to hunt efficiently at night. Owls lay 2–12 eggs per season, depending on the species, and are considered symbols of wisdom in many cultures.",
    ru: "Совы — ночные хищные птицы, известные своими большими глазами, тихим полётом и отличным слухом. Питаются в основном мелкими млекопитающими, птицами, насекомыми и иногда рыбой. Совы обитают в различных средах — леса, степи, пустыни и города, часто гнездятся в дуплах деревьев, на утёсах или в амбарах. Они одиночные и территориальные, используют крики для общения ночью. Их глаза приспособлены к низкой освещённости, что позволяет эффективно охотиться ночью. Совы откладывают 2–12 яиц за сезон в зависимости от вида и считаются символами мудрости во многих культурах.",
    kg: "Бүркүт — түнкү жырткыч канаттуу, чоң көздөрү, үндү жок кылган учу жана мыкты угуу жөндөмү менен белгилүү. Негизинен чакан жаныбарлар, канаттуулар, курт-кумурскалар жана кээде балыктар менен азыктанат. Бүркүт ар түрдүү чөйрөлөрдө жашайт — токойлор, талаалар, чөлдөр жана шаарлар, көбүнчө дарак тешиктеринде, жээктерде же сарайларда уя курат. Жалгыз жана аймактык, түнү кыңгырактар менен байланышат. 2–12 жумуртка салат, түрүнө жараша, көптөгөн маданияттарда акылдын символу деп эсептелет."
  },
  image: "/img/image6.png"
},
 {
  id: 7,
  name: {
    en: "Seagull",
    ru: "Чайка",
    kg: "Чайка"
  },
  diet: ["omnivore"],
  habitat: ["coastal regions", "beaches", "lakes", "rivers", "urban areas near water"],
  description: {
    en: "Seagulls are medium to large coastal birds known for their strong, long wings and adaptable feeding habits. They eat fish, invertebrates, insects, small birds, and human food scraps, making them highly opportunistic. Seagulls inhabit coastlines, beaches, estuaries, lakes, rivers, and sometimes urban areas near water. They are social and often form large flocks, displaying complex interactions and vocal communication. Seagulls build nests on the ground, cliffs, or rooftops, laying 2–3 eggs per season. They are agile fliers, capable of long-distance travel and scavenging efficiently, and can live 10–25 years depending on the species.",
    ru: "Чайки — средние и крупные прибрежные птицы с сильными длинными крыльями и приспособляемыми привычками питания. Питаются рыбой, беспозвоночными, насекомыми, мелкими птицами и пищевыми отходами человека, что делает их высокооппортунистичными. Обитают на побережьях, пляжах, эстуариях, озёрах, реках и иногда в городских районах возле воды. Социальные, часто собираются в большие стаи, демонстрируют сложные взаимодействия и вокальную коммуникацию. Строят гнёзда на земле, утёсах или крышах, откладывая 2–3 яйца за сезон. Ловко летают, способны на дальние перелёты и эффективное питание падалью, живут 10–25 лет в зависимости от вида.",
    kg: "Чайкалар — орто жана чоң көлөмдөгү жээк канаттуулар, күчтүү жана узун канаттары бар, азык табууда өтө адаптацияланган. Балык, безсу жаныбарлар, курт-кумурскалар, чакан канаттуулар жана адам азыгы менен азыктанат. Жээктерде, пляждарда, дарыя устундарында, көлдөрдө жана айрым шаарларда жашайт. Социалдык, көбүнчө чоң топтордо жашайт, татаал өз ара аракеттер жана үндүү байланыш көрсөтөт. Жерге, жээктерге же чатырларга уя курат, 2–3 жумуртка салат. Жакшы учат, узак аралыкка учуу жана азык табууда жөндөмдүү, түрүнө жараша 10–25 жыл жашайт."
  },
  image: "/img/image7.png"
},
{
  id: 8,
  name: {
    en: "Pigeon",
    ru: "Голубь",
    kg: "Көгүчкөн"
  },
  diet: ["omnivore"],
  habitat: ["urban areas", "parks", "farmlands", "forests", "cliffs"],
  description: {
    en: "Pigeons are medium-sized birds commonly found in cities and rural areas worldwide. They feed on seeds, grains, fruits, and occasionally small insects. Pigeons are highly adaptable and thrive near humans, often forming large flocks. They build nests in buildings, trees, cliffs, or ledges, laying 1–6 eggs per season. Known for their homing ability, pigeons can travel long distances to return to their nests. They are social birds, communicate with cooing sounds, and have a lifespan of 3–15 years depending on the environment and species.",
    ru: "Голуби — средние птицы, часто встречающиеся в городах и сельской местности по всему миру. Питаются семенами, зерном, фруктами и иногда мелкими насекомыми. Голуби очень адаптивны и хорошо живут рядом с людьми, часто образуют большие стаи. Строят гнёзда в зданиях, на деревьях, скалах или выступах, откладывая 1–6 яиц за сезон. Известны своим умением возвращаться домой, могут преодолевать большие расстояния. Социальные птицы, общаются воркованием, срок жизни 3–15 лет в зависимости от условий и вида.",
    kg: "Көгүчкөн — орто өлчөмдөгү канаттуулар, дүйнөнүн бардык жеринде шаарлар жана айылдарда көп кездешет. Үрөн, үрөн данектери, мөмө жана кээде чакан курт-кумурскаларды жейт. Көгүчкөн адамдардын жанында жакшы жашай алат жана көбүнчө чоң топтордо жашайт. Имараттарда, дарактарда, жээктерде же таш беттерде уя курат, 1–6 жумуртка салат. Үйгө кайтуу жөндөмү менен белгилүү, узак аралыкка учуп барып уясына кайта алат. Социалдык, ворк звуктары менен байланышат, өмүрү 3–15 жылга чейин."
  },
  image: "/img/image8.png"
},
 {
  id: 9,
  name: {
    en: "Woodpecker",
    ru: "Дятел",
    kg: "Тишкечкан канаттуу"
  },
  diet: ["insectivore", "omnivore"],
  habitat: ["forests", "woodlands", "parks", "orchards", "rural areas"],
  description: {
    en: "Woodpeckers are medium-sized birds known for their strong, chisel-like beaks and ability to peck wood in search of insects. They feed on insects, larvae, nuts, and sometimes fruits. Woodpeckers inhabit forests, woodlands, orchards, parks, and rural areas, often nesting in tree cavities. They have strong neck muscles to repeatedly peck without injury and use drumming as a form of communication and territorial display. Woodpeckers are mostly solitary or live in pairs, and some species migrate seasonally. Their lifespan ranges from 4–12 years depending on species and environment.",
    ru: "Дятлы — средние птицы, известные своими сильными клювами в форме долота и способностью долбить дерево в поисках насекомых. Питаются насекомыми, личинками, орехами и иногда фруктами. Обитают в лесах, парках, садах и сельской местности, часто гнездятся в дуплах деревьев. Имеют сильные шейные мышцы, чтобы многократно долбить дерево без повреждений, используют барабанный стук для общения и обозначения территории. В основном ведут одиночный образ жизни или живут парами, некоторые виды мигрируют. Продолжительность жизни 4–12 лет в зависимости от вида и среды.",
    kg: "Тишкечкан канаттуу — орто өлчөмдөгү канаттуу, күчтүү, долото сыяктуу тумшугу менен белгилүү, жыгачтан курт-кумурскаларды издөө үчүн какылдайт. Курт-кумурскалар, личинкалар, жаңгактар жана кээде мөмөлөр менен азыктанат. Токойлордо, багыштарда, бакчаларда жана айыл жерлеринде жашайт, көбүнчө дарак тешиктеринде уя курат. Жакшы муундары бар, көп жолу какылдаганда жаракат албайт, барабандоо аркылуу байланышып жана аймактык белгилөө жүргүзөт. Көбүнчө жалгыз же жуп болуп жашайт, кээ бир түрлөрү сезонго жараша көчөттөшөт. Өмүрү 4–12 жылга чейин."
  },
  image: "/img/image9.png"
},
{
  id: 10,
  name: {
    en: "Swan",
    ru: "Лебедь",
    kg: "Карагоз"
  },
  diet: ["herbivore", "omnivore"],
  habitat: ["lakes", "rivers", "ponds", "wetlands", "estuaries"],
  description: {
    en: "Swans are large, elegant waterfowl known for their long necks, graceful movements, and powerful wings. They feed on aquatic plants, algae, insects, and small aquatic animals. Swans inhabit lakes, rivers, ponds, wetlands, and estuaries, often forming monogamous pairs for life. They build nests near water, laying 3–8 eggs per season. Swans are territorial and use hissing and wing displays to defend their area. They are strong fliers capable of long migrations and can live 10–30 years depending on species and environment.",
    ru: "Лебеди — крупные, грациозные водоплавающие птицы с длинными шеями, изящными движениями и мощными крыльями. Питаются водными растениями, водорослями, насекомыми и мелкими водными животными. Обитают на озёрах, реках, прудах, в водно-болотных угодьях и эстуариях, часто формируют моногамные пары на всю жизнь. Строят гнёзда у воды, откладывая 3–8 яиц за сезон. Территориальны, используют шипение и расправленные крылья для защиты территории. Хорошо летают, способны на долгие миграции, живут 10–30 лет в зависимости от вида и условий.",
    kg: "Карагоз — чоң, сулуу суу канаттуулары, узун моюндары, грациоздуу кыймылдары жана күчтүү канаттары менен белгилүү. Сууда өсүмдүктөр, суу балырлары, курт-кумурскалар жана чакан суу жаныбарлары менен азыктанат. Көлдөрдө, дарыяларда, бассейндерде, саздак жерлерде жана эстуарийлерде жашайт, көбүнчө өмүр бою бир жуп менен жашайт. Суу жаныбарларынын жанында уя курат, 3–8 жумуртка салат. Аймактык жана аймактарын коргоо үчүн сырыктоо жана канаттарын көрсөтүү менен коргойт. Жакшы учат, узак миграцияга жөндөмдүү, түрүнө жана чөйрөсүнө жараша 10–30 жыл жашайт."
  },
  image: "/img/image10.png"
},
{
  id: 11,
  name: {
    en: "Crow",
    ru: "Ворона",
    kg: "Карга"
  },
  diet: ["omnivore"],
  habitat: ["urban","forests","farmlands"],
  description: {
    en: "Crows are highly intelligent birds known for their problem-solving abilities and complex social behavior. They feed on insects, seeds, fruits, small animals, and human food waste. Crows adapt easily to different environments including cities, forests, and agricultural lands. They often live in groups and communicate using a wide range of calls. Crows build nests in tall trees and usually lay 3–6 eggs. Their intelligence allows them to use tools and remember human faces.",
    ru: "Вороны — очень умные птицы, известные своими способностями к решению задач и сложным социальным поведением. Питаются насекомыми, семенами, фруктами, мелкими животными и пищевыми отходами человека. Вороны легко приспосабливаются к различным средам — городам, лесам и сельскохозяйственным районам. Часто живут группами и общаются с помощью различных звуков. Строят гнезда на высоких деревьях и откладывают 3–6 яиц.",
    kg: "Каргалар — абдан акылдуу канаттуулар, көйгөйлөрдү чечүү жөндөмү жана татаал социалдык жүрүм-туруму менен белгилүү. Курт-кумурскалар, үрөндөр, мөмөлөр, чакан жаныбарлар жана адамдардын азык калдыктары менен азыктанат. Шаарларда, токойлордо жана айыл жерлеринде оңой жашай алат. Көп учурда топ болуп жашайт жана ар кандай үндөр менен байланышат. Бийик дарактарга уя куруп 3–6 жумуртка салат."
  },
  image: "img/image11.png"
},
{
  id: 12,
  name: {
    en: "Flamingo",
    ru: "Фламинго",
    kg: "Фламинго"
  },
  diet: ["omnivore"],
  habitat: ["lakes","wetlands"],
  description: {
    en: "Flamingos are tall pink birds known for their long legs and curved bills. They feed mainly on algae, small crustaceans, and plankton found in shallow water. Flamingos live in large colonies around lakes, lagoons, and wetlands. Their pink color comes from pigments in their food. Flamingos build mud nests and usually lay one egg. They are famous for standing on one leg and forming large flocks.",
    ru: "Фламинго — высокие розовые птицы с длинными ногами и изогнутым клювом. Питаются водорослями, мелкими ракообразными и планктоном. Живут большими колониями возле озёр и болот. Розовый цвет появляется благодаря пище. Строят гнезда из грязи и откладывают одно яйцо.",
    kg: "Фламинго — узун буттуу жана ийри тумшуктуу кызгылт канаттуулар. Алар негизинен балырлар, майда суу жаныбарлары жана планктон менен азыктанат. Көлдөрдө жана саздак жерлерде чоң колония болуп жашайт. Кызгылт түсү тамактан алынган пигменттен пайда болот. Баткак уя куруп бир жумуртка салат."
  },
  image: "img/image12.png"
},
{
  id: 13,
  name: {
    en: "Crane",
    ru: "Журавль",
    kg: "Турна"
  },
  diet: ["omnivore"],
  habitat: ["wetlands"],
  description: {
    en: "Cranes are tall elegant birds known for their long legs and graceful movements. They feed on plants, seeds, insects, and small animals. Cranes usually live in wetlands, marshes, and grasslands. Many species migrate long distances between breeding and wintering areas. They build nests on the ground near water and usually lay 1–3 eggs. Cranes are famous for their loud calls and beautiful courtship dances.",
    ru: "Журавли — высокие и грациозные птицы с длинными ногами. Питаются растениями, семенами, насекомыми и мелкими животными. Живут на болотах и лугах. Многие виды совершают дальние миграции. Гнезда строят на земле возле воды и откладывают 1–3 яйца.",
    kg: "Турналар — узун буттуу жана кооз кыймылдуу канаттуулар. Өсүмдүктөр, үрөндөр, курт-кумурскалар жана чакан жаныбарлар менен азыктанат. Көбүнчө саздак жерлерде жана талааларда жашайт. Көпчүлүк түрлөрү узак аралыкка көчөт. Жерге уя куруп 1–3 жумуртка салат."
  },
  image: "img/image13.png"
},
{
  id: 14,
  name: {
    en: "Kingfisher",
    ru: "Зимородок",
    kg: "Балыкчы куш"
  },
  diet: ["carnivore"],
  habitat: ["rivers","lakes","wetlands"],
  description: {
    en: "Kingfishers are small brightly colored birds famous for their fishing skills. They hunt by diving into the water to catch fish, insects, and small aquatic animals. Kingfishers live near rivers, lakes, and wetlands where water is clear enough to see prey. They have sharp beaks and excellent vision for spotting fish. These birds nest in burrows dug into riverbanks and usually lay 4–7 eggs.",
    ru: "Зимородки — маленькие яркие птицы, известные своими навыками ловли рыбы. Они ныряют в воду, чтобы поймать рыбу, насекомых и мелких водных животных. Живут возле рек, озёр и болот. Гнезда делают в норах на берегах рек и откладывают 4–7 яиц.",
    kg: "Балыкчы куш — майда жана түстүү канаттуу, балык кармоо жөндөмү менен белгилүү. Алар сууга чумкуп балык, курт-кумурскалар жана суу жаныбарларын кармайт. Дарыялардын жана көлдөрдүн жанында жашайт. Дарыя жээгине уя казып 4–7 жумуртка салат."
  },
  image: "img/image14.png"
},
{
  id: 15,
  name: {
    en: "Peacock",
    ru: "Павлин",
    kg: "Павлин"
  },
  diet: ["omnivore"],
  habitat: ["forests","farmlands"],
  description: {
    en: "Peacocks are large colorful birds famous for their long, decorative tail feathers. They feed on seeds, insects, plants, and small reptiles. Peacocks usually live in forests, grasslands, and farmlands. The males display their beautiful tail feathers during courtship to attract females. They nest on the ground and usually lay 3–6 eggs. These birds are known for their loud calls and striking appearance.",
    ru: "Павлины — крупные яркие птицы, известные своими длинными декоративными хвостовыми перьями. Питаются семенами, насекомыми, растениями и мелкими рептилиями. Живут в лесах, лугах и сельскохозяйственных районах. Самцы распускают хвост во время брачных танцев. Гнезда строят на земле и откладывают 3–6 яиц.",
    kg: "Павлин — узун жана кооз куйрук жүндөрү менен белгилүү чоң канаттуу. Үрөндөр, өсүмдүктөр, курт-кумурскалар жана чакан жаныбарлар менен азыктанат. Токойлордо жана талааларда жашайт. Эркектери кооз куйругун жайып ургаачыларды тартат. Жерге уя куруп 3–6 жумуртка салат."
  },
  image: "img/image15.png"
},
{
  id: 16,
  name: {
    en: "Pelican",
    ru: "Пеликан",
    kg: "Пеликан"
  },
  diet: ["carnivore"],
  habitat: ["lakes","wetlands"],
  description: {
    en: "Pelicans are large water birds known for their long beaks and throat pouches used for catching fish. They live near lakes, rivers, and coastal waters. Pelicans often hunt in groups and scoop fish from the water. They build nests on the ground or on islands and lay 1–3 eggs. These birds are strong fliers and can travel long distances while searching for food.",
    ru: "Пеликаны — крупные водные птицы с длинным клювом и горловым мешком для ловли рыбы. Обитают возле озёр, рек и морских побережий. Часто охотятся группами. Гнезда строят на земле или островах и откладывают 1–3 яйца.",
    kg: "Пеликан — узун тумшугу жана балык кармоочу тамак капчыгы бар чоң суу канаттуусу. Көлдөрдө жана деңиз жээктеринде жашайт. Көп учурда топ болуп балык кармайт. Жерге же аралдарга уя куруп 1–3 жумуртка салат."
  },
  image: "img/image16.png"
},
{
  id: 17,
  name: {
    en: "Robin",
    ru: "Малиновка",
    kg: "Робин"
  },
  diet: ["omnivore"],
  habitat: ["forests","gardens","parks"],
  description: {
    en: "Robins are small birds known for their bright orange-red chest. They feed on insects, worms, fruits, and berries. Robins live in forests, gardens, and parks, often close to human homes. They build cup-shaped nests in trees or bushes and lay 3–5 eggs. Robins are famous for their beautiful singing, especially during early mornings.",
    ru: "Малиновки — маленькие птицы с ярко-оранжевой грудью. Питаются насекомыми, червями, фруктами и ягодами. Живут в лесах, садах и парках. Строят гнезда на деревьях или кустах и откладывают 3–5 яиц.",
    kg: "Робин — көкүрөгү кызгылт-сары болгон майда канаттуу. Курт-кумурскалар, мөмөлөр жана курттар менен азыктанат. Токойлордо, бакчаларда жана парктарда жашайт. Дарактарга уя куруп 3–5 жумуртка салат."
  },
  image: "img/image17.png"
},
{
  id: 18,
  name: {
    en: "Stork",
    ru: "Аист",
    kg: "Лейлек"
  },
  diet: ["carnivore"],
  habitat: ["wetlands","farmlands"],
  description: {
    en: "Storks are large birds with long legs and long beaks. They feed on fish, frogs, insects, and small animals. Storks live in wetlands, grasslands, and agricultural fields. They build large nests on trees, buildings, or towers. Many species migrate long distances between continents during different seasons.",
    ru: "Аисты — крупные птицы с длинными ногами и длинным клювом. Питаются рыбой, лягушками, насекомыми и мелкими животными. Обитают на болотах, лугах и сельскохозяйственных землях. Строят большие гнезда на деревьях или зданиях.",
    kg: "Лейлек — узун буттуу жана узун тумшуктуу чоң канаттуу. Балык, бака, курт-кумурскалар жана чакан жаныбарлар менен азыктанат. Саздак жерлерде жана талааларда жашайт. Дарактарга же имараттарга чоң уя курат."
  },
  image: "img/image18.png"
},
{
  id: 19,
  name: {
    en: "Turkey",
    ru: "Индейка",
    kg: "Күркөө"
  },
  diet: ["omnivore"],
  habitat: ["forests","farmlands"],
  description: {
    en: "Turkeys are large ground-dwelling birds native to North America. They feed on seeds, nuts, insects, and small reptiles. Turkeys usually live in forests and open grasslands. They are strong runners and can also fly short distances. Turkeys nest on the ground and lay 8–15 eggs. These birds are well known for their distinctive gobbling calls.",
    ru: "Индейки — крупные наземные птицы родом из Северной Америки. Питаются семенами, орехами, насекомыми и мелкими рептилиями. Живут в лесах и открытых равнинах. Хорошо бегают и могут летать на короткие расстояния.",
    kg: "Күркөө — чоң жер канаттуусу. Үрөндөр, жаңгактар, курт-кумурскалар жана майда жаныбарлар менен азыктанат. Токойлордо жана талааларда жашайт. Жакшы чуркайт жана кыска аралыкка уча алат."
  },
  image: "img/image19.png"
},
{
  id: 20,
  name: {
    en: "Heron",
    ru: "Цапля",
    kg: "Көк куу"
  },
  diet: ["carnivore"],
  habitat: ["wetlands","rivers","lakes"],
  description: {
    en: "Herons are tall wading birds known for their long legs and sharp beaks. They feed mainly on fish, frogs, insects, and small aquatic animals. Herons live near rivers, lakes, and wetlands where they slowly walk through shallow water to catch prey. They build nests in trees or reeds and usually lay 3–6 eggs.",
    ru: "Цапли — высокие болотные птицы с длинными ногами и острым клювом. Питаются рыбой, лягушками, насекомыми и мелкими водными животными. Живут возле рек, озёр и болот.",
    kg: "Көк куу — узун буттуу суу канаттуусу. Балык, бака жана суу жаныбарлары менен азыктанат. Дарыялардын жана көлдөрдүн жанында жашайт. Дарактарга же камыштарга уя курат."
  },
  image: "img/image20.png"
}
];