Feature: Dumbot vs bot 

   The aim of this test is to determine whether the dumbot is less intelligent 
   or not than the normal bot in a series of 10 games of 4-in-a-row between the two.

Scenario: Test whether dumbot is worse than bot at playing 4-in-a-row in 10 games
Given that I navigate to the game page
And spela button is clicked
When I select player ‘dum bot’ against player ‘bot’
And a series of 3 games is played between dumbot and bot
Then the bot wins each game

