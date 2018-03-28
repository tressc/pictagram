## Pictagram
------

Live: https://www.picta-gram.herokuapp.com/

Pictagram is an Instagram clone, on which users can upload and share pictures. Users can also follow other users, as well as comment on and "like" their pictures.

***

### Technologies

Pictagram is built with **Ruby on Rails** in conjunction with **React** and **Redux**. The database is configured with **PostgreSQL**, and all user uploaded images are stored on **Amazon Web Services** using the Ruby **Paperclip** gem.

***

### Features

#### Image Upload & Display

Users can upload pictures as posts or profile pictures. This feature does not exist on Instagram for browser, so I had some creative leeway. I chose to implement the upload form as a modal, that dispatches a different action on submit depending on whether the user is updating their profile picture or creating a new post.

Upon choosing a picture, that image is displayed in a preview window, and the submit button becomes usable. Submitted image files are stored AWS to improve performance on Heroku. All other associated information about the image, including its AWS url and author ID are stored in the database.

Posts are displayed in two ways. On each user's profile page, all of their pictures are shown as a grid, and clicking on any image opens a much larger modal view where comments can be viewed and added. On the homepage posts are displayed large, with the ability to view and add comments.

#### Comments

When a user submits a comment on a post, the comment body is saved to the database, along with foreign keys pointing to its author and the post.

In the Redux state, comments are stored in their own slice of state, and posts each have an array of keys pointing to their associated comments.

#### Likes

When a user likes a post, a like is created in the database. Likes consist only of two foreign keys, one pointing to the user, the other pointing to the post.

The like button displays as either an empty heart or a full red heart depending on whether the current user has already liked a given post, and creates or destroys a like on being clicked. I used two fontawesome SVGs for the hearts, which resisted the React cycle. To address this I wrapped both SVGs in divs, and conditionally display those divs by adding and removing a "hidden" class.


***

### Upcoming Features

- **Following**: Users can follow other users, and their main feed is populated only by those followed users' posts.

- **Search**: Search-bar allows user lookup via username and picture lookup via tags.

- **Tags**: Posts can be given tags by their owner, and displayed according to searched tags.
