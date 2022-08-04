# counting_app

# Create software

## Use FastAPI to create the backend in Python

This app is being built with FastAPI. FastAPI generates a "schema" with all your API using the OpenAPI standard for defining APIs. A "schema" is a definition or description of something. In this case, 'OpenAPI' is a specification that dictates how to define a schema of your API. 

*What is OpenAPI for?*

The OpenAPI schema is what powers the two interactive documentation systems included.

And there are dozens of alternatives, all based on OpenAPI. You could easily add any of those alternatives to your application built with FastAPI.

You could also use it to generate code automatically, for clients that communicate with your API. For example, frontend, mobile or IoT applications.

### Set up FastAPI
For a tutorial, see [here](https://fastapi.tiangolo.com/tutorial/first-steps/).

First, in the command line, install FastAPI:
pip install fastapi

Also install uvicorn to work as the server:
pip install "uvicorn[standard]"

And the same for each of the optional dependencies that you want to use.

Then run the command:
uvicorn main:app --reload

The command uvicorn main:app refers to:

-  main: the file main.py (the Python "module").
-  app: the object created inside of main.py with the line app = FastAPI().
-  --reload: make the server restart after code changes. Only use for development.

In the output, there's a line that shows the URL where your app is being served, in your local machine.
In this case, it is: 
http://127.0.0.1:8000

To see the automatic interactive API documentation, paste this in the browser:
http://127.0.0.1:8000/docs

When building APIs, you normally use these specific HTTP methods to perform a specific action.

Normally you use:

    POST: to create data.
    GET: to read data.
    PUT: to update data.
    DELETE: to delete data.

So, in OpenAPI, each of the HTTP methods is called an "operation".

### Create a FastAPI file
Step 1: import FastAPI

In a file called main.py use the following code:

`from fastapi import FastAPI`

Step 2: create a FastAPI "instance"

`app = FastAPI()`

Here the app variable will be an "instance" of the class FastAPI. This will be the main point of interaction to create all your API. This app is the same one referred by uvicorn (in the file main.py) in the command `uvicorn main:app --reload`.

Step 3: create a *path operation*:

"Path" here refers to the last part of the URL starting from the first "/". So, in a URL like: https://example.com/items/foo

...the path would be:

/items/foo

*Note A "path" is also commonly called an "endpoint" or a "route".

Step 4: define the path operation function

This is our "path operation function":

-   path: is /
-   operation: is get
-   function: is the function below the "decorator" (below @app.get("/"))

For example:

    @app.get("/")
    async def root():
        return {"message": "Hello World"}

This is a Python function. It will be called by FastAPI whenever it receives a request to the URL "/" using a GET operation. In this case, it is an async function. You could also define it as a normal function instead of `async`.

## Use Curl to interact with the API
Curl is a command-line utility that can be used to send requests to an API. See syntax [here](https://devqa.io/curl-sending-api-requests/).


    curl -s -X GET http://127.0.0.1:8000/counting | jq '.'



    curl -s -X POST -H "Content-Type: application/json" -d '{"directory": "/home/sunshine"}' http://127.0.0.1:8000/counting | jq '.'

## Use jq for json formatting
Install in the command line with:
`brew install jq`

You can parse json data using Curl and jq.

## Notes
*A pipe forwards the output of the left side to the right side. For example, the output of Curl was put into jq to be formatted using this post request:

    curl -s -X POST -H "Content-Type: application/json" -d '{"directory": "/home/sunshine"}' http://127.0.0.1:8000/counting | jq '.'

TODO: make a wireframe, make the front end (HTML, CSS, JS) and show a table off the runs, and have a button to start a new run.

## Start the server
In the command line, cc into the directory. Then, start the server with the command:

`uvicorn main:app --reload`

## Making an HTTP request
There are several ways to make an HTTP reguest using JavaScript, see [here](https://livecodestream.dev/post/5-ways-to-make-http-requests-in-javascript/) for examples.

[Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) follows a promise-based syntax, we can use Fetch to send HTTP requests from the client-side. Fetch is a popular way to send HTTP requests in Javascript.

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

TODO: have a button that does the post, and then once the post has completed, the button would also call the table function in index.js (the loadRuns() function), in order to see the new run right away


