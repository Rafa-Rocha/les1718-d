describe('Searching for a Location ', function(){  
    var addLocationButton;

    beforeEach(function() {
        browser.get('/');
        addLocationButton = element(by.css('.addLocation'));
    });

    it('should display the Search view, search for the inputed valid location, and show its search results', function() {
        addLocationButton.click().then(function() {
            // check if it's the search page
            //expect(browser.getCurrentUrl()).toMatch('/search');

            var searchBar = element(by.id('searchbar'));
            searchBar.click();

            var input = searchBar.element(by.css('.searchbar-input'));
            input.sendKeys('porto, portugal');

            // wait for search results
            browser.sleep(15000);

            // check if the correct result appears
            var searchResult = element(by.cssContainingText('.searchResult', 'Porto, Portugal'));
            expect(searchResult.isPresent()).toBe(true);
        });
    })

    
    it('should display the Search view, search for the inputed invalid location, and not show any search results', function() {
        addLocationButton.click().then(function() {
            // check if it's the search page
            //expect(browser.getCurrentUrl()).toMatch('/search');

            var searchBar = element(by.id('searchbar'));
            searchBar.click();

            var input = searchBar.element(by.css('.searchbar-input'));
            input.sendKeys('aaaaaaaa');

            // wait for search results
            browser.sleep(15000);

            // check if any result appears
            var searchResult = element(by.css('.searchResult'));
            expect(searchResult.isPresent()).toBe(false);
        });
    });
    
});