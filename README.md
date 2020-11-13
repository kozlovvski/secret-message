# secret-message

## Description

The idea behind this app is to allow user to create a secret message that will be shareable through a URL. By accessing the provided URL, another user will be able to read the created message. Then the message should be removed to be never accessed again.

## Implementation

The app should be a React front-end with a simple Firebase back-end. It should use Redux to keep track of the user-related data like authentication status and created secret-messages. Data should be stored in Firestore readable only through Cloud Functions that will make sure that secret-message content is ever fetched only once and then deleted.

## User stories

1. **As a signed out user**
   - I want to add a new secret message
   - I want to read a secret message by accessing secret message link
   - I want to sign in
   - I want to sign up
2. **As a signed in user**
   - I want to add a new secret message
   - I want to read a secret message by accessing secret message link
   - I want to view secret messages created by me
   - I want to delete a secret message created by me
   - I want to sign out

## Routes

- **Home** _(„/”)_ - it should display purpose of the app, how it does work and encourage to create a new secret-message
- **Create a new secret-message** _(„/app”)_ - it should contain components necessary for a successful secret-message creation
- **Your secret-messages** _(„/app/your-messages”)_ - if user is logged in, it should display a list of created secret-messages with an ability to delete a selected secret-message. If user is not logged in, it should display a 403 Forbidden component
- **Secret message** _(„/app/:id”)_ - it should check if a secret-message with such id exists. If not, it should display 404 Not found component. If it exists, it should display a warning that message will be shown only once. After complying to the rules, it should fetch a message and delete it in Firestore
