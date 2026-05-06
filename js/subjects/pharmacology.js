/**
 * MEDEDGE SUBJECT DATA: PHARMACOLOGY
 * Logic: KDT System-wise Classification
 */

FlashcardsData["Pharmacology"] = {
    icon: "💊",
    chapters: {
        "Cardiovascular System (CVS)": [
            {
                id: "pharm-cvs-antihypertensive",
                name: "Antihypertensive Drugs",
                important: true,
                cards: [

                    {
                        id: "ph1",
                        q: "Classify antihypertensive drugs (3 groups).",
                        a: "Diuretics; Renin–Angiotensin–Aldosterone System (RAAS) inhibitors; Sympathetic inhibitors."
                    },

                    {
                        id: "ph2",
                        q: "Classify diuretics used in hypertension (3 types).",
                        a: "Thiazides; Loop (High ceiling) diuretics; Potassium-sparing diuretics."
                    },

                    {
                        id: "ph3",
                        q: "Thiazide diuretics (3 drugs).",
                        a: "Hydrochlorothiazide, Chlorthalidone, Indapamide.",
                        note: "MOA: Inhibit Na⁺/Cl⁻ cotransporter in DCT → ↑ Na⁺ excretion. AE: Hypokalemia + hyperuricemia."
                    },

                    {
                        id: "ph4",
                        q: "Loop diuretics (1 drug).",
                        a: "Furosemide.",
                        note: "MOA: Inhibits Na⁺/K⁺/2Cl⁻ transporter in TAL. AE: Hypokalemia + ototoxicity."
                    },

                    {
                        id: "ph5",
                        q: "Potassium-sparing diuretics (3 drugs).",
                        a: "Spironolactone, Eplerenone, Amiloride.",
                        note: "MOA: ↓ K⁺ excretion (aldosterone antagonism / ENaC blockade). AE: Hyperkalemia (Spironolactone → gynecomastia)."
                    },

                    {
                        id: "ph6",
                        q: "Classify RAAS inhibitors (3 groups).",
                        a: "ACE inhibitors; Angiotensin receptor blockers (ARBs); Direct renin inhibitors."
                    },

                    {
                        id: "ph7",
                        q: "ACE inhibitors (8 drugs).",
                        a: "Captopril, Enalapril, Lisinopril, Perindopril, Ramipril, Fosinopril, Quinapril, Trandolapril.",
                        note: "MOA: Inhibit ACE → ↓ Angiotensin II + ↑ Bradykinin. AE: Dry cough + angioedema."
                    },

                    {
                        id: "ph8",
                        q: "ARBs (6 drugs).",
                        a: "Candesartan, Valsartan, Telmisartan, Irbesartan, Olmesartan, Losartan.",
                        note: "MOA: Block AT₁ receptor → ↓ Angiotensin II effects. AE: Hyperkalemia (no cough)."
                    },

                    {
                        id: "ph9",
                        q: "Direct renin inhibitor (1 drug).",
                        a: "Aliskiren.",
                        note: "MOA: Inhibits renin → ↓ Angiotensin I formation. AE: Hyperkalemia."
                    },

                    {
                        id: "ph10",
                        q: "Classify sympathetic inhibitors (4 groups).",
                        a: "β-adrenergic blockers; α + β blockers; α-adrenergic blockers; Central sympatholytics."
                    },

                    {
                        id: "ph11",
                        q: "β-blockers (3 drugs).",
                        a: "Propranolol, Metoprolol, Atenolol.",
                        note: "MOA: Block β₁ receptors → ↓ heart rate & renin. AE: Bradycardia + bronchospasm."
                    },

                    {
                        id: "ph12",
                        q: "α + β blockers (2 drugs).",
                        a: "Labetalol, Carvedilol.",
                        note: "MOA: Block α₁ + β → ↓ HR + vasodilation. AE: Orthostatic hypotension."
                    },

                    {
                        id: "ph13",
                        q: "α-blockers (5 drugs).",
                        a: "Prazosin, Terazosin, Doxazosin, Phentolamine, Phenoxybenzamine.",
                        note: "MOA: Block α₁ receptors → vasodilation. AE: First-dose hypotension."
                    },

                    {
                        id: "ph14",
                        q: "Central sympatholytics (2 drugs).",
                        a: "Clonidine, Methyldopa.",
                        note: "MOA: Stimulate central α₂ receptors → ↓ sympathetic outflow. AE: Sedation + rebound hypertension (clonidine)."
                    }

                ]
            },
            {
                id: "pharm-cvs-antihypertensive-2",
                name: "Antihypertensive Drugs (2)",
                important: true,
                cards: [

                    {
                        id: "ph15",
                        q: "Classify Calcium Channel Blockers (3 groups).",
                        a: "Phenylalkylamines; Benzothiazepines; Dihydropyridines."
                    },

                    {
                        id: "ph16",
                        q: "Phenylalkylamine CCB (1 drug).",
                        a: "Verapamil.",
                        note: "MOA: Blocks L-type Ca²⁺ channels → ↓ cardiac contractility & AV conduction. AE: Bradycardia + constipation."
                    },

                    {
                        id: "ph17",
                        q: "Benzothiazepine CCB (1 drug).",
                        a: "Diltiazem.",
                        note: "MOA: Blocks L-type Ca²⁺ channels → ↓ HR & vasodilation. AE: Bradycardia."
                    },

                    {
                        id: "ph18",
                        q: "Dihydropyridine CCBs (7 drugs).",
                        a: "Nifedipine, Felodipine, Amlodipine, Nitrendipine, Lacidipine, Lercanidipine, Benidipine.",
                        note: "MOA: Block L-type Ca²⁺ channels → arteriolar vasodilation. AE: Reflex tachycardia + pedal edema."
                    },

                    {
                        id: "ph19",
                        q: "Classify vasodilators used in hypertension (2 types).",
                        a: "Arteriolar dilators; Arteriolar + venodilators."
                    },

                    {
                        id: "ph20",
                        q: "Arteriolar dilators (3 drugs).",
                        a: "Hydralazine, Minoxidil, Diazoxide.",
                        note: "MOA: Direct arteriolar smooth muscle relaxation. AE: Reflex tachycardia + fluid retention."
                    },

                    {
                        id: "ph21",
                        q: "Arteriolar + venodilator (1 drug).",
                        a: "Sodium Nitroprusside.",
                        note: "MOA: Releases NO → ↑ cGMP → vasodilation (arteries + veins). AE: Cyanide toxicity."
                    }

                ]
            },
           
{
    subject: "Pharmacology",
    chapter: "CVS",
    id: "pharm-cvs-antianginal-001",
    name: "Antianginal Drugs",
    cards: [

        {
            id: "c022",
            q: "Classify antianginal drugs (5 groups).",
            a: "Nitrates; β-blockers; Calcium channel blockers; Potassium channel opener; Other antianginal drugs."
        },

        {
            id: "c023",
            q: "Classify nitrates (2 types).",
            a: "Short acting; Long acting."
        },

        {
            id: "c024",
            q: "Short-acting nitrates (2 drugs).",
            a: "Glyceryl trinitrate, Isosorbide dinitrate (sublingual).\nMOA: Release NO → ↑ cGMP → venodilation → ↓ preload.\nAE: Headache + hypotension."
        },

        {
            id: "c025",
            q: "Long-acting nitrates (4 drugs).",
            a: "Isosorbide dinitrate (oral), Isosorbide mononitrate, Erythritol tetranitrate, Pentaerythritol tetranitrate.\nMOA: Release NO → sustained venodilation → ↓ preload.\nAE: Tolerance + headache."
        },

        {
            id: "c026",
            q: "β-blockers in angina (3 drugs).",
            a: "Propranolol, Metoprolol, Atenolol.\nMOA: Block β₁ → ↓ heart rate & contractility → ↓ O₂ demand.\nAE: Bradycardia + bronchospasm."
        },

        {
            id: "c027",
            q: "Calcium channel blockers in angina (4 drugs).",
            a: "Verapamil, Diltiazem, Amlodipine, Nitrendipine.\nMOA: Block L-type Ca²⁺ channels → ↓ contractility / vasodilation.\nAE: Bradycardia (Verapamil/Diltiazem) + edema (DHPs)."
        },

        {
            id: "c028",
            q: "Potassium channel opener (1 drug).",
            a: "Nicorandil.\nMOA: Opens K⁺ channels + NO donation → vasodilation.\nAE: Headache + hypotension."
        },

        {
            id: "c029",
            q: "Other antianginal drugs (5 drugs).",
            a: "Trimetazidine, Ranolazine, Ivabradine, Oxyphedrine, Dipyridamole.\nMOA: Metabolic modulation / ↓ heart rate / vasodilation (drug-specific).\nAE: QT prolongation (Ranolazine) + bradycardia (Ivabradine)."
        }

    ]
}
,
{
    subject: "Pharmacology",
    chapter: "CVS",
    id: "pharm-cvs-chf-001",
    name: "Drugs for Congestive Heart Failure",
    cards: [

        {
            id: "c030",
            q: "Classify drugs used in congestive heart failure (4 groups).",
            a: "Inotropic drugs; Diuretics; β-adrenergic blockers; Vasodilators (including RAAS inhibitors)."
        },

        {
            id: "c031",
            q: "Classify inotropic drugs (3 groups).",
            a: "Cardiac glycosides; Sympathomimetics; PDE-3 inhibitors."
        },

        {
            id: "c032",
            q: "Cardiac glycosides (2 drugs).",
            a: "Digoxin, Ouabain.\nMOA: Inhibit Na⁺/K⁺ ATPase → ↑ intracellular Ca²⁺ → ↑ contractility.\nAE: Arrhythmias + visual disturbances."
        },

        {
            id: "c033",
            q: "Sympathomimetics in CHF (2 drugs).",
            a: "Dobutamine, Dopamine.\nMOA: β₁ stimulation → ↑ contractility.\nAE: Tachycardia + arrhythmias."
        },

        {
            id: "c034",
            q: "PDE-3 inhibitors (2 drugs).",
            a: "Inamrinone, Milrinone.\nMOA: Inhibit PDE-3 → ↑ cAMP → ↑ Ca²⁺ → ↑ contractility + vasodilation.\nAE: Arrhythmias."
        },

        {
            id: "c035",
            q: "Classify diuretics used in CHF (3 types).",
            a: "High ceiling (loop); Thiazide-like; Aldosterone antagonists."
        },

        {
            id: "c036",
            q: "Loop diuretics in CHF (2 drugs).",
            a: "Furosemide, Bumetanide.\nMOA: Inhibit Na⁺/K⁺/2Cl⁻ transporter in TAL.\nAE: Hypokalemia."
        },

        {
            id: "c037",
            q: "Thiazide-like diuretics (3 drugs).",
            a: "Hydrochlorothiazide, Metolazone, Xipamide.\nMOA: Inhibit Na⁺/Cl⁻ cotransporter in DCT.\nAE: Hypokalemia."
        },

        {
            id: "c038",
            q: "Aldosterone antagonists (2 drugs).",
            a: "Spironolactone, Eplerenone.\nMOA: Block aldosterone receptor → ↓ Na⁺ reabsorption + ↓ remodeling.\nAE: Hyperkalemia."
        },

        {
            id: "c039",
            q: "β-blockers in CHF (4 drugs).",
            a: "Metoprolol, Bisoprolol, Nebivolol, Carvedilol.\nMOA: Block β₁ → ↓ sympathetic overactivity → ↓ remodeling.\nAE: Bradycardia."
        },

        {
            id: "c040",
            q: "Classify vasodilators in CHF (3 groups).",
            a: "RAAS inhibitors; Venodilators; Arteriolar / mixed dilators."
        },

        {
            id: "c041",
            q: "ACE inhibitors in CHF (2 drugs).",
            a: "Enalapril, Ramipril.\nMOA: Inhibit ACE → ↓ Angiotensin II + ↓ remodeling.\nAE: Dry cough + hyperkalemia."
        },

        {
            id: "c042",
            q: "ARBs in CHF (2 drugs).",
            a: "Losartan, Candesartan.\nMOA: Block AT₁ receptor → ↓ Angiotensin II effects.\nAE: Hyperkalemia."
        },

        {
            id: "c043",
            q: "Venodilators (2 drugs).",
            a: "Glyceryl trinitrate, Isosorbide dinitrate.\nMOA: NO release → venodilation → ↓ preload.\nAE: Headache."
        },

        {
            id: "c044",
            q: "Arteriolar + venodilator (1 drug).",
            a: "Sodium Nitroprusside.\nMOA: NO donor → ↑ cGMP → vasodilation.\nAE: Cyanide toxicity."
        },

        {
            id: "c045",
            q: "Arteriolar dilator (1 drug).",
            a: "Hydralazine.\nMOA: Direct arteriolar dilation → ↓ afterload.\nAE: Reflex tachycardia + lupus-like syndrome."
        }

    ]
},
{
    subject: "Pharmacology",
    chapter: "CVS",
    id: "pharm-cvs-antiarrhythmic-001",
    name: "Antiarrhythmic Drugs",
    cards: [

        {
            id: "c046",
            q: "Classify antiarrhythmic drugs (5 groups).",
            a: "Class I (Na⁺ channel blockers); Class II (β-blockers); Class III (K⁺ channel blockers); Class IV (Ca²⁺ channel blockers); Others."
        },

        {
            id: "c047",
            q: "Class I antiarrhythmic drugs (3 subclasses).",
            a: "IA (moderate Na⁺ block); IB (mild Na⁺ block); IC (marked Na⁺ block)."
        },

        {
            id: "c048",
            q: "Class IA drugs (3 drugs).",
            a: "Quinidine, Procainamide, Disopyramide.\nMOA: Moderate Na⁺ channel block → ↓ conduction + ↑ action potential duration.\nAE: QT prolongation + torsades de pointes."
        },

        {
            id: "c049",
            q: "Class IB drugs (2 drugs).",
            a: "Lidocaine, Mexiletine.\nMOA: Mild Na⁺ channel block → ↓ action potential duration.\nAE: CNS toxicity (seizures)."
        },

        {
            id: "c050",
            q: "Class IC drugs (2 drugs).",
            a: "Propafenone, Flecainide.\nMOA: Marked Na⁺ channel block → marked ↓ conduction.\nAE: Proarrhythmia."
        },

        {
            id: "c051",
            q: "Class II antiarrhythmic drugs (3 drugs).",
            a: "Propranolol, Sotalol, Esmolol.\nMOA: β-blockade → ↓ SA/AV node activity.\nAE: Bradycardia."
        },

        {
            id: "c052",
            q: "Class III antiarrhythmic drugs (4 drugs).",
            a: "Amiodarone, Dronedarone, Dofetilide, Ibutilide.\nMOA: K⁺ channel block → ↑ action potential duration.\nAE: QT prolongation (Amiodarone → thyroid, lung toxicity)."
        },

        {
            id: "c053",
            q: "Class IV antiarrhythmic drugs (2 drugs).",
            a: "Verapamil, Diltiazem.\nMOA: Block L-type Ca²⁺ channels → ↓ AV node conduction.\nAE: Bradycardia."
        },

        {
            id: "c054",
            q: "Other antiarrhythmic drugs (2 drugs).",
            a: "Adenosine, Digoxin.\nMOA: ↑ AV nodal block (Adenosine → A1 receptor; Digoxin → ↑ vagal tone).\nAE: Flushing (Adenosine) + arrhythmias (Digoxin)."
        }

    ]
}

            
        ],
    
    
     "Chemotherapy": [
           {
    subject: "Pharmacology",
    chapter: "Antimicrobial Drugs",
    id: "pharm-antimicrobial-penicillin-003",
    name: "Penicillins",
    cards: [

        {
            id: "c074",
            q: "Classify penicillins (3 groups).",
            a: "Natural penicillin; Semisynthetic penicillins; β-lactamase inhibitors."
        },

        {
            id: "c075",
            q: "Natural penicillin (1 drug).",
            a: "Benzyl penicillin (Penicillin G).",
            note: "MOA: Inhibits bacterial cell wall synthesis (binds PBPs).\nAE: Hypersensitivity reactions."
        },

        {
            id: "c076",
            q: "Classify semisynthetic penicillins (3 groups).",
            a: "Acid-resistant penicillins; Penicillinase-resistant penicillins; Extended-spectrum penicillins."
        },

        {
            id: "c077",
            q: "Acid-resistant penicillin (1 drug).",
            a: "Phenoxymethyl penicillin (Penicillin V).",
            note: "MOA: Inhibits bacterial cell wall synthesis.\nAE: Hypersensitivity."
        },

        {
            id: "c078",
            q: "Penicillinase-resistant penicillins (3 drugs).",
            a: "Methicillin, Cloxacillin, Dicloxacillin.",
            note: "MOA: Resistant to β-lactamase → inhibit cell wall synthesis.\nAE: Interstitial nephritis (Methicillin)."
        },

        {
            id: "c079",
            q: "Classify extended-spectrum penicillins (3 groups).",
            a: "Aminopenicillins; Ureidopenicillins; Carboxypenicillins."
        },

        {
            id: "c080",
            q: "Aminopenicillins (3 drugs).",
            a: "Ampicillin, Bacampicillin, Amoxicillin.",
            note: "MOA: Extended spectrum → inhibit cell wall synthesis.\nAE: Rash (Ampicillin)."
        },

        {
            id: "c081",
            q: "Ureidopenicillins (2 drugs).",
            a: "Piperacillin, Mezlocillin.",
            note: "MOA: Extended gram-negative coverage → inhibit cell wall synthesis.\nAE: Hypersensitivity."
        },

        {
            id: "c082",
            q: "Carboxypenicillins (1 drug).",
            a: "Carbenicillin.",
            note: "MOA: Extended gram-negative coverage → inhibit cell wall synthesis.\nAE: Hypokalemia."
        },

   {
            id: "c083",
            q: "β-lactamase inhibitors (3 drugs).",
            a: "Clavulanic acid, Sulbactam, Tazobactam.",
            note: "MOA: Inhibit β-lactamase enzymes → protect penicillins.\nAE: GI upset."
           }
           ]
            },
            {
    subject: "Pharmacology",
    chapter: "Antimicrobial Drugs",
    id: "pharm-antimicrobial-cephalosporin-001",
    name: "Cephalosporins",
    cards: [

        {
            id: "c098",
            q: "Classify cephalosporins (4 generations).",
            a: "First generation; Second generation; Third generation; Fourth generation."
        },

        {
            id: "c099",
            q: "Classify first-generation cephalosporins (2 groups).",
            a: "Oral; Parenteral."
        },

        {
            id: "c100",
            q: "First-generation oral cephalosporins (2 drugs).",
            a: "Cephalexin, Cefadroxil.",
            note: "MOA: Inhibit bacterial cell wall synthesis.\nAE: Hypersensitivity reactions."
        },

        {
            id: "c101",
            q: "First-generation parenteral cephalosporin (1 drug).",
            a: "Cefazolin.",
            note: "MOA: Inhibits bacterial cell wall synthesis.\nAE: Hypersensitivity reactions."
        },

        {
            id: "c102",
            q: "Classify second-generation cephalosporins (2 groups).",
            a: "Oral; Parenteral."
        },

        {
            id: "c103",
            q: "Second-generation oral cephalosporins (3 drugs).",
            a: "Cefaclor, Cefuroxime axetil, Cefprozil.",
            note: "MOA: Inhibit bacterial cell wall synthesis.\nAE: GI upset + hypersensitivity."
        },

        {
            id: "c104",
            q: "Second-generation parenteral cephalosporins (2 drugs).",
            a: "Cefuroxime, Cefoxitin.",
            note: "MOA: Inhibit bacterial cell wall synthesis.\nAE: Hypersensitivity reactions."
        },

        {
            id: "c105",
            q: "Classify third-generation cephalosporins (2 groups).",
            a: "Oral; Parenteral."
        },

        {
            id: "c106",
            q: "Third-generation oral cephalosporins (5 drugs).",
            a: "Cefixime, Cefpodoxime proxetil, Cefdinir, Ceftibuten, Ceftamet pivoxil.",
            note: "MOA: Inhibit bacterial cell wall synthesis.\nAE: GI upset."
        },

        {
            id: "c107",
            q: "Third-generation parenteral cephalosporins (5 drugs).",
            a: "Cefotaxime, Ceftriaxone, Ceftizoxime, Ceftazidime, Cefoperazone.",
            note: "MOA: Inhibit bacterial cell wall synthesis.\nAE: Biliary sludging (Ceftriaxone) + bleeding tendency (Cefoperazone)."
        },

        {
            id: "c108",
            q: "Classify fourth-generation cephalosporins (1 group).",
            a: "Parenteral."
        },

        {
            id: "c109",
            q: "Fourth-generation cephalosporins (2 drugs).",
            a: "Cefepime, Cefpirome.",
            note: "MOA: Inhibit bacterial cell wall synthesis.\nAE: Neurotoxicity."
        }

    ]
}
        ],
        /**
 * MEDEDGE SUBJECT DATA: PHARMACOLOGY (Continued)
 * Classification: K.D. Tripathi (KDT) System-wise
 */

// ... (Previous CVS and Penicillin code goes here) ...

         

        "Autonomic Nervous System (ANS)": [
            {
                id: "pharm-ans-cholinergic",
                name: "Cholinergic & Anticholinergic",
                important: true,
                cards: [
                    { id: "ph90", q: "Drug of choice for Mushroom Poisoning?", a: "Atropine.", note: "Specifically for muscarinic symptoms of Inocybe and Clitocybe species." },
                    { id: "ph91", q: "Antidote for Organophosphate Poisoning?", a: "Atropine (Muscarinic block) + Pralidoxime (Oxime/Cholinesterase reactivator)." },
                    { id: "ph92", q: "Drug of choice for Myasthenia Gravis (Diagnosis)?", a: "Edrophonium (Tensilon Test).", note: "Very short acting anticholinesterase." }
                ]
            }
        ],

        "Central Nervous System (CNS)": [
            {
    subject: "Pharmacology",
    chapter: "CNS",
    id: "pharm-cns-sedativehypnotic-001",
    name: "Sedative-Hypnotic Drugs",
    cards: [

        {
            id: "c110",
            q: "Classify sedative-hypnotic drugs (4 groups).",
            a: "Benzodiazepines; Barbiturates; Non-benzodiazepines; Other CNS depressants."
        },

        {
            id: "c111",
            q: "Classify benzodiazepines (3 groups).",
            a: "Hypnotics; Antianxiety drugs; Anticonvulsants."
        },

        {
            id: "c112",
            q: "Benzodiazepine hypnotics (5 drugs).",
            a: "Diazepam, Flurazepam, Nitrazepam, Temazepam, Triazolam.",
            note: "MOA: Enhance GABA-A receptor activity → ↑ frequency of Cl⁻ channel opening.\nAE: Sedation + anterograde amnesia."
        },

        {
            id: "c113",
            q: "Benzodiazepine antianxiety drugs (5 drugs).",
            a: "Diazepam, Chlordiazepoxide, Alprazolam, Oxazepam, Lorazepam.",
            note: "MOA: Enhance GABA-A receptor activity.\nAE: Drowsiness + dependence."
        },

        {
            id: "c114",
            q: "Benzodiazepine anticonvulsants (4 drugs).",
            a: "Diazepam, Lorazepam, Clonazepam, Clobazam.",
            note: "MOA: Enhance GABA-mediated neuronal inhibition.\nAE: Sedation."
        },

        {
            id: "c115",
            q: "Classify barbiturates (3 groups).",
            a: "Long-acting; Short-acting; Ultra-short-acting."
        },

        {
            id: "c116",
            q: "Long-acting barbiturate (1 drug).",
            a: "Phenobarbitone.",
            note: "MOA: Prolong GABA-A Cl⁻ channel opening duration.\nAE: Sedation + respiratory depression."
        },

        {
            id: "c117",
            q: "Short-acting barbiturates (2 drugs).",
            a: "Butobarbitone, Pentobarbitone.",
            note: "MOA: Enhance GABA-A receptor activity.\nAE: CNS depression."
        },

        {
            id: "c118",
            q: "Ultra-short-acting barbiturates (2 drugs).",
            a: "Thiopentone, Methohexitone.",
            note: "MOA: Rapid CNS depression via GABA-A potentiation.\nAE: Respiratory depression."
        },

        {
            id: "c119",
            q: "Non-benzodiazepines (4 drugs).",
            a: "Zopiclone, Eszopiclone, Zaleplon, Zolpidem.",
            note: "MOA: Selectively act on BZ1 subtype of GABA-A receptor.\nAE: Sleepwalking + amnesia."
        },

        {
            id: "c120",
            q: "Other CNS depressants (10 drugs).",
            a: "Chloral hydrate, Triclofos, Paraldehyde, Glutethimide, Methaqualone, Meprobamate, Promethazine, Chlorpromazine, Amitriptyline, Morphine.",
            note: "MOA: CNS depression by various mechanisms.\nAE: Sedation + respiratory depression."
        }

    ]
},
{
    subject: "Pharmacology",
    chapter: "CNS",
    id: "pharm-cns-antiepileptic-001",
    name: "Antiepileptic Drugs",
    cards: [

        {
            id: "c121",
            q: "Classify antiepileptic drugs (10 groups).",
            a: "Barbiturates; Deoxybarbiturates; Hydantoins; Succinimides; Benzodiazepines; Iminostilbenes; Aliphatic carboxylic acid derivatives; Phenyltriazines; Cyclic GABA analogues; Newer antiepileptic drugs."
        },

        {
            id: "c122",
            q: "Barbiturate antiepileptic (1 drug).",
            a: "Phenobarbitone.",
            note: "MOA: Enhances GABA-A mediated inhibition.\nAE: Sedation + cognitive impairment."
        },

        {
            id: "c123",
            q: "Deoxybarbiturate (1 drug).",
            a: "Primidone.",
            note: "MOA: Metabolized to phenobarbitone → enhances GABA activity.\nAE: Sedation + ataxia."
        },

        {
            id: "c124",
            q: "Hydantoins (2 drugs).",
            a: "Phenytoin, Fosphenytoin.",
            note: "MOA: Blocks voltage-gated Na⁺ channels.\nAE: Gingival hyperplasia + hirsutism."
        },

        {
            id: "c125",
            q: "Succinimide (1 drug).",
            a: "Ethosuximide.",
            note: "MOA: Blocks T-type Ca²⁺ channels in thalamus.\nAE: GI upset + fatigue."
        },

        {
            id: "c126",
            q: "Benzodiazepine antiepileptics (4 drugs).",
            a: "Clonazepam, Diazepam, Lorazepam, Clobazam.",
            note: "MOA: Enhance GABA-A receptor activity.\nAE: Sedation + dependence."
        },

        {
            id: "c127",
            q: "Iminostilbenes (2 drugs).",
            a: "Carbamazepine, Oxcarbazepine.",
            note: "MOA: Block voltage-gated Na⁺ channels.\nAE: Diplopia + hyponatremia."
        },

        {
            id: "c128",
            q: "Aliphatic carboxylic acid derivatives (2 drugs).",
            a: "Sodium valproate (Valproic acid), Divalproex.",
            note: "MOA: Blocks Na⁺ channels + increases GABA.\nAE: Hepatotoxicity + neural tube defects."
        },

        {
            id: "c129",
            q: "Phenyltriazine (1 drug).",
            a: "Lamotrigine.",
            note: "MOA: Blocks Na⁺ channels → ↓ glutamate release.\nAE: Stevens-Johnson syndrome."
        },

        {
            id: "c130",
            q: "Cyclic GABA analogues (2 drugs).",
            a: "Gabapentin, Pregabalin.",
            note: "MOA: Bind α2δ subunit of voltage-gated Ca²⁺ channels.\nAE: Dizziness + sedation."
        },

        {
            id: "c131",
            q: "Newer antiepileptic drugs (6 drugs).",
            a: "Topiramate, Zonisamide, Levetiracetam, Vigabatrin, Tiagabine, Lacosamide.",
            note: "MOA: Multiple mechanisms including Na⁺ channel block, GABA enhancement, and SV2A modulation.\nAE: Cognitive slowing (Topiramate) + behavioral changes (Levetiracetam)."
        }

    ]
},
{
    subject: "Pharmacology",
    chapter: "CNS",
    id: "pharm-cns-antiparkinsonian-001",
    name: "Antiparkinsonian Drugs",
    cards: [

        {
            id: "c132",
            q: "Classify antiparkinsonian drugs (2 groups).",
            a: "Drugs affecting brain dopaminergic system; Drugs affecting brain cholinergic system."
        },

        {
            id: "c133",
            q: "Classify drugs affecting brain dopaminergic system (6 groups).",
            a: "Dopamine precursor; Peripheral decarboxylase inhibitors; Dopaminergic agonists; MAO-B inhibitors; COMT inhibitors; NMDA receptor antagonist."
        },

        {
            id: "c134",
            q: "Dopamine precursor (1 drug).",
            a: "Levodopa.",
            note: "MOA: Converted to dopamine in brain → replenishes dopamine.\nAE: Dyskinesia + nausea."
        },

        {
            id: "c135",
            q: "Peripheral decarboxylase inhibitors (2 drugs).",
            a: "Carbidopa, Benserazide.",
            note: "MOA: Inhibit peripheral conversion of levodopa to dopamine.\nAE: Nausea + hypotension."
        },

        {
            id: "c136",
            q: "Dopaminergic agonists (3 drugs).",
            a: "Bromocriptine, Ropinirole, Pramipexole.",
            note: "MOA: Direct stimulation of dopamine receptors.\nAE: Hallucinations + impulse control disorders."
        },

        {
            id: "c137",
            q: "MAO-B inhibitors (2 drugs).",
            a: "Selegiline, Rasagiline.",
            note: "MOA: Inhibit dopamine breakdown in CNS.\nAE: Insomnia."
        },

        {
            id: "c138",
            q: "COMT inhibitors (2 drugs).",
            a: "Entacapone, Tolcapone.",
            note: "MOA: Inhibit levodopa metabolism by COMT.\nAE: Diarrhea + hepatotoxicity (Tolcapone)."
        },

        {
            id: "c139",
            q: "NMDA receptor antagonist / dopamine facilitator (1 drug).",
            a: "Amantadine.",
            note: "MOA: Enhances dopamine release + NMDA receptor blockade.\nAE: Livedo reticularis."
        },

        {
            id: "c140",
            q: "Classify drugs affecting brain cholinergic system (2 groups).",
            a: "Central anticholinergics; Antihistaminics."
        },

        {
            id: "c141",
            q: "Central anticholinergics (3 drugs).",
            a: "Trihexyphenidyl, Procyclidine, Biperiden.",
            note: "MOA: Block central muscarinic receptors.\nAE: Dry mouth + blurred vision."
        },

        {
            id: "c142",
            q: "Antihistaminics used in Parkinsonism (2 drugs).",
            a: "Orphenadrine, Promethazine.",
            note: "MOA: Anticholinergic + antihistaminic action.\nAE: Sedation."
        }

    ]
}, 
{
    subject: "Pharmacology",
    chapter: "CNS",
    id: "pharm-cns-antidepressants-001",
    name: "Antidepressants",
    cards: [

        {
            id: "c159",
            q: "Classify antidepressants (5 groups).",
            a: "Reversible inhibitors of MAO-A (RIMAs); Selective serotonin reuptake inhibitors (SSRIs); Tricyclic antidepressants (TCAs); Serotonin and noradrenaline reuptake inhibitors (SNRIs); Atypical antidepressants."
        },

        {
            id: "c160",
            q: "Reversible inhibitors of MAO-A (RIMAs) (2 drugs).",
            a: "Moclobemide, Clorgyline.",
            note: "MOA: Inhibit MAO-A → ↑ serotonin and noradrenaline levels.\nAE: Insomnia + hypertensive reactions."
        },

        {
            id: "c161",
            q: "Selective serotonin reuptake inhibitors (SSRIs) (7 drugs).",
            a: "Fluoxetine, Fluvoxamine, Paroxetine, Sertraline, Citalopram, Escitalopram, Dapoxetine.",
            note: "MOA: Selectively inhibit serotonin reuptake.\nAE: Sexual dysfunction + serotonin syndrome."
        },

        {
            id: "c162",
            q: "Classify tricyclic antidepressants (TCAs) (2 groups).",
            a: "NA + 5-HT reuptake inhibitors; Predominantly NA reuptake inhibitors."
        },

        {
            id: "c163",
            q: "NA + 5-HT reuptake inhibitor TCAs (6 drugs).",
            a: "Imipramine, Amitriptyline, Trimipramine, Doxepin, Dothiepin, Clomipramine.",
            note: "MOA: Inhibit reuptake of noradrenaline and serotonin.\nAE: Anticholinergic effects + cardiotoxicity."
        },

        {
            id: "c164",
            q: "Predominantly NA reuptake inhibitors (3 drugs).",
            a: "Desipramine, Nortriptyline, Reboxetine.",
            note: "MOA: Predominantly inhibit noradrenaline reuptake.\nAE: Dry mouth + tachycardia."
        },

        {
            id: "c165",
            q: "Serotonin and noradrenaline reuptake inhibitors (SNRIs) (3 drugs).",
            a: "Venlafaxine, Desvenlafaxine, Duloxetine.",
            note: "MOA: Inhibit serotonin and noradrenaline reuptake.\nAE: Hypertension + nausea."
        },

        {
            id: "c166",
            q: "Atypical antidepressants (7 drugs).",
            a: "Trazodone, Mianserin, Mirtazapine, Bupropion, Amoxapine, Tianeptine, Amineptine.",
            note: "MOA: Various mechanisms including receptor modulation and monoamine reuptake inhibition.\nAE: Sedation (Mirtazapine) + seizures (Bupropion)."
        }

    ]
}
        ],

        "Hormones & Related Drugs": [
            {
                id: "pharm-hormone-diabetes",
                name: "Antidiabetic Drugs",
                important: true,
                cards: [
                    { id: "ph95", q: "Drug of choice for Type 2 Diabetes (First line)?", a: "Metformin (Biguanide).", note: "MOA: Activates AMPK → ↓ hepatic glucose production. AE: Vitamin B12 deficiency." },
                    { id: "ph96", q: "Mechanism of Sulfonylureas?", a: "Close ATP-sensitive K⁺ channels in Beta-cells → Insulin release." }
                ]
            }
        ],
            "Respiratory Pharmacology": [
        {
    subject: "Pharmacology",
    chapter: "Respiratory System",
    id: "pharm-resp-asthma-001",
    name: "Drugs for Bronchial Asthma",
    cards: [

        {
            id: "c143",
            q: "Classify drugs used in bronchial asthma (2 groups).",
            a: "Bronchodilators; Anti-inflammatory / prophylactic drugs."
        },

        {
            id: "c144",
            q: "Classify bronchodilators (3 groups).",
            a: "β2-sympathomimetics; Methylxanthines; Anticholinergics."
        },

        {
            id: "c145",
            q: "Classify β2-sympathomimetics (3 groups).",
            a: "Short-acting; Intermediate-acting; Long-acting."
        },

        {
            id: "c146",
            q: "Short-acting β2 agonists (2 drugs).",
            a: "Salbutamol, Terbutaline.",
            note: "MOA: Stimulate β2 receptors → bronchodilation.\nAE: Tremor + tachycardia."
        },

        {
            id: "c147",
            q: "Intermediate-acting β2 agonist (1 drug).",
            a: "Bambuterol.",
            note: "MOA: β2 receptor stimulation → bronchodilation.\nAE: Tremor."
        },

        {
            id: "c148",
            q: "Long-acting β2 agonists (4 drugs).",
            a: "Formoterol, Salmeterol, Indacaterol, Arformoterol.",
            note: "MOA: Long-acting β2 receptor stimulation → prolonged bronchodilation.\nAE: Palpitations."
        },

        {
            id: "c149",
            q: "Methylxanthines (5 drugs).",
            a: "Theophylline, Aminophylline, Choline theophyllinate, Hydroxyethyl theophylline, Doxophylline.",
            note: "MOA: PDE inhibition + adenosine receptor blockade → bronchodilation.\nAE: Arrhythmias + seizures."
        },

        {
            id: "c150",
            q: "Anticholinergics used in asthma (3 drugs).",
            a: "Ipratropium bromide, Tiotropium bromide, Glycopyrrolate.",
            note: "MOA: Block muscarinic receptors → bronchodilation.\nAE: Dry mouth."
        },

        {
            id: "c151",
            q: "Classify anti-inflammatory / prophylactic drugs in asthma (5 groups).",
            a: "Leukotriene antagonists; Mast cell stabilizers; Corticosteroids; Anti-IgE antibody; PDE-4 inhibitor."
        },

        {
            id: "c152",
            q: "Leukotriene antagonists (2 drugs).",
            a: "Montelukast, Zafirlukast.",
            note: "MOA: Block leukotriene receptors → ↓ bronchoconstriction.\nAE: Headache."
        },

        {
            id: "c153",
            q: "Mast cell stabilizers (2 drugs).",
            a: "Sodium cromoglycate, Ketotifen.",
            note: "MOA: Prevent mast cell degranulation.\nAE: Throat irritation + sedation (Ketotifen)."
        },

        {
            id: "c154",
            q: "Classify corticosteroids used in asthma (2 groups).",
            a: "Systemic; Inhalational."
        },

        {
            id: "c155",
            q: "Systemic corticosteroids (3 groups/drugs).",
            a: "Hydrocortisone, Prednisolone, Other glucocorticoids.",
            note: "MOA: Suppress airway inflammation.\nAE: Hyperglycemia + osteoporosis."
        },

        {
            id: "c156",
            q: "Inhalational corticosteroids (5 drugs).",
            a: "Beclomethasone dipropionate, Budesonide, Flunisolide, Fluticasone propionate, Ciclesonide.",
            note: "MOA: Local anti-inflammatory action in airways.\nAE: Oral candidiasis + dysphonia."
        },

        {
            id: "c157",
            q: "Anti-IgE antibody (1 drug).",
            a: "Omalizumab.",
            note: "MOA: Binds IgE → prevents mast cell activation.\nAE: Anaphylaxis."
        },

        {
            id: "c158",
            q: "PDE-4 inhibitor (1 drug).",
            a: "Roflumilast.",
            note: "MOA: PDE-4 inhibition → anti-inflammatory effect.\nAE: Weight loss + psychiatric symptoms."
        }

    ]
}
        ],
        
              "Renal Pharmacology":[
           {
    subject: "Pharmacology",
    chapter: "Renal System",
    id: "pharm-renal-diuretics-001",
    name: "Diuretics and Antidiuretics",
    cards: [

        {
            id: "c084",
            q: "Classify diuretics (3 groups).",
            a: "High-ceiling diuretics; Medium-efficacy diuretics; Weak / adjunctive diuretics."
        },

        {
            id: "c085",
            q: "High-ceiling diuretics (3 drugs).",
            a: "Furosemide (Frusemide), Bumetanide, Torasemide.",
            note: "MOA: Inhibit Na⁺-K⁺-2Cl⁻ cotransporter in thick ascending limb.\nAE: Hypokalemia + ototoxicity."
        },

        {
            id: "c086",
            q: "Classify medium-efficacy diuretics (2 groups).",
            a: "Benzothiadiazines; Thiazide-like diuretics."
        },

        {
            id: "c087",
            q: "Benzothiadiazines (3 drugs).",
            a: "Hydrochlorothiazide, Hydroflumethiazide, Benzthiazide.",
            note: "MOA: Inhibit Na⁺-Cl⁻ symport in DCT.\nAE: Hypokalemia + hyperuricemia."
        },

        {
            id: "c088",
            q: "Thiazide-like diuretics (5 drugs).",
            a: "Chlorthalidone, Metolazone, Xipamide, Indapamide, Clopamide.",
            note: "MOA: Inhibit Na⁺-Cl⁻ symport in DCT.\nAE: Hypokalemia."
        },

        {
            id: "c089",
            q: "Classify weak / adjunctive diuretics (4 groups).",
            a: "Carbonic anhydrase inhibitors; Osmotic diuretics; Aldosterone antagonists; Potassium-sparing diuretics."
        },

        {
            id: "c090",
            q: "Carbonic anhydrase inhibitor (1 drug).",
            a: "Acetazolamide.",
            note: "MOA: Inhibits carbonic anhydrase in PCT → ↑ bicarbonate excretion.\nAE: Metabolic acidosis."
        },

        {
            id: "c091",
            q: "Osmotic diuretics (3 drugs).",
            a: "Mannitol, Isosorbide, Glycerol.",
            note: "MOA: Increase tubular osmotic pressure → ↓ water reabsorption.\nAE: Pulmonary edema."
        },

        {
            id: "c092",
            q: "Aldosterone antagonists (2 drugs).",
            a: "Spironolactone, Eplerenone.",
            note: "MOA: Block aldosterone receptors in collecting duct.\nAE: Hyperkalemia (Spironolactone → gynecomastia)."
        },

        {
            id: "c093",
            q: "Renal epithelial Na⁺ channel inhibitors (2 drugs).",
            a: "Amiloride, Triamterene.",
            note: "MOA: Block ENaC channels in collecting duct.\nAE: Hyperkalemia."
        },

        {
            id: "c094",
            q: "Classify antidiuretics (3 groups).",
            a: "Antidiuretic hormone and analogues; Natriuretics; Miscellaneous drugs."
        },

        {
            id: "c095",
            q: "Antidiuretic hormone and analogues (4 drugs).",
            a: "Vasopressin, Desmopressin, Lypressin, Terlipressin.",
            note: "MOA: Stimulate V₂ receptors → ↑ water reabsorption in collecting ducts.\nAE: Water intoxication + hyponatremia."
        },

        {
            id: "c096",
            q: "Natriuretics (2 drugs).",
            a: "Thiazides, Amiloride.",
            note: "MOA: Reduce polyuria in nephrogenic diabetes insipidus.\nAE: Electrolyte imbalance."
        },

        {
            id: "c097",
            q: "Miscellaneous antidiuretics (3 drugs).",
            a: "Carbamazepine, Chlorpropamide, Indomethacin.",
            note: "MOA: Potentiate ADH action / reduce urine output.\nAE: Drug-specific adverse effects."
        }

    ]
}
        ],

        "Gastrointestinal Tract (GIT)": [
            {
                id: "pharm-git-ulcer",
                name: "Peptic Ulcer Drugs",
                important: true,
                cards: [
                    { id: "ph97", q: "Proton Pump Inhibitors (PPIs) (4 drugs).", a: "Omeprazole, Pantoprazole, Rabeprazole, Lansoprazole.", note: "Irreversibly inhibit H⁺/K⁺ ATPase. Most effective for acid suppression." },
                    { id: "ph98", q: "H2 Receptor Antagonists (3 drugs).", a: "Ranitidine, Famotidine, Cimetidine.", note: "AE: Cimetidine causes gynecomastia and inhibits CYP450." }
                ]
            }
        ]
    }
}; // This closes the entire Pharmacology object.
         