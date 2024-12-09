# Unc Inc Assessment - React routing
This is an assessment to implement a React app with several pages that can be accessed by URL paths in your browser. Some of these routes are accessible anonymously, while others can only be accessed after a user is logged in. We also want you to showcase your frontend skills by implementing page transitions and animations for a e.g the menu

## Technical requirements

- React, v17 or higher.
- Use yarn, not npm.
- You can use Typescript, or 'regular' JavaScript, whichever you prefer.
- You can use a project generator like Create React App (or alike).
- Use Git, send us the repository by making a git bundle, a ZIP file, or just share an online link to the repo.
- The code needs to adhere to the standard React and Airbnb standards.
- Use whatever editor or IDE you prefer.

## General requirements

- Start your project by writing down a small plan, and share this with us.
- Keep track of your progress using separate git commits with useful commit messages.
- Choose external packages wisely. Do not write unnecessary code yourself.
- This assessment does not cover a backend to communicate with. Some things can be hard-coded.

## Functional requirements

- As a regular user, I want to be able to access the homepage on either / or /home.
- As a regular user, I want to be able to login using a form on /login with username "uncinc" and password "letmein" in order to become a logged in user.
- As a regular user, I want to get a message if I fill out wrong credentials.
- As a logged in user, I want to be able to access a dashboard on /dashboard.
- As a regular user, I want to access /dashboard from /home.
- As a regular user, I want to be redirected to the login form when trying to access a page that I have no access to.
- As a regular user, I want to be redirected from the login form to the page I originally wanted to go to.
- As a logged in user, I want my session to be remembered, so that I can come back to the dashboard later without having to log in again.
- As a logged in user, I want to be able to log out.
- The application should have page transitions.
- The menu should have animations.
- Add as many accessibility (a11y) as you can fit within the time.

## Things we will look out for

- Proper interpretation of the assignment: how well you read the assignment and specifications.
- State management: how you deal with data being stored and shared throughout the application.
- Don't overuse animations, make them almost functional. We want you to showcase your skills, but we are not looking for a Las Vegas show :)
- Proper use of existing packages: which packages you select, and why.
- Code quality: how easy to understand your code is, and how well it conforms to standards.
- A README explaining your thoughts and choices made during the assessment.
- Use of tests (this is not obligated but a big plus!)
- Good use of Git so send us a git repo


## Things we will NOT look out for

- Security of the credentials, that is NOT part of this assignment.

  
***

## Plan van aanpak
1. Unc Inc opdracht doorlezen
2. Project opzetten (git) + installatie 
3. Ontwerp maken + ideeën op doen (Pinterest)
4. Onderzoek doen React
5. Ontwerp bouwen 
6. Live zetten site
7. Site testen
8. Punten uit test doorvoeren
9. Site testen

### Analyseren
1. Repo aangemaakt + readme > opdracht erin gezet
2. Begonnen met het klaar zetten van mijn project, ik heb opgezocht hoe ik `React` en `Yarn` installeer en heb dit gedaan.
3. Opdracht goed doorlezen, wat moet ik maken en waar moet ik mij aan houden, start met het maken van een plan
4. Ik heb nog geen kennis van `React`, dus ik ben onderzoek gaan doen hiernaar
   1. Hoe maak ik /routes aan? + / & /home
   2. Hoe maak ik componenten aan?
   3. Hoe maak ik een login functie met React?
   4. Hoe log ik uit?
   5. Hoe maak ik een pagina die je alleen ziet als je bent ingelogd
   6. Hoe werken animaties/page-transitions in React

### Ontwerpen
1. Ik ben een ontwerp gaan maken in Figma, ik heb wat ideetjes opgedaan met Pinterest
2. <img width="513" alt="Screenshot Figma ontwerp bestand" src="https://github.com/user-attachments/assets/ab6a6929-9d83-4c01-a72b-9ed65fcca35d">
3. Mijn idee was om het een beetje in de `Unc Inc` stijl te maken, ik heb het ontwerp mobile first gemaakt, als het goed is hoef ik bijna geen media queries toe te voegen

### Bouwen
1. Docs lezen > `yarn add react-router-dom` gedaan voor de routing
2. Routes aangemaakt > dashboard, login, home
3. Global style toegevoegd
4. Component nav bar aangemaakt > [bron](https://medium.com/@swati.sharma_216/creating-navbar-using-react-router-63c4e785c2d4)
5. Login functie gemaakt
6. Protected routes > [YouTube video](https://medium.com/@swati.sharma_216/creating-navbar-using-react-router-63c4e785c2d4)
7. Inlog functie maken > [bron](https://www.shecodes.io/athena/53182-how-to-handle-login-in-react)
8. Het is me gelukt om een inlog functie te maken, maar hierdoor werkt de protected route niet, die checkt namelijk nog niet de authentication, ik had hem namelijk op null gezet.
9. Ik heb de user veranderd naar  `> const { user } = useAuth();` Nu werkt het wel
10. Algemene Styling aangepast
11. ❌ Intergreren live zetten
    - Dit ging helaas fout, kreeg meerdere errors via vercel en ben hier niet uitgekomen helaas... Hierdoor heb ik de site ook niet kunnen testen
    - error code: `Fout melding Error: Command "yarn run build" exited with 1`, build werkt wel lokaal!
    - Heb ook een nieuwe git aangemaakt en alles opnieuw erin gedaan, maar dit werkt ook niet helaas > [Zie nieuwe git](https://github.com/Lmikkers/unc-inc-versie2)
12. Screenrecorder werking
    - https://github.com/user-attachments/assets/7686501a-2964-4e0e-af83-f91c4e8d4a21
13. Screenshots pagina's
    - ![image](https://github.com/user-attachments/assets/008672b7-8f36-4ae5-8847-e019820162fb)

### Integreren
1. Niet gelukt helaas, normaal lukt dit via vercel maar dit is helaas niet gelukt, krijg meerdere errors
2. Lokaal bekijken:
   - `cd my-app` > `yarn install`
   - `yarn start`

### Testen
> 1. Live zetten niet gelukt... Helaas geen test kunnen doen, wel heb ik gekeken naar toegankelijkheid en maak ik gebruik van aria-labels en alt teksten
Uiteindelijk is het gelukt, live link: [https://unc-inc-assessment.vercel.app/](https://unc-inc-assessment.vercel.app/)
#
### Lighthouse test
<img width="769" alt="Scherm­afbeelding 2024-12-09 om 11 16 22" src="https://github.com/user-attachments/assets/22ac2c1d-e2ee-4f16-8226-3a65c665f1f7">

### W3C Audit validator
> ✅ Document checking completed. No errors or warnings to show.

### Tab test
Ik heb de site getest met tabs, ik kan makkelijk door de site navigeren. Als niet ingelogde gebruiker kun je de dashboard pagina niet bereiken. Dit kan ik voor de volgende keer beter uitzetten en pas laten zien als je bent ingelogd.



   
  
