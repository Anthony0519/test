-- create a database and make sure u always end ur query
 CREATE DATABASE userAuto;
 
 -- activate database
 USE userAuto;
 
 -- create a table
 CREATE TABLE signUP(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(50) NOT NULL,
 email VARCHAR(50) NOT NULL,
 password VARCHAR(50) NOT NULL
 );
 
 -- updatin a table
 INSERT INTO signUP(name, email, password)
 VALUE("obi", "obi@gmail.com", "obi1234"),
 ("ubani", "ubai@gmail.com", "ubani1234"),
 ("ada", "ada@gmail.com", "ada1234"),
 ("obinna", "obinna@gmail.com", "obinna1234"),
 ("loveth", "loveth@gmail.com", "loveth1234");
 
 -- view your table
  SELECT * FROM signUp;
  
  -- view table individually
  SELECT id, name FROM signUP;
  
  -- updating records in a table
  UPDATE signUp SET name = "ubanu" WHERE id = 2;
  
  -- delete a record from table
  DELETE FROM signUp WHERE id = 2;
  
  -- filtering data from a table
  SELECT *FROM signUP WHERE name = 'obinna';
  
  -- sort data in table 
  -- sort with ascending order
  SELECT * FROM signUP ORDER BY name ASC;
  -- sort by descending order
   SELECT * FROM signUP ORDER BY name DESC;