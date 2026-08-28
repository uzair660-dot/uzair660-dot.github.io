// =============================================
// INTERACTIVE BODY DIAGRAM — deep-detail content
// Matches the systems visible in the anatomy photo
// Self-contained — doesn't touch script.js
// =============================================

const bodySystemData = {
  brain: {
    label: "Neurology",
    title: "Brain & Nervous System",
    anatomy: "Made up of the cerebrum, cerebellum, and brainstem, connected to the body through the spinal cord and a network of peripheral nerves.",
    function: "Controls thought, memory, movement, and sensation, and regulates automatic functions like breathing and heart rate through electrical and chemical signals.",
    conditions: "Common conditions include stroke, seizures, migraines, and traumatic brain injury.",
    assessment: "Nurses check level of consciousness (e.g. Glasgow Coma Scale), pupil response, and motor/sensory function on both sides of the body."
  },
  thyroid: {
    label: "Endocrine",
    title: "Thyroid Gland",
    anatomy: "A small, butterfly-shaped gland at the front of the neck, just below the larynx (voice box).",
    function: "Produces hormones (T3 and T4) that control metabolism, energy use, and growth throughout the body.",
    conditions: "Common conditions include hypothyroidism, hyperthyroidism, and goiter.",
    assessment: "Nurses monitor for weight changes, heart rate, energy levels, and neck swelling, and track TSH lab values."
  },
  lungs: {
    label: "Respiratory",
    title: "Lungs & Respiratory System",
    anatomy: "Two lobed organs in the chest — the right lung has 3 lobes, the left has 2 (to make room for the heart) — connected to the airway via the trachea and bronchi.",
    function: "Bring oxygen into the blood and remove carbon dioxide with every breath, through tiny air sacs called alveoli.",
    conditions: "Common conditions include asthma, pneumonia, COPD, and pulmonary embolism.",
    assessment: "Nurses monitor respiratory rate, depth, oxygen saturation (SpO2), and listen to lung sounds for wheezes, crackles, or diminished airflow."
  },
  heart: {
    label: "Cardiology",
    title: "Heart & Circulatory System",
    anatomy: "A four-chambered muscular organ (two atria, two ventricles) sitting between the lungs, pumping blood through a closed network of arteries and veins.",
    function: "Pumps oxygen-rich blood to the body and returns oxygen-poor blood to the lungs, keeping every organ supplied.",
    conditions: "Common conditions include hypertension, heart failure, arrhythmias, and coronary artery disease.",
    assessment: "Nurses assess heart rate and rhythm, blood pressure, capillary refill, and watch for edema or chest pain."
  },
  vessels: {
    label: "Circulatory",
    title: "Blood Vessels",
    anatomy: "Arteries carry oxygen-rich blood away from the heart under high pressure; veins carry oxygen-poor blood back to the heart under lower pressure, often visible as blue lines under the skin.",
    function: "Together, arteries, veins, and capillaries form the highway that delivers oxygen and nutrients to every cell and carries waste away.",
    conditions: "Common conditions include varicose veins, deep vein thrombosis (DVT), and peripheral artery disease.",
    assessment: "Nurses check pulses, capillary refill, skin color/temperature of the limbs, and watch for swelling or signs of clotting."
  },
  lymphatic: {
    label: "Immune",
    title: "Lymphatic System",
    anatomy: "A network of vessels and small bean-shaped lymph nodes (clustered in areas like the armpit and neck) that carry a clear fluid called lymph.",
    function: "Helps fight infection by filtering harmful substances out of the lymph fluid and supporting white blood cell production.",
    conditions: "Common conditions include swollen lymph nodes from infection, lymphedema, and lymphoma.",
    assessment: "Nurses check for swollen or tender lymph nodes, and monitor for signs of infection or unexplained swelling in the limbs."
  },
  liver: {
    label: "Hepatic",
    title: "Liver",
    anatomy: "The largest internal organ, located in the upper right abdomen, made of tissue lobes richly supplied with blood.",
    function: "Filters toxins from the blood, produces bile to help digest fats, stores energy as glycogen, and makes clotting proteins.",
    conditions: "Common conditions include hepatitis, cirrhosis, and fatty liver disease.",
    assessment: "Nurses track liver enzyme labs (ALT/AST), bilirubin levels, skin color for jaundice, and abdominal tenderness."
  },
  stomach: {
    label: "Digestive",
    title: "Stomach",
    anatomy: "A J-shaped muscular pouch in the upper abdomen, sitting just below the esophagus.",
    function: "Mixes food with acid and enzymes to begin breaking it down before it moves into the small intestine.",
    conditions: "Common conditions include gastritis, peptic ulcers, and GERD (acid reflux).",
    assessment: "Nurses monitor for nausea, vomiting, abdominal pain, and bowel sounds."
  },
  pancreas: {
    label: "Endocrine / Digestive",
    title: "Pancreas",
    anatomy: "A long, flat gland tucked behind the stomach, connecting to the small intestine.",
    function: "Produces insulin and glucagon to regulate blood sugar, and releases digestive enzymes into the small intestine.",
    conditions: "Common conditions include pancreatitis and diabetes (types 1 and 2).",
    assessment: "Nurses monitor blood glucose levels, watch for abdominal pain radiating to the back, and track amylase/lipase labs."
  },
  kidneys: {
    label: "Renal",
    title: "Kidneys",
    anatomy: "A pair of bean-shaped organs located toward the back of the abdomen, on either side of the spine.",
    function: "Filter waste and excess fluid from the blood, balance electrolytes, and help regulate blood pressure.",
    conditions: "Common conditions include kidney stones, chronic kidney disease, and acute kidney injury.",
    assessment: "Nurses track fluid intake/output, creatinine and BUN labs, and watch for swelling (edema) or changes in urine output."
  },
  spine: {
    label: "Skeletal / Neurology",
    title: "Spine",
    anatomy: "A column of 33 stacked vertebrae running from the skull to the pelvis, protecting the spinal cord inside.",
    function: "Supports the body's posture and movement while protecting the spinal cord, which carries nerve signals between the brain and body.",
    conditions: "Common conditions include herniated discs, scoliosis, and spinal cord injury.",
    assessment: "Nurses assess back pain, mobility, and — after injury — sensation and movement below the site of concern."
  },
  intestines: {
    label: "Digestive",
    title: "Intestines",
    anatomy: "A long, coiled tube — the small intestine absorbs nutrients, the large intestine (colon) absorbs water and forms stool.",
    function: "Completes digestion, absorbs nutrients and water into the bloodstream, and eliminates waste.",
    conditions: "Common conditions include Crohn's disease, ulcerative colitis, and bowel obstruction.",
    assessment: "Nurses track bowel sounds, frequency and character of stool, abdominal distension, and nutrition/hydration status."
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const hotspots = document.querySelectorAll(".hotspot");
  const panel = document.getElementById("body-info-content");

  if (!hotspots.length || !panel) return;

  hotspots.forEach(function (spot) {
    spot.addEventListener("click", function () {
      showSystemInfo(spot);
    });

    spot.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showSystemInfo(spot);
      }
    });
  });

  function showSystemInfo(spot) {
    const key = spot.getAttribute("data-system");
    const data = bodySystemData[key];
    if (!data) return;

    hotspots.forEach(function (s) {
      s.classList.remove("active");
    });
    // Highlight every dot for this same system (e.g. both lung dots, both kidney dots)
    document.querySelectorAll('.hotspot[data-system="' + key + '"]').forEach(function (s) {
      s.classList.add("active");
    });

    panel.innerHTML =
      '<div class="info-content">' +
        '<span class="system-label">' + data.label + '</span>' +
        '<h3>' + data.title + '</h3>' +
        '<p><strong>Anatomy:</strong> ' + data.anatomy + '</p>' +
        '<p><strong>Function:</strong> ' + data.function + '</p>' +
        '<p><strong>Common conditions:</strong> ' + data.conditions + '</p>' +
        '<p><strong>Nursing focus:</strong> ' + data.assessment + '</p>' +
      '</div>';
  }
});
