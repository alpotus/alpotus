/**
 * ALPOTUS 5.0 - THE ULTIMATE CHALLENGE DATA (19 SUBJECTS)
 * Designed for: NEET PG, USMLE, and Professional Exams.
 */

const MedicalData = {
    "Anatomy": {
        color: "#f87171", // Soft Red
        chapters: {
            "osteology": {
                title: "Osteology & Joints",
                games: [{
                    id: "ana-ost-1",
                    name: "Carpal Bone Rows",
                    categories: ["Proximal Row", "Distal Row"],
                    mnemonic: "💡 Mnemonic: She Looks Too Pretty, Try To Catch Her",
                    items: [
                        { name: "Scaphoid", category: "Proximal Row", note: "Most commonly fractured carpal bone; risk of avascular necrosis." },
                        { name: "Pisiform", category: "Proximal Row", note: "A sesamoid bone located within the Flexor Carpi Ulnaris tendon." },
                        { name: "Capitate", category: "Distal Row", note: "The largest carpal bone; the first to begin ossification." },
                        { name: "Trapezium", category: "Distal Row", note: "Articulates with the first metacarpal to form the thumb joint." }
                    ]
                }]
            }
        }
    },
    "Physiology": {
        color: "#fb923c", // Orange
        chapters: {
            "blood": {
                title: "Hematology",
                games: [{
                    id: "phy-bld-1",
                    name: "WBC Classification",
                    categories: ["Granulocytes", "Agranulocytes"],
                    mnemonic: "💡 Mnemonic: Granpa Phil (Baso-phil, Eosino-phil, Neutro-phil)",
                    items: [
                        { name: "Neutrophil", category: "Granulocytes", note: "First responders to bacterial infection; multi-lobed nucleus." },
                        { name: "Lymphocyte", category: "Agranulocytes", note: "Key players in adaptive immunity (B and T cells)." },
                        { name: "Basophil", category: "Granulocytes", note: "Contain histamine and heparin; involved in allergic responses." }
                    ]
                }]
            }
        }
    },
    "Biochemistry": {
        color: "#facc15", // Yellow
        chapters: {
            "vitamins": {
                title: "Vitamins & Minerals",
                games: [{
                    id: "bio-vit-1",
                    name: "Solubility",
                    categories: ["Fat Soluble", "Water Soluble"],
                    mnemonic: "💡 Mnemonic: KADE is Fat.",
                    items: [
                        { name: "Vitamin K", category: "Fat Soluble", note: "Essential for post-translational modification of clotting factors II, VII, IX, X." },
                        { name: "Vitamin C", category: "Water Soluble", note: "Required for collagen hydroxylation; deficiency leads to Scurvy." }
                    ]
                }]
            }
        }
    },
    "Pathology": {
        color: "#ef4444", // Crimson
        chapters: {
            "inflammation": {
                title: "General Pathology",
                games: [{
                    id: "pat-inf-1",
                    name: "Cellular Aging Markers",
                    categories: ["Hypertrophy", "Hyperplasia"],
                    mnemonic: "💡 Mnemonic: Trophy = Size, Plasia = Number",
                    items: [
                        { name: "Uterine Growth (Pregnancy)", category: "Hypertrophy", note: "Increased size of cells in response to hormonal stimulation." },
                        { name: "Breast Development", category: "Hyperplasia", note: "Increased number of glandular cells during puberty/lactation." }
                    ]
                }]
            }
        }
    },
    "Microbiology": {
        color: "#a855f7", // Purple
        chapters: {
            "virology": {
                title: "Viral Classification",
                games: [{
                    id: "mic-vir-1",
                    name: "Genomic Structure",
                    categories: ["DNA Viruses", "RNA Viruses"],
                    mnemonic: "💡 Mnemonic: Most DNA viruses are Double Stranded (except Parvo).",
                    items: [
                        { name: "Herpesvirus", category: "DNA Viruses", note: "Enveloped, double-stranded linear DNA virus." },
                        { name: "HIV", category: "RNA Viruses", note: "Retrovirus using reverse transcriptase to integrate into host genome." }
                    ]
                }]
            }
        }
    },
    "Pharmacology": {
        color: "#3b82f6", // Blue
        chapters: {
            "cvs": {
                title: "Cardiovascular Drugs",
                games: [{
                    id: "pha-cvs-1",
                    name: "Diuretics Site",
                    categories: ["Loop", "Thiazide"],
                    mnemonic: "💡 Mnemonic: Loop = Thick Ascending Limb, Thiazide = Distal Tubule",
                    items: [
                        { name: "Furosemide", category: "Loop", note: "Inhibits Na+/K+/2Cl- cotransporter; high ceiling diuretic." },
                        { name: "Chlorthalidone", category: "Thiazide", note: "Inhibits Na+/Cl- symport; long-acting, used for hypertension." }
                    ]
                }]
            }
        }
    },
    "Forensic Medicine": {
        color: "#475569", // Slate
        chapters: {
            "toxicology": {
                title: "Poisons",
                games: [{
                    id: "fmt-tox-1",
                    name: "Antidote Matching",
                    categories: ["Chelating Agents", "Physiological Antidotes"],
                    mnemonic: "💡 Mnemonic: Lead = EDTA, Iron = Desferrioxamine",
                    items: [
                        { name: "BAL (Dimercaprol)", category: "Chelating Agents", note: "Used for Arsenic, Mercury, and Lead poisoning." },
                        { name: "Naloxone", category: "Physiological Antidotes", note: "Competitive opioid antagonist; reverses respiratory depression." }
                    ]
                }]
            }
        }
    },
    "Community Medicine": {
        color: "#16a34a", // Green
        chapters: {
            "epidemiology": {
                title: "Vaccinology",
                games: [{
                    id: "psm-vac-1",
                    name: "Vaccine Type",
                    categories: ["Live Attenuated", "Killed/Inactivated"],
                    mnemonic: "💡 Mnemonic: Rome Is My Best Place (Rubella, OPV, Measles, BCG, Polio-Sabin)",
                    items: [
                        { name: "BCG", category: "Live Attenuated", note: "Derived from Mycobacterium bovis; given intradermally at birth." },
                        { name: "Salk Polio", category: "Killed/Inactivated", note: "Injected polio vaccine; safer for immunocompromised patients." }
                    ]
                }]
            }
        }
    },
    "ENT": {
        color: "#06b6d4", // Cyan
        chapters: {
            "ear": {
                title: "Otology",
                games: [{
                    id: "ent-ear-1",
                    name: "Hearing Loss",
                    categories: ["Conductive", "Sensorineural"],
                    mnemonic: "💡 Mnemonic: Rinne Negative = Conductive.",
                    items: [
                        { name: "Otosclerosis", category: "Conductive", note: "Fixation of stapes footplate; Schwartz sign may be seen." },
                        { name: "Presbycusis", category: "Sensorineural", note: "Age-related hearing loss; usually high-frequency sounds first." }
                    ]
                }]
            }
        }
    },
    "Ophthalmology": {
        color: "#2dd4bf", // Teal
        chapters: {
            "retina": {
                title: "Retinal Disorders",
                games: [{
                    id: "oph-ret-1",
                    name: "Diabetic Retinopathy",
                    categories: ["Non-Proliferative", "Proliferative"],
                    mnemonic: "💡 Mnemonic: NvD/NvE = Proliferative (Neovascularization).",
                    items: [
                        { name: "Microaneurysms", category: "Non-Proliferative", note: "Earliest clinically detectable sign of diabetic retinopathy." },
                        { name: "Vitreous Hemorrhage", category: "Proliferative", note: "Result of fragile new vessels bleeding into the vitreous humor." }
                    ]
                }]
            }
        }
    },
    "Medicine": {
        color: "#1e3a8a", // Dark Blue
        chapters: {
            "cardiology": {
                title: "Valvular Heart Disease",
                games: [{
                    id: "med-car-1",
                    name: "Murmur Timing",
                    categories: ["Systolic", "Diastolic"],
                    mnemonic: "💡 Mnemonic: ASMI (Aortic Stenosis, Mitral Insufficiency) = Systolic.",
                    items: [
                        { name: "Mitral Stenosis", category: "Diastolic", note: "Mid-diastolic rumbling murmur with opening snap." },
                        { name: "Aortic Stenosis", category: "Systolic", note: "Ejection systolic crescendo-decrescendo murmur." }
                    ]
                }]
            }
        }
    },
    "Surgery": {
        color: "#991b1b", // Dark Red
        chapters: {
            "hernia": {
                title: "Abdominal Wall",
                games: [{
                    id: "sur-her-1",
                    name: "Inguinal Anatomy",
                    categories: ["Direct", "Indirect"],
                    mnemonic: "💡 Mnemonic: MD (Medial to vessels = Direct).",
                    items: [
                        { name: "Patent Processus Vaginalis", category: "Indirect", note: "Congenital failure of closure; most common type of hernia." },
                        { name: "Hesselbach's Triangle", category: "Direct", note: "Weakness in the posterior wall of the inguinal canal." }
                    ]
                }]
            }
        }
    },
    "OBG": {
        color: "#db2777", // Pink
        chapters: {
            "labor": {
                title: "Obstetrics",
                games: [{
                    id: "obg-lab-1",
                    name: "Stages of Labor",
                    categories: ["1st Stage", "2nd Stage", "3rd Stage"],
                    mnemonic: "💡 Mnemonic: Dilate, Deliver, Detach.",
                    items: [
                        { name: "Cervical Effacement", category: "1st Stage", note: "Thinning and shortening of the cervix before dilation." },
                        { name: "Placental Separation", category: "3rd Stage", note: "Signs include lengthening of the cord and a gush of blood." }
                    ]
                }]
            }
        }
    },
    "Pediatrics": {
        color: "#6366f1", // Indigo
        chapters: {
            "development": {
                title: "Developmental Milestones",
                games: [{
                    id: "ped-dev-1",
                    name: "Age of Achievement",
                    categories: ["6 Months", "12 Months"],
                    mnemonic: "💡 Mnemonic: Sit at 6, Stand at 12.",
                    items: [
                        { name: "Sitting with Support", category: "6 Months", note: "Usually achieved alongside the disappearance of primitive reflexes." },
                        { name: "Walking alone", category: "12 Months", note: "A major gross motor milestone; variance is normal up to 18m." }
                    ]
                }]
            }
        }
    },
    "Orthopedics": {
        color: "#78350f", // Brown
        chapters: {
            "fractures": {
                title: "Traumatology",
                games: [{
                    id: "ort-fra-1",
                    name: "Eponymous Fractures",
                    categories: ["Distal Radius", "Other"],
                    mnemonic: "💡 Mnemonic: Colles = Dinner Fork (Dorsal displacement).",
                    items: [
                        { name: "Smith's Fracture", category: "Distal Radius", note: "Reverse Colles; ventral displacement of the distal fragment." },
                        { name: "Monteggia Fracture", category: "Other", note: "Ulnar fracture with proximal radial head dislocation." }
                    ]
                }]
            }
        }
    },
    "Dermatology": {
        color: "#be185d", // Deep Pink
        chapters: {
            "bullous": {
                title: "Blistering Diseases",
                games: [{
                    id: "der-bul-1",
                    name: "Acantholysis",
                    categories: ["Intraepidermal", "Subepidermal"],
                    mnemonic: "💡 Mnemonic: Pemphigus is Vulgar (In your face/Top layer).",
                    items: [
                        { name: "Pemphigus Vulgaris", category: "Intraepidermal", note: "Positive Nikolsky sign; flaccid bullae that rupture easily." },
                        { name: "Bullous Pemphigoid", category: "Subepidermal", note: "Tense bullae; target antigen is BP180/BP230." }
                    ]
                }]
            }
        }
    },
    "Psychiatry": {
        color: "#581c87", // Deep Purple
        chapters: {
            "defense": {
                title: "Defense Mechanisms",
                games: [{
                    id: "psy-def-1",
                    name: "Maturity Level",
                    categories: ["Immature", "Mature"],
                    mnemonic: "💡 Mnemonic: Mature = SASH (Sublimation, Altruism, Suppression, Humor)",
                    items: [
                        { name: "Projection", category: "Immature", note: "Attributing one's own unacknowledged feelings to others." },
                        { name: "Sublimation", category: "Mature", note: "Transforming unacceptable impulses into socially productive actions." }
                    ]
                }]
            }
        }
    },
    "Radiology": {
        color: "#0f172a", // Darkest Blue
        chapters: {
            "imaging": {
                title: "Diagnostic Density",
                games: [{
                    id: "rad-img-1",
                    name: "CT Density",
                    categories: ["Hyperdense", "Hypodense"],
                    mnemonic: "💡 Mnemonic: Acute Blood is Bright (Hyper).",
                    items: [
                        { name: "Acute Hemorrhage", category: "Hyperdense", note: "Appears white on CT; Hounsfield units usually 60-80." },
                        { name: "Ischemic Stroke (Late)", category: "Hypodense", note: "Appears dark due to edema and tissue necrosis." }
                    ]
                }]
            }
        }
    },
    "Anesthesia": {
        color: "#0d9488", // Teal
        chapters: {
            "agents": {
                title: "Pharmacology of Anesthesia",
                games: [{
                    id: "ane-age-1",
                    name: "Induction Agents",
                    categories: ["Intravenous", "Inhalational"],
                    mnemonic: "💡 Mnemonic: Propofol = Milk of Amnesia.",
                    items: [
                        { name: "Propofol", category: "Intravenous", note: "Rapid onset; associated with pain on injection and PRIS." },
                        { name: "Sevoflurane", category: "Inhalational", note: "Sweet-smelling; preferred for pediatric mask induction." }
                    ]
                }]
            }
        }
    }
};

/**
 * 📘 DEVELOPER GUIDE: HOW TO ADD NEW ITEMS
 * -----------------------------------------------------------
 * 1. Find the Subject (e.g., "Pathology").
 * 2. Find or create a Chapter inside that subject (e.g., "hematology").
 * 3. Inside 'games' array, add a new object { }:
 *    - id: Unique string (e.g., "path-hem-1")
 *    - name: The display title of the game.
 *    - categories: Array of the "Buckets" the user will see.
 *    - mnemonic: A string with the memory aid.
 *    - items: Array of { name: "Drug/Organism", category: "Correct Bucket", note: "MCQ Fact" }
 * 4. Save the file. The app will update automatically!
 */
 
 /* --------------------------------------------------------- */
/* ALPOTUS VOID - PASTE NEW GAMES BELOW THIS LINE            */
/* --------------------------------------------------------- */
const MyAddedGames = [
    // --- NEW_DATA_START ---
    
    {
    "id": "gen-1775222543226",
    "name": "Bio Terrisom Agents",
    "subject": "Microbiology",
    "chapter": "Bacteriology",
    "categories": [
        "Category A - Easily disseminated/transmitted; high mortality and morbidity; high social disruption; major public health impact; requires public health preparedness",
        "Category B - Moderately easy to disseminate; moderate morbidity; low mortality; requires enhanced disease diagnosis and surveillance",
        "Category C - Easily disseminated; emerging pathogens; can be engineered for mass dissemination; major health impact"
    ],
    "mnemonic": "A: Francis Plays Bottles Filled with Small Ants | B: Brucella Burkholderia Cause Rare Serious Exposure | C: Encephalitis, Cholera, Crypto, Nipah, Hendra",
    "items": [
        {
            "name": "Bacillus anthracis",
            "category": "Category A - Easily disseminated/transmitted; high mortality and morbidity; high social disruption; major public health impact; requires public health preparedness",
            "note": "Anthrax agent; Category A because it is easily disseminated and causes high mortality."
        },
        {
            "name": "Yersinia pestis",
            "category": "Category A - Easily disseminated/transmitted; high mortality and morbidity; high social disruption; major public health impact; requires public health preparedness",
            "note": "Causes plague, especially rapidly fatal pneumonic plague after aerosol spread."
        },
        {
            "name": "Francisella tularensis",
            "category": "Category A - Easily disseminated/transmitted; high mortality and morbidity; high social disruption; major public health impact; requires public health preparedness",
            "note": "Causes tularemia; very low infectious dose makes it a major bioterrorism concern."
        },
        {
            "name": "Botulinum toxin",
            "category": "Category A - Easily disseminated/transmitted; high mortality and morbidity; high social disruption; major public health impact; requires public health preparedness",
            "note": "Most potent known toxin; causes descending flaccid paralysis."
        },
        {
            "name": "Variola major (Smallpox virus)",
            "category": "Category A - Easily disseminated/transmitted; high mortality and morbidity; high social disruption; major public health impact; requires public health preparedness",
            "note": "Smallpox virus; highly contagious with major public health impact."
        },
        {
            "name": "Ebola virus",
            "category": "Category A - Easily disseminated/transmitted; high mortality and morbidity; high social disruption; major public health impact; requires public health preparedness",
            "note": "Filovirus causing viral hemorrhagic fever with very high mortality."
        },
        {
            "name": "Marburg virus",
            "category": "Category A - Easily disseminated/transmitted; high mortality and morbidity; high social disruption; major public health impact; requires public health preparedness",
            "note": "Filovirus producing severe hemorrhagic fever and high fatality rates."
        },
        {
            "name": "Lassa fever virus",
            "category": "Category A - Easily disseminated/transmitted; high mortality and morbidity; high social disruption; major public health impact; requires public health preparedness",
            "note": "Arenavirus causing hemorrhagic fever and included among Category A threats."
        },
        {
            "name": "Brucella species",
            "category": "Category B - Moderately easy to disseminate; moderate morbidity; low mortality; requires enhanced disease diagnosis and surveillance",
            "note": "Cause brucellosis with prolonged undulating fever and moderate morbidity."
        },
        {
            "name": "Burkholderia mallei",
            "category": "Category B - Moderately easy to disseminate; moderate morbidity; low mortality; requires enhanced disease diagnosis and surveillance",
            "note": "Causes glanders and is moderately easy to disseminate."
        },
        {
            "name": "Burkholderia pseudomallei",
            "category": "Category B - Moderately easy to disseminate; moderate morbidity; low mortality; requires enhanced disease diagnosis and surveillance",
            "note": "Causes melioidosis, especially in tropical regions."
        },
        {
            "name": "Chlamydia psittaci",
            "category": "Category B - Moderately easy to disseminate; moderate morbidity; low mortality; requires enhanced disease diagnosis and surveillance",
            "note": "Causes psittacosis, usually acquired from infected birds."
        },
        {
            "name": "Coxiella burnetii",
            "category": "Category B - Moderately easy to disseminate; moderate morbidity; low mortality; requires enhanced disease diagnosis and surveillance",
            "note": "Agent of Q fever; highly infectious and resistant in the environment."
        },
        {
            "name": "Rickettsia prowazekii",
            "category": "Category B - Moderately easy to disseminate; moderate morbidity; low mortality; requires enhanced disease diagnosis and surveillance",
            "note": "Causes epidemic typhus and is spread by lice."
        },
        {
            "name": "Ricin toxin",
            "category": "Category B - Moderately easy to disseminate; moderate morbidity; low mortality; requires enhanced disease diagnosis and surveillance",
            "note": "Toxin from castor beans that inhibits protein synthesis."
        },
        {
            "name": "Staphylococcal enterotoxin B",
            "category": "Category B - Moderately easy to disseminate; moderate morbidity; low mortality; requires enhanced disease diagnosis and surveillance",
            "note": "Superantigen toxin causing severe food poisoning and toxic shock-like illness."
        },
        {
            "name": "Epsilon toxin of Clostridium perfringens",
            "category": "Category B - Moderately easy to disseminate; moderate morbidity; low mortality; requires enhanced disease diagnosis and surveillance",
            "note": "Powerful exotoxin regarded as a potential bioterrorism agent."
        },
        {
            "name": "Eastern Equine Encephalitis virus",
            "category": "Category C - Easily disseminated; emerging pathogens; can be engineered for mass dissemination; major health impact",
            "note": "Emerging encephalitis virus with potential for mass dissemination."
        },
        {
            "name": "Western Equine Encephalitis virus",
            "category": "Category C - Easily disseminated; emerging pathogens; can be engineered for mass dissemination; major health impact",
            "note": "Emerging arbovirus causing encephalitis and major health impact."
        },
        {
            "name": "Venezuelan Equine Encephalitis virus",
            "category": "Category C - Easily disseminated; emerging pathogens; can be engineered for mass dissemination; major health impact",
            "note": "Highly infectious encephalitis virus that can be aerosolized."
        },
        {
            "name": "Salmonella",
            "category": "Category C - Easily disseminated; emerging pathogens; can be engineered for mass dissemination; major health impact",
            "note": "Major food safety threat capable of widespread outbreaks."
        },
        {
            "name": "Shigella",
            "category": "Category C - Easily disseminated; emerging pathogens; can be engineered for mass dissemination; major health impact",
            "note": "Foodborne and waterborne pathogen causing bacillary dysentery."
        },
        {
            "name": "Vibrio cholerae",
            "category": "Category C - Easily disseminated; emerging pathogens; can be engineered for mass dissemination; major health impact",
            "note": "Water safety threat causing cholera with profuse rice-water diarrhoea."
        },
        {
            "name": "Cryptosporidium",
            "category": "Category C - Easily disseminated; emerging pathogens; can be engineered for mass dissemination; major health impact",
            "note": "Waterborne protozoan causing severe diarrhoea, especially in immunocompromised patients."
        },
        {
            "name": "Nipah virus",
            "category": "Category C - Easily disseminated; emerging pathogens; can be engineered for mass dissemination; major health impact",
            "note": "Emerging zoonotic virus causing severe encephalitis with high mortality."
        },
        {
            "name": "Hendra virus",
            "category": "Category C - Easily disseminated; emerging pathogens; can be engineered for mass dissemination; major health impact",
            "note": "Emerging paramyxovirus transmitted from horses and bats, causing severe respiratory and neurologic disease."
        }
    ]
},
    
    {
    "id": "gen-blood",
    "name": "Organisms causing Anemia",
    "subject": "Microbiology",
     "chapter": "Hematology",
    "categories": [
        "Hemolytic Anemia",
        "Megaloblastic Anemia",
        "Anemia of Chronic Infection"
    ],
    "mnemonic": "HMA = Hemolysis by Malaria/Microbes, Megaloblasts by Microbial malabsorption, Anemia by chronic infection",
    "items": [
        {
            "name": "Plasmodium falciparum",
            "category": "Hemolytic Anemia",
            "note": "Causes severe intravascular hemolysis and blackwater fever in falciparum malaria."
        },
        {
            "name": "Babesia microti",
            "category": "Hemolytic Anemia",
            "note": "Tick-borne parasite causing hemolytic anemia with Maltese cross forms on smear."
        },
        {
            "name": "Bartonella bacilliformis",
            "category": "Hemolytic Anemia",
            "note": "Agent of Oroya fever producing massive hemolytic anemia."
        },
        {
            "name": "Clostridium perfringens",
            "category": "Hemolytic Anemia",
            "note": "Alpha toxin can cause sudden severe intravascular hemolysis."
        },
        {
            "name": "Diphyllobothrium latum",
            "category": "Megaloblastic Anemia",
            "note": "Fish tapeworm that consumes vitamin B12 and produces megaloblastic anemia."
        },
        {
            "name": "Giardia lamblia",
            "category": "Megaloblastic Anemia",
            "note": "Chronic giardiasis may impair folate absorption and lead to megaloblastic anemia."
        },
        {
            "name": "Helicobacter pylori",
            "category": "Megaloblastic Anemia",
            "note": "Associated with chronic gastritis causing impaired B12 absorption and anemia."
        },
        {
            "name": "Mycobacterium tuberculosis",
            "category": "Anemia of Chronic Infection",
            "note": "Long-standing tuberculosis commonly causes normocytic anemia of chronic disease."
        },
        {
            "name": "Leishmania donovani",
            "category": "Anemia of Chronic Infection",
            "note": "Kala-azar causes anemia due to bone marrow suppression and hypersplenism."
        },
        {
            "name": "Human Immunodeficiency Virus",
            "category": "Anemia of Chronic Infection",
            "note": "HIV commonly causes chronic anemia through marrow suppression and opportunistic infections."
        }
    ]
},
{
    "id": "gen-1774873375387",
    "name": "Class 1",
    "subject": "Pharmacology",
    "chapter": "Blockers",
    "categories": [
        "Class I Sodium Channel Blockers",
        "Class II Beta Blockers",
        "Class III Potassium Channel Blockers"
    ],
    "mnemonic": "Some Block Potassium: Sodium first, Beta next, Potassium last.",
    "items": [
        {
            "name": "Quinidine",
            "category": "Class I Sodium Channel Blockers",
            "note": "Class IA drug that can cause cinchonism and torsades de pointes."
        },
        {
            "name": "Procainamide",
            "category": "Class I Sodium Channel Blockers",
            "note": "Class IA anti-arrhythmic associated with drug-induced lupus."
        },
        {
            "name": "Lidocaine",
            "category": "Class I Sodium Channel Blockers",
            "note": "Class IB drug mainly used for ventricular arrhythmias after myocardial infarction."
        },
        {
            "name": "Flecainide",
            "category": "Class I Sodium Channel Blockers",
            "note": "Class IC drug contraindicated after MI because it is strongly pro-arrhythmic."
        },
        {
            "name": "Metoprolol",
            "category": "Class II Beta Blockers",
            "note": "Beta-1 selective blocker useful for rate control in supraventricular tachycardia."
        },
        {
            "name": "Esmolol",
            "category": "Class II Beta Blockers",
            "note": "Ultra-short acting beta blocker commonly used in acute arrhythmias."
        },
        {
            "name": "Propranolol",
            "category": "Class II Beta Blockers",
            "note": "Non-selective beta blocker that decreases AV nodal conduction."
        },
        {
            "name": "Amiodarone",
            "category": "Class III Potassium Channel Blockers",
            "note": "Most effective broad-spectrum anti-arrhythmic but may cause pulmonary fibrosis and thyroid dysfunction."
        },
        {
            "name": "Sotalol",
            "category": "Class III Potassium Channel Blockers",
            "note": "Has both beta-blocking and potassium channel-blocking actions; may prolong QT interval."
        },
        {
            "name": "Dofetilide",
            "category": "Class III Potassium Channel Blockers",
            "note": "Pure Class III agent used for atrial fibrillation but can cause torsades de pointes."
        }
    ]
},









    // --- NEW_DATA_END ---
];
 
