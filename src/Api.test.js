import ask from './Api';

/*
*
* Tests, add the one listed test and minimum 2 more
* -------------------------------------
* - 'it should call YesNo API'
* - *
* - *
* -------------------------------------
*
* Please add any other test that you think could be missing
*
* */


describe('API Caller', () => {
    it('should call YesNo API', done  => {
        const mockResponse = {};
        const spy = jest.spyOn(global, 'fetch')
                        .mockImplementation(() => Promise.resolve({
                            json: () => (mockResponse)
                    }));
        const endpoint = `https://yesno.wtf/api/`

        return ask().then(() => { 
            expect(spy).toHaveBeenCalledWith(endpoint);

        spy.mockClear();
        done()
        });
    });

    it('should call the API once', done => {
        const mockResponse = {};
        const spy = jest.spyOn(global, 'fetch')
                        .mockImplementation(() => Promise.resolve({
                            json: () => (mockResponse)
                    }));

        return ask().then(() => { 
            expect(spy).toHaveBeenCalledTimes(1);

        spy.mockClear();
        done();
        });
    });

    it('should return response', done => {
        const mockResponse = {};
        const spy = jest.spyOn(global, 'fetch')
                        .mockImplementation(() => Promise.resolve({
                            json: () => (mockResponse)
                    }));

        return ask().then(() => { 
            expect(spy).toHaveReturnedTimes(1);

        spy.mockClear();
        done();
        });
    });

    it('should return in JSON format', done => {
        const JSONbody = {
            answer: "no",
            forced: false,
            image: "https://yesno.wtf/assets/no/21-05540164de4e3229609f106e468fa8e7.gif"
            };
        const spy = jest.spyOn(global, 'fetch')
                        .mockImplementation(() => Promise.resolve({
                            json: () => (JSONbody)
                    }));
                    

        return ask().then(response => { 
            expect(response).toEqual(JSONbody);

        spy.mockClear();
        done();
        });
    });

});