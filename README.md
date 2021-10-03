<h1 align="center"> Slack Clone </h1>

<p align="center">
	<img src="https://img.shields.io/badge/Platform-Web-brightgreen" alt="Platform-Web">
	<img src="https://img.shields.io/badge/Repo%20Size-750%20kB-blue" alt="Repo-Size">
    <img src="https://img.shields.io/badge/Tech%20Stack-TypeScript%2C%20React%2C%20Redux%20Toolkit%2C%20React--Router%2C%20MUI%2C%20Styled--Components%2C%20Firebase-red" alt="Tech-Stack">
</p

<br>
<h2 align="center">Built with React JS :atom: at core.</h2>
<h2 align="center"><a href="https://slack-clone-hk-e1070.web.app/"> Live Site </a></h2>

## :bookmark_tabs: Introduction 
- Slack UI clone (Single Page Application).
- Push - Pull data to/from Firebase.

## :desktop_computer: Setup:
- Install all project dependencies with ```yarn```
- Setup Firestore and Enable Google Authentication on [Firebase](https://firebase.google.com/)
- Create ```firebase.ts``` file and copy paste below code and add the apiKey, authDomain, etc from firebase.

    ```javascript
    import firebase from "firebase/compat/app";
    import "firebase/compat/auth";
    import "firebase/compat/firestore";

    const firebaseConfig = {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    export { auth, provider, db };
    ```
- Start the development server with ```yarn start```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
