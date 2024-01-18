# The Cosmere Encyclopedia

## Elevator Pitch
Have you ever wanted to join a chat group to nerd out about your favorite book, but everybody seems to have read so much farther than you? No need to worry, this chatting site is configured to service new and experienced readers. Users can configure their settings according to the books they have read, and this site will automatically filter comment threads by book tags placed on them. Rest assured with this chat group that you will be protected from spoilers.

## Design

![Scannable Document on Jan 17, 2024 at 9_45_49 PM](https://github.com/Treckon/start-up/assets/135891708/da735c66-85c6-49f0-b108-16b46b72062a)
![Scannable Document on Jan 17, 2024 at 10_03_54 PM](https://github.com/Treckon/start-up/assets/135891708/ce4565e5-e8d6-473e-91b6-c246688feb0d)
![Scannable Document 3 on Jan 17, 2024 at 9_45_49 PM](https://github.com/Treckon/start-up/assets/135891708/9aeeb584-2b77-48d2-8149-41dac57e8604)

###The following is a sequence diagram detailing how comments from users are managed in the comment threads:

![Scannable Document on Jan 17, 2024 at 9_46_26 PM](https://github.com/Treckon/start-up/assets/135891708/1b2f83b4-a0ae-401d-8676-84ee31f12889)

## Key Features
1. Secure Login, with option to receive notifications of content updates.
2. Profile menu, where spoiler settings can be configured according to what books you have read.
3. Comment section, where users may chat about favorite topics.
4. Comment section tags, displaying what level of spoilers are discussed in the comment threads.
5. Search bar that automatically filters out comment threads that exceed your reading progress.

## Technologies
I am going to use the required technologies in the following ways.

1. HTML - Uses correct HTML structure for application. Four HTML pages, one for login, one for listing comment pages, one for displaying lists of messages, and one for the profile page.
2. CSS - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
3. JavaScript - Provides login, database searching for chat groups, and spoiler setting configuration
4. Service - Backend service with endpoints for:
login
retrieving comment groups
retrieving new and existingcomments
entering comments
5. DB/Login - Store users, spoiler settings, and comment groups in database. Register and login users. Credentials securely stored in database. Can't comment or create chat groups unless authenticated.
WebSocket - Each time a user comments in a thread, other users in that thread receive that comment.
React - Application ported to use the React web framework.

## HTML Deliverable

The structure of this application is built out using HTML

1. HTML pages - Four HTML pages, one for login, one for listing comment pages, one for displaying lists of messages, and one for the profile page.
2. Links - The login page automatically links to the profile page if signing up. The profile page and login page link to the chat page. Links are imbedded in chat group names when they appear, leading to a page with the chat message history.
3. Text - Each of chat groups displays a list of messages and allows for the user to input as well.
4. Images - I am unsure how to include images and so will not include them.
5. DB/Login - Input box and submit button for login. The chat groups and messages are also stored in a database under the name of the chat group.
6. WebSocket - new messages appear on the chat group page as they are entered by users.

## CSS Deliverable

For this deliverable I properly styled the application into its final appearance.

1. Header, footer, and main content body with search bar.
2. Navigation elements - profile icon located in the top right on all pages for easy access.
3. Responsive to window resizing - My app looks great on all window sizes and is most effective on computer, but can accomodate different devices.
4. Application elements - Uses contrast, font styling, and spacing to make recognizing chat groups easy.
5. Application text content - Consistent fonts, clear enough to be easily read.
6. Application images - Still don't have images and so no styling here.

## JavaScript Deliverable

Functionality for this website configured using JavaScript for a single individual.

1. login - When you sign up for the first time, you are taken to the profile page to set up your spoiler settings. If you are loggin in, you are taken straight to the chat groups list.
2. database - Stores in an external database the user profiles, chat groups, and the messages contained in them.
3. WebSocket - I used the setInterval function to periodically get new messages from other users.
4. application logic - The groups that appear on the chat group menu are automatically filtered based on the reading progress of the user.

## Service Deliverable

1. Node.js/Express HTTP service
2. Static middleware for frontend
3. Calls to third party endpoints - None to be implemented.
4. Backend service endpoints - Placeholders for login that stores the current user on the server.
5. Frontend calls service endpoints

## DB/Login Deliverable

For this deliverable all messages in the chat groups are associated to a username.

1. MongoDB Atlas database
2. Stores data in MongoDB
3. User registration - Creates a new account in the database.
4. existing user - Stores the messages under the same user if the username already exists.
5. Use MongoDB to store credentials - Stores the users individually, but the messages under their message groups with the username saved with it.
6. Restricts functionality - You cannot comment until you have logged in. This is restricted on the frontend only.

## Websocket Deliverable

For this deliverable I will use webSocket to update the votes on the frontend in realtime.

1. Backend listens for WebSocket connection
2. Frontend makes WebSocket connection
3. Data sent over WebSocket connection
4. WebSocket data displayed

## React Deliverable

For this deliverable I will convert the application over to use React.

1. Bundled and transpiled
2. Components - Login, Message, edit preferences.
3. Router - Routing between login and messaging components.
