# Exercise - Async Countries

When accessing information from an external source using JavaScript Promises are an invaluable tool. Using them means we can pause our program while the data loads, or handle a scenario where we can't retrieve anything.

# JavaScript

## Fetch Exercise

We've explored the fundamentals of JavaScript and had a refresher of HTML and CSS. Now that we're familiar with the DOM, let's take this a step further and attempt to bring all our learning together. 

Using an external API, let's begin constructing a front-end app which populates a page with dynamic information. We're talking **`fetch()` requests**, we're talking **DOM manipulation** and we're talking **user input**.

## Set-Up

This afternoon lab may seem quite intimidating so we're going to first lay out a start point for you. Instead of providing one, we're going to talk through the steps to get you familiar with the code patterns:

- **Step 1: HTML**
	- Open up VSCode and create a new HTML file
	- Using Emmet abbreviation (`!` or `html:5`) or by typing it yourself, set up a basic HTML template
	- Add a heading (`h1`) to the `body` followed by a `section`
	- Give your `section` a distinct `id`

- **Step 2: JS**
	- Again within VSCode, create a new JS file
	- Move back to your HTML file and connect your JS file using the `script` tag and your filepath in the `src` attribute
	- Remember to include `defer` to your `script` tag so it runs after the HTML loads!
	- Back in your JS file, add in a simple `console.log("HI!")`

- **Step 3: In the browser**	
	- Open up your HTML file in the browser by right-clicking your file and then selecting `Open With > Google Chrome`
	- Your webpage will be blank save the heading added earlier
	- Right click the page in the browser and select `Inspect`
	- At the top right, select the `Console`
	- Check that your `"HI!"` statement is printed there
	- If the message doesn't appear, check that your files are saved and that the filepath in the `script` tag is correct

- **Step 4: Familiarisation of the Countries API**
	- Have a look at API endpoint which returns all held information on all countries within their set: [https://restcountries.com/v3.1/all](https://restcountries.com/v3.1/all)
	- This will be difficult to parse so let's install the Chrome JSON Formatter extension [https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa/related]()
	- Refresh the endpoint page to see the output in a clearer format
	- Familiarise yourself with the rough structure of the output
	- Now, let's visit another endpoint [https://restcountries.com/v3.1/name/peru](https://restcountries.com/v3.1/name/peru)
	- Familiarise yourself with this structure and consider how this relates to the previous endpoint's output


In this exercise you will use `fetch` to load data from [an API with some stats about the countries of the world](https://restcountries.com/v3.1/all). Once the data is loaded complete the following tasks/answer the questions.

1. Fetch all countries from the above url, and save the results in a variable
2. Create a `ul` element in your `index.html`
3. Generate `li` elements for each country object and add the name of each country to the element's `textContent` value.
4. Append the `li` elements to the `ul` element to display a list of country names

## Extensions

5. Add the flag next to the country's name, and resize it so it doesn't look ugly (use a `.css` file for this!)
6. Create at the top of your `index.html` a new `h2` tag
7. Calculate the total population of all the countries, and display it in the `h2` tag
