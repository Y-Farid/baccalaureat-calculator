// =================================================================
// SECTION 1: DATA AND ELEMENT SELECTIONS
// =================================================================

// The corrected 'single source of truth' for all coefficients.
// Note the new unique IDs for Première and Terminale subjects.
const coefficients = {
  // Epreuves Anticipées (coeff. 10)
  'francais-ecrit': 5,
  'francais-oral': 5,
  // Epreuves Finales (coeff. 50)
  'philo': 8,
  'grand-oral': 10,
  'spe-1': 16,
  'spe-2': 16,
  // Contrôle Continu Première (coeff. 21)
  'lva-premiere': 3,
  'lvb-premiere': 3,
  'hist-geo-premiere': 3,
  'ens-sci-premiere': 3,
  'emc-premiere': 1,
  'spe-premiere': 8,
  // Contrôle Continu Terminale (coeff. 19)
  'lva-terminale': 3,
  'lvb-terminale': 3,
  'hist-geo-terminale': 3,
  'ens-sci-terminale': 3,
  'eps-terminale': 6,
  'emc-terminale': 1
};

const calculateButton = document.getElementById('calculate-btn');
const gradeInputs = document.querySelectorAll('input[type="number"]');
const finalGradeElement = document.getElementById('final-grade');
const mentionResultElement = document.getElementById('mention-result');


// =================================================================
// SECTION 2: CORE LOGIC
// =================================================================

calculateButton.addEventListener('click', () => {
  console.log("----------- CALCULATION STARTED -----------");

  let totalPoints = 0;
  const totalCoefficients = 100; // The total is still 100

  gradeInputs.forEach(input => {
    // If the input is empty, treat its value as 0.
    const grade = parseFloat(input.value) || 0;
    
    // Look up the coefficient using the input's unique ID.
    const coefficient = coefficients[input.id];

    // This is a safeguard. If an input has no matching coefficient, we skip it.
    if (coefficient) {
      totalPoints += grade * coefficient;
      console.log(`> Subject: ${input.id} | Grade: ${grade} | Coeff: ${coefficient} | Points: ${grade * coefficient}`);
    }
  });

  console.log("----------- Totals -----------");
  console.log(`Total Points Earned: ${totalPoints}`);
  console.log(`Total Coefficients: ${totalCoefficients}`);

  // Calculate the final grade.
  const finalGrade = totalPoints / totalCoefficients;
  
  console.log("====================================");
  console.log(`FINAL CALCULATED GRADE: ${finalGrade}`);
  console.log("====================================");
console.log(`FINAL CALCULATED GRADE: ${finalGrade}`);

finalGradeElement.textContent = finalGrade.toFixed(2);
// Determine the mention based on the final grade
    let mentionText = ''; // Start with an empty string

    if (finalGrade >= 18) {
      mentionText = 'Félicitations du jury!';
    } else if (finalGrade >= 16) {
      mentionText = 'Mention Très Bien!';
    } else if (finalGrade >= 14) {
      mentionText = 'Mention Bien!';
    } else if (finalGrade >= 12) {
      mentionText = 'Mention Assez Bien!';
    } else if (finalGrade >= 10) {
      mentionText = 'Admis(e)';
    } else if (finalGrade >= 8) {
      mentionText = 'Admis(e) au second groupe (rattrapages)';
    } else {
      mentionText = 'Ajourné(e)'; // Failed
    }

    // Display the calculated mention text on the webpage
    mentionResultElement.textContent = mentionText;
console.log("----------- CALCULATION COMPLETE -----------");
});