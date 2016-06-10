//  Protractor/Jasmine tests for nText app by Dan McKeown | http://danmckeown.info/code/ntext
describe('front page link test', function() {
    it('clicking on the compose button should open the compose partial', function() {
        browser.get('http://localhost:7387/#/');
        element(by.css('[id="compose_link"]')).click();
        expect(browser.getLocationAbsUrl()).toMatch("/secondPartial");
    });
});

describe('fill out text field and use save button', function() {
    it('saving the text leads to loading front page', function() {
        browser.get('http://localhost:7387/#/secondPartial');
        var el = element(by.css('[id="compose_text_zone"]'));
        var save_button = element(by.css('[id="write_it"]'));

        // Send keys to the element (usually an input)
        el.sendKeys('Around the base of that great Altar flow,As on some mountain-islet burst and shiver Atlantic waves;and solemnly and slow');

        // Click on the element
        save_button.click();

        //  This will have created a new post
    expect(browser.getLocationAbsUrl()).toMatch("/");
    });
});

describe('delete post', function() {
    it('deleting the first post leads back to the front page', function() {
        browser.get('http://localhost:7387/#/');
        var el = element(by.css('[id="delete_button"]'));
        el.click();

        //  This will delete (by default behavior the latest and thus probably) the post just created by 'save button'
    expect(browser.getLocationAbsUrl()).toMatch("/");
    });
});
