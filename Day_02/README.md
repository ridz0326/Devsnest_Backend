postgres=# Create Database Student;                             -- To Create Database 
postgres=# \l                                                   -- To Check List of DataBases
postgres=# \c  Student                                          -- To Connect to Database
Student=#  Create Table Data(
ID INT PRIMARY KEY NOT NULL,
NAME STRING NOT NULL,
AGE INT NOT NULL);                                              -- To Create Table 
Student=# Create Schema MySchema;                               -- To Create Schema
Student=# Create Table MySchema.Data                            -- To Create Table inside Schema
Student=# \d Data                                               -- To Get Table Info
postgres=# Drop Database if Exists Data;                        -- To Drop Table
postgres=# Drop Table if exists Student;                        -- To Drop Database
postgres=# Drop Schema MySchema Cascade;                        -- To Drop Schema
Student=# Insert INTO Data(ID,NAME,AGE) 
Values (1,"Ridz",19);                                         -- To Insert Values into Table
Student=# Select * from Data;                                   -- To display Table Data
Student=# Select & from Data where Age>20;                      -- To Display Values Conditionally
Student=# Select & from Data where Name Like Cy?her;            -- To Display Values Conditionally
Student=# Select & from Data where Name Like C%;                -- To Display Values Conditionally
Student=# Select & from Data where Name Like C_phe?;            -- To Display Values Conditionally
Student=# Select & from Data where Name Like C_p%;              -- To Display Values Conditionally
Student=# Select & from Data where AGE::TEXT Like 2%            -- To Display INT Values Conditionally
Student=# Select & from Data where AGE between 15 and 20        -- To Display Values Conditionally
Student=# Select & from Data where AGE in (20,25)               -- To Display Values Conditionally
Student=# Update Data set Age=22 where Name=Cypher              -- Update Table Value

--Foreign Key
Student=# Create Table Class(
Student=# Roll_no int NOT Null,
Student=# Student_Name TEXT,
Student=# PRIMARY KEY(Roll_no)
Student=#);                                                     -- Create Table

Student=# Create Table library(                                 -- Create Another Table to JOin using Foreign Key
Student=# LIb_ID int NOT NULL,
Student=# Books TEXT,
Student=# Roll_no INT,
Student=# PRIMARY KEY(LIb_ID)                                   -- Generate Primary Key
Student=# CONSTRAINT Foreign_KEY_LIB                            -- Foreign Key Variable
Student=#   Foreign key(Roll_no)                                -- Generate Foreign key
Student=#   REFERENCES Class(Roll_no)                           -- Reference to other Class primary key
Student=#   ON DELETE Cascade                                   -- On delete Primary key data deleted from everywhere
Student=# );