let {$, sleep} = require('./funcs');
let slots;
 
let sleepTime = 500;
let cancelButtonText;
 
module.exports = function(){

    this.Given(/^that i navigate to the startpage$/, async function () {
        await helpers.loadPage('http://localhost:3000/');
         
        
      });


    this.Given(/^I click on the spela button$/, async function () {
        let startButton = await $('#navbarSupportedContent > ul > li:nth-child(2) > a')
        startButton.click()
        await sleep(2000);    
                
      });


      this.When(/^I fill out player details and click på Börja spela$/, async function () {
          let player1NameField = await $('body > div > main > div > div:nth-child(3) > div > input')
          player1NameField.click()
          await  sleep(2000)
          player1NameField.sendKeys('Trump')
          await sleep(2000)    
          let player2NameField = await $('body > div > main > div > div:nth-child(4) > div > input')
          player2NameField.click()
          await sleep(2000)
          player2NameField.sendKeys('Putin')
          await sleep(2000)
          let playStartButton = await $('body > div > main > div > div:nth-child(5) > button.begin-btn.btn.btn-primary.float-right')
          assert(playStartButton,'can not find the button')
          await sleep(2000)
          await playStartButton.click()
          await sleep(2000)
      });

      this.Then(/^the game should initiate$/, async function () {
        let activeMenuLink = await $('.nav-link.active');
        let text = await activeMenuLink.getText();
        await sleep(1000); // small wait needed
        assert.equal(text, 'Avbryt spelet', 'The game did not start!');
        await sleep(sleepTime * 2);
      });
          
       
      this.Then(/^board shall be empty$/, async function () {
          
        let emptySlotNumber = await $('div.empty')
        await sleep(2000)
        let l = emptySlotNumber.length
        assert.equal(l, '42');
        await sleep(2000)

    });

        this.Then(/^the number of move shall be 1$/, async function () {
            let movesCounter = await driver.findElement(By.xpath("//div[contains(.,'drag')]")).getText()
            console.log(movesCounter)
            await sleep(2000)
            assert.ok(movesCounter.includes("drag 1"));


          
               
      });



}