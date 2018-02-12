const asscup       = require(__dirname + '/../src/asscup'),
      chai         = require('chai'),
      assertArrays = require('chai-arrays')

chai.use(assertArrays)

const dictionary = require(__dirname + '/../src/dictionary.json'),
      expect     = chai.expect
      assert     = chai.assert

describe('Insert tests', () => {
    it('English', () => {
        expect(dictionary['EN']['noun']).to.be.containing(asscup.format('#n'))
        expect(dictionary['EN']['verb']).to.be.containing(asscup.format('#v'))
        expect(dictionary['EN']['adjective']).to.be.containing(asscup.format('#a'))
        expect(dictionary['EN']['sentence']).to.be.containing(asscup.format('#s'))
    })
    
    it('Russian', () => {
        expect(dictionary['RU']['noun']).to.be.containing(asscup.format('#n', 'RU'))
        expect(dictionary['RU']['verb']).to.be.containing(asscup.format('#v', 'RU'))
        expect(dictionary['RU']['adjective']).to.be.containing(asscup.format('#a', 'RU'))
        expect(dictionary['RU']['sentence']).to.be.containing(asscup.format('#s', 'RU'))
    })
})

describe('Format tests', () => {
    it('Spaces after', () => 
        assert.equal(asscup.format('~Whore'), 'W h o r e '))

    it('Spaces around', () =>
        assert.equal(asscup.format('_Shit_'), ' S  h  i  t '))

    it('Caps lock', () =>
        assert.equal(asscup.format('Fuck you, ^bitch^!'), 'Fuck you, BITCH!'))

    it('Dots', () =>
        assert.equal(asscup.format('\\NASA\\'), 'N.A.S.A.'))

    it('Hiding symbols', () =>
        expect(["@", "!", "%", "*", "#", "$"]).to.be.containing(asscup.format('*Y')))
})

describe('Mixed tests', () => {
    it('Without formatting', () => 
        assert.equal(asscup.format('Asshole'), 'Asshole'))
    
    it('Mixed formatting', () =>
        assert.equal(asscup.format('Plastic, ^~assholes~^!'), 'Plastic, A S S H O L E S !'))
})