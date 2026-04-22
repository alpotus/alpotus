/**
 * ALPOTUS 5.0 - CLASSIFICATION DATA BRAIN
 */
const ClassificationData = {
    "Pharmacology": {
        color: "#3b82f6",
        chapters: {
            "Autacoids": [
                {
                    id: "nsaids-01",
                    name: "NSAIDs – Classification",
                    categories: ["Preferential COX-2", "Selective COX-2", "Propionic acid", "Salicylates"],
                    mnemonic: "💡 Mnemonic: 'Cele'coxib is 'Selective'",
                    items: [
                        { name: "Nimesulide", category: "Preferential COX-2", note: "Commonly used for fever; risk of hepatotoxicity." },
                        { name: "Celecoxib", category: "Selective COX-2", note: "Sulphonamide derivative; avoids gastric irritation." },
                        { name: "Ibuprofen", category: "Propionic acid", note: "Prototype propionic acid derivative; safer in children." },
                        { name: "Aspirin", category: "Salicylates", note: "Irreversibly inhibits COX; used in low dose for anti-platelet." }
                    ]
                }
            ]
        }
    },
    "Microbiology": {
        color: "#8b5cf6",
        chapters: {
            "Bacteriology": [
                {
                    id: "mic-01",
                    name: "Gram Stain Response",
                    categories: ["Gram Positive", "Gram Negative"],
                    mnemonic: "💡 Mnemonic: COCCI are mostly Positive (except Neisseria)",
                    items: [
                        { name: "Staphylococcus", category: "Gram Positive", note: "Catalase positive; occurs in grape-like clusters." },
                        { name: "Neisseria", category: "Gram Negative", note: "Coffee bean shaped diplococci; causes meningitis." }
                    ]
                }
            ]
        }
    }
};

/* --------------------------------------------------------- */const MyAddedClassifications = [
/* ALPOTUS VOID - PASTE NEW GAMES BELOW THIS LINE            */
{
    "id": "gen-1774889766395",
    "name": "Histaminergic Agonists",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "Nonselective agonists",
        "Selective H1 agonists",
        "Selective H2 agonists",
        "Selective H3 agonists"
    ],
    "mnemonic": "Histamine & Betahistine = Broad; Methyl/Pyridyl/Thiazolyl = H1; Dimaprit/Impromidine = H2; Alpha-Methylhistamine/Imetit = H3",
    "items": [
        {
            "name": "Histamine",
            "category": "Nonselective agonists",
            "note": ""
        },
        {
            "name": "Betahistine",
            "category": "Nonselective agonists",
            "note": ""
        },
        {
            "name": "2-Methylhistamine",
            "category": "Selective H1 agonists",
            "note": ""
        },
        {
            "name": "2-Pyridyl ethylamine",
            "category": "Selective H1 agonists",
            "note": ""
        },
        {
            "name": "2-Thiazolyl ethylamine",
            "category": "Selective H1 agonists",
            "note": ""
        },
        {
            "name": "Dimaprit",
            "category": "Selective H2 agonists",
            "note": ""
        },
        {
            "name": "Impromidine",
            "category": "Selective H2 agonists",
            "note": ""
        },
        {
            "name": "(R)-α-Methylhistamine",
            "category": "Selective H3 agonists",
            "note": ""
        },
        {
            "name": "Imetit",
            "category": "Selective H3 agonists",
            "note": ""
        }
    ]
},

{
    "id": "gen-1774890196967",
    "name": "H1 Antagonists ",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "Highly sedative",
        "Moderately sedative",
        "Mildly sedative",
        "Second generation (nonsedating) antihistaminics"
    ],
    "mnemonic": "Highly sedative: Diphenhydramine, Dimenhydrinate, Promethazine, Hydroxyzine → Moderate: Cyproheptadine, Meclozine, Cinnarizine → Mild: Pheniramine, Chlorpheniramine, Dexchlorpheniramine, Triprolidine, Clemastine → Second generation: Fexofenadine, Loratadine, Desloratadine, Cetirizine, Levocetirizine, Azelastine, Mizolastine, Ebastine, Rupatadine",
    "items": [
        {
            "name": "Diphenhydramine",
            "category": "Highly sedative",
            "note": ""
        },
        {
            "name": "Dimenhydrinate",
            "category": "Highly sedative",
            "note": ""
        },
        {
            "name": "Promethazine",
            "category": "Highly sedative",
            "note": ""
        },
        {
            "name": "Hydroxyzine",
            "category": "Highly sedative",
            "note": ""
        },
        {
            "name": "Cyproheptadine",
            "category": "Moderately sedative",
            "note": ""
        },
        {
            "name": "Meclozine",
            "category": "Moderately sedative",
            "note": ""
        },
        {
            "name": "Cinnarizine",
            "category": "Moderately sedative",
            "note": ""
        },
        {
            "name": "Pheniramine",
            "category": "Mildly sedative",
            "note": ""
        },
        {
            "name": "Chlorpheniramine",
            "category": "Mildly sedative",
            "note": ""
        },
        {
            "name": "Dexchlorpheniramine",
            "category": "Mildly sedative",
            "note": ""
        },
        {
            "name": "Triprolidine",
            "category": "Mildly sedative",
            "note": ""
        },
        {
            "name": "Clemastine",
            "category": "Mildly sedative",
            "note": ""
        },
        {
            "name": "Fexofenadine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Loratadine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Desloratadine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Cetirizine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Levocetirizine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Azelastine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Mizolastine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Ebastine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Rupatadine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        }
    ]
},



{
    "id": "gen-1774890339765",
    "name": "5- Hydroxy Tryptamine Antagonists",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "Nonselective antagonists & partial agonists/antagonists",
        "5-HT2 Antagonists",
        "5-HT3 Antagonists"
    ],
    "mnemonic": "Ergot-LSD-Methysergide-Cyproheptadine-Cinnarizine = Nonselective; Ketanserin-Ritanserin-Clozapine-Risperidone = 5-HT2; Ondansetron group = 5-HT3",
    "items": [
        {
            "name": "Ergotamine",
            "category": "Nonselective antagonists & partial agonists/antagonists",
            "note": ""
        },
        {
            "name": "Lysergic acid diethyl amide (LSD)",
            "category": "Nonselective antagonists & partial agonists/antagonists",
            "note": ""
        },
        {
            "name": "2-Bromo LSD",
            "category": "Nonselective antagonists & partial agonists/antagonists",
            "note": ""
        },
        {
            "name": "Methysergide",
            "category": "Nonselective antagonists & partial agonists/antagonists",
            "note": ""
        },
        {
            "name": "Cyproheptadine",
            "category": "Nonselective antagonists & partial agonists/antagonists",
            "note": ""
        },
        {
            "name": "Cinnarizine",
            "category": "Nonselective antagonists & partial agonists/antagonists",
            "note": ""
        },
        {
            "name": "Ketanserin",
            "category": "5-HT2 Antagonists",
            "note": ""
        },
        {
            "name": "Ritanserin",
            "category": "5-HT2 Antagonists",
            "note": ""
        },
        {
            "name": "Clozapine",
            "category": "5-HT2 Antagonists",
            "note": ""
        },
        {
            "name": "Risperidone",
            "category": "5-HT2 Antagonists",
            "note": ""
        },
        {
            "name": "Ondansetron",
            "category": "5-HT3 Antagonists",
            "note": ""
        },
        {
            "name": "Granisetron",
            "category": "5-HT3 Antagonists",
            "note": ""
        },
        {
            "name": "Tropisetron",
            "category": "5-HT3 Antagonists",
            "note": ""
        },
        {
            "name": "Palonosetron",
            "category": "5-HT3 Antagonists",
            "note": ""
        },
        {
            "name": "Ramosetron",
            "category": "5-HT3 Antagonists",
            "note": ""
        }
    ]
},
    
    
    {
    "id": "gen-1774890642922",
    "name": "Drugs For Migraine ",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "To treat attacks",
        "To prevent attacks",
        "Selective 5-HT1D/1B agonists",
        "Ergot alkaloids"
    ],
    "mnemonic": "Acute attack: Analgesics + Antiemetics + NSAIDs; Prevention: Propranolol, Amitriptyline, Flunarizine, Gabapentin, Topiramate, Erenumab, Valproic acid; Triptans abort attack; Ergot alkaloids are older alternatives.",
    "items": [
        {
            "name": "Paracetamol",
            "category": "To treat attacks",
            "note": "Useful in mild migraine attacks."
        },
        {
            "name": "Aspirin",
            "category": "To treat attacks",
            "note": "Effective in acute migraine; often combined with antiemetic."
        },
        {
            "name": "Codeine",
            "category": "To treat attacks",
            "note": "Reserved for severe pain not relieved by simple analgesics."
        },
        {
            "name": "Metoclopramide",
            "category": "To treat attacks",
            "note": "Controls nausea and enhances gastric emptying during migraine."
        },
        {
            "name": "Domperidone",
            "category": "To treat attacks",
            "note": "Antiemetic used when nausea and vomiting accompany migraine."
        },
        {
            "name": "Prochlorperazine",
            "category": "To treat attacks",
            "note": "Useful antiemetic in acute migraine with vomiting."
        },
        {
            "name": "Promethazine",
            "category": "To treat attacks",
            "note": "Sedative antiemetic sometimes used in migraine."
        },
        {
            "name": "Ibuprofen",
            "category": "To treat attacks",
            "note": "Common NSAID for acute migraine attack."
        },
        {
            "name": "Naproxen",
            "category": "To treat attacks",
            "note": "Longer acting NSAID useful in migraine."
        },
        {
            "name": "Diclofenac",
            "category": "To treat attacks",
            "note": "Rapidly acting NSAID used in acute migraine."
        },
        {
            "name": "Mephenamic acid",
            "category": "To treat attacks",
            "note": "NSAID occasionally used in migraine attacks."
        },
        {
            "name": "Propranolol",
            "category": "To prevent attacks",
            "note": "Most commonly used prophylactic drug for migraine."
        },
        {
            "name": "Amitriptyline",
            "category": "To prevent attacks",
            "note": "Useful prophylactic especially when migraine is associated with depression."
        },
        {
            "name": "Flunarizine",
            "category": "To prevent attacks",
            "note": "Calcium channel blocker used for migraine prophylaxis."
        },
        {
            "name": "Gabapentin",
            "category": "To prevent attacks",
            "note": "May reduce frequency of migraine attacks."
        },
        {
            "name": "Topiramate",
            "category": "To prevent attacks",
            "note": "Effective prophylactic for recurrent migraine."
        },
        {
            "name": "Erenumab",
            "category": "To prevent attacks",
            "note": "Monoclonal antibody against CGRP receptor used in resistant migraine."
        },
        {
            "name": "Valproic acid",
            "category": "To prevent attacks",
            "note": "Antiepileptic useful for migraine prophylaxis."
        },
        {
            "name": "Sumatriptan",
            "category": "Selective 5-HT1D/1B agonists",
            "note": "Prototype triptan; aborts acute migraine by cranial vasoconstriction."
        },
        {
            "name": "Rizatriptan",
            "category": "Selective 5-HT1D/1B agonists",
            "note": "Triptan used for acute migraine attack."
        },
        {
            "name": "Naratriptan",
            "category": "Selective 5-HT1D/1B agonists",
            "note": "Longer acting triptan with slower onset."
        },
        {
            "name": "Zolmitriptan",
            "category": "Selective 5-HT1D/1B agonists",
            "note": "Effective oral triptan for acute migraine."
        },
        {
            "name": "Frovatriptan",
            "category": "Selective 5-HT1D/1B agonists",
            "note": "Very long acting triptan useful in recurrent migraine."
        },
        {
            "name": "Ergotamine",
            "category": "Ergot alkaloids",
            "note": "Older antimigraine drug; more effective if taken early in attack."
        },
        {
            "name": "Dihydroergotamine (DHE)",
            "category": "Ergot alkaloids",
            "note": "Less emetic than ergotamine and used in severe migraine."
        }
    ]
},
    
{
    "id": "gen-1774890756254",
    "name": "Prostaglandins",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "Natural PGs",
        "Prostaglandin analogues"
    ],
    "mnemonic": "Natural PGs = Dino-Dino-Alpro-Epo; Analogues = Carbo-Miso-Lata-Travo-Bima",
    "items": [
        {
            "name": "Dinoprostone (PGE2)",
            "category": "Natural PGs",
            "note": "Used for cervical ripening and induction of labour."
        },
        {
            "name": "Gemeprost",
            "category": "Natural PGs",
            "note": "PGE1 analogue used for cervical softening and medical termination of pregnancy."
        },
        {
            "name": "Dinoprost (PGF2α)",
            "category": "Natural PGs",
            "note": "Causes uterine contraction and is used for mid-trimester abortion."
        },
        {
            "name": "Alprostadil (PGE1)",
            "category": "Natural PGs",
            "note": "Maintains patency of ductus arteriosus and is also used in erectile dysfunction."
        },
        {
            "name": "Prostacyclin (PGI2) (Epoprostenol)",
            "category": "Natural PGs",
            "note": "Potent vasodilator and inhibitor of platelet aggregation used in pulmonary hypertension."
        },
        {
            "name": "Carboprost (15-methyl PGF2α)",
            "category": "Prostaglandin analogues",
            "note": "Used to control postpartum haemorrhage and for abortion."
        },
        {
            "name": "Misoprostol (methyl PGE1 ester)",
            "category": "Prostaglandin analogues",
            "note": "Prevents NSAID-induced peptic ulcer and is used with mifepristone for abortion."
        },
        {
            "name": "Latanoprost (PGE2 analogue)",
            "category": "Prostaglandin analogues",
            "note": "Used in open-angle glaucoma; increases uveoscleral outflow."
        },
        {
            "name": "Travoprost",
            "category": "Prostaglandin analogues",
            "note": "Antiglaucoma drug that lowers intraocular pressure."
        },
        {
            "name": "Bimatoprost",
            "category": "Prostaglandin analogues",
            "note": "Used in glaucoma and may increase eyelash growth."
        }
    ]
},    
    
    
    
    
    {
    "id": "gen-1774891166854",
    "name": "NSAIDS",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "Nonselective COX Inhibitors - Salicylates",
        "Nonselective COX Inhibitors - Propionic Acid Derivatives",
        "Nonselective COX Inhibitors - Fenamate Derivatives",
        "Nonselective COX Inhibitors - Enolic Acid Derivatives",
        "Nonselective COX Inhibitors - Acetic Acid Derivatives",
        "Nonselective COX Inhibitors - Pyrazolone Derivatives",
        "Preferential COX-2 Inhibitors",
        "Selective COX-2 Inhibitors",
        "Analgesic-Antipyretics with Poor Antiinflammatory Action - Para-aminophenol Derivative",
        "Analgesic-Antipyretics with Poor Antiinflammatory Action - Benzoxazocine Derivative"
    ],
    "mnemonic": "Salicylates = Aspirin; Propionic = Ibuprofen-Naproxen-Ketoprofin-Flurbiprofen; Fenamate = Mephenamic acid; Enolic = Piroxicam-Tenoxicam; Acetic = Ketorolac-Indomethacin-Nabumetone; Pyrazolone = Phenylbutazone-Oxyphenbutazone-Propyphenazone; Preferential COX-2 = Nimesulide-Diclofenac-Aceclofenac-Meloxicam-Etodolac-Nabumetone; Selective COX-2 = Celecoxib-Etoricoxib-Parecoxib; Poor antiinflammatory = Paracetamol-Nefopam",
    "items": [
        {
            "name": "Aspirin",
            "category": "Nonselective COX Inhibitors - Salicylates",
            "note": "Irreversibly inhibits COX and also inhibits platelet aggregation."
        },
        {
            "name": "Ibuprofen",
            "category": "Nonselective COX Inhibitors - Propionic Acid Derivatives",
            "note": "Widely used NSAID with analgesic, antipyretic and antiinflammatory action."
        },
        {
            "name": "Naproxen",
            "category": "Nonselective COX Inhibitors - Propionic Acid Derivatives",
            "note": "Longer acting propionic acid derivative useful in arthritis."
        },
        {
            "name": "Ketoprofin",
            "category": "Nonselective COX Inhibitors - Propionic Acid Derivatives",
            "note": "Propionic acid derivative with potent analgesic effect."
        },
        {
            "name": "Flurbiprofen",
            "category": "Nonselective COX Inhibitors - Propionic Acid Derivatives",
            "note": "Potent NSAID commonly used in musculoskeletal pain."
        },
        {
            "name": "Mephenamic acid",
            "category": "Nonselective COX Inhibitors - Fenamate Derivatives",
            "note": "Commonly used in dysmenorrhoea."
        },
        {
            "name": "Piroxicam",
            "category": "Nonselective COX Inhibitors - Enolic Acid Derivatives",
            "note": "Long acting NSAID with once daily dosing."
        },
        {
            "name": "Tenoxicam",
            "category": "Nonselective COX Inhibitors - Enolic Acid Derivatives",
            "note": "Enolic acid derivative with prolonged action."
        },
        {
            "name": "Ketorolac",
            "category": "Nonselective COX Inhibitors - Acetic Acid Derivatives",
            "note": "Potent analgesic used for short-term severe pain."
        },
        {
            "name": "Indomethacin",
            "category": "Nonselective COX Inhibitors - Acetic Acid Derivatives",
            "note": "Used in acute gout and to close patent ductus arteriosus."
        },
        {
            "name": "Nabumetone",
            "category": "Nonselective COX Inhibitors - Acetic Acid Derivatives",
            "note": "Nonacidic prodrug with less gastric irritation."
        },
        {
            "name": "Phenylbutazone",
            "category": "Nonselective COX Inhibitors - Pyrazolone Derivatives",
            "note": "Rarely used now because of bone marrow toxicity."
        },
        {
            "name": "Oxyphenbutazone",
            "category": "Nonselective COX Inhibitors - Pyrazolone Derivatives",
            "note": "Pyrazolone derivative with high incidence of adverse effects."
        },
        {
            "name": "Propyphenazone",
            "category": "Nonselective COX Inhibitors - Pyrazolone Derivatives",
            "note": "Used mainly as analgesic-antipyretic in combination preparations."
        },
        {
            "name": "Nimesulide",
            "category": "Preferential COX-2 Inhibitors",
            "note": "Preferential COX-2 inhibitor; restricted because of hepatotoxicity."
        },
        {
            "name": "Diclofenac",
            "category": "Preferential COX-2 Inhibitors",
            "note": "Widely used NSAID with preferential COX-2 inhibition."
        },
        {
            "name": "Aceclofenac",
            "category": "Preferential COX-2 Inhibitors",
            "note": "Diclofenac congener with better gastric tolerability."
        },
        {
            "name": "Meloxicam",
            "category": "Preferential COX-2 Inhibitors",
            "note": "Long acting NSAID with relatively lower gastric toxicity."
        },
        {
            "name": "Etodolac",
            "category": "Preferential COX-2 Inhibitors",
            "note": "Useful in osteoarthritis and rheumatoid arthritis."
        },
        {
            "name": "Celecoxib",
            "category": "Selective COX-2 Inhibitors",
            "note": "Selective COX-2 inhibitor causing less gastric irritation."
        },
        {
            "name": "Etoricoxib",
            "category": "Selective COX-2 Inhibitors",
            "note": "Highly selective COX-2 inhibitor used in arthritis."
        },
        {
            "name": "Parecoxib",
            "category": "Selective COX-2 Inhibitors",
            "note": "Injectable selective COX-2 inhibitor used postoperatively."
        },
        {
            "name": "Paracetamol (Acetaminophen)",
            "category": "Analgesic-Antipyretics with Poor Antiinflammatory Action - Para-aminophenol Derivative",
            "note": "Good analgesic and antipyretic with negligible antiinflammatory action."
        },
        {
            "name": "Nefopam",
            "category": "Analgesic-Antipyretics with Poor Antiinflammatory Action - Benzoxazocine Derivative",
            "note": "Centrally acting non-opioid analgesic without antiinflammatory effect."
        }
    ]
},
{
    "id": "gen-1774891313320",
    "name": "Anti rheumatoid drugs",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "DMARDs - Nonbiological Drugs - Immunosuppressants",
        "DMARDs - Nonbiological Drugs - Other Immunomodulators",
        "DMARDs - Biological Agents - TNF-α Inhibitors",
        "DMARDs - Biological Agents - Other Biologicals",
        "Adjuvant Drugs - Glucocorticoids"
    ],
    "mnemonic": "Immunosuppressants = Methotrexate-Azathioprine-Cyclosporine; Immunomodulators = Sulfasalazine-Hydroxychloroquine-Chloroquine-Leflunomide-Tofacitinib; TNF-α inhibitors = Etanercept-Infliximab-Adalimumab; Other biologicals = Anakinra-Abatacept-Rituximab; Adjuvant = Prednisolone",
    "items": [
        {
            "name": "Methotrexate",
            "category": "DMARDs - Nonbiological Drugs - Immunosuppressants",
            "note": "Most commonly used and first-line DMARD in rheumatoid arthritis."
        },
        {
            "name": "Azathioprine",
            "category": "DMARDs - Nonbiological Drugs - Immunosuppressants",
            "note": "Used in severe rheumatoid arthritis not responding to other DMARDs."
        },
        {
            "name": "Cyclosporine",
            "category": "DMARDs - Nonbiological Drugs - Immunosuppressants",
            "note": "Effective DMARD but use limited by nephrotoxicity."
        },
        {
            "name": "Sulfasalazine",
            "category": "DMARDs - Nonbiological Drugs - Other Immunomodulators",
            "note": "Frequently combined with methotrexate in rheumatoid arthritis."
        },
        {
            "name": "Hydroxychloroquine",
            "category": "DMARDs - Nonbiological Drugs - Other Immunomodulators",
            "note": "Useful in mild rheumatoid arthritis; may cause retinal toxicity."
        },
        {
            "name": "Chloroquine",
            "category": "DMARDs - Nonbiological Drugs - Other Immunomodulators",
            "note": "Less commonly used because of higher risk of ocular toxicity."
        },
        {
            "name": "Leflunomide",
            "category": "DMARDs - Nonbiological Drugs - Other Immunomodulators",
            "note": "Inhibits pyrimidine synthesis and slows progression of rheumatoid arthritis."
        },
        {
            "name": "Tofacitinib",
            "category": "DMARDs - Nonbiological Drugs - Other Immunomodulators",
            "note": "Oral JAK inhibitor used in moderate to severe rheumatoid arthritis."
        },
        {
            "name": "Etanercept",
            "category": "DMARDs - Biological Agents - TNF-α Inhibitors",
            "note": "Fusion protein that binds and neutralizes TNF-α."
        },
        {
            "name": "Infliximab",
            "category": "DMARDs - Biological Agents - TNF-α Inhibitors",
            "note": "Monoclonal antibody against TNF-α used with methotrexate."
        },
        {
            "name": "Adalimumab",
            "category": "DMARDs - Biological Agents - TNF-α Inhibitors",
            "note": "Fully human monoclonal antibody against TNF-α."
        },
        {
            "name": "Anakinra",
            "category": "DMARDs - Biological Agents - Other Biologicals",
            "note": "Interleukin-1 receptor antagonist used in rheumatoid arthritis."
        },
        {
            "name": "Abatacept",
            "category": "DMARDs - Biological Agents - Other Biologicals",
            "note": "Blocks T-cell activation by inhibiting costimulation."
        },
        {
            "name": "Rituximab",
            "category": "DMARDs - Biological Agents - Other Biologicals",
            "note": "Anti-CD20 monoclonal antibody causing B-cell depletion."
        },
        {
            "name": "Prednisolone",
            "category": "Adjuvant Drugs - Glucocorticoids",
            "note": "Used as adjunct for rapid symptomatic relief in rheumatoid arthritis."
        },
        {
            "name": "Other glucocorticoids",
            "category": "Adjuvant Drugs - Glucocorticoids",
            "note": "May be used short term to suppress inflammation during flare-ups."
        }
    ]
},
    
    
    {
    "id": "gen-1774891414451",
    "name": "Drugs For Gout",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "Acute Gout - NSAIDs",
        "Acute Gout - Colchicine",
        "Acute Gout - Glucocorticoids",
        "Chronic Gout / Hyperuricaemia - Uricosuric Drugs",
        "Chronic Gout / Hyperuricaemia - Uric Acid Synthesis Inhibitors"
    ],
    "mnemonic": "Acute gout = NSAIDs-Colchicine-Glucocorticoids; Chronic gout = Probenecid-Sulfinpyrazone-Lesinurad or Allopurinol-Febuxostat",
    "items": [
        {
            "name": "NSAIDs",
            "category": "Acute Gout - NSAIDs",
            "note": "First-line drugs for rapid relief of pain and inflammation in acute gout."
        },
        {
            "name": "Colchicine",
            "category": "Acute Gout - Colchicine",
            "note": "Suppresses neutrophil migration and is most effective if started early."
        },
        {
            "name": "Glucocorticoids",
            "category": "Acute Gout - Glucocorticoids",
            "note": "Used when NSAIDs and colchicine are contraindicated."
        },
        {
            "name": "Probenecid",
            "category": "Chronic Gout / Hyperuricaemia - Uricosuric Drugs",
            "note": "Increases uric acid excretion by inhibiting tubular reabsorption."
        },
        {
            "name": "Sulfinpyrazone",
            "category": "Chronic Gout / Hyperuricaemia - Uricosuric Drugs",
            "note": "Uricosuric drug that promotes renal excretion of uric acid."
        },
        {
            "name": "Lesinurad",
            "category": "Chronic Gout / Hyperuricaemia - Uricosuric Drugs",
            "note": "Selective uric acid reabsorption inhibitor used with xanthine oxidase inhibitors."
        },
        {
            "name": "Allopurinol",
            "category": "Chronic Gout / Hyperuricaemia - Uric Acid Synthesis Inhibitors",
            "note": "Xanthine oxidase inhibitor and the drug of choice for chronic gout."
        },
        {
            "name": "Febuxostat",
            "category": "Chronic Gout / Hyperuricaemia - Uric Acid Synthesis Inhibitors",
            "note": "Nonpurine xanthine oxidase inhibitor used when allopurinol is not tolerated."
        }
    ]
},
    
   {
    "id": "gen-1774891623763",
    "name": "Drugs for cough",
    "subject": "Pharmacology",
    "chapter": "Respiratory System ",
    "categories": [
        "Pharyngeal Demulcents",
        "Expectorants - Secretion Enhancers",
        "Expectorants - Mucolytics",
        "Antitussives - Opioids",
        "Antitussives - Nonopioids",
        "Antitussives - Antihistaminics",
        "Antitussives - Adjuvant Antitussives - Bronchodilators"
    ],
    "mnemonic": "Demulcents soothe; Secretion enhancers loosen; Mucolytics liquefy; Opioids and Nonopioids suppress cough; Antihistaminics help dry cough; Bronchodilators help wheezy cough.",
    "items": [
        {
            "name": "Lozenges",
            "category": "Pharyngeal Demulcents",
            "note": "Soothe irritated pharyngeal mucosa and reduce cough reflex."
        },
        {
            "name": "Syrups",
            "category": "Pharyngeal Demulcents",
            "note": "Provide a soothing effect on the throat in dry cough."
        },
        {
            "name": "Glycerine",
            "category": "Pharyngeal Demulcents",
            "note": "Acts locally by coating and soothing the pharynx."
        },
        {
            "name": "Liquorice",
            "category": "Pharyngeal Demulcents",
            "note": "Traditional demulcent used to relieve throat irritation."
        },
        {
            "name": "Potassium citrate",
            "category": "Expectorants - Secretion Enhancers",
            "note": "Increases bronchial secretion and helps expectoration."
        },
        {
            "name": "Potassium iodide",
            "category": "Expectorants - Secretion Enhancers",
            "note": "Promotes secretion of thin mucus from respiratory tract."
        },
        {
            "name": "Guaiphenesin",
            "category": "Expectorants - Secretion Enhancers",
            "note": "Most commonly used expectorant that facilitates removal of sputum."
        },
        {
            "name": "Vasaka",
            "category": "Expectorants - Secretion Enhancers",
            "note": "Herbal expectorant with mucokinetic action."
        },
        {
            "name": "Ammonium chloride",
            "category": "Expectorants - Secretion Enhancers",
            "note": "Reflexly increases respiratory tract secretions."
        },
        {
            "name": "Tolu balsam",
            "category": "Expectorants - Secretion Enhancers",
            "note": "Traditional expectorant used in cough mixtures."
        },
        {
            "name": "Bromhexine",
            "category": "Expectorants - Mucolytics",
            "note": "Depolymerizes mucopolysaccharides and reduces sputum viscosity."
        },
        {
            "name": "Ambroxol",
            "category": "Expectorants - Mucolytics",
            "note": "Active metabolite of bromhexine with mucolytic action."
        },
        {
            "name": "Acetylcysteine",
            "category": "Expectorants - Mucolytics",
            "note": "Breaks disulfide bonds in mucus and is also antidote for paracetamol poisoning."
        },
        {
            "name": "Carbocisteine",
            "category": "Expectorants - Mucolytics",
            "note": "Liquefies viscid sputum in chronic respiratory disease."
        },
        {
            "name": "Acebrophylline",
            "category": "Expectorants - Mucolytics",
            "note": "Has both mucolytic and bronchodilator properties."
        },
        {
            "name": "Codeine",
            "category": "Antitussives - Opioids",
            "note": "Most effective opioid antitussive acting on cough centre."
        },
        {
            "name": "Ethylmorphine",
            "category": "Antitussives - Opioids",
            "note": "Opioid antitussive used in troublesome dry cough."
        },
        {
            "name": "Pholcodine",
            "category": "Antitussives - Opioids",
            "note": "Suppresses cough with less analgesic and addictive effect than codeine."
        },
        {
            "name": "Noscapine",
            "category": "Antitussives - Nonopioids",
            "note": "Nonopioid antitussive without analgesic or addictive properties."
        },
        {
            "name": "Dextromethorphan",
            "category": "Antitussives - Nonopioids",
            "note": "Commonly used nonopioid cough suppressant with no analgesic effect."
        },
        {
            "name": "Chlophedianol",
            "category": "Antitussives - Nonopioids",
            "note": "Nonopioid cough suppressant with mild sedative action."
        },
        {
            "name": "Chlorpheniramine",
            "category": "Antitussives - Antihistaminics",
            "note": "Useful in cough associated with allergy and postnasal drip."
        },
        {
            "name": "Promethazine",
            "category": "Antitussives - Antihistaminics",
            "note": "Sedative antihistaminic often included in cough syrups."
        },
        {
            "name": "Diphenhydramine",
            "category": "Antitussives - Antihistaminics",
            "note": "Suppresses cough and also has sedative antihistaminic action."
        },
        {
            "name": "Salbutamol",
            "category": "Antitussives - Adjuvant Antitussives - Bronchodilators",
            "note": "Useful when cough is associated with bronchospasm."
        },
        {
            "name": "Terbutaline",
            "category": "Antitussives - Adjuvant Antitussives - Bronchodilators",
            "note": "Bronchodilator useful in wheezy cough."
        }
    ]
}, 
    
    
  
  {
    "id": "gen-1774891918833",
    "name": "Drugs For Bronchial Asthma",
    "subject": "Pharmacology",
    "chapter": "Respiratory System",
    "categories": [
        "Bronchodilators - β2-Sympathomimetics - Short-acting",
        "Bronchodilators - β2-Sympathomimetics - Intermediate-acting",
        "Bronchodilators - β2-Sympathomimetics - Long-acting",
        "Bronchodilators - Methylxanthines",
        "Bronchodilators - Anticholinergics",
        "Anti-Inflammatory / Prophylactic Drugs - Leukotriene Antagonists",
        "Anti-Inflammatory / Prophylactic Drugs - Mast Cell Stabilizers",
        "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Systemic",
        "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Inhalational",
        "Anti-Inflammatory / Prophylactic Drugs - Anti-IgE Antibody",
        "Anti-Inflammatory / Prophylactic Drugs - PDE-4 Inhibitor"
    ],
    "mnemonic": "SABA = Salbutamol-Terbutaline; LABA = Formoterol-Salmeterol-Indacaterol-Arformoterol; Xanthines = Theophylline group; Anticholinergics = Ipratropium-Tiotropium; Prevention = Montelukast-Cromoglycate-Steroids-Omalizumab-Roflumilast",
    "items": [
        {
            "name": "Salbutamol",
            "category": "Bronchodilators - β2-Sympathomimetics - Short-acting",
            "note": "Most commonly used rescue bronchodilator for acute asthma."
        },
        {
            "name": "Terbutaline",
            "category": "Bronchodilators - β2-Sympathomimetics - Short-acting",
            "note": "Short-acting β2 agonist used in acute bronchospasm."
        },
        {
            "name": "Bambuterol",
            "category": "Bronchodilators - β2-Sympathomimetics - Intermediate-acting",
            "note": "Prodrug of terbutaline with longer duration of action."
        },
        {
            "name": "Formoterol",
            "category": "Bronchodilators - β2-Sympathomimetics - Long-acting",
            "note": "Long-acting β2 agonist with rapid onset of action."
        },
        {
            "name": "Salmeterol",
            "category": "Bronchodilators - β2-Sympathomimetics - Long-acting",
            "note": "Long-acting β2 agonist used only for prophylaxis, not acute attack."
        },
        {
            "name": "Indacaterol",
            "category": "Bronchodilators - β2-Sympathomimetics - Long-acting",
            "note": "Ultra-long acting β2 agonist mainly used in COPD."
        },
        {
            "name": "Arformoterol",
            "category": "Bronchodilators - β2-Sympathomimetics - Long-acting",
            "note": "Long-acting β2 agonist and active isomer of formoterol."
        },
        {
            "name": "Theophylline",
            "category": "Bronchodilators - Methylxanthines",
            "note": "Bronchodilator with narrow therapeutic index."
        },
        {
            "name": "Aminophylline",
            "category": "Bronchodilators - Methylxanthines",
            "note": "Water-soluble preparation of theophylline used intravenously."
        },
        {
            "name": "Choline theophyllinate",
            "category": "Bronchodilators - Methylxanthines",
            "note": "Oral preparation of theophylline with better tolerability."
        },
        {
            "name": "Hydroxyethyl theophylline",
            "category": "Bronchodilators - Methylxanthines",
            "note": "Theophylline derivative used as bronchodilator."
        },
        {
            "name": "Doxophylline",
            "category": "Bronchodilators - Methylxanthines",
            "note": "Xanthine bronchodilator with fewer cardiac side effects."
        },
        {
            "name": "Ipratropium bromide",
            "category": "Bronchodilators - Anticholinergics",
            "note": "Inhaled anticholinergic useful in asthma and COPD."
        },
        {
            "name": "Tiotropium bromide",
            "category": "Bronchodilators - Anticholinergics",
            "note": "Long-acting anticholinergic used as add-on therapy."
        },
        {
            "name": "Glycopyrrolate",
            "category": "Bronchodilators - Anticholinergics",
            "note": "Long-acting inhaled anticholinergic mainly used in COPD."
        },
        {
            "name": "Montelukast",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Leukotriene Antagonists",
            "note": "Leukotriene receptor antagonist useful in aspirin-induced asthma."
        },
        {
            "name": "Zafirlukast",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Leukotriene Antagonists",
            "note": "Blocks leukotriene receptors and prevents bronchoconstriction."
        },
        {
            "name": "Sodium cromoglycate",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Mast Cell Stabilizers",
            "note": "Prevents mast cell degranulation and is used prophylactically."
        },
        {
            "name": "Ketotifen",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Mast Cell Stabilizers",
            "note": "Mast cell stabilizer with additional antihistaminic action."
        },
        {
            "name": "Hydrocortisone",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Systemic",
            "note": "Used intravenously in severe acute asthma."
        },
        {
            "name": "Prednisolone",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Systemic",
            "note": "Oral corticosteroid used in severe or persistent asthma."
        },
        {
            "name": "Other glucocorticoids",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Systemic",
            "note": "Systemic steroids are reserved for severe asthma exacerbations."
        },
        {
            "name": "Beclomethasone dipropionate",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Inhalational",
            "note": "Common inhaled corticosteroid for maintenance therapy."
        },
        {
            "name": "Budesonide",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Inhalational",
            "note": "Widely used inhaled corticosteroid for persistent asthma."
        },
        {
            "name": "Flunisolide",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Inhalational",
            "note": "Inhaled steroid used for prophylaxis of chronic asthma."
        },
        {
            "name": "Fluticasone propionate",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Inhalational",
            "note": "Potent inhaled corticosteroid with high topical activity."
        },
        {
            "name": "Ciclesonide",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Inhalational",
            "note": "Prodrug inhaled corticosteroid with fewer local side effects."
        },
        {
            "name": "Omalizumab",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Anti-IgE Antibody",
            "note": "Monoclonal antibody against IgE used in severe allergic asthma."
        },
        {
            "name": "Roflumilast",
            "category": "Anti-Inflammatory / Prophylactic Drugs - PDE-4 Inhibitor",
            "note": "PDE-4 inhibitor mainly useful in COPD with chronic bronchitis."
        }
    ]
},  


{
    "id": "gen-1774928944584",
    "name": "Anterior pituitary Drugs ",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Hormones from Acidophil Cells - Growth Hormone (GH)",
        "Hormones from Acidophil Cells - Prolactin",
        "Hormones from Basophil Cells",
        "Drugs Affecting Growth Hormone (GH) - Inhibit GH Release",
        "Drugs Affecting Growth Hormone (GH) - GH Antagonist",
        "Drugs Altering Prolactin Secretion - Inhibit Prolactin Release",
        "Drugs Altering Prolactin Secretion - Enhance Prolactin Release",
        "Drugs Altering Gonadotropin (Gn) Release - Superactive GnRH Agonists",
        "Drugs Altering Gonadotropin (Gn) Release - GnRH Antagonists"
    ],
    "mnemonic": "GH = Somatropin; GH inhibition = Somatostatin-Octreotide-Lanreotide-Pegvisomant; Prolactin inhibition = Bromocriptine-Cabergoline-Apomorphine; GnRH agonists = Nafarelin-Triptorelin-Goserelin-Leuprolide; Antagonists = Ganirelix-Cetrorelix",
    "items": [
        {
            "name": "Somatropin",
            "category": "Hormones from Acidophil Cells - Growth Hormone (GH)",
            "note": "Recombinant human growth hormone used in growth hormone deficiency."
        },
        {
            "name": "Prolactin",
            "category": "Hormones from Acidophil Cells - Prolactin",
            "note": "Stimulates milk secretion from mammary glands."
        },
        {
            "name": "Thyroid Stimulating Hormone (TSH)",
            "category": "Hormones from Basophil Cells",
            "note": "Stimulates synthesis and release of thyroid hormones."
        },
        {
            "name": "Adrenocorticotropic Hormone (ACTH)",
            "category": "Hormones from Basophil Cells",
            "note": "Stimulates adrenal cortex to secrete glucocorticoids."
        },
        {
            "name": "Follicle Stimulating Hormone (FSH)",
            "category": "Hormones from Basophil Cells",
            "note": "Stimulates ovarian follicular development and spermatogenesis."
        },
        {
            "name": "Luteinizing Hormone (LH)",
            "category": "Hormones from Basophil Cells",
            "note": "Triggers ovulation and stimulates testosterone secretion."
        },
        {
            "name": "Somatostatin",
            "category": "Drugs Affecting Growth Hormone (GH) - Inhibit GH Release",
            "note": "Physiological inhibitor of growth hormone release."
        },
        {
            "name": "Octreotide",
            "category": "Drugs Affecting Growth Hormone (GH) - Inhibit GH Release",
            "note": "Long-acting somatostatin analogue used in acromegaly."
        },
        {
            "name": "Lanreotide",
            "category": "Drugs Affecting Growth Hormone (GH) - Inhibit GH Release",
            "note": "Long-acting somatostatin analogue used to suppress GH secretion."
        },
        {
            "name": "Pegvisomant",
            "category": "Drugs Affecting Growth Hormone (GH) - GH Antagonist",
            "note": "Growth hormone receptor antagonist used in acromegaly."
        },
        {
            "name": "Bromocriptine",
            "category": "Drugs Altering Prolactin Secretion - Inhibit Prolactin Release",
            "note": "Dopamine agonist that suppresses prolactin secretion."
        },
        {
            "name": "Cabergoline",
            "category": "Drugs Altering Prolactin Secretion - Inhibit Prolactin Release",
            "note": "Long-acting dopamine agonist preferred in hyperprolactinaemia."
        },
        {
            "name": "Apomorphine",
            "category": "Drugs Altering Prolactin Secretion - Inhibit Prolactin Release",
            "note": "Dopamine agonist that inhibits prolactin release."
        },
        {
            "name": "Chlorpromazine (and other neuroleptics)",
            "category": "Drugs Altering Prolactin Secretion - Enhance Prolactin Release",
            "note": "Dopamine antagonists that increase prolactin secretion."
        },
        {
            "name": "Metoclopramide",
            "category": "Drugs Altering Prolactin Secretion - Enhance Prolactin Release",
            "note": "D2 receptor blockade enhances prolactin release."
        },
        {
            "name": "Reserpine",
            "category": "Drugs Altering Prolactin Secretion - Enhance Prolactin Release",
            "note": "Depletes dopamine stores and thereby increases prolactin secretion."
        },
        {
            "name": "Nafarelin",
            "category": "Drugs Altering Gonadotropin (Gn) Release - Superactive GnRH Agonists",
            "note": "Initially stimulates and later suppresses gonadotropin release."
        },
        {
            "name": "Triptorelin",
            "category": "Drugs Altering Gonadotropin (Gn) Release - Superactive GnRH Agonists",
            "note": "Continuous administration suppresses LH and FSH secretion."
        },
        {
            "name": "Goserelin",
            "category": "Drugs Altering Gonadotropin (Gn) Release - Superactive GnRH Agonists",
            "note": "Used in carcinoma prostate and endometriosis."
        },
        {
            "name": "Leuprolide",
            "category": "Drugs Altering Gonadotropin (Gn) Release - Superactive GnRH Agonists",
            "note": "Produces reversible suppression of gonadal function."
        },
        {
            "name": "Ganirelix",
            "category": "Drugs Altering Gonadotropin (Gn) Release - GnRH Antagonists",
            "note": "Direct GnRH antagonist used in assisted reproduction."
        },
        {
            "name": "Cetrorelix",
            "category": "Drugs Altering Gonadotropin (Gn) Release - GnRH Antagonists",
            "note": "Prevents premature LH surge during ovulation induction."
        }
    ]
}, 


{
    "id": "gen-1774929083303",
    "name": "Thyroid Hormones",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Thyroid Hormones",
        "Thyroid Inhibitors - Inhibit Hormone Synthesis - Thioamides",
        "Thyroid Inhibitors - Inhibit Iodide Trapping - Ionic Inhibitors",
        "Thyroid Inhibitors - Inhibit Hormone Release",
        "Thyroid Inhibitors - Destroy Thyroid Tissue"
    ],
    "mnemonic": "Hormones = T4-T3; Synthesis inhibitors = Propylthiouracil-Methimazole-Carbimazole; Trapping inhibitors = Thiocyanate-Perchlorate-Nitrate; Release inhibitors = Iodine-Iodides; Destruction = Radioactive iodine-131",
    "items": [
        {
            "name": "Thyroxine (T4)",
            "category": "Thyroid Hormones",
            "note": "Main hormone secreted by thyroid and converted to T3 in tissues."
        },
        {
            "name": "Triiodothyronine (T3, Liothyronine)",
            "category": "Thyroid Hormones",
            "note": "More active thyroid hormone with rapid onset of action."
        },
        {
            "name": "Propylthiouracil",
            "category": "Thyroid Inhibitors - Inhibit Hormone Synthesis - Thioamides",
            "note": "Inhibits thyroid hormone synthesis and peripheral conversion of T4 to T3."
        },
        {
            "name": "Methimazole",
            "category": "Thyroid Inhibitors - Inhibit Hormone Synthesis - Thioamides",
            "note": "More potent and longer acting than propylthiouracil."
        },
        {
            "name": "Carbimazole",
            "category": "Thyroid Inhibitors - Inhibit Hormone Synthesis - Thioamides",
            "note": "Prodrug converted to methimazole in the body."
        },
        {
            "name": "Thiocyanates (SCN⁻)",
            "category": "Thyroid Inhibitors - Inhibit Iodide Trapping - Ionic Inhibitors",
            "note": "Compete with iodide and inhibit its uptake by thyroid gland."
        },
        {
            "name": "Perchlorates (ClO4⁻)",
            "category": "Thyroid Inhibitors - Inhibit Iodide Trapping - Ionic Inhibitors",
            "note": "Potent inhibitor of iodide trapping by thyroid."
        },
        {
            "name": "Nitrates (NO3⁻)",
            "category": "Thyroid Inhibitors - Inhibit Iodide Trapping - Ionic Inhibitors",
            "note": "Interfere with iodide uptake into thyroid gland."
        },
        {
            "name": "Iodine",
            "category": "Thyroid Inhibitors - Inhibit Hormone Release",
            "note": "Large doses rapidly inhibit release of thyroid hormones."
        },
        {
            "name": "Sodium iodide",
            "category": "Thyroid Inhibitors - Inhibit Hormone Release",
            "note": "Used to suppress thyroid hormone release before surgery."
        },
        {
            "name": "Potassium iodide",
            "category": "Thyroid Inhibitors - Inhibit Hormone Release",
            "note": "Produces prompt reduction in thyroid gland vascularity."
        },
        {
            "name": "Organic iodides",
            "category": "Thyroid Inhibitors - Inhibit Hormone Release",
            "note": "Inhibit release of preformed thyroid hormones."
        },
        {
            "name": "Radioactive iodine-131",
            "category": "Thyroid Inhibitors - Destroy Thyroid Tissue",
            "note": "Destroys thyroid tissue by β-radiation and is used in hyperthyroidism."
        }
    ]
},


{
    "id": "gen-1774929387439",
    "name": "Insulins and parentral antiiabetics",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Rapid-Acting Insulins - Insulin Analogues",
        "Short-Acting Insulins",
        "Intermediate-Acting Insulins",
        "Long-Acting Insulins - Insulin Analogues",
        "Other Parenteral Antidiabetic Drugs - GLP-1 Receptor Agonists",
        "Other Parenteral Antidiabetic Drugs - Amylin Analogue"
    ],
    "mnemonic": "Rapid = Lispro-Aspart-Glulisine; Short = Regular insulin; Intermediate = Lente-NPH; Long = Glargine-Detemir; Other injectables = Exenatide-Liraglutide-Pramlintide",
    "items": [
        {
            "name": "Insulin lispro",
            "category": "Rapid-Acting Insulins - Insulin Analogues",
            "note": "Rapid onset insulin analogue used immediately before meals."
        },
        {
            "name": "Insulin aspart",
            "category": "Rapid-Acting Insulins - Insulin Analogues",
            "note": "Rapid-acting insulin analogue used to control postprandial glucose."
        },
        {
            "name": "Insulin glulisine",
            "category": "Rapid-Acting Insulins - Insulin Analogues",
            "note": "Short duration insulin analogue with very rapid onset."
        },
        {
            "name": "Regular (soluble) insulin",
            "category": "Short-Acting Insulins",
            "note": "Only insulin preparation that can be given intravenously."
        },
        {
            "name": "Insulin zinc suspension (Lente insulin)",
            "category": "Intermediate-Acting Insulins",
            "note": "Intermediate-acting insulin mainly used for between-meal glycaemic control."
        },
        {
            "name": "Neutral Protamine Hagedorn (NPH) / Isophane insulin",
            "category": "Intermediate-Acting Insulins",
            "note": "Intermediate-acting insulin commonly used for basal control."
        },
        {
            "name": "Insulin glargine",
            "category": "Long-Acting Insulins - Insulin Analogues",
            "note": "Provides nearly peakless basal insulin level for 24 hours."
        },
        {
            "name": "Insulin detemir",
            "category": "Long-Acting Insulins - Insulin Analogues",
            "note": "Long-acting insulin analogue with more consistent basal effect."
        },
        {
            "name": "Exenatide",
            "category": "Other Parenteral Antidiabetic Drugs - GLP-1 Receptor Agonists",
            "note": "GLP-1 agonist that enhances glucose-dependent insulin secretion."
        },
        {
            "name": "Liraglutide",
            "category": "Other Parenteral Antidiabetic Drugs - GLP-1 Receptor Agonists",
            "note": "Long-acting GLP-1 agonist that also promotes weight loss."
        },
        {
            "name": "Pramlintide",
            "category": "Other Parenteral Antidiabetic Drugs - Amylin Analogue",
            "note": "Amylin analogue that delays gastric emptying and reduces glucagon secretion."
        }
    ]
},
    
    
    
    
    {
    "id": "gen-1774929541328",
    "name": "Oral Antiiabetic Drugs",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Sulfonylureas",
        "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Meglitinide / Phenylalanine Analogues",
        "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
        "Drugs that Overcome Insulin Resistance - Biguanide (AMPK Activator)",
        "Drugs that Overcome Insulin Resistance - Thiazolidinedione (PPAR-γ Activator)",
        "Drugs that Retard Carbohydrate Absorption - α-Glucosidase Inhibitors",
        "Miscellaneous Drugs - Sodium-Glucose Cotransporter-2 (SGLT-2) Inhibitors",
        "Miscellaneous Drugs - Dopamine D2 Agonist"
    ],
    "mnemonic": "Sulfonylureas = Tolbutamide-Glibenclamide-Glipizide-Gliclazide-Glimepiride; Meglitinides = Repaglinide-Nateglinide; DPP-4 inhibitors = Sitagliptin group; Insulin resistance = Metformin-Pioglitazone; Absorption blockers = Acarbose-Miglitol-Voglibose; Miscellaneous = Dapagliflozin-Canagliflozin-Bromocriptine",
    "items": [
        {
            "name": "Tolbutamide",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Sulfonylureas",
            "note": "First-generation sulfonylurea with short duration of action."
        },
        {
            "name": "Glibenclamide",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Sulfonylureas",
            "note": "Potent sulfonylurea with higher risk of hypoglycaemia."
        },
        {
            "name": "Glipizide",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Sulfonylureas",
            "note": "Second-generation sulfonylurea used in type 2 diabetes."
        },
        {
            "name": "Gliclazide",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Sulfonylureas",
            "note": "Sulfonylurea with relatively lower risk of hypoglycaemia."
        },
        {
            "name": "Glimepiride",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Sulfonylureas",
            "note": "Third-generation sulfonylurea with once-daily dosing."
        },
        {
            "name": "Repaglinide",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Meglitinide / Phenylalanine Analogues",
            "note": "Short-acting insulin secretagogue useful for postprandial hyperglycaemia."
        },
        {
            "name": "Nateglinide",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Meglitinide / Phenylalanine Analogues",
            "note": "Rapid and short-acting insulin secretagogue taken before meals."
        },
        {
            "name": "Sitagliptin",
            "category": "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
            "note": "DPP-4 inhibitor that prolongs incretin action."
        },
        {
            "name": "Vildagliptin",
            "category": "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
            "note": "Enhances glucose-dependent insulin secretion by inhibiting DPP-4."
        },
        {
            "name": "Saxagliptin",
            "category": "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
            "note": "DPP-4 inhibitor used in type 2 diabetes mellitus."
        },
        {
            "name": "Alogliptin",
            "category": "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
            "note": "Selective DPP-4 inhibitor with once-daily dosing."
        },
        {
            "name": "Teneligliptin",
            "category": "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
            "note": "Widely used DPP-4 inhibitor in India."
        },
        {
            "name": "Linagliptin",
            "category": "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
            "note": "DPP-4 inhibitor that does not require dose adjustment in renal impairment."
        },
        {
            "name": "Metformin",
            "category": "Drugs that Overcome Insulin Resistance - Biguanide (AMPK Activator)",
            "note": "Drug of choice in type 2 diabetes; decreases hepatic glucose output."
        },
        {
            "name": "Pioglitazone",
            "category": "Drugs that Overcome Insulin Resistance - Thiazolidinedione (PPAR-γ Activator)",
            "note": "Improves insulin sensitivity by activating PPAR-γ."
        },
        {
            "name": "Acarbose",
            "category": "Drugs that Retard Carbohydrate Absorption - α-Glucosidase Inhibitors",
            "note": "Delays intestinal carbohydrate absorption and reduces postprandial glucose rise."
        },
        {
            "name": "Miglitol",
            "category": "Drugs that Retard Carbohydrate Absorption - α-Glucosidase Inhibitors",
            "note": "α-Glucosidase inhibitor that slows carbohydrate digestion."
        },
        {
            "name": "Voglibose",
            "category": "Drugs that Retard Carbohydrate Absorption - α-Glucosidase Inhibitors",
            "note": "Commonly used α-glucosidase inhibitor in Asian patients."
        },
        {
            "name": "Dapagliflozin",
            "category": "Miscellaneous Drugs - Sodium-Glucose Cotransporter-2 (SGLT-2) Inhibitors",
            "note": "Promotes urinary glucose excretion by inhibiting SGLT-2."
        },
        {
            "name": "Canagliflozin",
            "category": "Miscellaneous Drugs - Sodium-Glucose Cotransporter-2 (SGLT-2) Inhibitors",
            "note": "SGLT-2 inhibitor that lowers blood glucose independently of insulin."
        },
        {
            "name": "Bromocriptine",
            "category": "Miscellaneous Drugs - Dopamine D2 Agonist",
            "note": "Dopamine agonist approved as adjunct in type 2 diabetes."
        }
    ]
},
    
    
    
    {
    "id": "gen-1774929669806",
    "name": "Corticosteroids",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Glucocorticoids - Short-Acting",
        "Glucocorticoids - Intermediate-Acting",
        "Glucocorticoids - Long-Acting",
        "Mineralocorticoids"
    ],
    "mnemonic": "Short = Hydrocortisone; Intermediate = Prednisolone-Methylprednisolone-Triamcinolone-Deflazacort; Long = Dexamethasone-Betamethasone; Mineralocorticoids = Aldosterone-Fludrocortisone-DOCA",
    "items": [
        {
            "name": "Hydrocortisone (Cortisol)",
            "category": "Glucocorticoids - Short-Acting",
            "note": "Short-acting glucocorticoid with both glucocorticoid and mineralocorticoid activity."
        },
        {
            "name": "Prednisolone",
            "category": "Glucocorticoids - Intermediate-Acting",
            "note": "Most commonly used intermediate-acting glucocorticoid."
        },
        {
            "name": "Methylprednisolone",
            "category": "Glucocorticoids - Intermediate-Acting",
            "note": "Intermediate-acting glucocorticoid with less mineralocorticoid action."
        },
        {
            "name": "Triamcinolone",
            "category": "Glucocorticoids - Intermediate-Acting",
            "note": "Intermediate-acting glucocorticoid with negligible salt-retaining property."
        },
        {
            "name": "Deflazacort",
            "category": "Glucocorticoids - Intermediate-Acting",
            "note": "Causes less osteoporosis and growth suppression than prednisolone."
        },
        {
            "name": "Dexamethasone",
            "category": "Glucocorticoids - Long-Acting",
            "note": "Highly potent long-acting glucocorticoid with negligible mineralocorticoid activity."
        },
        {
            "name": "Betamethasone",
            "category": "Glucocorticoids - Long-Acting",
            "note": "Long-acting glucocorticoid used for fetal lung maturation."
        },
        {
            "name": "Aldosterone",
            "category": "Mineralocorticoids",
            "note": "Principal endogenous mineralocorticoid that promotes sodium retention."
        },
        {
            "name": "Fludrocortisone",
            "category": "Mineralocorticoids",
            "note": "Potent synthetic mineralocorticoid used in adrenal insufficiency."
        },
        {
            "name": "Desoxycorticosterone acetate (DOCA)",
            "category": "Mineralocorticoids",
            "note": "Long-acting mineralocorticoid used rarely in Addison's disease."
        }
    ]
},
    
    
{
    "id": "gen-1774929798429",
    "name": "Topical steroids ",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Topical Steroids - Potent",
        "Topical Steroids - Moderately Potent",
        "Topical Steroids - Mild"
    ],
    "mnemonic": "Potent = Clobetasol-Betamethasone-Halcinonide; Moderate = Mometasone-Fluticasone-Prednicarbate; Mild = Hydrocortisone preparations",
    "items": [
        {
            "name": "Beclomethasone dipropionate (0.025%)",
            "category": "Topical Steroids - Potent",
            "note": "Potent topical corticosteroid used in inflammatory dermatoses."
        },
        {
            "name": "Betamethasone benzoate (0.025%)",
            "category": "Topical Steroids - Potent",
            "note": "Potent steroid useful in eczema and dermatitis."
        },
        {
            "name": "Betamethasone valerate (0.12%)",
            "category": "Topical Steroids - Potent",
            "note": "Commonly used potent topical corticosteroid."
        },
        {
            "name": "Halcinonide (0.1%)",
            "category": "Topical Steroids - Potent",
            "note": "Highly potent steroid used for resistant skin lesions."
        },
        {
            "name": "Clobetasol propionate (0.05%)",
            "category": "Topical Steroids - Potent",
            "note": "One of the most potent topical corticosteroids."
        },
        {
            "name": "Fluocinolone acetonide (0.025%)",
            "category": "Topical Steroids - Potent",
            "note": "Potent preparation used in severe inflammatory skin disease."
        },
        {
            "name": "Fluocortolone (0.5%)",
            "category": "Topical Steroids - Potent",
            "note": "Potent topical corticosteroid for resistant dermatoses."
        },
        {
            "name": "Triamcinolone acetonide (0.1%)",
            "category": "Topical Steroids - Potent",
            "note": "Potent topical steroid commonly used in dermatitis."
        },
        {
            "name": "Dexamethasone sodium phosphate (0.1%)",
            "category": "Topical Steroids - Potent",
            "note": "Potent steroid preparation used topically."
        },
        {
            "name": "Fluocinolone acetonide (0.01%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent preparation suitable for sensitive areas."
        },
        {
            "name": "Fluocortolone (0.25%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent steroid used in eczema and dermatitis."
        },
        {
            "name": "Clobetasol butyrate (0.05%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent corticosteroid with good anti-inflammatory effect."
        },
        {
            "name": "Mometasone (0.1%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Popular moderately potent topical steroid with once-daily use."
        },
        {
            "name": "Fluticasone propionate (0.05%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent topical corticosteroid with low systemic absorption."
        },
        {
            "name": "Hydrocortisone acetate (2.5%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent formulation of hydrocortisone."
        },
        {
            "name": "Prednicarbate (0.1–0.25%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent steroid with less skin atrophy."
        },
        {
            "name": "Triamcinolone acetonide (0.05%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent preparation of triamcinolone."
        },
        {
            "name": "Hydrocortisone acetate (0.1–1.0%)",
            "category": "Topical Steroids - Mild",
            "note": "Mild topical corticosteroid preferred for face and children."
        },
        {
            "name": "Hydrocortisone butyrate (0.001%)",
            "category": "Topical Steroids - Mild",
            "note": "Low-potency steroid suitable for mild inflammatory skin disease."
        }
    ]
},


{
    "id": "gen-1774930035302",
    "name": "Androgens and related drugs",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Androgens - Natural",
        "Androgens - Synthetic",
        "Anabolic Steroids",
        "Antiandrogens",
        "5α-Reductase Inhibitors"
    ],
    "mnemonic": "Natural = Testosterone-DHT-Androsterone; Synthetic = Methyl testosterone-Fluoxymesterone-Mesterolone; Anabolic = Methandienone-Nandrolone-Oxymetholone-Stanozolol; Antiandrogens = Cyproterone-Flutamide-Bicalutamide; 5α-reductase inhibitors = Finasteride-Dutasteride",
    "items": [
        {
            "name": "Testosterone",
            "category": "Androgens - Natural",
            "note": "Principal natural male sex hormone used in hypogonadism."
        },
        {
            "name": "Dihydrotestosterone",
            "category": "Androgens - Natural",
            "note": "More potent metabolite of testosterone formed by 5α-reductase."
        },
        {
            "name": "Androsterone",
            "category": "Androgens - Natural",
            "note": "Weak natural androgen and metabolite of testosterone."
        },
        {
            "name": "Methyl testosterone",
            "category": "Androgens - Synthetic",
            "note": "Orally active synthetic androgen."
        },
        {
            "name": "Fluoxymesterone",
            "category": "Androgens - Synthetic",
            "note": "Potent synthetic androgen with strong androgenic activity."
        },
        {
            "name": "Mesterolone",
            "category": "Androgens - Synthetic",
            "note": "Synthetic androgen with relatively weak anabolic action."
        },
        {
            "name": "Methandienone",
            "category": "Anabolic Steroids",
            "note": "Anabolic steroid with prominent protein-building effect."
        },
        {
            "name": "Nandrolone phenylpropionate",
            "category": "Anabolic Steroids",
            "note": "Anabolic steroid with reduced androgenic action."
        },
        {
            "name": "Nandrolone decanoate",
            "category": "Anabolic Steroids",
            "note": "Long-acting anabolic steroid used in wasting conditions."
        },
        {
            "name": "Oxymetholone",
            "category": "Anabolic Steroids",
            "note": "Potent anabolic steroid used in some aplastic anaemia cases."
        },
        {
            "name": "Stanozolol",
            "category": "Anabolic Steroids",
            "note": "Anabolic steroid with relatively low androgenic activity."
        },
        {
            "name": "Cyproterone acetate",
            "category": "Antiandrogens",
            "note": "Steroidal antiandrogen used in prostate cancer and hirsutism."
        },
        {
            "name": "Flutamide",
            "category": "Antiandrogens",
            "note": "Nonsteroidal antiandrogen used in carcinoma prostate."
        },
        {
            "name": "Bicalutamide",
            "category": "Antiandrogens",
            "note": "Long-acting nonsteroidal antiandrogen used in prostate cancer."
        },
        {
            "name": "Finasteride",
            "category": "5α-Reductase Inhibitors",
            "note": "Selective inhibitor of type II 5α-reductase used in BPH."
        },
        {
            "name": "Dutasteride",
            "category": "5α-Reductase Inhibitors",
            "note": "Inhibits both type I and type II 5α-reductase."
        }
    ]
},

{
    "id": "gen-1774930289888",
    "name": "Drugs For erectile dysfunction ",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Androgens",
        "Phosphodiesterase-5 (PDE-5) Inhibitors",
        "Intracavernosal Vasodilators"
    ],
    "mnemonic": "Low testosterone = Androgens; PDE-5 inhibitors = Sildenafil-Tadalafil-Vardenafil; Injection therapy = Papaverine + Phentolamine or Alprostadil",
    "items": [
        {
            "name": "Testosterone (and other androgens)",
            "category": "Androgens",
            "note": "Useful only in erectile dysfunction associated with androgen deficiency."
        },
        {
            "name": "Sildenafil",
            "category": "Phosphodiesterase-5 (PDE-5) Inhibitors",
            "note": "Prototype PDE-5 inhibitor that enhances penile erection by increasing cGMP."
        },
        {
            "name": "Tadalafil",
            "category": "Phosphodiesterase-5 (PDE-5) Inhibitors",
            "note": "Long-acting PDE-5 inhibitor with duration up to 36 hours."
        },
        {
            "name": "Vardenafil",
            "category": "Phosphodiesterase-5 (PDE-5) Inhibitors",
            "note": "PDE-5 inhibitor similar to sildenafil but more potent."
        },
        {
            "name": "Papaverine + Phentolamine",
            "category": "Intracavernosal Vasodilators",
            "note": "Injected into corpus cavernosum to produce erection."
        },
        {
            "name": "Alprostadil (PGE₁)",
            "category": "Intracavernosal Vasodilators",
            "note": "Intracavernosal prostaglandin producing erection by vasodilation."
        }
    ]
},

{
    "id": "gen-1774930578488",
    "name": "Estrogens and related drugs ",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Estrogens - Natural",
        "Estrogens - Synthetic - Steroidal",
        "Estrogens - Synthetic - Nonsteroidal",
        "Antiestrogen",
        "Selective Estrogen Receptor Down Regulator (SERD)",
        "Selective Estrogen Receptor Modulators (SERMs)",
        "Aromatase Inhibitors"
    ],
    "mnemonic": "Natural = Estradiol-Estrone-Estriol; Steroidal = Ethinylestradiol-Mestranol; Nonsteroidal = Diethylstilbestrol-Dienestrol-Tibolone; Antiestrogen = Clomiphene; SERD = Fulvestrant; SERMs = Tamoxifen-Toremifene-Raloxifene; Aromatase inhibitors = Letrozole-Anastrozole-Exemestane",
    "items": [
        {
            "name": "Estradiol",
            "category": "Estrogens - Natural",
            "note": "Most potent natural estrogen secreted by ovary."
        },
        {
            "name": "Estrone",
            "category": "Estrogens - Natural",
            "note": "Less potent natural estrogen formed from androstenedione."
        },
        {
            "name": "Estriol",
            "category": "Estrogens - Natural",
            "note": "Weakest natural estrogen and major estrogen during pregnancy."
        },
        {
            "name": "Ethinylestradiol",
            "category": "Estrogens - Synthetic - Steroidal",
            "note": "Most commonly used oral estrogen because of high potency."
        },
        {
            "name": "Mestranol",
            "category": "Estrogens - Synthetic - Steroidal",
            "note": "Prodrug converted to ethinylestradiol in the body."
        },
        {
            "name": "Diethylstilbestrol",
            "category": "Estrogens - Synthetic - Nonsteroidal",
            "note": "Potent nonsteroidal estrogen rarely used because of toxicity."
        },
        {
            "name": "Dienestrol",
            "category": "Estrogens - Synthetic - Nonsteroidal",
            "note": "Nonsteroidal estrogen used topically in menopausal symptoms."
        },
        {
            "name": "Tibolone",
            "category": "Estrogens - Synthetic - Nonsteroidal",
            "note": "Synthetic steroid with estrogenic, progestational and androgenic actions."
        },
        {
            "name": "Clomiphene citrate",
            "category": "Antiestrogen",
            "note": "Blocks estrogen receptors in hypothalamus and induces ovulation."
        },
        {
            "name": "Fulvestrant",
            "category": "Selective Estrogen Receptor Down Regulator (SERD)",
            "note": "Estrogen receptor antagonist that promotes receptor degradation."
        },
        {
            "name": "Tamoxifen citrate",
            "category": "Selective Estrogen Receptor Modulators (SERMs)",
            "note": "Acts as estrogen antagonist in breast and agonist in bone."
        },
        {
            "name": "Toremifene",
            "category": "Selective Estrogen Receptor Modulators (SERMs)",
            "note": "SERM used in metastatic breast cancer."
        },
        {
            "name": "Raloxifene",
            "category": "Selective Estrogen Receptor Modulators (SERMs)",
            "note": "SERM useful in osteoporosis without stimulating endometrium."
        },
        {
            "name": "Letrozole",
            "category": "Aromatase Inhibitors",
            "note": "Nonsteroidal aromatase inhibitor used in breast cancer and ovulation induction."
        },
        {
            "name": "Anastrozole",
            "category": "Aromatase Inhibitors",
            "note": "Selective aromatase inhibitor used in postmenopausal breast cancer."
        },
        {
            "name": "Exemestane",
            "category": "Aromatase Inhibitors",
            "note": "Steroidal irreversible aromatase inhibitor."
        }
    ]
},


{
    "id": "gen-1774939612583",
    "name": "Progestins",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Progestins - Progesterone Derivatives",
        "Progestins - 19-Nortestosterone Derivatives - Estranes",
        "Progestins - 19-Nortestosterone Derivatives - Gonanes",
        "Antiprogestin",
        "Selective Progesterone Receptor Modulator"
    ],
    "mnemonic": "Progesterone derivatives = Medroxyprogesterone-Megestrol-Dydrogesterone; Estranes = Norethindrone-Lynestrenol-Allylestrenol; Gonanes = Levonorgestrel-Desogestrel-Norgestimate-Gestodene; Antiprogestin = Mifepristone; SPRM = Ulipristal",
    "items": [
        {
            "name": "Medroxyprogesterone acetate",
            "category": "Progestins - Progesterone Derivatives",
            "note": "Long-acting progestin widely used in injectable contraception."
        },
        {
            "name": "Megestrol acetate",
            "category": "Progestins - Progesterone Derivatives",
            "note": "Progestin used in endometrial carcinoma and to stimulate appetite."
        },
        {
            "name": "Dydrogesterone",
            "category": "Progestins - Progesterone Derivatives",
            "note": "Oral progestin with minimal androgenic effects."
        },
        {
            "name": "Hydroxyprogesterone caproate",
            "category": "Progestins - Progesterone Derivatives",
            "note": "Long-acting injectable progestin used to prevent preterm labour."
        },
        {
            "name": "Nomegestrol acetate",
            "category": "Progestins - Progesterone Derivatives",
            "note": "Potent progestin used in hormonal contraception."
        },
        {
            "name": "Norethindrone (Norethisterone)",
            "category": "Progestins - 19-Nortestosterone Derivatives - Estranes",
            "note": "Common oral progestin used in contraceptive pills."
        },
        {
            "name": "Lynestrenol (Ethinylestrenol)",
            "category": "Progestins - 19-Nortestosterone Derivatives - Estranes",
            "note": "Estrane derivative used in menstrual disorders and contraception."
        },
        {
            "name": "Allylestrenol",
            "category": "Progestins - 19-Nortestosterone Derivatives - Estranes",
            "note": "Used mainly to prevent threatened abortion."
        },
        {
            "name": "Levonorgestrel",
            "category": "Progestins - 19-Nortestosterone Derivatives - Gonanes",
            "note": "Potent progestin widely used in emergency contraception."
        },
        {
            "name": "Desogestrel",
            "category": "Progestins - 19-Nortestosterone Derivatives - Gonanes",
            "note": "Third-generation progestin with low androgenic activity."
        },
        {
            "name": "Norgestimate",
            "category": "Progestins - 19-Nortestosterone Derivatives - Gonanes",
            "note": "Progestin commonly used in combined oral contraceptives."
        },
        {
            "name": "Gestodene",
            "category": "Progestins - 19-Nortestosterone Derivatives - Gonanes",
            "note": "Third-generation progestin with high progestational potency."
        },
        {
            "name": "Mifepristone",
            "category": "Antiprogestin",
            "note": "Progesterone receptor antagonist used for medical termination of pregnancy."
        },
        {
            "name": "Ulipristal",
            "category": "Selective Progesterone Receptor Modulator",
            "note": "Used as emergency contraceptive and in uterine fibroids."
        }
    ]
},

{
    "id": "gen-1774939834697",
    "name": "Hormonal contraceptives",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related drugs",
    "categories": [
        "Oral Contraceptives - Combined Pills",
        "Oral Contraceptives - Phased Pills",
        "Oral Contraceptives - Progestin-Only Pills (Mini Pills)",
        "Oral Contraceptives - Postcoital Pills",
        "Long-Acting Contraceptives - Injectable"
    ],
    "mnemonic": "Combined = MALA-N-Levonorgestrel-Desogestrel; Phased = Levonorgestrel or Norethindrone sequence; Mini pills = Norethindrone-Norgestrel; Emergency = Levonorgestrel; Injectable = DMPA-Norethindrone enanthate",
    "items": [
        {
            "name": "MALA-N - Norgestrel (0.5 mg) + Ethinylestradiol (50 µg)",
            "category": "Oral Contraceptives - Combined Pills",
            "note": "Standard combined oral contraceptive preparation."
        },
        {
            "name": "Levonorgestrel (0.1–0.25 mg) + Ethinylestradiol (20–50 µg)",
            "category": "Oral Contraceptives - Combined Pills",
            "note": "Common low-dose combined oral contraceptive pill."
        },
        {
            "name": "Desogestrel (0.15 mg) + Ethinylestradiol (20–30 µg)",
            "category": "Oral Contraceptives - Combined Pills",
            "note": "Third-generation combined pill with less androgenic effect."
        },
        {
            "name": "Levonorgestrel (50 µg → 75 µg → 125 µg) + Ethinylestradiol (30 µg → 40 µg → 30 µg)",
            "category": "Oral Contraceptives - Phased Pills",
            "note": "Triphasic pill designed to mimic normal hormonal cycle."
        },
        {
            "name": "Norethindrone (0.5 mg → 0.75 mg → 1.0 mg) + Ethinylestradiol (35 µg)",
            "category": "Oral Contraceptives - Phased Pills",
            "note": "Triphasic oral contraceptive with increasing progestin dose."
        },
        {
            "name": "Norethindrone (0.35 mg)",
            "category": "Oral Contraceptives - Progestin-Only Pills (Mini Pills)",
            "note": "Mini pill suitable during lactation."
        },
        {
            "name": "Norgestrel (75 µg)",
            "category": "Oral Contraceptives - Progestin-Only Pills (Mini Pills)",
            "note": "Progestin-only pill requiring strict daily timing."
        },
        {
            "name": "Levonorgestrel (1.5 mg)",
            "category": "Oral Contraceptives - Postcoital Pills",
            "note": "Emergency contraceptive effective if taken within 72 hours."
        },
        {
            "name": "Levonorgestrel (0.5 mg) + Ethinylestradiol (100 µg)",
            "category": "Oral Contraceptives - Postcoital Pills",
            "note": "Yuzpe regimen given in two doses for emergency contraception."
        },
        {
            "name": "Depot medroxyprogesterone acetate (DMPA)",
            "category": "Long-Acting Contraceptives - Injectable",
            "note": "Injectable contraceptive effective for about 3 months."
        },
        {
            "name": "Norethindrone enanthate",
            "category": "Long-Acting Contraceptives - Injectable",
            "note": "Long-acting injectable progestin contraceptive."
        }
    ]
},

{
    "id": "gen-1774940001008",
    "name": "Uterine Stimulants ",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Uterine Stimulants (Oxytocics) - Posterior Pituitary Hormones",
        "Uterine Stimulants (Oxytocics) - Ergot Alkaloids",
        "Uterine Stimulants (Oxytocics) - Prostaglandins - PGE₂",
        "Uterine Stimulants (Oxytocics) - Prostaglandins - PGF₂α",
        "Uterine Stimulants (Oxytocics) - Prostaglandins - Misoprostol",
        "Uterine Stimulants (Oxytocics) - Miscellaneous"
    ],
    "mnemonic": "Posterior pituitary = Oxytocin-Desamino-oxytocin-Carbetocin; Ergot = Ergometrine-Methylergometrine; PGE₂ = Dinoprostone; PGF₂α = Dinoprost-Carboprost; Misoprostol often with Mifepristone; Miscellaneous = Ethacridine-Quinine",
    "items": [
        {
            "name": "Oxytocin",
            "category": "Uterine Stimulants (Oxytocics) - Posterior Pituitary Hormones",
            "note": "Drug of choice for induction of labour and control of postpartum haemorrhage."
        },
        {
            "name": "Desamino-oxytocin",
            "category": "Uterine Stimulants (Oxytocics) - Posterior Pituitary Hormones",
            "note": "Synthetic oxytocin analogue with longer duration of action."
        },
        {
            "name": "Carbetocin",
            "category": "Uterine Stimulants (Oxytocics) - Posterior Pituitary Hormones",
            "note": "Long-acting oxytocin analogue used to prevent postpartum haemorrhage."
        },
        {
            "name": "Ergometrine (Ergonovine)",
            "category": "Uterine Stimulants (Oxytocics) - Ergot Alkaloids",
            "note": "Produces powerful sustained uterine contraction."
        },
        {
            "name": "Methylergometrine",
            "category": "Uterine Stimulants (Oxytocics) - Ergot Alkaloids",
            "note": "Used mainly for prevention and treatment of postpartum haemorrhage."
        },
        {
            "name": "Dinoprostone",
            "category": "Uterine Stimulants (Oxytocics) - Prostaglandins - PGE₂",
            "note": "Used for cervical ripening and induction of labour."
        },
        {
            "name": "Dinoprost",
            "category": "Uterine Stimulants (Oxytocics) - Prostaglandins - PGF₂α",
            "note": "Used for mid-trimester abortion."
        },
        {
            "name": "15-Methyl PGF₂α (Carboprost)",
            "category": "Uterine Stimulants (Oxytocics) - Prostaglandins - PGF₂α",
            "note": "Used in postpartum haemorrhage and second-trimester abortion."
        },
        {
            "name": "Misoprostol",
            "category": "Uterine Stimulants (Oxytocics) - Prostaglandins - Misoprostol",
            "note": "Commonly used with mifepristone for medical abortion."
        },
        {
            "name": "Ethacridine",
            "category": "Uterine Stimulants (Oxytocics) - Miscellaneous",
            "note": "Used for termination of pregnancy in second trimester."
        },
        {
            "name": "Quinine",
            "category": "Uterine Stimulants (Oxytocics) - Miscellaneous",
            "note": "Has weak uterine stimulant action and is rarely used."
        }
    ]
},

{
    "id": "gen-1774940142290",
    "name": "Uterine Relaxants ",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Uterine Relaxants (Tocolytics) - Adrenergic Agonists",
        "Uterine Relaxants (Tocolytics) - Calcium Channel Blockers",
        "Uterine Relaxants (Tocolytics) - Oxytocin Antagonist",
        "Uterine Relaxants (Tocolytics) - Miscellaneous Drugs"
    ],
    "mnemonic": "Adrenergic agonists = Ritodrine-Salbutamol-Terbutaline-Isoxsuprine; Calcium blockers = Nifedipine; Oxytocin antagonist = Atosiban; Miscellaneous = Magnesium sulfate-Progesterone-Nitrates-Halothane",
    "items": [
        {
            "name": "Ritodrine",
            "category": "Uterine Relaxants (Tocolytics) - Adrenergic Agonists",
            "note": "β2 agonist formerly used to suppress premature labour."
        },
        {
            "name": "Salbutamol",
            "category": "Uterine Relaxants (Tocolytics) - Adrenergic Agonists",
            "note": "β2 agonist that relaxes uterine smooth muscle."
        },
        {
            "name": "Terbutaline",
            "category": "Uterine Relaxants (Tocolytics) - Adrenergic Agonists",
            "note": "Commonly used β2 agonist for short-term tocolysis."
        },
        {
            "name": "Isoxsuprine",
            "category": "Uterine Relaxants (Tocolytics) - Adrenergic Agonists",
            "note": "β-adrenergic agonist used to delay preterm labour."
        },
        {
            "name": "Nifedipine",
            "category": "Uterine Relaxants (Tocolytics) - Calcium Channel Blockers",
            "note": "Preferred tocolytic because it inhibits calcium entry into uterine muscle."
        },
        {
            "name": "Other dihydropyridines",
            "category": "Uterine Relaxants (Tocolytics) - Calcium Channel Blockers",
            "note": "Calcium channel blockers reduce uterine contractions."
        },
        {
            "name": "Atosiban",
            "category": "Uterine Relaxants (Tocolytics) - Oxytocin Antagonist",
            "note": "Competitive oxytocin receptor antagonist used in preterm labour."
        },
        {
            "name": "Magnesium sulfate",
            "category": "Uterine Relaxants (Tocolytics) - Miscellaneous Drugs",
            "note": "Reduces uterine contractility and is also used in eclampsia."
        },
        {
            "name": "Progesterone",
            "category": "Uterine Relaxants (Tocolytics) - Miscellaneous Drugs",
            "note": "Helps maintain uterine quiescence during pregnancy."
        },
        {
            "name": "Nitrates",
            "category": "Uterine Relaxants (Tocolytics) - Miscellaneous Drugs",
            "note": "Relax uterine smooth muscle through nitric oxide release."
        },
        {
            "name": "Halothane",
            "category": "Uterine Relaxants (Tocolytics) - Miscellaneous Drugs",
            "note": "General anaesthetic that produces marked uterine relaxation."
        }
    ]
},


{
    "id": "gen-1774952432317",
    "name": "Hormones and drugs affecting calcium balance",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Drugs that Promote Calcium Absorption - Vitamin D",
        "Drugs that Promote Calcium Absorption - Hypercalcaemic Hormones",
        "Hypocalcaemic Hormone",
        "Calcium-Sensing Receptor Agonist",
        "Drugs that Inhibit Bone Resorption - Bisphosphonates - 1st Generation",
        "Drugs that Inhibit Bone Resorption - Bisphosphonates - 2nd Generation",
        "Drugs that Inhibit Bone Resorption - Bisphosphonates - 3rd Generation"
    ],
    "mnemonic": "Vitamin D = Cholecalciferol-Calcitriol-Alfacalcidol-Dihydrotachysterol; Hypercalcaemic hormones = PTH-Teriparatide; Hypocalcaemic = Calcitonin; CaSR agonist = Cinacalcet; Bisphosphonates = Etidronate/Tiludronate → Pamidronate/Alendronate/Ibandronate → Risedronate/Zoledronate",
    "items": [
        {
            "name": "Cholecalciferol",
            "category": "Drugs that Promote Calcium Absorption - Vitamin D",
            "note": "Vitamin D3 precursor that increases intestinal calcium absorption."
        },
        {
            "name": "Calcitriol",
            "category": "Drugs that Promote Calcium Absorption - Vitamin D",
            "note": "Active form of vitamin D with rapid onset of action."
        },
        {
            "name": "Alfacalcidol",
            "category": "Drugs that Promote Calcium Absorption - Vitamin D",
            "note": "Vitamin D analogue converted to calcitriol in the liver."
        },
        {
            "name": "Dihydrotachysterol",
            "category": "Drugs that Promote Calcium Absorption - Vitamin D",
            "note": "Vitamin D analogue used in hypoparathyroidism."
        },
        {
            "name": "Parathyroid hormone (1–84)",
            "category": "Drugs that Promote Calcium Absorption - Hypercalcaemic Hormones",
            "note": "Full-length PTH used in severe hypoparathyroidism."
        },
        {
            "name": "Teriparatide (PTH 1–34)",
            "category": "Drugs that Promote Calcium Absorption - Hypercalcaemic Hormones",
            "note": "PTH fragment that stimulates new bone formation."
        },
        {
            "name": "Calcitonin",
            "category": "Hypocalcaemic Hormone",
            "note": "Lowers plasma calcium by inhibiting osteoclastic bone resorption."
        },
        {
            "name": "Cinacalcet",
            "category": "Calcium-Sensing Receptor Agonist",
            "note": "Activates calcium-sensing receptor and suppresses PTH secretion."
        },
        {
            "name": "Etidronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 1st Generation",
            "note": "First-generation bisphosphonate used in Paget disease."
        },
        {
            "name": "Tiludronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 1st Generation",
            "note": "First-generation bisphosphonate that inhibits osteoclast activity."
        },
        {
            "name": "Pamidronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 2nd Generation",
            "note": "Useful in hypercalcaemia of malignancy."
        },
        {
            "name": "Alendronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 2nd Generation",
            "note": "Commonly used bisphosphonate for osteoporosis."
        },
        {
            "name": "Ibandronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 2nd Generation",
            "note": "Bisphosphonate used in osteoporosis and metastatic bone disease."
        },
        {
            "name": "Risedronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 3rd Generation",
            "note": "Third-generation bisphosphonate used in osteoporosis."
        },
        {
            "name": "Zoledronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 3rd Generation",
            "note": "Most potent bisphosphonate with once-yearly dosing in osteoporosis."
        }
    ]
},

{
    "id": "gen-1774952632659",
    "name": "Skeletal Muscle Relaxants",
    "subject": "Pharmacology",
    "chapter": "PNS",
    "categories": [
        "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Long-Acting",
        "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Intermediate-Acting",
        "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Short-Acting",
        "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Depolarizing Blockers",
        "Peripherally Acting Drugs - Directly Acting Agents",
        "Centrally Acting Drugs - Mephenesin Congeners",
        "Centrally Acting Drugs - Benzodiazepines",
        "Centrally Acting Drugs - GABA Mimetic",
        "Centrally Acting Drugs - Central α2-Agonist"
    ],
    "mnemonic": "Long nondepolarizers = Tubocurarine-Pancuronium; Intermediate = Vecuronium-Atracurium-Rocuronium; Depolarizer = Succinylcholine; Direct = Dantrolene; Central = Carisoprodol-Diazepam-Baclofen-Tizanidine",
    "items": [
        {
            "name": "d-Tubocurarine",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Long-Acting",
            "note": "Prototype long-acting competitive neuromuscular blocker."
        },
        {
            "name": "Pancuronium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Long-Acting",
            "note": "Long-acting blocker that may cause tachycardia."
        },
        {
            "name": "Doxacurium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Long-Acting",
            "note": "Long-acting nondepolarizing neuromuscular blocker."
        },
        {
            "name": "Pipecuronium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Long-Acting",
            "note": "Long-acting blocker with minimal cardiovascular effects."
        },
        {
            "name": "Vecuronium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Intermediate-Acting",
            "note": "Commonly used intermediate-acting neuromuscular blocker."
        },
        {
            "name": "Atracurium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Intermediate-Acting",
            "note": "Undergoes Hofmann elimination and is useful in renal failure."
        },
        {
            "name": "Cisatracurium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Intermediate-Acting",
            "note": "Isomer of atracurium with less histamine release."
        },
        {
            "name": "Rocuronium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Intermediate-Acting",
            "note": "Rapid onset intermediate-acting blocker used for intubation."
        },
        {
            "name": "Mivacurium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Short-Acting",
            "note": "Short-acting neuromuscular blocker hydrolysed by plasma cholinesterase."
        },
        {
            "name": "Succinylcholine (Suxamethonium)",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Depolarizing Blockers",
            "note": "Only commonly used depolarizing neuromuscular blocker."
        },
        {
            "name": "Decamethonium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Depolarizing Blockers",
            "note": "Older depolarizing blocker now rarely used."
        },
        {
            "name": "Dantrolene sodium",
            "category": "Peripherally Acting Drugs - Directly Acting Agents",
            "note": "Directly relaxes skeletal muscle by inhibiting calcium release from sarcoplasmic reticulum."
        },
        {
            "name": "Quinine",
            "category": "Peripherally Acting Drugs - Directly Acting Agents",
            "note": "May reduce nocturnal muscle cramps."
        },
        {
            "name": "Carisoprodol",
            "category": "Centrally Acting Drugs - Mephenesin Congeners",
            "note": "Centrally acting muscle relaxant used in painful muscle spasm."
        },
        {
            "name": "Chlorzoxazone",
            "category": "Centrally Acting Drugs - Mephenesin Congeners",
            "note": "Commonly used centrally acting skeletal muscle relaxant."
        },
        {
            "name": "Chlormezanone",
            "category": "Centrally Acting Drugs - Mephenesin Congeners",
            "note": "Older centrally acting muscle relaxant."
        },
        {
            "name": "Methocarbamol",
            "category": "Centrally Acting Drugs - Mephenesin Congeners",
            "note": "Used in acute painful musculoskeletal conditions."
        },
        {
            "name": "Diazepam and others",
            "category": "Centrally Acting Drugs - Benzodiazepines",
            "note": "Relieve muscle spasm by facilitating GABA-mediated inhibition."
        },
        {
            "name": "Baclofen",
            "category": "Centrally Acting Drugs - GABA Mimetic",
            "note": "GABAB agonist especially useful in spasticity."
        },
        {
            "name": "Thiocolchicoside",
            "category": "Centrally Acting Drugs - GABA Mimetic",
            "note": "Muscle relaxant used in painful muscle spasm."
        },
        {
            "name": "Tizanidine",
            "category": "Centrally Acting Drugs - Central α2-Agonist",
            "note": "α2 agonist useful in spasticity with less muscle weakness."
        }
    ]
},

{
    "id": "gen-1774952768610",
    "name": "Local Anaesthetics",
    "subject": "Pharmacology",
    "chapter": "PNS",
    "categories": [
        "Injectable Anaesthetics - Low Potency, Short Duration",
        "Injectable Anaesthetics - Intermediate Potency and Duration",
        "Injectable Anaesthetics - High Potency, Long Duration",
        "Surface Anaesthetics - Soluble",
        "Surface Anaesthetics - Insoluble"
    ],
    "mnemonic": "Short = Procaine-Chloroprocaine; Intermediate = Lidocaine-Prilocaine; Long = Tetracaine-Bupivacaine-Levobupivacaine-Ropivacaine-Dibucaine; Surface soluble = Cocaine-Lidocaine-Tetracaine-Proparacaine; Surface insoluble = Benzocaine-Butylaminobenzoate-Oxethazaine",
    "items": [
        {
            "name": "Procaine",
            "category": "Injectable Anaesthetics - Low Potency, Short Duration",
            "note": "Low potency ester local anaesthetic with short duration of action."
        },
        {
            "name": "Chloroprocaine",
            "category": "Injectable Anaesthetics - Low Potency, Short Duration",
            "note": "Very short-acting ester local anaesthetic used for infiltration."
        },
        {
            "name": "Lidocaine (Lignocaine)",
            "category": "Injectable Anaesthetics - Intermediate Potency and Duration",
            "note": "Most commonly used local anaesthetic with rapid onset."
        },
        {
            "name": "Prilocaine",
            "category": "Injectable Anaesthetics - Intermediate Potency and Duration",
            "note": "Intermediate-acting local anaesthetic that may cause methaemoglobinaemia."
        },
        {
            "name": "Tetracaine",
            "category": "Injectable Anaesthetics - High Potency, Long Duration",
            "note": "Highly potent long-acting ester local anaesthetic."
        },
        {
            "name": "Bupivacaine",
            "category": "Injectable Anaesthetics - High Potency, Long Duration",
            "note": "Long-acting amide local anaesthetic with cardiotoxic potential."
        },
        {
            "name": "Levobupivacaine",
            "category": "Injectable Anaesthetics - High Potency, Long Duration",
            "note": "S-enantiomer of bupivacaine with lower cardiotoxicity."
        },
        {
            "name": "Ropivacaine",
            "category": "Injectable Anaesthetics - High Potency, Long Duration",
            "note": "Long-acting local anaesthetic with less cardiotoxicity than bupivacaine."
        },
        {
            "name": "Dibucaine",
            "category": "Injectable Anaesthetics - High Potency, Long Duration",
            "note": "Very potent long-acting local anaesthetic rarely used systemically."
        },
        {
            "name": "Cocaine",
            "category": "Surface Anaesthetics - Soluble",
            "note": "Only local anaesthetic with intrinsic vasoconstrictor action."
        },
        {
            "name": "Lidocaine",
            "category": "Surface Anaesthetics - Soluble",
            "note": "Commonly used surface anaesthetic for mucous membranes."
        },
        {
            "name": "Tetracaine",
            "category": "Surface Anaesthetics - Soluble",
            "note": "Potent surface anaesthetic often used in ophthalmology."
        },
        {
            "name": "Proparacaine",
            "category": "Surface Anaesthetics - Soluble",
            "note": "Short-acting ophthalmic local anaesthetic."
        },
        {
            "name": "Benzocaine",
            "category": "Surface Anaesthetics - Insoluble",
            "note": "Poorly soluble surface anaesthetic used in lozenges and ointments."
        },
        {
            "name": "Butylaminobenzoate",
            "category": "Surface Anaesthetics - Insoluble",
            "note": "Long-acting insoluble local anaesthetic for topical use."
        },
        {
            "name": "Oxethazaine",
            "category": "Surface Anaesthetics - Insoluble",
            "note": "Surface anaesthetic effective even in acidic medium."
        }
    ]
},

{
    "id": "gen-1774952960699",
    "name": "General Anaesthetics",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Inhalational Anaesthetics - Gases",
        "Inhalational Anaesthetics - Volatile Liquids",
        "Intravenous Anaesthetics - Fast-Acting Drugs",
        "Intravenous Anaesthetics - Benzodiazepines",
        "Intravenous Anaesthetics - Opioid Analgesics",
        "Intravenous Anaesthetics - Dissociative Anaesthetic",
        "Intravenous Anaesthetics - α2-Adrenergic Agonist"
    ],
    "mnemonic": "Inhalational = Nitrous oxide-Ether-Halothane-Isoflurane-Desflurane-Sevoflurane; IV fast = Thiopentone-Propofol-Etomidate; Benzos = Diazepam-Lorazepam-Midazolam; Opioids = Fentanyl-Remifentanil; Dissociative = Ketamine; α2 agonist = Dexmedetomidine",
    "items": [
        {
            "name": "Nitrous oxide",
            "category": "Inhalational Anaesthetics - Gases",
            "note": "Weak anaesthetic with strong analgesic action."
        },
        {
            "name": "Ether",
            "category": "Inhalational Anaesthetics - Volatile Liquids",
            "note": "Older inhalational anaesthetic with wide safety margin."
        },
        {
            "name": "Halothane",
            "category": "Inhalational Anaesthetics - Volatile Liquids",
            "note": "Potent inhalational anaesthetic associated with hepatotoxicity."
        },
        {
            "name": "Isoflurane",
            "category": "Inhalational Anaesthetics - Volatile Liquids",
            "note": "Widely used volatile anaesthetic with minimal cardiac depression."
        },
        {
            "name": "Desflurane",
            "category": "Inhalational Anaesthetics - Volatile Liquids",
            "note": "Very rapid induction and recovery because of low blood solubility."
        },
        {
            "name": "Sevoflurane",
            "category": "Inhalational Anaesthetics - Volatile Liquids",
            "note": "Pleasant smelling inhalational agent suitable for induction."
        },
        {
            "name": "Thiopentone sodium",
            "category": "Intravenous Anaesthetics - Fast-Acting Drugs",
            "note": "Ultra-short acting barbiturate used for induction."
        },
        {
            "name": "Methohexitone sodium",
            "category": "Intravenous Anaesthetics - Fast-Acting Drugs",
            "note": "Rapid-acting barbiturate with short duration."
        },
        {
            "name": "Propofol",
            "category": "Intravenous Anaesthetics - Fast-Acting Drugs",
            "note": "Most commonly used intravenous induction agent with rapid recovery."
        },
        {
            "name": "Etomidate",
            "category": "Intravenous Anaesthetics - Fast-Acting Drugs",
            "note": "Preferred induction agent in patients with cardiovascular instability."
        },
        {
            "name": "Diazepam",
            "category": "Intravenous Anaesthetics - Benzodiazepines",
            "note": "Benzodiazepine used for sedation and preanaesthetic medication."
        },
        {
            "name": "Lorazepam",
            "category": "Intravenous Anaesthetics - Benzodiazepines",
            "note": "Produces anxiolysis and sedation before procedures."
        },
        {
            "name": "Midazolam",
            "category": "Intravenous Anaesthetics - Benzodiazepines",
            "note": "Short-acting benzodiazepine widely used for procedural sedation."
        },
        {
            "name": "Fentanyl",
            "category": "Intravenous Anaesthetics - Opioid Analgesics",
            "note": "Potent opioid analgesic used during anaesthesia."
        },
        {
            "name": "Remifentanil",
            "category": "Intravenous Anaesthetics - Opioid Analgesics",
            "note": "Ultra-short acting opioid rapidly metabolized by plasma esterases."
        },
        {
            "name": "Ketamine",
            "category": "Intravenous Anaesthetics - Dissociative Anaesthetic",
            "note": "Produces dissociative anaesthesia with analgesia and preserved reflexes."
        },
        {
            "name": "Dexmedetomidine",
            "category": "Intravenous Anaesthetics - α2-Adrenergic Agonist",
            "note": "α2 agonist producing sedation with minimal respiratory depression."
        }
    ]
},

{
    "id": "gen-1774953126263",
    "name": "Preanesthetic Medication Drugs",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Preanaesthetic Medication Drugs - Sedative–Antianxiety Drugs",
        "Preanaesthetic Medication Drugs - Opioid Drugs",
        "Preanaesthetic Medication Drugs - Anticholinergic Drugs",
        "Preanaesthetic Medication Drugs - Neuroleptics",
        "Preanaesthetic Medication Drugs - Antiemetics",
        "Preanaesthetic Medication Drugs - Gastric Acid Suppressant Drugs - H2-Receptor Antagonists",
        "Preanaesthetic Medication Drugs - Gastric Acid Suppressant Drugs - Proton Pump Inhibitors"
    ],
    "mnemonic": "Sedatives = Diazepam-Lorazepam-Promethazine; Opioids = Morphine-Pethidine; Anticholinergics = Atropine-Hyoscine-Glycopyrrolate; Antiemetics = Metoclopramide-Domperidone-Ondansetron; Acid suppression = Ranitidine-Famotidine-Omeprazole-Pantoprazole",
    "items": [
        {
            "name": "Diazepam",
            "category": "Preanaesthetic Medication Drugs - Sedative–Antianxiety Drugs",
            "note": "Produces anxiolysis and sedation before anaesthesia."
        },
        {
            "name": "Lorazepam",
            "category": "Preanaesthetic Medication Drugs - Sedative–Antianxiety Drugs",
            "note": "Used as premedication to reduce anxiety."
        },
        {
            "name": "Promethazine",
            "category": "Preanaesthetic Medication Drugs - Sedative–Antianxiety Drugs",
            "note": "Provides sedation and also has antiemetic action."
        },
        {
            "name": "Morphine",
            "category": "Preanaesthetic Medication Drugs - Opioid Drugs",
            "note": "Provides analgesia and sedation before surgery."
        },
        {
            "name": "Pethidine",
            "category": "Preanaesthetic Medication Drugs - Opioid Drugs",
            "note": "Opioid analgesic often used as preanaesthetic medication."
        },
        {
            "name": "Atropine",
            "category": "Preanaesthetic Medication Drugs - Anticholinergic Drugs",
            "note": "Reduces salivary and bronchial secretions."
        },
        {
            "name": "Hyoscine",
            "category": "Preanaesthetic Medication Drugs - Anticholinergic Drugs",
            "note": "Produces sedation and prevents motion sickness."
        },
        {
            "name": "Glycopyrrolate",
            "category": "Preanaesthetic Medication Drugs - Anticholinergic Drugs",
            "note": "Preferred anticholinergic because it does not cross blood-brain barrier."
        },
        {
            "name": "Chlorpromazine",
            "category": "Preanaesthetic Medication Drugs - Neuroleptics",
            "note": "Used as neuroleptic premedication because of sedative effect."
        },
        {
            "name": "Triflupromazine",
            "category": "Preanaesthetic Medication Drugs - Neuroleptics",
            "note": "Phenothiazine neuroleptic with antiemetic and sedative action."
        },
        {
            "name": "Haloperidol",
            "category": "Preanaesthetic Medication Drugs - Neuroleptics",
            "note": "Neuroleptic occasionally used for preoperative sedation."
        },
        {
            "name": "Metoclopramide",
            "category": "Preanaesthetic Medication Drugs - Antiemetics",
            "note": "Prevents postoperative nausea and enhances gastric emptying."
        },
        {
            "name": "Domperidone",
            "category": "Preanaesthetic Medication Drugs - Antiemetics",
            "note": "Antiemetic used to reduce perioperative nausea."
        },
        {
            "name": "Ondansetron",
            "category": "Preanaesthetic Medication Drugs - Antiemetics",
            "note": "Most effective drug for prevention of postoperative nausea and vomiting."
        },
        {
            "name": "Ranitidine",
            "category": "Preanaesthetic Medication Drugs - Gastric Acid Suppressant Drugs - H2-Receptor Antagonists",
            "note": "Reduces gastric acidity before anaesthesia."
        },
        {
            "name": "Famotidine",
            "category": "Preanaesthetic Medication Drugs - Gastric Acid Suppressant Drugs - H2-Receptor Antagonists",
            "note": "H2 blocker used to decrease risk of acid aspiration."
        },
        {
            "name": "Omeprazole",
            "category": "Preanaesthetic Medication Drugs - Gastric Acid Suppressant Drugs - Proton Pump Inhibitors",
            "note": "Suppresses gastric acid secretion more effectively than H2 blockers."
        },
        {
            "name": "Pantoprazole",
            "category": "Preanaesthetic Medication Drugs - Gastric Acid Suppressant Drugs - Proton Pump Inhibitors",
            "note": "Proton pump inhibitor used before surgery in aspiration-risk patients."
        }
    ]
},


{
    "id": "gen-1774953548216",
    "name": "Sedative Hypnotic Drugs",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Benzodiazepines - Hypnotics",
        "Benzodiazepines - Antianxiety Drugs",
        "Benzodiazepines - Anticonvulsants",
        "Non-Benzodiazepines",
        "Barbiturates - Long-Acting",
        "Barbiturates - Short-Acting",
        "Barbiturates - Ultra-Short-Acting",
        "Other Hypnotics"
    ],
    "mnemonic": "Benzodiazepines = Diazepam-Lorazepam-Alprazolam group; Non-benzodiazepines = Zopiclone-Zolpidem-Zaleplon; Barbiturates = Phenobarbitone-Pentobarbitone-Thiopentone; Others = Triclofos-Melatonin-Suvorexant-Ramelteon",
    "items": [
        {
            "name": "Diazepam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Long-acting benzodiazepine used as hypnotic and anxiolytic."
        },
        {
            "name": "Flurazepam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Long-acting hypnotic benzodiazepine causing next-day sedation."
        },
        {
            "name": "Nitrazepam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Commonly used benzodiazepine hypnotic."
        },
        {
            "name": "Alprazolam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Short-acting benzodiazepine useful in insomnia associated with anxiety."
        },
        {
            "name": "Lorazepam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Intermediate-acting benzodiazepine used for insomnia."
        },
        {
            "name": "Temazepam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Widely used hypnotic with intermediate duration."
        },
        {
            "name": "Triazolam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Short-acting benzodiazepine preferred for sleep induction."
        },
        {
            "name": "Diazepam",
            "category": "Benzodiazepines - Antianxiety Drugs",
            "note": "Prototype anxiolytic benzodiazepine."
        },
        {
            "name": "Chlordiazepoxide",
            "category": "Benzodiazepines - Antianxiety Drugs",
            "note": "First benzodiazepine introduced for anxiety disorders."
        },
        {
            "name": "Oxazepam",
            "category": "Benzodiazepines - Antianxiety Drugs",
            "note": "Short-acting benzodiazepine useful in elderly patients."
        },
        {
            "name": "Lorazepam",
            "category": "Benzodiazepines - Antianxiety Drugs",
            "note": "Frequently used for acute anxiety states."
        },
        {
            "name": "Alprazolam",
            "category": "Benzodiazepines - Antianxiety Drugs",
            "note": "Particularly useful in panic disorder."
        },
        {
            "name": "Clonazepam",
            "category": "Benzodiazepines - Antianxiety Drugs",
            "note": "Used in anxiety disorders and panic attacks."
        },
        {
            "name": "Clonazepam",
            "category": "Benzodiazepines - Anticonvulsants",
            "note": "Effective in absence seizures and myoclonic epilepsy."
        },
        {
            "name": "Clobazam",
            "category": "Benzodiazepines - Anticonvulsants",
            "note": "Benzodiazepine used as adjunct in epilepsy."
        },
        {
            "name": "Diazepam",
            "category": "Benzodiazepines - Anticonvulsants",
            "note": "Drug of choice for status epilepticus."
        },
        {
            "name": "Lorazepam",
            "category": "Benzodiazepines - Anticonvulsants",
            "note": "Preferred intravenous benzodiazepine in status epilepticus."
        },
        {
            "name": "Zopiclone",
            "category": "Non-Benzodiazepines",
            "note": "Non-benzodiazepine hypnotic acting on benzodiazepine receptor."
        },
        {
            "name": "Eszopiclone",
            "category": "Non-Benzodiazepines",
            "note": "S-isomer of zopiclone used in insomnia."
        },
        {
            "name": "Zolpidem",
            "category": "Non-Benzodiazepines",
            "note": "Short-acting hypnotic with minimal daytime sedation."
        },
        {
            "name": "Zaleplon",
            "category": "Non-Benzodiazepines",
            "note": "Very short-acting hypnotic useful for sleep initiation."
        },
        {
            "name": "Etizolam",
            "category": "Non-Benzodiazepines",
            "note": "Thienodiazepine used as anxiolytic and hypnotic."
        },
        {
            "name": "Phenobarbitone",
            "category": "Barbiturates - Long-Acting",
            "note": "Long-acting barbiturate mainly used as anticonvulsant."
        },
        {
            "name": "Butobarbitone",
            "category": "Barbiturates - Short-Acting",
            "note": "Short-acting barbiturate formerly used as hypnotic."
        },
        {
            "name": "Pentobarbitone",
            "category": "Barbiturates - Short-Acting",
            "note": "Short-acting barbiturate producing sedation and hypnosis."
        },
        {
            "name": "Thiopentone",
            "category": "Barbiturates - Ultra-Short-Acting",
            "note": "Ultra-short acting barbiturate used for anaesthetic induction."
        },
        {
            "name": "Methohexitone",
            "category": "Barbiturates - Ultra-Short-Acting",
            "note": "Rapid and short-acting barbiturate used in brief procedures."
        },
        {
            "name": "Triclofos",
            "category": "Other Hypnotics",
            "note": "Sedative-hypnotic commonly used in children."
        },
        {
            "name": "Melatonin",
            "category": "Other Hypnotics",
            "note": "Regulates circadian rhythm and helps in sleep onset."
        },
        {
            "name": "Suvorexant",
            "category": "Other Hypnotics",
            "note": "Orexin receptor antagonist used in insomnia."
        },
        {
            "name": "Ramelteon",
            "category": "Other Hypnotics",
            "note": "Melatonin receptor agonist useful for sleep initiation."
        }
    ]
},


{
    "id": "gen-1774953747107",
    "name": "Antiepileptic Drugs",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Barbiturates",
        "Deoxybarbiturate",
        "Hydantoins",
        "Succinimides",
        "Benzodiazepines",
        "Iminostilbenes",
        "Aliphatic Carboxylic Acid Derivatives",
        "Phenyltriazine",
        "Cyclic GABA Analogues",
        "Newer Antiepileptic Drugs"
    ],
    "mnemonic": "Barbiturate = Phenobarbitone; Hydantoins = Phenytoin-Fosphenytoin; Benzodiazepines = Clonazepam-Diazepam-Lorazepam-Clobazam; Iminostilbenes = Carbamazepine group; Valproates = Sodium valproate-Divalproex-Valproate semisodium; Newer = Topiramate-Levetiracetam-Lacosamide",
    "items": [
        {
            "name": "Phenobarbitone",
            "category": "Barbiturates",
            "note": "Effective long-acting antiepileptic especially in generalized tonic-clonic seizures."
        },
        {
            "name": "Primidone",
            "category": "Deoxybarbiturate",
            "note": "Converted partly to phenobarbitone in the body."
        },
        {
            "name": "Phenytoin",
            "category": "Hydantoins",
            "note": "Drug of choice for generalized tonic-clonic and partial seizures."
        },
        {
            "name": "Fosphenytoin",
            "category": "Hydantoins",
            "note": "Water-soluble prodrug of phenytoin used intravenously."
        },
        {
            "name": "Ethosuximide",
            "category": "Succinimides",
            "note": "Drug of choice for absence seizures."
        },
        {
            "name": "Clonazepam",
            "category": "Benzodiazepines",
            "note": "Useful in absence and myoclonic seizures."
        },
        {
            "name": "Diazepam",
            "category": "Benzodiazepines",
            "note": "Used intravenously in status epilepticus."
        },
        {
            "name": "Lorazepam",
            "category": "Benzodiazepines",
            "note": "Preferred intravenous drug for status epilepticus."
        },
        {
            "name": "Clobazam",
            "category": "Benzodiazepines",
            "note": "Often used as add-on therapy in refractory epilepsy."
        },
        {
            "name": "Carbamazepine",
            "category": "Iminostilbenes",
            "note": "Drug of choice for partial seizures and trigeminal neuralgia."
        },
        {
            "name": "Oxcarbazepine",
            "category": "Iminostilbenes",
            "note": "Carbamazepine analogue with fewer adverse effects."
        },
        {
            "name": "Eslicarbazepine",
            "category": "Iminostilbenes",
            "note": "Newer iminostilbene used in partial seizures."
        },
        {
            "name": "Sodium valproate (Valproic acid)",
            "category": "Aliphatic Carboxylic Acid Derivatives",
            "note": "Broad-spectrum antiepileptic effective in most seizure types."
        },
        {
            "name": "Divalproex sodium",
            "category": "Aliphatic Carboxylic Acid Derivatives",
            "note": "Coordination compound of sodium valproate and valproic acid."
        },
        {
            "name": "Valproate semisodium",
            "category": "Aliphatic Carboxylic Acid Derivatives",
            "note": "Modified formulation of valproate with better tolerability."
        },
        {
            "name": "Lamotrigine",
            "category": "Phenyltriazine",
            "note": "Broad-spectrum antiepileptic that may cause skin rash."
        },
        {
            "name": "Gabapentin",
            "category": "Cyclic GABA Analogues",
            "note": "Used in partial seizures and neuropathic pain."
        },
        {
            "name": "Pregabalin",
            "category": "Cyclic GABA Analogues",
            "note": "More potent analogue of gabapentin."
        },
        {
            "name": "Topiramate",
            "category": "Newer Antiepileptic Drugs",
            "note": "Broad-spectrum drug also useful in migraine prophylaxis."
        },
        {
            "name": "Zonisamide",
            "category": "Newer Antiepileptic Drugs",
            "note": "Sulfonamide derivative effective in partial seizures."
        },
        {
            "name": "Levetiracetam",
            "category": "Newer Antiepileptic Drugs",
            "note": "Well-tolerated broad-spectrum antiepileptic."
        },
        {
            "name": "Vigabatrin",
            "category": "Newer Antiepileptic Drugs",
            "note": "Irreversibly inhibits GABA transaminase."
        },
        {
            "name": "Tiagabine",
            "category": "Newer Antiepileptic Drugs",
            "note": "Inhibits reuptake of GABA into neurons."
        },
        {
            "name": "Lacosamide",
            "category": "Newer Antiepileptic Drugs",
            "note": "Enhances slow inactivation of sodium channels."
        },
        {
            "name": "Stiripentol",
            "category": "Newer Antiepileptic Drugs",
            "note": "Used mainly in Dravet syndrome."
        },
        {
            "name": "Rufinamide",
            "category": "Newer Antiepileptic Drugs",
            "note": "Useful in Lennox-Gastaut syndrome."
        }
    ]
},


{
    "id": "gen-1774953944756",
    "name": "Antiparkinsonian Drugs",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Drugs Affecting Brain Dopaminergic System - Dopamine Precursor",
        "Drugs Affecting Brain Dopaminergic System - Peripheral Decarboxylase Inhibitors",
        "Drugs Affecting Brain Dopaminergic System - Dopaminergic Agonists",
        "Drugs Affecting Brain Dopaminergic System - MAO-B Inhibitors",
        "Drugs Affecting Brain Dopaminergic System - COMT Inhibitors",
        "Drugs Affecting Brain Dopaminergic System - Dopamine Facilitator",
        "Drugs Affecting Brain Cholinergic System - Central Anticholinergics",
        "Drugs Affecting Brain Cholinergic System - Antihistaminics"
    ],
    "mnemonic": "Levodopa + Carbidopa/Benserazide; Agonists = Bromocriptine-Ropinirole-Pramipexole; MAO-B = Selegiline-Rasagiline; COMT = Entacapone-Tolcapone; Anticholinergics = Procyclidine-Trihexyphenidyl-Biperiden",
    "items": [
        {
            "name": "Levodopa",
            "category": "Drugs Affecting Brain Dopaminergic System - Dopamine Precursor",
            "note": "Most effective drug for Parkinson disease and converted to dopamine in brain."
        },
        {
            "name": "Carbidopa",
            "category": "Drugs Affecting Brain Dopaminergic System - Peripheral Decarboxylase Inhibitors",
            "note": "Prevents peripheral conversion of levodopa to dopamine."
        },
        {
            "name": "Benserazide",
            "category": "Drugs Affecting Brain Dopaminergic System - Peripheral Decarboxylase Inhibitors",
            "note": "Used with levodopa to increase its availability to brain."
        },
        {
            "name": "Bromocriptine",
            "category": "Drugs Affecting Brain Dopaminergic System - Dopaminergic Agonists",
            "note": "Ergot-derived dopamine agonist used in Parkinson disease."
        },
        {
            "name": "Ropinirole",
            "category": "Drugs Affecting Brain Dopaminergic System - Dopaminergic Agonists",
            "note": "Nonergot dopamine agonist useful in early Parkinson disease."
        },
        {
            "name": "Pramipexole",
            "category": "Drugs Affecting Brain Dopaminergic System - Dopaminergic Agonists",
            "note": "Dopamine agonist with selective D3 receptor action."
        },
        {
            "name": "Selegiline",
            "category": "Drugs Affecting Brain Dopaminergic System - MAO-B Inhibitors",
            "note": "Selective MAO-B inhibitor that prolongs dopamine action."
        },
        {
            "name": "Rasagiline",
            "category": "Drugs Affecting Brain Dopaminergic System - MAO-B Inhibitors",
            "note": "MAO-B inhibitor used as adjunct to levodopa."
        },
        {
            "name": "Entacapone",
            "category": "Drugs Affecting Brain Dopaminergic System - COMT Inhibitors",
            "note": "Peripheral COMT inhibitor that prolongs effect of levodopa."
        },
        {
            "name": "Tolcapone",
            "category": "Drugs Affecting Brain Dopaminergic System - COMT Inhibitors",
            "note": "Acts both centrally and peripherally but may cause hepatotoxicity."
        },
        {
            "name": "Amantadine",
            "category": "Drugs Affecting Brain Dopaminergic System - Dopamine Facilitator",
            "note": "Facilitates dopamine release and also acts as NMDA receptor antagonist."
        },
        {
            "name": "Procyclidine",
            "category": "Drugs Affecting Brain Cholinergic System - Central Anticholinergics",
            "note": "Central anticholinergic mainly useful for tremor and rigidity."
        },
        {
            "name": "Trihexyphenidyl",
            "category": "Drugs Affecting Brain Cholinergic System - Central Anticholinergics",
            "note": "Frequently used anticholinergic in Parkinson disease."
        },
        {
            "name": "Biperiden",
            "category": "Drugs Affecting Brain Cholinergic System - Central Anticholinergics",
            "note": "Anticholinergic useful in drug-induced parkinsonism."
        },
        {
            "name": "Orphenadrine",
            "category": "Drugs Affecting Brain Cholinergic System - Antihistaminics",
            "note": "Antihistaminic with anticholinergic property used in Parkinsonism."
        },
        {
            "name": "Promethazine",
            "category": "Drugs Affecting Brain Cholinergic System - Antihistaminics",
            "note": "Sedative antihistaminic with mild antiparkinsonian effect."
        }
    ]
},

{
    "id": "gen-1774954142410",
    "name": "Antipsychotic Drugs",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Typical (Classical) Antipsychotics - Phenothiazines - Aliphatic Side Chain",
        "Typical (Classical) Antipsychotics - Phenothiazines - Piperidine Side Chain",
        "Typical (Classical) Antipsychotics - Phenothiazines - Piperazine Side Chain",
        "Typical (Classical) Antipsychotics - Thioxanthenes",
        "Typical (Classical) Antipsychotics - Butyrophenones",
        "Typical (Classical) Antipsychotics - Other Heterocyclic Compounds",
        "Atypical Antipsychotics"
    ],
    "mnemonic": "Phenothiazines = Chlorpromazine-Thioridazine-Trifluoperazine; Butyrophenones = Haloperidol group; Atypicals = Clozapine-Risperidone-Olanzapine-Quetiapine-Aripiprazole",
    "items": [
        {
            "name": "Chlorpromazine",
            "category": "Typical (Classical) Antipsychotics - Phenothiazines - Aliphatic Side Chain",
            "note": "Prototype phenothiazine with marked sedative and autonomic effects."
        },
        {
            "name": "Triflupromazine",
            "category": "Typical (Classical) Antipsychotics - Phenothiazines - Aliphatic Side Chain",
            "note": "Phenothiazine antipsychotic with strong sedative action."
        },
        {
            "name": "Thioridazine",
            "category": "Typical (Classical) Antipsychotics - Phenothiazines - Piperidine Side Chain",
            "note": "Less extrapyramidal toxicity but may cause retinal damage."
        },
        {
            "name": "Trifluoperazine",
            "category": "Typical (Classical) Antipsychotics - Phenothiazines - Piperazine Side Chain",
            "note": "Potent antipsychotic with high incidence of extrapyramidal symptoms."
        },
        {
            "name": "Fluphenazine",
            "category": "Typical (Classical) Antipsychotics - Phenothiazines - Piperazine Side Chain",
            "note": "Long-acting phenothiazine often used as depot preparation."
        },
        {
            "name": "Flupenthixol",
            "category": "Typical (Classical) Antipsychotics - Thioxanthenes",
            "note": "Thioxanthene derivative with antipsychotic action."
        },
        {
            "name": "Haloperidol",
            "category": "Typical (Classical) Antipsychotics - Butyrophenones",
            "note": "Highly potent antipsychotic commonly used in acute psychosis."
        },
        {
            "name": "Trifluperidol",
            "category": "Typical (Classical) Antipsychotics - Butyrophenones",
            "note": "Very potent butyrophenone with marked extrapyramidal effects."
        },
        {
            "name": "Penfluridol",
            "category": "Typical (Classical) Antipsychotics - Butyrophenones",
            "note": "Long-acting oral antipsychotic given once weekly."
        },
        {
            "name": "Pimozide",
            "category": "Typical (Classical) Antipsychotics - Other Heterocyclic Compounds",
            "note": "Used in Tourette syndrome and chronic psychosis."
        },
        {
            "name": "Loxapine",
            "category": "Typical (Classical) Antipsychotics - Other Heterocyclic Compounds",
            "note": "Dibenzoxazepine antipsychotic with properties between typical and atypical drugs."
        },
        {
            "name": "Levosulpiride",
            "category": "Typical (Classical) Antipsychotics - Other Heterocyclic Compounds",
            "note": "Selective dopamine D2 blocker also used as prokinetic."
        },
        {
            "name": "Clozapine",
            "category": "Atypical Antipsychotics",
            "note": "Most effective atypical antipsychotic with risk of agranulocytosis."
        },
        {
            "name": "Risperidone",
            "category": "Atypical Antipsychotics",
            "note": "Atypical antipsychotic effective for both positive and negative symptoms."
        },
        {
            "name": "Olanzapine",
            "category": "Atypical Antipsychotics",
            "note": "Associated with marked weight gain and metabolic syndrome."
        },
        {
            "name": "Quetiapine",
            "category": "Atypical Antipsychotics",
            "note": "Produces minimal extrapyramidal side effects."
        },
        {
            "name": "Aripiprazole",
            "category": "Atypical Antipsychotics",
            "note": "Partial dopamine agonist with lower risk of weight gain."
        },
        {
            "name": "Ziprasidone",
            "category": "Atypical Antipsychotics",
            "note": "Associated with QT interval prolongation."
        },
        {
            "name": "Levosulpiride",
            "category": "Atypical Antipsychotics",
            "note": "Atypical antipsychotic with selective D2 antagonism."
        },
        {
            "name": "Amisulpride",
            "category": "Atypical Antipsychotics",
            "note": "Selective D2/D3 antagonist useful in negative symptoms."
        },
        {
            "name": "Zotepine",
            "category": "Atypical Antipsychotics",
            "note": "Atypical antipsychotic effective in schizophrenia."
        }
    ]
},


{
    "id": "gen-1774954318686",
    "name": "Drugs For Mania and Bipolar Disorder ",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Mood Stabilizer",
        "Anticonvulsants Used as Mood Stabilizers",
        "Atypical Antipsychotics"
    ],
    "mnemonic": "Classic stabilizer = Lithium; Anticonvulsants = Valproate-Carbamazepine-Lamotrigine; Atypicals = Olanzapine-Risperidone-Quetiapine-Aripiprazole",
    "items": [
        {
            "name": "Lithium carbonate",
            "category": "Mood Stabilizer",
            "note": "Drug of choice for prophylaxis of bipolar disorder."
        },
        {
            "name": "Sodium valproate",
            "category": "Anticonvulsants Used as Mood Stabilizers",
            "note": "Useful in acute mania and rapid-cycling bipolar disorder."
        },
        {
            "name": "Carbamazepine",
            "category": "Anticonvulsants Used as Mood Stabilizers",
            "note": "Alternative mood stabilizer useful in refractory mania."
        },
        {
            "name": "Lamotrigine",
            "category": "Anticonvulsants Used as Mood Stabilizers",
            "note": "More useful in bipolar depression and prevention of relapse."
        },
        {
            "name": "Olanzapine",
            "category": "Atypical Antipsychotics",
            "note": "Effective in acute mania but associated with weight gain."
        },
        {
            "name": "Risperidone",
            "category": "Atypical Antipsychotics",
            "note": "Useful in acute manic episodes."
        },
        {
            "name": "Quetiapine",
            "category": "Atypical Antipsychotics",
            "note": "Effective in both mania and bipolar depression."
        },
        {
            "name": "Aripiprazole",
            "category": "Atypical Antipsychotics",
            "note": "Partial dopamine agonist useful in bipolar mania."
        }
    ]
},

{
    "id": "gen-1774954546676",
    "name": "Hallucinogens",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Hallucinogens - Indole Alkylamines",
        "Hallucinogens - Phenylalkylamines",
        "Hallucinogens - Arylcyclohexylamines",
        "Hallucinogens - Cannabinoids"
    ],
    "mnemonic": "Indole = LSD-Psilocybin-DMT; Phenylalkylamines = Mescaline-MDMA-YABA; Arylcyclohexylamine = PCP; Cannabinoid = THC",
    "items": [
        {
            "name": "Lysergic acid diethylamide (LSD)",
            "category": "Hallucinogens - Indole Alkylamines",
            "note": "Most potent hallucinogen producing vivid perceptual changes."
        },
        {
            "name": "Lysergic acid amide",
            "category": "Hallucinogens - Indole Alkylamines",
            "note": "Naturally occurring hallucinogenic amide related to LSD."
        },
        {
            "name": "Psilocybin",
            "category": "Hallucinogens - Indole Alkylamines",
            "note": "Active hallucinogen found in certain mushrooms."
        },
        {
            "name": "Harmine",
            "category": "Hallucinogens - Indole Alkylamines",
            "note": "β-carboline alkaloid with hallucinogenic property."
        },
        {
            "name": "Dimethyltryptamine (DMT)",
            "category": "Hallucinogens - Indole Alkylamines",
            "note": "Very short-acting hallucinogen producing intense psychedelic effects."
        },
        {
            "name": "Mescaline",
            "category": "Hallucinogens - Phenylalkylamines",
            "note": "Hallucinogen obtained from peyote cactus."
        },
        {
            "name": "Methylenedioxymethamphetamine (MDMA)",
            "category": "Hallucinogens - Phenylalkylamines",
            "note": "Ecstasy produces euphoria, emotional warmth and mild hallucinations."
        },
        {
            "name": "Methamphetamine + Methylhexanamine",
            "category": "Hallucinogens - Phenylalkylamines",
            "note": "YABA preparation with stimulant and hallucinogenic effects."
        },
        {
            "name": "Phencyclidine (PCP)",
            "category": "Hallucinogens - Arylcyclohexylamines",
            "note": "Dissociative hallucinogen that may cause violent behaviour."
        },
        {
            "name": "Tetrahydrocannabinol (THC)",
            "category": "Hallucinogens - Cannabinoids",
            "note": "Principal psychoactive constituent of cannabis."
        }
    ]
},


{
    "id": "gen-1774954737654",
    "name": "Antidepressants",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Reversible Inhibitors of MAO-A (RIMAs)",
        "Selective Serotonin Reuptake Inhibitors (SSRIs)",
        "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
        "Tricyclic Antidepressants (TCAs) - Predominantly NA Reuptake Inhibitors",
        "Serotonin and Noradrenaline Reuptake Inhibitors (SNRIs)",
        "Atypical Antidepressants"
    ],
    "mnemonic": "RIMA = Moclobemide-Clorgyline; SSRI = Fluoxetine-Sertraline-Citalopram; TCA = Imipramine-Amitriptyline; SNRI = Venlafaxine-Duloxetine; Atypical = Trazodone-Mirtazapine-Bupropion",
    "items": [
        {
            "name": "Moclobemide",
            "category": "Reversible Inhibitors of MAO-A (RIMAs)",
            "note": "Reversible MAO-A inhibitor with fewer dietary restrictions."
        },
        {
            "name": "Clorgyline",
            "category": "Reversible Inhibitors of MAO-A (RIMAs)",
            "note": "Selective MAO-A inhibitor with antidepressant action."
        },
        {
            "name": "Fluoxetine",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "Prototype SSRI with long half-life."
        },
        {
            "name": "Fluvoxamine",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "SSRI particularly useful in obsessive-compulsive disorder."
        },
        {
            "name": "Paroxetine",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "SSRI with more anticholinergic and withdrawal effects."
        },
        {
            "name": "Sertraline",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "Commonly used SSRI with good safety profile."
        },
        {
            "name": "Citalopram",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "SSRI associated with dose-dependent QT prolongation."
        },
        {
            "name": "Escitalopram",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "S-enantiomer of citalopram with greater potency."
        },
        {
            "name": "Dapoxetine",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "Short-acting SSRI mainly used in premature ejaculation."
        },
        {
            "name": "Imipramine",
            "category": "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
            "note": "Prototype tricyclic antidepressant."
        },
        {
            "name": "Amitriptyline",
            "category": "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
            "note": "Sedative TCA also useful in chronic pain."
        },
        {
            "name": "Trimipramine",
            "category": "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
            "note": "Tricyclic antidepressant with marked sedative effect."
        },
        {
            "name": "Doxepin",
            "category": "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
            "note": "Highly sedative TCA also used in pruritus."
        },
        {
            "name": "Dothiepin",
            "category": "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
            "note": "Also called dosulepin; used in depression and anxiety."
        },
        {
            "name": "Clomipramine",
            "category": "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
            "note": "Most effective TCA in obsessive-compulsive disorder."
        },
        {
            "name": "Desipramine",
            "category": "Tricyclic Antidepressants (TCAs) - Predominantly NA Reuptake Inhibitors",
            "note": "TCA with predominant noradrenaline reuptake inhibition."
        },
        {
            "name": "Nortriptyline",
            "category": "Tricyclic Antidepressants (TCAs) - Predominantly NA Reuptake Inhibitors",
            "note": "Less sedative TCA with fewer anticholinergic effects."
        },
        {
            "name": "Reboxetine",
            "category": "Tricyclic Antidepressants (TCAs) - Predominantly NA Reuptake Inhibitors",
            "note": "Selective noradrenaline reuptake inhibitor."
        },
        {
            "name": "Venlafaxine",
            "category": "Serotonin and Noradrenaline Reuptake Inhibitors (SNRIs)",
            "note": "SNRI effective in depression and anxiety disorders."
        },
        {
            "name": "Desvenlafaxine",
            "category": "Serotonin and Noradrenaline Reuptake Inhibitors (SNRIs)",
            "note": "Active metabolite of venlafaxine."
        },
        {
            "name": "Duloxetine",
            "category": "Serotonin and Noradrenaline Reuptake Inhibitors (SNRIs)",
            "note": "SNRI also useful in neuropathic pain."
        },
        {
            "name": "Trazodone",
            "category": "Atypical Antidepressants",
            "note": "Sedative antidepressant often used in insomnia."
        },
        {
            "name": "Mianserin",
            "category": "Atypical Antidepressants",
            "note": "Tetracyclic antidepressant with sedative effect."
        },
        {
            "name": "Mirtazapine",
            "category": "Atypical Antidepressants",
            "note": "Antidepressant causing increased appetite and weight gain."
        },
        {
            "name": "Bupropion",
            "category": "Atypical Antidepressants",
            "note": "Useful in depression and smoking cessation."
        },
        {
            "name": "Amoxapine",
            "category": "Atypical Antidepressants",
            "note": "Antidepressant with additional antipsychotic property."
        },
        {
            "name": "Tianeptine",
            "category": "Atypical Antidepressants",
            "note": "Atypical antidepressant with anxiolytic action."
        },
        {
            "name": "Amineptine",
            "category": "Atypical Antidepressants",
            "note": "Dopamine-enhancing antidepressant now rarely used."
        }
    ]
},


{
    "id": "gen-1774954855673",
    "name": "Antianxiety Drugs",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Benzodiazepines",
        "Azapirones",
        "Sedative–Antihistaminic",
        "β-Adrenergic Blocker"
    ],
    "mnemonic": "Benzodiazepines = Diazepam-Oxazepam-Lorazepam-Alprazolam; Azapirones = Buspirone-Gepirone-Ipsapirone; Others = Hydroxyzine-Propranolol",
    "items": [
        {
            "name": "Diazepam",
            "category": "Benzodiazepines",
            "note": "Prototype benzodiazepine used for rapid relief of anxiety."
        },
        {
            "name": "Oxazepam",
            "category": "Benzodiazepines",
            "note": "Short-acting benzodiazepine suitable in elderly patients."
        },
        {
            "name": "Lorazepam",
            "category": "Benzodiazepines",
            "note": "Intermediate-acting benzodiazepine commonly used in anxiety disorders."
        },
        {
            "name": "Chlordiazepoxide",
            "category": "Benzodiazepines",
            "note": "First benzodiazepine introduced for anxiety treatment."
        },
        {
            "name": "Alprazolam",
            "category": "Benzodiazepines",
            "note": "Particularly useful in panic disorder."
        },
        {
            "name": "Clonazepam",
            "category": "Benzodiazepines",
            "note": "Useful in panic disorder and anxiety associated with seizures."
        },
        {
            "name": "Buspirone",
            "category": "Azapirones",
            "note": "Non-sedative anxiolytic acting as partial 5-HT1A agonist."
        },
        {
            "name": "Gepirone",
            "category": "Azapirones",
            "note": "Azapirone anxiolytic related to buspirone."
        },
        {
            "name": "Ipsapirone",
            "category": "Azapirones",
            "note": "Partial 5-HT1A agonist with anxiolytic effect."
        },
        {
            "name": "Hydroxyzine",
            "category": "Sedative–Antihistaminic",
            "note": "Sedative antihistamine used for short-term anxiety relief."
        },
        {
            "name": "Propranolol",
            "category": "β-Adrenergic Blocker",
            "note": "Useful in performance anxiety by reducing autonomic symptoms."
        }
    ]
},

{
    "id": "gen-1774955066062",
    "name": "Opioid Analgesics And Antagonists",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Opioid μ-Receptor Agonists - Natural Opium Alkaloids",
        "Opioid μ-Receptor Agonists - Semisynthetic Opioids",
        "Opioid μ-Receptor Agonists - Synthetic Opioids",
        "Complex Action Opioids - Agonist–Antagonists (κ agonists / μ antagonists or partial agonists)",
        "Complex Action Opioids - Partial μ-Agonist + κ-Antagonist",
        "Pure Opioid Antagonists"
    ],
    "mnemonic": "Natural = Morphine-Codeine; Semisynthetic = Heroin-Pholcodine-Ethylmorphine; Synthetic = Pethidine-Methadone-Fentanyl-Tramadol; Mixed = Pentazocine-Nalbuphine-Buprenorphine; Antagonists = Naloxone-Naltrexone",
    "items": [
        {
            "name": "Morphine",
            "category": "Opioid μ-Receptor Agonists - Natural Opium Alkaloids",
            "note": "Prototype strong opioid analgesic."
        },
        {
            "name": "Codeine",
            "category": "Opioid μ-Receptor Agonists - Natural Opium Alkaloids",
            "note": "Weak opioid used mainly as antitussive."
        },
        {
            "name": "Diacetylmorphine (Heroin)",
            "category": "Opioid μ-Receptor Agonists - Semisynthetic Opioids",
            "note": "Highly lipid-soluble opioid with rapid CNS entry."
        },
        {
            "name": "Pholcodine",
            "category": "Opioid μ-Receptor Agonists - Semisynthetic Opioids",
            "note": "Semisynthetic opioid mainly used as cough suppressant."
        },
        {
            "name": "Ethylmorphine",
            "category": "Opioid μ-Receptor Agonists - Semisynthetic Opioids",
            "note": "Opioid derivative used in cough mixtures."
        },
        {
            "name": "Pethidine (Meperidine)",
            "category": "Opioid μ-Receptor Agonists - Synthetic Opioids",
            "note": "Synthetic opioid with antimuscarinic property."
        },
        {
            "name": "Methadone",
            "category": "Opioid μ-Receptor Agonists - Synthetic Opioids",
            "note": "Long-acting opioid used in opioid dependence."
        },
        {
            "name": "Fentanyl",
            "category": "Opioid μ-Receptor Agonists - Synthetic Opioids",
            "note": "Very potent opioid widely used in anaesthesia."
        },
        {
            "name": "Remifentanil",
            "category": "Opioid μ-Receptor Agonists - Synthetic Opioids",
            "note": "Ultra-short acting opioid rapidly metabolized by esterases."
        },
        {
            "name": "Tramadol",
            "category": "Opioid μ-Receptor Agonists - Synthetic Opioids",
            "note": "Weak opioid that also inhibits monoamine reuptake."
        },
        {
            "name": "Tapentadol",
            "category": "Opioid μ-Receptor Agonists - Synthetic Opioids",
            "note": "Acts as μ agonist and noradrenaline reuptake inhibitor."
        },
        {
            "name": "Nalorphine",
            "category": "Complex Action Opioids - Agonist–Antagonists (κ agonists / μ antagonists or partial agonists)",
            "note": "Older mixed agonist-antagonist opioid."
        },
        {
            "name": "Pentazocine",
            "category": "Complex Action Opioids - Agonist–Antagonists (κ agonists / μ antagonists or partial agonists)",
            "note": "Mixed opioid causing less respiratory depression."
        },
        {
            "name": "Butorphanol",
            "category": "Complex Action Opioids - Agonist–Antagonists (κ agonists / μ antagonists or partial agonists)",
            "note": "Mixed agonist-antagonist useful in migraine."
        },
        {
            "name": "Nalbuphine",
            "category": "Complex Action Opioids - Agonist–Antagonists (κ agonists / μ antagonists or partial agonists)",
            "note": "Produces analgesia with less abuse potential."
        },
        {
            "name": "Buprenorphine",
            "category": "Complex Action Opioids - Partial μ-Agonist + κ-Antagonist",
            "note": "Partial μ agonist widely used in opioid dependence."
        },
        {
            "name": "Naloxone",
            "category": "Pure Opioid Antagonists",
            "note": "Drug of choice for acute opioid overdose."
        },
        {
            "name": "Naltrexone",
            "category": "Pure Opioid Antagonists",
            "note": "Long-acting opioid antagonist used in dependence."
        },
        {
            "name": "Nalmefene",
            "category": "Pure Opioid Antagonists",
            "note": "Longer-acting opioid antagonist similar to naloxone."
        }
    ]
},

{
    "id": "gen-1774955180945",
    "name": "CNS Stimulants",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Convulsants",
        "Analeptic",
        "Psychostimulants"
    ],
    "mnemonic": "Convulsants = Strychnine-Picrotoxin-Bicuculline-Pentylenetetrazole; Analeptic = Doxapram; Psychostimulants = Amphetamines-Methylphenidate-Cocaine-Caffeine-Modafinil",
    "items": [
        {
            "name": "Strychnine",
            "category": "Convulsants",
            "note": "Produces convulsions by blocking spinal glycine receptors."
        },
        {
            "name": "Picrotoxin",
            "category": "Convulsants",
            "note": "Convulsant that blocks GABAA receptor chloride channel."
        },
        {
            "name": "Bicuculline",
            "category": "Convulsants",
            "note": "Competitive antagonist at GABAA receptors."
        },
        {
            "name": "Pentylenetetrazole",
            "category": "Convulsants",
            "note": "Historically used as respiratory stimulant and experimental convulsant."
        },
        {
            "name": "Doxapram",
            "category": "Analeptic",
            "note": "Respiratory stimulant used in drug-induced respiratory depression."
        },
        {
            "name": "Amphetamines",
            "category": "Psychostimulants",
            "note": "Increase release of catecholamines and produce CNS stimulation."
        },
        {
            "name": "Methylphenidate",
            "category": "Psychostimulants",
            "note": "Drug of choice for attention deficit hyperactivity disorder."
        },
        {
            "name": "Cocaine",
            "category": "Psychostimulants",
            "note": "Blocks reuptake of dopamine, noradrenaline and serotonin."
        },
        {
            "name": "Atomoxetine",
            "category": "Psychostimulants",
            "note": "Selective noradrenaline reuptake inhibitor used in ADHD."
        },
        {
            "name": "Caffeine",
            "category": "Psychostimulants",
            "note": "Most widely used CNS stimulant acting by adenosine receptor blockade."
        },
        {
            "name": "Modafinil",
            "category": "Psychostimulants",
            "note": "Promotes wakefulness and is used in narcolepsy."
        },
        {
            "name": "Armodafinil",
            "category": "Psychostimulants",
            "note": "R-enantiomer of modafinil with longer duration of action."
        }
    ]
},


{
    "id": "gen-1774955316630",
    "name": "Cognition Enhancers",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Cholinergic Activators",
        "Glutamate (NMDA) Antagonist",
        "Miscellaneous Drugs"
    ],
    "mnemonic": "Cholinergic = Rivastigmine-Donepezil-Galantamine-Tacrine; NMDA antagonist = Memantine; Miscellaneous = Piracetam-Citicoline-Ginkgo biloba",
    "items": [
        {
            "name": "Rivastigmine",
            "category": "Cholinergic Activators",
            "note": "Cholinesterase inhibitor used in Alzheimer disease."
        },
        {
            "name": "Donepezil",
            "category": "Cholinergic Activators",
            "note": "Most commonly used cognition enhancer in Alzheimer disease."
        },
        {
            "name": "Galantamine",
            "category": "Cholinergic Activators",
            "note": "Cholinesterase inhibitor that also facilitates nicotinic receptors."
        },
        {
            "name": "Tacrine",
            "category": "Cholinergic Activators",
            "note": "Older cholinesterase inhibitor limited by hepatotoxicity."
        },
        {
            "name": "Memantine",
            "category": "Glutamate (NMDA) Antagonist",
            "note": "NMDA receptor antagonist useful in moderate to severe Alzheimer disease."
        },
        {
            "name": "Piracetam",
            "category": "Miscellaneous Drugs",
            "note": "Prototype nootropic drug claimed to improve cognition."
        },
        {
            "name": "Citicoline",
            "category": "Miscellaneous Drugs",
            "note": "May improve cognitive function after stroke or brain injury."
        },
        {
            "name": "Pyritinol",
            "category": "Miscellaneous Drugs",
            "note": "Cerebroactive drug with antioxidant property."
        },
        {
            "name": "Piribedil",
            "category": "Miscellaneous Drugs",
            "note": "Dopamine agonist sometimes used in cognitive impairment."
        },
        {
            "name": "Dihydroergotoxine (Codergocrine)",
            "category": "Miscellaneous Drugs",
            "note": "Ergot derivative formerly used in age-related cognitive decline."
        },
        {
            "name": "Ginkgo biloba",
            "category": "Miscellaneous Drugs",
            "note": "Herbal preparation claimed to improve memory and cognition."
        }
    ]
},


{
    "id": "gen-1775191422634",
    "name": "Antihypertensive Drugs",
    "subject": "Pharmacology",
    "chapter": "Cardiovascular Drugs",
    "categories": [
        "Diuretics - Thiazide / Thiazide-like Diuretics",
        "Diuretics - Loop (High-Ceiling) Diuretics",
        "Diuretics - Aldosterone Antagonists",
        "Renin–Angiotensin System Inhibitors - ACE Inhibitors",
        "Renin–Angiotensin System Inhibitors - Angiotensin II (AT1) Receptor Blockers (ARBs)",
        "Renin–Angiotensin System Inhibitors - Direct Renin Inhibitor",
        "Sympathetic Inhibitors - β-Adrenergic Blockers",
        "Sympathetic Inhibitors - α-Adrenergic Blockers",
        "Sympathetic Inhibitors - α + β Adrenergic Blockers",
        "Sympathetic Inhibitors - Central Sympatholytics",
        "Sympathetic Inhibitors - Nonselective α-Blocker"
    ],
    "mnemonic": "Diuretics = Hydrochlorothiazide-Furosemide-Spironolactone; RAS blockers = Captopril-Losartan-Aliskiren; Sympathetic inhibitors = Propranolol-Prazosin-Labetalol-Clonidine",
    "items": [
        {
            "name": "Hydrochlorothiazide",
            "category": "Diuretics - Thiazide / Thiazide-like Diuretics",
            "note": "Common first-line antihypertensive thiazide diuretic."
        },
        {
            "name": "Chlorthalidone",
            "category": "Diuretics - Thiazide / Thiazide-like Diuretics",
            "note": "Longer-acting and more potent than hydrochlorothiazide."
        },
        {
            "name": "Indapamide",
            "category": "Diuretics - Thiazide / Thiazide-like Diuretics",
            "note": "Thiazide-like diuretic with additional vasodilator action."
        },
        {
            "name": "Furosemide",
            "category": "Diuretics - Loop (High-Ceiling) Diuretics",
            "note": "Loop diuretic mainly used in hypertension with renal failure."
        },
        {
            "name": "Spironolactone",
            "category": "Diuretics - Aldosterone Antagonists",
            "note": "Potassium-sparing diuretic useful in resistant hypertension."
        },
        {
            "name": "Eplerenone",
            "category": "Diuretics - Aldosterone Antagonists",
            "note": "Selective aldosterone antagonist with fewer endocrine effects."
        },
        {
            "name": "Captopril",
            "category": "Renin–Angiotensin System Inhibitors - ACE Inhibitors",
            "note": "First ACE inhibitor introduced for hypertension."
        },
        {
            "name": "Enalapril",
            "category": "Renin–Angiotensin System Inhibitors - ACE Inhibitors",
            "note": "Commonly used ACE inhibitor with once or twice daily dosing."
        },
        {
            "name": "Lisinopril",
            "category": "Renin–Angiotensin System Inhibitors - ACE Inhibitors",
            "note": "Long-acting ACE inhibitor active without metabolic conversion."
        },
        {
            "name": "Perindopril",
            "category": "Renin–Angiotensin System Inhibitors - ACE Inhibitors",
            "note": "ACE inhibitor widely used in hypertension and heart failure."
        },
        {
            "name": "Ramipril",
            "category": "Renin–Angiotensin System Inhibitors - ACE Inhibitors",
            "note": "ACE inhibitor shown to reduce cardiovascular events."
        },
        {
            "name": "Fosinopril",
            "category": "Renin–Angiotensin System Inhibitors - ACE Inhibitors",
            "note": "ACE inhibitor eliminated by both liver and kidney."
        },
        {
            "name": "Quinapril",
            "category": "Renin–Angiotensin System Inhibitors - ACE Inhibitors",
            "note": "ACE inhibitor used in hypertension and heart failure."
        },
        {
            "name": "Trandolapril",
            "category": "Renin–Angiotensin System Inhibitors - ACE Inhibitors",
            "note": "Long-acting ACE inhibitor."
        },
        {
            "name": "Imidapril",
            "category": "Renin–Angiotensin System Inhibitors - ACE Inhibitors",
            "note": "ACE inhibitor effective in mild to moderate hypertension."
        },
        {
            "name": "Benazepril",
            "category": "Renin–Angiotensin System Inhibitors - ACE Inhibitors",
            "note": "ACE inhibitor commonly used in chronic hypertension."
        },
        {
            "name": "Losartan",
            "category": "Renin–Angiotensin System Inhibitors - Angiotensin II (AT1) Receptor Blockers (ARBs)",
            "note": "Prototype ARB that blocks AT1 receptors."
        },
        {
            "name": "Candesartan",
            "category": "Renin–Angiotensin System Inhibitors - Angiotensin II (AT1) Receptor Blockers (ARBs)",
            "note": "Potent long-acting ARB."
        },
        {
            "name": "Telmisartan",
            "category": "Renin–Angiotensin System Inhibitors - Angiotensin II (AT1) Receptor Blockers (ARBs)",
            "note": "ARB with longest duration of action."
        },
        {
            "name": "Irbesartan",
            "category": "Renin–Angiotensin System Inhibitors - Angiotensin II (AT1) Receptor Blockers (ARBs)",
            "note": "ARB especially useful in diabetic nephropathy."
        },
        {
            "name": "Eprosartan",
            "category": "Renin–Angiotensin System Inhibitors - Angiotensin II (AT1) Receptor Blockers (ARBs)",
            "note": "ARB used in essential hypertension."
        },
        {
            "name": "Valsartan",
            "category": "Renin–Angiotensin System Inhibitors - Angiotensin II (AT1) Receptor Blockers (ARBs)",
            "note": "Commonly used ARB in hypertension and heart failure."
        },
        {
            "name": "Olmesartan",
            "category": "Renin–Angiotensin System Inhibitors - Angiotensin II (AT1) Receptor Blockers (ARBs)",
            "note": "Long-acting ARB used once daily."
        },
        {
            "name": "Aliskiren",
            "category": "Renin–Angiotensin System Inhibitors - Direct Renin Inhibitor",
            "note": "Directly inhibits renin and blocks formation of angiotensin I."
        },
        {
            "name": "Propranolol",
            "category": "Sympathetic Inhibitors - β-Adrenergic Blockers",
            "note": "Nonselective β-blocker used in hypertension and angina."
        },
        {
            "name": "Metoprolol",
            "category": "Sympathetic Inhibitors - β-Adrenergic Blockers",
            "note": "β1-selective blocker useful in hypertension with ischemic heart disease."
        },
        {
            "name": "Atenolol",
            "category": "Sympathetic Inhibitors - β-Adrenergic Blockers",
            "note": "β1-selective blocker with longer duration of action."
        },
        {
            "name": "Prazosin",
            "category": "Sympathetic Inhibitors - α-Adrenergic Blockers",
            "note": "Selective α1 blocker that may cause first-dose hypotension."
        },
        {
            "name": "Terazosin",
            "category": "Sympathetic Inhibitors - α-Adrenergic Blockers",
            "note": "α1 blocker useful in hypertension with benign prostatic hyperplasia."
        },
        {
            "name": "Doxazosin",
            "category": "Sympathetic Inhibitors - α-Adrenergic Blockers",
            "note": "Long-acting α1 blocker."
        },
        {
            "name": "Labetalol",
            "category": "Sympathetic Inhibitors - α + β Adrenergic Blockers",
            "note": "Combined α and β blocker preferred in hypertensive emergencies."
        },
        {
            "name": "Carvedilol",
            "category": "Sympathetic Inhibitors - α + β Adrenergic Blockers",
            "note": "Combined α and β blocker useful in hypertension with heart failure."
        },
        {
            "name": "Clonidine",
            "category": "Sympathetic Inhibitors - Central Sympatholytics",
            "note": "Central α2 agonist that reduces sympathetic outflow."
        },
        {
            "name": "Methyldopa",
            "category": "Sympathetic Inhibitors - Central Sympatholytics",
            "note": "Preferred antihypertensive in pregnancy."
        },
        {
            "name": "Phentolamine",
            "category": "Sympathetic Inhibitors - Nonselective α-Blocker",
            "note": "Used mainly in pheochromocytoma-associated hypertension."
        }
    ]
},



{
    "id": "gen-1775191547327",
    "name": "Antihypertensive Drugs 2",
    "subject": "Pharmacology",
    "chapter": "Cardiovascular Drugs",
    "categories": [
        "Calcium Channel Blockers - Phenylalkylamine",
        "Calcium Channel Blockers - Benzothiazepine",
        "Calcium Channel Blockers - Dihydropyridines",
        "Vasodilators - Arteriolar Dilators",
        "Vasodilators - Arteriolar + Venodilator"
    ],
    "mnemonic": "CCBs = Verapamil-Diltiazem-Nifedipine-Amlodipine; Vasodilators = Hydralazine-Minoxidil-Sodium nitroprusside",
    "items": [
        {
            "name": "Verapamil",
            "category": "Calcium Channel Blockers - Phenylalkylamine",
            "note": "Acts mainly on heart and also lowers blood pressure."
        },
        {
            "name": "Diltiazem",
            "category": "Calcium Channel Blockers - Benzothiazepine",
            "note": "Produces both cardiac depression and vasodilatation."
        },
        {
            "name": "Nifedipine",
            "category": "Calcium Channel Blockers - Dihydropyridines",
            "note": "Prototype dihydropyridine causing marked vasodilatation."
        },
        {
            "name": "Felodipine",
            "category": "Calcium Channel Blockers - Dihydropyridines",
            "note": "Long-acting dihydropyridine used in hypertension."
        },
        {
            "name": "Amlodipine",
            "category": "Calcium Channel Blockers - Dihydropyridines",
            "note": "Most commonly used long-acting calcium channel blocker."
        },
        {
            "name": "Nitrendipine",
            "category": "Calcium Channel Blockers - Dihydropyridines",
            "note": "Dihydropyridine used for chronic hypertension."
        },
        {
            "name": "Cilnidipine",
            "category": "Calcium Channel Blockers - Dihydropyridines",
            "note": "Blocks both L-type and N-type calcium channels."
        },
        {
            "name": "Lacidipine",
            "category": "Calcium Channel Blockers - Dihydropyridines",
            "note": "Highly lipophilic long-acting dihydropyridine."
        },
        {
            "name": "Lercanidipine",
            "category": "Calcium Channel Blockers - Dihydropyridines",
            "note": "Third-generation dihydropyridine with prolonged action."
        },
        {
            "name": "Benidipine",
            "category": "Calcium Channel Blockers - Dihydropyridines",
            "note": "Blocks L-, N- and T-type calcium channels."
        },
        {
            "name": "Nicardipine",
            "category": "Calcium Channel Blockers - Dihydropyridines",
            "note": "Intravenous preparation useful in hypertensive emergencies."
        },
        {
            "name": "Hydralazine",
            "category": "Vasodilators - Arteriolar Dilators",
            "note": "Direct arteriolar dilator used in severe hypertension."
        },
        {
            "name": "Minoxidil",
            "category": "Vasodilators - Arteriolar Dilators",
            "note": "Powerful vasodilator that may cause hypertrichosis."
        },
        {
            "name": "Sodium nitroprusside",
            "category": "Vasodilators - Arteriolar + Venodilator",
            "note": "Most rapidly acting drug for hypertensive emergencies."
        }
    ]
},


{
    "id": "gen-1775191755362",
    "name": "Antianginal Drugs",
    "subject": "Pharmacology",
    "chapter": "Cardiovascular Drugs",
    "categories": [
        "Nitrates - Short-Acting",
        "Nitrates - Long-Acting",
        "β-Blockers",
        "Calcium Channel Blockers",
        "Potassium Channel Opener",
        "Other Antianginal Drugs"
    ],
    "mnemonic": "Nitrates = GTN-Isosorbide; β-blockers = Propranolol-Metoprolol-Atenolol; CCBs = Verapamil-Diltiazem-Amlodipine; Others = Nicorandil-Ranolazine-Ivabradine",
    "items": [
        {
            "name": "Glyceryl trinitrate",
            "category": "Nitrates - Short-Acting",
            "note": "Drug of choice for immediate relief of acute anginal attack."
        },
        {
            "name": "Isosorbide dinitrate (sublingual)",
            "category": "Nitrates - Short-Acting",
            "note": "Short-acting nitrate used sublingually in acute angina."
        },
        {
            "name": "Isosorbide dinitrate (oral)",
            "category": "Nitrates - Long-Acting",
            "note": "Oral nitrate used for prophylaxis of angina."
        },
        {
            "name": "Isosorbide mononitrate",
            "category": "Nitrates - Long-Acting",
            "note": "Long-acting nitrate with better oral bioavailability."
        },
        {
            "name": "Erythritol tetranitrate",
            "category": "Nitrates - Long-Acting",
            "note": "Long-acting nitrate used in chronic angina prophylaxis."
        },
        {
            "name": "Pentaerythritol tetranitrate",
            "category": "Nitrates - Long-Acting",
            "note": "Long-acting nitrate for prevention of anginal attacks."
        },
        {
            "name": "Propranolol",
            "category": "β-Blockers",
            "note": "Nonselective β-blocker effective in chronic stable angina."
        },
        {
            "name": "Metoprolol",
            "category": "β-Blockers",
            "note": "β1-selective blocker widely used in angina."
        },
        {
            "name": "Atenolol",
            "category": "β-Blockers",
            "note": "β1-selective blocker useful for long-term angina control."
        },
        {
            "name": "Verapamil",
            "category": "Calcium Channel Blockers",
            "note": "Effective in angina by reducing heart rate and contractility."
        },
        {
            "name": "Diltiazem",
            "category": "Calcium Channel Blockers",
            "note": "Useful in angina because it decreases cardiac work."
        },
        {
            "name": "Amlodipine",
            "category": "Calcium Channel Blockers",
            "note": "Dihydropyridine useful particularly in vasospastic angina."
        },
        {
            "name": "Nicorandil",
            "category": "Potassium Channel Opener",
            "note": "Acts both as potassium channel opener and nitrate."
        },
        {
            "name": "Trimetazidine",
            "category": "Other Antianginal Drugs",
            "note": "Metabolic modulator that improves myocardial efficiency."
        },
        {
            "name": "Ranolazine",
            "category": "Other Antianginal Drugs",
            "note": "Antianginal that inhibits late sodium current."
        },
        {
            "name": "Ivabradine",
            "category": "Other Antianginal Drugs",
            "note": "Reduces heart rate by blocking If current in SA node."
        },
        {
            "name": "Dipyridamole",
            "category": "Other Antianginal Drugs",
            "note": "Coronary vasodilator with antiplatelet action."
        }
    ]
},


{
    "id": "gen-1775191928487",
    "name": "Drugs For Peripheral Vascular Diseases",
    "subject": "Pharmacology",
    "chapter": "Cardiovascular Drugs",
    "categories": [
        "Rheological Agent",
        "Phosphodiesterase-3 Inhibitor",
        "Antiplatelet Drugs",
        "Antioxidant",
        "Vasodilators - Direct-Acting Vasodilators",
        "Vasodilators - β-Adrenergic Agonist",
        "Vasodilators - α-Adrenergic Blockers",
        "Vasodilators - Calcium Channel Blockers",
        "Vasodilators - Prostacyclin (PGI₂)"
    ],
    "mnemonic": "Flow improvers = Pentoxifylline-Cilostazol; Antiplatelets = Aspirin-Clopidogrel; Vasodilators = Cyclandelate-Isoxsuprine-Prazosin-Nifedipine-PGI₂",
    "items": [
        {
            "name": "Pentoxifylline (Oxpentifylline)",
            "category": "Rheological Agent",
            "note": "Improves blood flow by increasing red cell deformability."
        },
        {
            "name": "Cilostazol",
            "category": "Phosphodiesterase-3 Inhibitor",
            "note": "Improves intermittent claudication by vasodilatation and antiplatelet action."
        },
        {
            "name": "Aspirin",
            "category": "Antiplatelet Drugs",
            "note": "Irreversibly inhibits platelet cyclooxygenase."
        },
        {
            "name": "Clopidogrel",
            "category": "Antiplatelet Drugs",
            "note": "ADP receptor blocker widely used in peripheral vascular disease."
        },
        {
            "name": "Ticlopidine",
            "category": "Antiplatelet Drugs",
            "note": "Older ADP receptor blocker with risk of neutropenia."
        },
        {
            "name": "Vitamin E",
            "category": "Antioxidant",
            "note": "Antioxidant sometimes used in peripheral vascular disorders."
        },
        {
            "name": "Cyclandelate",
            "category": "Vasodilators - Direct-Acting Vasodilators",
            "note": "Direct vasodilator used in peripheral vascular insufficiency."
        },
        {
            "name": "Xanthinol nicotinate",
            "category": "Vasodilators - Direct-Acting Vasodilators",
            "note": "Produces peripheral vasodilatation and improves blood flow."
        },
        {
            "name": "Isoxsuprine",
            "category": "Vasodilators - β-Adrenergic Agonist",
            "note": "β-adrenergic agonist producing peripheral vasodilatation."
        },
        {
            "name": "Prazosin",
            "category": "Vasodilators - α-Adrenergic Blockers",
            "note": "Selective α1 blocker that improves peripheral circulation."
        },
        {
            "name": "Phenoxybenzamine",
            "category": "Vasodilators - α-Adrenergic Blockers",
            "note": "Irreversible α-blocker used in vasospastic disorders."
        },
        {
            "name": "Nifedipine",
            "category": "Vasodilators - Calcium Channel Blockers",
            "note": "Useful in Raynaud phenomenon due to vasodilator action."
        },
        {
            "name": "Felodipine",
            "category": "Vasodilators - Calcium Channel Blockers",
            "note": "Dihydropyridine calcium blocker that improves peripheral blood flow."
        },
        {
            "name": "Prostacyclin (PGI₂)",
            "category": "Vasodilators - Prostacyclin (PGI₂)",
            "note": "Potent vasodilator and inhibitor of platelet aggregation."
        }
    ]
},






{
    "id": "gen-1775192263516",
    "name": "Drugs For Congestive Heart Failure",
    "subject": "Pharmacology",
    "chapter": "Cardiovascular Drugs",
    "categories": [
        "Inotropic Drugs - Cardiac Glycosides",
        "Inotropic Drugs - Sympathomimetics",
        "Inotropic Drugs - PDE-3 Inhibitors",
        "Diuretics - High-Ceiling Diuretics",
        "Diuretics - Thiazide / Thiazide-like Diuretics",
        "Diuretics - Aldosterone Antagonists",
        "Renin–Angiotensin Inhibitors - ACE Inhibitors",
        "Renin–Angiotensin Inhibitors - Angiotensin II (AT1) Receptor Blockers",
        "β-Adrenergic Blockers",
        "Vasodilators - Venodilators",
        "Vasodilators - Arteriolar Dilator",
        "Vasodilators - Arteriolar + Venodilator"
    ],
    "mnemonic": "CHF = Digoxin-Dobutamine-Milrinone + Furosemide-Spironolactone + Enalapril-Losartan + Metoprolol-Carvedilol + Nitrates-Hydralazine",
    "items": [
        {
            "name": "Digoxin",
            "category": "Inotropic Drugs - Cardiac Glycosides",
            "note": "Improves symptoms of heart failure by increasing cardiac contractility."
        },
        {
            "name": "Ouabain",
            "category": "Inotropic Drugs - Cardiac Glycosides",
            "note": "Cardiac glycoside now rarely used in heart failure."
        },
        {
            "name": "Dobutamine",
            "category": "Inotropic Drugs - Sympathomimetics",
            "note": "β1 agonist used in acute severe heart failure."
        },
        {
            "name": "Dopamine",
            "category": "Inotropic Drugs - Sympathomimetics",
            "note": "Used in cardiogenic shock and severe heart failure."
        },
        {
            "name": "Inamrinone",
            "category": "Inotropic Drugs - PDE-3 Inhibitors",
            "note": "PDE-3 inhibitor producing both inotropic and vasodilator effects."
        },
        {
            "name": "Milrinone",
            "category": "Inotropic Drugs - PDE-3 Inhibitors",
            "note": "Preferred PDE-3 inhibitor in acute heart failure."
        },
        {
            "name": "Furosemide",
            "category": "Diuretics - High-Ceiling Diuretics",
            "note": "Most commonly used diuretic for pulmonary congestion."
        },
        {
            "name": "Bumetanide",
            "category": "Diuretics - High-Ceiling Diuretics",
            "note": "Potent loop diuretic used in resistant edema."
        },
        {
            "name": "Hydrochlorothiazide",
            "category": "Diuretics - Thiazide / Thiazide-like Diuretics",
            "note": "May be combined with loop diuretics in resistant heart failure."
        },
        {
            "name": "Metolazone",
            "category": "Diuretics - Thiazide / Thiazide-like Diuretics",
            "note": "Effective even when renal function is impaired."
        },
        {
            "name": "Xipamide",
            "category": "Diuretics - Thiazide / Thiazide-like Diuretics",
            "note": "Thiazide-like diuretic used in chronic heart failure."
        },
        {
            "name": "Spironolactone",
            "category": "Diuretics - Aldosterone Antagonists",
            "note": "Reduces mortality in severe heart failure."
        },
        {
            "name": "Eplerenone",
            "category": "Diuretics - Aldosterone Antagonists",
            "note": "Selective aldosterone antagonist with fewer endocrine adverse effects."
        },
        {
            "name": "Enalapril",
            "category": "Renin–Angiotensin Inhibitors - ACE Inhibitors",
            "note": "ACE inhibitor shown to improve survival in heart failure."
        },
        {
            "name": "Ramipril",
            "category": "Renin–Angiotensin Inhibitors - ACE Inhibitors",
            "note": "ACE inhibitor useful in chronic congestive heart failure."
        },
        {
            "name": "Others",
            "category": "Renin–Angiotensin Inhibitors - ACE Inhibitors",
            "note": "Other ACE inhibitors have similar benefit in heart failure."
        },
        {
            "name": "Losartan",
            "category": "Renin–Angiotensin Inhibitors - Angiotensin II (AT1) Receptor Blockers",
            "note": "ARB used when ACE inhibitors are not tolerated."
        },
        {
            "name": "Candesartan",
            "category": "Renin–Angiotensin Inhibitors - Angiotensin II (AT1) Receptor Blockers",
            "note": "ARB effective in reducing mortality in heart failure."
        },
        {
            "name": "Others",
            "category": "Renin–Angiotensin Inhibitors - Angiotensin II (AT1) Receptor Blockers",
            "note": "Other ARBs are useful alternatives to ACE inhibitors."
        },
        {
            "name": "Metoprolol",
            "category": "β-Adrenergic Blockers",
            "note": "β1-selective blocker that improves survival in heart failure."
        },
        {
            "name": "Bisoprolol",
            "category": "β-Adrenergic Blockers",
            "note": "β1-selective blocker beneficial in chronic heart failure."
        },
        {
            "name": "Nebivolol",
            "category": "β-Adrenergic Blockers",
            "note": "β1 blocker with additional nitric oxide-mediated vasodilation."
        },
        {
            "name": "Carvedilol",
            "category": "β-Adrenergic Blockers",
            "note": "Combined α and β blocker with proven mortality benefit."
        },
        {
            "name": "Glyceryl trinitrate",
            "category": "Vasodilators - Venodilators",
            "note": "Venodilator that reduces preload in heart failure."
        },
        {
            "name": "Isosorbide dinitrate",
            "category": "Vasodilators - Venodilators",
            "note": "Longer-acting nitrate useful in chronic heart failure."
        },
        {
            "name": "Hydralazine",
            "category": "Vasodilators - Arteriolar Dilator",
            "note": "Reduces afterload and is often combined with nitrates."
        },
        {
            "name": "Sodium nitroprusside",
            "category": "Vasodilators - Arteriolar + Venodilator",
            "note": "Rapidly acting vasodilator used in acute severe heart failure."
        }
    ]
},



{
    "id": "gen-1775192633390",
    "name": "Antiarrhythmic Drugs",
    "subject": "Pharmacology",
    "chapter": "Cardiovascular Drugs",
    "categories": [
        "Class I – Membrane Stabilizing Agents (Na⁺ Channel Blockers) - Class IA",
        "Class I – Membrane Stabilizing Agents (Na⁺ Channel Blockers) - Class IB",
        "Class I – Membrane Stabilizing Agents (Na⁺ Channel Blockers) - Class IC",
        "Class II – Antiadrenergic Agents",
        "Class III – Potassium Channel Blockers",
        "Class IV – Calcium Channel Blockers",
        "Drugs for PSVT"
    ],
    "mnemonic": "I = Quinidine-Lidocaine-Flecainide; II = Propranolol; III = Amiodarone-Sotalol; IV = Verapamil; PSVT = Adenosine-Digoxin",
    "items": [
        {
            "name": "Quinidine",
            "category": "Class I – Membrane Stabilizing Agents (Na⁺ Channel Blockers) - Class IA",
            "note": "Class IA drug that moderately decreases phase 0 depolarization."
        },
        {
            "name": "Procainamide",
            "category": "Class I – Membrane Stabilizing Agents (Na⁺ Channel Blockers) - Class IA",
            "note": "Useful in both atrial and ventricular arrhythmias."
        },
        {
            "name": "Disopyramide",
            "category": "Class I – Membrane Stabilizing Agents (Na⁺ Channel Blockers) - Class IA",
            "note": "Class IA drug with marked anticholinergic property."
        },
        {
            "name": "Lidocaine",
            "category": "Class I – Membrane Stabilizing Agents (Na⁺ Channel Blockers) - Class IB",
            "note": "Drug of choice for ventricular arrhythmias after myocardial infarction."
        },
        {
            "name": "Mexiletine",
            "category": "Class I – Membrane Stabilizing Agents (Na⁺ Channel Blockers) - Class IB",
            "note": "Orally active analogue of lidocaine."
        },
        {
            "name": "Propafenone",
            "category": "Class I – Membrane Stabilizing Agents (Na⁺ Channel Blockers) - Class IC",
            "note": "Markedly depresses conduction in atrial and ventricular tissue."
        },
        {
            "name": "Flecainide",
            "category": "Class I – Membrane Stabilizing Agents (Na⁺ Channel Blockers) - Class IC",
            "note": "Potent antiarrhythmic used in refractory supraventricular arrhythmias."
        },
        {
            "name": "Propranolol",
            "category": "Class II – Antiadrenergic Agents",
            "note": "β-blocker useful in tachyarrhythmias."
        },
        {
            "name": "Esmolol",
            "category": "Class II – Antiadrenergic Agents",
            "note": "Ultra-short acting β-blocker used intravenously."
        },
        {
            "name": "Sotalol",
            "category": "Class II – Antiadrenergic Agents",
            "note": "β-blocker that also prolongs action potential duration."
        },
        {
            "name": "Amiodarone",
            "category": "Class III – Potassium Channel Blockers",
            "note": "Most effective broad-spectrum antiarrhythmic drug."
        },
        {
            "name": "Dronedarone",
            "category": "Class III – Potassium Channel Blockers",
            "note": "Amiodarone analogue with less toxicity."
        },
        {
            "name": "Sotalol",
            "category": "Class III – Potassium Channel Blockers",
            "note": "Also acts as potassium channel blocker prolonging repolarization."
        },
        {
            "name": "Dofetilide",
            "category": "Class III – Potassium Channel Blockers",
            "note": "Selective potassium channel blocker used in atrial fibrillation."
        },
        {
            "name": "Ibutilide",
            "category": "Class III – Potassium Channel Blockers",
            "note": "Intravenous drug used to convert atrial flutter or fibrillation."
        },
        {
            "name": "Verapamil",
            "category": "Class IV – Calcium Channel Blockers",
            "note": "Useful in supraventricular arrhythmias by slowing AV conduction."
        },
        {
            "name": "Diltiazem",
            "category": "Class IV – Calcium Channel Blockers",
            "note": "Calcium channel blocker effective in atrial arrhythmias."
        },
        {
            "name": "Adenosine",
            "category": "Drugs for PSVT",
            "note": "Drug of choice for acute paroxysmal supraventricular tachycardia."
        },
        {
            "name": "Digoxin",
            "category": "Drugs for PSVT",
            "note": "Can slow AV nodal conduction in supraventricular arrhythmias."
        }
    ]
},

{
    "id": "gen-1775195176616",
    "name": "Diuretics",
    "subject": "Pharmacology",
    "chapter": "RENAL",
    "categories": [
        "High-Ceiling Diuretics",
        "Medium-Efficacy Diuretics - Benzothiadiazines",
        "Medium-Efficacy Diuretics - Thiazide-like Diuretics",
        "Weak / Adjunctive Diuretics - Carbonic Anhydrase Inhibitor",
        "Weak / Adjunctive Diuretics - Osmotic Diuretics",
        "Weak / Adjunctive Diuretics - Potassium-Sparing Diuretics - Aldosterone Antagonists",
        "Weak / Adjunctive Diuretics - Potassium-Sparing Diuretics - Renal Epithelial Na+ Channel Inhibitors"
    ],
    "mnemonic": "Loop = Furosemide-Bumetanide-Torasemide; Thiazides = Hydrochlorothiazide-Chlorthalidone-Indapamide; K-sparing = Spironolactone-Amiloride",
    "items": [
        {
            "name": "Furosemide (Frusemide)",
            "category": "High-Ceiling Diuretics",
            "note": "Most commonly used loop diuretic acting on thick ascending limb."
        },
        {
            "name": "Bumetanide",
            "category": "High-Ceiling Diuretics",
            "note": "Potent loop diuretic with rapid onset."
        },
        {
            "name": "Torasemide",
            "category": "High-Ceiling Diuretics",
            "note": "Longer-acting loop diuretic."
        },
        {
            "name": "Hydrochlorothiazide",
            "category": "Medium-Efficacy Diuretics - Benzothiadiazines",
            "note": "Prototype thiazide diuretic inhibiting Na+-Cl− symport."
        },
        {
            "name": "Hydroflumethiazide",
            "category": "Medium-Efficacy Diuretics - Benzothiadiazines",
            "note": "Thiazide diuretic used in hypertension and edema."
        },
        {
            "name": "Benzthiazide",
            "category": "Medium-Efficacy Diuretics - Benzothiadiazines",
            "note": "Older benzothiadiazine diuretic."
        },
        {
            "name": "Chlorthalidone",
            "category": "Medium-Efficacy Diuretics - Thiazide-like Diuretics",
            "note": "Long-acting thiazide-like diuretic."
        },
        {
            "name": "Metolazone",
            "category": "Medium-Efficacy Diuretics - Thiazide-like Diuretics",
            "note": "Useful even in reduced renal function."
        },
        {
            "name": "Xipamide",
            "category": "Medium-Efficacy Diuretics - Thiazide-like Diuretics",
            "note": "Thiazide-like diuretic with moderate efficacy."
        },
        {
            "name": "Indapamide",
            "category": "Medium-Efficacy Diuretics - Thiazide-like Diuretics",
            "note": "Thiazide-like diuretic with additional vasodilator property."
        },
        {
            "name": "Clopamide",
            "category": "Medium-Efficacy Diuretics - Thiazide-like Diuretics",
            "note": "Long-acting thiazide-like diuretic."
        },
        {
            "name": "Acetazolamide",
            "category": "Weak / Adjunctive Diuretics - Carbonic Anhydrase Inhibitor",
            "note": "Carbonic anhydrase inhibitor mainly used in glaucoma and altitude sickness."
        },
        {
            "name": "Mannitol",
            "category": "Weak / Adjunctive Diuretics - Osmotic Diuretics",
            "note": "Osmotic diuretic used to reduce intracranial pressure."
        },
        {
            "name": "Isosorbide",
            "category": "Weak / Adjunctive Diuretics - Osmotic Diuretics",
            "note": "Oral osmotic diuretic used in glaucoma."
        },
        {
            "name": "Glycerol",
            "category": "Weak / Adjunctive Diuretics - Osmotic Diuretics",
            "note": "Osmotic diuretic that lowers intraocular pressure."
        },
        {
            "name": "Spironolactone",
            "category": "Weak / Adjunctive Diuretics - Potassium-Sparing Diuretics - Aldosterone Antagonists",
            "note": "Potassium-sparing diuretic antagonizing aldosterone."
        },
        {
            "name": "Eplerenone",
            "category": "Weak / Adjunctive Diuretics - Potassium-Sparing Diuretics - Aldosterone Antagonists",
            "note": "Selective aldosterone antagonist with fewer endocrine effects."
        },
        {
            "name": "Amiloride",
            "category": "Weak / Adjunctive Diuretics - Potassium-Sparing Diuretics - Renal Epithelial Na+ Channel Inhibitors",
            "note": "Blocks epithelial sodium channels in distal nephron."
        },
        {
            "name": "Triamterene",
            "category": "Weak / Adjunctive Diuretics - Potassium-Sparing Diuretics - Renal Epithelial Na+ Channel Inhibitors",
            "note": "Potassium-sparing diuretic often combined with thiazides."
        }
    ]
},


{
    "id": "gen-1775195212113",
    "name": "Antidirutics",
    "subject": "Pharmacology",
    "chapter": "RENAL",
    "categories": [
        "Antidiuretic Hormone and its Analogues",
        "Miscellaneous",
        "Natriuretics"
    ],
    "mnemonic": "ADH analogues = Vasopressin-Desmopressin-Terlipressin; Miscellaneous = Carbamazepine-Chlorpropamide-Indomethacin; Natriuretics = Thiazides-Amiloride",
    "items": [
        {
            "name": "Vasopressin (ADH)",
            "category": "Antidiuretic Hormone and its Analogues",
            "note": "Natural antidiuretic hormone acting on V2 receptors."
        },
        {
            "name": "Desmopressin",
            "category": "Antidiuretic Hormone and its Analogues",
            "note": "Preferred drug for central diabetes insipidus."
        },
        {
            "name": "Lypressin",
            "category": "Antidiuretic Hormone and its Analogues",
            "note": "Synthetic vasopressin analogue with antidiuretic action."
        },
        {
            "name": "Terlipressin",
            "category": "Antidiuretic Hormone and its Analogues",
            "note": "Long-acting vasopressin analogue used in variceal bleeding."
        },
        {
            "name": "Carbamazepine",
            "category": "Miscellaneous",
            "note": "Enhances release of endogenous ADH."
        },
        {
            "name": "Chlorpropamide",
            "category": "Miscellaneous",
            "note": "Sulfonylurea that potentiates action of ADH."
        },
        {
            "name": "Indomethacin",
            "category": "Miscellaneous",
            "note": "Reduces urine output in nephrogenic diabetes insipidus."
        },
        {
            "name": "Thiazides",
            "category": "Natriuretics",
            "note": "Paradoxically reduce urine output in nephrogenic diabetes insipidus."
        },
        {
            "name": "Amiloride",
            "category": "Natriuretics",
            "note": "Useful in lithium-induced nephrogenic diabetes insipidus."
        }
    ]
},






{
    "id": "gen-1775195996818",
    "name": "Haematinics",
    "subject": "Pharmacology",
    "chapter": "Drugs Affecting Blood",
    "categories": [
        "Iron Preparations - Oral Iron",
        "Iron Preparations - Parenteral Iron",
        "Maturation Factors - Vitamin B12",
        "Maturation Factors - Folic Acid",
        "Adjuvant Haematinics"
    ],
    "mnemonic": "Iron = Ferrous salts orally, Iron sucrose/Ferric carboxymaltose parenterally; Maturation factors = Vitamin B12 + Folic acid; Adjuvants = Copper-Pyridoxine",
    "items": [
        {
            "name": "Ferrous sulfate",
            "category": "Iron Preparations - Oral Iron",
            "note": "Most commonly used and cheapest oral iron preparation."
        },
        {
            "name": "Ferrous fumarate",
            "category": "Iron Preparations - Oral Iron",
            "note": "Contains higher percentage of elemental iron."
        },
        {
            "name": "Ferrous gluconate",
            "category": "Iron Preparations - Oral Iron",
            "note": "Better tolerated but contains less elemental iron."
        },
        {
            "name": "Ferrous succinate",
            "category": "Iron Preparations - Oral Iron",
            "note": "Oral iron preparation used in iron deficiency anaemia."
        },
        {
            "name": "Ferrous aminoate",
            "category": "Iron Preparations - Oral Iron",
            "note": "Chelated iron preparation with improved gastrointestinal tolerance."
        },
        {
            "name": "Ferric ammonium citrate",
            "category": "Iron Preparations - Oral Iron",
            "note": "Ferric salt used in oral iron therapy."
        },
        {
            "name": "Ferric hydroxide polymaltose",
            "category": "Iron Preparations - Oral Iron",
            "note": "Less gastric irritation and safer in overdose."
        },
        {
            "name": "Carbonyl iron",
            "category": "Iron Preparations - Oral Iron",
            "note": "Elemental iron preparation with slow absorption."
        },
        {
            "name": "Iron-dextran",
            "category": "Iron Preparations - Parenteral Iron",
            "note": "Can provide total dose infusion but may cause anaphylaxis."
        },
        {
            "name": "Iron sucrose",
            "category": "Iron Preparations - Parenteral Iron",
            "note": "Commonly used intravenous iron with better safety."
        },
        {
            "name": "Ferric carboxymaltose",
            "category": "Iron Preparations - Parenteral Iron",
            "note": "Allows administration of large single intravenous dose."
        },
        {
            "name": "Iron isomaltoside-1000",
            "category": "Iron Preparations - Parenteral Iron",
            "note": "Parenteral iron preparation permitting high-dose infusion."
        },
        {
            "name": "Iron–calcium complex",
            "category": "Iron Preparations - Parenteral Iron",
            "note": "Parenteral iron preparation used when oral therapy is unsuitable."
        },
        {
            "name": "Cyanocobalamin",
            "category": "Maturation Factors - Vitamin B12",
            "note": "Commonly used preparation of vitamin B12."
        },
        {
            "name": "Hydroxocobalamin",
            "category": "Maturation Factors - Vitamin B12",
            "note": "Longer-acting vitamin B12 preparation."
        },
        {
            "name": "Methylcobalamin",
            "category": "Maturation Factors - Vitamin B12",
            "note": "Active coenzyme form of vitamin B12."
        },
        {
            "name": "Folic acid",
            "category": "Maturation Factors - Folic Acid",
            "note": "Drug of choice for folate deficiency anaemia."
        },
        {
            "name": "Folinic acid (Leucovorin / Citrovorum factor)",
            "category": "Maturation Factors - Folic Acid",
            "note": "Used to rescue from methotrexate toxicity."
        },
        {
            "name": "Copper",
            "category": "Adjuvant Haematinics",
            "note": "Required for proper utilization of iron."
        },
        {
            "name": "Pyridoxine",
            "category": "Adjuvant Haematinics",
            "note": "Useful in sideroblastic anaemia."
        }
    ]
},


{
    "id": "gen-1775196181173",
    "name": "Coagulants",
    "subject": "Pharmacology",
    "chapter": "Drugs Affecting Blood",
    "categories": [
        "Vitamin K Preparations - Vitamin K1",
        "Vitamin K Preparations - Vitamin K3",
        "Miscellaneous Coagulants"
    ],
    "mnemonic": "Vitamin K1 = Phytonadione; Vitamin K3 = Menadione group; Others = Fibrinogen-Factor VIII-Desmopressin-Ethamsylate",
    "items": [
        {
            "name": "Phytonadione (Phylloquinone)",
            "category": "Vitamin K Preparations - Vitamin K1",
            "note": "Drug of choice for vitamin K deficiency bleeding."
        },
        {
            "name": "Menadione",
            "category": "Vitamin K Preparations - Vitamin K3",
            "note": "Synthetic vitamin K analogue now rarely used."
        },
        {
            "name": "Acetomenaphthone",
            "category": "Vitamin K Preparations - Vitamin K3",
            "note": "Synthetic vitamin K preparation used as coagulant."
        },
        {
            "name": "Menadione sodium bisulfite",
            "category": "Vitamin K Preparations - Vitamin K3",
            "note": "Water-soluble vitamin K analogue."
        },
        {
            "name": "Fibrinogen (human)",
            "category": "Miscellaneous Coagulants",
            "note": "Used in severe hypofibrinogenaemia and bleeding."
        },
        {
            "name": "Antihaemophilic factor",
            "category": "Miscellaneous Coagulants",
            "note": "Factor VIII preparation used in haemophilia A."
        },
        {
            "name": "Desmopressin",
            "category": "Miscellaneous Coagulants",
            "note": "Raises factor VIII and von Willebrand factor levels."
        },
        {
            "name": "Adrenochrome monosemicarbazone",
            "category": "Miscellaneous Coagulants",
            "note": "Haemostatic agent used in capillary bleeding."
        },
        {
            "name": "Ethamsylate",
            "category": "Miscellaneous Coagulants",
            "note": "Reduces capillary bleeding by improving platelet adhesion."
        },
        {
            "name": "Rutin",
            "category": "Miscellaneous Coagulants",
            "note": "Capillary stabilizing agent sometimes used in bleeding disorders."
        }
    ]
},


{
    "id": "gen-1775196329406",
    "name": "Anticoagulants",
    "subject": "Pharmacology",
    "chapter": "Drugs Affecting Blood",
    "categories": [
        "Parenteral Anticoagulants - Indirect Thrombin Inhibitors",
        "Parenteral Anticoagulants - Direct Thrombin Inhibitors",
        "Oral Anticoagulants - Vitamin K Antagonists",
        "Oral Anticoagulants - Direct Factor Xa Inhibitors",
        "Oral Anticoagulants - Oral Direct Thrombin Inhibitor",
        "In Vitro Anticoagulants"
    ],
    "mnemonic": "Heparin-Enoxaparin-Fondaparinux for parenteral; Warfarin-Rivaroxaban-Dabigatran for oral anticoagulation",
    "items": [
        {
            "name": "Heparin (unfractionated)",
            "category": "Parenteral Anticoagulants - Indirect Thrombin Inhibitors",
            "note": "Acts immediately by enhancing antithrombin III activity."
        },
        {
            "name": "Enoxaparin",
            "category": "Parenteral Anticoagulants - Indirect Thrombin Inhibitors",
            "note": "Most commonly used low-molecular-weight heparin."
        },
        {
            "name": "Reviparin",
            "category": "Parenteral Anticoagulants - Indirect Thrombin Inhibitors",
            "note": "Low-molecular-weight heparin with predominant anti-Xa activity."
        },
        {
            "name": "Nadroparin",
            "category": "Parenteral Anticoagulants - Indirect Thrombin Inhibitors",
            "note": "Low-molecular-weight heparin used in thromboembolism."
        },
        {
            "name": "Dalteparin",
            "category": "Parenteral Anticoagulants - Indirect Thrombin Inhibitors",
            "note": "Low-molecular-weight heparin widely used in prophylaxis."
        },
        {
            "name": "Parmaparin",
            "category": "Parenteral Anticoagulants - Indirect Thrombin Inhibitors",
            "note": "Low-molecular-weight heparin preparation."
        },
        {
            "name": "Ardeparin",
            "category": "Parenteral Anticoagulants - Indirect Thrombin Inhibitors",
            "note": "Older low-molecular-weight heparin."
        },
        {
            "name": "Fondaparinux",
            "category": "Parenteral Anticoagulants - Indirect Thrombin Inhibitors",
            "note": "Selective factor Xa inhibitor given subcutaneously."
        },
        {
            "name": "Danaparoid",
            "category": "Parenteral Anticoagulants - Indirect Thrombin Inhibitors",
            "note": "Useful alternative in heparin-induced thrombocytopenia."
        },
        {
            "name": "Bivalirudin",
            "category": "Parenteral Anticoagulants - Direct Thrombin Inhibitors",
            "note": "Direct thrombin inhibitor used during coronary interventions."
        },
        {
            "name": "Argatroban",
            "category": "Parenteral Anticoagulants - Direct Thrombin Inhibitors",
            "note": "Preferred in heparin-induced thrombocytopenia."
        },
        {
            "name": "Bishydroxycoumarin (Dicumarol)",
            "category": "Oral Anticoagulants - Vitamin K Antagonists",
            "note": "Prototype oral vitamin K antagonist."
        },
        {
            "name": "Warfarin sodium",
            "category": "Oral Anticoagulants - Vitamin K Antagonists",
            "note": "Most commonly used oral anticoagulant requiring INR monitoring."
        },
        {
            "name": "Acenocoumarol (Nicoumalone)",
            "category": "Oral Anticoagulants - Vitamin K Antagonists",
            "note": "Widely used oral anticoagulant in India."
        },
        {
            "name": "Ethyl biscoumacetate",
            "category": "Oral Anticoagulants - Vitamin K Antagonists",
            "note": "Older coumarin anticoagulant."
        },
        {
            "name": "Rivaroxaban",
            "category": "Oral Anticoagulants - Direct Factor Xa Inhibitors",
            "note": "Oral direct factor Xa inhibitor without need for INR monitoring."
        },
        {
            "name": "Apixaban",
            "category": "Oral Anticoagulants - Direct Factor Xa Inhibitors",
            "note": "Factor Xa inhibitor with lower bleeding risk."
        },
        {
            "name": "Dabigatran etexilate",
            "category": "Oral Anticoagulants - Oral Direct Thrombin Inhibitor",
            "note": "First oral direct thrombin inhibitor."
        },
        {
            "name": "Heparin",
            "category": "In Vitro Anticoagulants",
            "note": "Used in blood samples when coagulation must be prevented."
        },
        {
            "name": "Sodium edetate",
            "category": "In Vitro Anticoagulants",
            "note": "EDTA anticoagulant used for hematological samples."
        },
        {
            "name": "Sodium citrate",
            "category": "In Vitro Anticoagulants",
            "note": "Preferred anticoagulant for coagulation studies."
        },
        {
            "name": "Sodium oxalate",
            "category": "In Vitro Anticoagulants",
            "note": "Precipitates calcium and prevents clotting in vitro."
        }
    ]
},


{
    "id": "gen-1775196571443",
    "name": "Antiplatelet Drugs",
    "subject": "Pharmacology",
    "chapter": "Drugs Affecting Blood",
    "categories": [
        "Fibrinolytics (Thrombolytics)",
        "Antifibrinolytics (Antithrombolytics)",
        "Antiplatelet Drugs - Thromboxane Synthesis Inhibitor",
        "Antiplatelet Drugs - Platelet cAMP Enhancer",
        "Antiplatelet Drugs - P2Y12 Receptor Blockers",
        "Antiplatelet Drugs - GP IIb/IIIa Antagonists"
    ],
    "mnemonic": "Clot busters = Streptokinase-Alteplase-Tenecteplase; Clot savers = Tranexamic acid; Platelets = Aspirin-Clopidogrel-Abciximab",
    "items": [
        {
            "name": "Streptokinase",
            "category": "Fibrinolytics (Thrombolytics)",
            "note": "Non-fibrin-specific thrombolytic derived from streptococci."
        },
        {
            "name": "Urokinase",
            "category": "Fibrinolytics (Thrombolytics)",
            "note": "Directly converts plasminogen to plasmin."
        },
        {
            "name": "Alteplase (rt-PA)",
            "category": "Fibrinolytics (Thrombolytics)",
            "note": "Recombinant tissue plasminogen activator with fibrin selectivity."
        },
        {
            "name": "Reteplase",
            "category": "Fibrinolytics (Thrombolytics)",
            "note": "Longer-acting recombinant tissue plasminogen activator."
        },
        {
            "name": "Tenecteplase",
            "category": "Fibrinolytics (Thrombolytics)",
            "note": "Given as single bolus in acute myocardial infarction."
        },
        {
            "name": "Epsilon aminocaproic acid (EACA)",
            "category": "Antifibrinolytics (Antithrombolytics)",
            "note": "Inhibits plasminogen activation and reduces bleeding."
        },
        {
            "name": "Tranexamic acid",
            "category": "Antifibrinolytics (Antithrombolytics)",
            "note": "More potent antifibrinolytic commonly used in menorrhagia."
        },
        {
            "name": "Aspirin",
            "category": "Antiplatelet Drugs - Thromboxane Synthesis Inhibitor",
            "note": "Irreversibly inhibits platelet cyclooxygenase and TXA2 synthesis."
        },
        {
            "name": "Dipyridamole",
            "category": "Antiplatelet Drugs - Platelet cAMP Enhancer",
            "note": "Raises platelet cAMP by inhibiting phosphodiesterase."
        },
        {
            "name": "Ticlopidine",
            "category": "Antiplatelet Drugs - P2Y12 Receptor Blockers",
            "note": "Older ADP receptor blocker associated with neutropenia."
        },
        {
            "name": "Clopidogrel",
            "category": "Antiplatelet Drugs - P2Y12 Receptor Blockers",
            "note": "Most commonly used P2Y12 receptor blocker."
        },
        {
            "name": "Prasugrel",
            "category": "Antiplatelet Drugs - P2Y12 Receptor Blockers",
            "note": "More potent and faster acting than clopidogrel."
        },
        {
            "name": "Ticagrelor",
            "category": "Antiplatelet Drugs - P2Y12 Receptor Blockers",
            "note": "Reversible oral P2Y12 receptor blocker."
        },
        {
            "name": "Abciximab",
            "category": "Antiplatelet Drugs - GP IIb/IIIa Antagonists",
            "note": "Monoclonal antibody against platelet GP IIb/IIIa receptor."
        },
        {
            "name": "Eptifibatide",
            "category": "Antiplatelet Drugs - GP IIb/IIIa Antagonists",
            "note": "Synthetic peptide GP IIb/IIIa antagonist."
        },
        {
            "name": "Tirofiban",
            "category": "Antiplatelet Drugs - GP IIb/IIIa Antagonists",
            "note": "Non-peptide GP IIb/IIIa antagonist used intravenously."
        }
    ]
},


{
    "id": "gen-1775196753451",
    "name": "Hypolipidaemic Drugs",
    "subject": "Pharmacology",
    "chapter": "Drugs Affecting Blood",
    "categories": [
        "HMG-CoA Reductase Inhibitors (Statins)",
        "Lipoprotein Lipase Activators (PPAR-α Activators / Fibrates)",
        "Cholesterol Absorption Inhibitor",
        "Bile Acid Sequestrants",
        "Lipolysis and Triglyceride Synthesis Inhibitor"
    ],
    "mnemonic": "Statins lower LDL, Fibrates lower TG, Ezetimibe blocks absorption, Nicotinic acid raises HDL",
    "items": [
        {
            "name": "Lovastatin",
            "category": "HMG-CoA Reductase Inhibitors (Statins)",
            "note": "First statin introduced for lowering LDL cholesterol."
        },
        {
            "name": "Simvastatin",
            "category": "HMG-CoA Reductase Inhibitors (Statins)",
            "note": "Commonly used statin effective in reducing cardiovascular events."
        },
        {
            "name": "Pravastatin",
            "category": "HMG-CoA Reductase Inhibitors (Statins)",
            "note": "Less lipophilic statin with fewer drug interactions."
        },
        {
            "name": "Atorvastatin",
            "category": "HMG-CoA Reductase Inhibitors (Statins)",
            "note": "Widely used high-potency statin."
        },
        {
            "name": "Rosuvastatin",
            "category": "HMG-CoA Reductase Inhibitors (Statins)",
            "note": "Most potent statin for LDL reduction."
        },
        {
            "name": "Pitavastatin",
            "category": "HMG-CoA Reductase Inhibitors (Statins)",
            "note": "Newer statin with minimal effect on glucose metabolism."
        },
        {
            "name": "Gemfibrozil",
            "category": "Lipoprotein Lipase Activators (PPAR-α Activators / Fibrates)",
            "note": "Most effective fibrate for severe hypertriglyceridaemia."
        },
        {
            "name": "Bezafibrate",
            "category": "Lipoprotein Lipase Activators (PPAR-α Activators / Fibrates)",
            "note": "Fibrate that lowers triglycerides and modestly raises HDL."
        },
        {
            "name": "Fenofibrate",
            "category": "Lipoprotein Lipase Activators (PPAR-α Activators / Fibrates)",
            "note": "Preferred fibrate for use with statins."
        },
        {
            "name": "Ezetimibe",
            "category": "Cholesterol Absorption Inhibitor",
            "note": "Blocks intestinal cholesterol absorption by inhibiting NPC1L1."
        },
        {
            "name": "Cholestyramine",
            "category": "Bile Acid Sequestrants",
            "note": "Binds bile acids in intestine and lowers LDL cholesterol."
        },
        {
            "name": "Colestipol",
            "category": "Bile Acid Sequestrants",
            "note": "Bile acid sequestrant used in hypercholesterolaemia."
        },
        {
            "name": "Colesevelam",
            "category": "Bile Acid Sequestrants",
            "note": "Newer bile acid sequestrant better tolerated than older agents."
        },
        {
            "name": "Nicotinic acid",
            "category": "Lipolysis and Triglyceride Synthesis Inhibitor",
            "note": "Most effective drug for increasing HDL cholesterol."
        }
    ]
},

{
    "id": "gen-1775197011028",
    "name": "Drugs For Peptic Ulcer",
    "subject": "Pharmacology",
    "chapter": "GIT Drugs",
    "categories": [
        "Gastric Acid Secretion Inhibitors - H2-Antihistamines",
        "Gastric Acid Secretion Inhibitors - Proton Pump Inhibitors",
        "Gastric Acid Secretion Inhibitors - Anticholinergics",
        "Gastric Acid Secretion Inhibitors - Prostaglandin Analogue",
        "Gastric Acid Neutralizers (Antacids) - Systemic",
        "Gastric Acid Neutralizers (Antacids) - Nonsystemic",
        "Ulcer Protectives",
        "Anti-Helicobacter pylori Drugs"
    ],
    "mnemonic": "Ulcer therapy = H2 blockers + PPIs + Antacids + Sucralfate + H. pylori antibiotics",
    "items": [
        {
            "name": "Cimetidine",
            "category": "Gastric Acid Secretion Inhibitors - H2-Antihistamines",
            "note": "First H2 blocker; inhibits CYP450 and may cause gynecomastia."
        },
        {
            "name": "Ranitidine",
            "category": "Gastric Acid Secretion Inhibitors - H2-Antihistamines",
            "note": "More potent and longer acting than cimetidine."
        },
        {
            "name": "Famotidine",
            "category": "Gastric Acid Secretion Inhibitors - H2-Antihistamines",
            "note": "Most potent H2 blocker with minimal adverse effects."
        },
        {
            "name": "Roxatidine",
            "category": "Gastric Acid Secretion Inhibitors - H2-Antihistamines",
            "note": "Long-acting H2 receptor antagonist."
        },
        {
            "name": "Lafutidine",
            "category": "Gastric Acid Secretion Inhibitors - H2-Antihistamines",
            "note": "H2 blocker that may also enhance gastric mucosal defense."
        },
        {
            "name": "Omeprazole",
            "category": "Gastric Acid Secretion Inhibitors - Proton Pump Inhibitors",
            "note": "Prototype proton pump inhibitor that irreversibly blocks H+/K+-ATPase."
        },
        {
            "name": "Esomeprazole",
            "category": "Gastric Acid Secretion Inhibitors - Proton Pump Inhibitors",
            "note": "S-isomer of omeprazole with higher bioavailability."
        },
        {
            "name": "Pantoprazole",
            "category": "Gastric Acid Secretion Inhibitors - Proton Pump Inhibitors",
            "note": "Commonly used proton pump inhibitor with fewer drug interactions."
        },
        {
            "name": "Lansoprazole",
            "category": "Gastric Acid Secretion Inhibitors - Proton Pump Inhibitors",
            "note": "Rapidly acting proton pump inhibitor."
        },
        {
            "name": "Rabeprazole",
            "category": "Gastric Acid Secretion Inhibitors - Proton Pump Inhibitors",
            "note": "Produces faster suppression of gastric acid."
        },
        {
            "name": "Dexrabeprazole",
            "category": "Gastric Acid Secretion Inhibitors - Proton Pump Inhibitors",
            "note": "Active isomer of rabeprazole."
        },
        {
            "name": "Ilaprazole",
            "category": "Gastric Acid Secretion Inhibitors - Proton Pump Inhibitors",
            "note": "Long-acting proton pump inhibitor."
        },
        {
            "name": "Pirenzepine",
            "category": "Gastric Acid Secretion Inhibitors - Anticholinergics",
            "note": "Selective M1 blocker that reduces gastric acid secretion."
        },
        {
            "name": "Propantheline",
            "category": "Gastric Acid Secretion Inhibitors - Anticholinergics",
            "note": "Older anticholinergic now rarely used in peptic ulcer."
        },
        {
            "name": "Oxyphenonium",
            "category": "Gastric Acid Secretion Inhibitors - Anticholinergics",
            "note": "Anticholinergic drug that decreases gastric secretion."
        },
        {
            "name": "Misoprostol",
            "category": "Gastric Acid Secretion Inhibitors - Prostaglandin Analogue",
            "note": "Prevents NSAID-induced gastric ulcer."
        },
        {
            "name": "Sodium bicarbonate",
            "category": "Gastric Acid Neutralizers (Antacids) - Systemic",
            "note": "Rapidly acting systemic antacid that may cause alkalosis."
        },
        {
            "name": "Sodium citrate",
            "category": "Gastric Acid Neutralizers (Antacids) - Systemic",
            "note": "Systemic antacid sometimes used before anaesthesia."
        },
        {
            "name": "Magnesium hydroxide",
            "category": "Gastric Acid Neutralizers (Antacids) - Nonsystemic",
            "note": "Fast-acting antacid that may cause diarrhea."
        },
        {
            "name": "Magnesium trisilicate",
            "category": "Gastric Acid Neutralizers (Antacids) - Nonsystemic",
            "note": "Slow-acting nonsystemic antacid."
        },
        {
            "name": "Aluminium hydroxide",
            "category": "Gastric Acid Neutralizers (Antacids) - Nonsystemic",
            "note": "Antacid that may cause constipation."
        },
        {
            "name": "Magaldrate",
            "category": "Gastric Acid Neutralizers (Antacids) - Nonsystemic",
            "note": "Combination antacid containing magnesium and aluminium."
        },
        {
            "name": "Calcium carbonate",
            "category": "Gastric Acid Neutralizers (Antacids) - Nonsystemic",
            "note": "Potent antacid that may cause acid rebound."
        },
        {
            "name": "Sucralfate",
            "category": "Ulcer Protectives",
            "note": "Forms protective barrier over ulcer base."
        },
        {
            "name": "Colloidal bismuth subcitrate (CBS)",
            "category": "Ulcer Protectives",
            "note": "Protects ulcer and also has anti-H. pylori action."
        },
        {
            "name": "Amoxicillin",
            "category": "Anti-Helicobacter pylori Drugs",
            "note": "Common component of H. pylori eradication regimens."
        },
        {
            "name": "Clarithromycin",
            "category": "Anti-Helicobacter pylori Drugs",
            "note": "Macrolide antibiotic widely used in triple therapy."
        },
        {
            "name": "Metronidazole",
            "category": "Anti-Helicobacter pylori Drugs",
            "note": "Used in H. pylori regimens especially in penicillin allergy."
        },
        {
            "name": "Tinidazole",
            "category": "Anti-Helicobacter pylori Drugs",
            "note": "Longer-acting alternative to metronidazole."
        },
        {
            "name": "Tetracycline",
            "category": "Anti-Helicobacter pylori Drugs",
            "note": "Common component of bismuth-based quadruple therapy."
        },
        {
            "name": "Colloidal bismuth subcitrate (CBS)",
            "category": "Anti-Helicobacter pylori Drugs",
            "note": "Enhances eradication of H. pylori in quadruple therapy."
        }
    ]
},


{
    "id": "gen-1775197221846",
    "name": "Antiemetics",
    "subject": "Pharmacology",
    "chapter": "GIT Drugs",
    "categories": [
        "Anticholinergics",
        "Neuroleptics (D2 Blockers)",
        "H1 Antihistaminics",
        "Prokinetic Drugs",
        "5-HT3 Receptor Antagonists",
        "NK1 Receptor Antagonists",
        "Adjuvant Antiemetics"
    ],
    "mnemonic": "Motion sickness = Hyoscine-Promethazine; Vomiting = Metoclopramide-Ondansetron-Aprepitant",
    "items": [
        {
            "name": "Hyoscine",
            "category": "Anticholinergics",
            "note": "Most effective drug for prevention of motion sickness."
        },
        {
            "name": "Dicyclomine",
            "category": "Anticholinergics",
            "note": "Anticholinergic with mild antiemetic property."
        },
        {
            "name": "Chlorpromazine",
            "category": "Neuroleptics (D2 Blockers)",
            "note": "Potent antiemetic useful in severe vomiting."
        },
        {
            "name": "Triflupromazine",
            "category": "Neuroleptics (D2 Blockers)",
            "note": "Phenothiazine antiemetic acting by D2 receptor blockade."
        },
        {
            "name": "Prochlorperazine",
            "category": "Neuroleptics (D2 Blockers)",
            "note": "Commonly used antiemetic for vertigo and vomiting."
        },
        {
            "name": "Promethazine",
            "category": "H1 Antihistaminics",
            "note": "Useful in motion sickness and pregnancy-related nausea."
        },
        {
            "name": "Diphenhydramine",
            "category": "H1 Antihistaminics",
            "note": "Effective in vestibular nausea and motion sickness."
        },
        {
            "name": "Dimenhydrinate",
            "category": "H1 Antihistaminics",
            "note": "Widely used for motion sickness."
        },
        {
            "name": "Doxylamine",
            "category": "H1 Antihistaminics",
            "note": "Used with pyridoxine in morning sickness."
        },
        {
            "name": "Meclozine (Meclizine)",
            "category": "H1 Antihistaminics",
            "note": "Less sedating antihistaminic used in motion sickness."
        },
        {
            "name": "Metoclopramide",
            "category": "Prokinetic Drugs",
            "note": "Acts by D2 blockade and enhancing gastric emptying."
        },
        {
            "name": "Domperidone",
            "category": "Prokinetic Drugs",
            "note": "Peripheral D2 blocker causing less extrapyramidal toxicity."
        },
        {
            "name": "Cisapride",
            "category": "Prokinetic Drugs",
            "note": "5-HT4 agonist withdrawn due to arrhythmias."
        },
        {
            "name": "Mosapride",
            "category": "Prokinetic Drugs",
            "note": "5-HT4 agonist with prokinetic and antiemetic action."
        },
        {
            "name": "Itopride",
            "category": "Prokinetic Drugs",
            "note": "Combines D2 blockade with acetylcholinesterase inhibition."
        },
        {
            "name": "Levosulpiride",
            "category": "Prokinetic Drugs",
            "note": "D2 blocker used in dyspepsia and vomiting."
        },
        {
            "name": "Cinitapride",
            "category": "Prokinetic Drugs",
            "note": "Prokinetic drug with 5-HT4 agonist action."
        },
        {
            "name": "Ondansetron",
            "category": "5-HT3 Receptor Antagonists",
            "note": "Drug of choice for chemotherapy-induced vomiting."
        },
        {
            "name": "Granisetron",
            "category": "5-HT3 Receptor Antagonists",
            "note": "Potent and long-acting 5-HT3 blocker."
        },
        {
            "name": "Palonosetron",
            "category": "5-HT3 Receptor Antagonists",
            "note": "Longest-acting 5-HT3 antagonist."
        },
        {
            "name": "Ramosetron",
            "category": "5-HT3 Receptor Antagonists",
            "note": "Highly potent 5-HT3 antagonist."
        },
        {
            "name": "Aprepitant",
            "category": "NK1 Receptor Antagonists",
            "note": "Blocks substance P receptors and prevents delayed emesis."
        },
        {
            "name": "Fosaprepitant",
            "category": "NK1 Receptor Antagonists",
            "note": "Intravenous prodrug of aprepitant."
        },
        {
            "name": "Dexamethasone",
            "category": "Adjuvant Antiemetics",
            "note": "Enhances efficacy of antiemetic regimens in chemotherapy."
        },
        {
            "name": "Benzodiazepines",
            "category": "Adjuvant Antiemetics",
            "note": "Useful in anticipatory nausea and vomiting."
        },
        {
            "name": "Dronabinol",
            "category": "Adjuvant Antiemetics",
            "note": "Cannabinoid used in refractory chemotherapy-induced vomiting."
        }
    ]
},
    
    {
    "id": "gen-1775197545935",
    "name": "Laxatives",
    "subject": "Pharmacology",
    "chapter": "GIT Drugs",
    "categories": [
        "Bulk-Forming Agents",
        "Stool Softeners",
        "Osmotic Purgatives",
        "Stimulant Purgatives - Diphenylmethanes",
        "Stimulant Purgatives - Anthraquinones (Emodins)",
        "5-HT4 Agonist",
        "Prostaglandin Analogue"
    ],
    "mnemonic": "Bulk = Bran-Psyllium; Osmotic = Magnesium-Lactulose; Stimulant = Bisacodyl-Senna; Newer = Prucalopride-Lubiprostone",
    "items": [
        {
            "name": "Dietary fibre (bran)",
            "category": "Bulk-Forming Agents",
            "note": "Safest and most physiological laxative for chronic constipation."
        },
        {
            "name": "Psyllium (Plantago)",
            "category": "Bulk-Forming Agents",
            "note": "Commonly used bulk-forming laxative that absorbs water."
        },
        {
            "name": "Ispaghula",
            "category": "Bulk-Forming Agents",
            "note": "Natural fibre laxative useful in irritable bowel syndrome."
        },
        {
            "name": "Methylcellulose",
            "category": "Bulk-Forming Agents",
            "note": "Synthetic bulk-forming laxative."
        },
        {
            "name": "Docusates (DOSS)",
            "category": "Stool Softeners",
            "note": "Acts as stool softener by increasing water penetration."
        },
        {
            "name": "Liquid paraffin",
            "category": "Stool Softeners",
            "note": "Lubricant laxative that softens stool."
        },
        {
            "name": "Magnesium sulfate",
            "category": "Osmotic Purgatives",
            "note": "Saline purgative causing rapid bowel evacuation."
        },
        {
            "name": "Magnesium hydroxide",
            "category": "Osmotic Purgatives",
            "note": "Milk of magnesia acts as mild osmotic laxative."
        },
        {
            "name": "Sodium sulfate",
            "category": "Osmotic Purgatives",
            "note": "Saline purgative used for bowel preparation."
        },
        {
            "name": "Sodium phosphate",
            "category": "Osmotic Purgatives",
            "note": "Rapidly acting osmotic purgative."
        },
        {
            "name": "Sodium potassium tartrate",
            "category": "Osmotic Purgatives",
            "note": "Saline purgative formerly known as Rochelle salt."
        },
        {
            "name": "Lactulose",
            "category": "Osmotic Purgatives",
            "note": "Preferred osmotic laxative in hepatic encephalopathy."
        },
        {
            "name": "Lactitol",
            "category": "Osmotic Purgatives",
            "note": "Alternative to lactulose with better palatability."
        },
        {
            "name": "Bisacodyl",
            "category": "Stimulant Purgatives - Diphenylmethanes",
            "note": "Commonly used stimulant laxative for bowel preparation."
        },
        {
            "name": "Sodium picosulfate",
            "category": "Stimulant Purgatives - Diphenylmethanes",
            "note": "Stimulant purgative often combined with magnesium citrate."
        },
        {
            "name": "Senna",
            "category": "Stimulant Purgatives - Anthraquinones (Emodins)",
            "note": "Most commonly used herbal stimulant laxative."
        },
        {
            "name": "Cascara sagrada",
            "category": "Stimulant Purgatives - Anthraquinones (Emodins)",
            "note": "Anthraquinone laxative causing colonic stimulation."
        },
        {
            "name": "Prucalopride",
            "category": "5-HT4 Agonist",
            "note": "Selective 5-HT4 agonist used in chronic constipation."
        },
        {
            "name": "Lubiprostone",
            "category": "Prostaglandin Analogue",
            "note": "Activates chloride channels and increases intestinal fluid secretion."
        }
    ]
},
    
    
    
    
    {
    "id": "gen-1775197784397",
    "name": "Drugs For Diarrhoea",
    "subject": "Pharmacology",
    "chapter": "GIT Drugs",
    "categories": [
        "Antimicrobial Drugs",
        "Probiotics",
        "Nonspecific Antidiarrhoeal Drugs - Antimotility Drugs",
        "Nonspecific Antidiarrhoeal Drugs - Absorbents / Adsorbents",
        "Nonspecific Antidiarrhoeal Drugs - Antisecretory Drugs",
        "Nonspecific Antidiarrhoeal Drugs - Glucocorticoids",
        "Drugs for Inflammatory Bowel Disease - 5-ASA Compounds",
        "Drugs for Inflammatory Bowel Disease - Immunosuppressants",
        "Drugs for Inflammatory Bowel Disease - TNF-α Inhibitor"
    ],
    "mnemonic": "Diarrhoea = Antibiotics + Probiotics + Loperamide + Racecadotril; IBD = 5-ASA-Immunosuppressants-Infliximab",
    "items": [
        {
            "name": "Norfloxacin",
            "category": "Antimicrobial Drugs",
            "note": "Fluoroquinolone used in infective diarrhoea."
        },
        {
            "name": "Ciprofloxacin",
            "category": "Antimicrobial Drugs",
            "note": "Most commonly used antibiotic in traveller's diarrhoea."
        },
        {
            "name": "Rifaximin",
            "category": "Antimicrobial Drugs",
            "note": "Nonabsorbable antibiotic useful in traveller's diarrhoea."
        },
        {
            "name": "Cotrimoxazole",
            "category": "Antimicrobial Drugs",
            "note": "Used in certain bacterial and protozoal diarrhoeas."
        },
        {
            "name": "Tetracycline",
            "category": "Antimicrobial Drugs",
            "note": "Useful in cholera."
        },
        {
            "name": "Erythromycin",
            "category": "Antimicrobial Drugs",
            "note": "Drug of choice for Campylobacter diarrhoea."
        },
        {
            "name": "Metronidazole",
            "category": "Antimicrobial Drugs",
            "note": "Effective in amoebic diarrhoea and C. difficile infection."
        },
        {
            "name": "Lactobacillus species",
            "category": "Probiotics",
            "note": "Restores normal intestinal flora."
        },
        {
            "name": "Bifidobacterium bifidum",
            "category": "Probiotics",
            "note": "Probiotic used in antibiotic-associated diarrhoea."
        },
        {
            "name": "Streptococcus faecalis",
            "category": "Probiotics",
            "note": "Used as probiotic to improve intestinal flora."
        },
        {
            "name": "Enterococcus species",
            "category": "Probiotics",
            "note": "Common component of probiotic preparations."
        },
        {
            "name": "Bacillus clausii",
            "category": "Probiotics",
            "note": "Spore-forming probiotic resistant to many antibiotics."
        },
        {
            "name": "Saccharomyces boulardii",
            "category": "Probiotics",
            "note": "Useful in antibiotic-associated and recurrent diarrhoea."
        },
        {
            "name": "Diphenoxylate",
            "category": "Nonspecific Antidiarrhoeal Drugs - Antimotility Drugs",
            "note": "Opioid analogue that decreases bowel motility."
        },
        {
            "name": "Loperamide",
            "category": "Nonspecific Antidiarrhoeal Drugs - Antimotility Drugs",
            "note": "Preferred antimotility drug because it does not cross BBB."
        },
        {
            "name": "Codeine",
            "category": "Nonspecific Antidiarrhoeal Drugs - Antimotility Drugs",
            "note": "Reduces diarrhoea by slowing intestinal transit."
        },
        {
            "name": "Ispaghula",
            "category": "Nonspecific Antidiarrhoeal Drugs - Absorbents / Adsorbents",
            "note": "Absorbs water and increases stool consistency."
        },
        {
            "name": "Methylcellulose",
            "category": "Nonspecific Antidiarrhoeal Drugs - Absorbents / Adsorbents",
            "note": "Bulk-forming agent useful in chronic diarrhoea."
        },
        {
            "name": "Racecadotril",
            "category": "Nonspecific Antidiarrhoeal Drugs - Antisecretory Drugs",
            "note": "Antisecretory drug that inhibits enkephalinase."
        },
        {
            "name": "Bismuth subsalicylate",
            "category": "Nonspecific Antidiarrhoeal Drugs - Antisecretory Drugs",
            "note": "Useful in traveller's diarrhoea and mild infective diarrhoea."
        },
        {
            "name": "Anticholinergics",
            "category": "Nonspecific Antidiarrhoeal Drugs - Antisecretory Drugs",
            "note": "Reduce intestinal motility and secretion."
        },
        {
            "name": "Octreotide",
            "category": "Nonspecific Antidiarrhoeal Drugs - Antisecretory Drugs",
            "note": "Useful in severe secretory diarrhoea."
        },
        {
            "name": "Prednisolone",
            "category": "Nonspecific Antidiarrhoeal Drugs - Glucocorticoids",
            "note": "Used in inflammatory bowel disease with diarrhoea."
        },
        {
            "name": "Hydrocortisone (enema)",
            "category": "Nonspecific Antidiarrhoeal Drugs - Glucocorticoids",
            "note": "Useful in ulcerative colitis affecting rectum and colon."
        },
        {
            "name": "Sulfasalazine",
            "category": "Drugs for Inflammatory Bowel Disease - 5-ASA Compounds",
            "note": "Prototype 5-ASA compound used in ulcerative colitis."
        },
        {
            "name": "Mesalazine",
            "category": "Drugs for Inflammatory Bowel Disease - 5-ASA Compounds",
            "note": "Pure 5-ASA preparation with fewer adverse effects."
        },
        {
            "name": "Balsalazide",
            "category": "Drugs for Inflammatory Bowel Disease - 5-ASA Compounds",
            "note": "Colon-specific prodrug of mesalazine."
        },
        {
            "name": "Olsalazine",
            "category": "Drugs for Inflammatory Bowel Disease - 5-ASA Compounds",
            "note": "Two molecules of 5-ASA linked together."
        },
        {
            "name": "Azathioprine",
            "category": "Drugs for Inflammatory Bowel Disease - Immunosuppressants",
            "note": "Used as steroid-sparing agent in inflammatory bowel disease."
        },
        {
            "name": "Methotrexate",
            "category": "Drugs for Inflammatory Bowel Disease - Immunosuppressants",
            "note": "Useful particularly in Crohn disease."
        },
        {
            "name": "Cyclosporine",
            "category": "Drugs for Inflammatory Bowel Disease - Immunosuppressants",
            "note": "Used in severe refractory ulcerative colitis."
        },
        {
            "name": "Infliximab",
            "category": "Drugs for Inflammatory Bowel Disease - TNF-α Inhibitor",
            "note": "Monoclonal antibody against TNF-α used in refractory Crohn disease."
        }
    ]
},
    
   
   
   
   {
    "id": "gen-1775929275185",
    "name": "Antibacterial Drugs ",
    "subject": "Pharmacology",
    "chapter": "Antibacterial Drugs",
    "categories": [
        "Inhibit Cell Wall Synthesis",
        "Inhibit Protein Synthesis",
        "Interfere with DNA Function",
        "Inhibit DNA Gyrase",
        "Interfere with Intermediary Metabolism",
        "Cause Leakage from Cell Membranes"
    ],
    "mnemonic": "Wall-Protein-DNA-Metabolism-Membrane: Penicillin-Tetracycline-Rifampin-Ciprofloxacin-Sulfonamide-Polymyxin",
    "items": [
        {
            "name": "Penicillins",
            "category": "Inhibit Cell Wall Synthesis",
            "note": "β-lactam antibiotics that inhibit transpeptidation of bacterial cell wall."
        },
        {
            "name": "Cephalosporins",
            "category": "Inhibit Cell Wall Synthesis",
            "note": "β-lactam antibiotics resistant to many β-lactamases."
        },
        {
            "name": "Carbapenems",
            "category": "Inhibit Cell Wall Synthesis",
            "note": "Broad-spectrum β-lactams reserved for resistant infections."
        },
        {
            "name": "Monobactams",
            "category": "Inhibit Cell Wall Synthesis",
            "note": "Active mainly against gram-negative aerobic bacilli."
        },
        {
            "name": "Vancomycin",
            "category": "Inhibit Cell Wall Synthesis",
            "note": "Glycopeptide active against resistant gram-positive organisms."
        },
        {
            "name": "Cycloserine",
            "category": "Inhibit Cell Wall Synthesis",
            "note": "Second-line antitubercular drug that inhibits peptidoglycan synthesis."
        },
        {
            "name": "Bacitracin",
            "category": "Inhibit Cell Wall Synthesis",
            "note": "Topical antibiotic that interferes with cell wall formation."
        },
        {
            "name": "Tetracyclines",
            "category": "Inhibit Protein Synthesis",
            "note": "Bind 30S ribosomal subunit and block attachment of tRNA."
        },
        {
            "name": "Chloramphenicol",
            "category": "Inhibit Protein Synthesis",
            "note": "Inhibits peptidyl transferase on 50S ribosome."
        },
        {
            "name": "Erythromycin and other macrolides",
            "category": "Inhibit Protein Synthesis",
            "note": "Bind 50S ribosome and inhibit translocation."
        },
        {
            "name": "Clindamycin",
            "category": "Inhibit Protein Synthesis",
            "note": "Useful against anaerobes and causes pseudomembranous colitis."
        },
        {
            "name": "Linezolid",
            "category": "Inhibit Protein Synthesis",
            "note": "Active against MRSA and VRE by inhibiting initiation complex formation."
        },
        {
            "name": "Streptomycin",
            "category": "Inhibit Protein Synthesis",
            "note": "Aminoglycoside that causes misreading of mRNA."
        },
        {
            "name": "Gentamicin",
            "category": "Inhibit Protein Synthesis",
            "note": "Aminoglycoside commonly used in serious gram-negative infections."
        },
        {
            "name": "Others",
            "category": "Inhibit Protein Synthesis",
            "note": "Other aminoglycosides also cause misreading of mRNA and affect permeability."
        },
        {
            "name": "Rifampin",
            "category": "Interfere with DNA Function",
            "note": "Inhibits DNA-dependent RNA polymerase."
        },
        {
            "name": "Ciprofloxacin and other fluoroquinolones",
            "category": "Inhibit DNA Gyrase",
            "note": "Block bacterial DNA gyrase and topoisomerase IV."
        },
        {
            "name": "Sulfonamides",
            "category": "Interfere with Intermediary Metabolism",
            "note": "Competitive inhibitors of dihydropteroate synthase."
        },
        {
            "name": "Sulfones",
            "category": "Interfere with Intermediary Metabolism",
            "note": "Inhibit folate synthesis and are used in leprosy."
        },
        {
            "name": "Trimethoprim",
            "category": "Interfere with Intermediary Metabolism",
            "note": "Inhibits bacterial dihydrofolate reductase."
        },
        {
            "name": "Pyrimethamine",
            "category": "Interfere with Intermediary Metabolism",
            "note": "Selective inhibitor of protozoal dihydrofolate reductase."
        },
        {
            "name": "Para-aminosalicylic acid",
            "category": "Interfere with Intermediary Metabolism",
            "note": "Second-line antitubercular interfering with folate metabolism."
        },
        {
            "name": "Metronidazole",
            "category": "Interfere with Intermediary Metabolism",
            "note": "Produces free radicals that damage DNA in anaerobes."
        },
        {
            "name": "Polymyxin",
            "category": "Cause Leakage from Cell Membranes",
            "note": "Disrupts bacterial cell membrane of gram-negative organisms."
        },
        {
            "name": "Colistin",
            "category": "Cause Leakage from Cell Membranes",
            "note": "Used for multidrug-resistant gram-negative infections."
        },
        {
            "name": "Bacitracin",
            "category": "Cause Leakage from Cell Membranes",
            "note": "Also damages bacterial cell membrane when used topically."
        },
        {
            "name": "Amphotericin B",
            "category": "Cause Leakage from Cell Membranes",
            "note": "Antifungal drug that forms pores in fungal cell membrane."
        }
    ]
}, 
    
    {
    "id": "gen-1775929484412",
    "name": "Quinolone Antimicrobials",
    "subject": "Pharmacology",
    "chapter": "Antibacterial Drugs",
    "categories": [
        "Nonfluorinated Quinolone",
        "Fluoroquinolones - First Generation",
        "Fluoroquinolones - Second Generation"
    ],
    "mnemonic": "Nalidixic first, then Nor-Cipro-Oflox, finally Levo-Moxi-Gemi",
    "items": [
        {
            "name": "Nalidixic acid",
            "category": "Nonfluorinated Quinolone",
            "note": "First quinolone mainly active against gram-negative urinary pathogens."
        },
        {
            "name": "Norfloxacin",
            "category": "Fluoroquinolones - First Generation",
            "note": "Used mainly in urinary and gastrointestinal infections."
        },
        {
            "name": "Ciprofloxacin",
            "category": "Fluoroquinolones - First Generation",
            "note": "Most potent fluoroquinolone against gram-negative bacilli including Pseudomonas."
        },
        {
            "name": "Ofloxacin",
            "category": "Fluoroquinolones - First Generation",
            "note": "Broad-spectrum fluoroquinolone also used in chlamydial infections."
        },
        {
            "name": "Pefloxacin",
            "category": "Fluoroquinolones - First Generation",
            "note": "Fluoroquinolone with good tissue penetration."
        },
        {
            "name": "Levofloxacin",
            "category": "Fluoroquinolones - Second Generation",
            "note": "L-isomer of ofloxacin with better activity against gram-positive organisms."
        },
        {
            "name": "Moxifloxacin",
            "category": "Fluoroquinolones - Second Generation",
            "note": "Most active fluoroquinolone against pneumococci and anaerobes."
        },
        {
            "name": "Gemifloxacin",
            "category": "Fluoroquinolones - Second Generation",
            "note": "Highly active against respiratory pathogens."
        },
        {
            "name": "Prulifloxacin",
            "category": "Fluoroquinolones - Second Generation",
            "note": "Prodrug fluoroquinolone used in respiratory and urinary infections."
        },
        {
            "name": "Lomefloxacin",
            "category": "Fluoroquinolones - Second Generation",
            "note": "Fluoroquinolone associated with photosensitivity."
        },
        {
            "name": "Sparfloxacin",
            "category": "Fluoroquinolones - Second Generation",
            "note": "Long-acting fluoroquinolone with risk of QT prolongation."
        }
    ]
},
{
    "id": "gen-1775929455160",
    "name": "Sulfonamides",
    "subject": "Pharmacology",
    "chapter": "Antibacterial Drugs",
    "categories": [
        "Short-Acting",
        "Intermediate-Acting",
        "Long-Acting",
        "Special-Purpose Sulfonamides"
    ],
    "mnemonic": "Short = Sulfadiazine; Intermediate = Sulfamethoxazole; Long = Sulfadoxine; Special = Sulfacetamide-Sulfasalazine-Silver sulfadiazine",
    "items": [
        {
            "name": "Sulfadiazine",
            "category": "Short-Acting",
            "note": "Used with pyrimethamine in toxoplasmosis."
        },
        {
            "name": "Sulfamethoxazole",
            "category": "Intermediate-Acting",
            "note": "Commonly combined with trimethoprim as cotrimoxazole."
        },
        {
            "name": "Sulfadoxine",
            "category": "Long-Acting",
            "note": "Used with pyrimethamine in malaria."
        },
        {
            "name": "Sulfamethopyrazine",
            "category": "Long-Acting",
            "note": "Long-acting sulfonamide with prolonged plasma half-life."
        },
        {
            "name": "Sulfacetamide sodium",
            "category": "Special-Purpose Sulfonamides",
            "note": "Topical sulfonamide used in ocular infections."
        },
        {
            "name": "Sulfasalazine",
            "category": "Special-Purpose Sulfonamides",
            "note": "Used in ulcerative colitis and rheumatoid arthritis."
        },
        {
            "name": "Silver sulfadiazine",
            "category": "Special-Purpose Sulfonamides",
            "note": "Topical drug of choice for prevention of burn wound infection."
        },
        {
            "name": "Mafenide",
            "category": "Special-Purpose Sulfonamides",
            "note": "Topical sulfonamide with good penetration into burn eschar."
        }
    ]
},
    
    
    
    {
    "id": "gen-1775929656600",
    "name": "Penicillins",
    "subject": "Pharmacology",
    "chapter": "Antibacterial Drugs",
    "categories": [
        "Natural Penicillins",
        "Acid-Resistant Alternative to Penicillin G",
        "Semisynthetic Penicillins - Penicillinase-Resistant Penicillins",
        "Semisynthetic Penicillins - Extended-Spectrum Penicillins - Aminopenicillins",
        "Semisynthetic Penicillins - Extended-Spectrum Penicillins - Carboxypenicillins",
        "Semisynthetic Penicillins - Extended-Spectrum Penicillins - Ureidopenicillins",
        "β-Lactamase Inhibitors"
    ],
    "mnemonic": "Natural = Penicillin G/V; Resistant = Methicillin-Cloxacillin; Broad = Ampicillin-Amoxicillin-Piperacillin; Protectors = Clavulanate-Sulbactam-Tazobactam",
    "items": [
        {
            "name": "Benzyl penicillin (Penicillin G)",
            "category": "Natural Penicillins",
            "note": "Drug of choice for syphilis and many streptococcal infections."
        },
        {
            "name": "Phenoxymethyl penicillin (Penicillin V)",
            "category": "Acid-Resistant Alternative to Penicillin G",
            "note": "Orally active acid-resistant penicillin."
        },
        {
            "name": "Methicillin",
            "category": "Semisynthetic Penicillins - Penicillinase-Resistant Penicillins",
            "note": "Prototype penicillinase-resistant penicillin; no longer used due to nephrotoxicity."
        },
        {
            "name": "Cloxacillin",
            "category": "Semisynthetic Penicillins - Penicillinase-Resistant Penicillins",
            "note": "Effective against penicillinase-producing staphylococci."
        },
        {
            "name": "Dicloxacillin",
            "category": "Semisynthetic Penicillins - Penicillinase-Resistant Penicillins",
            "note": "Orally active penicillinase-resistant penicillin."
        },
        {
            "name": "Ampicillin",
            "category": "Semisynthetic Penicillins - Extended-Spectrum Penicillins - Aminopenicillins",
            "note": "Broad-spectrum penicillin active against some gram-negative bacilli."
        },
        {
            "name": "Bacampicillin",
            "category": "Semisynthetic Penicillins - Extended-Spectrum Penicillins - Aminopenicillins",
            "note": "Oral prodrug of ampicillin."
        },
        {
            "name": "Amoxicillin",
            "category": "Semisynthetic Penicillins - Extended-Spectrum Penicillins - Aminopenicillins",
            "note": "Most commonly used aminopenicillin because of better oral absorption."
        },
        {
            "name": "Carbenicillin",
            "category": "Semisynthetic Penicillins - Extended-Spectrum Penicillins - Carboxypenicillins",
            "note": "Active against Pseudomonas aeruginosa."
        },
        {
            "name": "Piperacillin",
            "category": "Semisynthetic Penicillins - Extended-Spectrum Penicillins - Ureidopenicillins",
            "note": "Most active penicillin against Pseudomonas."
        },
        {
            "name": "Mezlocillin",
            "category": "Semisynthetic Penicillins - Extended-Spectrum Penicillins - Ureidopenicillins",
            "note": "Broad-spectrum ureidopenicillin."
        },
        {
            "name": "Clavulanic acid",
            "category": "β-Lactamase Inhibitors",
            "note": "Irreversibly inhibits many β-lactamases."
        },
        {
            "name": "Sulbactam",
            "category": "β-Lactamase Inhibitors",
            "note": "Used with ampicillin to extend antibacterial spectrum."
        },
        {
            "name": "Tazobactam",
            "category": "β-Lactamase Inhibitors",
            "note": "Commonly combined with piperacillin."
        }
    ]
},
    
 {
    "id": "gen-1775929788953",
    "name": "Cephalosporins",
    "subject": "Pharmacology",
    "chapter": "Antibacterial Drugs",
    "categories": [
        "First-Generation Cephalosporins - Oral",
        "First-Generation Cephalosporins - Parenteral",
        "Second-Generation Cephalosporins - Oral",
        "Second-Generation Cephalosporins - Parenteral",
        "Third-Generation Cephalosporins - Oral",
        "Third-Generation Cephalosporins - Parenteral",
        "Fourth-Generation Cephalosporins - Parenteral"
    ],
    "mnemonic": "1st = Cephalexin-Cefazolin; 2nd = Cefaclor-Cefuroxime; 3rd = Cefixime-Ceftriaxone-Ceftazidime; 4th = Cefepime",
    "items": [
        {
            "name": "Cephalexin",
            "category": "First-Generation Cephalosporins - Oral",
            "note": "Most commonly used oral first-generation cephalosporin."
        },
        {
            "name": "Cefadroxil",
            "category": "First-Generation Cephalosporins - Oral",
            "note": "Longer-acting oral first-generation cephalosporin."
        },
        {
            "name": "Cefazolin",
            "category": "First-Generation Cephalosporins - Parenteral",
            "note": "Preferred cephalosporin for surgical prophylaxis."
        },
        {
            "name": "Cefaclor",
            "category": "Second-Generation Cephalosporins - Oral",
            "note": "Oral second-generation cephalosporin active against H. influenzae."
        },
        {
            "name": "Cefuroxime axetil",
            "category": "Second-Generation Cephalosporins - Oral",
            "note": "Oral prodrug of cefuroxime."
        },
        {
            "name": "Cefprozil",
            "category": "Second-Generation Cephalosporins - Oral",
            "note": "Second-generation oral cephalosporin used in respiratory infections."
        },
        {
            "name": "Cefuroxime",
            "category": "Second-Generation Cephalosporins - Parenteral",
            "note": "Parenteral second-generation cephalosporin with broader gram-negative activity."
        },
        {
            "name": "Cefoxitin",
            "category": "Second-Generation Cephalosporins - Parenteral",
            "note": "Active against anaerobes including Bacteroides."
        },
        {
            "name": "Cefixime",
            "category": "Third-Generation Cephalosporins - Oral",
            "note": "Widely used oral third-generation cephalosporin."
        },
        {
            "name": "Cefpodoxime proxetil",
            "category": "Third-Generation Cephalosporins - Oral",
            "note": "Oral prodrug with broad-spectrum activity."
        },
        {
            "name": "Cefdinir",
            "category": "Third-Generation Cephalosporins - Oral",
            "note": "Third-generation oral cephalosporin used in respiratory infections."
        },
        {
            "name": "Ceftibuten",
            "category": "Third-Generation Cephalosporins - Oral",
            "note": "Oral cephalosporin active against gram-negative organisms."
        },
        {
            "name": "Ceftamet pivoxil",
            "category": "Third-Generation Cephalosporins - Oral",
            "note": "Oral third-generation cephalosporin prodrug."
        },
        {
            "name": "Cefotaxime",
            "category": "Third-Generation Cephalosporins - Parenteral",
            "note": "Third-generation cephalosporin useful in severe infections."
        },
        {
            "name": "Ceftriaxone",
            "category": "Third-Generation Cephalosporins - Parenteral",
            "note": "Long-acting cephalosporin commonly used in meningitis and gonorrhoea."
        },
        {
            "name": "Ceftizoxime",
            "category": "Third-Generation Cephalosporins - Parenteral",
            "note": "Parenteral third-generation cephalosporin with broad gram-negative coverage."
        },
        {
            "name": "Ceftazidime",
            "category": "Third-Generation Cephalosporins - Parenteral",
            "note": "Third-generation cephalosporin active against Pseudomonas."
        },
        {
            "name": "Cefoperazone",
            "category": "Third-Generation Cephalosporins - Parenteral",
            "note": "Parenteral cephalosporin with antipseudomonal activity."
        },
        {
            "name": "Cefepime",
            "category": "Fourth-Generation Cephalosporins - Parenteral",
            "note": "Fourth-generation cephalosporin active against both gram-positive and gram-negative organisms."
        },
        {
            "name": "Cefpirome",
            "category": "Fourth-Generation Cephalosporins - Parenteral",
            "note": "Broad-spectrum fourth-generation cephalosporin."
        }
    ]
},   
    
    
  {
    "id": "gen-1775929970934",
    "name": "Antitubercular Drugs",
    "subject": "Pharmacology",
    "chapter": "Antibacterial Drugs",
    "categories": [
        "First-Line Drugs",
        "Fluoroquinolones Used in Tuberculosis",
        "Second-Line Drugs - Other Oral Drugs",
        "Second-Line Drugs - Injectable Drugs"
    ],
    "mnemonic": "RIPE = Rifampin-Isoniazid-Pyrazinamide-Ethambutol; MDR-TB = Levofloxacin-Cycloserine-Amikacin",
    "items": [
        {
            "name": "Isoniazid",
            "category": "First-Line Drugs",
            "note": "Most potent antitubercular drug against actively multiplying bacilli."
        },
        {
            "name": "Rifampin",
            "category": "First-Line Drugs",
            "note": "Inhibits DNA-dependent RNA polymerase and colors body fluids orange."
        },
        {
            "name": "Pyrazinamide",
            "category": "First-Line Drugs",
            "note": "Most effective against intracellular tubercle bacilli in acidic environment."
        },
        {
            "name": "Ethambutol",
            "category": "First-Line Drugs",
            "note": "May cause optic neuritis with red-green color blindness."
        },
        {
            "name": "Streptomycin",
            "category": "First-Line Drugs",
            "note": "Aminoglycoside used mainly in severe tuberculosis."
        },
        {
            "name": "Ofloxacin",
            "category": "Fluoroquinolones Used in Tuberculosis",
            "note": "Older fluoroquinolone used in multidrug-resistant tuberculosis."
        },
        {
            "name": "Levofloxacin",
            "category": "Fluoroquinolones Used in Tuberculosis",
            "note": "Commonly used fluoroquinolone in resistant tuberculosis."
        },
        {
            "name": "Moxifloxacin",
            "category": "Fluoroquinolones Used in Tuberculosis",
            "note": "Most active fluoroquinolone against Mycobacterium tuberculosis."
        },
        {
            "name": "Ciprofloxacin",
            "category": "Fluoroquinolones Used in Tuberculosis",
            "note": "Less active than levofloxacin and moxifloxacin against tuberculosis."
        },
        {
            "name": "Ethionamide",
            "category": "Second-Line Drugs - Other Oral Drugs",
            "note": "Structural analogue of isoniazid used in resistant tuberculosis."
        },
        {
            "name": "Prothionamide",
            "category": "Second-Line Drugs - Other Oral Drugs",
            "note": "Closely related to ethionamide with similar action."
        },
        {
            "name": "Cycloserine",
            "category": "Second-Line Drugs - Other Oral Drugs",
            "note": "May cause serious neuropsychiatric adverse effects."
        },
        {
            "name": "Terizidone",
            "category": "Second-Line Drugs - Other Oral Drugs",
            "note": "Derivative of cycloserine used in resistant tuberculosis."
        },
        {
            "name": "Para-aminosalicylic acid (PAS)",
            "category": "Second-Line Drugs - Other Oral Drugs",
            "note": "Interferes with folate metabolism in Mycobacterium tuberculosis."
        },
        {
            "name": "Rifabutin",
            "category": "Second-Line Drugs - Other Oral Drugs",
            "note": "Alternative rifamycin preferred in HIV patients."
        },
        {
            "name": "Thiacetazone",
            "category": "Second-Line Drugs - Other Oral Drugs",
            "note": "Rarely used because of severe toxicity."
        },
        {
            "name": "Kanamycin",
            "category": "Second-Line Drugs - Injectable Drugs",
            "note": "Injectable aminoglycoside used in multidrug-resistant tuberculosis."
        },
        {
            "name": "Amikacin",
            "category": "Second-Line Drugs - Injectable Drugs",
            "note": "Preferred injectable aminoglycoside in resistant tuberculosis."
        },
        {
            "name": "Capreomycin",
            "category": "Second-Line Drugs - Injectable Drugs",
            "note": "Peptide antibiotic used in multidrug-resistant tuberculosis."
        }
    ]
},
  
  {
    "id": "gen-1775930115072",
    "name": "Antitubercular Drugs Alternate Classification ",
    "subject": "Pharmacology",
    "chapter": "Antibacterial Drugs",
    "categories": [
        "Group I – First-Line Oral Drugs",
        "Group II – Injectable Drugs",
        "Group III – Fluoroquinolones",
        "Group IV – Second-Line Oral Drugs",
        "Group V – Drugs with Unclear Efficacy"
    ],
    "mnemonic": "I = HRZE, II = SKAC, III = Oflox-Levo-Moxi-Cipro, IV = EPCPT, V = TCLL",
    "items": [
        {
            "name": "Isoniazid",
            "category": "Group I – First-Line Oral Drugs",
            "note": "Most potent drug against actively multiplying tubercle bacilli."
        },
        {
            "name": "Rifampin",
            "category": "Group I – First-Line Oral Drugs",
            "note": "Bactericidal drug that inhibits RNA polymerase."
        },
        {
            "name": "Pyrazinamide",
            "category": "Group I – First-Line Oral Drugs",
            "note": "Most active against intracellular bacilli in acidic medium."
        },
        {
            "name": "Ethambutol",
            "category": "Group I – First-Line Oral Drugs",
            "note": "Can cause optic neuritis and red-green color blindness."
        },
        {
            "name": "Streptomycin",
            "category": "Group II – Injectable Drugs",
            "note": "Injectable aminoglycoside used in severe tuberculosis."
        },
        {
            "name": "Kanamycin",
            "category": "Group II – Injectable Drugs",
            "note": "Used in multidrug-resistant tuberculosis."
        },
        {
            "name": "Amikacin",
            "category": "Group II – Injectable Drugs",
            "note": "Preferred injectable aminoglycoside in resistant tuberculosis."
        },
        {
            "name": "Capreomycin",
            "category": "Group II – Injectable Drugs",
            "note": "Peptide antibiotic reserved for multidrug-resistant tuberculosis."
        },
        {
            "name": "Ofloxacin",
            "category": "Group III – Fluoroquinolones",
            "note": "Older fluoroquinolone used in resistant tuberculosis."
        },
        {
            "name": "Levofloxacin",
            "category": "Group III – Fluoroquinolones",
            "note": "Frequently used fluoroquinolone in MDR-TB."
        },
        {
            "name": "Moxifloxacin",
            "category": "Group III – Fluoroquinolones",
            "note": "Most active fluoroquinolone against tuberculosis."
        },
        {
            "name": "Ciprofloxacin",
            "category": "Group III – Fluoroquinolones",
            "note": "Less active than moxifloxacin in tuberculosis."
        },
        {
            "name": "Ethionamide",
            "category": "Group IV – Second-Line Oral Drugs",
            "note": "May cause gastrointestinal intolerance and hypothyroidism."
        },
        {
            "name": "Prothionamide",
            "category": "Group IV – Second-Line Oral Drugs",
            "note": "Similar to ethionamide in action and toxicity."
        },
        {
            "name": "Cycloserine",
            "category": "Group IV – Second-Line Oral Drugs",
            "note": "Associated with neuropsychiatric adverse effects."
        },
        {
            "name": "Terizidone",
            "category": "Group IV – Second-Line Oral Drugs",
            "note": "Cycloserine derivative used in resistant tuberculosis."
        },
        {
            "name": "Para-aminosalicylic acid",
            "category": "Group IV – Second-Line Oral Drugs",
            "note": "Folate antagonist used in multidrug-resistant tuberculosis."
        },
        {
            "name": "Thiacetazone",
            "category": "Group V – Drugs with Unclear Efficacy",
            "note": "Rarely used because of severe adverse effects."
        },
        {
            "name": "Clarithromycin",
            "category": "Group V – Drugs with Unclear Efficacy",
            "note": "Macrolide occasionally used in atypical mycobacterial infections."
        },
        {
            "name": "Clofazimine",
            "category": "Group V – Drugs with Unclear Efficacy",
            "note": "Primarily antileprotic drug with possible activity in resistant TB."
        },
        {
            "name": "Linezolid",
            "category": "Group V – Drugs with Unclear Efficacy",
            "note": "Reserved for highly resistant tuberculosis because of toxicity."
        }
    ]
},
  
  
  
  {
    "id": "gen-1775930223668",
    "name": "Antileprotic Drugs",
    "subject": "Pharmacology",
    "chapter": "Antibacterial Drugs",
    "categories": [
        "Sulfone",
        "Phenazine Derivative",
        "Antitubercular Drugs Used in Leprosy",
        "Other Antibiotics Used in Leprosy"
    ],
    "mnemonic": "Leprosy MDT = Dapsone-Clofazimine-Rifampin; Alternatives = Ofloxacin-Moxifloxacin-Minocycline-Clarithromycin",
    "items": [
        {
            "name": "Dapsone",
            "category": "Sulfone",
            "note": "Most important sulfone used in all forms of leprosy."
        },
        {
            "name": "Clofazimine",
            "category": "Phenazine Derivative",
            "note": "Causes characteristic red-brown discoloration of skin."
        },
        {
            "name": "Rifampin",
            "category": "Antitubercular Drugs Used in Leprosy",
            "note": "Most rapidly bactericidal drug against Mycobacterium leprae."
        },
        {
            "name": "Ethionamide",
            "category": "Antitubercular Drugs Used in Leprosy",
            "note": "Used as alternative drug in resistant leprosy."
        },
        {
            "name": "Ofloxacin",
            "category": "Other Antibiotics Used in Leprosy",
            "note": "Fluoroquinolone used in alternative multidrug regimens."
        },
        {
            "name": "Moxifloxacin",
            "category": "Other Antibiotics Used in Leprosy",
            "note": "More active fluoroquinolone against Mycobacterium leprae."
        },
        {
            "name": "Minocycline",
            "category": "Other Antibiotics Used in Leprosy",
            "note": "Tetracycline derivative effective in leprosy."
        },
        {
            "name": "Clarithromycin",
            "category": "Other Antibiotics Used in Leprosy",
            "note": "Macrolide used in alternative therapy for leprosy."
        }
    ]
},
  
  {
    "id": "gen-1775930459575",
    "name": "Antifungal Drugs ",
    "subject": "Pharmacology",
    "chapter": "Antifungal Drugs",
    "categories": [
        "Antibiotics - Polyenes",
        "Antibiotics - Heterocyclic Benzofuran",
        "Antibiotics - Echinocandins",
        "Antimetabolite",
        "Azoles - Imidazoles - Topical",
        "Azoles - Imidazoles - Systemic",
        "Azoles - Triazoles",
        "Allylamine",
        "Topical Antifungal Agents"
    ],
    "mnemonic": "Polyenes poke, Azoles block, Echinocandins break wall, Terbinafine kills nails",
    "items": [
        {
            "name": "Amphotericin B",
            "category": "Antibiotics - Polyenes",
            "note": "Drug of choice for many life-threatening systemic fungal infections."
        },
        {
            "name": "Nystatin",
            "category": "Antibiotics - Polyenes",
            "note": "Used topically and orally for candidiasis; not absorbed orally."
        },
        {
            "name": "Hamycin",
            "category": "Antibiotics - Polyenes",
            "note": "Topical polyene antifungal used in superficial mycoses."
        },
        {
            "name": "Griseofulvin",
            "category": "Antibiotics - Heterocyclic Benzofuran",
            "note": "Deposited in keratin precursor cells and useful in dermatophytosis."
        },
        {
            "name": "Caspofungin",
            "category": "Antibiotics - Echinocandins",
            "note": "Inhibits fungal cell wall synthesis by blocking β-glucan synthesis."
        },
        {
            "name": "Micafungin",
            "category": "Antibiotics - Echinocandins",
            "note": "Effective against invasive candidiasis."
        },
        {
            "name": "Anidulafungin",
            "category": "Antibiotics - Echinocandins",
            "note": "Echinocandin used for candidemia and esophageal candidiasis."
        },
        {
            "name": "Flucytosine",
            "category": "Antimetabolite",
            "note": "Often combined with amphotericin B in cryptococcal meningitis."
        },
        {
            "name": "Clotrimazole",
            "category": "Azoles - Imidazoles - Topical",
            "note": "Commonly used topical imidazole for dermatophyte and Candida infections."
        },
        {
            "name": "Econazole",
            "category": "Azoles - Imidazoles - Topical",
            "note": "Topical imidazole effective in cutaneous fungal infections."
        },
        {
            "name": "Miconazole",
            "category": "Azoles - Imidazoles - Topical",
            "note": "Topical antifungal also effective in oral candidiasis."
        },
        {
            "name": "Oxiconazole",
            "category": "Azoles - Imidazoles - Topical",
            "note": "Used topically in dermatophytosis."
        },
        {
            "name": "Ketoconazole",
            "category": "Azoles - Imidazoles - Systemic",
            "note": "Systemic imidazole now rarely used because of hepatotoxicity."
        },
        {
            "name": "Fluconazole",
            "category": "Azoles - Triazoles",
            "note": "Excellent cerebrospinal fluid penetration and useful in cryptococcal meningitis."
        },
        {
            "name": "Itraconazole",
            "category": "Azoles - Triazoles",
            "note": "Useful in histoplasmosis, blastomycosis and sporotrichosis."
        },
        {
            "name": "Voriconazole",
            "category": "Azoles - Triazoles",
            "note": "Drug of choice for invasive aspergillosis."
        },
        {
            "name": "Posaconazole",
            "category": "Azoles - Triazoles",
            "note": "Broad-spectrum triazole active against mucormycosis."
        },
        {
            "name": "Terbinafine",
            "category": "Allylamine",
            "note": "Most effective oral drug for onychomycosis."
        },
        {
            "name": "Tolnaftate",
            "category": "Topical Antifungal Agents",
            "note": "Useful in tinea pedis and other superficial dermatophytoses."
        },
        {
            "name": "Undecylenic acid",
            "category": "Topical Antifungal Agents",
            "note": "Topical fatty acid used in superficial fungal infections."
        },
        {
            "name": "Benzoic acid",
            "category": "Topical Antifungal Agents",
            "note": "Often combined with salicylic acid in Whitfield ointment."
        },
        {
            "name": "Ciclopirox olamine",
            "category": "Topical Antifungal Agents",
            "note": "Broad-spectrum topical antifungal also used in nail infections."
        },
        {
            "name": "Butenafine",
            "category": "Topical Antifungal Agents",
            "note": "Benzylamine antifungal related to terbinafine."
        },
        {
            "name": "Quiniodochlor",
            "category": "Topical Antifungal Agents",
            "note": "Topical antifungal and antibacterial agent."
        },
        {
            "name": "Sodium thiosulfate",
            "category": "Topical Antifungal Agents",
            "note": "Occasionally used in superficial fungal infections."
        }
    ]
},
  
 {
    "id": "gen-1775930587765",
    "name": "Antiviral Drugs ( Non Retroviral)",
    "subject": "Pharmacology",
    "chapter": "Antiviral Drugs",
    "categories": [
        "Anti-Herpes Virus Drugs",
        "Anti-Influenza Virus Drugs",
        "Drugs for Hepatitis B",
        "Drugs for Hepatitis C"
    ],
    "mnemonic": "Herpes = Acyclovir, Flu = Oseltamivir, HBV = Tenofovir, HCV = Ribavirin + Interferon",
    "items": [
        {
            "name": "Idoxuridine",
            "category": "Anti-Herpes Virus Drugs",
            "note": "Topical drug used in herpetic keratitis."
        },
        {
            "name": "Trifluridine",
            "category": "Anti-Herpes Virus Drugs",
            "note": "Topical antiviral used in herpes simplex keratitis."
        },
        {
            "name": "Acyclovir",
            "category": "Anti-Herpes Virus Drugs",
            "note": "Drug of choice for herpes simplex and varicella-zoster infections."
        },
        {
            "name": "Valacyclovir",
            "category": "Anti-Herpes Virus Drugs",
            "note": "Oral prodrug of acyclovir with better bioavailability."
        },
        {
            "name": "Famciclovir",
            "category": "Anti-Herpes Virus Drugs",
            "note": "Oral prodrug useful in herpes zoster."
        },
        {
            "name": "Ganciclovir",
            "category": "Anti-Herpes Virus Drugs",
            "note": "Most important drug for cytomegalovirus infections."
        },
        {
            "name": "Valganciclovir",
            "category": "Anti-Herpes Virus Drugs",
            "note": "Oral prodrug of ganciclovir."
        },
        {
            "name": "Cidofovir",
            "category": "Anti-Herpes Virus Drugs",
            "note": "Used in CMV retinitis resistant to ganciclovir."
        },
        {
            "name": "Foscarnet",
            "category": "Anti-Herpes Virus Drugs",
            "note": "Useful in acyclovir-resistant herpes and ganciclovir-resistant CMV."
        },
        {
            "name": "Fomivirsen",
            "category": "Anti-Herpes Virus Drugs",
            "note": "Antisense oligonucleotide used in CMV retinitis."
        },
        {
            "name": "Amantadine",
            "category": "Anti-Influenza Virus Drugs",
            "note": "Blocks uncoating of influenza A virus."
        },
        {
            "name": "Rimantadine",
            "category": "Anti-Influenza Virus Drugs",
            "note": "Similar to amantadine but causes fewer CNS adverse effects."
        },
        {
            "name": "Oseltamivir",
            "category": "Anti-Influenza Virus Drugs",
            "note": "Oral neuraminidase inhibitor effective against influenza A and B."
        },
        {
            "name": "Zanamivir",
            "category": "Anti-Influenza Virus Drugs",
            "note": "Inhaled neuraminidase inhibitor used in influenza."
        },
        {
            "name": "Lamivudine",
            "category": "Drugs for Hepatitis B",
            "note": "Nucleoside analogue effective against hepatitis B virus."
        },
        {
            "name": "Adefovir dipivoxil",
            "category": "Drugs for Hepatitis B",
            "note": "Useful in lamivudine-resistant hepatitis B."
        },
        {
            "name": "Tenofovir",
            "category": "Drugs for Hepatitis B",
            "note": "Potent nucleotide analogue with high barrier to resistance."
        },
        {
            "name": "Ribavirin",
            "category": "Drugs for Hepatitis C",
            "note": "Used with interferon in chronic hepatitis C."
        },
        {
            "name": "Interferon-α",
            "category": "Drugs for Hepatitis C",
            "note": "Immunomodulator previously used in chronic hepatitis C."
        }
    ]
},


{
    "id": "gen-1775930696441",
    "name": "Antiretrovirus Drugs",
    "subject": "Pharmacology",
    "chapter": "Antiviral Drugs",
    "categories": [
        "Nucleoside / Nucleotide Reverse Transcriptase Inhibitors (NRTIs)",
        "Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs)",
        "Protease Inhibitors (PIs)",
        "Entry Inhibitor",
        "CCR5 Receptor Inhibitor",
        "Integrase Inhibitor"
    ],
    "mnemonic": "Reverse transcriptase first, then Protease, then Entry-CCR5-Integrase: Zidovudine-Nevirapine-Ritonavir-Enfuvirtide-Maraviroc-Raltegravir",
    "items": [
        {
            "name": "Zidovudine",
            "category": "Nucleoside / Nucleotide Reverse Transcriptase Inhibitors (NRTIs)",
            "note": "First antiretroviral drug; can cause bone marrow suppression."
        },
        {
            "name": "Didanosine",
            "category": "Nucleoside / Nucleotide Reverse Transcriptase Inhibitors (NRTIs)",
            "note": "Associated with pancreatitis and peripheral neuropathy."
        },
        {
            "name": "Stavudine",
            "category": "Nucleoside / Nucleotide Reverse Transcriptase Inhibitors (NRTIs)",
            "note": "Causes peripheral neuropathy and lipoatrophy."
        },
        {
            "name": "Lamivudine",
            "category": "Nucleoside / Nucleotide Reverse Transcriptase Inhibitors (NRTIs)",
            "note": "Active against both HIV and hepatitis B virus."
        },
        {
            "name": "Abacavir",
            "category": "Nucleoside / Nucleotide Reverse Transcriptase Inhibitors (NRTIs)",
            "note": "Can cause severe hypersensitivity reaction linked to HLA-B*5701."
        },
        {
            "name": "Emtricitabine",
            "category": "Nucleoside / Nucleotide Reverse Transcriptase Inhibitors (NRTIs)",
            "note": "Similar to lamivudine with once-daily dosing."
        },
        {
            "name": "Tenofovir",
            "category": "Nucleoside / Nucleotide Reverse Transcriptase Inhibitors (NRTIs)",
            "note": "Nucleotide analogue also active against hepatitis B."
        },
        {
            "name": "Nevirapine",
            "category": "Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs)",
            "note": "Can cause severe rash and hepatotoxicity."
        },
        {
            "name": "Efavirenz",
            "category": "Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs)",
            "note": "Frequently causes vivid dreams and CNS adverse effects."
        },
        {
            "name": "Delavirdine",
            "category": "Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs)",
            "note": "Older NNRTI less commonly used now."
        },
        {
            "name": "Ritonavir",
            "category": "Protease Inhibitors (PIs)",
            "note": "Potent CYP3A4 inhibitor used mainly as booster."
        },
        {
            "name": "Atazanavir",
            "category": "Protease Inhibitors (PIs)",
            "note": "Commonly causes indirect hyperbilirubinemia."
        },
        {
            "name": "Indinavir",
            "category": "Protease Inhibitors (PIs)",
            "note": "Associated with nephrolithiasis."
        },
        {
            "name": "Nelfinavir",
            "category": "Protease Inhibitors (PIs)",
            "note": "Diarrhoea is a common adverse effect."
        },
        {
            "name": "Saquinavir",
            "category": "Protease Inhibitors (PIs)",
            "note": "First protease inhibitor introduced for HIV."
        },
        {
            "name": "Amprenavir",
            "category": "Protease Inhibitors (PIs)",
            "note": "Protease inhibitor associated with rash."
        },
        {
            "name": "Lopinavir",
            "category": "Protease Inhibitors (PIs)",
            "note": "Usually given with ritonavir as lopinavir/ritonavir."
        },
        {
            "name": "Enfuvirtide",
            "category": "Entry Inhibitor",
            "note": "Fusion inhibitor administered by subcutaneous injection."
        },
        {
            "name": "Maraviroc",
            "category": "CCR5 Receptor Inhibitor",
            "note": "Blocks CCR5 receptor and is effective only against CCR5-tropic HIV."
        },
        {
            "name": "Raltegravir",
            "category": "Integrase Inhibitor",
            "note": "Blocks integration of viral DNA into host genome."
        }
    ]
},



{
    "id": "gen-1775930936829",
    "name": "Anti malarial Drugs ",
    "subject": "Pharmacology",
    "chapter": "Antiprotozoal And Anthelmintic Drugs",
    "categories": [
        "4-Aminoquinolines",
        "Quinoline-Methanol",
        "Biguanide",
        "Diaminopyrimidine",
        "Cinchona Alkaloids",
        "8-Aminoquinolines",
        "Sulfonamides / Sulfones",
        "Antibiotics",
        "Sesquiterpene Lactones",
        "Amino-Alcohols",
        "Naphthoquinone",
        "Naphthyridine"
    ],
    "mnemonic": "CQ-MP-PQ-Artemisinin: Chloroquine-Mefloquine-Proguanil-Primaquine-Artesunate",
    "items": [
        {
            "name": "Chloroquine",
            "category": "4-Aminoquinolines",
            "note": "Drug of choice for chloroquine-sensitive malaria."
        },
        {
            "name": "Amodiaquine",
            "category": "4-Aminoquinolines",
            "note": "Often combined with artesunate in ACT regimens."
        },
        {
            "name": "Piperaquine",
            "category": "4-Aminoquinolines",
            "note": "Long-acting partner drug combined with dihydroartemisinin."
        },
        {
            "name": "Mefloquine",
            "category": "Quinoline-Methanol",
            "note": "Useful in chloroquine-resistant falciparum malaria."
        },
        {
            "name": "Proguanil (Chloroguanide)",
            "category": "Biguanide",
            "note": "Usually combined with atovaquone for prophylaxis and treatment."
        },
        {
            "name": "Pyrimethamine",
            "category": "Diaminopyrimidine",
            "note": "Inhibits plasmodial dihydrofolate reductase."
        },
        {
            "name": "Quinine",
            "category": "Cinchona Alkaloids",
            "note": "Used in severe falciparum malaria."
        },
        {
            "name": "Quinidine",
            "category": "Cinchona Alkaloids",
            "note": "Dextrorotatory stereoisomer of quinine with greater cardiotoxicity."
        },
        {
            "name": "Primaquine",
            "category": "8-Aminoquinolines",
            "note": "Only drug effective against dormant hepatic hypnozoites of vivax malaria."
        },
        {
            "name": "Tafenoquine",
            "category": "8-Aminoquinolines",
            "note": "Long-acting alternative to primaquine for radical cure."
        },
        {
            "name": "Sulfadoxine",
            "category": "Sulfonamides / Sulfones",
            "note": "Used with pyrimethamine in malaria."
        },
        {
            "name": "Sulfamethopyrazine",
            "category": "Sulfonamides / Sulfones",
            "note": "Long-acting sulfonamide used in combination therapy."
        },
        {
            "name": "Dapsone",
            "category": "Sulfonamides / Sulfones",
            "note": "Sometimes combined with chlorproguanil in antimalarial regimens."
        },
        {
            "name": "Doxycycline",
            "category": "Antibiotics",
            "note": "Used for malaria prophylaxis and with quinine in falciparum malaria."
        },
        {
            "name": "Clindamycin",
            "category": "Antibiotics",
            "note": "Used with quinine in pregnancy and severe malaria."
        },
        {
            "name": "Artesunate",
            "category": "Sesquiterpene Lactones",
            "note": "Preferred drug for severe falciparum malaria."
        },
        {
            "name": "Artemether",
            "category": "Sesquiterpene Lactones",
            "note": "Often combined with lumefantrine."
        },
        {
            "name": "Arteether",
            "category": "Sesquiterpene Lactones",
            "note": "Longer-acting artemisinin derivative."
        },
        {
            "name": "Arterolane",
            "category": "Sesquiterpene Lactones",
            "note": "Synthetic ozonide antimalarial combined with piperaquine."
        },
        {
            "name": "Halofantrine",
            "category": "Amino-Alcohols",
            "note": "Limited by risk of serious cardiotoxicity."
        },
        {
            "name": "Lumefantrine",
            "category": "Amino-Alcohols",
            "note": "Commonly used with artemether in ACT."
        },
        {
            "name": "Atovaquone",
            "category": "Naphthoquinone",
            "note": "Combined with proguanil for malaria prophylaxis and treatment."
        },
        {
            "name": "Pyronaridine",
            "category": "Naphthyridine",
            "note": "Used in combination with artesunate."
        }
    ]
},

{
    "id": "gen-1775931134851",
    "name": "Antiamoebic Drugs",
    "subject": "Pharmacology",
    "chapter": "Antiprotozoal And Anthelmintic Drugs",
    "categories": [
        "Tissue Amoebicides - For Intestinal + Extraintestinal Amoebiasis - Nitroimidazoles",
        "Tissue Amoebicides - For Intestinal + Extraintestinal Amoebiasis - Alkaloids",
        "Tissue Amoebicides - For Extraintestinal Amoebiasis Only",
        "Luminal Amoebicides - Amides",
        "Luminal Amoebicides - Antibiotics",
        "Luminal Amoebicides - 8-Hydroxyquinolines"
    ],
    "mnemonic": "Metro kills tissue, Diloxanide clears lumen, Chloroquine for liver abscess",
    "items": [
        {
            "name": "Metronidazole",
            "category": "Tissue Amoebicides - For Intestinal + Extraintestinal Amoebiasis - Nitroimidazoles",
            "note": "Drug of choice for invasive amoebiasis and amoebic liver abscess."
        },
        {
            "name": "Tinidazole",
            "category": "Tissue Amoebicides - For Intestinal + Extraintestinal Amoebiasis - Nitroimidazoles",
            "note": "Longer-acting alternative to metronidazole."
        },
        {
            "name": "Secnidazole",
            "category": "Tissue Amoebicides - For Intestinal + Extraintestinal Amoebiasis - Nitroimidazoles",
            "note": "Can be given as single-dose therapy."
        },
        {
            "name": "Ornidazole",
            "category": "Tissue Amoebicides - For Intestinal + Extraintestinal Amoebiasis - Nitroimidazoles",
            "note": "Nitroimidazole with longer half-life."
        },
        {
            "name": "Satranidazole",
            "category": "Tissue Amoebicides - For Intestinal + Extraintestinal Amoebiasis - Nitroimidazoles",
            "note": "Nitroimidazole producing fewer gastrointestinal adverse effects."
        },
        {
            "name": "Emetine",
            "category": "Tissue Amoebicides - For Intestinal + Extraintestinal Amoebiasis - Alkaloids",
            "note": "Reserved for severe amoebiasis because of marked cardiotoxicity."
        },
        {
            "name": "Dehydroemetine",
            "category": "Tissue Amoebicides - For Intestinal + Extraintestinal Amoebiasis - Alkaloids",
            "note": "Less toxic substitute for emetine."
        },
        {
            "name": "Chloroquine",
            "category": "Tissue Amoebicides - For Extraintestinal Amoebiasis Only",
            "note": "Useful in amoebic liver abscess because it concentrates in liver."
        },
        {
            "name": "Diloxanide furoate",
            "category": "Luminal Amoebicides - Amides",
            "note": "Drug of choice for asymptomatic intestinal cyst passers."
        },
        {
            "name": "Nitazoxanide",
            "category": "Luminal Amoebicides - Amides",
            "note": "Broad-spectrum antiparasitic effective in intestinal protozoal infections."
        },
        {
            "name": "Tetracycline",
            "category": "Luminal Amoebicides - Antibiotics",
            "note": "Acts indirectly by suppressing intestinal bacterial flora."
        },
        {
            "name": "Paromomycin",
            "category": "Luminal Amoebicides - Antibiotics",
            "note": "Poorly absorbed aminoglycoside used as luminal amoebicide."
        },
        {
            "name": "Quiniodochlor (Iodochlorohydroxyquin)",
            "category": "Luminal Amoebicides - 8-Hydroxyquinolines",
            "note": "Used only as luminal amoebicide because of toxicity."
        },
        {
            "name": "Diiodohydroxyquin (Iodoquinol)",
            "category": "Luminal Amoebicides - 8-Hydroxyquinolines",
            "note": "Alternative luminal amoebicide for asymptomatic cyst passers."
        }
    ]
},

 {
    "id": "gen-1775931383760",
    "name": "Anthelmintic Drugs ",
    "subject": "Pharmacology",
    "chapter": "Antiprotozoal And Anthelmintic Drugs",
    "categories": [
        "For Roundworm, Hookworm, Pinworm",
        "For Whipworm, Trichinella spiralis",
        "For Tapeworms",
        "For Hydatid Disease",
        "For Threadworm",
        "For Filariasis"
    ],
    "mnemonic": "Round = Albendazole; Tape = Praziquantel; Thread = Ivermectin; Filaria = DEC",
    "items": [
        {
            "name": "Albendazole",
            "category": "For Roundworm, Hookworm, Pinworm",
            "note": "Broad-spectrum benzimidazole effective against many nematodes."
        },
        {
            "name": "Mebendazole",
            "category": "For Roundworm, Hookworm, Pinworm",
            "note": "Poorly absorbed benzimidazole commonly used in intestinal helminths."
        },
        {
            "name": "Pyrantel pamoate",
            "category": "For Roundworm, Hookworm, Pinworm",
            "note": "Causes depolarizing neuromuscular blockade in worms."
        },
        {
            "name": "Piperazine",
            "category": "For Roundworm, Hookworm, Pinworm",
            "note": "Produces flaccid paralysis of roundworms."
        },
        {
            "name": "Levamisole",
            "category": "For Roundworm, Hookworm, Pinworm",
            "note": "Nicotinic agonist that paralyzes helminths."
        },
        {
            "name": "Albendazole",
            "category": "For Whipworm, Trichinella spiralis",
            "note": "Drug of choice for Trichinella spiralis infection."
        },
        {
            "name": "Mebendazole",
            "category": "For Whipworm, Trichinella spiralis",
            "note": "Effective against Trichuris trichiura and trichinellosis."
        },
        {
            "name": "Praziquantel",
            "category": "For Tapeworms",
            "note": "Drug of choice for most cestode and trematode infections."
        },
        {
            "name": "Niclosamide",
            "category": "For Tapeworms",
            "note": "Acts only in intestinal lumen against adult tapeworms."
        },
        {
            "name": "Albendazole",
            "category": "For Tapeworms",
            "note": "Useful in neurocysticercosis caused by Taenia solium."
        },
        {
            "name": "Albendazole",
            "category": "For Hydatid Disease",
            "note": "Drug of choice for hydatid cyst disease."
        },
        {
            "name": "Mebendazole",
            "category": "For Hydatid Disease",
            "note": "Alternative benzimidazole used in hydatid disease."
        },
        {
            "name": "Ivermectin",
            "category": "For Threadworm",
            "note": "Drug of choice for strongyloidiasis."
        },
        {
            "name": "Albendazole",
            "category": "For Threadworm",
            "note": "Alternative drug for threadworm infection."
        },
        {
            "name": "Diethylcarbamazine",
            "category": "For Filariasis",
            "note": "Drug of choice for lymphatic filariasis."
        },
        {
            "name": "Ivermectin",
            "category": "For Filariasis",
            "note": "Particularly effective against microfilariae."
        },
        {
            "name": "Albendazole",
            "category": "For Filariasis",
            "note": "Used with DEC or ivermectin in mass treatment programmes."
        }
    ]
},
  
  {
    "id": "gen-1776855693155",
    "name": "Anti cancer drugs ",
    "subject": "Pharmacology",
    "chapter": "Anticancer Drugs",
    "categories": [
        "Cytotoxic Drugs - Alkylating Agents - Nitrogen Mustards",
        "Cytotoxic Drugs - Alkylating Agents - Ethylenimines",
        "Cytotoxic Drugs - Alkylating Agents - Nitrosoureas",
        "Cytotoxic Drugs - Alkylating Agents - Alkylsulfonate",
        "Cytotoxic Drugs - Alkylating Agents - Methylhydrazine",
        "Cytotoxic Drugs - Alkylating Agents - Triazines",
        "Cytotoxic Drugs - Platinum Coordination Complexes",
        "Cytotoxic Drugs - Antimetabolites - Folate Antagonists",
        "Cytotoxic Drugs - Antimetabolites - Purine Antagonists",
        "Cytotoxic Drugs - Antimetabolites - Pyrimidine Antagonists"
    ],
    "mnemonic": "Mustards-Platinum-Methotrexate-5FU: Cyclophosphamide-Cisplatin-Methotrexate-5-Fluorouracil",
    "items": [
        {
            "name": "Mechlorethamine",
            "category": "Cytotoxic Drugs - Alkylating Agents - Nitrogen Mustards",
            "note": "Highly reactive nitrogen mustard mainly used in Hodgkin lymphoma."
        },
        {
            "name": "Cyclophosphamide",
            "category": "Cytotoxic Drugs - Alkylating Agents - Nitrogen Mustards",
            "note": "Can cause hemorrhagic cystitis prevented by mesna."
        },
        {
            "name": "Ifosfamide",
            "category": "Cytotoxic Drugs - Alkylating Agents - Nitrogen Mustards",
            "note": "Produces more urotoxicity than cyclophosphamide."
        },
        {
            "name": "Chlorambucil",
            "category": "Cytotoxic Drugs - Alkylating Agents - Nitrogen Mustards",
            "note": "Oral alkylating agent commonly used in chronic lymphocytic leukemia."
        },
        {
            "name": "Melphalan",
            "category": "Cytotoxic Drugs - Alkylating Agents - Nitrogen Mustards",
            "note": "Important drug in multiple myeloma."
        },
        {
            "name": "Thiotepa",
            "category": "Cytotoxic Drugs - Alkylating Agents - Ethylenimines",
            "note": "Ethylenimine alkylating agent used intravesically in bladder cancer."
        },
        {
            "name": "Carmustine",
            "category": "Cytotoxic Drugs - Alkylating Agents - Nitrosoureas",
            "note": "Highly lipid soluble and crosses blood-brain barrier."
        },
        {
            "name": "Lomustine",
            "category": "Cytotoxic Drugs - Alkylating Agents - Nitrosoureas",
            "note": "Orally active nitrosourea used in brain tumors."
        },
        {
            "name": "Busulfan",
            "category": "Cytotoxic Drugs - Alkylating Agents - Alkylsulfonate",
            "note": "Particularly useful in chronic myeloid leukemia."
        },
        {
            "name": "Procarbazine",
            "category": "Cytotoxic Drugs - Alkylating Agents - Methylhydrazine",
            "note": "Part of MOPP regimen for Hodgkin lymphoma."
        },
        {
            "name": "Dacarbazine",
            "category": "Cytotoxic Drugs - Alkylating Agents - Triazines",
            "note": "Used in malignant melanoma and Hodgkin lymphoma."
        },
        {
            "name": "Temozolomide",
            "category": "Cytotoxic Drugs - Alkylating Agents - Triazines",
            "note": "Oral alkylating agent preferred in glioblastoma."
        },
        {
            "name": "Cisplatin",
            "category": "Cytotoxic Drugs - Platinum Coordination Complexes",
            "note": "Highly emetogenic and nephrotoxic."
        },
        {
            "name": "Carboplatin",
            "category": "Cytotoxic Drugs - Platinum Coordination Complexes",
            "note": "Less nephrotoxic and less emetogenic than cisplatin."
        },
        {
            "name": "Oxaliplatin",
            "category": "Cytotoxic Drugs - Platinum Coordination Complexes",
            "note": "Characteristic toxicity is peripheral neuropathy."
        },
        {
            "name": "Methotrexate",
            "category": "Cytotoxic Drugs - Antimetabolites - Folate Antagonists",
            "note": "Inhibits dihydrofolate reductase and can be rescued by leucovorin."
        },
        {
            "name": "Pemetrexed",
            "category": "Cytotoxic Drugs - Antimetabolites - Folate Antagonists",
            "note": "Useful in mesothelioma and non-small cell lung cancer."
        },
        {
            "name": "6-Mercaptopurine",
            "category": "Cytotoxic Drugs - Antimetabolites - Purine Antagonists",
            "note": "Metabolism inhibited by allopurinol."
        },
        {
            "name": "6-Thioguanine",
            "category": "Cytotoxic Drugs - Antimetabolites - Purine Antagonists",
            "note": "Purine analogue mainly used in acute leukemia."
        },
        {
            "name": "Azathioprine",
            "category": "Cytotoxic Drugs - Antimetabolites - Purine Antagonists",
            "note": "Prodrug of 6-mercaptopurine used mainly as immunosuppressant."
        },
        {
            "name": "Fludarabine",
            "category": "Cytotoxic Drugs - Antimetabolites - Purine Antagonists",
            "note": "Important drug in chronic lymphocytic leukemia."
        },
        {
            "name": "5-Fluorouracil",
            "category": "Cytotoxic Drugs - Antimetabolites - Pyrimidine Antagonists",
            "note": "Inhibits thymidylate synthase and is used in colorectal cancer."
        },
        {
            "name": "Capecitabine",
            "category": "Cytotoxic Drugs - Antimetabolites - Pyrimidine Antagonists",
            "note": "Oral prodrug converted to 5-fluorouracil in tissues."
        },
        {
            "name": "Cytarabine",
            "category": "Cytotoxic Drugs - Antimetabolites - Pyrimidine Antagonists",
            "note": "Most important drug for acute myeloid leukemia."
        }
    ]
},
  
  
  
  {
    "id": "gen-1776856014813",
    "name": "Anticancer Drugs 2",
    "subject": "Pharmacology",
    "chapter": "Anticancer Drugs",
    "categories": [
        "Cytotoxic Drugs - Microtubule-Damaging Agents - Vinca Alkaloids",
        "Cytotoxic Drugs - Microtubule-Damaging Agents - Taxanes",
        "Cytotoxic Drugs - Topoisomerase-II Inhibitor",
        "Cytotoxic Drugs - Topoisomerase-I Inhibitors",
        "Cytotoxic Drugs - Anticancer Antibiotics",
        "Cytotoxic Drugs - Miscellaneous"
    ],
    "mnemonic": "Vinca breaks, Taxanes stabilize, Etoposide cuts, Doxorubicin damages DNA",
    "items": [
        {
            "name": "Vincristine (Oncovin)",
            "category": "Cytotoxic Drugs - Microtubule-Damaging Agents - Vinca Alkaloids",
            "note": "Dose-limiting toxicity is peripheral neuropathy."
        },
        {
            "name": "Vinblastine",
            "category": "Cytotoxic Drugs - Microtubule-Damaging Agents - Vinca Alkaloids",
            "note": "Produces more bone marrow suppression than vincristine."
        },
        {
            "name": "Vinorelbine",
            "category": "Cytotoxic Drugs - Microtubule-Damaging Agents - Vinca Alkaloids",
            "note": "Particularly useful in non-small cell lung cancer."
        },
        {
            "name": "Paclitaxel",
            "category": "Cytotoxic Drugs - Microtubule-Damaging Agents - Taxanes",
            "note": "Stabilizes microtubules and may cause peripheral neuropathy."
        },
        {
            "name": "Docetaxel",
            "category": "Cytotoxic Drugs - Microtubule-Damaging Agents - Taxanes",
            "note": "Taxane used in breast and prostate cancer."
        },
        {
            "name": "Estramustine",
            "category": "Cytotoxic Drugs - Microtubule-Damaging Agents - Taxanes",
            "note": "Used mainly in carcinoma prostate."
        },
        {
            "name": "Etoposide",
            "category": "Cytotoxic Drugs - Topoisomerase-II Inhibitor",
            "note": "Topoisomerase-II inhibitor important in testicular cancer."
        },
        {
            "name": "Topotecan",
            "category": "Cytotoxic Drugs - Topoisomerase-I Inhibitors",
            "note": "Used in ovarian carcinoma and small cell lung cancer."
        },
        {
            "name": "Irinotecan",
            "category": "Cytotoxic Drugs - Topoisomerase-I Inhibitors",
            "note": "Causes severe delayed diarrhoea."
        },
        {
            "name": "Actinomycin D",
            "category": "Cytotoxic Drugs - Anticancer Antibiotics",
            "note": "Important drug in Wilms tumor and choriocarcinoma."
        },
        {
            "name": "Doxorubicin",
            "category": "Cytotoxic Drugs - Anticancer Antibiotics",
            "note": "May produce cumulative cardiomyopathy."
        },
        {
            "name": "Daunorubicin",
            "category": "Cytotoxic Drugs - Anticancer Antibiotics",
            "note": "Mainly used in acute leukemias."
        },
        {
            "name": "Epirubicin",
            "category": "Cytotoxic Drugs - Anticancer Antibiotics",
            "note": "Anthracycline with less cardiotoxicity than doxorubicin."
        },
        {
            "name": "Mitoxantrone",
            "category": "Cytotoxic Drugs - Anticancer Antibiotics",
            "note": "Anthracenedione with lower cardiotoxic potential."
        },
        {
            "name": "Bleomycins",
            "category": "Cytotoxic Drugs - Anticancer Antibiotics",
            "note": "Dose-limiting toxicity is pulmonary fibrosis."
        },
        {
            "name": "Mitomycin C",
            "category": "Cytotoxic Drugs - Anticancer Antibiotics",
            "note": "Acts as bioreductive alkylating agent."
        },
        {
            "name": "Hydroxyurea",
            "category": "Cytotoxic Drugs - Miscellaneous",
            "note": "Inhibits ribonucleotide reductase."
        },
        {
            "name": "L-Asparaginase",
            "category": "Cytotoxic Drugs - Miscellaneous",
            "note": "Useful in acute lymphoblastic leukemia."
        },
        {
            "name": "Tretinoin",
            "category": "Cytotoxic Drugs - Miscellaneous",
            "note": "Produces differentiation of promyelocytes in acute promyelocytic leukemia."
        },
        {
            "name": "Arsenic trioxide",
            "category": "Cytotoxic Drugs - Miscellaneous",
            "note": "Used in relapsed acute promyelocytic leukemia."
        }
    ]
},



{
    "id": "gen-1776856169372",
    "name": "Anticancer Drugs 3",
    "subject": "Pharmacology",
    "chapter": "Anticancer Drugs",
    "categories": [
        "Targeted Drugs - Tyrosine Protein Kinase Inhibitors",
        "Targeted Drugs - EGF Receptor Inhibitors",
        "Targeted Drugs - Angiogenesis Inhibitors",
        "Targeted Drugs - Proteasome Inhibitor",
        "Targeted Drugs - Monoclonal Antibody",
        "Hormonal Drugs - Glucocorticoids",
        "Hormonal Drugs - SERMs",
        "Hormonal Drugs - Aromatase Inhibitors",
        "Hormonal Drugs - 5α-Reductase Inhibitors",
        "Hormonal Drugs - Progestins",
        "Hormonal Drugs - Estrogens",
        "Hormonal Drugs - Selective Estrogen Receptor Down-Regulator",
        "Hormonal Drugs - Antiandrogens",
        "Hormonal Drugs - GnRH Analogues"
    ],
    "mnemonic": "Targeted = Imatinib-Gefitinib-Bevacizumab-Bortezomib-Rituximab; Hormonal = Tamoxifen-Letrozole-Flutamide",
    "items": [
        {
            "name": "Imatinib",
            "category": "Targeted Drugs - Tyrosine Protein Kinase Inhibitors",
            "note": "Specifically inhibits BCR-ABL tyrosine kinase in chronic myeloid leukemia."
        },
        {
            "name": "Nilotinib",
            "category": "Targeted Drugs - Tyrosine Protein Kinase Inhibitors",
            "note": "More potent second-generation BCR-ABL inhibitor."
        },
        {
            "name": "Gefitinib",
            "category": "Targeted Drugs - EGF Receptor Inhibitors",
            "note": "EGFR tyrosine kinase inhibitor used in non-small cell lung cancer."
        },
        {
            "name": "Erlotinib",
            "category": "Targeted Drugs - EGF Receptor Inhibitors",
            "note": "Common adverse effect is acneiform rash."
        },
        {
            "name": "Cetuximab",
            "category": "Targeted Drugs - EGF Receptor Inhibitors",
            "note": "Monoclonal antibody against EGFR used in colorectal cancer."
        },
        {
            "name": "Sunitinib",
            "category": "Targeted Drugs - Angiogenesis Inhibitors",
            "note": "Multikinase inhibitor used in renal cell carcinoma."
        },
        {
            "name": "Bevacizumab",
            "category": "Targeted Drugs - Angiogenesis Inhibitors",
            "note": "Monoclonal antibody against vascular endothelial growth factor."
        },
        {
            "name": "Bortezomib",
            "category": "Targeted Drugs - Proteasome Inhibitor",
            "note": "Important drug in multiple myeloma."
        },
        {
            "name": "Rituximab",
            "category": "Targeted Drugs - Monoclonal Antibody",
            "note": "Monoclonal antibody against CD20 used in B-cell lymphomas."
        },
        {
            "name": "Prednisolone",
            "category": "Hormonal Drugs - Glucocorticoids",
            "note": "Commonly used in lymphoid malignancies."
        },
        {
            "name": "Tamoxifen",
            "category": "Hormonal Drugs - SERMs",
            "note": "SERM used in estrogen receptor-positive breast cancer."
        },
        {
            "name": "Toremifene",
            "category": "Hormonal Drugs - SERMs",
            "note": "Tamoxifen analogue used in metastatic breast cancer."
        },
        {
            "name": "Letrozole",
            "category": "Hormonal Drugs - Aromatase Inhibitors",
            "note": "Most commonly used aromatase inhibitor in postmenopausal breast cancer."
        },
        {
            "name": "Anastrozole",
            "category": "Hormonal Drugs - Aromatase Inhibitors",
            "note": "Selective aromatase inhibitor used in breast cancer."
        },
        {
            "name": "Exemestane",
            "category": "Hormonal Drugs - Aromatase Inhibitors",
            "note": "Irreversible steroidal aromatase inhibitor."
        },
        {
            "name": "Finasteride",
            "category": "Hormonal Drugs - 5α-Reductase Inhibitors",
            "note": "Blocks conversion of testosterone to dihydrotestosterone."
        },
        {
            "name": "Dutasteride",
            "category": "Hormonal Drugs - 5α-Reductase Inhibitors",
            "note": "Inhibits both type 1 and type 2 5α-reductase."
        },
        {
            "name": "Hydroxyprogesterone acetate",
            "category": "Hormonal Drugs - Progestins",
            "note": "Progestin used in endometrial carcinoma."
        },
        {
            "name": "Ethinyl estradiol",
            "category": "Hormonal Drugs - Estrogens",
            "note": "Occasionally used in prostate carcinoma."
        },
        {
            "name": "Fosfestrol",
            "category": "Hormonal Drugs - Estrogens",
            "note": "Estrogen derivative used in advanced prostate cancer."
        },
        {
            "name": "Fulvestrant",
            "category": "Hormonal Drugs - Selective Estrogen Receptor Down-Regulator",
            "note": "Down-regulates estrogen receptors in breast cancer."
        },
        {
            "name": "Flutamide",
            "category": "Hormonal Drugs - Antiandrogens",
            "note": "Nonsteroidal antiandrogen used in carcinoma prostate."
        },
        {
            "name": "Bicalutamide",
            "category": "Hormonal Drugs - Antiandrogens",
            "note": "Long-acting antiandrogen preferred over flutamide."
        },
        {
            "name": "Nafarelin",
            "category": "Hormonal Drugs - GnRH Analogues",
            "note": "Long-term use suppresses gonadotropin release."
        },
        {
            "name": "Leuprorelin",
            "category": "Hormonal Drugs - GnRH Analogues",
            "note": "Commonly used in carcinoma prostate."
        },
        {
            "name": "Triptorelin",
            "category": "Hormonal Drugs - GnRH Analogues",
            "note": "GnRH analogue used in hormone-dependent malignancies."
        }
    ]
},


  
  
  {
    "id": "gen-1776856375852",
    "name": "Immunosuppressant Drugs",
    "subject": "Pharmacology",
    "chapter": "Miscellaneous Drugs",
    "categories": [
        "Calcineurin Inhibitors",
        "mTOR Inhibitors",
        "Antiproliferative Drugs",
        "Glucocorticoids",
        "Biological Agents - TNF-α Inhibitors",
        "Biological Agents - IL-1 Receptor Antagonist",
        "Biological Agents - IL-2 Receptor Antagonists",
        "Biological Agents - Anti-CD3 Antibody",
        "Biological Agents - Polyclonal Antibodies"
    ],
    "mnemonic": "Calcineurin blocks T-cells, mTOR stops growth, Mycophenolate prevents rejection",
    "items": [
        {
            "name": "Cyclosporine (Ciclosporin)",
            "category": "Calcineurin Inhibitors",
            "note": "Inhibits calcineurin and is nephrotoxic."
        },
        {
            "name": "Tacrolimus",
            "category": "Calcineurin Inhibitors",
            "note": "More potent than cyclosporine and commonly causes diabetes."
        },
        {
            "name": "Sirolimus",
            "category": "mTOR Inhibitors",
            "note": "Inhibits mTOR and is not nephrotoxic."
        },
        {
            "name": "Everolimus",
            "category": "mTOR Inhibitors",
            "note": "Derivative of sirolimus used in transplantation and cancer."
        },
        {
            "name": "Azathioprine",
            "category": "Antiproliferative Drugs",
            "note": "Prodrug of 6-mercaptopurine used to prevent graft rejection."
        },
        {
            "name": "Methotrexate",
            "category": "Antiproliferative Drugs",
            "note": "Low-dose methotrexate is widely used in autoimmune diseases."
        },
        {
            "name": "Cyclophosphamide",
            "category": "Antiproliferative Drugs",
            "note": "Can cause hemorrhagic cystitis."
        },
        {
            "name": "Chlorambucil",
            "category": "Antiproliferative Drugs",
            "note": "Oral alkylating agent with immunosuppressant action."
        },
        {
            "name": "Mycophenolate mofetil",
            "category": "Antiproliferative Drugs",
            "note": "Inhibits inosine monophosphate dehydrogenase in lymphocytes."
        },
        {
            "name": "Prednisolone",
            "category": "Glucocorticoids",
            "note": "Commonly used glucocorticoid for immunosuppression."
        },
        {
            "name": "Etanercept",
            "category": "Biological Agents - TNF-α Inhibitors",
            "note": "Fusion protein that binds TNF-α."
        },
        {
            "name": "Infliximab",
            "category": "Biological Agents - TNF-α Inhibitors",
            "note": "Chimeric monoclonal antibody against TNF-α."
        },
        {
            "name": "Adalimumab",
            "category": "Biological Agents - TNF-α Inhibitors",
            "note": "Fully human monoclonal antibody against TNF-α."
        },
        {
            "name": "Anakinra",
            "category": "Biological Agents - IL-1 Receptor Antagonist",
            "note": "Recombinant IL-1 receptor antagonist used in rheumatoid arthritis."
        },
        {
            "name": "Daclizumab",
            "category": "Biological Agents - IL-2 Receptor Antagonists",
            "note": "Monoclonal antibody against IL-2 receptor."
        },
        {
            "name": "Basiliximab",
            "category": "Biological Agents - IL-2 Receptor Antagonists",
            "note": "Used to prevent acute transplant rejection."
        },
        {
            "name": "Muromonab-CD3",
            "category": "Biological Agents - Anti-CD3 Antibody",
            "note": "Monoclonal antibody against CD3 on T lymphocytes."
        },
        {
            "name": "Antithymocyte globulin (ATG)",
            "category": "Biological Agents - Polyclonal Antibodies",
            "note": "Polyclonal antibody preparation used in transplant rejection."
        },
        {
            "name": "Rho(D) immune globulin",
            "category": "Biological Agents - Polyclonal Antibodies",
            "note": "Prevents Rh isoimmunization in Rh-negative mothers."
        }
    ]
},
  
  
  {
    "id": "gen-1776856507657",
    "name": "Drugs for Acne Vulgaris",
    "subject": "Pharmacology",
    "chapter": "Miscellaneous Drugs",
    "categories": [
        "Topical Drugs - Antimicrobials",
        "Topical Drugs - Retinoids",
        "Systemic Drugs - Antibiotics",
        "Systemic Drugs - Retinoid"
    ],
    "mnemonic": "Topical = Benzoyl-Clinda-Tretinoin; Severe acne = Doxycycline + Isotretinoin",
    "items": [
        {
            "name": "Benzoyl peroxide",
            "category": "Topical Drugs - Antimicrobials",
            "note": "Most effective topical antibacterial agent that does not produce resistance."
        },
        {
            "name": "Erythromycin",
            "category": "Topical Drugs - Antimicrobials",
            "note": "Topical macrolide often combined with benzoyl peroxide."
        },
        {
            "name": "Clindamycin",
            "category": "Topical Drugs - Antimicrobials",
            "note": "Most commonly used topical antibiotic for acne."
        },
        {
            "name": "Nadifloxacin",
            "category": "Topical Drugs - Antimicrobials",
            "note": "Topical fluoroquinolone used in acne vulgaris."
        },
        {
            "name": "Azelaic acid",
            "category": "Topical Drugs - Antimicrobials",
            "note": "Useful in acne with post-inflammatory hyperpigmentation."
        },
        {
            "name": "Tretinoin (all-trans retinoic acid)",
            "category": "Topical Drugs - Retinoids",
            "note": "Most effective comedolytic drug for acne."
        },
        {
            "name": "Adapalene",
            "category": "Topical Drugs - Retinoids",
            "note": "Less irritating topical retinoid."
        },
        {
            "name": "Tazarotene",
            "category": "Topical Drugs - Retinoids",
            "note": "Topical retinoid also useful in psoriasis."
        },
        {
            "name": "Doxycycline",
            "category": "Systemic Drugs - Antibiotics",
            "note": "Most commonly used oral antibiotic for moderate to severe acne."
        },
        {
            "name": "Minocycline",
            "category": "Systemic Drugs - Antibiotics",
            "note": "More lipid soluble tetracycline used in acne."
        },
        {
            "name": "Erythromycin",
            "category": "Systemic Drugs - Antibiotics",
            "note": "Alternative oral antibiotic in pregnancy."
        },
        {
            "name": "Isotretinoin (13-cis retinoic acid)",
            "category": "Systemic Drugs - Retinoid",
            "note": "Most effective drug for severe nodulocystic acne but is highly teratogenic."
        }
    ]
},
    
    
    
    // --- NEW_DATA_END ---
];
