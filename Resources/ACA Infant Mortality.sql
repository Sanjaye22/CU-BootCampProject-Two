-- Drop table if exists
DROP TABLE FinalCleanedData;

--Create Table
CREATE TABLE FinalCleanedData (
    "State" VARCHAR,
    "Deaths (2010)" VARCHAR,
    "Births (2010)" VARCHAR,
    "Death Per 1000 (2010)" VARCHAR,
	"Deaths (2015)" VARCHAR,
	"Births (2015)" VARCHAR,
    "Death Per 1000 (2015)" VARCHAR,
	"Latitude" VARCHAR,
    "Longitude" VARCHAR,
    "Uninsured Rate (2010)" VARCHAR,
	"Uninsured Rate (2015)" VARCHAR,
    "Uninsured Rate Change (2010-2015)" VARCHAR
);

-- View table
SELECT * FROM FinalCleanedData