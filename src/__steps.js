/**
        ----------------------------------- 
                   INITIAL SETUP
         ----------------------------------- 
* 1. Visit: console.firebase.google.com
* 2. Create project (skip google analytics)
* 3. Register your app (Create config)
* 4. install firebase: npm install firebase
* 5. Add config file to your project (project overview> project settings)
* 6. DANGER: Do not share config in public and do not push this file 
in gitHUb

         ----------------------------------- 
                   INTEGRATION SETUP
         ----------------------------------- 
* 7. Go to docs > Build > Authentications > Web > Get started 
* 8. Export default app from the firebase.init.js file.
* 9. import in Login.jsx: import { getAuth } from 'firebase/auth';
* 10. Create auth: const auth = getAuth(app);

         ----------------------------------- 
                   PROVIDER SETUP
         ----------------------------------- 

* 11. import GoogleAuthProvider:  const provider = new GoogleAuthProvider();
* 12. Use signInPopUp and pass auth and provider in button handler function.
* 13. For activate sign in method: Build > Authentication > Sign in Method > Google> Google account added.
* 14. [Vite]: Change  127.0.0.1 to localhost 

         ----------------------------------- 
                   Github SETUP
         ----------------------------------- 

* 15. Github profile> Settings > Developer Settings > Create new Github App> Can give any Name > Home page url need to add > Generate client secret

* 16. Add them in firebase github 

**/