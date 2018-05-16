# Required:

<ul>
  <li>Angular CLI</li>
  <li>Nodejs</li>
  <li>MongoDB</li>
  <li>Robomongo (if you want)</li>
  <li>Nodemon (if you want)</li>
</ul>

# Install dependencies

npm install 

# Load json file to mongo database

Create directory C:\data\db
cd to ~
Run mongod
Create db with Robomongo called test
In new terminal run mongoimport --jsonArray  -d test -c products /filePath/filename.json


