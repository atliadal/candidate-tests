class HomePage {

    constructor(){
        this.textBox = element(by.tagName('input'));
        this.askToGodButton = element(by.tagName('button'));
        this.response = element(by.tagName('h1'));
    }

    openApp(){
        return browser.get('http://localhost:3000/')
    }

    askToGod(){
        this.textBox.sendKeys('Test');
        return this.askToGodButton.click();
    }

}

module.exports = HomePage;  