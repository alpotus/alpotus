/**
 * ALPOTUS 5.0 - MASTER FLASHCARD REPOSITORY
 * Every card MUST have a unique ID for the SRS to function.
 */

const FlashcardsData = {
    "Anatomy": {
        icon: "🦴",
        chapters: {
            "Upper Limb": [
                {
                    id: "ana-ul-001",
                    name: "Brachial Plexus",
                    cards: [
                        { id: "c1", q: "Roots of the Brachial Plexus?", a: "C5, C6, C7, C8, T1" },
                        { id: "c2", q: "Nerve involved in Wrist Drop?", a: "Radial Nerve" },
                        { id: "c3", q: "Anatomy of the Brachial Plexus", a: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Brachial_plexus_2.svg/800px-Brachial_plexus_2.svg.png" }
                    ]
                }
            ]
        }
    },
    "Pharmacology": {
        icon: "💊",
        chapters: {
            "Autonomic Nervous System": [
                {
                    id: "pha-ans-001",
                    name: "Cholinergic Drugs",
                    cards: [
                        { id: "c4", q: "Antidote for Atropine poisoning?", a: "Physostigmine" },
                        { id: "c5", q: "Drug for Myasthenia Gravis (Long term)?", a: "Pyridostigmine" }
                    ]
                }
            ]
        }
    }
    // Add all other 17 subjects here following the same ID pattern...
};

/**
 * ---------------------------------------------------------
 * ALPOTUS VOID - PASTE YOUR CUSTOM ADDED TOPICS BELOW
 * ---------------------------------------------------------
 */
const MyAddedFlashcards = [
    {
        subject: "Pathology",
        chapter: "Hematology",
        id: "path-hem-001",
        name: "Hemolytic Anemia",
        cards: [
            {
                id: "c101",
                q: "Where does extravascular hemolysis mainly occur?",
                a: "Spleen, liver, and bone marrow macrophages."
            },
            {
                id: "c102",
                q: "Common findings in hemolytic anemia?",
                a: "Increased reticulocytes, LDH, and unconjugated bilirubin; decreased haptoglobin."
            },
            {
                id: "c103",
                q: "Peripheral smear finding in hereditary spherocytosis?",
                a: "Spherocytes."
            }
        ]
    },
    {
        subject: "Microbiology",
        chapter: "Mycobacteriology",
        id: "mic-myc-001",
        name: "Tuberculosis",
        cards: [
            {
                id: "c201",
                q: "Which stain is used to identify M. tuberculosis?",
                a: "Ziehl-Neelsen stain (Acid-fast)."
            },
            {
                id: "c202",
                q: "Culture medium for M. tuberculosis?",
                a: "Lowenstein-Jensen (LJ) medium."
            }
        ]
    },
    {
    subject: "Pathology",
    chapter: "General Pathology",
    id: "path-celladapt-002",
    name: "Cell Injury and Adaptations",
    cards: [
        {
            id: "v101",
            q: "Most common cause of cell injury?",
            a: "Hypoxia"
        },
        {
            id: "v102",
            q: "Most common mechanism causing hypoxia to tissues?",
            a: "Ischemia due to decreased blood supply"
        },
        {
            id: "v103",
            q: "Which produces more severe cell injury: ischemia or hypoxia?",
            a: "Ischemia causes more severe injury because both oxygen and nutrients are decreased."
        },
        {
            id: "v104",
            q: "Most sensitive cells to hypoxia?",
            a: "Neurons"
        },
        {
            id: "v105",
            q: "Least sensitive cells to hypoxia?",
            a: "Skeletal muscle cells and fibroblasts"
        },
        {
            id: "v106",
            q: "Factors affecting severity of cell injury?",
            a: "• Type of cell\n• Metabolic state of cell\n• Duration of injury\n• Type of injury"
        },
        {
            id: "v107",
            q: "Cellular response to a small stimulus?",
            a: "Cellular adaptation"
        },
        {
            id: "v108",
            q: "Cellular response to a persisting stimulus?",
            a: "Cell injury"
        },
        {
            id: "v109",
            q: "What are the four major forms of cellular adaptation?",
            a: "• Hypertrophy\n• Hyperplasia\n• Atrophy\n• Metaplasia"
        },
        {
            id: "v110",
            q: "Definition of hypertrophy?",
            a: "Increase in cell size without increase in cell number"
        },
        {
            id: "v111",
            q: "Mechanism of hypertrophy?",
            a: "Increased synthesis of cellular proteins"
        },
        {
            id: "v112",
            q: "Hypertrophy occurs mainly in which type of cells?",
            a: "Permanent / non-dividing cells such as neurons and cardiac or skeletal muscle"
        },
        {
            id: "v113",
            q: "Examples of physiologic hypertrophy?",
            a: "• Uterine myometrium during pregnancy\n• Breast during lactation\n• Skeletal muscle in body builders"
        },
        {
            id: "v114",
            q: "Most common pathologic example of hypertrophy?",
            a: "Left ventricular hypertrophy due to systemic hypertension"
        },
        {
            id: "v115",
            q: "Which organ shows hypertrophy proximal to an obstruction caused by a stone?",
            a: "Urinary bladder"
        },
        {
            id: "v116",
            q: "Example showing both hypertrophy and hyperplasia together?",
            a: "Gravid uterus during pregnancy"
        },
        {
            id: "v117",
            q: "Definition of hyperplasia?",
            a: "Increase in number of cells causing increase in size of organ"
        },
        {
            id: "v118",
            q: "Mechanism of hyperplasia?",
            a: "Growth factor-induced proliferation of cells"
        },
        {
            id: "v119",
            q: "Hyperplasia occurs mainly in which type of cells?",
            a: "Dividing cells"
        },
        {
            id: "v120",
            q: "What is the important long-term consequence of persistent hyperplasia?",
            a: "May progress to carcinoma"
        },
        {
            id: "v121",
            q: "Examples of physiologic compensatory hyperplasia?",
            a: "Liver regeneration after partial hepatectomy"
        },
        {
            id: "v122",
            q: "Examples of physiologic hormonal hyperplasia?",
            a: "• Breast during puberty\n• Breast during pregnancy"
        },
        {
            id: "v123",
            q: "Most common pathologic hyperplasia due to excess estrogen?",
            a: "Endometrial hyperplasia"
        },
        {
            id: "v124",
            q: "Most common pathologic hyperplasia in elderly males?",
            a: "Benign prostatic hyperplasia"
        },
        {
            id: "v125",
            q: "Definition of atrophy?",
            a: "Decrease in cell size and/or cell number leading to decrease in organ size"
        },
        {
            id: "v126",
            q: "Mechanisms of atrophy?",
            a: "• Decreased protein synthesis\n• Increased protein degradation\n• Autophagy"
        },
        {
            id: "v127",
            q: "Examples of physiologic atrophy?",
            a: "• Disappearance of notochord\n• Disappearance of thyroglossal duct\n• Involution of uterus after parturition"
        },
        {
            id: "v128",
            q: "Most common pathologic cause of senile atrophy?",
            a: "Ageing of organs"
        },
        {
            id: "v129",
            q: "What type of atrophy occurs after immobilization following fracture?",
            a: "Disuse muscular atrophy"
        },
        {
            id: "v130",
            q: "What type of atrophy occurs due to loss of nerve supply?",
            a: "Denervation atrophy"
        },
        {
            id: "v131",
            q: "What type of atrophy occurs due to decreased blood supply?",
            a: "Ischemic atrophy"
        },
        {
            id: "v132",
            q: "Examples of nutritional atrophy?",
            a: "Kwashiorkor and marasmus"
        },
        {
            id: "v133",
            q: "What is pressure atrophy?",
            a: "Atrophy of tissue surrounding a space-occupying lesion such as a tumor"
        },
        {
            id: "v134",
            q: "Definition of metaplasia?",
            a: "Reversible replacement of one differentiated mature cell type by another differentiated mature cell type"
        },
        {
            id: "v135",
            q: "Types of metaplasia?",
            a: "• Epithelial metaplasia\n• Mesenchymal metaplasia"
        },
        {
            id: "v136",
            q: "Mechanism of metaplasia?",
            a: "Reprogramming of stem cells"
        },
        {
            id: "v137",
            q: "Important nutritional risk factor for metaplasia?",
            a: "Vitamin A deficiency"
        },
        {
            id: "v138",
            q: "Which epithelial change occurs in squamous metaplasia of smokers?",
            a: "Pseudostratified ciliated columnar epithelium → stratified squamous epithelium"
        },
        {
            id: "v139",
            q: "Squamous metaplasia in smokers is reversible by what measure?",
            a: "Smoking cessation"
        },
        {
            id: "v140",
            q: "Why does squamous metaplasia increase risk of respiratory infection?",
            a: "Loss of cilia impairs mucociliary clearance"
        },
        {
            id: "v141",
            q: "Which metaplasia occurs in Barrett esophagus?",
            a: "Stratified squamous epithelium of lower esophagus → intestinal-type columnar epithelium"
        },
        {
            id: "v142",
            q: "Most important etiologic factor for Barrett esophagus?",
            a: "Chronic gastroesophageal reflux disease (GERD)"
        },
        {
            id: "v143",
            q: "Histopathologic hallmark of Barrett esophagus?",
            a: "Intestinal metaplasia with goblet cells"
        },
        {
            id: "v144",
            q: "Which cells must be present to diagnose Barrett esophagus histologically?",
            a: "Goblet cells"
        },
        {
            id: "v145",
            q: "Special stains used to identify goblet cell mucin in Barrett esophagus?",
            a: "• Alcian blue\n• Mucicarmine"
        },
        {
            id: "v146",
            q: "Barrett esophagus predisposes to which malignancy?",
            a: "Adenocarcinoma of esophagus"
        },
        {
            id: "v147",
            q: "Example of mesenchymal metaplasia?",
            a: "Myositis ossificans: formation of bone in skeletal muscle"
        },
        {
            id: "v148",
            q: "What are the major forms of irreversible cell death other than necrosis and apoptosis?",
            a: "• Pyroptosis\n• Necroptosis\n• Ferroptosis"
        }
    ]
},


{
    subject: "Pathology",
    chapter: "General Pathology",
    id: "path-cellinjury-003",
    name: "Cell Injury",
    cards: [
        {
            id: "v201",
            q: "Persistent injurious stimulus first produces which type of cell injury?",
            a: "Reversible cell injury"
        },
        {
            id: "v202",
            q: "Persistent severe stimulus ultimately produces which type of cell injury?",
            a: "Irreversible cell injury"
        },
        {
            id: "v203",
            q: "Most common mechanism producing reversible cell injury?",
            a: "Hypoxia"
        },
        {
            id: "v204",
            q: "Primary intracellular target of hypoxic injury?",
            a: "Mitochondria"
        },
        {
            id: "v205",
            q: "What happens to oxidative phosphorylation in hypoxic cell injury?",
            a: "Oxidative phosphorylation decreases"
        },
        {
            id: "v206",
            q: "Earliest biochemical abnormality in reversible cell injury?",
            a: "Decreased ATP synthesis"
        },
        {
            id: "v207",
            q: "Failure of which membrane pump is responsible for cell swelling?",
            a: "Na+/K+ ATPase pump"
        },
        {
            id: "v208",
            q: "What ionic changes occur when Na+/K+ ATPase fails?",
            a: "Influx of Na+ and H2O with efflux of K+"
        },
        {
            id: "v209",
            q: "Why does anaerobic glycolysis increase in hypoxic cell injury?",
            a: "To compensate for reduced ATP production by oxidative phosphorylation"
        },
        {
            id: "v210",
            q: "What acid-base abnormality results from anaerobic glycolysis?",
            a: "Lactic acidosis"
        },
        {
            id: "v211",
            q: "What happens to ribosomes in reversible cell injury?",
            a: "Ribosomes detach from rough endoplasmic reticulum"
        },
        {
            id: "v212",
            q: "What is the consequence of ribosomal detachment from rough ER?",
            a: "Decreased protein synthesis"
        },
        {
            id: "v213",
            q: "Most important morphologic feature of reversible cell injury?",
            a: "Cellular swelling (hydropic change)"
        },
        {
            id: "v214",
            q: "What is hydropic change?",
            a: "Cell swelling due to accumulation of intracellular water"
        },
        {
            id: "v215",
            q: "Most commonly affected organelle in reversible cell injury?",
            a: "Mitochondria"
        },
        {
            id: "v216",
            q: "Which organelles show swelling in reversible cell injury?",
            a: "• Mitochondria\n• Endoplasmic reticulum"
        },
        {
            id: "v217",
            q: "What nuclear change occurs in reversible cell injury?",
            a: "Clumping of nuclear chromatin"
        },
        {
            id: "v218",
            q: "What are membrane blebs?",
            a: "Bulging projections of damaged plasma membrane"
        },
        {
            id: "v219",
            q: "What are myelin figures?",
            a: "Whorled phospholipid masses formed from damaged cell membranes"
        },
        {
            id: "v220",
            q: "Composition of myelin figures?",
            a: "Phospholipids and calcium"
        },
        {
            id: "v221",
            q: "Are myelin figures seen in reversible or irreversible injury?",
            a: "Seen in both, but more prominent in irreversible injury"
        },
        {
            id: "v222",
            q: "Two hallmark features that define irreversibility of cell injury?",
            a: "• Membrane dysfunction\n• Mitochondrial dysfunction"
        },
        {
            id: "v223",
            q: "Most important light microscopic feature of irreversible cell injury?",
            a: "Nuclear changes"
        },
        {
            id: "v224",
            q: "What is the main membrane abnormality in irreversible injury?",
            a: "Loss of selective permeability of plasma membrane"
        },
        {
            id: "v225",
            q: "What happens to the plasma membrane in irreversible injury?",
            a: "It becomes completely permeable"
        },
        {
            id: "v226",
            q: "Loss of organelle membrane permeability causes increase of which ion in cytosol?",
            a: "Calcium"
        },
        {
            id: "v227",
            q: "Most important intracellular mediator of irreversible cell injury?",
            a: "Increased cytosolic Ca2+"
        },
        {
            id: "v228",
            q: "Which enzyme activated by Ca2+ causes membrane phospholipid breakdown?",
            a: "Phospholipase"
        },
        {
            id: "v229",
            q: "Which enzyme activated by Ca2+ causes cytoskeletal protein breakdown?",
            a: "Protease"
        },
        {
            id: "v230",
            q: "Which enzyme activated by Ca2+ causes nuclear DNA fragmentation?",
            a: "Endonuclease"
        },
        {
            id: "v231",
            q: "Which enzyme activated by Ca2+ accelerates ATP depletion?",
            a: "ATPase"
        },
        {
            id: "v232",
            q: "Clinical significance of increased plasma membrane permeability?",
            a: "Leakage of intracellular enzymes into circulation"
        },
        {
            id: "v233",
            q: "Most important serum markers released in myocardial infarction?",
            a: "• Troponin T/I\n• CK-MB\n• LDH"
        },
        {
            id: "v234",
            q: "Which serum enzymes increase in hepatitis?",
            a: "SGOT (AST) and SGPT (ALT)"
        },
        {
            id: "v235",
            q: "Characteristic electron microscopic feature of irreversible mitochondrial injury?",
            a: "Large flocculent amorphous densities in mitochondria"
        },
        {
            id: "v236",
            q: "Which nuclear change is characterized by shrinkage of nucleus?",
            a: "Pyknosis"
        },
        {
            id: "v237",
            q: "Definition of pyknosis?",
            a: "Shrinkage and increased basophilia of nuclear chromatin"
        },
        {
            id: "v238",
            q: "Which nuclear change follows pyknosis?",
            a: "Karyorrhexis"
        },
        {
            id: "v239",
            q: "Definition of karyorrhexis?",
            a: "Fragmentation of the pyknotic nucleus"
        },
        {
            id: "v240",
            q: "Which nuclear change represents dissolution of nucleus?",
            a: "Karyolysis"
        },
        {
            id: "v241",
            q: "Definition of karyolysis?",
            a: "Complete dissolution of the nucleus due to DNase activity"
        },
        {
            id: "v242",
            q: "Sequence of nuclear changes in irreversible cell injury?",
            a: "Pyknosis → Karyorrhexis → Karyolysis"
        },
        {
            id: "v243",
            q: "Definition of a free radical?",
            a: "Molecule containing an unpaired electron in its outer orbit"
        },
        {
            id: "v244",
            q: "Most potent free radical in biologic systems?",
            a: "Hydroxyl radical (OH•)"
        },
        {
            id: "v245",
            q: "Examples of important reactive oxygen species (ROS)?",
            a: "• Superoxide (O2•−)\n• Hydrogen peroxide (H2O2)\n• Hydroxyl radical (OH•)"
        },
        {
            id: "v246",
            q: "Which reactive nitrogen species is involved in oxygen-dependent killing by phagocytes?",
            a: "Peroxynitrite (ONOO−)"
        },
        {
            id: "v247",
            q: "Name four important pathologic roles of free radicals.",
            a: "• Aging\n• Cancer\n• Alzheimer's disease\n• Reperfusion injury"
        },
        {
            id: "v248",
            q: "Which trace metals promote free radical generation?",
            a: "Iron and copper"
        },
        {
            id: "v249",
            q: "What is Fenton reaction?",
            a: "Fe2+ converts hydrogen peroxide into highly reactive hydroxyl radicals"
        },
        {
            id: "v250",
            q: "Which iron-binding protein protects against free radical injury?",
            a: "Transferrin"
        },
        {
            id: "v251",
            q: "Which copper-binding protein protects against free radical injury?",
            a: "Ceruloplasmin"
        },
        {
            id: "v252",
            q: "Three major types of damage caused by free radicals?",
            a: "• Lipid peroxidation of membranes\n• Protein modification\n• DNA damage"
        },
        {
            id: "v253",
            q: "Most important consequence of free radical-induced lipid peroxidation?",
            a: "Membrane damage"
        },
        {
            id: "v254",
            q: "What is the effect of free radicals on proteins?",
            a: "Protein oxidation leading to misfolding and degradation"
        },
        {
            id: "v255",
            q: "What is the effect of free radicals on DNA?",
            a: "DNA strand breaks and mutations"
        },
        {
            id: "v256",
            q: "Most important enzymatic antioxidant against superoxide radical?",
            a: "Superoxide dismutase"
        },
        {
            id: "v257",
            q: "Which free radical is converted by superoxide dismutase?",
            a: "Superoxide (O2•−)"
        },
        {
            id: "v258",
            q: "Where is Cu-Zn superoxide dismutase located?",
            a: "Cytoplasm"
        },
        {
            id: "v259",
            q: "Where is Mn-superoxide dismutase located?",
            a: "Mitochondria"
        },
        {
            id: "v260",
            q: "Which antioxidant enzyme is present in peroxisomes?",
            a: "Catalase"
        },
        {
            id: "v261",
            q: "Which free radical is detoxified by catalase?",
            a: "Hydrogen peroxide"
        },
        {
            id: "v262",
            q: "Which enzyme detoxifies both hydrogen peroxide and hydroxyl radicals in cytoplasm and mitochondria?",
            a: "Glutathione peroxidase"
        },
        {
            id: "v263",
            q: "Important non-enzymatic antioxidants?",
            a: "• Vitamins A, C, E\n• Selenium"
        },
        {
            id: "v264",
            q: "Mutation of SOD1 gene is associated with which neurodegenerative disease?",
            a: "Amyotrophic lateral sclerosis (ALS)"
        },
        {
            id: "v265",
            q: "Why is SOD1 important clinically?",
            a: "It protects neurons, especially brain tissue, from free radical injury"
        },
        {
            id: "v266",
            q: "Which organelle is the site of protein folding?",
            a: "Endoplasmic reticulum"
        },
        {
            id: "v267",
            q: "Which proteins assist in normal protein folding within ER?",
            a: "Chaperone proteins"
        },
        {
            id: "v268",
            q: "What causes accumulation of misfolded proteins?",
            a: "ER stress or defective chaperone-mediated folding"
        },
        {
            id: "v269",
            q: "Which pathway normally degrades misfolded proteins?",
            a: "Ubiquitin-proteasome pathway"
        },
        {
            id: "v270",
            q: "Accumulation of misfolded proteins contributes to which common neurodegenerative disease?",
            a: "Alzheimer disease"
        },
        {
            id: "v271",
            q: "Which misfolded protein accumulates in Alzheimer's disease?",
            a: "Amyloid-beta (Aβ)"
        },
        {
            id: "v272",
            q: "Which defective protein is involved in cystic fibrosis?",
            a: "CFTR"
        },
        {
            id: "v273",
            q: "Which defective protein is involved in familial hypercholesterolemia?",
            a: "LDL receptor"
        },
        {
            id: "v274",
            q: "Which defective protein is involved in alpha-1 antitrypsin deficiency?",
            a: "Alpha-1 antitrypsin"
        },
        {
            id: "v275",
            q: "Which misfolded protein causes Creutzfeldt-Jakob disease?",
            a: "Prion protein"
        },
        {
            id: "v276",
            q: "Which defective protein is involved in Tay-Sachs disease?",
            a: "Hexosaminidase A alpha-subunit"
        }
    ]
},
{
    subject: "Pathology",
    chapter: "General Pathology",
    id: "path-celldeath-004",
    name: "Cell Death",
    cards: [
        {
            id: "v301",
            q: "Major mechanisms of cell death?",
            a: "• Necrosis\n• Apoptosis\n• Pyroptosis\n• Necroptosis\n• Ferroptosis\n• Autophagy"
        },
        {
            id: "v302",
            q: "Definition of necrosis?",
            a: "Accidental death of multiple cells due to irreversible injury; always pathologic"
        },
        {
            id: "v303",
            q: "Basic mechanism of necrosis?",
            a: "• Protein denaturation\n• Enzymatic digestion of dead cells"
        },
        {
            id: "v304",
            q: "What membrane change is essential for necrosis?",
            a: "Damage to plasma membrane with leakage of cellular contents"
        },
        {
            id: "v305",
            q: "Why is inflammation present in necrosis?",
            a: "Leakage of cellular contents recruits inflammatory cells to remove debris"
        },
        {
            id: "v306",
            q: "Most characteristic microscopic appearance of necrotic cells?",
            a: "Densely eosinophilic cytoplasm"
        },
        {
            id: "v307",
            q: "Why do necrotic cells become intensely eosinophilic?",
            a: "Loss of cytoplasmic RNA"
        },
        {
            id: "v308",
            q: "Why do necrotic cells appear glassy and homogeneous?",
            a: "Loss of glycogen"
        },
        {
            id: "v309",
            q: "What produces the moth-eaten appearance in necrosis?",
            a: "Lysosomal digestion of cytoplasmic organelles"
        },
        {
            id: "v310",
            q: "Types of necrosis?",
            a: "• Coagulative\n• Liquefactive\n• Caseous\n• Fat\n• Fibrinoid\n• Gangrenous"
        },
        {
            id: "v311",
            q: "Most common type of necrosis?",
            a: "Coagulative necrosis"
        },
        {
            id: "v312",
            q: "Mechanism of coagulative necrosis?",
            a: "Denaturation of structural proteins and enzymes"
        },
        {
            id: "v313",
            q: "Microscopic hallmark of coagulative necrosis?",
            a: "Cell outlines are preserved"
        },
        {
            id: "v314",
            q: "Classic organs showing coagulative necrosis after infarction?",
            a: "All solid organs except brain"
        },
        {
            id: "v315",
            q: "Most common organ affected by coagulative necrosis?",
            a: "Heart"
        },
        {
            id: "v316",
            q: "Examples of organs showing coagulative necrosis?",
            a: "• Heart\n• Kidney\n• Liver\n• Spleen"
        },
        {
            id: "v317",
            q: "Which type of necrosis is seen in burns?",
            a: "Coagulative necrosis"
        },
        {
            id: "v318",
            q: "Which type of gangrene is a form of coagulative necrosis?",
            a: "Dry gangrene"
        },
        {
            id: "v319",
            q: "What is Zenker degeneration?",
            a: "Coagulative necrosis of skeletal muscle, classically rectus abdominis in typhoid fever"
        },
        {
            id: "v320",
            q: "Mechanism of liquefactive necrosis?",
            a: "Enzymatic digestion of cells"
        },
        {
            id: "v321",
            q: "Microscopic hallmark of liquefactive necrosis?",
            a: "Cell outlines are not preserved"
        },
        {
            id: "v322",
            q: "Which organ classically shows liquefactive necrosis after infarction?",
            a: "Brain"
        },
        {
            id: "v323",
            q: "Which infections commonly produce liquefactive necrosis?",
            a: "• Bacterial infections\n• Fungal infections"
        },
        {
            id: "v324",
            q: "Which type of gangrene is a form of liquefactive necrosis?",
            a: "Wet gangrene"
        },
        {
            id: "v325",
            q: "Which lesion is the classic example of liquefactive necrosis?",
            a: "Abscess"
        },
        {
            id: "v326",
            q: "Gross appearance of liquefactive necrosis?",
            a: "Liquid, soft, cystic area"
        },
        {
            id: "v327",
            q: "Definition of caseous necrosis?",
            a: "Intermediate form between coagulative and liquefactive necrosis"
        },
        {
            id: "v328",
            q: "Gross appearance of caseous necrosis?",
            a: "Cheese-like, white friable material"
        },
        {
            id: "v329",
            q: "Most common disease showing caseous necrosis?",
            a: "Tuberculosis"
        },
        {
            id: "v330",
            q: "Caseous necrosis is seen in which type of granuloma?",
            a: "Caseating granuloma"
        },
        {
            id: "v331",
            q: "Fungal infections classically producing caseous necrosis?",
            a: "• Histoplasmosis\n• Blastomycosis"
        },
        {
            id: "v332",
            q: "Types of fat necrosis?",
            a: "• Traumatic\n• Enzymatic"
        },
        {
            id: "v333",
            q: "Classic example of traumatic fat necrosis?",
            a: "Fat necrosis of breast"
        },
        {
            id: "v334",
            q: "Why is traumatic fat necrosis of breast clinically important?",
            a: "May mimic breast carcinoma"
        },
        {
            id: "v335",
            q: "Classic sites of enzymatic fat necrosis?",
            a: "• Omentum\n• Mesentery\n• Peripancreatic fat"
        },
        {
            id: "v336",
            q: "Which disease classically causes enzymatic fat necrosis?",
            a: "Acute pancreatitis"
        },
        {
            id: "v337",
            q: "Gross appearance of fat necrosis?",
            a: "Chalky white deposits"
        },
        {
            id: "v338",
            q: "What produces chalky white deposits in fat necrosis?",
            a: "Saponification due to binding of fatty acids with calcium"
        },
        {
            id: "v339",
            q: "What is fibrinoid necrosis?",
            a: "Necrosis with deposition of fibrin-like eosinophilic material in vessel wall"
        },
        {
            id: "v340",
            q: "Mechanism of fibrinoid necrosis?",
            a: "Immune complex deposition in blood vessels"
        },
        {
            id: "v341",
            q: "Which type of hypersensitivity reaction causes fibrinoid necrosis?",
            a: "Type III hypersensitivity"
        },
        {
            id: "v342",
            q: "Pathognomonic lesion of rheumatic heart disease showing fibrinoid necrosis?",
            a: "Aschoff body"
        },
        {
            id: "v343",
            q: "Which vasculitis classically shows fibrinoid necrosis?",
            a: "Polyarteritis nodosa"
        },
        {
            id: "v344",
            q: "Which vascular lesion in malignant hypertension is associated with fibrinoid necrosis?",
            a: "Onion-skinning of arterioles"
        },
        {
            id: "v345",
            q: "Definition of gangrenous necrosis?",
            a: "Clinical term for ischemic necrosis of a limb or bowel"
        },
        {
            id: "v346",
            q: "Most common cause of gangrene?",
            a: "Ischemia"
        },
        {
            id: "v347",
            q: "Dry gangrene corresponds to which histologic type of necrosis?",
            a: "Coagulative necrosis"
        },
        {
            id: "v348",
            q: "Wet gangrene corresponds to which histologic type of necrosis?",
            a: "Liquefactive necrosis"
        },
        {
            id: "v349",
            q: "Definition of apoptosis?",
            a: "Genetically programmed death of a single cell"
        },
        {
            id: "v350",
            q: "Apoptosis is death of how many cells?",
            a: "Single cell"
        },
        {
            id: "v351",
            q: "Is apoptosis physiologic or pathologic?",
            a: "Can be both physiologic and pathologic"
        },
        {
            id: "v352",
            q: "Organism most commonly used for apoptosis studies?",
            a: "Caenorhabditis elegans"
        },
        {
            id: "v353",
            q: "Classic embryologic example of physiologic apoptosis?",
            a: "Separation of fingers during limb development"
        },
        {
            id: "v354",
            q: "Physiologic role of apoptosis in menstrual cycle?",
            a: "Endometrial shedding"
        },
        {
            id: "v355",
            q: "What happens to self-reactive lymphocytes by apoptosis?",
            a: "They are eliminated"
        },
        {
            id: "v356",
            q: "Pathologic causes of apoptosis?",
            a: "• DNA damage\n• Misfolded proteins\n• Viral infections"
        },
        {
            id: "v357",
            q: "Which viral hepatitis shows apoptotic Councilman bodies?",
            a: "Hepatitis B"
        },
        {
            id: "v358",
            q: "Earliest morphologic feature of apoptosis?",
            a: "Cell shrinkage"
        },
        {
            id: "v359",
            q: "Most characteristic nuclear feature of apoptosis?",
            a: "Condensation of chromatin"
        },
        {
            id: "v360",
            q: "What are apoptotic bodies?",
            a: "Membrane-bound fragments containing cytoplasm and organelles"
        },
        {
            id: "v361",
            q: "Is plasma membrane intact in apoptosis?",
            a: "Yes"
        },
        {
            id: "v362",
            q: "Why is there no inflammation in apoptosis?",
            a: "Cell fragments remain membrane-bound and are rapidly phagocytosed"
        },
        {
            id: "v363",
            q: "Most important organelle affected in apoptosis?",
            a: "Mitochondria"
        },
        {
            id: "v364",
            q: "Two major pathways of apoptosis?",
            a: "• Intrinsic (mitochondrial)\n• Extrinsic (death receptor)"
        },
        {
            id: "v365",
            q: "Which apoptotic pathway accounts for 90% of apoptosis?",
            a: "Intrinsic mitochondrial pathway"
        },
        {
            id: "v366",
            q: "Which apoptotic pathway is mediated by Fas receptor?",
            a: "Extrinsic pathway"
        },
        {
            id: "v367",
            q: "Main anti-apoptotic BCL family proteins?",
            a: "• BCL-2\n• BCL-XL\n• MCL-1"
        },
        {
            id: "v368",
            q: "Function of BCL-2 family anti-apoptotic proteins?",
            a: "Prevent release of cytochrome c from mitochondria"
        },
        {
            id: "v369",
            q: "Main pro-apoptotic proteins?",
            a: "• BAX\n• BAK"
        },
        {
            id: "v370",
            q: "Function of BAX and BAK?",
            a: "Create channels in mitochondrial membrane to release cytochrome c"
        },
        {
            id: "v371",
            q: "Which mitochondrial molecule triggers intrinsic apoptosis?",
            a: "Cytochrome c"
        },
        {
            id: "v372",
            q: "Where is cytochrome c normally located?",
            a: "Intermembrane space of mitochondria"
        },
        {
            id: "v373",
            q: "What complex is formed after release of cytochrome c?",
            a: "Apoptosome"
        },
        {
            id: "v374",
            q: "Which initiator caspase is activated by apoptosome?",
            a: "Caspase 9"
        },
        {
            id: "v375",
            q: "Which initiator caspase is activated in Fas-mediated apoptosis?",
            a: "Caspase 8"
        },
        {
            id: "v376",
            q: "Executioner caspases?",
            a: "• Caspase 3\n• Caspase 6\n• Caspase 7"
        },
        {
            id: "v377",
            q: "Function of executioner caspases?",
            a: "Degrade cellular proteins and activate endonucleases"
        },
        {
            id: "v378",
            q: "Which enzyme fragments DNA in apoptosis?",
            a: "Endonuclease"
        },
        {
            id: "v379",
            q: "Which phospholipid becomes exposed on outer membrane in apoptosis?",
            a: "Phosphatidylserine"
        },
        {
            id: "v380",
            q: "Which marker binds phosphatidylserine on apoptotic cells?",
            a: "Annexin V"
        },
        {
            id: "v381",
            q: "Which cells remove apoptotic bodies?",
            a: "Macrophages"
        },
        {
            id: "v382",
            q: "What is efferocytosis?",
            a: "Phagocytosis of apoptotic bodies by macrophages"
        },
        {
            id: "v383",
            q: "Cell size in necrosis vs apoptosis?",
            a: "Necrosis: increased cell size\nApoptosis: decreased cell size"
        },
        {
            id: "v384",
            q: "Cell membrane in necrosis vs apoptosis?",
            a: "Necrosis: disrupted membrane\nApoptosis: intact membrane"
        },
        {
            id: "v385",
            q: "Inflammation in necrosis vs apoptosis?",
            a: "Necrosis: present\nApoptosis: absent"
        },
        {
            id: "v386",
            q: "DNA electrophoresis pattern in apoptosis?",
            a: "Step-ladder pattern"
        },
        {
            id: "v387",
            q: "DNA electrophoresis pattern in necrosis?",
            a: "Smear pattern"
        },
        {
            id: "v388",
            q: "Definition of necroptosis?",
            a: "Programmed necrosis that begins like apoptosis but ends as necrosis"
        },
        {
            id: "v389",
            q: "Is necroptosis caspase-dependent or caspase-independent?",
            a: "Caspase-independent"
        },
        {
            id: "v390",
            q: "Major mediator of necroptosis?",
            a: "RIPK1 and RIPK3"
        },
        {
            id: "v391",
            q: "Morphology of necroptosis resembles which type of cell death?",
            a: "Necrosis"
        },
        {
            id: "v392",
            q: "Examples of necroptosis?",
            a: "• Acute pancreatitis\n• Acute steatohepatitis\n• Neurodegenerative disorders"
        },
        {
            id: "v393",
            q: "Definition of ferroptosis?",
            a: "Cell death due to iron-dependent lipid peroxidation"
        },
        {
            id: "v394",
            q: "What is the essential trigger for ferroptosis?",
            a: "Increased intracellular iron"
        },
        {
            id: "v395",
            q: "Mechanism of ferroptosis?",
            a: "Iron → free radicals → lipid peroxidation → membrane damage"
        },
        {
            id: "v396",
            q: "Examples where ferroptosis is important?",
            a: "• Stroke\n• Cancer\n• Neurodegenerative disorders"
        },
        {
            id: "v397",
            q: "Definition of pyroptosis?",
            a: "Inflammatory programmed cell death associated with IL-1 release"
        },
        {
            id: "v398",
            q: "Which cytokine is responsible for pyroptosis-associated fever?",
            a: "IL-1"
        },
        {
            id: "v399",
            q: "What initiates pyroptosis?",
            a: "Microbial toxins recognized by NOD-like receptors"
        },
        {
            id: "v400",
            q: "Which caspase is classically activated in pyroptosis?",
            a: "Inflammatory caspase-1"
        },
        {
            id: "v401",
            q: "Definition of autophagy?",
            a: "Self-digestion of cellular organelles to survive nutrient deprivation"
        },
        {
            id: "v402",
            q: "Main purpose of autophagy?",
            a: "Recycling of intracellular components during starvation"
        },
        {
            id: "v403",
            q: "Which organelle initiates autophagy?",
            a: "Endoplasmic reticulum"
        },
        {
            id: "v404",
            q: "Which marker is used to identify autophagy?",
            a: "LC3"
        },
        {
            id: "v405",
            q: "What happens after autophagosome fuses with lysosome?",
            a: "Cellular contents are degraded by lysosomal hydrolases"
        },
        {
            id: "v406",
            q: "Mutation of which autophagy gene is associated with Crohn disease?",
            a: "ATG16L1"
        }
    ]
},
{
    subject: "Pathology",
    chapter: "General Pathology",
    id: "path-accumulations-005",
    name: "Intracellular Accumulations and Cellular Aging",
    cards: [
        {
            id: "v420",
            q: "Major types of intracellular accumulations?",
            a: "• Glycogen\n• Lipids\n• Proteins\n• Hyaline\n• Calcium\n• Pigments\n• Water"
        },
        {
            id: "v421",
            q: "Three important clinical settings causing intracellular glycogen accumulation?",
            a: "• Glycogen storage disorders\n• Clear cell renal cell carcinoma\n• Armani-Ebstein lesion in diabetic nephropathy"
        },
        {
            id: "v422",
            q: "What is Armani-Ebstein lesion?",
            a: "Glycogen accumulation in proximal convoluted tubules seen in severe diabetic nephropathy"
        },
        {
            id: "v423",
            q: "Microscopic appearance of glycogen accumulation?",
            a: "Clear cytoplasmic vacuoles"
        },
        {
            id: "v424",
            q: "Why does glycogen appear as clear vacuoles on H&E?",
            a: "Glycogen dissolves during tissue processing in aqueous fixatives"
        },
        {
            id: "v425",
            q: "Best stain for intracellular glycogen?",
            a: "Periodic acid-Schiff (PAS)"
        },
        {
            id: "v426",
            q: "Color of PAS-positive material?",
            a: "Bright pink to magenta"
        },
        {
            id: "v427",
            q: "Important PAS-positive structures and organisms?",
            a: "• Glycogen\n• Fungi\n• Lymphoblasts\n• Basement membrane"
        },
        {
            id: "v428",
            q: "Which tumor classically shows abundant intracellular glycogen giving clear cytoplasm?",
            a: "Clear cell renal cell carcinoma"
        },
        {
            id: "v429",
            q: "Two major forms of intracellular lipid accumulation?",
            a: "• Triglycerides\n• Cholesterol esters"
        },
        {
            id: "v430",
            q: "Triglyceride accumulation in liver is called?",
            a: "Steatosis or fatty liver"
        },
        {
            id: "v431",
            q: "Steatosis may be of which two morphologic types?",
            a: "• Microvesicular\n• Macrovesicular"
        },
        {
            id: "v432",
            q: "Microscopic appearance of intracellular lipid accumulation?",
            a: "Clear cytoplasmic vacuoles"
        },
        {
            id: "v433",
            q: "Best stains for intracellular lipid?",
            a: "• Oil Red O\n• Sudan Black"
        },
        {
            id: "v434",
            q: "Which intracellular lipid accumulates in atherosclerosis?",
            a: "Cholesterol esters"
        },
        {
            id: "v435",
            q: "What is the microscopic appearance of intracellular protein accumulation?",
            a: "Eosinophilic, granular cytoplasm"
        },
        {
            id: "v436",
            q: "What are Russell bodies?",
            a: "Intracytoplasmic accumulations of immunoglobulins in plasma cells"
        },
        {
            id: "v437",
            q: "Which disease classically shows Russell bodies?",
            a: "Multiple myeloma"
        },
        {
            id: "v438",
            q: "What are Dutcher bodies?",
            a: "Intranuclear inclusions formed by immunoglobulin accumulation"
        },
        {
            id: "v439",
            q: "Which renal lesion shows reabsorption droplets due to protein accumulation?",
            a: "Protein reabsorption droplets in proximal tubules"
        },
        {
            id: "v440",
            q: "Definition of intracellular hyaline change?",
            a: "Homogeneous, pink, eosinophilic intracellular material"
        },
        {
            id: "v441",
            q: "Microscopic appearance of hyaline material?",
            a: "Homogeneous, smooth, eosinophilic cytoplasm"
        },
        {
            id: "v442",
            q: "Most important example of intracellular hyaline accumulation in liver?",
            a: "Mallory-Denk bodies"
        },
        {
            id: "v443",
            q: "Composition of Mallory-Denk bodies?",
            a: "Intermediate filaments composed of cytokeratin"
        },
        {
            id: "v444",
            q: "Classic disease associated with Mallory-Denk bodies?",
            a: "Alcoholic liver disease"
        },
        {
            id: "v445",
            q: "Other diseases associated with Mallory-Denk bodies?",
            a: "• Non-alcoholic steatohepatitis\n• Wilson disease\n• Indian childhood cirrhosis\n• Hepatocellular carcinoma"
        },
        {
            id: "v446",
            q: "What is pathologic calcification?",
            a: "Deposition of calcium salts with small amounts of other minerals in tissues"
        },
        {
            id: "v447",
            q: "Which organelle shows the earliest deposition of calcium in calcification?",
            a: "Mitochondria"
        },
        {
            id: "v448",
            q: "Two major types of pathologic calcification?",
            a: "• Dystrophic calcification\n• Metastatic calcification"
        },
        {
            id: "v449",
            q: "Definition of dystrophic calcification?",
            a: "Calcium deposition in dead or damaged tissue with normal serum calcium"
        },
        {
            id: "v450",
            q: "Serum calcium level in dystrophic calcification?",
            a: "Normal"
        },
        {
            id: "v451",
            q: "Examples of dystrophic calcification?",
            a: "• Rheumatic heart vegetations\n• Atheromatous plaques\n• Tuberculous lymph nodes\n• Dead parasites"
        },
        {
            id: "v452",
            q: "What type of calcification occurs in Monckeberg medial calcific sclerosis?",
            a: "Dystrophic calcification"
        },
        {
            id: "v453",
            q: "Where is calcium deposited in Monckeberg medial calcific sclerosis?",
            a: "Tunica media of muscular arteries"
        },
        {
            id: "v454",
            q: "Microscopic appearance of calcium deposits?",
            a: "Densely basophilic, gritty deposits"
        },
        {
            id: "v455",
            q: "Best stains for calcium?",
            a: "• von Kossa stain\n• Alizarin Red S"
        },
        {
            id: "v456",
            q: "Definition of metastatic calcification?",
            a: "Calcium deposition in normal living tissues due to hypercalcemia"
        },
        {
            id: "v457",
            q: "Serum calcium level in metastatic calcification?",
            a: "Increased"
        },
        {
            id: "v458",
            q: "Most commonly affected organs in metastatic calcification?",
            a: "• Lung alveoli\n• Gastric mucosa"
        },
        {
            id: "v459",
            q: "Important causes of metastatic calcification?",
            a: "• Hyperparathyroidism\n• Multiple myeloma\n• Chronic kidney disease\n• Sarcoidosis\n• Vitamin D excess\n• Milk-alkali syndrome"
        },
        {
            id: "v460",
            q: "What are psammoma bodies?",
            a: "Concentrically laminated foci of dystrophic calcification"
        },
        {
            id: "v461",
            q: "Microscopic appearance of psammoma bodies?",
            a: "Round calcified structures with concentric lamination"
        },
        {
            id: "v462",
            q: "Tumors classically associated with psammoma bodies?",
            a: "• Papillary carcinoma thyroid\n• Papillary renal cell carcinoma\n• Serous cystadenocarcinoma ovary\n• Meningioma"
        },
        {
            id: "v463",
            q: "Which pituitary tumor may show psammoma bodies?",
            a: "Prolactinoma"
        },
        {
            id: "v464",
            q: "Two major categories of pigments?",
            a: "• Exogenous\n• Endogenous"
        },
        {
            id: "v465",
            q: "Examples of exogenous pigments?",
            a: "• Anthracosis\n• Tattoo pigment"
        },
        {
            id: "v466",
            q: "What is anthracosis?",
            a: "Black carbon pigment accumulation in lung macrophages"
        },
        {
            id: "v467",
            q: "Important endogenous pigments?",
            a: "• Lipofuscin\n• Hemosiderin\n• Melanin"
        },
        {
            id: "v468",
            q: "What is lipofuscin?",
            a: "Wear-and-tear pigment produced by lipid peroxidation"
        },
        {
            id: "v469",
            q: "Lipofuscin is a marker of what type of injury?",
            a: "Free radical injury"
        },
        {
            id: "v470",
            q: "Microscopic appearance of lipofuscin?",
            a: "Perinuclear yellow-brown granules"
        },
        {
            id: "v471",
            q: "Clinical settings showing lipofuscin accumulation?",
            a: "• Senile atrophy of liver\n• Brown atrophy of heart"
        },
        {
            id: "v472",
            q: "What is brown atrophy of heart?",
            a: "Cardiac atrophy with lipofuscin accumulation"
        },
        {
            id: "v473",
            q: "Special stain for lipofuscin?",
            a: "Oil Red O"
        },
        {
            id: "v474",
            q: "What is hemosiderin?",
            a: "Golden yellow-brown intracellular iron storage pigment"
        },
        {
            id: "v475",
            q: "Clinical conditions associated with hemosiderin deposition?",
            a: "• Hemochromatosis\n• Repeated blood transfusions\n• Bruising"
        },
        {
            id: "v476",
            q: "Classic triad of hemochromatosis?",
            a: "• Bronze skin pigmentation\n• Diabetes mellitus\n• Cirrhosis"
        },
        {
            id: "v477",
            q: "Microscopic appearance of hemosiderin?",
            a: "Golden yellow to brown coarse granules"
        },
        {
            id: "v478",
            q: "Best stain for hemosiderin?",
            a: "Prussian blue (Perls stain)"
        },
        {
            id: "v479",
            q: "Mechanism of Prussian blue stain?",
            a: "Potassium ferrocyanide reacts with ferric iron to form blue ferric ferrocyanide"
        },
        {
            id: "v480",
            q: "How can lipofuscin be differentiated from hemosiderin?",
            a: "Hemosiderin stains blue with Prussian blue; lipofuscin does not"
        },
        {
            id: "v481",
            q: "Which hematology cell is highlighted by supravital stain?",
            a: "Reticulocyte"
        },
        {
            id: "v482",
            q: "What is melanin derived from?",
            a: "Tyrosine"
        },
        {
            id: "v483",
            q: "Microscopic appearance of melanin?",
            a: "Black granular pigment"
        },
        {
            id: "v484",
            q: "Best stain for melanin?",
            a: "DOPA reaction"
        },
        {
            id: "v485",
            q: "Other stain used for melanin?",
            a: "Masson-Fontana stain"
        },
        {
            id: "v486",
            q: "Which malignancy is classically associated with melanin accumulation?",
            a: "Malignant melanoma"
        },
        {
            id: "v487",
            q: "Important immunohistochemical markers for malignant melanoma?",
            a: "• HMB-45\n• Melan-A"
        },
        {
            id: "v488",
            q: "Microscopic appearance of glycogen vs lipid accumulation?",
            a: "Both appear as clear vacuoles"
        },
        {
            id: "v489",
            q: "How can glycogen be differentiated from lipid on special stain?",
            a: "Glycogen is PAS positive; lipid is Oil Red O / Sudan Black positive"
        },
        {
            id: "v490",
            q: "Microscopic appearance of intracellular protein accumulation?",
            a: "Eosinophilic granular cytoplasm"
        },
        {
            id: "v491",
            q: "Microscopic appearance of intracellular hyaline accumulation?",
            a: "Smooth eosinophilic cytoplasm"
        },
        {
            id: "v492",
            q: "Microscopic appearance of calcium deposition?",
            a: "Basophilic gritty deposits"
        },
        {
            id: "v493",
            q: "What is Werner syndrome?",
            a: "Syndrome of premature aging due to defective DNA helicase"
        },
        {
            id: "v494",
            q: "What is the Hayflick limit?",
            a: "A somatic cell can divide approximately 60-70 times"
        },
        {
            id: "v495",
            q: "What happens to telomeres with repeated cell division?",
            a: "Progressive shortening"
        },
        {
            id: "v496",
            q: "Function of telomeres?",
            a: "Prevent chromosome breakage and fusion"
        },
        {
            id: "v497",
            q: "Telomere nucleotide sequence?",
            a: "TTAGGG"
        },
        {
            id: "v498",
            q: "Effect of telomere shortening?",
            a: "Cellular aging"
        },
        {
            id: "v499",
            q: "What is telomerase?",
            a: "Enzyme that synthesizes telomeres and delays cellular aging"
        },
        {
            id: "v500",
            q: "Why is telomerase called the immortality gene?",
            a: "Because it maintains telomere length and allows continued cell division"
        },
        {
            id: "v501",
            q: "Which cells have high telomerase activity?",
            a: "• Germ cells\n• Stem cells\n• Cancer cells"
        },
        {
            id: "v502",
            q: "Which cells have low or absent telomerase activity?",
            a: "Somatic cells"
        },
        {
            id: "v503",
            q: "What are sirtuins?",
            a: "NAD-dependent histone deacetylases involved in longevity"
        },
        {
            id: "v504",
            q: "Major functions of sirtuins?",
            a: "• Increase insulin sensitivity\n• Reduce free radical damage\n• Delay cellular aging"
        },
        {
            id: "v505",
            q: "Clinical conditions in which sirtuins play an important role?",
            a: "• Aging\n• Cancer\n• Diabetes mellitus"
        },
        {
            id: "v506",
            q: "What increases sirtuin levels?",
            a: "• Caloric restriction\n• Red wine consumption"
        },
        {
            id: "v507",
            q: "Most common stain used in histopathology?",
            a: "Hematoxylin and eosin (H&E)"
        },
        {
            id: "v508",
            q: "Most common stain used in hematology?",
            a: "Leishman stain"
        },
        {
            id: "v509",
            q: "Best stain for lymphoblasts?",
            a: "PAS"
        },
        {
            id: "v510",
            q: "Best stain for myeloblasts?",
            a: "Sudan Black or myeloperoxidase"
        },
        {
            id: "v511",
            q: "Best stain for monoblasts?",
            a: "Non-specific esterase (NSE)"
        },
        {
            id: "v512",
            q: "Best stain for hairy cell leukemia?",
            a: "TRAP"
        },
        {
            id: "v513",
            q: "Best stain for copper in Wilson disease?",
            a: "Rhodanine stain"
        },
        {
            id: "v514",
            q: "Best stain for mast cells?",
            a: "Toluidine blue"
        },
        {
            id: "v515",
            q: "Best stains for mucin in Barrett esophagus?",
            a: "• Mucicarmine\n• Alcian blue"
        },
        {
            id: "v516",
            q: "Best stain for reticulin fibers in liver or bone marrow fibrosis?",
            a: "Silver stain"
        },
        {
            id: "v517",
            q: "Best stain for collagen?",
            a: "Masson trichrome"
        },
        {
            id: "v518",
            q: "Best stain for H. pylori?",
            a: "Warthin-Starry silver stain"
        },
        {
            id: "v519",
            q: "Best stain for Cryptococcus?",
            a: "India ink"
        },
        {
            id: "v520",
            q: "Best stain for fungi?",
            a: "Silver methenamine"
        },
        {
            id: "v521",
            q: "Best stain for amyloid?",
            a: "Congo red"
        }
    ]
}
    
];