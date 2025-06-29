// =================================================================
// SECTION 1: DATA AND ELEMENT SELECTIONS
// =================================================================

const coefficients = {
  'francais-ecrit': 5, 'francais-oral': 5, 'philo': 8, 'grand-oral': 10, 'spe-1': 16, 'spe-2': 16,
  'lva-premiere': 3, 'lvb-premiere': 3, 'hist-geo-premiere': 3, 'ens-sci-premiere': 3, 'emc-premiere': 1, 'spe-premiere': 8,
  'lva-terminale': 3, 'lvb-terminale': 3, 'hist-geo-terminale': 3, 'ens-sci-terminale': 3, 'eps-terminale': 6, 'emc-terminale': 1
};

const calculateButton = document.getElementById('calculate-btn');
const gradeInputs = document.querySelectorAll('input[type="number"]');
const finalGradeElement = document.getElementById('final-grade');
const mentionResultElement = document.getElementById('mention-result');

// V2.0 Element Selections
const converterContainer = document.getElementById('converter-container');
const usGradeResultElement = document.getElementById('us-grade-result');
const ibResultElement = document.getElementById('ib-result');
const alevelResultElement = document.getElementById('alevel-result');


// =================================================================
// SECTION 1.5: V2.0 HELPER FUNCTIONS (Based on your research)
// =================================================================

function getUSGrade(grade) {
  if (grade >= 15) return 'A+'; if (grade >= 14) return 'A'; if (grade >= 13) return 'B+';
  if (grade >= 12) return 'B'; if (grade >= 11) return 'B-'; if (grade >= 10) return 'C+';
  if (grade >= 9) return 'C'; if (grade >= 8) return 'C-'; if (grade >= 7) return 'D+';
  if (grade >= 6) return 'D'; if (grade >= 5) return 'D-'; return 'F';
}
function getALevelGrade(grade) {
  if (grade >= 18) return 'A*'; if (grade >= 16) return 'A'; if (grade >= 14) return 'B';
  if (grade >= 12) return 'C'; if (grade >= 10) return 'D'; if (grade >= 8) return 'E'; return 'Fail';
}
function getIBGrade(grade) {
    if (grade >= 17) return '7';
    if (grade >= 15) return '6';
    if (grade >= 13) return '5';
    if (grade >= 10) return '4';
    // Le système IB note généralement jusqu'à 1. Un score en dessous de 4 est souvent un échec.
    // On peut simplifier pour l'utilisateur.
    if (grade >= 8) return '3'; 
    if (grade >= 6) return '2';
    if (grade >= 4) return '1';
    return 'Fail';
}


// =================================================================
// SECTION 2: CORE LOGIC
// =================================================================

calculateButton.addEventListener('click', () => {
  let totalPoints = 0;
  const totalCoefficients = 100;

  gradeInputs.forEach(input => {
    // --- CHANGEMENT 1: Gérer la virgule ---
    // On récupère la valeur de l'utilisateur et on remplace la virgule par un point.
    const sanitizedValue = input.value.replace(',', '.');

    // On convertit cette valeur "nettoyée" en nombre. Si le champ est vide, on met 0.
    const grade = parseFloat(sanitizedValue) || 0;

    // --- CHANGEMENT 2: Valider que la note est entre 0 et 20 ---
    // On utilise Math.max pour s'assurer que la note n'est pas en dessous de 0.
    // Puis on utilise Math.min pour s'assurer que le résultat n'est pas au-dessus de 20.
    const clampedGrade = Math.max(0, Math.min(grade, 20));

    const coefficient = coefficients[input.id];
    if (coefficient) {
      // On utilise la note validée (clampedGrade) pour le calcul.
      totalPoints += clampedGrade * coefficient;
    }
  });

  const finalGrade = totalPoints / totalCoefficients;
  finalGradeElement.textContent = finalGrade.toFixed(2); // .toFixed(2) arrondit à 2 décimales

  let mentionText = '';
  if (finalGrade >= 18) { mentionText = 'Félicitations du jury'; }
  else if (finalGrade >= 16) { mentionText = 'Mention Très Bien'; }
  else if (finalGrade >= 14) { mentionText = 'Mention Bien'; }
  else if (finalGrade >= 12) { mentionText = 'Mention Assez Bien'; }
  else if (finalGrade >= 10) { mentionText = 'Admis(e)'; }
  else if (finalGrade >= 8) { mentionText = 'Admis(e) au second groupe (rattrapages)'; }
  else { mentionText = 'Ajourné(e)'; }
  mentionResultElement.textContent = mentionText;

  // --- V2.0 CONVERSION LOGIC (aucune modification ici) ---
  const usGrade = getUSGrade(finalGrade);
  const aLevelGrade = getALevelGrade(finalGrade);
  const ibGrade = getIBGrade(finalGrade);

  usGradeResultElement.textContent = usGrade;
  alevelResultElement.textContent = aLevelGrade;
  ibResultElement.textContent = ibGrade;

  converterContainer.style.display = 'block';
});