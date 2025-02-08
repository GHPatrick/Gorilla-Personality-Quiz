public class GorillaPersonalityQuizController {

    public static String getGorillaPersonality(String answer) {
        String personality = '';
    
        if (answer == 'Friendly') {
            personality = 'You are a social gorilla! You love interacting with others and have fun in the jungle!'
        } else if (answer == 'Shy') {
            personality = 'You are a gorilla that prefers solitude. Most others will see your mighty silver back before interacting with you.'
        } else if (answer == 'Adventurous') {
            personality = 'You are a gorilla that loves to explore the jungles; no tree, branch, or trail goes without your exploration and you love the challenge of your surroundings.'
        } else {
            personality = 'Answer not recognized! Try again.';
        }
    
        return personality;
    
        }
    }