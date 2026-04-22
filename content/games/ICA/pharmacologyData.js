/**
 * PHARMAMASTER v3.1 DATA SOURCE
 */
const pharmacologyData = [
    {
        id: "aspirin",
        name: "Aspirin",
        chapter: "NSAIDs",
        classification: "Salicylates",
        indications: ["Myocardial Infarction Prophylaxis", "Rheumatoid Arthritis", "Acute Pain", "Fever Reduction"],
        side_effects: ["Reye Syndrome", "Gastric Ulceration", "Tinnitus", "Bronchospasm"],
        contraindications: ["Viral Infections in Children", "Active Peptic Ulcer", "Bleeding Disorders", "Pregnancy"],
        scenario: "A 10-year-old child with a viral fever is given an over-the-counter analgesic. He later develops rapid-onset liver failure and brain swelling.",
        scenario_options: ["Aspirin", "Paracetamol", "Ibuprofen", "Naproxen"]
    },
    {
        id: "digoxin",
        name: "Digoxin",
        chapter: "Cardiovascular System",
        classification: "Cardiac Glycosides",
        indications: ["Atrial Fibrillation", "Chronic Heart Failure", "Paroxysmal SVT"],
        side_effects: ["Yellow-Green Halos", "AV Block", "Nausea and Vomiting", "Gynaecomastia"],
        contraindications: ["Hypokalaemia", "Wolff-Parkinson-White Syndrome", "Ventricular Tachycardia", "Heart Block"],
        scenario: "An elderly patient with heart failure complains of nausea and seeing yellow rings around light bulbs. Her ECG shows a significant heart block.",
        scenario_options: ["Digoxin", "Amlodipine", "Lisinopril", "Warfarin"]
    },
    {
        id: "metformin",
        name: "Metformin",
        chapter: "Endocrine System",
        classification: "Biguanides",
        indications: ["Type 2 Diabetes Mellitus", "PCOS", "Gestational Diabetes"],
        side_effects: ["Lactic Acidosis", "Vitamin B12 Deficiency", "Metallic Taste", "Abdominal Distress"],
        contraindications: ["Renal Failure", "Radiocontrast administration", "Chronic Alcoholism", "Liver Disease"],
        scenario: "A diabetic patient scheduled for a CT scan with contrast is told to stop their medication 48 hours prior to the procedure.",
        scenario_options: ["Metformin", "Insulin", "Glipizide", "Pioglitazone"]
    },
    {
        id: "warfarin",
        name: "Warfarin",
        chapter: "Blood",
        classification: "Vitamin K Antagonist",
        indications: ["Prophylaxis of DVT", "Pulmonary Embolism", "Atrial Fibrillation", "Prosthetic Heart Valves"],
        side_effects: ["Skin Necrosis", "Purple Toe Syndrome", "Hemorrhage", "Teratogenicity"],
        contraindications: ["Pregnancy", "Recent Surgery", "Vitamin K Deficiency", "Active Peptic Ulcer"],
        scenario: "A patient starting anticoagulation therapy develops painful, dark blue-purple lesions on his toes shortly after starting a common oral blood thinner.",
        scenario_options: ["Warfarin", "Heparin", "Aspirin", "Clopidogrel"]
    },
    {
        id: "atropine",
        name: "Atropine",
        chapter: "Autonomic Nervous System",
        classification: "Anticholinergics",
        indications: ["Sinus Bradycardia", "Organophosphate Poisoning", "Mydriasis Induction"],
        side_effects: ["Dry Mouth", "Blurred Vision", "Urinary Retention", "Tachycardia"],
        contraindications: ["Narrow Angle Glaucoma", "Prostatic Hypertrophy", "Tachyarrhythmia", "Myasthenia Gravis"],
        scenario: "A farmer is brought to the ER with pinpoint pupils, salivation, and bradycardia after accidental pesticide exposure. What is the immediate treatment?",
        scenario_options: ["Atropine", "Propranolol", "Pilocarpine", "Neostigmine"]
    }
];