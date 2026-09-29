"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { swahiliTranslations } from "@/components/swahili-translations"

type Language = "en" | "sw"

type TranslationEntry = {
  source: string
  rendered: string
}

const LANGUAGE_STORAGE_KEY = "swizzy-language"
const translatedNodes = new WeakMap<Text, TranslationEntry>()
const translatedAttributes = new WeakMap<
  Element,
  Map<string, TranslationEntry>
>()

const swahili = new Map<string, string>([
  ["Home", "Nyumbani"],
  ["Products & Solutions", "Bidhaa na Suluhisho"],
  ["Blog & News", "Blogu na Habari"],
  ["Careers", "Ajira"],
  ["Contacts", "Mawasiliano"],
  ["Contact", "Mawasiliano"],
  ["About us", "Kuhusu sisi"],
  ["About Us", "Kuhusu sisi"],
  ["Mission, vision & values", "Dhamira, maono na maadili"],
  ["Mission, Vision and Values", "Dhamira, maono na maadili"],
  ["Our story", "Hadithi yetu"],
  ["Our Story", "Hadithi yetu"],
  ["Team & leadership", "Timu na uongozi"],
  ["Team and Leadership", "Timu na uongozi"],
  ["Partners & investors", "Washirika na wawekezaji"],
  ["Partners and investors", "Washirika na wawekezaji"],
  ["Impact & sustainability", "Matokeo na uendelevu"],
  ["Impact and Sustainability", "Matokeo na uendelevu"],
  ["Solutions overview", "Muhtasari wa suluhisho"],
  ["Bespoke development", "Uundaji maalum"],
  ["Devices & integration", "Vifaa na muunganisho"],
  ["Case studies", "Mifano ya miradi"],
  ["Request a demo", "Omba onyesho"],
  ["Request a Demo", "Omba onyesho"],
  ["Products and solutions", "Bidhaa na suluhisho"],
  ["Products and Solutions", "Bidhaa na suluhisho"],
  ["Tibika | Health", "Tibika | Afya"],
  ["Elimika | Education", "Elimika | Elimu"],
  ["Jumuika | Socialization", "Jumuika | Ujumuishaji"],
  ["News & press releases", "Habari na taarifa kwa vyombo vya habari"],
  ["Events & webinars", "Matukio na wavuti"],
  ["Resource library", "Maktaba ya nyenzo"],
  ["Press & media kit", "Vifaa vya vyombo vya habari"],
  ["Gallery", "Matunzio"],
  ["Life & benefits", "Maisha na manufaa"],
  ["Open roles", "Nafasi za kazi"],
  [
    "Internships & graduate programme",
    "Mafunzo kwa vitendo na programu ya wahitimu",
  ],
  ["Hiring process", "Mchakato wa kuajiri"],
  ["Talent community", "Jumuiya ya vipaji"],
  ["Search", "Tafuta"],
  [
    "Search pages, insights, resources, and opportunities at Swizzy.",
    "Tafuta kurasa, maarifa, nyenzo na fursa za Swizzy.",
  ],
  ["Swizzy Industries home", "Ukurasa wa mwanzo wa Swizzy Industries"],
  ["Toggle color theme", "Badilisha mandhari ya rangi"],
  ["Toggle light and dark mode", "Badilisha hali ya mwanga na giza"],
  [
    "Kenya reimagined through immersive technology",
    "Kenya iliyobuniwa upya kupitia teknolojia ya kina",
  ],
  [
    "Kenya reimagined through immersive tech",
    "Kenya iliyobuniwa upya kupitia teknolojia ya kina",
  ],
  [
    "We engineer turnkey spatial computing software that strengthens clinical training, technical education, and civic heritage across East Africa. Not games, but vital institutional infrastructure.",
    "Tunaunda programu za teknolojia ya anga zinazosaidia mafunzo ya kliniki, elimu ya ufundi na urithi wa jamii Afrika Mashariki. Si michezo, bali miundombinu muhimu kwa taasisi.",
  ],
  ["Request a demo", "Omba onyesho"],
  ["Explore solutions", "Gundua suluhisho"],
  ["Explore pillars", "Gundua maeneo yetu"],
  ["Trusted across 45+ institutions", "Inaaminiwa na taasisi zaidi ya 45"],
  [
    "Institutional deployments & collaborators",
    "Matumizi ya taasisi na washirika",
  ],
  ["Our three pillars", "Maeneo yetu matatu"],
  ["Our products", "Bidhaa zetu"],
  [
    "Immersive technology where it matters most",
    "Teknolojia ya kina pale inapohitajika zaidi",
  ],
  [
    "Targeted spatial architectures designed to empower healthcare teams, educational institutions, and civic community ecosystems.",
    "Miundo ya teknolojia ya anga inayowezesha timu za afya, taasisi za elimu na jumuiya za kijamii.",
  ],
  ["Clinical simulation", "Uigaji wa kliniki"],
  ["Virtual STEM labs", "Maabara pepe za STEM"],
  ["Pan-African spaces", "Nafasi za Afrika nzima"],
  ["Health pillar", "Eneo la afya"],
  ["Education pillar", "Eneo la elimu"],
  ["Socialization pillar", "Eneo la ujumuishaji"],
  [
    "Hospital ICU and dialysis simulators",
    "Viigaji vya ICU na dayalisisi hospitalini",
  ],
  [
    "Repeatable emergency procedure practice",
    "Mazoezi yanayoweza kurudiwa ya taratibu za dharura",
  ],
  [
    "Patient telemetry and anatomical education",
    "Ufuatiliaji wa mgonjwa na elimu ya anatomia",
  ],
  [
    "Virtual science and engineering labs",
    "Maabara pepe za sayansi na uhandisi",
  ],
  [
    "National CBC curriculum integration",
    "Ulinganishaji na mtaala wa CBC wa kitaifa",
  ],
  [
    "Educator performance and score tracking",
    "Ufuatiliaji wa utendaji na matokeo ya wanafunzi",
  ],
  [
    "Shared civic forums and keynote spaces",
    "Majukwaa ya kiraia na mikutano ya pamoja",
  ],
  [
    "Historical and cultural 3D photogrammetry",
    "Uundaji wa miundo ya 3D ya historia na utamaduni",
  ],
  [
    "Moderated, safe communal environments",
    "Mazingira salama ya jamii yenye usimamizi",
  ],
  ["Visit health site", "Tembelea tovuti ya afya"],
  ["Visit education site", "Tembelea tovuti ya elimu"],
  ["Visit socialization site", "Tembelea tovuti ya ujumuishaji"],
  ["Demystifying spatial computing", "Kuelewa teknolojia ya anga"],
  [
    "Immersive technology, explained simply",
    "Teknolojia ya kina, ikielezwa kwa urahisi",
  ],
  [
    "We cut through the hype. Here is how virtual and augmented reality tangibly solve institutional constraints.",
    "Tunaeleza teknolojia bila kupamba maneno. Hivi ndivyo uhalisia pepe na ulioboreshwa unavyosaidia taasisi kwa vitendo.",
  ],
  ["Virtual Reality (VR)", "Uhalisia Pepe (VR)"],
  ["Augmented Reality (AR)", "Uhalisia Ulioboreshwa (AR)"],
  ["Full 3D simulated immersion", "Uzoefu kamili wa 3D wa kuigiza"],
  ["Live holographic overlays", "Vielelezo vya hologramu vya moja kwa moja"],
  ["Fully virtual", "Pepe kabisa"],
  ["Real + digital", "Halisi + kidijitali"],
  ["Turnkey deployment:", "Utekelezaji kamili:"],
  ["Deployment blueprint", "Mpango wa utekelezaji"],
  [
    "How we partner with your institution",
    "Jinsi tunavyoshirikiana na taasisi yako",
  ],
  [
    "A clear transition from operational assessment to self-sustaining spatial computing infrastructure.",
    "Safari iliyo wazi kutoka tathmini ya mahitaji hadi miundombinu endelevu ya teknolojia ya anga.",
  ],
  ["Needs assessment", "Tathmini ya mahitaji"],
  ["Solution tailoring", "Urekebishaji wa suluhisho"],
  ["Deploy & empower", "Tekeleza na kuwezesha"],
  ["Impact", "Matokeo"],
  ["Learners reached", "Wanafunzi waliofikiwa"],
  ["Clinicians trained", "Wataalamu wa afya waliofunzwa"],
  ["Partner institutions", "Taasisi washirika"],
  ["Counties in Kenya", "Kaunti nchini Kenya"],
  ["Health spotlight", "Mwangaza wa afya"],
  ["Training duration", "Muda wa mafunzo"],
  ["ICU downtime", "Muda wa kusimama kwa ICU"],
  ["Competency rate", "Kiwango cha umahiri"],
  ["Voices from the field", "Maoni kutoka kazini"],
  ["Proven institutional outcomes", "Matokeo yaliyothibitishwa na taasisi"],
  ["Dispatches & research", "Taarifa na utafiti"],
  [
    "Latest insights on African spatial computing",
    "Maarifa mapya kuhusu teknolojia ya anga Afrika",
  ],
  ["Read article", "Soma makala"],
  ["View all publications", "Tazama machapisho yote"],
  ["Partner with Swizzy Industries", "Shirikiana na Swizzy Industries"],
  [
    "Ready to see what immersive technology can do for your institution?",
    "Uko tayari kuona jinsi teknolojia ya kina inavyoweza kusaidia taasisi yako?",
  ],
  [
    "Schedule an executive demonstration with our spatial systems architects in Nairobi, or request an on-site evaluation for your hospital or school.",
    "Panga onyesho na wasanifu wetu wa mifumo ya anga Nairobi, au omba tathmini ya hospitali au shule yako.",
  ],
  ["Talk to our Nairobi team", "Zungumza na timu yetu ya Nairobi"],
  ["About Swizzy Industries", "Kuhusu Swizzy Industries"],
  [
    "Building Kenya's immersive future",
    "Kujenga mustakabali wa teknolojia ya kina nchini Kenya",
  ],
  [
    "We engineer institutional-grade spatial computing solutions that empower healthcare, education, and community across East Africa. Not games, but vital national infrastructure.",
    "Tunaunda suluhisho za teknolojia ya anga zinazowezesha afya, elimu na jamii Afrika Mashariki. Si michezo, bali miundombinu muhimu ya kitaifa.",
  ],
  ["Corporate identity and mission", "Utambulisho na dhamira ya kampuni"],
  ["Purpose-built for African scale", "Imeundwa kwa mahitaji ya Afrika"],
  ["Health systems", "Mifumo ya afya"],
  ["Education and TVET", "Elimu na TVET"],
  ["Socialization and heritage", "Ujumuishaji na urithi"],
  [
    "Why immersive, why now, why Kenya",
    "Kwa nini teknolojia ya kina, kwa nini sasa, kwa nini Kenya",
  ],
  [
    "Useful technology for challenges that matter",
    "Teknolojia yenye manufaa kwa changamoto muhimu",
  ],
  [
    "Clinical mastery without patient risk",
    "Umahiri wa kliniki bila kuhatarisha wagonjwa",
  ],
  ["More practical STEM learning", "Mafunzo zaidi ya vitendo ya STEM"],
  [
    "Culture and presence across distance",
    "Utamaduni na ukaribu licha ya umbali",
  ],
  ["The way we work", "Jinsi tunavyofanya kazi"],
  ["Our core operating principles", "Kanuni zetu kuu za kazi"],
  ["Evidence over speculation", "Ushahidi badala ya makisio"],
  [
    "Rooted in East African reality",
    "Tumejikita katika uhalisia wa Afrika Mashariki",
  ],
  ["Uncompromising privacy", "Faragha isiyovunjwa"],
  ["Open collaboration", "Ushirikiano ulio wazi"],
  ["Our people", "Watu wetu"],
  [
    "Guided by people close to the work",
    "Tunaongozwa na watu walio karibu na kazi",
  ],
  ["A growing footprint", "Uwepo unaokua"],
  ["Swizzy Industries at a glance", "Muhtasari wa Swizzy Industries"],
  ["Our journey so far", "Safari yetu hadi sasa"],
  [
    "From a Nairobi engineering lab to field deployments",
    "Kutoka maabara ya uhandisi Nairobi hadi matumizi kazini",
  ],
  ["Mission, vision and values", "Dhamira, maono na maadili"],
  ["What guides every decision", "Kinachoongoza kila uamuzi"],
  [
    "Make immersive computing useful, accessible, and trusted",
    "Kufanya teknolojia ya kina iwe na manufaa, ipatikane na iaminike",
  ],
  [
    "A future with fewer geographic and resource barriers",
    "Mustakabali wenye vikwazo vichache vya umbali na rasilimali",
  ],
  ["Six non-negotiable core values", "Maadili sita ya msingi yasiyobadilika"],
  ["The operating principles", "Kanuni za kazi"],
  ["Values in action", "Maadili kwa vitendo"],
  [
    "Rooted in Nairobi. Engineered for Africa.",
    "Tumejikita Nairobi. Tumeundwa kwa Afrika.",
  ],
  ["Pillar alignment matrix", "Jedwali la ulinganifu wa maeneo"],
  [
    "From an idea to a national movement",
    "Kutoka wazo hadi harakati ya kitaifa",
  ],
  ["The genesis", "Mwanzo"],
  [
    "Engineered for Kenya's realities",
    "Imeundwa kulingana na uhalisia wa Kenya",
  ],
  ["The trajectory of transformation", "Mwelekeo wa mabadiliko"],
  ["Institutional milestones", "Hatua muhimu za taasisi"],
  ["Strategic product roadmap", "Mpango wa bidhaa za kimkakati"],
  ["Moments from the journey", "Matukio katika safari yetu"],
  [
    "Executive leadership and domain leads",
    "Uongozi mkuu na viongozi wa maeneo",
  ],
  ["People behind the work", "Watu walio nyuma ya kazi"],
  [
    "Close to the work, accountable for outcomes",
    "Karibu na kazi na wanaowajibika kwa matokeo",
  ],
  ["Leadership", "Uongozi"],
  ["Clinical governance", "Usimamizi wa kliniki"],
  [
    "Advisory board and institutional perspective",
    "Bodi ya ushauri na mtazamo wa taasisi",
  ],
  ["Built and governed locally", "Imejengwa na kusimamiwa hapa nchini"],
  [
    "Local expertise is part of the infrastructure",
    "Utaalamu wa ndani ni sehemu ya miundombinu",
  ],
  [
    "Find the right solution for your institution",
    "Pata suluhisho linalofaa taasisi yako",
  ],
  [
    "Immersive solutions built for real-world work",
    "Suluhisho za teknolojia ya kina kwa kazi za ulimwengu halisi",
  ],
  ["Ready-to-deploy platforms", "Mifumo iliyo tayari kutumika"],
  [
    "Bespoke development and hardware integration",
    "Uundaji maalum na muunganisho wa vifaa",
  ],
  ["Built around your requirements", "Imejengwa kulingana na mahitaji yako"],
  ["Platform capabilities", "Uwezo wa mfumo"],
  [
    "Designed for dependable institutional use",
    "Imeundwa kwa matumizi ya kuaminika katika taasisi",
  ],
  ["Our deployment process", "Mchakato wetu wa utekelezaji"],
  [
    "A clear path from assessment to continued support",
    "Njia iliyo wazi kutoka tathmini hadi msaada endelevu",
  ],
  ["Engagement models", "Miundo ya ushirikiano"],
  ["Choose a useful first step", "Chagua hatua ya kwanza yenye manufaa"],
  ["What every deployment includes", "Kila utekelezaji unajumuisha nini"],
  ["A partnership beyond the software", "Ushirikiano unaozidi programu"],
  ["Bespoke development", "Uundaji maalum"],
  [
    "Your idea, built as an immersive experience",
    "Wazo lako, likigeuzwa kuwa uzoefu wa teknolojia ya kina",
  ],
  ["What we can build", "Tunachoweza kujenga"],
  [
    "Purpose-built experiences around your goals",
    "Uzoefu ulioundwa kulingana na malengo yako",
  ],
  ["Our process", "Mchakato wetu"],
  [
    "From first conversation to supported deployment",
    "Kutoka mazungumzo ya kwanza hadi utekelezaji wenye msaada",
  ],
  ["Multidisciplinary skills", "Ujuzi wa taaluma mbalimbali"],
  [
    "The right expertise for each challenge",
    "Utaalamu unaofaa kwa kila changamoto",
  ],
  ["Device recommendation", "Mapendekezo ya vifaa"],
  ["Start with your people and environment", "Anza na watu na mazingira yako"],
  ["Integration planning", "Mipango ya muunganisho"],
  [
    "Connect with your current environment",
    "Unganisha na mazingira yako ya sasa",
  ],
  ["Deployment models", "Miundo ya utekelezaji"],
  [
    "Cloud, local, or hybrid options",
    "Chaguo za wingu, ndani ya taasisi au mseto",
  ],
  ["Hardware setup", "Usanidi wa vifaa"],
  [
    "Advise, configure, train, support",
    "Shauri, sanidi, fundisha na toa msaada",
  ],
  ["Support and maintenance", "Msaada na matengenezo"],
  [
    "Support plans shaped around deployment needs",
    "Mipango ya msaada kulingana na mahitaji ya utekelezaji",
  ],
  ["Case studies", "Mifano ya miradi"],
  [
    "Real work, evaluated with our partners",
    "Kazi halisi, zilizotathminiwa na washirika wetu",
  ],
  ["Featured story", "Hadithi iliyoangaziwa"],
  ["Browse by area", "Vinjari kulingana na eneo"],
  ["All", "Zote"],
  ["Health", "Afya"],
  ["Education", "Elimu"],
  ["Socialization", "Ujumuishaji"],
  ["Request a demo", "Omba onyesho"],
  [
    "See immersive technology in action",
    "Ona teknolojia ya kina ikifanya kazi",
  ],
  [
    "A useful conversation, tailored to you",
    "Mazungumzo yenye manufaa, yaliyolengwa kwako",
  ],
  ["What to expect", "Unachoweza kutarajia"],
  ["What happens next", "Nini kitafuata"],
  ["We contact you", "Tutawasiliana nawe"],
  ["We tailor the session", "Tutarekebisha kipindi kulingana na mahitaji yako"],
  ["You see it live", "Utaona onyesho la moja kwa moja"],
  ["Careers", "Ajira"],
  ["Help us reimagine Kenya", "Tusaidie kuibuni Kenya upya"],
  ["See open roles", "Tazama nafasi za kazi"],
  ["Join the talent community", "Jiunge na jumuiya ya vipaji"],
  [
    "Work on technology that serves people, institutions, and communities.",
    "Fanya kazi kwenye teknolojia inayohudumia watu, taasisi na jamii.",
  ],
  ["Why Swizzy", "Kwa nini Swizzy"],
  ["A place to build with purpose", "Mahali pa kujenga kwa kusudi"],
  ["Meaningful work", "Kazi yenye maana"],
  ["Growth", "Ukuaji"],
  ["Collaboration", "Ushirikiano"],
  ["Local impact", "Matokeo ya ndani"],
  ["Culture in action", "Utamaduni kwa vitendo"],
  ["How we work together", "Jinsi tunavyofanya kazi pamoja"],
  ["Teams", "Timu"],
  ["Different disciplines, shared goals", "Taaluma tofauti, malengo ya pamoja"],
  ["Open roles", "Nafasi za kazi"],
  [
    "No roles are currently published here.",
    "Hakuna nafasi zilizochapishwa kwa sasa.",
  ],
  [
    "Check back later or join the talent community for future updates.",
    "Rudi tena baadaye au jiunge na jumuiya ya vipaji kwa taarifa za baadaye.",
  ],
  ["Early careers", "Kazi za mwanzo"],
  [
    "Start your career in immersive technology",
    "Anza taaluma yako katika teknolojia ya kina",
  ],
  ["A place to do your best work", "Mahali pa kufanya kazi yako bora"],
  ["What matters at work", "Mambo muhimu kazini"],
  [
    "Support for good work, built around people",
    "Msaada wa kazi nzuri unaozingatia watu",
  ],
  ["A day at Swizzy", "Siku moja Swizzy"],
  ["Focused work, shared learning", "Kazi yenye umakini, mafunzo ya pamoja"],
  ["Learning and inclusion", "Mafunzo na ujumuishaji"],
  [
    "A respectful, collaborative workplace",
    "Mahali pa kazi penye heshima na ushirikiano",
  ],
  ["Team traditions", "Mila za timu"],
  ["Connection is part of the work", "Ushirikiano ni sehemu ya kazi"],
  ["Find your place at Swizzy", "Pata nafasi yako Swizzy"],
  ["Search opportunities", "Tafuta fursa"],
  ["Search title, team, location", "Tafuta cheo, timu au eneo"],
  ["All departments", "Idara zote"],
  [
    "No open roles are currently published",
    "Hakuna nafasi zilizo wazi zilizochapishwa kwa sasa",
  ],
  ["Recruitment notice", "Taarifa ya ajira"],
  [
    "Hiring should always be transparent",
    "Mchakato wa kuajiri unapaswa kuwa wazi kila wakati",
  ],
  [
    "Internships and graduate programme",
    "Mafunzo kwa vitendo na programu ya wahitimu",
  ],
  ["Different ways to get started", "Njia tofauti za kuanza"],
  ["Skill-building tracks", "Njia za kujenga ujuzi"],
  [
    "Learn by working across disciplines",
    "Jifunze kwa kufanya kazi katika taaluma mbalimbali",
  ],
  ["Programme journey", "Safari ya programu"],
  [
    "A transparent path from application to learning",
    "Njia iliyo wazi kutoka maombi hadi mafunzo",
  ],
  ["Eligibility", "Vigezo vya kustahiki"],
  [
    "Applications should be clear and accessible",
    "Maombi yanapaswa kuwa wazi na rahisi kufikiwa",
  ],
  ["Hiring process", "Mchakato wa kuajiri"],
  ["What to expect, step by step", "Unachoweza kutarajia, hatua kwa hatua"],
  ["Our process", "Mchakato wetu"],
  ["A clear and considered journey", "Safari iliyo wazi na yenye mpangilio"],
  ["Fair assessment", "Tathmini ya haki"],
  [
    "Relevant, structured conversations",
    "Mazungumzo yanayofaa na yenye mpangilio",
  ],
  ["Helpful preparation", "Maandalizi yenye manufaa"],
  ["Tips for a strong application", "Vidokezo vya maombi mazuri"],
  ["Recruitment safety", "Usalama wa ajira"],
  ["We never ask applicants for payment", "Hatuwaombi waombaji malipo kamwe"],
  ["Talent community", "Jumuiya ya vipaji"],
  ["Stay close to Swizzy", "Endelea kuwa karibu na Swizzy"],
  ["What you can expect", "Unachoweza kutarajia"],
  ["Stay connected", "Endelea kuwasiliana nasi"],
  ["Join the talent community", "Jiunge na jumuiya ya vipaji"],
  ["Resource library", "Maktaba ya nyenzo"],
  [
    "Everything you need to understand Swizzy",
    "Kila kitu unachohitaji kujua kuhusu Swizzy",
  ],
  ["Featured collections", "Makusanyo yaliyoangaziwa"],
  ["Start with an overview", "Anza na muhtasari"],
  ["Browse resources", "Vinjari nyenzo"],
  ["Documents and guides", "Nyaraka na miongozo"],
  ["Collections", "Makusanyo"],
  ["Information packs for your team", "Vifurushi vya taarifa kwa timu yako"],
  ["Press and media kit", "Vifaa vya vyombo vya habari"],
  [
    "Brand assets and media resources",
    "Rasilimali za chapa na vyombo vya habari",
  ],
  ["Quick facts", "Taarifa fupi"],
  ["Company information", "Taarifa za kampuni"],
  ["Short boilerplate", "Maelezo mafupi ya kampuni"],
  ["Copy boilerplate", "Nakili maelezo"],
  ["Copied", "Imenakiliwa"],
  ["Brand identity", "Utambulisho wa chapa"],
  ["Approved assets and usage", "Rasilimali zilizoidhinishwa na matumizi yake"],
  ["Logo files", "Faili za nembo"],
  ["Request logo assets", "Omba rasilimali za nembo"],
  ["Usage guidelines", "Mwongozo wa matumizi"],
  ["Brand palette", "Rangi za chapa"],
  ["Core colors and typography", "Rangi kuu na aina za maandishi"],
  ["Media contact", "Mawasiliano ya vyombo vya habari"],
  [
    "Need an interview or approved image?",
    "Unahitaji mahojiano au picha iliyoidhinishwa?",
  ],
  ["Gallery", "Matunzio"],
  [
    "Moments from Kenya's immersive journey",
    "Matukio katika safari ya teknolojia ya kina nchini Kenya",
  ],
  ["Explore moments from the work", "Gundua matukio kutoka kazini"],
  ["Share a moment", "Shiriki tukio"],
  ["Have a story to share?", "Una hadithi ya kushiriki?"],
  ["Search Swizzy", "Tafuta Swizzy"],
  ["What are you looking for?", "Unatafuta nini?"],
  ["No results found", "Hakuna matokeo yaliyopatikana"],
  [
    "Try a different phrase or browse the popular pages below.",
    "Jaribu maneno tofauti au vinjari kurasa maarufu hapa chini.",
  ],
  ["Can't find it?", "Hukuweza kupata unachotafuta?"],
  ["Thank you", "Asante"],
  ["Message prepared", "Ujumbe umeandaliwa"],
  [
    "We appreciate your interest in Swizzy. If you submitted a form that opened your email app, remember to send the prepared draft so our team can receive it.",
    "Tunashukuru kwa kuvutiwa na Swizzy. Ikiwa fomu ilifungua programu yako ya barua pepe, tafadhali tuma rasimu iliyoandaliwa ili timu yetu ipokee ujumbe wako.",
  ],
  ["We receive your note", "Tunapokea ujumbe wako"],
  ["We review your needs", "Tunakagua mahitaji yako"],
  ["We follow up", "Tutawasiliana nawe tena"],
  ["Legal and policies", "Sheria na sera"],
  [
    "Last updated: September 2026. This readable overview is not a substitute for approved legal advice.",
    "Ilisasishwa mwisho: Septemba 2026. Muhtasari huu si mbadala wa ushauri wa kisheria ulioidhinishwa.",
  ],
  ["On this page", "Katika ukurasa huu"],
  ["In plain language", "Kwa lugha rahisi"],
  ["Sitemap", "Ramani ya tovuti"],
  ["Find your way around Swizzy", "Tafuta njia yako kwenye Swizzy"],
  ["All sections", "Sehemu zote"],
  ["Page not found", "Ukurasa haujapatikana"],
  ["Back to home", "Rudi nyumbani"],
  ["Contact us", "Wasiliana nasi"],
  ["Learn more", "Jifunze zaidi"],
  ["Read more", "Soma zaidi"],
  ["View story", "Tazama hadithi"],
  ["View all roles", "Tazama nafasi zote"],
  ["Prepare email", "Andaa barua pepe"],
  ["Prepare demo request", "Andaa ombi la onyesho"],
  ["Send message", "Tuma ujumbe"],
  ["Email", "Barua pepe"],
  ["Name", "Jina"],
  ["Full name", "Jina kamili"],
  ["Organization", "Taasisi"],
  ["Message", "Ujumbe"],
  ["Phone", "Simu"],
  ["Role", "Wadhifa"],
  ["Location", "Eneo"],
  ["Privacy notice", "Taarifa ya faragha"],
  ["Privacy policy", "Sera ya faragha"],
  ["Terms of use", "Masharti ya matumizi"],
  ["Cookie policy", "Sera ya vidakuzi"],
  ["Accessibility statement", "Taarifa ya ufikivu"],
  ["Verified", "Imethibitishwa"],
  ["Peer-reviewed insights", "Maarifa yaliyopitiwa na wataalamu"],
  [
    "Recent dispatches and technical reports",
    "Taarifa na ripoti za kiufundi za hivi karibuni",
  ],
  ["Find a session", "Tafuta kipindi"],
  ["Upcoming", "Yanayokuja"],
  ["On-demand archive", "Kumbukumbu za kutazama wakati wowote"],
  ["Events and recordings", "Matukio na rekodi"],
  ["Recurring speakers", "Wazungumzaji wa mara kwa mara"],
  [
    "People sharing practical experience",
    "Watu wanaoshiriki uzoefu wa vitendo",
  ],
  [
    "Bring a practical question to the conversation",
    "Leta swali la vitendo kwenye mazungumzo",
  ],
  ["Discuss a briefing", "Jadili kikao cha taarifa"],
  ["Featured announcement", "Tangazo lililoangaziwa"],
  ["Newsroom at a glance", "Muhtasari wa chumba cha habari"],
  ["Recent institutional dispatches", "Taarifa za hivi karibuni za taasisi"],
  ["Press and media inquiries", "Maswali ya vyombo vya habari"],
  ["Press and media resources", "Nyenzo za vyombo vya habari"],
  ["Start an institutional conversation", "Anzisha mazungumzo ya kitaasisi"],
  ["Tell us what you are working on", "Tuambie unachofanyia kazi"],
  ["Inquiry focus", "Mada ya swali"],
  ["Institutional email", "Barua pepe ya taasisi"],
  ["How can we help?", "Tunawezaje kukusaidia?"],
  ["Open email draft", "Fungua rasimu ya barua pepe"],
  [
    "Direct collaboration and inquiries",
    "Ushirikiano na maswali ya moja kwa moja",
  ],
  [
    "Let's talk about your Kenya, reimagined",
    "Tuzungumzie Kenya iliyobuniwa upya",
  ],
  ["Contacts", "Mawasiliano"],
  ["Institutional HQ", "Makao makuu ya taasisi"],
  ["Nairobi general secretariat", "Ofisi kuu ya Nairobi"],
  ["Dedicated department inboxes", "Barua pepe za idara maalum"],
  ["Nairobi location", "Mahali Nairobi"],
  ["Westlands innovation precinct", "Eneo la ubunifu la Westlands"],
  ["Our service commitments", "Ahadi zetu za huduma"],
  ["Clear, human support", "Msaada ulio wazi na wa kibinadamu"],
  ["Institutional inquiries FAQ", "Maswali ya taasisi"],
  ["A few useful details", "Maelezo machache yenye manufaa"],
  ["Open map", "Fungua ramani"],
  ["Read the case study", "Soma mfano wa mradi"],
  ["Browse by area", "Vinjari kulingana na eneo"],
  ["All posts", "Machapisho yote"],
  ["Healthcare XR", "XR ya huduma za afya"],
  ["Education and TVET", "Elimu na TVET"],
  ["Civic social", "Jamii na uraia"],
  ["Immersive tech 101", "Utangulizi wa teknolojia ya kina"],
  ["Engineering", "Uhandisi"],
  ["All dispatches", "Taarifa zote"],
  ["Press releases", "Taarifa kwa vyombo vya habari"],
  ["Deployment milestones", "Hatua za utekelezaji"],
  ["Media coverage", "Habari za vyombo vya habari"],
  ["Awards and recognition", "Tuzo na kutambuliwa"],
  ["Showing results", "Inaonyesha matokeo"],
  [
    "No items match that search. Try another term or category.",
    "Hakuna matokeo yanayolingana na utafutaji huo. Jaribu neno au aina nyingine.",
  ],
  ["Read release", "Soma taarifa"],
  ["Print digest", "Chapisha muhtasari"],
  ["Request this resource", "Omba nyenzo hii"],
  ["Request pack", "Omba kifurushi"],
  ["Request logo assets", "Omba faili za nembo"],
  ["Request full press kit", "Omba kifurushi kamili cha vyombo vya habari"],
  ["Open roles page", "Fungua ukurasa wa nafasi za kazi"],
  ["Contact Swizzy", "Wasiliana na Swizzy"],
  ["Join the community", "Jiunge na jumuiya"],
  ["Back to", "Rudi kwenye"],
  ["Continue reading", "Endelea kusoma"],
  ["Read full case study", "Soma mfano kamili wa mradi"],
  ["Search resources", "Tafuta nyenzo"],
  ["Search Swizzy", "Tafuta Swizzy"],
  ["Search opportunities", "Tafuta fursa"],
  ["Search roles", "Tafuta nafasi"],
  ["Select a program or technical area", "Chagua programu au eneo la kiufundi"],
  [
    "Tell us what you would like to explore",
    "Tuambie ungependa kuchunguza nini",
  ],
  ["What would you like to explore?", "Ungependa kuchunguza nini?"],
  ["Preferred format", "Muundo unaopendelea"],
  ["Preferred demo format", "Muundo wa onyesho unaopendelea"],
  ["In person", "Ana kwa ana"],
  ["Online", "Mtandaoni"],
  ["Full-time", "Muda wote"],
  ["Part-time", "Muda wa sehemu"],
  ["Contract", "Mkataba"],
  ["Internship", "Mafunzo kwa vitendo"],
  ["Role details", "Maelezo ya nafasi"],
  ["About the role", "Kuhusu nafasi hii"],
  ["What you will do", "Majukumu yako"],
  ["What you bring", "Unacholeta"],
  ["Nice to have", "Ujuzi wa ziada unaohitajika"],
  ["Benefits", "Manufaa"],
  ["Our hiring process", "Mchakato wetu wa kuajiri"],
  ["Apply now", "Tuma ombi sasa"],
  ["Back to team", "Rudi kwenye timu"],
  ["Related articles", "Makala zinazohusiana"],
  ["Related case studies", "Mifano ya miradi inayohusiana"],
  ["Download PDF", "Pakua PDF"],
  ["Share", "Shiriki"],
  ["Copy link", "Nakili kiungo"],
  ["Previous", "Iliyotangulia"],
  ["Next", "Inayofuata"],
  ["Load more", "Pakia zaidi"],
  ["Preview", "Hakiki"],
  ["Download", "Pakua"],
  ["All resources", "Nyenzo zote"],
  ["General", "Jumla"],
  ["Methodology", "Mbinu"],
  ["Brochure", "Kijitabu"],
  ["Guide", "Mwongozo"],
  ["Company profile", "Wasifu wa kampuni"],
  ["Headquarters", "Makao makuu"],
  ["Product areas", "Maeneo ya bidhaa"],
  ["Our products", "Bidhaa zetu"],
  ["Explore products", "Gundua bidhaa"],
  ["Explore solutions", "Gundua suluhisho"],
  ["Request a meeting", "Omba mkutano"],
  ["Partner with us", "Shirikiana nasi"],
  ["Start a project", "Anzisha mradi"],
  ["Talk to our team", "Zungumza na timu yetu"],
  ["Technology", "Teknolojia"],
  ["Healthcare", "Huduma za afya"],
  ["Public sector", "Sekta ya umma"],
  ["Development", "Maendeleo"],
  ["Technology partners", "Washirika wa teknolojia"],
  ["Healthcare partners", "Washirika wa afya"],
  ["Education partners", "Washirika wa elimu"],
  ["Government and public sector", "Serikali na sekta ya umma"],
  ["Development partners", "Washirika wa maendeleo"],
  ["Collaboration across sectors", "Ushirikiano katika sekta mbalimbali"],
  ["Our partners", "Washirika wetu"],
  ["Why partner with Swizzy", "Kwa nini ushirikiane na Swizzy"],
  [
    "Local context, shared responsibility",
    "Muktadha wa ndani, wajibu wa pamoja",
  ],
  ["Ways to work together", "Njia za kufanya kazi pamoja"],
  ["Choose a useful first step", "Chagua hatua ya kwanza yenye manufaa"],
  ["For investors", "Kwa wawekezaji"],
  [
    "Growing Kenya's immersive economy together",
    "Kukuza pamoja uchumi wa teknolojia ya kina nchini Kenya",
  ],
  [
    "Invest in Kenya's immersive future",
    "Wekeza katika mustakabali wa teknolojia ya kina nchini Kenya",
  ],
  ["Focus", "Lengo"],
  ["Approach", "Mbinu"],
  ["Institution-led deployment", "Utekelezaji unaoongozwa na taasisi"],
  ["Start a conversation", "Anzisha mazungumzo"],
  ["Partnership inquiry", "Swali kuhusu ushirikiano"],
  ["Partnership type", "Aina ya ushirikiano"],
  ["Co-development", "Uundaji wa pamoja"],
  ["Distribution or integration", "Usambazaji au muunganisho"],
  ["Impact and sustainability", "Matokeo na uendelevu"],
  ["Measuring what matters for Kenya", "Kupima mambo muhimu kwa Kenya"],
  ["A clear view of progress", "Picha iliyo wazi ya maendeleo"],
  ["Headline measures", "Vipimo vikuu"],
  ["Impact by product area", "Matokeo kulingana na eneo la bidhaa"],
  ["Stories of change", "Hadithi za mabadiliko"],
  [
    "Outcomes belong to the people doing the work",
    "Matokeo ni ya watu wanaofanya kazi",
  ],
  ["Responsible delivery", "Utekelezaji unaowajibika"],
  [
    "Access, privacy, and environmental responsibility",
    "Ufikiaji, faragha na wajibu wa mazingira",
  ],
  ["Learners reached", "Wanafunzi waliofikiwa"],
  ["Clinical learners", "Wanafunzi wa kliniki"],
  ["Partner institutions", "Taasisi washirika"],
  ["Counties represented", "Kaunti zilizowakilishwa"],
  [
    "Source and measurement period to be confirmed.",
    "Chanzo na kipindi cha upimaji vitathibitishwa.",
  ],
  ["Request an impact report", "Omba ripoti ya matokeo"],
  ["Content pending approval", "Maudhui yanasubiri idhini"],
  [
    "This detail page uses the shared Swizzy reading layout. Add approved article, event, profile, or case-study content here.",
    "Ukurasa huu unatumia muundo wa pamoja wa Swizzy. Ongeza maudhui yaliyoidhinishwa ya makala, tukio, wasifu au mfano wa mradi hapa.",
  ],
  [
    "This role detail template is ready for an approved job description. No unverified opening is being advertised.",
    "Muundo huu wa nafasi uko tayari kwa maelezo ya kazi yaliyoidhinishwa. Hakuna nafasi isiyothibitishwa inayotangazwa.",
  ],
  ["Content pending approval", "Maudhui yanasubiri idhini"],
  ["Last updated: September 2026.", "Ilisasishwa mwisho: Septemba 2026."],
  [
    "Source and measurement period to be confirmed.",
    "Chanzo na kipindi cha upimaji vitathibitishwa.",
  ],
  ["Swahili", "Kiswahili"],
  ["English", "Kiingereza"],
  ["Language", "Lugha"],
  ["Switch language", "Badilisha lugha"],
  ["Switch to English", "Badilisha hadi Kiingereza"],
  ["Switch to Swahili", "Badilisha hadi Kiswahili"],
  ["EN", "EN"],
  ["SW", "SW"],
])

const languageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
} | null>(null)

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ")
}

function translateValue(value: string, language: Language) {
  if (language === "en") return value
  const key = normalize(value)
  return swahiliTranslations.get(key) ?? swahili.get(key) ?? value
}

function translateTextNode(node: Text, language: Language) {
  const current = node.data
  let entry = translatedNodes.get(node)

  if (!entry || current !== entry.rendered) {
    entry = { source: current, rendered: current }
  }

  const leading = entry.source.match(/^\s*/)?.[0] ?? ""
  const trailing = entry.source.match(/\s*$/)?.[0] ?? ""
  const content = entry.source.slice(
    leading.length,
    entry.source.length - trailing.length || undefined
  )
  const translation = translateValue(content, language)
  const rendered = `${leading}${translation}${trailing}`

  if (node.data !== rendered) node.data = rendered
  entry.rendered = rendered
  translatedNodes.set(node, entry)
}

const translatableAttributes = ["alt", "aria-label", "placeholder", "title"]

function translateElement(element: Element, language: Language) {
  let attributes = translatedAttributes.get(element)
  if (!attributes) {
    attributes = new Map()
    translatedAttributes.set(element, attributes)
  }

  for (const attribute of translatableAttributes) {
    const current = element.getAttribute(attribute)
    if (current === null) continue

    let entry = attributes.get(attribute)
    if (!entry || current !== entry.rendered) {
      entry = { source: current, rendered: current }
    }

    const rendered = translateValue(entry.source, language)
    if (current !== rendered) element.setAttribute(attribute, rendered)
    entry.rendered = rendered
    attributes.set(attribute, entry)
  }
}

function translateTree(node: Node, language: Language) {
  if (node.nodeType === Node.TEXT_NODE) {
    translateTextNode(node as Text, language)
    return
  }

  if (node instanceof Element) translateElement(node, language)
  node.childNodes.forEach((child) => translateTree(child, language))
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (saved === "en" || saved === "sw") setLanguageState(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dataset.language = language
    translateTree(document.body, language)

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          translateTextNode(mutation.target as Text, language)
        } else if (mutation.type === "attributes") {
          if (mutation.target instanceof Element) {
            translateElement(mutation.target, language)
          }
        } else {
          mutation.addedNodes.forEach((node) => translateTree(node, language))
        }
      }
    })

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatableAttributes,
    })

    return () => observer.disconnect()
  }, [language])

  function setLanguage(nextLanguage: Language) {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
    setLanguageState(nextLanguage)
  }

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(languageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export type { Language }
