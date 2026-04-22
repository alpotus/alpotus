/**
 * ALPOTUS MEDEDGE v2.1 - MASTER TITAN REGISTRY
 * All 19 Subjects & Standard Textbook Chapters
 */

window.AlpotusRegistry = {
    "anatomy": {
        "title": "Anatomy", "icon": "🦴", "phase": "1st Prof",
        "chapters": [
            { "name": "General Anatomy", "topics": [{ "id": "intro-anatomy", "title": "Terminology & Basics", "file": "topics/anatomy/general.html" }] },
            { "name": "Upper Limb", "topics": [{ "id": "brachial-plexus", "title": "Brachial Plexus", "file": "topics/anatomy/brachial.html" }] },
            { "name": "Lower Limb", "topics": [] },
            { "name": "Thorax", "topics": [{ "id": "coronary-circulation", "title": "Coronary Arteries", "file": "topics/anatomy/coronary.html" }] },
            { "name": "Abdomen & Pelvis", "topics": [] },
            { "name": "Head & Neck", "topics": [] },
            { "name": "Neuroanatomy", "topics": [] },
            { "name": "Embryology", "topics": [] },
            { "name": "Histology", "topics": [] }
        ]
    },

    "physiology": {
        "title": "Physiology", "icon": "🫁", "phase": "1st Prof",
        "chapters": [
            { "name": "General Physiology", "topics": [] },
            { "name": "Blood", "topics": [] },
            { "name": "Nerve & Muscle", "topics": [{ "id": "action-potential", "title": "Action Potential", "file": "topics/physiology/action-potential.html" }] },
            { "name": "Cardiovascular System", "topics": [] },
            { "name": "Respiratory System", "topics": [] },
            { "name": "Renal Physiology", "topics": [{ "id": "gfr", "title": "Glomerular Filtration Rate", "file": "topics/physiology/gfr.html" }] },
            { "name": "Gastrointestinal System", "topics": [] },
            { "name": "Endocrine System", "topics": [] },
            { "name": "Central Nervous System", "topics": [] }
        ]
    },

    "biochemistry": {
        "title": "Biochemistry", "icon": "🧪", "phase": "1st Prof",
        "chapters": [
            { "name": "Molecular Biology", "topics": [{ "id": "dna-replication", "title": "DNA Replication", "file": "topics/biochemistry/dna.html" }] },
            { "name": "Carbohydrate Metabolism", "topics": [{ "id": "glycolysis", "title": "Glycolysis", "file": "topics/biochemistry/glycolysis.html" }] },
            { "name": "Lipid Metabolism", "topics": [] },
            { "name": "Protein Metabolism", "topics": [] },
            { "name": "Enzymology", "topics": [] },
            { "name": "Clinical Biochemistry", "topics": [] }
        ]
    },

    "pathology": {
        "title": "Pathology", "icon": "🔬", "phase": "2nd Prof",
        "chapters": [
            { "name": "General Pathology", "topics": [{ "id": "cell-injury", "title": "Cell Injury & Death", "file": "topics/pathology/cell-injury.html" }] },
            { "name": "Hematology", "topics": [] },
            { "name": "Cardiovascular Pathology", "topics": [{ "id": "atherosclerosis", "title": "atherosclerosis",
             "file": "topics/pathology/atherosclerosis.html" }] },
            { "name": "Respiratory Pathology", "topics": [] },
            { "name": "Gastrointestinal Pathology", "topics": [] },
            { "name": "Renal Pathology", "topics": [] }
        ]
    },

    "pharmacology": {
        "title": "Pharmacology", "icon": "💊", "phase": "2nd Prof",
        "chapters": [
            { "name": "General Pharmacology", "topics": [{ "id": "routes", "title": "Routes of Administration", "file": "topics/pharmacology/routes.html" }] },
            { "name": "Autonomic Nervous System", "topics": [{ "id": "adrenergic", "title": "Adrenergic System", "file": "topics/pharmacology/adrenergic.html" }] },
            { "name": "Autacoids & Respiratory", "topics": [] },
            { "name": "CVS", "topics": [
                { "id": "antihypertensive-drugs", "title": "Antihypertensive Drugs", "file": "topics/pharmacology/antihypertensive.html" },
                 { "id": "antihypertensive-drugs-arb", "title": "Antihypertensive Drugs- ARB", "file": "topics/pharmacology/antihypertensive-arb.html" },
                  { "id": "antihypertensive-drugs-diuretics", "title": "Antihypertensive Drugs- Diuretics and Ca channel blockers", "file": "topics/pharmacology/antihypertensive-diuretics.html" },
                   { "id": "treatment-for-hypertension-and-hypertension-crisis", "title": "Treatment for Hypertension and Hypertension crisis ", "file": "topics/pharmacology/treatmentfor-htn.html" },
                     { "id": "antianginal-drugs", "title": "Antianginal Drugs", "file": "topics/pharmacology/angina.html" },
                       { "id": "beta-blockers-and-calcium-channel-blockers", "title": "Beta blockers and calcium channel blockers ", "file": "topics/pharmacology/betaandca.html" },
            ] },
            { "name": "CNS Pharmacology", "topics":
             [{ "id": "local-anesthetics", "title": "Local Anaesthetics", "file": "topics/pharmacology/local-anesthetics.html" },
             { "id": "techniques-anesthetics", "title": "Techniques for Local Anaesthetics", "file": "topics/pharmacology/technique-localanesthetics.html" },
             
             { "id": "antiepileptics", "title": "Anti Epileptics", "file": "topics/pharmacology/antiepileptics1.html" }
         ,
           { "id": "antiepileptics-part-2", "title": "Anti Epileptics Part 2", "file": "topics/pharmacology/antiepileptics2.html" }
         ,
           { "id": "antiepileptics-interactions", "title": "Anti Epileptics Interactions", "file": "topics/pharmacology/antiepileptics3.html" }
         ,
         { "id": "antidepressants", "title": "Antidepressants", "file": "topics/pharmacology/antidepressants.html" },
         { "id": "compare-antidepressants", "title": "Comparison of Antidepressants", "file": "topics/pharmacology/compare-antidepressants.html" },
             
             { "id": "antiparkinsonian-drugs", "title": "ANTIPARKINSONIAN DRUGS", "file": "topics/pharmacology/antiparkinsonian-drugs.html" }
             
             
             ] },
             
             
             
             
             
            { "name": "Chemotherapy", "topics": [{ "id": "beta-lactams", "title": "Beta Lactams Antibiotics ", "file": "topics/pharmacology/beta-lactams.html" },
            { "id": "cephalosporins", "title": "Cephalosporins  ", "file": "topics/pharmacology/cephalosporins.html" },
             { "id": "aminoglycosides", "title": "Aminoglycosides  ", "file": "topics/pharmacology/aminoglycosides.html" },
                { "id": "antituberculosis-drugs", "title": "Antituberculosis Drugs", "file": "topics/pharmacology/tb.html" }] }
        ]
    },

    "microbiology": {
        "title": "Microbiology", "icon": "🦠", "phase": "2nd Prof",
        "chapters": [
            { "name": "General Microbiology", "topics": [] },
            { "name": "Immunology", "topics": [] },
            { "name": "Systemic Bacteriology", "topics": [{ "id": "staph", "title": "Staphylococcus", "file": "topics/microbiology/staph.html" }] },
            { "name": "Virology", "topics": [] },
            { "name": "Mycology", "topics": [] },
            { "name": "Parasitology", "topics": [] }
        ]
    },

    "fml": {
        "title": "Forensic Med", "icon": "⚖️", "phase": "2nd Prof",
        "chapters": [
            { "name": "Legal Procedures", "topics": [] },
            { "name": "Medical Thanatology", "topics": [] },
            { "name": "Traumatology", "topics": [] },
            { "name": "Toxicology", "topics": [] }
        ]
    },

    "spm": {
        "title": "Community Med", "icon": "🏥", "phase": "3rd Prof",
        "chapters": [
            { "name": "Epidemiology Concepts", "topics": [] },
            { "name": "Screening for Disease", "topics": [] },
            { "name": "Communicable Diseases", "topics": [] },
            { "name": "Health Programs", "topics": [] }
        ]
    },

    "ent": {
        "title": "ENT", "icon": "👂", "phase": "3rd Prof",
        "chapters": [
            { "name": "Diseases of Ear", "topics": [] },
            { "name": "Diseases of Nose", "topics": [] },
            { "name": "Diseases of Throat", "topics": [] }
        ]
    },

    "ophthalmology": {
        "title": "Ophthalmology", "icon": "👁️", "phase": "3rd Prof",
        "chapters": [
            { "name": "Conjunctiva & Cornea", "topics": [] },
            { "name": "Lens & Cataract", "topics": [] },
            { "name": "Glaucoma", "topics": [] },
            { "name": "Retina", "topics": [] }
        ]
    },

    "medicine": {
        "title": "Medicine", "icon": "🩺", "phase": "Final Prof",
        "chapters": [
            { "name": "Cardiology", "topics": [] },
            { "name": "Pulmonology", "topics": [] },
            { "name": "Neurology", "topics": [] },
            { "name": "Endocrinology", "topics": [] },
            { "name": "Infectious Diseases", "topics": [] }
        ]
    },

    "surgery": {
        "title": "Surgery", "icon": "🔪", "phase": "Final Prof",
        "chapters": [
            { "name": "General Surgery", "topics": [] },
            { "name": "Trauma & Emergency", "topics": [] },
            { "name": "Abdominal Surgery", "topics": [] },
            { "name": "Urology", "topics": [] },
            { "name": "Neurosurgery", "topics": [] }
        ]
    },

    "obg": {
        "title": "OBG", "icon": "🤰", "phase": "Final Prof",
        "chapters": [
            { "name": "Obstetrics", "topics": [] },
            { "name": "Gynecology", "topics": [] },
            { "name": "Contraception", "topics": [] }
        ]
    },

    "pediatrics": {
        "title": "Pediatrics", "icon": "👶", "phase": "Final Prof",
        "chapters": [
            { "name": "Growth & Development", "topics": [] },
            { "name": "Neonatology", "topics": [] },
            { "name": "Nutrition", "topics": [] },
            { "name": "Systemic Disorders", "topics": [] }
        ]
    },

    "orthopedics": {
        "title": "Orthopedics", "icon": "💪", "phase": "Minor",
        "chapters": [
            { "name": "Traumatology", "topics": [] },
            { "name": "Infections & Tumors", "topics": [] },
            { "name": "Metabolic Bone Diseases", "topics": [] }
        ]
    },

    "radiology": {
        "title": "Radiology", "icon": "☢️", "phase": "Minor",
        "chapters": [
            { "name": "Basic Physics", "topics": [] },
            { "name": "Systemic Imaging", "topics": [] }
        ]
    },

    "dermatology": {
        "title": "Dermatology", "icon": "🧴", "phase": "Minor",
        "chapters": [
            { "name": "Skin Infections", "topics": [] },
            { "name": "Inflammatory Dermatosis", "topics": [] },
            { "name": "Leprosy & STD", "topics": [] }
        ]
    },

    "psychiatry": {
        "title": "Psychiatry", "icon": "🧠", "phase": "Minor",
        "chapters": [
            { "name": "Psychotic Disorders", "topics": [] },
            { "name": "Neurotic Disorders", "topics": [] },
            { "name": "Treatment Modalities", "topics": [] }
        ]
    },

    "anesthesia": {
        "title": "Anesthesia", "icon": "😴", "phase": "Minor",
        "chapters": [
            { "name": "Pharmacology", "topics": [] },
            { "name": "Regional & General", "topics": [] },
            { "name": "Critical Care & CPR", "topics": [] }
        ]
    }
};

console.log("Alpotus Registry: 19 Subjects & Chapters Registered Successfully.");