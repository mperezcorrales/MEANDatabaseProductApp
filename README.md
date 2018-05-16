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

Create directory C:\data\db <br>
cd to ~ <br>
Run mongod <br>
Create db with Robomongo called test <br>
In new terminal run mongoimport --jsonArray  -d test -c products /filePath/filename.json <br>


