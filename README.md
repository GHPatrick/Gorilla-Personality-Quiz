# Gorilla Personality Quiz

This is an interactive web application built using Salesforce Lightning Web Components (LWC) and Apex. It presents a fun personality quiz based on user responses, providing a personalized "Gorilla Personality" result. After completing the quiz, users are provided with a link to learn more about how they can help endangered gorilla species.

## Features

- **Interactive Personality Quiz**: Users select one of three options that best describes their personality: "Friendly," "Shy," or "Adventurous."
- **Personalized Results**: Based on the selection, users receive a description of their "Gorilla Personality."
- **Learn More**: After the result, a link to the World Wildlife Fund (WWF) page is provided, encouraging users to learn about endangered gorillas and ways to help.

## Technologies Used

- **Salesforce** (Apex and Lightning Web Components)
- **JavaScript**
- **HTML (LWC)**

## How It Works

### 1. **User Interaction**
- The user is presented with a radio button group where they can select one of the three personality traits: "Friendly," "Shy," or "Adventurous."
- After making a selection, the user clicks a "Get Result" button to receive their personality outcome.

### 2. **Backend Logic**
- The quiz uses an Apex class, `GorillaPersonalityQuizController`, which processes the user’s answer and returns a corresponding personality result. 
- The result is then displayed on the screen.

### 3. **Displaying the Result**
- Once the result is retrieved, a description of the user's "Gorilla Personality" is shown on the screen.
- Additionally, a link to the World Wildlife Fund's page about gorillas is displayed, encouraging users to learn more about how they can contribute to saving endangered gorilla species.

## How to Deploy

1. **Salesforce Org**: This application is designed to be used within a Salesforce organization (Org).
2. **Create Apex Class**: Deploy the `GorillaPersonalityQuizController` Apex class to your Salesforce Org.
3. **Deploy LWC**: Deploy the `gorillaQuiz.html` and `gorillaQuiz.js` files as part of your Lightning Web Component (LWC) setup.
4. **Use in a Lightning Page**: Add the component to any Lightning page or App to allow users to take the quiz.

## Video Demonstration
https://github.com/user-attachments/assets/a33849eb-3034-4822-9ee9-2d0369a696fe

## Learn More

Click [here](https://www.worldwildlife.org/species/gorilla) to learn about how you can help protect endangered gorilla species.
