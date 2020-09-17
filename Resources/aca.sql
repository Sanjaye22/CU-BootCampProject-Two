-- Drop table if exists
DROP TABLE aca_table;

--Create Table
CREATE TABLE aca_table (
    "State" VARCHAR,
    "Deaths_2010" INT,
    "Births_2010" INT,
    "Death_Per_1000_2010" INT,
	"Deaths_2015" INT,
	"Births_2015" INT,
    "Death_Per_1000_2015" INT,
	"ABB" VARCHAR,
	"Latitude" VARCHAR,
    "Longitude" VARCHAR,
    "Uninsured_Rate_2010" VARCHAR,
	"Uninsured_Rate_2015" VARCHAR,
    "Uninsured_Rate_Change_2010-2015" VARCHAR
);

-- View table
SELECT * FROM aca_table;

