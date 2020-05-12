# UltimateStats
Ongoing personal project for stat tracking in ultimate frisbee

Progress
------------
* Built prototype of applications frontend
    - Can move disc around, on release a modal is opened up and the user can log who caught, dropped, or threwaway the disc
    - X and Y coordinates are recorded for each action, which will make distance conversion between throws easy
    - This data is pushed onto a stack, which logs all events from the entire game
    - One endzone expands (endzone expanding is necessary because phone screen is not proportional to real field)

Goals
------------
* Use AWS MySQL to store game data, which will eventually be accessed on a website
* Fix the other endzone
* Local data storage, so user can view stats on the application
* Build the header, which will track display game data (score, time etc.), and have an undo button that simply pops the previous action off the stack
* User testing when I can play ultimate again


