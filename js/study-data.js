// ═══════════════════════════════════════════════════════════════
// NEUROLOGY MASTERCLASS 2025 — Curated Study Data
// Hand-crafted flashcards & quiz questions per topic
// ═══════════════════════════════════════════════════════════════

export const STUDY_DATA = {

  // ─── 1. CVA ──────────────────────────────────────────────────
  'cva': {
    flashcards: [
      { question: 'What is the first-line imaging investigation for acute stroke?', answer: 'Non-contrast CT head — rapidly available and reliably excludes haemorrhagic stroke.' },
      { question: 'When is MRI-DWI preferred over CT in stroke?', answer: 'When CT findings are inconclusive, especially for posterior fossa (brainstem/cerebellum) ischaemia.' },
      { question: 'What is the thrombolysis time window for ischaemic stroke?', answer: 'Within 4.5 hours of symptom onset, OR within 9 hours of the midpoint of sleep for wake-up strokes.' },
      { question: 'What blood pressure must be achieved before thrombolysis?', answer: 'BP must be lowered to ≤185/110 mmHg before giving alteplase or tenecteplase.' },
      { question: 'What is the thrombectomy time window?', answer: 'Within 6 hours of symptom onset (together with thrombolysis if within 4.5 hrs). Requires confirmed proximal anterior circulation occlusion on CTA/MRA and NIHSS >5.' },
      { question: 'What is the first-line antiplatelet for secondary prevention after ischaemic stroke?', answer: 'Clopidogrel 75 mg daily (loading dose 300 mg). Aspirin 75 mg only if clopidogrel is contraindicated.' },
      { question: 'When should anticoagulation start after ischaemic stroke in AF?', answer: 'Not until brain imaging excludes haemorrhage AND usually not until 14 days have passed from stroke onset.' },
      { question: 'What is the preferred anticoagulant for AF-related stroke?', answer: 'DOACs (e.g., apixaban) are preferred. Warfarin is reserved for valvular AF.' },
      { question: 'What are the criteria for carotid endarterectomy post-TIA/stroke?', answer: 'Carotid territory event, not severely disabled, stenosis ≥70% (ECST criteria), and performed within 7 days.' },
      { question: 'What is DAPT and when is it used in TIA?', answer: 'Dual antiplatelet therapy: Aspirin + Clopidogrel for 21 days in high-risk TIA, then single agent (Clopidogrel).' },
      { question: 'Name 3 absolute contraindications to thrombolysis.', answer: '1. Previous intracranial haemorrhage\n2. Seizure at onset of stroke\n3. Suspected subarachnoid haemorrhage\n(Also: intracranial neoplasm, recent stroke/TBI, uncontrolled hypertension >200/120 mmHg)' },
      { question: 'Why is BP not lowered acutely in ischaemic stroke?', answer: 'Lowering BP in the acute phase reduces perfusion to the ischaemic penumbra (the salvageable border zone). It is only lowered if complications arise (e.g., hypertensive encephalopathy) or for thrombolysis.' },
      { question: 'What statin and dose is used after ischaemic stroke?', answer: 'Atorvastatin 80 mg. Many delay starting until 48 hours post-stroke due to risk of haemorrhagic transformation.' },
      { question: 'What is the LDL target after TIA?', answer: 'LDL <70 mg/dL or ≥50% reduction with high-intensity statin (Atorvastatin 40–80 mg).' },
      { question: 'Which ECG finding is a common treatable cause of cardioembolic stroke?', answer: 'Paroxysmal atrial fibrillation, detected by ECG + 24-hour Holter monitoring.' },
    ],
    quiz: [
      {
        question: 'A 68-year-old presents 3 hours after sudden left hemiplegia. CT head is normal. What is the next best step?',
        correct: 'Administer IV alteplase (thrombolysis)',
        options: ['Administer IV alteplase (thrombolysis)', 'Start aspirin 300 mg', 'Perform MRI only', 'Observe for 12 hours']
      },
      {
        question: 'What is the recommended first-line antiplatelet for secondary prevention after ischaemic stroke?',
        correct: 'Clopidogrel 75 mg daily',
        options: ['Clopidogrel 75 mg daily', 'Aspirin 75 mg daily', 'Warfarin', 'Apixaban']
      },
      {
        question: 'Which blood pressure threshold must be achieved BEFORE thrombolysis?',
        correct: '≤185/110 mmHg',
        options: ['≤185/110 mmHg', '≤160/90 mmHg', '≤200/120 mmHg', '≤140/80 mmHg']
      },
      {
        question: 'A patient wakes up with stroke symptoms. Imaging confirms ischaemia. What is the maximum time from midpoint of sleep for thrombolysis?',
        correct: '9 hours',
        options: ['9 hours', '4.5 hours', '6 hours', '12 hours']
      },
      {
        question: 'Which investigation detects the most common treatable cardiac cause of stroke?',
        correct: 'ECG + 24-hour Holter monitoring',
        options: ['ECG + 24-hour Holter monitoring', 'Transthoracic echocardiography', 'CT angiography', 'Carotid Doppler ultrasound']
      },
      {
        question: 'When is carotid endarterectomy indicated after TIA?',
        correct: 'Stenosis ≥70% (ECST), within 7 days, not severely disabled',
        options: ['Stenosis ≥70% (ECST), within 7 days, not severely disabled', 'Stenosis ≥50%, within 14 days', 'Any stenosis, within 48 hours', 'Stenosis ≥90%, electively']
      },
      {
        question: 'Which is an absolute contraindication to IV thrombolysis?',
        correct: 'Previous intracranial haemorrhage',
        options: ['Previous intracranial haemorrhage', 'Pregnancy', 'INR of 1.5', 'Age over 80']
      },
      {
        question: 'For TIA with high-risk features, what is the dual antiplatelet regime?',
        correct: 'Aspirin + Clopidogrel for 21 days, then Clopidogrel alone',
        options: ['Aspirin + Clopidogrel for 21 days, then Clopidogrel alone', 'Aspirin + Dipyridamole for 90 days', 'Clopidogrel + Warfarin for 30 days', 'Aspirin alone for 90 days']
      },
      {
        question: 'In atrial fibrillation with valvular disease, which anticoagulant is preferred after stroke?',
        correct: 'Warfarin',
        options: ['Warfarin', 'Apixaban', 'Rivaroxaban', 'Dabigatran']
      },
      {
        question: 'Why is blood pressure NOT routinely lowered in the acute phase of ischaemic stroke?',
        correct: 'It would reduce perfusion to the ischaemic penumbra',
        options: ['It would reduce perfusion to the ischaemic penumbra', 'It increases risk of seizures', 'There is no evidence for benefit', 'It causes haemorrhagic transformation immediately']
      },
    ]
  },

  // ─── 2. SAH ──────────────────────────────────────────────────
  'sah': {
    flashcards: [
      { question: 'What is the first-line investigation for suspected SAH?', answer: 'Non-contrast CT head — acute blood appears hyperdense (bright), distributed in basal cisterns and sulci.' },
      { question: 'When should lumbar puncture be performed after CT in SAH?', answer: 'If CT is done >6 hours after symptom onset and is normal → perform LP at least 12 hours after onset to allow xanthochromia to develop.' },
      { question: 'What does xanthochromia mean and why is it important?', answer: 'Yellow discolouration of CSF from RBC breakdown. It distinguishes true SAH from a traumatic tap.' },
      { question: 'If CT is done within 6 hours and is normal, should LP be done?', answer: 'New guidelines suggest LP is NOT required — consider an alternative diagnosis.' },
      { question: 'What are the two methods for securing a ruptured aneurysm?', answer: '1. Endovascular coiling (preferred if feasible)\n2. Surgical clipping\nBoth should be done within 24 hours.' },
      { question: 'What drug is mandatory for vasospasm prevention in SAH?', answer: 'Nimodipine 60 mg orally every 4 hours for 21 days — this is mandatory.' },
      { question: 'What is the target SBP in the acute phase of SAH?', answer: 'SBP 140–160 mmHg. Use labetalol or nicardipine — avoid nitroprusside.' },
      { question: 'What GCS warrants intubation in SAH?', answer: 'GCS ≤8, or if there is agitation or respiratory compromise.' },
      { question: 'How is raised ICP managed in SAH?', answer: '1. Head elevation\n2. CSF drainage via external ventricular drain (EVD) if hydrocephalus\n3. Osmotic therapy with mannitol' },
      { question: 'What anti-seizure prophylaxis is used in SAH?', answer: 'Short-term levetiracetam for 3–7 days.' },
      { question: 'What cardiac complication can occur in SAH?', answer: 'Neurogenic stunned myocardium — cardiac arrhythmias from catecholamine surge. Requires monitoring.' },
      { question: 'What two investigations confirm the aneurysm source in SAH?', answer: '1. CT intracranial angiogram (CTA)\n2. Digital subtraction angiography (DSA/catheter angiogram)' },
    ],
    quiz: [
      {
        question: 'A 45-year-old has "the worst headache of my life." CT at 2 hours is normal. What is the correct next step?',
        correct: 'No LP needed; CT within 6 hours with normal result makes SAH unlikely — consider alternative diagnosis',
        options: ['No LP needed; CT within 6 hours with normal result makes SAH unlikely — consider alternative diagnosis', 'Perform LP immediately', 'Perform LP after 12 hours', 'Discharge with analgesia']
      },
      {
        question: 'What is the mandatory drug for vasospasm prevention in SAH?',
        correct: 'Nimodipine 60 mg every 4 hours for 21 days',
        options: ['Nimodipine 60 mg every 4 hours for 21 days', 'Nifedipine 10 mg twice daily', 'Amlodipine 5 mg daily', 'Verapamil 80 mg three times daily']
      },
      {
        question: 'Which CSF finding distinguishes SAH from a traumatic tap?',
        correct: 'Xanthochromia',
        options: ['Xanthochromia', 'Elevated protein only', 'RBCs in all tubes equally', 'Raised opening pressure']
      },
      {
        question: 'What is the preferred method for aneurysm securing in SAH when feasible?',
        correct: 'Endovascular coiling',
        options: ['Endovascular coiling', 'Surgical clipping', 'Conservative management with nimodipine', 'Stereotactic radiosurgery']
      },
      {
        question: 'Target SBP in acute SAH management is:',
        correct: '140–160 mmHg',
        options: ['140–160 mmHg', '<130 mmHg', '160–180 mmHg', '<120 mmHg']
      },
      {
        question: 'Which anticonvulsant is used for short-term seizure prophylaxis in SAH?',
        correct: 'Levetiracetam for 3–7 days',
        options: ['Levetiracetam for 3–7 days', 'Phenytoin for 6 months', 'Valproate indefinitely', 'Carbamazepine for 3 months']
      },
      {
        question: 'When should aneurysm securing (coiling or clipping) ideally take place after SAH?',
        correct: 'Within 24 hours',
        options: ['Within 24 hours', 'Within 48 hours', 'Within 7 days', 'After vasospasm resolves (day 14)']
      },
      {
        question: 'A CT done 8 hours after onset is normal in suspected SAH. What should you do next?',
        correct: 'Perform LP (at least 12 hours after onset) to look for xanthochromia',
        options: ['Perform LP (at least 12 hours after onset) to look for xanthochromia', 'Discharge the patient', 'Perform CT angiogram immediately', 'Repeat CT at 24 hours']
      },
    ]
  },

  // ─── 3. Increased ICP ─────────────────────────────────────────
  'increased-icp': {
    flashcards: [
      { question: 'What is the first-line imaging in suspected raised ICP?', answer: 'Urgent non-contrast CT head. MRI brain if CT is unclear or posterior fossa pathology is suspected.' },
      { question: 'What fundoscopic finding suggests raised ICP?', answer: 'Papilloedema — blurring of the optic disc margins due to optic nerve sheath swelling from elevated CSF pressure.' },
      { question: 'What is the dose of mannitol for acute ICP management?', answer: '0.25–1 g/kg IV bolus. Monitor osmolality and renal function.' },
      { question: 'When are steroids indicated in raised ICP?', answer: 'Only for vasogenic oedema (e.g., around a tumour or abscess) — use dexamethasone. NOT for cytotoxic oedema (e.g., infarction).' },
      { question: 'What head position is used to manage raised ICP?', answer: 'Head elevated 30° with neutral neck alignment to avoid venous compression.' },
      { question: 'What is an external ventricular drain (EVD) and what does it do?', answer: 'A catheter inserted into the cerebral ventricle — both diagnostic (measures ICP) and therapeutic (drains CSF to reduce pressure).' },
      { question: 'What is decompressive craniectomy used for?', answer: 'Refractory raised ICP that does not respond to medical management. A portion of the skull is removed to allow brain expansion.' },
      { question: 'Why is LP contraindicated in raised ICP with mass effect?', answer: 'Risk of transtentorial herniation (coning) — sudden pressure drop below causes the brainstem to herniate downward through the tentorium.' },
      { question: 'What blood/electrolyte abnormality can cause or worsen raised ICP?', answer: 'Hyponatraemia (low Na⁺) causes cerebral oedema. Also hypoxia and hypercapnia increase cerebral blood volume and raise ICP.' },
    ],
    quiz: [
      {
        question: 'Which is the FIRST-LINE investigation in suspected raised intracranial pressure?',
        correct: 'Urgent non-contrast CT head',
        options: ['Urgent non-contrast CT head', 'Lumbar puncture', 'MRI with gadolinium', 'EEG']
      },
      {
        question: 'What is the correct head position to reduce ICP?',
        correct: '30° elevation, neutral neck',
        options: ['30° elevation, neutral neck', 'Flat (0°) to maximise perfusion', 'Trendelenburg (head down)', '45° elevation, neck flexed']
      },
      {
        question: 'Steroids (dexamethasone) are indicated for which type of cerebral oedema?',
        correct: 'Vasogenic oedema (around tumours/abscesses)',
        options: ['Vasogenic oedema (around tumours/abscesses)', 'Cytotoxic oedema (infarction)', 'All types of cerebral oedema', 'Interstitial oedema from hydrocephalus']
      },
      {
        question: 'The standard dose of mannitol for acute ICP reduction is:',
        correct: '0.25–1 g/kg IV bolus',
        options: ['0.25–1 g/kg IV bolus', '2–4 g/kg oral', '0.1 g/kg slow infusion', '1 g/kg SC injection']
      },
      {
        question: 'Why is LP contraindicated in raised ICP with a visible mass lesion?',
        correct: 'Risk of transtentorial herniation (brainstem coning)',
        options: ['Risk of transtentorial herniation (brainstem coning)', 'LP is inaccurate in this setting', 'It would reduce ICP too rapidly', 'It could cause meningitis']
      },
      {
        question: 'An external ventricular drain (EVD) is used to:',
        correct: 'Both measure ICP and drain CSF therapeutically',
        options: ['Both measure ICP and drain CSF therapeutically', 'Only measure ICP', 'Only administer medication intrathecally', 'Replace lumbar puncture for diagnostics only']
      },
    ]
  },

  // ─── 4. Benign ICP ────────────────────────────────────────────
  'benign-icp': {
    flashcards: [
      { question: 'Who is the typical patient with Idiopathic Intracranial Hypertension (IIH)?', answer: 'Young, obese women of childbearing age.' },
      { question: 'What is the CSF opening pressure in IIH?', answer: '>25 cm H₂O in adults, with normal CSF composition.' },
      { question: 'What is the classic visual field defect in IIH?', answer: 'Enlarged blind spot and peripheral field loss, detected on perimetry.' },
      { question: 'What MRI finding is seen in IIH?', answer: 'Normal brain (no mass, no hydrocephalus, no venous sinus thrombosis). MR venography is done to exclude sinus thrombosis.' },
      { question: 'What is the first-line pharmacological treatment for IIH?', answer: 'Acetazolamide — a carbonic anhydrase inhibitor that decreases CSF production.' },
      { question: 'What is the weight loss target in IIH?', answer: '5–10% of body weight can significantly improve outcomes.' },
      { question: 'What drugs can cause IIH?', answer: 'Tetracyclines, Vitamin A derivatives (e.g., isotretinoin), and the combined oral contraceptive pill (COCP).' },
      { question: 'What are the surgical options for IIH?', answer: '1. CSF diversion: ventriculoperitoneal (VP) or lumboperitoneal (LP) shunt\n2. Serial lumbar punctures (temporary relief only)' },
      { question: 'What is the Modified Dandy Criteria for IIH?', answer: '1. Symptoms/signs of raised ICP\n2. No localising deficit (except CN VI palsy)\n3. Normal neuroimaging\n4. Elevated CSF pressure with normal contents\n5. No alternative cause' },
      { question: 'What tool measures optic nerve head swelling in IIH?', answer: 'Optical Coherence Tomography (OCT).' },
    ],
    quiz: [
      {
        question: 'What is the typical demographic for Idiopathic Intracranial Hypertension?',
        correct: 'Young obese women of childbearing age',
        options: ['Young obese women of childbearing age', 'Elderly men with hypertension', 'Children with viral illness', 'Middle-aged men with sleep apnoea']
      },
      {
        question: 'What CSF opening pressure defines raised ICP in IIH?',
        correct: '>25 cm H₂O',
        options: ['>25 cm H₂O', '>15 cm H₂O', '>20 cm H₂O', '>30 cm H₂O']
      },
      {
        question: 'What is the first-line drug for IIH?',
        correct: 'Acetazolamide',
        options: ['Acetazolamide', 'Furosemide', 'Dexamethasone', 'Topiramate']
      },
      {
        question: 'Which of these drugs can CAUSE IIH?',
        correct: 'Tetracyclines',
        options: ['Tetracyclines', 'Metformin', 'Atorvastatin', 'Amoxicillin']
      },
      {
        question: 'The Modified Dandy Criteria for IIH requires which CN palsy as an acceptable exception to the "no localising deficit" rule?',
        correct: 'CN VI palsy (abducens)',
        options: ['CN VI palsy (abducens)', 'CN III palsy (oculomotor)', 'CN VII palsy (facial)', 'CN II palsy (optic)']
      },
      {
        question: 'What is the role of serial lumbar punctures in IIH?',
        correct: 'Temporary symptomatic relief only — not a definitive treatment',
        options: ['Temporary symptomatic relief only — not a definitive treatment', 'First-line definitive treatment', 'Diagnostic only', 'Used to administer intrathecal steroids']
      },
      {
        question: 'Which imaging must be performed to exclude venous sinus thrombosis in IIH?',
        correct: 'MRI brain + MR venography',
        options: ['MRI brain + MR venography', 'CT head only', 'Carotid Doppler', 'PET scan']
      },
    ]
  },

  // ─── 5. Multiple Sclerosis ────────────────────────────────────
  'ms': {
    flashcards: [
      { question: 'What are the four accepted locations for demyelination in MS (McDonald Criteria)?', answer: '1. Periventricular\n2. Cortical or juxtacortical\n3. Infratentorial\n4. Spinal cord' },
      { question: 'What does "Dissemination in Space" mean in MS diagnosis?', answer: 'Evidence of ≥2 different CNS areas affected, shown clinically or on MRI.' },
      { question: 'What is the most sensitive MRI sequence for MS plaques?', answer: 'MRI brain with FLAIR/T2 sequences — shows white matter hyperintense abnormal patches.' },
      { question: 'What is the most diagnostic CSF finding in MS?', answer: 'Oligoclonal IgG bands (OCBs) in CSF but NOT in serum — present in ~85–95% of MS patients.' },
      { question: 'What does a normal CSF glucose and mild lymphocytosis (<50 cells/µl) suggest in MS?', answer: 'These are typical MS CSF findings — low glucose or very high cell count (>100 cells/µl) would suggest an alternative diagnosis.' },
      { question: 'What is the acute relapse treatment in MS?', answer: 'High-dose steroids (oral or IV methylprednisolone) for 5 days. Shortens relapse duration but does NOT alter degree of recovery.' },
      { question: 'How does natalizumab work in MS?', answer: 'Recombinant anti-alpha-4-beta-1-integrin monoclonal antibody — prevents leucocyte migration across the blood-brain barrier.' },
      { question: 'How does fingolimod work?', answer: 'S1P receptor modulator — prevents lymphocytes from leaving lymph nodes, reducing CNS inflammation.' },
      { question: 'How does ocrelizumab work?', answer: 'Humanised anti-CD20 monoclonal antibody — depletes B cells.' },
      { question: 'What is the first-line treatment for fatigue in MS?', answer: 'Amantadine.' },
      { question: 'What is first-line treatment for spasticity in MS?', answer: 'Baclofen and gabapentin, plus physiotherapy.' },
      { question: 'What treats oscillopsia in MS?', answer: 'Gabapentin is first-line.' },
      { question: 'What are the newer biomarkers in MS CSF?', answer: '1. Kappa free light chains (κ-FLC) — sensitive alternative to OCBs\n2. Neurofilament light chain (NfL) — marker of axonal injury and disease activity' },
      { question: 'What CSF findings would argue AGAINST MS?', answer: 'Very high WBC (>100 cells/µL), markedly elevated protein (>100 mg/dL), or low glucose.' },
    ],
    quiz: [
      {
        question: 'The most diagnostic CSF finding in MS is:',
        correct: 'Oligoclonal IgG bands in CSF but not in serum',
        options: ['Oligoclonal IgG bands in CSF but not in serum', 'Elevated protein >100 mg/dL', 'Low glucose', 'WBC >100 cells/µL']
      },
      {
        question: 'A patient has MS relapse. What is the correct treatment?',
        correct: 'High-dose methylprednisolone for 5 days',
        options: ['High-dose methylprednisolone for 5 days', 'Natalizumab infusion', 'Oral fingolimod', 'Glatiramer acetate injection']
      },
      {
        question: 'Steroids in MS acute relapse do which of the following?',
        correct: 'Shorten the duration of relapse only — do not alter degree of recovery',
        options: ['Shorten the duration of relapse only — do not alter degree of recovery', 'Shorten the relapse and improve the degree of recovery', 'Prevent future relapses', 'Have no proven benefit']
      },
      {
        question: 'How does natalizumab work in MS?',
        correct: 'Inhibits leucocyte migration across the blood-brain barrier',
        options: ['Inhibits leucocyte migration across the blood-brain barrier', 'Traps lymphocytes in lymph nodes', 'Depletes B cells via CD20', 'Blocks glutamate receptors']
      },
      {
        question: 'Which drug is used for oscillopsia in MS?',
        correct: 'Gabapentin',
        options: ['Gabapentin', 'Amantadine', 'Baclofen', 'Betahistine']
      },
      {
        question: 'Which of the following CSF findings argues AGAINST a diagnosis of MS?',
        correct: 'WBC >100 cells/µL',
        options: ['WBC >100 cells/µL', 'Oligoclonal bands', 'Mildly elevated protein <100 mg/dL', 'Normal glucose']
      },
      {
        question: 'Fingolimod (S1P receptor modulator) works by:',
        correct: 'Preventing lymphocytes from leaving lymph nodes',
        options: ['Preventing lymphocytes from leaving lymph nodes', 'Blocking TNF-alpha', 'Depleting CD20+ B cells', 'Inhibiting leucocyte migration across the BBB']
      },
      {
        question: 'Which of the following is the four accepted CNS locations in McDonald Criteria for MS?',
        correct: 'Periventricular, juxtacortical, infratentorial, spinal cord',
        options: ['Periventricular, juxtacortical, infratentorial, spinal cord', 'Basal ganglia, thalamus, brainstem, cerebellum', 'Hippocampus, frontal lobe, cerebellum, optic nerve', 'Corpus callosum, internal capsule, brainstem, spinal cord']
      },
    ]
  },

  // ─── 6. MND ──────────────────────────────────────────────────
  'mnd': {
    flashcards: [
      { question: 'How is MND diagnosed?', answer: 'Primarily clinical diagnosis. Supported by nerve conduction studies (normal motor conduction) and EMG (reduced action potentials with increased amplitude). MRI excludes cervical cord compression.' },
      { question: 'What does EMG show in MND?', answer: 'Reduced number of action potentials with increased amplitude — reflecting motor unit remodelling.' },
      { question: 'What does nerve conduction study show in MND?', answer: 'Normal motor conduction — helps exclude peripheral neuropathy.' },
      { question: 'Why is MRI performed in MND?', answer: 'To exclude the differential diagnosis of cervical cord compression and myelopathy.' },
      { question: 'What is the only disease-modifying drug for MND?', answer: 'Riluzole — prevents glutamate receptor stimulation. Used mainly in ALS. Prolongs life by approximately 3 months.' },
      { question: 'What respiratory support is used in MND?', answer: 'Non-invasive ventilation (BIPAP) at night — shown to provide a survival benefit of approximately 7 months.' },
      { question: 'What is the mechanism of riluzole?', answer: 'Blocks presynaptic glutamate release and glutamate receptors, reducing excitotoxicity.' },
    ],
    quiz: [
      {
        question: 'The diagnosis of Motor Neuron Disease is primarily:',
        correct: 'Clinical',
        options: ['Clinical', 'Based on MRI findings', 'Based on EMG alone', 'Based on genetic testing']
      },
      {
        question: 'What does EMG show in MND?',
        correct: 'Reduced number of action potentials with increased amplitude',
        options: ['Reduced number of action potentials with increased amplitude', 'Normal EMG', 'Increased action potentials with reduced amplitude', 'Fibrillation potentials only']
      },
      {
        question: 'Riluzole in MND works by:',
        correct: 'Preventing stimulation of glutamate receptors',
        options: ['Preventing stimulation of glutamate receptors', 'Reducing inflammation', 'Blocking calcium channels', 'Increasing dopamine']
      },
      {
        question: 'Riluzole in ALS prolongs survival by approximately:',
        correct: '3 months',
        options: ['3 months', '12 months', '6 months', '18 months']
      },
      {
        question: 'BIPAP in MND provides a survival benefit of approximately:',
        correct: '7 months',
        options: ['7 months', '3 months', '12 months', '1 month']
      },
      {
        question: 'Why is MRI performed in suspected MND?',
        correct: 'To exclude cervical cord compression and myelopathy',
        options: ['To exclude cervical cord compression and myelopathy', 'To confirm the diagnosis', 'To identify the affected motor neurons', 'To guide surgical planning']
      },
    ]
  },

  // ─── 7. GBS ──────────────────────────────────────────────────
  'gbs': {
    flashcards: [
      { question: 'What is the hallmark CSF finding in GBS?', answer: 'Albuminocytologic dissociation — elevated protein with NORMAL cell count (<10 cells/µL).' },
      { question: 'When does CSF protein elevation appear in GBS?', answer: 'May be absent in the first week, but present in >90% of cases by the second week.' },
      { question: 'What cell count in CSF should make you question the diagnosis of GBS?', answer: '>50 cells/µL — this suggests an alternative diagnosis.' },
      { question: 'What are the two main treatments for GBS?', answer: '1. Plasma exchange\n2. IV immunoglobulin (IVIG)\nBoth are equally effective. No benefit in combining them.' },
      { question: 'When is plasma exchange most effective in GBS?', answer: 'Only within the first week of symptoms.' },
      { question: 'Why might IVIG be preferred over plasma exchange in GBS?', answer: 'IVIG is easier to administer and tends to have fewer side effects.' },
      { question: 'Are steroids useful in GBS?', answer: 'No — steroids and immunosuppressants have NOT been shown to be beneficial in GBS.' },
      { question: 'What anti-ganglioside antibody is associated with the Miller-Fisher variant of GBS?', answer: 'Anti-GQ1b antibodies — associated with ophthalmoplegia, ataxia, and areflexia.' },
      { question: 'What infectious agent most commonly triggers GBS?', answer: 'Campylobacter jejuni — detected by stool culture.' },
      { question: 'What respiratory monitoring is essential in GBS?', answer: 'Pulmonary function tests (PFTs) and arterial blood gases — respiratory muscle involvement can rapidly lead to failure requiring ventilation.' },
      { question: 'What NCS pattern suggests GBS?', answer: 'Demyelinating features on nerve conduction studies — prolonged distal latencies, slowed conduction velocity, conduction block.' },
    ],
    quiz: [
      {
        question: 'The hallmark CSF finding in GBS is:',
        correct: 'Elevated protein with normal cell count (albuminocytologic dissociation)',
        options: ['Elevated protein with normal cell count (albuminocytologic dissociation)', 'Elevated protein with pleocytosis', 'Low glucose with elevated protein', 'Normal CSF in all parameters']
      },
      {
        question: 'Are steroids effective in GBS?',
        correct: 'No — steroids have not been shown to be beneficial',
        options: ['No — steroids have not been shown to be beneficial', 'Yes — first-line treatment', 'Yes — effective in combination with IVIG', 'Yes — but only in the axonal variant']
      },
      {
        question: 'Plasma exchange in GBS is most effective when given:',
        correct: 'Within the first week of symptoms',
        options: ['Within the first week of symptoms', 'Anytime within 6 weeks', 'Only after 2 weeks', 'In the second or third week']
      },
      {
        question: 'CSF white cell count >50 cells/µL in suspected GBS suggests:',
        correct: 'An alternative diagnosis',
        options: ['An alternative diagnosis', 'Severe GBS', 'Axonal variant of GBS', 'Meningitis complicating GBS']
      },
      {
        question: 'Which infectious trigger is most commonly associated with GBS?',
        correct: 'Campylobacter jejuni',
        options: ['Campylobacter jejuni', 'Mycoplasma pneumoniae', 'Epstein-Barr virus', 'Cytomegalovirus']
      },
      {
        question: 'Which anti-ganglioside antibody is associated with the Miller-Fisher variant?',
        correct: 'Anti-GQ1b',
        options: ['Anti-GQ1b', 'Anti-GM1', 'Anti-GD1a', 'Anti-GQ2b']
      },
      {
        question: 'Comparing IVIG and plasma exchange in GBS:',
        correct: 'They are equally effective; no benefit combining both',
        options: ['They are equally effective; no benefit combining both', 'IVIG is superior', 'Plasma exchange is superior', 'Combining both is always preferred']
      },
    ]
  },

  // ─── 8. Myasthenia Gravis ─────────────────────────────────────
  'mg': {
    flashcards: [
      { question: 'What is the most sensitive electrodiagnostic test for MG?', answer: 'Single-fiber EMG (SFEMG) — the most sensitive test for MG.' },
      { question: 'What does the Tensilon (edrophonium) test do?', answer: 'IV edrophonium (short-acting AChE inhibitor) causes rapid transient improvement in muscle strength, supporting MG diagnosis. Largely replaced by more specific tests now.' },
      { question: 'What is the AChR antibody positivity rate in generalised MG?', answer: '~85% of patients with generalised MG are AChR antibody positive.' },
      { question: 'What antibody is found in seronegative (AChR-) MG?', answer: 'Anti-MuSK (muscle-specific kinase) antibodies — found in 1–15% of all MG cases, associated with more severe disease.' },
      { question: 'What is the first-line symptomatic treatment for MG?', answer: 'Pyridostigmine (acetylcholinesterase inhibitor). Monitor for cholinergic side effects: abdominal cramps, diarrhoea, excessive salivation.' },
      { question: 'What is the first-line immunosuppressive in MG?', answer: 'Corticosteroids (prednisolone). Other options: azathioprine, cyclosporine.' },
      { question: 'What is a myasthenic crisis?', answer: 'Life-threatening exacerbation with respiratory failure. Requires immediate hospitalisation, ITU, and plasma exchange or IVIG.' },
      { question: 'When is thymectomy indicated in MG?', answer: 'Recommended for patients with thymoma. May reduce immunosuppression requirements and improve symptoms.' },
      { question: 'What imaging is done in all MG patients?', answer: 'Chest CT or MRI to screen for thymoma or thymic hyperplasia.' },
      { question: 'What is repetitive nerve stimulation (RNS) and what does it show in MG?', answer: 'Repetitive electrical stimulation of a peripheral nerve → shows a DECREMENT response in CMAP amplitude, supporting MG diagnosis.' },
    ],
    quiz: [
      {
        question: 'The most sensitive electrodiagnostic test for MG is:',
        correct: 'Single-fiber EMG (SFEMG)',
        options: ['Single-fiber EMG (SFEMG)', 'Repetitive nerve stimulation', 'Standard EMG', 'Nerve conduction study']
      },
      {
        question: 'What % of generalised MG patients are AChR antibody positive?',
        correct: '~85%',
        options: ['~85%', '~50%', '~30%', '~95%']
      },
      {
        question: 'First-line symptomatic treatment for MG is:',
        correct: 'Pyridostigmine',
        options: ['Pyridostigmine', 'Prednisolone', 'Azathioprine', 'Neostigmine']
      },
      {
        question: 'Management of a myasthenic crisis includes:',
        correct: 'Hospitalisation + mechanical ventilation if needed + plasma exchange or IVIG',
        options: ['Hospitalisation + mechanical ventilation if needed + plasma exchange or IVIG', 'Increase pyridostigmine dose', 'High-dose steroids only', 'Thymectomy immediately']
      },
      {
        question: 'Anti-MuSK antibodies are found in which MG patients?',
        correct: 'AChR antibody-negative patients (seronegative MG)',
        options: ['AChR antibody-negative patients (seronegative MG)', 'All generalised MG patients', 'Ocular MG patients only', 'Post-thymectomy patients']
      },
      {
        question: 'Thymectomy in MG is recommended for:',
        correct: 'Patients with thymoma',
        options: ['Patients with thymoma', 'All MG patients regardless of thymus status', 'Only patients under 30', 'Only seronegative patients']
      },
      {
        question: 'Repetitive nerve stimulation in MG typically shows:',
        correct: 'A decrement in CMAP amplitude',
        options: ['A decrement in CMAP amplitude', 'An increment in CMAP amplitude', 'Normal conduction', 'Prolonged distal latency']
      },
    ]
  },

  // ─── 9. LEMS ─────────────────────────────────────────────────
  'lems': {
    flashcards: [
      { question: 'What is the key electrophysiological finding in LEMS?', answer: 'High-frequency (20–50 Hz) stimulation or brief maximal voluntary contraction causes a marked INCREMENT (>100%) in CMAP amplitude — the opposite of MG.' },
      { question: 'What antibody confirms LEMS?', answer: 'Anti-P/Q-type voltage-gated calcium channel (VGCC) antibodies — present in the majority of cases.' },
      { question: 'What malignancy is most associated with LEMS?', answer: 'Small cell lung cancer (SCLC) — paraneoplastic LEMS.' },
      { question: 'What imaging is mandatory in all LEMS patients?', answer: 'Contrast-enhanced CT chest to screen for occult malignancy, especially small cell lung cancer.' },
      { question: 'What is 3,4-diaminopyridine and how does it work?', answer: 'Blocks potassium channel efflux → prolongs action potential duration → keeps calcium channels open longer → increases ACh release at the NMJ.' },
      { question: 'How does LEMS differ from MG clinically?', answer: 'LEMS: proximal limb weakness that IMPROVES with repeated movement (facilitation). MG: fatigable weakness that WORSENS with exercise.' },
      { question: 'What immunosuppression is used in LEMS?', answer: 'Prednisolone and/or azathioprine.' },
      { question: 'What is the underlying mechanism of LEMS?', answer: 'Autoantibodies against presynaptic P/Q-type VGCC reduce calcium influx, decreasing ACh vesicle release at the NMJ.' },
    ],
    quiz: [
      {
        question: 'The hallmark electrophysiological finding in LEMS is:',
        correct: 'Marked INCREMENT (>100%) in CMAP amplitude on high-frequency stimulation',
        options: ['Marked INCREMENT (>100%) in CMAP amplitude on high-frequency stimulation', 'Decrement in CMAP amplitude', 'Normal nerve conduction', 'Fibrillation potentials on EMG']
      },
      {
        question: 'Which antibody is diagnostic for LEMS?',
        correct: 'Anti-P/Q-type voltage-gated calcium channel antibodies',
        options: ['Anti-P/Q-type voltage-gated calcium channel antibodies', 'Anti-AChR antibodies', 'Anti-MuSK antibodies', 'Anti-GM1 antibodies']
      },
      {
        question: 'What malignancy is most commonly associated with LEMS?',
        correct: 'Small cell lung cancer',
        options: ['Small cell lung cancer', 'Thymoma', 'Non-Hodgkin lymphoma', 'Breast cancer']
      },
      {
        question: 'How does 3,4-diaminopyridine treat LEMS?',
        correct: 'Blocks K+ channels → prolongs AP → more ACh released',
        options: ['Blocks K+ channels → prolongs AP → more ACh released', 'Directly stimulates ACh receptors', 'Inhibits acetylcholinesterase', 'Blocks VGCC antibodies']
      },
      {
        question: 'Mandatory initial investigation in all LEMS patients is:',
        correct: 'Contrast-enhanced CT chest',
        options: ['Contrast-enhanced CT chest', 'MRI brain', 'Chest X-ray only', 'PET-CT of whole body']
      },
      {
        question: 'LEMS differs from MG in that weakness in LEMS:',
        correct: 'Temporarily improves with repeated movement (facilitation)',
        options: ['Temporarily improves with repeated movement (facilitation)', 'Worsens with repeated movement', 'Only affects ocular muscles', 'Is symmetrical and distal']
      },
    ]
  },

  // ─── 10. Parkinsonism ─────────────────────────────────────────
  'parkinsonism': {
    flashcards: [
      { question: 'What are the four cardinal features of Parkinsonism?', answer: '1. Resting tremor (pill-rolling, 4–6 Hz)\n2. Rigidity (cogwheel or lead-pipe)\n3. Bradykinesia\n4. Postural instability' },
      { question: 'What is the first-line pharmacological treatment for PD motor symptoms?', answer: 'Levodopa + Carbidopa (co-careldopa) — most effective for motor symptoms.' },
      { question: 'What is the mechanism of carbidopa in PD treatment?', answer: 'Peripheral DOPA decarboxylase inhibitor — prevents peripheral conversion of levodopa to dopamine, allowing more levodopa to cross the BBB.' },
      { question: 'What are dopamine agonists used in PD?', answer: 'Pramipexole, ropinirole (oral); rotigotine (patch). Used as monotherapy in younger patients or add-on to levodopa.' },
      { question: 'What are MAO-B inhibitors used in PD?', answer: 'Rasagiline, selegiline — block breakdown of dopamine. Used as monotherapy in early disease or as adjunct.' },
      { question: 'What is the "on-off" phenomenon in PD?', answer: 'Fluctuation in motor response to levodopa — periods of good motor control ("on") followed by sudden loss of effect ("off"), often requiring medication timing adjustments.' },
      { question: 'What are COMT inhibitors and when are they used?', answer: 'Entacapone, tolcapone — inhibit catechol-O-methyltransferase, prolonging levodopa action. Used to reduce "off" time.' },
      { question: 'What imaging is used in PD diagnosis?', answer: 'Primarily clinical. DaTSCAN (dopamine transporter scan) can confirm nigrostriatal degeneration. MRI to exclude secondary causes.' },
      { question: 'What are the non-motor features of PD?', answer: 'Dementia, depression, sleep disorders (REM sleep behaviour disorder), autonomic dysfunction (orthostatic hypotension, constipation), anosmia, psychosis.' },
      { question: 'What is deep brain stimulation (DBS) used for in PD?', answer: 'Advanced or refractory PD — targets the subthalamic nucleus or globus pallidus interna to reduce motor fluctuations.' },
    ],
    quiz: [
      {
        question: 'The most effective treatment for motor symptoms of Parkinson\'s disease is:',
        correct: 'Levodopa + Carbidopa',
        options: ['Levodopa + Carbidopa', 'Dopamine agonists alone', 'MAO-B inhibitors', 'Anticholinergics']
      },
      {
        question: 'The role of carbidopa in co-careldopa is to:',
        correct: 'Prevent peripheral conversion of levodopa to dopamine',
        options: ['Prevent peripheral conversion of levodopa to dopamine', 'Enhance dopamine release in the CNS', 'Block dopamine reuptake', 'Inhibit MAO-B']
      },
      {
        question: 'The "on-off" phenomenon in Parkinson\'s disease refers to:',
        correct: 'Fluctuations between periods of good motor control and sudden loss of effect',
        options: ['Fluctuations between periods of good motor control and sudden loss of effect', 'Tremor being present at rest only', 'Switching between drug classes', 'Dyskinesia from excess dopamine']
      },
      {
        question: 'Which of the following is NOT a cardinal feature of Parkinsonism?',
        correct: 'Intention tremor',
        options: ['Intention tremor', 'Resting tremor', 'Bradykinesia', 'Cogwheel rigidity']
      },
      {
        question: 'COMT inhibitors (e.g., entacapone) are used in PD to:',
        correct: 'Reduce "off" time by prolonging levodopa effect',
        options: ['Reduce "off" time by prolonging levodopa effect', 'Prevent levodopa from causing dyskinesia', 'Replace levodopa in advanced disease', 'Block dopamine breakdown in the CNS']
      },
      {
        question: 'DaTSCAN in Parkinson\'s disease confirms:',
        correct: 'Nigrostriatal dopaminergic degeneration',
        options: ['Nigrostriatal dopaminergic degeneration', 'Lewy body distribution', 'Response to levodopa', 'Suitability for DBS surgery']
      },
    ]
  },

  // ─── 11. Meningitis ──────────────────────────────────────────
  'meningitis': {
    flashcards: [
      { question: 'What is the classic clinical triad of bacterial meningitis?', answer: 'Headache, fever, and neck stiffness (meningism). Also photophobia, phonophobia, and altered consciousness.' },
      { question: 'What are Kernig\'s and Brudzinski\'s signs?', answer: 'Kernig\'s: unable to extend knee when hip is flexed. Brudzinski\'s: passive neck flexion causes involuntary hip/knee flexion. Both indicate meningism.' },
      { question: 'What does non-blanching purpuric rash in meningitis suggest?', answer: 'Meningococcal septicaemia (Neisseria meningitidis) — a medical emergency.' },
      { question: 'When is LP contraindicated in meningitis?', answer: 'Signs of raised ICP (papilloedema, focal neuro signs, GCS <13, seizures) — CT head must be done first.' },
      { question: 'What is the empirical antibiotic treatment for bacterial meningitis in adults?', answer: 'IV Ceftriaxone (or cefotaxime). Add ampicillin for Listeria coverage in the elderly, immunocompromised, or neonates.' },
      { question: 'When should dexamethasone be given in bacterial meningitis?', answer: 'Before or with the first dose of antibiotics — reduces inflammation and lowers risk of hearing loss (especially in pneumococcal meningitis).' },
      { question: 'What CSF findings characterise bacterial meningitis?', answer: 'Turbid/cloudy CSF, low glucose (<40% of serum), elevated protein (>0.45 g/L), high WBC (predominantly neutrophils >100 cells/µL).' },
      { question: 'What CSF findings characterise viral meningitis?', answer: 'Clear CSF, normal glucose, mildly elevated protein, lymphocytosis (predominantly lymphocytes, <500 cells/µL).' },
      { question: 'What organism causes most bacterial meningitis in adults?', answer: 'Streptococcus pneumoniae (most common in adults). Neisseria meningitidis in young adults.' },
      { question: 'What is the chemoprophylaxis for close contacts of meningococcal meningitis?', answer: 'Rifampicin or single-dose ciprofloxacin for household/close contacts.' },
    ],
    quiz: [
      {
        question: 'Classic CSF findings in bacterial meningitis include:',
        correct: 'Low glucose, high protein, neutrophilic pleocytosis',
        options: ['Low glucose, high protein, neutrophilic pleocytosis', 'Normal glucose, high protein, lymphocytosis', 'Low glucose, normal protein, no cells', 'High glucose, low protein, eosinophilia']
      },
      {
        question: 'When is LP contraindicated in suspected meningitis?',
        correct: 'When there are signs of raised ICP (papilloedema, focal signs, GCS <13)',
        options: ['When there are signs of raised ICP (papilloedema, focal signs, GCS <13)', 'When the patient has a rash', 'When fever >38°C', 'When the patient is over 60']
      },
      {
        question: 'Dexamethasone in bacterial meningitis should be given:',
        correct: 'Before or with the first dose of antibiotics',
        options: ['Before or with the first dose of antibiotics', 'After 48 hours of antibiotics', 'Only if CSF shows no bacteria', 'After clinical improvement']
      },
      {
        question: 'Non-blanching purpuric rash in meningitis suggests:',
        correct: 'Meningococcal disease (N. meningitidis)',
        options: ['Meningococcal disease (N. meningitidis)', 'Pneumococcal disease', 'Viral meningitis', 'Herpes simplex encephalitis']
      },
      {
        question: 'Chemoprophylaxis for close contacts of meningococcal meningitis is:',
        correct: 'Rifampicin or single-dose ciprofloxacin',
        options: ['Rifampicin or single-dose ciprofloxacin', 'IV ceftriaxone', 'Oral amoxicillin', 'No prophylaxis needed']
      },
    ]
  },

  // ─── 12. Transverse Myelitis ──────────────────────────────────
  'transverse-myelitis': {
    flashcards: [
      { question: 'What is transverse myelitis?', answer: 'Acute inflammatory demyelination or necrosis of the spinal cord affecting a discrete horizontal segment, causing bilateral motor, sensory, and autonomic dysfunction.' },
      { question: 'What is the classic sensory finding in transverse myelitis?', answer: 'A sensory level — below a specific dermatomal level there is loss of sensation.' },
      { question: 'What investigations are done in transverse myelitis?', answer: 'MRI spine (investigation of choice — shows intramedullary T2 signal change). Also MRI brain (to rule out MS). Blood tests: AQP4-IgG (NMO), MOG-IgG.' },
      { question: 'What is the first-line treatment for acute transverse myelitis?', answer: 'High-dose IV methylprednisolone (1 g/day for 3–5 days).' },
      { question: 'What antibodies distinguish NMO spectrum disorder from MS?', answer: 'AQP4-IgG (aquaporin-4 antibody) — positive in NMOSD. Also MOG-IgG in MOG antibody-associated disease.' },
      { question: 'What levels of the spinal cord are most commonly affected in transverse myelitis?', answer: 'Thoracic cord (most common), also cervical cord.' },
    ],
    quiz: [
      {
        question: 'Investigation of choice in transverse myelitis is:',
        correct: 'MRI spine',
        options: ['MRI spine', 'CT myelogram', 'Plain X-ray spine', 'Nerve conduction studies']
      },
      {
        question: 'The hallmark clinical feature of transverse myelitis is:',
        correct: 'A sensory level with bilateral motor, sensory and autonomic dysfunction',
        options: ['A sensory level with bilateral motor, sensory and autonomic dysfunction', 'Ascending weakness only', 'Unilateral sensory loss', 'Isolated bladder dysfunction']
      },
      {
        question: 'First-line treatment for acute transverse myelitis is:',
        correct: 'High-dose IV methylprednisolone',
        options: ['High-dose IV methylprednisolone', 'Oral prednisolone', 'Plasma exchange', 'IVIG']
      },
      {
        question: 'AQP4-IgG positivity in transverse myelitis suggests:',
        correct: 'Neuromyelitis optica spectrum disorder (NMOSD)',
        options: ['Neuromyelitis optica spectrum disorder (NMOSD)', 'Multiple sclerosis', 'Guillain-Barré syndrome', 'Idiopathic transverse myelitis']
      },
    ]
  },

  // ─── 13. Headache ─────────────────────────────────────────────
  'headache': {
    flashcards: [
      { question: 'What is the first-line acute treatment for tension-type headache?', answer: 'Aspirin, paracetamol, or an NSAID.' },
      { question: 'What is the prophylaxis for tension-type headache?', answer: 'Low-dose amitriptyline OR up to 10 sessions of acupuncture over 5–8 weeks.' },
      { question: 'What is the first-line acute treatment for migraine?', answer: 'Oral triptan + NSAID, OR oral triptan + paracetamol. For 12–17 year olds: consider nasal triptan.' },
      { question: 'What anti-emetics can be added for migraine if oral treatment fails?', answer: 'Non-oral metoclopramide or prochlorperazine, plus consider non-oral NSAID or triptan.' },
      { question: 'What are the migraine prophylaxis options?', answer: '1. Propranolol\n2. Topiramate (avoid in women of childbearing age — teratogenic, reduces contraceptive effectiveness)\n3. Amitriptyline\n4. Acupuncture (up to 10 sessions over 5–8 weeks)' },
      { question: 'What is the first-line acute treatment for cluster headache?', answer: '100% oxygen (80% response rate within 15 minutes) OR subcutaneous triptan (75% response rate within 15 minutes).' },
      { question: 'What is the prophylaxis for cluster headache?', answer: 'Verapamil (drug of choice) OR tapering dose of prednisolone.' },
      { question: 'Why is topiramate avoided in women of childbearing age?', answer: 'It is teratogenic and can reduce the effectiveness of hormonal contraceptives.' },
      { question: 'What triggers and comorbidities should be addressed in tension headache?', answer: 'Stress, sleep disturbances, anxiety, and depression.' },
      { question: 'What is the response rate of 100% oxygen in cluster headache?', answer: '80% response rate within 15 minutes.' },
    ],
    quiz: [
      {
        question: 'First-line prophylaxis for cluster headache is:',
        correct: 'Verapamil',
        options: ['Verapamil', 'Propranolol', 'Amitriptyline', 'Topiramate']
      },
      {
        question: 'Topiramate for migraine prophylaxis should be avoided in:',
        correct: 'Women of childbearing age (teratogenic, reduces contraceptive efficacy)',
        options: ['Women of childbearing age (teratogenic, reduces contraceptive efficacy)', 'Men over 50', 'Patients with hypertension', 'Patients with asthma']
      },
      {
        question: 'The first-line acute treatment for migraine is:',
        correct: 'Oral triptan + NSAID or paracetamol',
        options: ['Oral triptan + NSAID or paracetamol', 'Codeine alone', 'Paracetamol alone', 'IV morphine']
      },
      {
        question: 'Acute treatment for cluster headache includes:',
        correct: '100% oxygen or subcutaneous triptan',
        options: ['100% oxygen or subcutaneous triptan', 'Oral paracetamol', 'IV methylprednisolone', 'Nasal triptan']
      },
      {
        question: '100% oxygen in cluster headache has a response rate of:',
        correct: '80% within 15 minutes',
        options: ['80% within 15 minutes', '50% within 30 minutes', '90% within 5 minutes', '60% within 20 minutes']
      },
      {
        question: 'Which headache type is treated acutely with aspirin, paracetamol, or NSAID?',
        correct: 'Tension-type headache',
        options: ['Tension-type headache', 'Migraine', 'Cluster headache', 'Thunderclap headache']
      },
      {
        question: 'Acupuncture (up to 10 sessions) is an evidence-based option for prophylaxis of:',
        correct: 'Both tension headache and migraine',
        options: ['Both tension headache and migraine', 'Migraine only', 'Cluster headache only', 'All headache types including cluster']
      },
    ]
  },

  // ─── 14. Epilepsy ─────────────────────────────────────────────
  'epilepsy': {
    flashcards: [
      { question: 'What is the primary investigation for epilepsy diagnosis?', answer: 'EEG — identifies interictal epileptiform discharges (IEDs). Note: a normal EEG does NOT exclude epilepsy.' },
      { question: 'What is the first-line AED for focal seizures in adults?', answer: 'Carbamazepine or lamotrigine.' },
      { question: 'What is the first-line AED for generalised tonic-clonic seizures in adults?', answer: 'Carbamazepine or lamotrigine.' },
      { question: 'What AEDs are preferred in elderly patients with epilepsy?', answer: 'Gabapentin and lamotrigine — usually well tolerated.' },
      { question: 'What AEDs are first-line for generalised tonic-clonic seizures in children?', answer: 'Levetiracetam or sodium valproate.' },
      { question: 'What AEDs are first-line for focal onset seizures in children?', answer: 'Carbamazepine or lamotrigine.' },
      { question: 'Why is sodium valproate avoided in women of childbearing potential?', answer: 'Teratogenicity risk — causes neural tube defects and neurodevelopmental problems. Pre-conception counselling must be offered.' },
      { question: 'What is treatment-refractory epilepsy and what is added?', answer: 'Seizures uncontrolled by a single AED. Add second AED: sodium valproate, lamotrigine, levetiracetam, or topiramate.' },
      { question: 'What surgical options exist for drug-resistant focal epilepsy?', answer: '1. Resective surgery (e.g., temporal lobectomy)\n2. Disconnection procedures (e.g., corpus callosotomy)\n3. Neuromodulation (e.g., deep brain stimulation)' },
      { question: 'What additional investigation is used when MRI is non-diagnostic in epilepsy?', answer: 'PET or SPECT scan — provides functional imaging to localise the seizure focus.' },
      { question: 'What is video-EEG monitoring used for?', answer: 'Correlating seizure behaviour with EEG changes over several days — particularly useful for pre-surgical evaluation.' },
      { question: 'What supplement should women with epilepsy take during pregnancy?', answer: 'Folic acid supplementation — to reduce teratogenic risk.' },
    ],
    quiz: [
      {
        question: 'First-line AED for focal seizures in adults is:',
        correct: 'Carbamazepine or lamotrigine',
        options: ['Carbamazepine or lamotrigine', 'Sodium valproate or levetiracetam', 'Phenytoin or phenobarbitone', 'Topiramate or gabapentin']
      },
      {
        question: 'A normal EEG in a patient with suspected epilepsy means:',
        correct: 'Epilepsy cannot be excluded — diagnosis is primarily clinical',
        options: ['Epilepsy cannot be excluded — diagnosis is primarily clinical', 'Epilepsy is definitively excluded', 'MRI is then unnecessary', 'A psychiatric cause must be sought']
      },
      {
        question: 'Sodium valproate is avoided in women of childbearing age primarily because:',
        correct: 'It is teratogenic and causes neurodevelopmental harm',
        options: ['It is teratogenic and causes neurodevelopmental harm', 'It reduces seizure control in women', 'It interacts with the pill', 'It causes osteoporosis']
      },
      {
        question: 'First-line AED for generalised tonic-clonic seizures in children is:',
        correct: 'Levetiracetam or sodium valproate',
        options: ['Levetiracetam or sodium valproate', 'Carbamazepine or lamotrigine', 'Phenytoin', 'Gabapentin']
      },
      {
        question: 'What AEDs are preferred in elderly patients with epilepsy?',
        correct: 'Gabapentin and lamotrigine',
        options: ['Gabapentin and lamotrigine', 'Sodium valproate and carbamazepine', 'Phenytoin and phenobarbitone', 'Levetiracetam and topiramate']
      },
      {
        question: 'Surgical option for drug-resistant focal epilepsy includes:',
        correct: 'Temporal lobectomy (resective surgery)',
        options: ['Temporal lobectomy (resective surgery)', 'Hemispherectomy for all cases', 'Vagal nerve stimulation as first choice', 'Stereotactic radiosurgery']
      },
      {
        question: 'PET/SPECT scanning in epilepsy is used when:',
        correct: 'MRI is non-diagnostic to localise the seizure focus for surgery',
        options: ['MRI is non-diagnostic to localise the seizure focus for surgery', 'As the first-line investigation', 'To replace EEG monitoring', 'To assess AED drug levels']
      },
      {
        question: 'Folic acid in pregnant women with epilepsy is important to:',
        correct: 'Reduce risk of teratogenic effects from AEDs',
        options: ['Reduce risk of teratogenic effects from AEDs', 'Improve seizure control', 'Replace sodium valproate', 'Prevent eclampsia']
      },
    ]
  },

  // ─── 15. Alzheimer's ──────────────────────────────────────────
  'alzheimers': {
    flashcards: [
      { question: 'What cognitive tools are used in Alzheimer\'s diagnosis?', answer: '1. MMSE (Mini-Mental State Examination)\n2. MoCA (Montreal Cognitive Assessment)\n3. ACE-III (Addenbrooke\'s Cognitive Examination III)' },
      { question: 'What does CT/MRI show in Alzheimer\'s disease?', answer: 'Atrophy predominantly in the medial temporal lobe (hippocampus and entorhinal cortex). Also helps exclude other cerebral pathologies.' },
      { question: 'What CSF biomarkers support Alzheimer\'s diagnosis?', answer: 'Decreased beta-amyloid 42 AND increased total tau or phosphorylated tau.' },
      { question: 'What are the first-line pharmacological treatments for Alzheimer\'s?', answer: 'Acetylcholinesterase inhibitors:\n1. Donepezil\n2. Galantamine\n3. Rivastigmine' },
      { question: 'What is the second-line pharmacological treatment for Alzheimer\'s?', answer: 'Memantine — an NMDA receptor antagonist. Used in moderate-to-severe AD or when ChEIs are not tolerated.' },
      { question: 'When should antipsychotics be used in Alzheimer\'s?', answer: 'Only when the patient is at risk of harming themselves or others, OR when agitation/hallucinations/delusions cause severe distress. Risk of stroke and death.' },
      { question: 'What non-pharmacological interventions are recommended in Alzheimer\'s?', answer: '1. Range of wellbeing activities tailored to patient preference\n2. Group cognitive stimulation therapy (for mild-to-moderate dementia)' },
      { question: 'What is amyloid PET imaging used for in Alzheimer\'s?', answer: 'Detects amyloid plaques in vivo — but use is currently limited due to cost and availability.' },
      { question: 'What routine blood tests are done in dementia workup?', answer: 'FBC, Vitamin B12 and folate, RFT, electrolytes, LFT, TFT — to exclude reversible/treatable causes of cognitive decline.' },
      { question: 'What is the mechanism of acetylcholinesterase inhibitors in AD?', answer: 'They inhibit the breakdown of acetylcholine at the synapse, increasing cholinergic transmission — compensating for the loss of cholinergic neurons in AD.' },
    ],
    quiz: [
      {
        question: 'First-line pharmacological treatment for Alzheimer\'s disease is:',
        correct: 'Acetylcholinesterase inhibitors (donepezil, galantamine, rivastigmine)',
        options: ['Acetylcholinesterase inhibitors (donepezil, galantamine, rivastigmine)', 'Memantine', 'Antipsychotics', 'SSRIs']
      },
      {
        question: 'Memantine (NMDA receptor antagonist) is used as:',
        correct: '2nd line in Alzheimer\'s disease',
        options: ['2nd line in Alzheimer\'s disease', '1st line in all dementia', '1st line in mild AD', 'In combination with antipsychotics']
      },
      {
        question: 'CSF biomarkers supporting Alzheimer\'s diagnosis show:',
        correct: 'Decreased beta-amyloid 42, increased tau',
        options: ['Decreased beta-amyloid 42, increased tau', 'Increased beta-amyloid 42, decreased tau', 'Normal amyloid, elevated protein', 'Oligoclonal bands']
      },
      {
        question: 'Antipsychotics in Alzheimer\'s disease should only be used when:',
        correct: 'Patient is at risk of harm or has severely distressing neuropsychiatric symptoms',
        options: ['Patient is at risk of harm or has severely distressing neuropsychiatric symptoms', 'Any behavioural change occurs', 'Patient refuses all other treatment', 'As first-line for agitation']
      },
      {
        question: 'MRI in Alzheimer\'s disease typically shows atrophy in the:',
        correct: 'Medial temporal lobe (hippocampus)',
        options: ['Medial temporal lobe (hippocampus)', 'Frontal lobe', 'Occipital lobe', 'Basal ganglia']
      },
      {
        question: 'Group cognitive stimulation therapy is recommended for:',
        correct: 'Patients with mild to moderate dementia',
        options: ['Patients with mild to moderate dementia', 'All stages of dementia equally', 'Severe dementia only', 'Pre-dementia (MCI) only']
      },
      {
        question: 'Which blood test is essential to exclude a reversible cause of dementia?',
        correct: 'Vitamin B12 and TFT (thyroid function tests)',
        options: ['Vitamin B12 and TFT (thyroid function tests)', 'HbA1c and fasting glucose', 'Troponin and BNP', 'ANA and ANCA']
      },
      {
        question: 'The mechanism of ChEIs (e.g., donepezil) in Alzheimer\'s is:',
        correct: 'Inhibit acetylcholinesterase → increase ACh at the synapse',
        options: ['Inhibit acetylcholinesterase → increase ACh at the synapse', 'Block NMDA receptors → reduce excitotoxicity', 'Clear amyloid plaques', 'Inhibit tau phosphorylation']
      },
    ]
  }
};
