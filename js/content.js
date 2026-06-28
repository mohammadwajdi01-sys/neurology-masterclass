// ═══════════════════════════════════════════════════════════════
// NEUROLOGY MASTERCLASS 2025 — Medical Content Data
// Every single word from gigi.md preserved EXACTLY as written.
// ═══════════════════════════════════════════════════════════════

export const TOPICS = [
  // ─────────────────────────────────────────────────────────────
  // 1. CVA (Cerebrovascular Accident / Ischemic Stroke & TIA)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'cva',
    number: 1,
    title: 'CVA',
    fullTitle: 'CVA (Cerebrovascular Accident / Ischemic Stroke & TIA)',
    subtitle: 'Ischemic stroke occurs when a blood clot blocks blood flow to a part of the brain.',
    icon: 'brain',
    color: '#EF4444',
    html: `
<h2>CVA</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<h5>1- Brain Imaging: This is the cornerstone in diagnosing stroke.</h5>
<ul>
  <li>Non-contrast computed tomography (CT) scan of the brain is often performed initially due to:
    <ul>
      <li>a) Its rapid availability</li>
      <li>b) reliability in ruling out haemorrhagic stroke.</li>
      <li>c) may be normal in the first few hours after onset (needs 12-36 hrs)</li>
    </ul>
  </li>
  <li>Magnetic resonance imaging (MRI) with diffusion-weighted imaging (DWI) sequence is more sensitive for detecting acute ischaemia especially in the posterior fossa and should be considered if CT findings are inconclusive.</li>
</ul>

<h5>2- Blood Tests:</h5>
<ul>
  <li>Glucose level are routinely performed.</li>
  <li>Full blood count → Polycythemia &amp; thrombocytosis.,</li>
  <li>Coagulation profile including prothrombin time/international normalized ratio (PT/INR), activated partial thromboplastin time (APTT),</li>
  <li>Renal function tests, electrolytes,</li>
  <li>Liver function tests,</li>
  <li>Fasting lipid profile</li>
  <li>ESR, &amp; CRP due to clot or vasculitis.</li>
</ul>

<p><strong>These help to:</strong></p>
<ul>
  <li>a) Rule out mimics like hypoglycaemia or metabolic disturbances,</li>
  <li>b) assess risk factors such as dyslipidaemia or diabetes mellitus,</li>
  <li>c) evaluate for contraindications to thrombolysis like coagulopathy and monitor for complications.</li>
</ul>

<h4>Further Investigations: to identify the underlying cause.</h4>
<h5>1-ECG+ 24-Hour ECG Monitoring:</h5>
<ul>
  <li>This can detect paroxysmal atrial fibrillation which is a common and treatable cause of stroke. If initial monitoring is negative but clinical suspicion remains high, prolonged cardiac rhythm monitoring may be warranted.</li>
</ul>

<h5>2- Echocardiography (TTE) or (TEE):</h5>
<ul>
  <li>is used to identify potential cardiac sources of emboli such as atrial fibrillation, patent foramen ovale, valvular heart disease or left ventricular thrombus. TEE is more sensitive for detecting atrial septal abnormalities and aortic arch atheroma.</li>
</ul>

<h5>3- Carotid Imaging:</h5>
<ul>
  <li>Carotid Doppler ultrasound or CT/MR angiography of the neck vessels can identify significant carotid stenosis or occlusion that may be amenable to carotid endarterectomy or stenting in patients with anterior circulation stroke.</li>
</ul>

<h5>4- Cerebral Angiography:</h5>
<ul>
  <li>This invasive procedure may be required in certain cases like suspected cerebral vasculitis, arterial dissection or venous sinus thrombosis where non-invasive imaging modalities are inconclusive.</li>
</ul>

<h5>5- chest X-ray</h5>
<ul>
  <li>for base line and exclude aspiration pneumonia.</li>
</ul>

<h3>Management of ischemic stroke:</h3>
<h4>A- Initially ABCDE:</h4>
<ul>
  <li>Blood glucose, hydration, oxygen saturation and temperature should be maintained within normal limits</li>
</ul>

<h4>B- Onset within 4.5 hours or wakeup stroke of 9 hours from mid point of sleep:</h4>
<h5>1. Thrombolysis for acute ischaemic stroke</h5>
<p>Thrombolysis is now given to around 10% of patients. The standard criteria for thrombolysis with alteplase or tenecteplase are as follows:</p>
<ul>
  <li>it is administered within 4.5 hours of onset of stroke symptoms</li>
  <li>within 9 hours of the midpoint of sleep when they have woken with symptoms</li>
  <li>Hemorrhage has been definitively excluded (i.e. Imaging has been performed)</li>
  <li>Blood pressure should be lowered to 185/110 mmHg before thrombolysis.</li>
</ul>

<h5>Contraindications to thrombolysis</h5>
<p>The following table:</p>
<div class="table-wrapper">
<table>
  <thead>
    <tr><th>Absolute</th><th>Relative</th></tr>
  </thead>
  <tbody>
    <tr><td>1- Previous intracranial haemorrhage</td><td>1- Pregnancy</td></tr>
    <tr><td>2- Seizure at onset of stroke</td><td>2- Concurrent anticoagulation (INR &gt;1.7)</td></tr>
    <tr><td>3- Intracranial neoplasm</td><td>3- Haemorrhagic diathesis</td></tr>
    <tr><td>4- Suspected subarachnoid haemorrhage</td><td>4- Active diabetic haemorrhagic retinopathy</td></tr>
    <tr><td>5- Stroke or traumatic brain injury in preceding 3 months</td><td>5- Suspected intracardiac thrombus</td></tr>
    <tr><td>6- Lumbar puncture in preceding 7 days</td><td>6- Major surgery / trauma in the preceding 2 weeks</td></tr>
    <tr><td>7- Gastrointestinal haemorrhage in preceding 3 weeks</td><td></td></tr>
    <tr><td>8- Active bleeding</td><td></td></tr>
    <tr><td>9- Oesophageal varices</td><td></td></tr>
    <tr><td>10- Uncontrolled hypertension &gt;200/120mmHg</td><td></td></tr>
  </tbody>
</table>
</div>

<h5>2- Thrombectomy for acute ischaemic stroke</h5>
<p>Mechanical thrombectomy is an exciting new treatment option for patients with an acute ischaemic stroke. All decisions about thrombectomy take into account:</p>
<ul>
  <li>a patient's overall clinical status</li>
  <li>a score of more than 5 on the National Institutes of Health Stroke Scale (NIHSS)</li>
</ul>
<p>Offer thrombectomy as soon as possible and within 6 hours of symptom onset, together with intravenous thrombolysis (if within 4.5 hours), to people who have: acute ischaemic stroke and confirmed occlusion of the proximal anterior circulation demonstrated by (CTA) or (MRA).</p>

<h4>C- Onset after 4.5 hours or wakeup stroke after 9 hours from midpoint of sleep:</h4>
<h5>1. Antiplatelet:</h5>
<ul>
  <li>Aspirin 300mg orally or rectally should be given as soon as possible if a haemorrhagic stroke has been excluded</li>
  <li>with regards to atrial fibrillation, anticoagulants should not be started until brain imaging has excluded haemorrhage, and usually not until 14 days have passed from the onset of an ischaemic stroke</li>
</ul>

<h5>2. blood pressure</h5>
<ul>
  <li>blood pressure should not be lowered in the acute phase of ischaemic stroke unless there are complications e.g. Hypertensive encephalopathy or they are being considered for thrombolysis.</li>
</ul>

<h5>3. Liped lowering agent (Atrovastatine 80mg)</h5>
<ul>
  <li>Many physicians will delay treatment until after at least 48 hours due to the risk of haemorrhagic transformation</li>
</ul>

<h5>4. DVT prophylaxis</h5>
<ul>
  <li>with compression devices initially</li>
</ul>

<h4>D- Secondary prevention</h4>
<h5>1- Antiplatelet:</h5>
<ul>
  <li>Clopidogrel 75mg (loading does of 300 mg) is now recommended 1st line in people who have had an ischaemic stroke</li>
  <li>Old regime was combination of aspirin plus modified-release (MR) dipyridamole)</li>
  <li>Aspirin 75mg is recommended after an ischaemic stroke only if clopidogrel is contraindicated or not tolerated</li>
</ul>

<h5>2- Anticoagulants: indicated only in</h5>
<ul>
  <li>Atrial Fibrillation (AF) → Prefer DOACs (apixaban) unless contraindicated</li>
  <li>Warfarin if valvular AF</li>
  <li>Other Cardioembolic Sources Prefer DOACS
    <ul>
      <li>1. Left ventricular (LV) thrombus</li>
      <li>2. Dilated cardiomyopathy with low EF</li>
      <li>3. Patent Foramen Ovale (PFO) after closure procedures</li>
      <li>4. Infective endocarditis with large vegetations (cautious, individualized)</li>
    </ul>
  </li>
  <li>Cerebral Venous Sinus Thrombosis (CVST) → Prefer warfarin</li>
  <li>Hypercoagulable States
    <ul>
      <li>1. Ant phospholipid antibody syndrome (warfarin preferred)</li>
      <li>2. Severe thrombophilia (Protein C/S deficiency, antithrombin III deficiency)</li>
    </ul>
  </li>
</ul>

<h5>3- Carotid endarterectomy:</h5>
<ul>
  <li>Is recommend if the patient has suffered a stroke or TIA in the carotid territory and is not severely disabled</li>
  <li>should only be considered if the stenosis 70% according European Carotid Surgery Trial (ECST),</li>
  <li>it should be performed as soon as possible within 7 days</li>
</ul>

<h5>4- Risk Factor &amp; Lifestyle Modification</h5>
<ul>
  <li>Smoking cessation</li>
  <li>Weight reduction &amp; regular exercise</li>
  <li>Mediterranean or DASH diet</li>
  <li>HTN control → ACE inhibitors/ARBs + thiazide diuretics commonly preferred → Aim for &lt;130/80 mmHg (individualized)</li>
  <li>Diabetes control (HbA1c target &lt;7%)</li>
  <li>Limit alcohol, avoid recreational drugs</li>
  <li>Manage sleep apnea</li>
</ul>

<hr>

<h2>Management of TIA:</h2>
<h3>1- Antiplatelet therapy</h3>
<p>Dual antiplatelet therapy (DAPT): Aspirin + clopidogrel for 21 days in high-risk TIA, then single agent (Clopidogrel)</p>

<h3>2- Anticoagulation</h3>
<ul>
  <li>For atrial fibrillation or cardioembolic source DOACS (apixaban, rivaroxaban, dabigatran) or warfarin (if VHD)</li>
</ul>

<h3>3- Statin therapy</h3>
<p>High-intensity statin (e.g., Atorvastatin 40-80 mg daily), target LDL &lt;70 mg/dL or 250% reduction</p>

<h3>4- Risk Factor &amp; Lifestyle Modification</h3>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 2. SAH (Subarachnoid Hemorrhage)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'sah',
    number: 2,
    title: 'SAH',
    fullTitle: 'SAH (Subarachnoid Hemorrhage)',
    subtitle: 'Bleeding into the subarachnoid space, often from a ruptured berry aneurysm.',
    icon: 'droplets',
    color: '#DC2626',
    html: `
<h2>SAH</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<h5>1- Brain Imaging: This is the cornerstone in diagnosing stroke.</h5>
<ul>
  <li>Non-contrast CT head is the first-line investigation of choice → acute blood (hyperdense/bright on CT) is typically distributed in the basal cisterns, sulci and in severe cases the ventricular system.</li>
</ul>

<h5>2- Lumber Puncture:</h5>
<ul>
  <li>If CT head is done within 6 hours of symptom onset and is normal new guidelines suggest not doing a lumbar puncture and consider an alternative diagnosis</li>
  <li>if CT head is done more than 6 hours after symptom onset and is normal → do a lumber puncture (LP), timing wise the LP should be performed at least 12 hours following the onset of symptoms to allow the development of xanthochromia (the result of red blood cell breakdown).</li>
</ul>

<p><strong>CSF findings consistent with subarachnoid haemorrhage include:</strong></p>
<ul>
  <li>1. Xanthochromia helps to distinguish true SAH from a 'traumatic tap'</li>
  <li>2. a normal or raised opening pressure</li>
</ul>

<h4>B- Further Investigations: to identify the underlying cause.</h4>
<ul>
  <li>1. CT intracranial angiogram (to identify a vascular lesion e.g. aneurysm or AVM)</li>
  <li>2. Digital subtraction angiogram (catheter angiogram)</li>
</ul>

<h3>Management</h3>
<h4>1. Initial ABCDE</h4>
<ul>
  <li>Intubate if GCS ≤8, agitation, or respiratory compromise</li>
  <li>Maintain adequate oxygenation and ventilation</li>
  <li>Control blood pressure Target: SBP 140-160 mmHg → Use labetalol, nicardipine (avoid nitroprusside)</li>
  <li>Pain → Opioids for headache</li>
  <li>Antiemetics to prevent vomiting and increased ICP</li>
</ul>

<h4>2- Prevention of Vasospasm</h4>
<ul>
  <li>Nimodipine 60 mg orally every 4 hrs for 21 days (mandatory)</li>
</ul>

<h4>3- Intracranial Pressure (ICP) Management</h4>
<ul>
  <li>Head elevation</li>
  <li>CSF drainage via external ventricular drain (EVD) if hydrocephalus</li>
  <li>Osmotic therapy: mannitol</li>
</ul>

<h4>4. Seizure Management</h4>
<ul>
  <li>Prophylaxis: short-term anticonvulsants (levetiracetam) for 3-7 days</li>
</ul>

<h4>5. Specific Treatment</h4>
<p>Aneurysm Securing Should be done as early as possible (within 24 hrs) either by:</p>
<ul>
  <li>1. Endovascular coiling (preferred if feasible)</li>
  <li>2. Surgical clipping</li>
</ul>

<h4>6. Additional Supportive Care</h4>
<ul>
  <li>DVT prophylaxis with compression devices initially + Early rehabilitation</li>
  <li>Monitor cardiac arrhythmias (neurogenic stunned myocardium)</li>
  <li>Glycemic control (avoid hyperglycemia)</li>
</ul>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Increased ICP
  // ─────────────────────────────────────────────────────────────
  {
    id: 'increased-icp',
    number: 3,
    title: 'Increased ICP',
    fullTitle: 'Increased Intracranial Pressure',
    subtitle: 'Elevated pressure within the skull from mass lesions, edema, or hydrocephalus.',
    icon: 'arrow-up-circle',
    color: '#F97316',
    html: `
<h2>Increase ICP</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<ul>
  <li>1. Fundoscopy → papilledema</li>
  <li>2. Imaging
    <ul>
      <li>Urgent Non-contrast CT head - first-line</li>
      <li>MRI brain if CT unclear or posterior fossa pathology</li>
      <li>CT/MR venography - if suspect venous thrombosis, aneurysm/AVM</li>
    </ul>
  </li>
</ul>

<h4>B- Further Investigations:</h4>
<ul>
  <li>CBC</li>
  <li>electrolytes (Na⁺),</li>
  <li>ABG/PaCO₂</li>
  <li>Infection work-up if meningitis suspected (LP contraindicated until imaging rules out mass effect/herniation)</li>
</ul>

<h3>Management</h3>
<h4>1- General Measures</h4>
<ul>
  <li>Airway control, oxygenation, avoid hypoxia</li>
  <li>Head elevation 30° (neutral neck, avoid venous compression)</li>
  <li>Control pain &amp; agitation - opioids, sedatives</li>
</ul>

<h4>2- Therapeutic Measures</h4>
<ul>
  <li>Mannitol 0.25-1 g/kg IV bolus (monitor osmolality &amp; kidney fxn)</li>
  <li>Steroids → Only for tumors or vasogenic edema (e.g., dexamethasone)</li>
  <li>Anticonvulsants If seizures or high-risk cases</li>
  <li>Blood Pressure &amp; Sugar Control</li>
</ul>

<h4>3-CSF Diversion</h4>
<ul>
  <li>External ventricular drain (EVD) - both diagnostic and therapeutic</li>
  <li>Lumbar puncture drainage only if communicating hydrocephalus and no risk of herniation</li>
</ul>

<h4>4- Surgical Measures</h4>
<ul>
  <li>Decompressive craniectomy for refractory ICP</li>
  <li>Evacuation of mass lesion: hematoma, abscess, tumor</li>
</ul>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Benign ICP (Papilledema)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'benign-icp',
    number: 4,
    title: 'Benign ICP',
    fullTitle: 'Benign ICP (Idiopathic Intracranial Hypertension)',
    subtitle: 'Raised intracranial pressure without a mass lesion, typically in young overweight women.',
    icon: 'eye',
    color: '#EAB308',
    html: `
<h2>Benign ICP</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<h5>1- Ophthalmologic Evaluation</h5>
<ul>
  <li>Fundoscopy → confirms papilledema</li>
  <li>Visual field testing (perimetry) → classically enlarged blind spot, peripheral field loss</li>
  <li>Optical coherence tomography (OCT) → measures optic nerve swelling</li>
</ul>

<h5>2- Neuroimaging</h5>
<ul>
  <li>MRI brain + MR venography → To exclude mass lesion, hydrocephalus, or venous sinus thrombosis</li>
</ul>

<h5>3- Lumbar Puncture</h5>
<ul>
  <li>Elevated opening pressure (&gt;25 cm H₂O in adults)</li>
  <li>CSF composition normal</li>
</ul>

<h4>B- Further Investigations:</h4>
<h5>Diagnostic Criteria (Modified Dandy)</h5>
<ul>
  <li>1. Symptoms &amp; signs of raised ICP</li>
  <li>2. No localizing neurologic deficit (except CN VI palsy)</li>
  <li>3. Normal neuroimaging</li>
  <li>4. Elevated CSF opening pressure with normal contents</li>
  <li>5. No alternative cause</li>
</ul>

<h3>Management</h3>
<h4>1- Address Modifiable Risk Factors</h4>
<ul>
  <li>Weight reduction (target 5-10% bodyweight loss can improve outcomes)</li>
  <li>Stop causative drugs if applicable (e.g., tetracyclines, vitamin A derivatives, COCP)</li>
</ul>

<h4>2- Pharmacologic Therapy</h4>
<ul>
  <li>Acetazolamide (first-line) → Carbonic anhydrase inhibitor → ↓ CSF production</li>
  <li>Alternative or add-on Loop diuretics (furosemide)</li>
</ul>

<h4>3- Procedures</h4>
<ul>
  <li>Serial LPs → Temporary relief only</li>
  <li>CSF diversion VP/LP shunt)</li>
</ul>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Multiple Sclerosis
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ms',
    number: 5,
    title: 'Multiple Sclerosis',
    fullTitle: 'Multiple Sclerosis (MS)',
    subtitle: 'Autoimmune demyelinating disease of the CNS with relapsing-remitting episodes.',
    icon: 'zap',
    color: '#8B5CF6',
    html: `
<h2>Multiple Sclerosis</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<h5>McDonald Criteria for diagnosing Multiple Sclerosis (MS):</h5>
<h6>1- Typical demyelinating attack(s) (clinical or MRI)</h6>
<ul>
  <li>MRI brain 1st and most sensitive (White abnormal patches).</li>
  <li>MRI spine (more sensitive than CT) → if Suggestion of spinal cord lesion</li>
</ul>

<h6>2- Dissemination in Space (DIS)</h6>
<ul>
  <li>Evidence of ≥2 CNS areas affected, demonstrated clinically or on MRI. Accepted locations:
    <ul>
      <li>Periventricular</li>
      <li>Cortical or juxtacortical</li>
      <li>Infratentorial</li>
      <li>Spinal Cord</li>
    </ul>
  </li>
</ul>

<h6>3- Dissemination in Time (DIT)</h6>
<h6>4- No better neurological explanation</h6>
<ul>
  <li>Inflammatory markers (e.g. CRP and ESR) → Elevated in infections of the CNS or vasculitides</li>
  <li>FBC→ Rule out evidence of anaemia (macrocytic in B12 deficiency) and malignancy (thrombocytopenia in lymphoma)</li>
  <li>Vitamin B12 Severe deficiency leading to subacute combined degeneration of spinal cord</li>
  <li>LFTs → Chronic liver disease can cause polyneuropathy and hepatic encephalopathy</li>
  <li>TFTs → Hypothyroidism can present with fatigue, muscle weakness, constipation, slowed movement and thought processing</li>
  <li>RFT</li>
  <li>U&amp;Es</li>
  <li>Calcium Hypocalcaemia classically presents with paraesthesia and tetany</li>
  <li>Glucose → Peripheral neuropathy secondary to poor diabetic control</li>
</ul>

<h4>B- Further Investigations:</h4>
<h5>CSF examination recommended when:</h5>
<ul>
  <li>Insufficient clinical of MRI evidence to diagnose MS</li>
  <li>Atypical clinical, imaging or lab findings of MS</li>
</ul>

<h5>Key CSF features include:</h5>
<ul>
  <li>1. Oligoclonal bands (OCBs) → Present in ~85-95% of MS patients</li>
  <li>2. ↑ IgG Index / IgG Synthesis rate Elevated in many patients</li>
  <li>3. Mild lymphocytic pleocytosis → Usually &lt;50 cells/µl (mainly T-cells)</li>
  <li>4. Mildly increased protein → Usually &lt;100 mg/DI</li>
  <li>5. Normal glucose → Typically unaffected</li>
  <li>6. Newer Biomarkers
    <ul>
      <li>Kappa free light chains (κ-FLC): emerging as a sensitive alternative to OCBs.</li>
      <li>Neurofilament light chain (NfL): marker of axonal injury and disease activity.</li>
    </ul>
  </li>
</ul>

<p><strong>Most Diagnostic Feature</strong> Oligoclonal IgG bands in CSF but not in serum strongest supportive CSF marker for MS when MRI and clinical findings fit</p>

<h5>Markers NOT typical of MS</h5>
<ul>
  <li>1. Very high WBC count (&gt;100 cells/µL)</li>
  <li>2. Markedly elevated protein (&gt;100 mg/dL)</li>
  <li>3. Low glucose</li>
</ul>

<h3>Management</h3>
<p>the Treatment in multiple sclerosis is focused on reducing the frequency and duration of relapses. There is no cure.</p>

<h4>A- Acute relapse</h4>
<ul>
  <li>High-dose steroids (e.g. oral or IV methylprednisolone) may be given for 5 days to shorten the length of an acute relapse.</li>
  <li>It should be noted that steroids shorten the duration of a relapse and do not alter the degree of recovery.</li>
</ul>

<h4>B- Maintain remission:</h4>
<h5>Drug options for reducing the risk of relapse in MS</h5>
<ul>
  <li>1. Natalizumab used first-line, given intravenously
    <ul>
      <li>A recombinant monoclonal antibody that antagonises alpha-4 beta-1-integrin found on the surface of leucocytes</li>
      <li>inhibit migration of leucocytes across the endothelium across the blood-brain barrier</li>
    </ul>
  </li>
  <li>2. Ocrelizumab given intravenously
    <ul>
      <li>Humanized anti-CD20 monoclonal antibody</li>
    </ul>
  </li>
  <li>3. Fingolimod → oral formulations are available
    <ul>
      <li>Sphingosine 1-phosphate (S1P) receptor modulator</li>
      <li>prevents lymphocytes from leaving lymph nodes</li>
    </ul>
  </li>
  <li>4. Beta-interferon → given subcutaneously/intramuscularly
    <ul>
      <li>Not considered to be as effective as alternative disease-modifying drugs</li>
    </ul>
  </li>
  <li>5. Glatiramer acetate → given subcutaneously
    <ul>
      <li>Immunomodulating drug - acts as an 'immune decoy'</li>
      <li>along with beta-interferon considered an 'older drug' with less effectiveness compared to monoclonal antibodies and S1P) receptor modulators</li>
    </ul>
  </li>
</ul>

<h4>B- Some specific problems</h4>
<ul>
  <li>1. Fatigue → amantadine</li>
  <li>2. Spasticity → baclofen and gabapentin are first-line. + physiotherapy is important</li>
  <li>3. Bladder dysfunction → anticholinergics may improve urinary frequency</li>
  <li>4. Oscillopsia (visual fields appear to oscillate) → gabapentin is first-line</li>
</ul>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 6. MND (Motor Neuron Disease)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'mnd',
    number: 6,
    title: 'MND',
    fullTitle: 'MND (Motor Neuron Disease)',
    subtitle: 'Progressive degeneration of upper and lower motor neurons.',
    icon: 'activity',
    color: '#F43F5E',
    html: `
<h2>MND</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<ul>
  <li>1. Clinical → The diagnosis of motor neuron disease is clinical,</li>
  <li>2. Nerve conduction studies → will show normal motor conduction and can help exclude a neuropathy.</li>
  <li>3. Electromyography → shows a reduced number of action potentials with increased amplitude.</li>
  <li>4. MRI → is usually performed to exclude the differential diagnosis of cervical cord compression and myelopathy</li>
</ul>

<h3>Management</h3>
<h4>1. Medical</h4>
<ul>
  <li>Riluzole → prevents stimulation of glutamate receptors</li>
  <li>used mainly in amyotrophic lateral sclerosis</li>
  <li>prolongs life by about 3 months</li>
</ul>

<h4>2. Respiratory care</h4>
<ul>
  <li>Non-invasive ventilation (usually BIPAP) is used at night</li>
  <li>Studies have shown a survival benefit of around 7 months</li>
</ul>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 7. GBS (Guillain-Barré Syndrome)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'gbs',
    number: 7,
    title: 'GBS',
    fullTitle: 'GBS (Guillain-Barré Syndrome)',
    subtitle: 'Acute inflammatory demyelinating polyneuropathy with ascending paralysis.',
    icon: 'shield',
    color: '#06B6D4',
    html: `
<h2>Guillain Barre Syndrome</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<h5>1- Cerebrospinal fluid (CSF) analysis is a key diagnostic test</h5>
<ul>
  <li>Characteristic finding is albuminocytologic dissociation (elevated protein with normal cell count)</li>
  <li>Protein elevation may be absent in the first week of symptoms but is present in &gt;90% of cases by the second week</li>
  <li>CSF white cell count should be &lt;10 cells/μL; counts &gt;50 cells/μL suggest alternative diagnoses</li>
</ul>

<h5>2- Neurophysiological studies:</h5>
<ul>
  <li>Nerve conduction studies (NCS) → may show demyelinating features → Changes may not be evident in early disease (first 1-2 weeks)</li>
  <li>Electromyography (EMG) → helps differentiate demyelinating from axonal variants</li>
</ul>

<h5>3- Blood tests to exclude mimics and identify potential triggers</h5>
<ul>
  <li>FBC,</li>
  <li>ESR +CRP</li>
  <li>RFT</li>
  <li>LFT</li>
  <li>Glucose level</li>
  <li>Serum electrolytes (including calcium, magnesium, phosphate)</li>
  <li>Creatine kinase to exclude myopathy</li>
</ul>

<h5>4- Serology:</h5>
<ul>
  <li>Anti-ganglioside antibodies (particularly anti-GM1, anti-GQ1b) may support diagnosis in specific variants</li>
</ul>

<h4>B- Further Investigations:</h4>
<h5>1- Microbiological screening: for common infectious triggers</h5>
<ul>
  <li>Stool cultures for Campylobacter jejuni</li>
  <li>Serology for cytomegalovirus, Epstein-Barr virus, Mycoplasma pneumoniae</li>
</ul>

<h5>2- Imaging: may be required to exclude alternative diagnoses</h5>
<ul>
  <li>MRI of spine to exclude compressive myelopathy or transverse myelitis</li>
</ul>

<h5>3- Respiratory function assessment</h5>
<ul>
  <li>PFT</li>
  <li>Arterial blood gases if respiratory compromise suspected</li>
</ul>

<h3>Management</h3>
<h4>1- Plasma exchange:</h4>
<ul>
  <li>Useful only in Rx → 1st week</li>
</ul>

<h4>2- IV immunoglobulins (IVIG):</h4>
<ul>
  <li>as effective as plasma exchange. No benefit in combining both treatments. IVIG may be easier to administer and tends to have fewer side-effects</li>
</ul>

<h4>3- Ventilator support</h4>
<ul>
  <li>If respiratory Muscle is affected.</li>
</ul>

<h4>4- Physiotherapy &amp; occupational.</h4>
<p><strong>Note:</strong> Steroids and immunosuppressants have not been shown to be beneficial</p>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Myasthenia Gravis
  // ─────────────────────────────────────────────────────────────
  {
    id: 'mg',
    number: 8,
    title: 'Myasthenia Gravis',
    fullTitle: 'Myasthenia Gravis (MG)',
    subtitle: 'Autoimmune disorder of the neuromuscular junction with fatigable weakness.',
    icon: 'hand',
    color: '#A855F7',
    html: `
<h2>Myasthenia Graves</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<h5>1- The edrophonium test (Tensilon test):</h5>
<ul>
  <li>Is a bedside test that involves the intravenous administration of edrophonium, a short-acting acetylcholinesterase inhibitor.</li>
  <li>A rapid and transient improvement in muscle strength after edrophonium injection suggests a positive test and supports the diagnosis of MG.</li>
  <li>However, due to the potential side effects and limited specificity, this test has been largely replaced by more specific and sensitive diagnostic tests.</li>
</ul>

<h5>2- Electrophysiological studies:</h5>
<ul>
  <li>Repetitive nerve stimulation (RNS): This test involves repetitive electrical stimulation of a peripheral nerve → a decrement response, supports the diagnosis of MG.</li>
  <li>Single-fiber electromyography (SFEMG): This is the most sensitive test for MG,</li>
</ul>

<h5>3- Imaging studies</h5>
<ul>
  <li>Chest CT or MRI → should be performed to assess for a thymoma or thymic hyperplasia, as these conditions are associated with MG and may warrant thymectomy.</li>
</ul>

<h4>B- Further Investigations:</h4>
<h5>1- Serological testing:</h5>
<ul>
  <li>Anti-acetylcholine receptor (AChR) antibodies: present in approximately 85% of patients with generalized MG</li>
  <li>50% of patients with ocular MG.</li>
  <li>Anti-muscle-specific kinase (MuSK) antibodies: These are found in a subset of MG patients who are AChR antibody negative, accounting for 1-15% of all MG cases, and are associated with a more severe disease course.</li>
  <li>Anti-lipoprotein-related protein 4 (LRP4) antibodies: These are found in a small percentage of AChR and MuSK antibody negative MG patients.</li>
</ul>

<h5>2- Screening for other autoimmune.</h5>

<h3>Management</h3>
<h4>1- Pharmacological:</h4>
<ul>
  <li>Acetyl cholinesterase inhibitors (Pyridostigmine) → Monitor for side effects including abdominal cramps, diarrhoea and excessive salivation.</li>
  <li>Immunosuppressive agents → If symptoms persist consider adding:
    <ul>
      <li>Corticosteroids (prednisolone) are often the first-line therapy.</li>
      <li>Other → azathioprine or cyclosporine.</li>
    </ul>
  </li>
  <li>Intravenous immunoglobulin (IVIg) or plasma exchange may be considered in severe cases or during myasthenic crisis.</li>
  <li>Monoclonal antibodies like rituximab in refractory cases.</li>
</ul>

<h4>2- Surgical Management</h4>
<ul>
  <li>Thymectomy is recommended for patients with thymoma It can potentially reduce the need for long-term immunosuppression and improve symptoms.</li>
</ul>

<h4>3- Management of Myasthenic Crisis</h4>
<ul>
  <li>1. immediate hospitalisation is required.</li>
  <li>2. Intensive respiratory support may be necessary, including intubation and mechanical ventilation if there is impending respiratory failure.</li>
  <li>3. plasma exchange or IVIg.</li>
</ul>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 9. Lambert-Eaton Syndrome
  // ─────────────────────────────────────────────────────────────
  {
    id: 'lems',
    number: 9,
    title: 'LEMS',
    fullTitle: 'LEMS (Lambert-Eaton Syndrome)',
    subtitle: 'Autoimmune disorder of presynaptic calcium channels, often paraneoplastic.',
    icon: 'unplug',
    color: '#EC4899',
    html: `
<h2>Lambert-Eaton Syndrome</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<h5>1- Nerve conduction studies with repetitive nerve stimulation are the initial investigation of choice:</h5>
<ul>
  <li>High-frequency (20–50 Hz) or brief maximal voluntary contraction leads to → a marked increment (&gt;100%) in amplitude, which is characteristic for LEMS and helps distinguish it from myasthenia gravis.</li>
</ul>

<h5>2- Serological testing:</h5>
<ul>
  <li>For antibodies against P/Q-type voltage-gated calcium channels supports the diagnosis; these are present in the majority of cases.</li>
</ul>

<p>The combination of characteristic electrophysiological findings and positive P/Q type calcium channel antibodies confirms the diagnosis</p>

<h4>B- Further investigations</h4>
<ul>
  <li>1- Contrast-enhanced CT scan of the chest should be performed in all patients to screen for occult malignancy.</li>
  <li>2- Consider PET-CT if initial imaging is inconclusive but suspicion remains high.</li>
</ul>

<h3>Management:</h3>
<ul>
  <li>1. Treatment of underlying cancer</li>
  <li>2. Immunosuppression, for example:
    <ul>
      <li>prednisolone and/or azathioprine</li>
    </ul>
  </li>
  <li>3. 3,4-diaminopyridine
    <ul>
      <li>Works by blocking potassium channel efflux in the nerve terminal so that the action potential duration is increased.</li>
      <li>Calcium channels can then be open for a longer time and allow greater acetylcholine release to the stimulate muscle at the end plate</li>
    </ul>
  </li>
  <li>4. Intravenous immunoglobulin therapy and plasma exchange may be beneficial</li>
</ul>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 10. Parkinsonism
  // ─────────────────────────────────────────────────────────────
  {
    id: 'parkinsonism',
    number: 10,
    title: 'Parkinsonism',
    fullTitle: 'Parkinsonism (Parkinson\'s Disease)',
    subtitle: 'Dopaminergic neuron loss in the substantia nigra causing tremor, rigidity, and bradykinesia.',
    icon: 'vibrate',
    color: '#14B8A6',
    html: `
<h2>Parkinsonism</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<h5>1- Clinical Diagnostic Criteria</h5>
<ul>
  <li>Presence of bradykinesia (slowness in voluntary movement, reduced speed and amplitude of repetitive actions) plus at least one of the following:
    <ul>
      <li>1. Muscular rigidity</li>
      <li>2. Resting tremor (4-6 Hz frequency)</li>
      <li>3. Postural instability (not caused by a visual, vestibular, cerebellar or proprioceptive dysfunction)</li>
    </ul>
  </li>
</ul>

<h4>B- Further investigations</h4>
<p>Investigations tend to be performed only when there is uncertainty regarding the diagnosis, in order to distinguish it from other differentials.</p>
<ul>
  <li>1. Structural MRI → The MRI will be usually normal in a patient with Parkinson's disease, or there may be cortical atrophy in advanced disease with dementia</li>
  <li>2. Single photon emission computed tomography (SPECT) → Useful to distinguish Parkinson's disease from an essential tremor</li>
  <li>3. Olfactory testing → useful to differentiate Parkinson's disease from other parkinsonian disorders</li>
</ul>

<h3>Management</h3>
<h4>Available medications</h4>
<ul>
  <li>1. Levodopa
    <ul>
      <li>Levodopa is a precursor to dopamine which is converted both in the CNS and periphery</li>
      <li>Frequently dosed with carbidopa, a dopamine decarboxylase inhibitor, to reduce the amount that is converted in the periphery, thus increasing the amount available in the CNS and reducing peripheral side effects.</li>
    </ul>
  </li>
  <li>2. Monoamine oxidase B (MAO-B) inhibitors:
    <ul>
      <li>Commonly used medications are rasagiline and selegiline</li>
      <li>These are inhibitors of MAO-B, which are responsible for degrading dopamine, therefore increasing the amount of dopamine available</li>
    </ul>
  </li>
  <li>3. Dopamine agonists
    <ul>
      <li>Mimic dopamine and bind to dopamine receptors to exert their effect</li>
      <li>Non-ergot (e.g. ropinirole, pramipexole)</li>
      <li>Ergot-derived dopamine agonists (e.g. bromocriptine, cabergoline)</li>
    </ul>
  </li>
</ul>

<h4>A- Medical treatment</h4>
<p>first-line treatment for early stage disease depends on the impact of the motor symptoms on the patient's quality of life:</p>
<ul>
  <li>If motor symptoms do not impact on quality of life (Functional) →
    <ul>
      <li>if &lt; 60 years → Anticholinergic (Benzahexole) = best drug to control tremor. s/e (dry mouth, blurred vision, facial flushing, constipation)</li>
      <li>- MAO-B inhibitors</li>
      <li>If dopamine agonist develops side effects or resistant, → postural hypotension → change to MAO-B inhibitors.</li>
    </ul>
  </li>
  <li>If motor symptoms impact on quality of life (non-Functional) →
    <ul>
      <li>Levodopa + Carpidopa (-decarboxylase).</li>
      <li>Side effects → 1st pass metabolism in liver, on off phenomena, N&amp;V, postural hypotension.</li>
      <li>Dopamine Receptor agonist.</li>
    </ul>
  </li>
</ul>

<h4>B- Deep brain stimulation</h4>
<ul>
  <li>Used for people whose symptoms are not adequately controlled by medical therapy</li>
  <li>This should never be used as first-line treatment</li>
  <li>Involves applying an intermittent direct electrical current to the selected area → globus pallidus interna and the subthalamic nucleus</li>
</ul>

<h4>C- Adjuvant therapy</h4>
<ul>
  <li>1. Physiotherapy → Specialist physiotherapy</li>
  <li>2. Speech therapy → for patients experiencing worsening dysarthria or dysphagia complications</li>
  <li>3. Occupational therapy → for patients whom are having difficulty and requiring assistance for activities of daily living (e.g. showering, dressing, cooking, gardening)</li>
</ul>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 11. Meningitis
  // ─────────────────────────────────────────────────────────────
  {
    id: 'meningitis',
    number: 11,
    title: 'Meningitis',
    fullTitle: 'Meningitis',
    subtitle: 'Inflammation of the meninges due to bacterial, viral, or fungal infection.',
    icon: 'flame',
    color: '#F97316',
    html: `
<h2>Meningitis</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<h5>1- Bloods:</h5>
<ul>
  <li>Full blood count</li>
  <li>ESR + CRP</li>
  <li>Renal function</li>
  <li>Glucose</li>
  <li>Lactate</li>
  <li>Clotting profile</li>
</ul>

<h5>2- Lumber puncture:</h5>
<p>Lumbar puncture should be delayed in the following circumstances:</p>
<ul>
  <li>1. signs of severe sepsis or a rapidly evolving rash</li>
  <li>2. severe respiratory/cardiac compromise</li>
  <li>3. significant bleeding risk</li>
  <li>4. signs of raised intracranial pressure</li>
  <li>5. focal neurological signs</li>
  <li>6. papilloedema</li>
  <li>7. continuous or uncontrolled seizures</li>
  <li>8. GCS ≤ 9</li>
</ul>

<p>If an LP has been performed, the CSF should be tested for:</p>
<ul>
  <li>Glucose, protein, microscopy and culture</li>
  <li>Lactate</li>
  <li>Meningococcal and pneumococcal PCR</li>
  <li>Enteroviral, herpes simplex and varicella-zoster PCR</li>
  <li>Consider investigations for TB meningitis (CSF Stain may be required)</li>
</ul>

<h4>B- Further investigations</h4>
<p>Additional tests that may be helpful include:</p>
<ul>
  <li>Blood gases</li>
  <li>Throat swab for meningococcal culture</li>
  <li>CT scan is not normally indicated</li>
</ul>

<h3>Management:</h3>
<ul>
  <li>1. ABC approach should be taken initially</li>
  <li>2. Bed rest</li>
  <li>3. LP, if this cannot be done within the first hour, IV antibiotics should be given after blood cultures have been taken</li>
  <li>4. IV antibiotics → BNF antibiotic guidelines</li>
</ul>

<p><strong>Initial empirical therapy</strong></p>
<ul>
  <li>aged &lt; 3 months → IV cefotaxime + amoxicillin (or ampicillin)</li>
  <li>aged 3 months - 59 years → IV ceftriaxone</li>
  <li>aged ≥60 years → IV ceftriaxone + amoxicillin (or ampicillin)</li>
</ul>

<p><strong>Specific therapy</strong></p>
<ul>
  <li>Meningococcal meningitis → IV benzylpenicillin or IV ceftriaxone</li>
  <li>Pneumococcal meningitis → IV ceftriaxone</li>
  <li>Meningitis caused by Haemophilus influenzae → IV ceftriaxone</li>
  <li>Meningitis caused by Listeria → IV amoxicillin (or ampicillin) + gentamicin</li>
</ul>

<p>If the patient has a history of immediate hypersensitivity reaction to penicillin or to cephalosporins the BNF recommends using chloramphenicol.</p>

<h4>5. IV dexamethasone</h4>
<ul>
  <li>'consider adjunctive treatment with dexamethasone (particularly if pneumococcal meningitis suspected in adults),</li>
  <li>preferably starting before or with first dose of antibacterial, but no later than 12 hours after starting antibacterial;</li>
  <li>avoid dexamethasone in:
    <ul>
      <li>i. Septic shock,</li>
      <li>ii. meningococcal septicaemia,</li>
      <li>iii. immunocompromised,</li>
      <li>iv. meningitis following surgery'</li>
    </ul>
  </li>
</ul>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 12. Transverse Myelitis
  // ─────────────────────────────────────────────────────────────
  {
    id: 'transverse-myelitis',
    number: 12,
    title: 'Transverse Myelitis',
    fullTitle: 'Transverse Myelitis',
    subtitle: 'Inflammatory demyelination of the spinal cord across both sides.',
    icon: 'cable',
    color: '#0EA5E9',
    html: `
<h2>Transverse Myelitis</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<p>The diagnostic criteria of transverse myelitis rely on:</p>
<ul>
  <li>The presence of motor, sensory and/or autonomic dysfunction localised to a spinal cord segment, in the absence of spinal cord compression.</li>
  <li>Investigations are used to rule out compression and then to find the underlying cause.</li>
</ul>

<h5>1- MRI spinal cord with and without gadolinium:</h5>
<ul>
  <li>To exclude spinal cord compression and confirm inflammation</li>
  <li>In transverse myelitis, the cord appears swollen with gadolinium enhancement of the lesion</li>
</ul>

<h5>2- Lumbar puncture</h5>
<ul>
  <li>To confirm the inflammation</li>
  <li>CSF analysis for cell count, cell differential, protein level, IgG index and oligoclonal bands</li>
  <li>Abnormal in approximately half of the patients with transverse myelitis.</li>
</ul>

<h4>B- Further investigations</h4>
<p>investigations focus on determining the underlying cause of transverse myelitis which includes:</p>
<ul>
  <li>1. infection,</li>
  <li>2. systemic inflammatory disease,</li>
  <li>3. multiple sclerosis,</li>
  <li>4. paraneoplastic myelopathies</li>
  <li>5. idiopathic transverse myelitis.</li>
</ul>

<h3>Management</h3>
<ul>
  <li>1. IV methylprednisolone once a day for 3-5 days</li>
  <li>2. For patients not responding to glucocorticoids → plasmapheresis of 1.1 to 1.5 plasma volumes exchanged, once every two days for ten days.</li>
  <li>3. Supportive care
    <ul>
      <li>Patients with cervical transverse myelitis may need critical care team involvement due to a risk of neurogenic respiratory failure.</li>
      <li>Acute urinary retention is managed by catheterization.</li>
      <li>Deep vein thrombosis prophylaxis</li>
    </ul>
  </li>
  <li>4. Acute rehabilitation which includes passive and active physiotherapy.</li>
  <li>5. Addition of therapy targeting the underlying condition if needed.</li>
</ul>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 13. Headache
  // ─────────────────────────────────────────────────────────────
  {
    id: 'headache',
    number: 13,
    title: 'Headache',
    fullTitle: 'Headache (Tension, Migraine & Cluster)',
    subtitle: 'Primary headache disorders including tension-type, migraine, and cluster headache.',
    icon: 'cloud-lightning',
    color: '#F59E0B',
    html: `
<h2>Headache</h2>
<h3>Diagnosis: → Clinical</h3>
<h4>Tension headache</h4>
<ul>
  <li>Recurrent, non-disabling, bilateral headache, often described as a 'tight band'</li>
  <li>aggravated by routine activities of daily living</li>
</ul>

<h4>Migraine</h4>
<ul>
  <li>Recurrent, severe headache which is usually unilateral and throbbing in nature</li>
  <li>May be be associated with aura, nausea and photosensitivity</li>
  <li>Aggravated by, or causes avoidance of, routine activities of daily living. Patients often describe 'going to bed'.</li>
  <li>In women may be associated with menstruation</li>
</ul>

<h4>Cluster headache</h4>
<ul>
  <li>Pain typical occurs once or twice a day, each episode lasting 15 mins - 2 hours with clusters typically lasting 4-12 weeks</li>
  <li>Intense pain around one eye (recurrent attacks 'always' affect same side)</li>
  <li>Patient is restless during an attack</li>
  <li>Accompanied by redness, lacrimation, lid swelling</li>
  <li>More common in men and smokers</li>
</ul>

<h3>Management:</h3>
<h4>Tension headache</h4>
<ul>
  <li>1- first-line→ aspirin, paracetamol or an NSAID.</li>
  <li>2- prophylaxis:
    <ul>
      <li>up to 10 sessions of acupuncture over 5-8 weeks'</li>
      <li>low-dose amitriptyline</li>
    </ul>
  </li>
  <li>3- It is essential to address potential triggers and comorbidities like:
    <ul>
      <li>1. Stress,</li>
      <li>2. sleep disturbances,</li>
      <li>3. anxiety, or depression</li>
    </ul>
  </li>
</ul>

<h4>Migraine</h4>
<ul>
  <li>1- Acute treatment
    <ul>
      <li>first-line: offer combination therapy with
        <ul>
          <li>An oral triptan and an NSAID, or</li>
          <li>An oral triptan and paracetamol</li>
        </ul>
      </li>
      <li>for young people aged 12-17 years consider a nasal triptan in preference to an oral triptan</li>
      <li>if the above measures are not effective
        <ul>
          <li>Offer a non-oral preparation of metoclopramide or prochlorperazine and consider adding a non-oral NSAID or triptan</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>2- Prophylaxis
    <ul>
      <li>Propranolol</li>
      <li>Topiramate: should be avoided in women of childbearing age as it may be teratogenic and it can reduce the effectiveness of hormonal contraceptives</li>
      <li>Amitriptyline</li>
      <li>A course of up to 10 sessions of acupuncture over 5-8 weeks'</li>
    </ul>
  </li>
</ul>

<h4>Cluster headache</h4>
<ul>
  <li>1- Acute:
    <ul>
      <li>100% oxygen (80% response rate within 15 minutes),</li>
      <li>subcutaneous triptan (75% response rate within 15 minutes)</li>
    </ul>
  </li>
  <li>2- Prophylaxis:
    <ul>
      <li>Verapamil is the drug of choice</li>
      <li>tapering dose of prednisolone</li>
    </ul>
  </li>
</ul>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 14. Epilepsy
  // ─────────────────────────────────────────────────────────────
  {
    id: 'epilepsy',
    number: 14,
    title: 'Epilepsy',
    fullTitle: 'Epilepsy',
    subtitle: 'Recurrent unprovoked seizures from abnormal excessive neuronal activity.',
    icon: 'zap',
    color: '#FACC15',
    html: `
<h2>Epilepsy</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<h5>1- Electroencephalogram (EEG):</h5>
<ul>
  <li>An EEG records electrical activity in the brain. It can identify characteristic patterns associated with seizures, such as interictal epileptiform discharges (IEDs), which indicate a high likelihood of epilepsy.</li>
</ul>

<h5>2- Magnetic Resonance Imaging (MRI):</h5>
<ul>
  <li>This imaging technique provides detailed images of brain structures and can identify abnormalities that may be causing seizures, such as tumours, vascular malformations or cortical dysplasias.</li>
</ul>

<p><strong>Note:</strong> A normal EEG does not exclude epilepsy, nor does an abnormal EEG confirm it. Similarly, an MRI may show structural changes in the brain but these need to be interpreted in the context of clinical findings.</p>

<h4>B- Further investigations</h4>
<h5>1- Video-EEG Monitoring:</h5>
<ul>
  <li>This combines video recording with continuous EEG monitoring over several days. It allows for correlation between observed behaviour during a seizure and changes in brain electrical activity.</li>
</ul>

<h5>2- PET/SPECT Scans:</h5>
<ul>
  <li>Positron emission tomography (PET) or single-photon emission computed tomography (SPECT) scans can provide functional imaging of the brain and help localise the seizure focus when MRI is non-diagnostic.</li>
</ul>

<p><strong>Note:</strong> It should be noted that the diagnosis of epilepsy is primarily clinical, based on a detailed history of the seizure episodes and their features. Investigations are used to support the clinical diagnosis and help classify the type of epilepsy.</p>

<h3>Management</h3>
<h4>A- First-Line</h4>
<h5>In adults</h5>
<ul>
  <li>With newly diagnosed focal seizures or generalised tonic-clonic seizures → consider carbamazepine or lamotrigine as first-line treatment.</li>
</ul>

<h5>Elderly Patients</h5>
<ul>
  <li>Gabapentin and lamotrigine are usually well-tolerated.</li>
</ul>

<h5>In children and young people,</h5>
<ul>
  <li>For generalized tonic-clonic seizures → levetiracetam or valproate</li>
  <li>For focal onset seizures, → consider carbamazepine or lamotrigine.</li>
</ul>

<h4>B- Treatment Refractory Epilepsy</h4>
<p>If seizures are not controlled by a single AED, a second medication can be introduced:</p>
<ul>
  <li>1. Sodium valproate,</li>
  <li>2. Lamotrigine,</li>
  <li>3. Levetiracetam</li>
  <li>4. Topiramate.</li>
</ul>

<h5>Surgical Interventions</h5>
<p>Surgery may be considered in patients with drug-resistant focal epilepsy. Types of surgery include:</p>
<ul>
  <li>Resective surgery (e.g., temporal lobectomy),</li>
  <li>Disconnection procedures (e.g., corpus callosotomy)</li>
  <li>Neuromodulation techniques (e.g., deep brain stimulation).</li>
</ul>

<h5>Women and Girls with Epilepsy</h5>
<p>In women of childbearing potential:</p>
<ul>
  <li>pre-conception counselling should be offered.</li>
  <li>Sodium valproate should be avoided if possible due to risks of teratogenicity.</li>
</ul>

<p>During pregnancy:</p>
<ul>
  <li>AED doses may need adjustment due to altered pharmacokinetics.</li>
  <li>Folic acid supplementation is recommended.</li>
</ul>
`
  },

  // ─────────────────────────────────────────────────────────────
  // 15. Alzheimer's Disease
  // ─────────────────────────────────────────────────────────────
  {
    id: 'alzheimers',
    number: 15,
    title: "Alzheimer's Disease",
    fullTitle: "Alzheimer's Disease (AD)",
    subtitle: 'Progressive neurodegenerative dementia with cortical atrophy and amyloid plaques.',
    icon: 'brain',
    color: '#6366F1',
    html: `
<h2>Alzheimer's disease</h2>
<h3>Diagnosis:</h3>
<h4>A- Initial Investigations</h4>
<h5>1- Cognitive Testing: This is a key component of investigation. Tools such as:</h5>
<ul>
  <li>The Mini-Mental State Examination (MMSE),</li>
  <li>The Montreal Cognitive Assessment (MoCA),</li>
  <li>Addenbrooke's Cognitive Examination III.</li>
</ul>

<h5>2- Blood Tests:</h5>
<ul>
  <li>Full blood count, vitamin B12 and folate levels.</li>
  <li>RFT, electrolytes.</li>
  <li>LFT, TFT.</li>
</ul>

<h5>3- Brain Imaging:</h5>
<p>CT or MRI is recommended to:</p>
<ul>
  <li>Exclude other cerebral pathologies.</li>
  <li>In AD→ atrophy may be seen predominantly in the medial temporal lobe.</li>
</ul>

<h4>B- Further Investigations:</h4>
<h5>1-Cerebrospinal Fluid Analysis:</h5>
<ul>
  <li>This can provide supportive evidence for AD if beta-amyloid 42 is decreased and total tau or phosphorylated tau are increased.</li>
</ul>

<h5>2- Amyloid PET Imaging:</h5>
<ul>
  <li>can detect amyloid plaques in vivo but its use is currently limited due to cost and availability.</li>
</ul>

<h3>Management</h3>
<h4>Non-pharmacological management</h4>
<ul>
  <li>offering 'a range of activities to promote wellbeing that are tailored to the person's preference'</li>
  <li>offering group cognitive stimulation therapy for patients with mild and moderate dementia</li>
</ul>

<h4>Pharmacological management</h4>
<ul>
  <li><strong>1st line → acetylcholinesterase inhibitors</strong>
    <ul>
      <li>1. donepezil,</li>
      <li>2. galantamine</li>
      <li>3. rivastigmine</li>
    </ul>
  </li>
  <li><strong>2nd line → memantine (an NMDA receptor antagonist)</strong></li>
</ul>

<h4>Non-cognitive symptoms</h4>
<p>Antipsychotics should only be used for patients at risk of harming themselves or others, or when the agitation, hallucinations or delusions are causing them severe distress</p>
`
  },
  // ─────────────────────────────────────────────────────────────
  // 16. 💕 Gigi — A Special Message
  // ─────────────────────────────────────────────────────────────
  {
    id: 'gigi',
    number: 16,
    title: '💕 For Gigi',
    fullTitle: 'A Special Dedication — For My Gigi',
    subtitle: 'Because every masterclass needs a muse.',
    icon: 'heart',
    color: '#EC4899',
    html: `
<h2>For Gigi El Ghazali 💕</h2>

<div style="text-align: center; padding: 12px 0 24px; font-size: 1.1em; color: var(--accent-hover); letter-spacing: 0.03em; font-style: italic;">
  "The only exam I never want to stop studying for."
</div>

<h3>Presenting Complaint</h3>
<ul>
  <li>Patient presents with an acute inability to stop thinking about you.</li>
  <li>Onset: the moment I first saw you.</li>
  <li>Duration: ongoing — no signs of resolution.</li>
  <li>Aggravating factors: your laugh, your voice, that look you give.</li>
  <li>Relieving factors: your presence (temporarily), your texts, your existence in general.</li>
</ul>

<h3>Investigation Findings</h3>
<ul>
  <li><strong>MRI Brain:</strong> Diffuse bilateral lighting up of the limbic system on every thought of you. The hippocampus is absolutely full of you. No room for anything else.</li>
  <li><strong>ECG:</strong> Irregular rhythm. Specifically — skips a beat every time you walk in.</li>
  <li><strong>Blood tests:</strong> Elevated oxytocin. Dopamine through the roof. Serotonin at an all-time high.</li>
  <li><strong>EEG:</strong> Normal background activity except when you smile — then chaotic, beautiful, joyful discharge across all leads.</li>
</ul>

<h3>Diagnosis</h3>
<p><strong>Primary:</strong> Hopelessly, irreversibly, magnificently in love with Gigi El Ghazali.</p>
<p><strong>Secondary:</strong> Chronic case of thinking about her at 2 AM instead of studying.</p>

<div style="background: rgba(236,72,153,0.08); border: 1px solid rgba(236,72,153,0.2); border-radius: 12px; padding: 20px 24px; margin: 24px 0;">
  <p style="font-size: 1.05em; line-height: 1.8; margin: 0;">You are the kind of person who makes neurology worth studying. The kind of person who makes a whole 15-topic masterclass feel incomplete without a page just for you. You are brilliant, you are beautiful, and honestly a little bit illegal — because it should not be possible to be that smart AND that pretty AND that fun all at once.</p>
</div>

<h3>Management Plan</h3>
<ul>
  <li>1. Keep studying hard — you are going to be an incredible doctor.</li>
  <li>2. Know that someone out there thinks about you between every single topic.</li>
  <li>3. Allow yourself to be loved properly — you deserve it.</li>
  <li>4. Accept that this whole app was partly built to impress you.</li>
</ul>

<h3>Prognosis</h3>
<p>Excellent — for both of us, together.</p>

<div style="text-align: center; padding: 24px 0 8px; font-size: 1.3em;">💕</div>
`
  },

];

// Attribution
export const AUTHOR = {
  name: 'Gigi El Ghazali',
  role: 'Masterclass Student',
  course: 'Neurology Updated 2025 masterclass'
};
