On app initialization it queries the cities and stores it in the redux store, this allows the user to search for the cities on the search bar through a basic search algorithm on that component.

Now when a user selects a city on the sidebar, that queries an action creator which calls the opentable API to receive the restaurants for that city and store it in the redux store, this allows the cityResults component to pull that state and render the restaurants.

1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

Around 2 and half hours, I would have added pagination to actually go through all the returned results. Also would have resolved the mobile issue and added more in-depth tests.

Also for whatever reason the mobile version is bugged so will need time to fix that.

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Not really a feature added into my current code but with version 16 react hooks and the context system seem to be picking up but it doesn't seem to be at a mature state where it would start to replace redux.

3. How would you track down a performance issue in production? Have you ever had to do this?

Generally with my projects performance testing is part of the re-occurring audits, for web apps the primary focus is, critical load the visible content to the end-user and optimize any network usage (i.e smaller image sizes, lazyloading etc).

4. How would you improve the API that you just used?

A general search endpoint would be a good addition, the end-user might not know exactly what they might be searching for, they could write in "dinner" or write in "\$10", unless you had different search bars for each parameter you wouldn't know what exact parameter the end-user is refining the search by. So having a general endpoint that returns all the records that have a match to that query is a lot more efficient than having to search query each parameter separately. This is the exact situation I ran into with the refine results requirement.

5. Please describe yourself using JSON.

```
{
    "name": "Mubashir Cheentavida",
    "designation": "Front-End Developer",
    "skills":
    { "front-end": "Html, JavaScript, CSS/SCSS, React, Redux",
    "back-end": "NodeJS", "testing": "WebdriverIO, Mocha, Chai", "ci/cd":
    "Azure DevOps",
    "platforms": "Shopify, WordPress, GatsbyJS"
    }
}
```
