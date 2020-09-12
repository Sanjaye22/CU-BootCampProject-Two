-- Drop table if exists
DROP TABLE aca_table;

--Create Table
CREATE TABLE aca_table (
    "State" VARCHAR,
    "Deaths (2010)" INT,
    "Births (2010)" INT,
    "Death Per 1000 (2010)" INT,
	"Deaths (2015)" INT,
	"Births (2015)" INT,
    "Death Per 1000 (2015)" INT,
	"Latitude" INT,
    "Longitude" INT,
    "Uninsured Rate (2010)" INT,
	"Uninsured Rate (2015)" INT,
    "Uninsured Rate Change (2010-2015)" INT
);

-- View table
SELECT * FROM aca_table;