import startPage from './pages/start.js';
import menuPage from "./pages/menu.js";
import questionPage from "./pages/question.js";
import addQuestionPage from "./pages/addQuestion.js";
import nameGamePage from "./pages/nameGame.js";
import resultPage from "./pages/result.js";
import signinPage from "./pages/signin.js";
import registerPage from "./pages/register.js";
import profilePage from "./pages/profile.js";

export default {
    async startRoute(params){
        startPage.render();
    },
    async menuRoute(params){
        menuPage.render();
    },
    async questionRoute(params){
        questionPage.render(params.id);
    },
    async addQuestionRoute(params){
        addQuestionPage.render(params.id);
    },
    async nameGameRoute(params){

        nameGamePage.render();
    },
    async resultRoute(params){
        resultPage.render();
    },
    async signinRoute(params){
        signinPage.render();
    },
    async registerRoute(params){
        registerPage.render();
    },
    async profileRoute(params){
        profilePage.render();
    }
}