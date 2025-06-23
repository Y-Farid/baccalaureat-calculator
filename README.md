# Simulateur de Note au Baccalauréat

A web-based calculator to accurately estimate final grades for the French Baccalauréat Général, based on the 2025 coefficients.

**➡️ Live Demo: [https://y-farid.github.io/baccalaureat-calculator/](https://y-farid.github.io/baccalaureat-calculator/)**

![Calculator-screenshot](https://github.com/user-attachments/assets/bcc5330a-ea9d-49e3-8807-6786357c3499)

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

*   **IB & A-Level Converter:** Implement a feature to convert the final Baccalauréat grade (/20) to equivalent scoring systems like the International Baccalaureate (IB), British A-Levels and GPA.
*   **Error Handling:** Add more robust validation to prevent users from entering grades outside the 0-20 range.
