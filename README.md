![image](https://github.com/user-attachments/assets/083214f7-51bf-443d-a04d-e518ff68803a)![image](https://github.com/user-attachments/assets/083214f7-51bf-443d-a04d-e518ff68803a)# Simulateur de Note au Baccalauréat

A web-based calculator to accurately estimate final grades for the French Baccalauréat Général, based on the 2025 coefficients.

**➡️ Live Demo: [https://y-farid.github.io/baccalaureat-calculator/](https://y-farid.github.io/baccalaureat-calculator/)**

![Uploading Calculator-Screenshot.png…]()
![Uploading Calculator-Screenshot.png…]()
![Uploading Calculator-Screenshot.png…]()
![Uploading Calculator-Screenshot.png…]()

---

## 🚀 Overview

This project was a self-directed challenge undertaken during my summer break to develop practical engineering and programming skills. As a prospective engineering student, I wanted to go beyond theory and build a tangible, useful tool from scratch. I chose a Baccalauréat calculator because it solved a real-world problem for my peers and involved precise logic and data management.

The entire project was completed in a 7-day sprint, demonstrating my ability to learn quickly and manage a project from conception to deployment.

## ✨ Features

*   **Accurate Calculations:** Uses the official 2025 coefficients for all subjects in the Baccalauréat Général.
*   **Comprehensive Input:** Includes all required fields, from *épreuves anticipées* to *contrôle continu* for both *Première* and *Terminale*.
*   **Instant Feedback:** The final grade is calculated and displayed in real-time on the webpage.
*   **Official Mentions:** Automatically determines and displays the correct mention, from "Admis(e)" to "Félicitations du jury".

## 🛠️ Tech Stack

*   **HTML5:** For the core structure and content of the application.
*   **CSS3:** For all styling, layout (using Flexbox), and the responsive, dark-themed design.
*   **JavaScript (ES6):** For all the logic, including DOM manipulation, event handling, and the calculation engine.

## 🧠 Key Learnings & Challenges

This project was my first experience with web development, and it presented several challenges that were valuable learning opportunities:

*   **Data Type Coercion:** My biggest challenge was realizing that user input from HTML is always a string, even from a `type="number"` box. I learned that mathematical operations would fail without explicitly converting the string value `"15"` to a number `15`. I solved this by implementing `parseFloat()` on every user input, which also taught me how to handle `NaN` (Not a Number) results for empty fields using the `|| 0` shorthand.

*   **Data Management:** Initially, I had coefficients scattered in my code. I refactored this by creating a single JavaScript `object` to act as a "coefficient map." This made the code cleaner, more organized, and easier to debug, as all my core data was in one place.

*   **DOM Manipulation:** I learned how to use `document.getElementById` and `document.querySelectorAll` to select elements, and how to use `.addEventListener` to make the application respond to user actions. The final step was learning to update the `textContent` of the result elements to display the output, closing the loop from input to output.

## 🔮 Future Improvements

This project serves as a strong foundation, and I have a clear roadmap for future enhancements to increase its utility for students planning international studies:

*   **Implement an International Grade Converter:**
    *   **Goal:** Add a feature to convert the final Baccalauréat score (/20) to three major international scoring systems:
        1.  **US GPA:** Convert the score to a standard 4.0 Grade Point Average scale.
        2.  **IB Points:** Map the grade to the International Baccalaureate scale (out of 45).
        3.  **A-Levels:** Provide an equivalent British A-Level grade (A*, A, B, etc.).
    *   **Plan:** This would involve researching official and commonly used conversion tables for each system. The UI would be updated with a new results section, and a JavaScript function would be written to handle the mapping logic for all three conversions based on the final calculated grade.

*   **Add Robust Input Validation:**
    *   **Goal:** Improve the user experience by preventing invalid inputs.
    *   **Plan:** Use JavaScript to validate that grades are entered within the 0-20 range. If a user enters an invalid number, the input field's border could turn red, and a small message would appear guiding them to enter a correct value. This prevents calculation errors and makes the tool more user-friendly.
