"#Sample Project for Joseph Caiani"

This project will fetch a list of contacts from the endpoint:

    http://jsonplaceholder.typicode.com/users

The application has the following page/components:

    -Home:
        This is just a description of the application, and has a button to launch the Contact List table.

    -Contact List:
        The list of contacts as specified by the assignment.

        -Contact Detail:
            The detail information for each contact in the selected row. The contact page is bookmark-able.

    -About:
        The version of this application ;).

Command syntax:

    -npm run test
        Run the jest snapshot test cases. These cases create a snapshot of your components and saves them
        for a subsequent snapshot test. The test confirms that the well tested components you've written
        have not been subsequently altered. Uses jest, enzyme, and react.

    -npm build
        Run the build to transpile all the es6 and react jsx code and add the result to the distribution
        directory in a file bundle.js.

    -npm dev
        Run the developer environment with open the webpack dev server on port 9000.

    -npm start
        Compile the code to the dist directory, and run the express dev server on port 8080.


Enjoy!

Joe