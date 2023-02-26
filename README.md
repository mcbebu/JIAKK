# JIAKK
Group Members: 
### Problem Statement #5: 

**Target: ** NinjaVan Station Managers
**Problem Statement: ** Current methods of manpower allocation at NinjaVan stations are inefficient in addressing manpower shortages in stations that are short-handed. 

### Gaps in Current Practices: 
##### Manager Journey:
1. Start of the Day
    - Manager receives the information of the no. of parcels to be delivered for the day
3. Planning
    - Allocates parcels to drivers using knowledge of drivers’ efficiency from past experiences
5. Awareness of Problem
    - In the later part of the day, manager receives information of insufficient manpower 
7. Finding Solution
    - Requests other station managers for backup drivers

##### Gaps/Problems:
###### 1. Inaccuracies in Parcel Allocation
  **Existing Method: ** 
    - Each delivery man is manually assigned to a quantity of parcels
    - This is subjective, and based on the perceived performance of delivery man
  **Gaps**
    - Mismatch of perceived performance and actual delivery amount.
    - Parcels failed to be delivered
    - Loss of consumer goodwill and reputation

###### 2. Poor Utilisation of Manpower Surplus
  **Existing Method: **
    1. When there is a manpower shortage, the manager finds rescue drivers
    2. When there is a manpower surplus, the drivers finish delivering parcels timely
  **Gaps: **
    1a. Insufficient time to contact drivers
    1b. Employees from other departments have to act as delivery men
    2a. Insufficient notice to help other stations
    2b. Delivery men unable to maximise their earnings (Assume Commission)
    
###### 3. Increased Work Pressure on Station Managers
   - Seeking last minute rescue drivers can be a stressful and burdensome job
   - Time used to seek for last minute help may incur loss of time that could have been used for other more      productive tasks

##### Consequences:
   1. Unpunctuality:
      - If backup help is unavailable, parcels will not be delivered on time.
   3. Low Customer Satisfaction
      - Inability to retain customers.
      - Unsatisfied customers tend to leave bad reviews, leading to reputational damage.
   5. Low Operational Efficiency
      - The excess manpower from other stations could have been utilised. This wastage of manpower resource 
        lowers the productivity of stations.
   7. Reduced Profits
      - The above consequences lead to a reduction in profits.


### Our Proposed Solution:
  ##### Webpage:
  **Target Users: ** Station Managers
  **Purpose: **
      - Display information:
        - Expected no. of parcels to be delivered for the day
        - Total predicted capability of the station for the day
            - By predicting the no. of parcels that each driver can deliver for the day
            - Summing the no, of parcels that each driver can deliver for the day
        - Notify manager if there would be a predicted manpower crunch for the day
        - If the station is predicted to have:
            - Manpower shortage:
              - Automatically request help from other stations with manpower surplus 
            - Manpower surplus:
              - Accept requests to help other stations with manpower shortage (Within capability)
  _For more detailed information about the webpage, see attached Team JIAKK.pdf file.
  
  
  ### Overcoming Limitations:
  **Limitation 1: Low Pick-up Rate**
  Store managers may not use the website because:
      - They assume that they know the capacity of the drivers better and feel that they are skilful 
        enough to determine optimal allocation of parcels to drivers.
          - **Solution: ** Workshops should be conducted for station managers to learn about the efficiency 
            of the application in streamlining the manpower allocation process.
      - They do not know how to use the website.
          - **Solution: ** Lesson guides to teach station managers how to use the website.
          
   ### Future Extensions:
   **Future Extension 1: Consideration Factors**
   Current: Average daily delivery rate of all drivers in the station is used to obtain our results
   Improvements: To obtain more representative results:
      - Prediction using Machine Learning Models
      - Personalisation of average daily delivery rate to individual drivers
      - Possible factors including parcel delivery time, such as weather conditions, size of package, 
        distance between parcels
    
   **Future Extension 2: Improved Dashboard Experience**
   Current: 
      - Dashboard is provided to station managers in the form of text and numbers
      - Text and numbers are bland to look at, failing to engage
      - Station Managers are not trained to deal with the information
    Improvements:
      - Provide dashboard in a more interactive form (e.g Graphs, Charts etc) within our website
      - Connection with Power BI or collaboration with the Business Intelligence Department to provide 
        actionable insights and next course of actions


   

  







