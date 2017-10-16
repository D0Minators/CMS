# CMS
This application is a single page application content management service for
storing blog posts and web pages for users.  Users can create, update, and
delete posts and pages. Without logging in, visitors can view blog posts and
web pages that belong to a user.

[Click Here for demo](https://d0minators.github.io/CMS/)

API URL:  https://sserpdrow-api.herokuapp.com

# Technologies Used
- JavaScript
- HTML
- Jquery
- AJAX
- Handlebars
- SCSS

# Our Planning process
Please see the back-end component of this project for more information about
our planning process, etc.: https://github.com/D0Minators/CMS-API

# Initial Wireframe

<a href="https://imgur.com/a/UAmj1">Wireframe</a>


# Our development process and problem-solving strategy

<a href="https://imgur.com/a/WhTn7">Roles</a>

We began this full-stack project by discussing what roles we would all take
primary responsibilty for during the project, as well as sketching out our ERD,
Wireframe, Schedule, and user/visitor experience. With our plan in place, we moved
on to implementing the back-end.

# Schedule

<a href="https://imgur.com/a/NKdWO">Schedule</a>

All four of us (Dahnaya, Ripley, Stephanie, Susan) worked together to unzip the
template, make the updates necessary to set up the project, create the git repo,
push the initial commit to git, and deploy to heroku.
Once the basic project was set up, we created the Contents resource to store
the information about Web Pages and Blog Posts.  We also created curl scripts
to test the routes (CRUD). Once the CRUD operations were tested and we knew
the API was working as expected, we merged our code and deployed it to
heroku again. We pretty much finished all of that on the first day.

In the last hour of our day, we mapped out the majority of our starter code, and
made sure we were all on the same page in prep for the next days tasks.
We began each day with a standup, followed by making sure all branches were
properly merged and updated, effectively ensuring we were all on the same page.
Git management ended up easily being one of the greatest over-arching challenges
of the project, which no one found particularly surprising. To address this, we
approved all merges as a team together, going over each line of changes, followed
by addressing potential conflicts, before moving on.
After ensuring all members were on the same page, we would separate into two
pair programming  groups, to start with Dahnaya & Susan taking on auth functions,
Ripley & Stephanie tackling contents. While we were pair programming, most of
our time was spent coding in the same room, often at the same table, fielding
questions and thoughts against eachother as they came up. This format we continued
throughout the project. Halfway through the project we switched pair programming
groups to Stephanie with Susan and Ripley with Dahnaya.
Later on Stephanie and Susan worked together once more on back end modifications
to enable getting a user document by email address; this allowed visitors to
enter the email address of a user that had created contents, and view that
content without having to log in. On the last day, unable to
meet in person, we completed debugging and styling remotely. The schedule we
sketched out on the first day was surprisingly accurate, aside from debugging
and styling continuing on into Sunday.

Team works makes the dream work!

## Code Highlights
Ripley
```js
  $('.edit-content').on('click', onEditPage)
}

const onEditPage = function (event) {
  event.preventDefault()
  const id = $(this).parent().parent().data('id')
  const title = $(this).parent().siblings()[0]
  const date = $(this).parent().siblings()[1]
  const text = $(this).parent().siblings()[2]
  const type = $(this).parent().siblings()[3]
  title.contentEditable = true
  text.contentEditable = true
  $(title).css('background-color', 'rgb(39, 43, 43)')
  $(text).css('background-color', 'rgb(39,43,43)')
  $('.save-content').on('click', function () {
    onSavePage(id, title, date, text, type)
  })
}

const onSavePage = function (id, title, date, text, type) {
  const newTitle = $(title).text()
  const newText = $(text).text()
  const newDate = $(date).text().trim()
  const newType = $(type).text()
  const data =
{
  content: {
    title: newTitle,
    date: newDate,
    text: newText,
    type: newType
  }
}
  title.remove()
  text.remove()
  api.updateContent(data, id)
    .then(updatePageSuccess)
    .catch(updatePageFailure)
}
```
Oh Patch/Update! One of my favorite CRUD actions...
To get to the above code snippet I went through a great deal of refactoring.
One of the stumper moments was actually in the end a fairly minimal fix. In
onSavePage the third line passes through to the new data object the date information.
For a while we were stuck unsure why the server was having so much difficulty
(500 Server Errors or successful completion without actually saving changes...)
accepting a data object which, at each point I logged it, seemed to be precisely
what it should be accepting. In the end, .trim() was all that was needed, as a
trailing white space altered the date content.

Stephanie
```css
body{
text-align: center;
font-family: 'Vollkorn', serif;
background-color: black;
margin: auto;
background-image: url(https://media.giphy.com/media/LEQ1IEMumhwmk/giphy.gif);
height: 100%;
background-repeat: no-repeat;
background-size: cover;
}
```
I have originally wanted to use a 'video' sort of background, but after mucking around for a few hours, I found that I could use a 'giphy' background worked equallty as well.
```css
.post-list{
overflow: auto;
background-color: #484848;
color: white;
text-align: center;
width: 800px;
overflow-y: auto;
max-height: 100vh;
display: inline-block;
}
```
Prior to adding the 'scroll' function to our post and page div, the background would go funky upon adding more and more posts to the list. I realised this could be quickly fixed with a strolling div for more of a pleasant UX!

## Unsolved Problems and Grows for the Future
- Currently we have User & Visitor actions in place, we would like to add an
Administrator as well, who would have the ability to approve drafts before
publishing, and delete posts/pages. In this build, the User would have the
ability to save drafts and edits for the Administrator to approve, but not to
delete content.
- Comments sections, for visitors to share their thoughts
- Custom urls for users, so they can go directly to a Users page without
having to search for content.
- Support hosting mixed media (pictures & videos) on posts and pages.

## User Stories
- As a user I would like to be able to sign up, sign in, sign out
- As a user I would like to read posts/view content with a timeline
- As a user I would like to create posts
- As a user I would like to update posts
- As a user I would like to delete posts
- As a user I would like to read pages
- As a user I would like to update pages
- As a user I would like to create pages
- As a user I would like to delete pages
- As a user I would like to use a Dashboard to create and manage content
- As a visitor I want to view a user's posts
- As a visitor I want to view a user's pages

## Obligatory Cute Furry Creature

![Obligatory Furry Creature photo](https://i.imgur.com/pKf2dZ4.gif)
