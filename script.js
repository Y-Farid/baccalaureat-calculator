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
  if (grade >= 17) return '7'; if (grade >= 15) return '6'; if (grade >= 13) return '5';
  if (grade >= 10) return '4'; return 'Low Pass (1-3)';
}


// =================================================================
// SECTION 2: CORE LOGIC
// =================================================================

calculateButton.addEventListener('click', () => {
  let totalPoints = 0; const totalCoefficients = 100;
  gradeInputs.forEach(input => {
    const grade = parseFloat(input.value) || 0;
    const coefficient = coefficients[input.id];
    if (coefficient) { totalPoints += grade * coefficient; }
  });

  const finalGrade = totalPoints / totalCoefficients;
  finalGradeElement.textContent = finalGrade.toFixed(2);

  let mentionText = '';
  if (finalGrade >= 18) { mentionText = 'Félicitations du jury'; }
  else if (finalGrade >= 16) { mentionText = 'Mention Très Bien'; }
  else if (finalGrade >= 14) { mentionText = 'Mention Bien'; }
  else if (finalGrade >= 12) { mentionText = 'Mention Assez Bien'; }
  else if (finalGrade >= 10) { mentionText = 'Admis(e)'; }
  else if (finalGrade >= 8) { mentionText = 'Admis(e) au second groupe (rattrapages)'; }
  else { mentionText = 'Ajourné(e)'; }
  mentionResultElement.textContent = mentionText;

  // --- V2.0 CONVERSION LOGIC ---
  // Call our new helper functions with the calculated finalGrade
  const usGrade = getUSGrade(finalGrade);
  const aLevelGrade = getALevelGrade(finalGrade);
  const ibGrade = getIBGrade(finalGrade);

  // Update the text content of the new result paragraphs
  usGradeResultElement.textContent = usGrade;
  alevelResultElement.textContent = aLevelGrade;
  ibResultElement.textContent = ibGrade;

  // This is the line that makes the magic happen: un-hide the container
  converterContainer.style.display = 'block';
});