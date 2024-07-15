Project built with Webpack, React, React-router, Redux, JavaScript, HTML/CSS, SaaS, Node.js, Firebase.

https://www.figma.com/file/wilRDyY68cUEdgNWZHQA10/Learn-Lingo-(Copy)?type=design&node-id=13-1083&mode=design&t=Egfm3feADmqpYF0y-0

Tasks For the project:

Create an app for a company that offers online language learning services with teachers. The app consists of three pages:

• Home Page: Lists the advantages of the company and includes a call-to-action link to start using the app, which redirects to the “Teachers” page. The styling should be implemented using examples provided in the layout with various palette variations, or using a prototype (which will make the “project” more unique).
• Teachers Page: Contains a list of teachers that users can filter by teaching language, the students’ proficiency level the teacher works with, and the hourly rate.
• Private Favorites Page: Contains teachers that have been added to the user's "favorites."

Technical Task:

1. Use firebase_DB to add authentication to the application (registration, login, fetching current user data, logout).
2. Implement the registration/login form and basic validation of its fields using formik & yup. All fields are required. The modal window with the form should close when clicking the “X” button, clicking on the backdrop, or pressing the Esc key.
3. In the Realtime Database (by Firebase), create a collection of teachers with the following fields: name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience.

Additional Task
Create routing using React Router.
Add filtering: by teaching language; by the students' proficiency level the teacher works with; by the hourly rate.

To populate the collection, you can use teachers.json.

4. Implement a card describing the teacher's characteristics according to the layout.
5. On the “Teachers” page, 4 cards should be rendered, and the rest can be loaded by clicking the Load more button, after which a request to the database should be made to display a new batch of cards.
6. In the event of a click on the button in the form of a "heart":
    • For non-authorized users: a modal window or push notification should appear stating that this functionality is available only for authorized users.
    • For authorized users: the card should be added to the favorites list (using localStorage or by working with the users collection - by firebase), and the color of the "heart" button should change.
7. When the page is refreshed by an authorized user, the final result of the user's actions should be fixed. That is, if a card with information about a teacher is added to favorites and the page is refreshed,       the button should still remain in the "favorite" state with the corresponding color.
8. In the event of a repeated click on the button in the form of a "heart", the card should be removed from the favorites list, and the color of the button should change to its initial state.
9. When clicking the Read more button, the card should expand to show more detailed information about the teacher and reviews from their students.
10. When clicking the Book trial lesson button, a modal window with a form for booking a trial lesson should open. The form and basic validation of its fields should be implemented using formik & yup. All fields are required.
11. The modal window should close when clicking the “X” button, clicking on the backdrop, or pressing the Esc key.
12. An authorized user has access to a private "Favorites" page, where they can view all the teacher cards they have added to their "favorites". The styling of the page should be similar to the “Teachers” page.

Criteria for Completion:

● The layout is responsive from 320px to 1440px, semantic, and valid.
● There are no errors in the browser console.
● The work is done in native JS using a bundler (Vite, Parcel, or others) or in React.
● User authentication and working with the collection are implemented using Firebase.
● Interactivity works according to the technical task.
● The code is formatted and without comments.
● The repository should have a README.md with a description of the project: what the project is about, main technologies, layout, technical task.
● The project is deployed on GitHub Pages, Netlify.com, or another third-party hosting.
