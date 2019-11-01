# Best Foot

Best Foot is an application which has similar functionality to Tinder or Bumble. Users add content to their profile, and swipe on other user profiles. The key difference is that no users are matched up for dating. What they receive instead is feedback on how popular the content in their dating profile is.

## State of the application

This application in its current state exists as a proof of concept. The initial critical features that have been implemented are the ability to rate a profile's content and the ability to view how a given user's content has rated. Design for the app is mobile first, try viewing the page with a width of 600px.

The next steps in development are adding animations, responsive layouts, and settling on a final color palette and design scheme. At that point, the application is ready to be deployed as a prototype and start receiving feedback from real prospective users.

The final steps in deployment are implementing key features of authentication, CRUD actions for user content, and automatically queuing up profiles for users, and any others determined from user feedback.

## Shortcuts taken for the prototype

The server and database connection have a minimal REST API mostly supporting get requests and a few posts. There are a few specialized endpoints for getting multiple types of data (for example, one where the client requests a mix of profile descriptions and photos).

In the next iteration of the application, a REST API will be swapped for GraphQL and client side requests will be constructed with libraries such as Relay or Apollo. Setting up a GraphQL server saves time in the long term but is a significant time investment in the beginning.

Building styled components (buttons, modals, etc) similarly saves a significant time but at an upfront cost. This is another key step that will be take in on in an early step in the final application. I have gotten a start on this by building one custom button component.

## Points of interest

The rating results table is page of the application I am very happy with. Most of the work has been done to to make the table responsive. Design is clean and minimal, close to how it will look in version 1 of the application.

I am happy with the CSS organization and best practices. The code follows BEM which is easy to read and add on to. About half of the necessary utility classes have been written making long term css development easier and more standardized. The extensive use of color variables makes it easy to test out different designs.

I am happy with the React code organization. The structure of this application is very simple; with good routing in place, changing the view and passing data (mostly the account ID) is seamless and doesn't require complex state management (ie, needing to add redux for the prototype).

## Points of disinterest

The server code is very hacky. I created API endpoints as I needed them on the client. There is no organization to the endpoints or the database queries.

I am still experimenting with the card swiping functionality. Matching the swipe actions with animations is complicated and I am still figuring out what is the best animation method or library. As a result, the React code here is a mess and is still going through many iterations.
