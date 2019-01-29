import ask from './Api';
//export NODE_TLS_REJECT_UNAUTHORIZED=0;
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

/*
*
* Missing tests
* -------------------------------------
* - 'it should call YesNo API'
* -------------------------------------
*
* Please add any other test that you think could be missing
*
* */


describe('API Caller', () => {

    it('should call yes no API', () => {
        return ask()
        .then(data => {
          expect(data).toBeDefined()
          expect(data.answer).toBeDefined()
          expect(data.forced).toBeDefined()
          expect(data.image).toBeDefined()
        })
      })

      it('should validate the response of yes no API', () => {
        return ask()
        .then(data => {
          expect(data.forced).toBe(false)
          expect(['yes','no']).toContain(data.answer);
        })
      })


});
