import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import firebaseConfig from './api/firebase-config.js';
import Router from "./Router.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

(async () => {
    try {
        const data = {
            1 : {
                game_name: "Simple Quiz",
                game_id: 1,
                questions: []
            }
        };
        if (!localStorage.games) {
            localStorage.setItem('games', JSON.stringify(data));
        }
        Router.init();


    } catch (e) {
        console.error(e);
        alert('Error: ' + e.message);
    }
})();

onAuthStateChanged(auth, (user) => {
    if (user) {
        const signInButton = document.getElementById('sign_in_bnt');
        const registerButton = document.getElementById('register_bnt');
        const signOutButton = document.getElementById('sign_out_bnt');
        const profileButton = document.getElementById('profile_bnt');
        signInButton.style.display = 'none';
        registerButton.style.display = 'none';
        signOutButton.style.display = 'block';
        profileButton.style.display = 'block';

        signOutButton.addEventListener('click', () => {
            signOut(auth)
                .then(() => {
                    console.log('User is signed out');
                })
                .catch((error) => {
                    console.log(error);
                });
        });

    } else {
        const signInButton = document.getElementById('sign_in_bnt');
        const registerButton = document.getElementById('register_bnt');
        const signOutButton = document.getElementById('sign_out_bnt');
        const profileButton = document.getElementById('profile_bnt');
        signInButton.style.display = 'block';
        registerButton.style.display = 'block';
        signOutButton.style.display = 'none';
        profileButton.style.display = 'none';
        console.log('User is not logged in');
    }
});
