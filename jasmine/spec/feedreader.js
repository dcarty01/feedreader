$(function () {
    let entriesStart,
        entriesEnd;

    //first testing suite 
    describe('RSS Feeds', function () {
        it('are defined', function () {
            //check to see if allFeeds variable is defined
            expect(allFeeds).toBeDefined();
            //checks that allFeeds is not empty
            expect(allFeeds.length).not.toBe(0);
        });

        it('urls are defined', function () {
            //loops through each feed in allFeeds object
            for (let i = 0; i < allFeeds.length; i++) {
                //checks for URL to be defined
                expect(allFeeds[i].url).toBeDefined();
                //checks that the URL is not empty
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });
        it('names are defined', function () {
            //loops through each feed in allFeeds object
            for (let i = 0; i < allFeeds.length; i++) {
                //checks that name will be defined
                expect(allFeeds[i].name).toBeDefined();
                //checks that the name is not empty
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    //second testing suite
    describe('The Menu', function () {
        it('menu element is hidden', function () {
            //test that ensures menu element is hidden by default
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        //tests that menu changes visibility when clicked
        it('working toggle on click event', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    //third suite which is an asynchronous request that uses beforeEach and done
    //checks that there is at least a single .entry element within the .feed container
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
        it('define if entry has more than 0 entries', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    //fourth test suite that checks that content actually changes
    describe('New Feed Selection', function () {
        beforeEach(function (done) {
            $('.feed').empty();
            loadFeed(0, function () {
                entriesStart = $('.feed').html();
                    loadFeed(1, function () {
                        entriesEnd = $('.feed').html();
                        done();
                    });
            });
        });

        it('new feed is different to old one', function () {
            expect(entriesStart).not.toBe(entriesEnd);
        });
    });
}());