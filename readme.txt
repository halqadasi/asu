1. Data Collection: 
inside the data/raw directory, you will find the collected data to start to operate the project. 

2. Data Processing:
    a. Run "Data Processing [temperature].ipynb" notebook to fix all issues in the temperature data. 
    b. Run "Data Processing [electric].ipynb" notebook to fix all issues in the electric data. 
    Note: step b usually takes 1 hour because the interpolation for 12 regions and each region
          has up to 27000 missing records.

3. Data Analysis: this notebook contains all analytical questions with plots. 

4. Modeling and Evaluation contains:
     a.preprocessing the data, 
     b.structuring the neural network,
     c.evaluting the neural network after training.   

5. Dashboard: contains the code of desgining the entire dashborad including: interface 1, 2, and 3. 
              the folder assets: contains the necessary JavaScript and CSS files to style the dashboard. 

