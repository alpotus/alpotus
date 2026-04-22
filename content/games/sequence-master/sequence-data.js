const SequenceData = {
    "Microbiology": {
        color: "#a855f7",
        chapters: {
            "Safety & Hygiene": [
                {
                    id: "who-handwash",
                    name: "WHO Hand Wash Technique",
                    steps: [
                        "Wet hands with water",
                        "Apply enough soap to cover all surfaces",
                        "Rub hands palm to palm",
                        "Right palm over left dorsum with interlaced fingers",
                        "Palm to palm with fingers interlaced",
                        "Backs of fingers to opposing palms",
                        "Rotational rubbing of left thumb",
                        "Rotational rubbing of fingertips in right palm",
                        "Rinse hands with water",
                        "Dry hands thoroughly with single use towel",
                        "Use towel to turn off faucet"
                    ],
                    note: "According to the World Health Organization, the entire procedure should take 40-60 seconds. Hand hygiene is the single most important intervention to prevent the spread of antimicrobial resistance and healthcare-associated infections."
                }
            ]
        }
    }
};

const MyAddedSequences = [
    {
    id: "pha-ans-atropine",
    name: "MOA of Atropine (Molecular Pathway)",
    subject: "Pharmacology",
    chapter: "Autonomic Nervous System",
    steps: [
        "Atropine enters the systemic circulation",
        "Reaches Muscarinic receptor sites (M1-M5)",
        "Competitively binds to the Muscarinic receptor",
        "Prevents Acetylcholine from binding to the site",
        "Inhibits G-protein coupled receptor signaling",
        "Decrease in IP3/DAG or cAMP secondary messengers",
        "Inhibition of parasympathetic nerve impulses",
        "Clinical effect: Tachycardia and Mydriasis"
    ],
    note: "Atropine is a tertiary amine belladonna alkaloid. It acts as a competitive, reversible antagonist. Because it is a tertiary amine, it can cross the Blood-Brain Barrier (BBB) in high doses, unlike quaternary compounds like Ipratropium."
},
    
    {
  "id": "mic-cvs-ie-pathogenesis",
  "name": "Pathogenesis of Infective Endocarditis",
  "subject": "Microbiology",
  "chapter": "CVS and Bloodstream Infections",
  "steps": [
    "Predisposing factors such as cardiac defects, intravenous catheterization, or prosthetic valve surgery",
    "Endothelial injury occurs, favoring platelet and fibrin deposition",
    "Formation of NBTE (Nonbacterial Thrombotic Endocarditis) with sterile thrombus formation",
    "Transient bacteremia develops, for example after tooth brushing or invasive procedures",
    "Colonization of the thrombus by bacteria adhering to platelet-fibrin deposits",
    "Vegetation formation with further deposition of platelets, fibrin, bacteria, and inflammatory cells",
    "Persistent bacteremia from infected vegetations",
    "Metastatic spread of bacteria through the bloodstream to distant organs and tissues"
  ],
  "note": "This sequence is highly important because infective endocarditis typically develops on previously damaged endocardium. Remember the classic order for exams: endothelial injury → NBTE → transient bacteremia → colonization → vegetation. Vegetations can lead to persistent bacteremia, septic emboli, infarcts, abscesses, and immune-complex phenomena such as glomerulonephritis."
}
    ,
    
    
  {
  "id": "mic-cvs-arf-pathogenesis",
  "name": "Pathogenesis of Acute Rheumatic Fever",
  "subject": "Microbiology",
  "chapter": "CVS and Bloodstream Infections",
  "steps": [
    "Upper respiratory tract infection caused by Group A Streptococci",
    "Infection is usually due to rheumatogenic M serotypes such as 1, 3, 5, 6, 14, 18, 19, 24, 27, and 29",
    "A genetically susceptible host is present, commonly associated with HLA-DR7 and HLA-DR4",
    "The immune system produces antibodies against streptococcal antigens, especially M protein",
    "Molecular mimicry occurs because streptococcal antigens resemble host tissue antigens",
    "Cross-reactive antibodies attack cardiac, joint, skin, and neural tissues",
    "Antibodies bind to valvular endothelium and myocardial tissue",
    "Inflammation develops in the heart, especially affecting valves, producing pancarditis",
    "Progressive heart valve damage results, especially involving the mitral and aortic valves"
  ],
  "note": "Acute rheumatic fever is a post-streptococcal autoimmune disease, not a direct bacterial infection. The key NEET PG/USMLE concept is molecular mimicry between streptococcal M protein and host tissues. Remember the sequence: streptococcal pharyngitis → anti-M protein antibodies → cross-reaction with cardiac valves and joints → rheumatic fever. Chronic sequelae include rheumatic heart disease with mitral stenosis."
}  
    
    
    
    
    
]; // VOID