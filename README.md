# ACA and Impact of Infant Mortality Rate 
For this project, our team explored datasets from the CDC and HHS related to the the Affortable Care Act (ACA) and infant mortality rate.  
We utilized two CSVs, one already predownloaded from Kaggle, and the other exported and converted from JSON to a CSV file.

Two CSV files included data from the following:
* HHS Uninsured Rate
* CDC State Infant Mortality Rate

The fields of interest include the following:
* State uninsured and insured rates on the years 2010 & 2015
* State infant mortality numbers that includes # of births, deaths and deaths per 1000

The following sources for our datasets used:
* https://www.kaggle.com/hhs/health-insurance
* https://wonder.cdc.gov/lbd-current.html


There were limitations in that our data only examined 2010 & 2015 and not the entire 5 year span -- limiting our graph selection. 
By cleaning the datasets with pandas, incorporating Mongodb and Javascript, we created an interactive html that showcases uninsured rates and infant mortality according to state.


## Team Members: 
Susan Jessop, Anjelica Ramsey, Sanjaye Thomas
