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
	"Latitude" INT,
    "Longitude" INT,
    "Uninsured_Rate_2010(%))" INT,
	"Uninsured_Rate_2015(%))" INT,
    "Uninsured_Rate_Change_2010-2015(%)" INT
);

-- View table
SELECT * FROM aca_table;

--Querty infor for State
Select "ABB", "Deaths_2010", "Deaths_2015", "Births_2010", "Births_2015"
FROM aca_table