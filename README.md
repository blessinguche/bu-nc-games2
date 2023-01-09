# Northcoders Games

Northcoders Games is a social games content rating, and discussion website.

Northcoders Games has game reviews which are divided into categories. Each review has user curated ratings and can be up or down voted using the API. Users can also add comments about an review. Users can also add comments about a review.

This sprint should consolidate your understanding of making a [C.R.U.D](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) application from a front end perspective.

## Kanban

### Link to your Trello Board here: https://trello.com/b/HDWmbjGM/fe-nc-games

To keep track of the tasks involved in this project we're going to use a kanban board. Ensure that you work on one _ticket_ at time. You can click on the ticket to find out more information about what is required for the feature. A ticket is not considered complete unless both the happy path and errors response are handled and there is a basic structure to your styling.

**We suggest you work through the tickets from top to bottom.**

## Available Functionality

You will only be able to complete front end tickets that have the associated behaviour implemented in your back end application. For example, you will be unable to complete front end _ticket 10: Sort reviews_ if you haven't completed back end _ticket 10: GET /api/reviews (queries)_.
We suggest that you complete _all_ the core task tickets on your front end trello that you are able to at this stage. Once you have done this, you are welcome to return to your back end project one ticket at a time to allow you to continue with front end tickets.

## Git Branching and Pull Requests

You will be working on each ticket on a new **branch**.

To create and switch to a new git branch use the command:

```
git checkout -b <new branch name>
```

This will create a branch and move over to that branch. (Omit the `-b` flag if you wish to switch to an already existing branch).

We recommend that you name the branch something that clearly shows the ticket you are working on. eg. `fe-ncnews-display-reviews`

When pushing the branch to git hub ensure that you make reference to the branch you are pushing to on the remote.

```
git push origin <branch name>
```

From github you can make a pull request and share the link and ticket number on your `nchelp` with a zoom link for you to demo your feature. A tutor will swing by to review your code. Ensure that you keep your trello up to date whilst you await the PR approval.

Once a pull request been accepted be sure to switch back to the main branch and pull down the updated changes.

```
git checkout main

git pull origin main
```

You can tidy up your local branches once they have been pull into main by deleting them:

```
git branch -D <local branch>
```

## Important

This sprint is among the ones we'll ask you to complete in order to put you forward for jobs. Put a little bit of love into it! :) <
