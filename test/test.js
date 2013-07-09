var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('app functions', function(){

    before(function(){
        console.log('this called in before all');
    });
    beforeEach(function(){
        console.log('invoke before each method');
    });

    afterEach(function(){
        console.log('invoke after each method');
    });
    after(function(){
        console.log('this called in after all');
    });



    describe('#fntrue', function(){

        it('should return true', function(done){
            fntrue().should.equal(true);
            done();
        });
    });

    describe('#fnfalse()', function(){

        it('should return false', function(done){
            fnfalse().should.equal(false);
            done()
        });
    });
    // describe('#fnNotTested()', function(){

    //     it('should return null', function(done){
    //         expect(fnNotTested()).to.be.null;
    //         done()
    //     });
    // });
});