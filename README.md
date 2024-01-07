# To-Do-App
Description
Our application's interaction with databases takes center stage. The Back End serves as the middleman through which data is transferred to and fetched from the database, allowing a seamless flow of information. In software development, there are two prominent types of databases emerging: Relational Databases, characterized by Structured Query Language (SQL), and Non-Relational Databases, often referred to as NoSQL databases. We will dive deeper into databases.

# Deployment of Database
In this step, we will create our own database instance. Click on the “Create” button on the home page. Then, select the M0 FREE tier. For the region, you may want to choose the one nearest to you. As you scroll down, set the name.

Once you have done the necessary configurations, click on the “Create” Button. Since we are using a FREE tier, no credit cards are needed. However, using the Free Tier comes with various drawbacks such as sharing the computing process with other instances and limited storage. However, MongoDB Atlas is generous enough to give us a strong head start to let us learn MongoDB.

Next, we will need to create a new account which will only be applied to our database. This credential is what we will use to connect with our database. Please name your username and password as such. You may choose to use your own username and password as long as you remember them later.

Regarding the section 'Where would like to connect from', you will notice your IP address is already listed in the IP Access List. So we will now click on the 'Finish and Close' button.

On the side navigation panel, select 'Database' and you should be able to see the database named. MongoDB Atlas gives us a Graphical User Interface (GUI) to view the collections stored in our database.

Click on the “Connect Button”

Select the first option “Drivers”

Now, let us go back to our code editor and open the .env file that is residing in our project folder. Now, replace the to_be_added_in_subsequent_steps in the .env with the connection string you have copied from MongoDB Atlas. Ensure the string is in quotes.

⚠️Once you have populated the db_connection key in the .env file, replace the <password> with the password you created when creating a new user in MongoDB Atlas. Your final .env file should look like the code shown below.

db_connection="mongodb+srv://username:mypassword@databasename.zcz5yxc.mongodb.net/?retryWrites=true&w=majority"
 PORT=3000

For Gitpod users, ⚠️ there's an additional step that you need to do. In the sidebar, look for Network Access. Then, click on the ADD IP ADDRESS button. In the modal, click on the ALLOW ACCESS FROM ANYWHERE button, and then click Confirm. Doing so will allow Gitpod to connect to your database. 


![image](https://github.com/iamprathmesh/To-Do-App/assets/86964450/ddb30cf8-50a4-4a17-89b9-c59422ebbb5f)

![image](https://github.com/iamprathmesh/To-Do-App/assets/86964450/41c1006e-422d-4c6f-9022-adc8e3edc190)
