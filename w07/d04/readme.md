# Emergency Complimenter with Mongoose

We're going to revisit the Emergency Compliment app from a couple nights ago, except with a few key differences this time. Instead of pulling from and pushing to an array of compliments saved locally, we're going to pull from and push to a Mongo database that exists on a server somewhere.

## STEPS

#### Step 1: Pull down the homework and create a branch
- Just like we always do

#### Step 2: Set up Mongolab credentials
- We're going to be contacting a database on Mongolab's servers for this. In order to do so, we need to set up some credentials. We'll use environment variables to hide the credentials so they don't appear in Github, like we always do.

Type the following into your Terminal:
```bash
$ export WDI_MONGOLAB_USER=wdi-student
$ export WDI_MONGOLAB_PW=delorean
```

Once you've successfully set your credentials in the Terminal, you should be all set to connect to Mongolab in your app.

#### Step 3: Retrieve a compliment from the database
- All the work you need to do is inside the `/routes/index.js` file. Go find the route inside that file where you'll need to display a compliment from the database.
- Use your Mongo/Mongoose skillz to retrieve a random compliment from the database, and pass it to the view. The view itself has already been created.

#### BONUS: Save a compliment to the database
- Find the route where the form for creating a compliment is POSTed to. Take the compliment that is sent through that form, and use Mongo to save it to the database. Once that is done successfully, redirect the user to the homepage.


## Tips
- Remember, database calls in Node are done **asynchronously**. That means that whenever you make a call to the database, anything that relies upon that data will need to happen in a **callback**.
- Check out the [Mongoose documentation](http://mongoosejs.com/docs/guide.html) or [examples of Mongoose and Express](http://code.runnable.com/U0MpcpIzdaRkX2VH/querying-mongodb-from-express-using-mongoose-for-node-js) together to get a sense of what to write.
