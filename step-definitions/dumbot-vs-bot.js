let {$, sleep} = require('./funcs');
let slots;
 
let sleepTime = 500;
let cancelButtonText;
let winner;
let count = 0;
 
module.exports = function(){

    this.Given(/^that I navigate to the game page$/, async function () {
        await helpers.loadPage('http://localhost:3000/');
        
      });

    this.Given(/^spela button is clicked$/, async function () {
        let startButton = await $('#navbarSupportedContent > ul > li:nth-child(2) > a')
        startButton.click()
        await sleep(2000);   
        
      });

    this.When(/^I select player ‘dum bot’ against player ‘bot’$/, async function () {

        let player1Profiles = await $('body > div > main > div > div:nth-child(3) > div > div:nth-child(2) > button')
        player1Profiles.click()
        await sleep(1000)
        let dumBotProfile = await $('body > div > main > div > div:nth-child(3) > div > div.input-group-prepend.show > div > div:nth-child(4)')
        dumBotProfile.click()
        await sleep(1000)
        let player1InputText = await $('body > div > main > div > div:nth-child(3) > div > input')
        player1InputText.click()
        player1InputText.sendKeys('NotsoWise')
        await sleep(1000)

        let player2Profiles = await $('body > div > main > div > div:nth-child(4) > div > div:nth-child(2) > button')
        player2Profiles.click()
        await sleep(1000)
        let normalBotProfile = await $('body > div > main > div > div:nth-child(4) > div > div.input-group-prepend.show > div > div:nth-child(3)')
        normalBotProfile.click()
        await sleep(1000)
        let player2InputText = await $('body > div > main > div > div:nth-child(4) > div > input')
        player2InputText.click()
        player2InputText.sendKeys('SmartyBoy')
        await sleep(1000)

         });
    
    this.When(/^a series of 3 games is played between dumbot and bot$/,{timeout:150 * 1000}, async function () {
        
                            
        //gameResult = await driver.findElement(By.xpath(/html/body/div/main/div/div[1]/h3/span))
        //if (gameResult )
        let i = 0 
        


        while (i < 3) {
            
            let beginGameButton = await $('body > div > main > div > div:nth-child(5) > button.begin-btn.btn.btn-primary.float-right')
        beginGameButton.click();
        await sleep(30000)

        let span=await $('span')
        let text= await span[1].getText()
        console.log(text)

        await helpers.loadPage('http://localhost:3000/game')
            /*let playAgainButton = await $('body > div > main > div > div.game-info > div > button')
            playAgainButton.click()
            await sleep(2000)

            let startPlaying = await $('body > div > main > div > div:nth-child(5) > button.begin-btn.btn.btn-primary.float-right') 
            startPlaying.click()
            await sleep(30000)*/
            player1Profiles = await $('body > div > main > div > div:nth-child(3) > div > div:nth-child(2) > button')
            player1Profiles.click()
            await sleep(1000)
            dumBotProfile = await $('body > div > main > div > div:nth-child(3) > div > div.input-group-prepend.show > div > div:nth-child(4)')
            dumBotProfile.click()
            await sleep(1000)
            player1InputText = await $('body > div > main > div > div:nth-child(3) > div > input')
            player1InputText.click()
            player1InputText.sendKeys('NotsoWise')
            await sleep(1000)
    
            player2Profiles = await $('body > div > main > div > div:nth-child(4) > div > div:nth-child(2) > button')
            player2Profiles.click()
            await sleep(1000)
            normalBotProfile = await $('body > div > main > div > div:nth-child(4) > div > div.input-group-prepend.show > div > div:nth-child(3)')
            normalBotProfile.click()
            await sleep(1000)
            player2InputText = await $('body > div > main > div > div:nth-child(4) > div > input')
            player2InputText.click()
            player2InputText.sendKeys('SmartyBoy')
            await sleep(1000)
            startButton = await $('#navbarSupportedContent > ul > li:nth-child(2) > a')
            startButton.click()
            await sleep(2000);   
        

            i = i + 1
            console.log('games played:' + i)
            //let span=await $('span')
            //let text= await span[1].getText()
            //let text = await driver.findElement(By.xpath("//span[contains(.,'drag')]")).getText()
            //console.log(text + 'hello')

            if(text.includes('SmartyBoy'))
            {
                count++
                console.log('Games won by SmartyBoy: ' + count);
            }


            } 
            
            
            
            
            
      });

    this.Then(/^the bot wins each game$/, async function () {
        
        assert(count==3, 'Ups..dumbot has won atleast one');
        
      });




    

}