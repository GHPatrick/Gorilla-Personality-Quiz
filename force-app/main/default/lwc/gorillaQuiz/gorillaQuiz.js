import { LightningElement } from 'lwc';
import getGorillaPersonality from '@salesforce/apex/GorillaPersonalityQuizController.getGorillaPersonality';

export default class GorillaQuiz extends LightningElement {
    selectedValue = '';
    personalityResult = '';
    quizLink = 'https://www.worldwildlife.org/species/gorilla';

    options = [
        {label: 'Friendly', value: 'Friendly'},
        {label: 'Shy', value: 'Shy'},
        {label: 'Adventurous', value: 'Adventurous'}
    ];

    handleChange(event) {
        this.selectedValue = event.target.value
    }

    handleSubmit() {
        getGorillaPersonality({answer: this.selectedValue})
        .then(result => {
            this.personalityResult = result;
        })
        .catch(error => {
            this.personalityResult = 'An error occurred.';
        });
    }
}