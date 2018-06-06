# Project Overview

This project is a web-based application that reads RSS feeds. This project utilized [Jasmine](http://jasmine.github.io/) to test the application. 

# Why This Project Was Beneficial
Throughout the course for the Front-End Web Developer Nanodegree Program at [Udacity](http://www.udacity.com), I learned that testing is an important part of the development process. Many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass. I learned how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

# Directions On How To Run This Test
[Clone](https://github.com/udacity/frontend-nanodegree-feedreader) this repo to your computer and open the folder in your text editor of choice.
The file called feedreader.js is where you will be doing your testing. You do not need to alter app.js or style.css but look at these documents to help you run your tests.
Verify the four tests listed in feedreader.js file. These tests include...
1. Loop through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty. Loop through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
2. Ensure the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element. Ensure the menu changes visibility when the menu icon is clicked.
3. Ensure when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
4. Ensure when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.

# The Things I Did To Complete This Project

1. Took the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Reviewed the functionality of the application within my browser.
4. Explored the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it worked.
5. Explored the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edited the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in the application.
7. Returned the `allFeeds` variable to a passing state.
8. Wrote a test that loops through each feed in the `allFeeds` object and ensured it had a URL defined and that the URL was not empty.
9. Wrote a test that looped through each feed in the `allFeeds` object and ensures it had a name defined and that the name was not empty.
10. Wrote a new test suite named `"The menu"`.
11. Wrote a test that ensured the menu element is hidden by default. Then analyze the HTML and the CSS to determine how it was performing the hiding/showing of the menu element.
12. Wrote a test that ensured the menu changed visibility when the menu icon was clicked. This test had two expectations: does the menu display when clicked and does it hide when clicked again.
13. Wrote a test suite named `"Initial Entries"`.
14. Wrote a test that ensures when the `loadFeed` function is called and completed it works, there was at least a single `.entry` element within the `.feed` container.
15. Wrote a test suite named `"New Feed Selection"`.
16. Wrote a test that ensured when a new feed is loaded by the `loadFeed` function that the content actually changed.
17. None of the tests are dependent on the results of another.
18. Callbacks are used to ensure that feeds are loaded before they are tested.
19. Implemented error handling for undefined variables and out-of-bound array access.
20. When complete - all the tests passed. 
21. Wrote a README file detailing all steps required to successfully run the application.