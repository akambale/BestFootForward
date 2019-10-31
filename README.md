Best Foot

Best Foot is an application that intends to be similar to Tinder or Bumble. Users add content to their profile, and rate other users' profiles. The key difference is that no users are matched up for dating. What they receive instead is feedback on how popular the content in their dating profile is.

This application in it's current state exists as a proof of concept. Adding key features like authentication, CRUD actions for user content, and automatically creating a queue of profiles to rate will come later. The initial critical features that have been implemented is the ability to rate a profile's content, and the ability to view how that content scored.

The server and database connection have a minimal REST API mostly supporting get requests and a few posts. There are a few specialized endpoints for getting multiple types of data (for example, one where the client requests a mix of profile descriptions and photos).

In the next iteration of the application, a REST API will be swapped for GraphQL and client side requests will be constructed with libraries such as Relay or Apollo. Implementing takes requires a significant time upfront.
