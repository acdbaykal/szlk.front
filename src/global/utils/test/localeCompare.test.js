import localeCompare from '../localeCompare'
import SortBy from 'global/data/SortDirectionEnum'
import chai from 'global/utils/chai'

const {expect} = chai;

describe('utils/localeCompare', function(){
  describe('it should compare german words correctly', function(){
    const locale = 'de';
    describe('when the sorting order is ascending', function(){
      const sorting_order = SortBy.ASCENDING;
      it('and the first word comes before the second in the dictionary', function(){
        const w1 = 'Alpenland';
        const w2 = 'Zeugniss';
        expect(localeCompare(w1, w2, locale, sorting_order)).to.be.below(0);
      })

      it('and the first is the same as the other, but without capital letters', function(){
        const w1 = 'Alpenland';
        const w2 = 'alpenland';
        expect(localeCompare(w1, w2, locale, sorting_order)).to.be.equal(0);
      })

      it('and the first word comes after the second in the dictionary', function(){
        const w2 = 'Alpenland';
        const w1 = 'Zeugniss';
        expect(localeCompare(w1, w2, locale, sorting_order)).to.be.above(0);
      })
    })

    describe('when the sorting order is descending', function(){
      const sorting_order = SortBy.DESCENDING;
      it('and the first word comes before the second in the dictionary', function(){
        const w1 = 'Alpenland';
        const w2 = 'Zeugniss';
        expect(localeCompare(w1, w2, locale, sorting_order)).to.be.above(0);
      })

      it('and the first is the same as the other, but without capital letters', function(){
        const w1 = 'Alpenland';
        const w2 = 'alpenland';
        expect(localeCompare(w1, w2, locale, sorting_order)).to.be.equal(0);
      })

      it('and the first word comes after the second in the dictionary', function(){
        const w2 = 'Alpenland';
        const w1 = 'Zeugniss';
        expect(localeCompare(w1, w2, locale, sorting_order)).to.be.below(0);
      })
    })
  })

  describe('it should compare turkish words correctly', function(){
    const locale = 'tr';
    describe('when the sorting order is ascending', function(){
      const sorting_order = SortBy.ASCENDING;
      it('and the first word comes before the second in the dictionary', function(){
        const w1 = 'Ağrı';
        const w2 = 'armağan';
        expect(localeCompare(w1, w2, locale, sorting_order)).to.be.below(0);
      })

      it('and the first is the same as the other, but without capital letters', function(){
        const w1 = 'Ağrı';
        const w2 = 'ağrı';
        expect(localeCompare(w1, w2, locale, sorting_order)).to.be.equal(0);
      })

      it('and the first word comes after the second in the dictionary', function(){
        const w1 = 'Zaman';
        const w2 = 'Ağrı'
        expect(localeCompare(w1, w2, locale, sorting_order)).to.be.above(0);
      })
    })

    describe('when the sorting order is descending', function(){
      const sorting_order = SortBy.DESCENDING;
      it('and the first word comes before the second in the dictionary', function(){
        const w1 = 'Ağrı';
        const w2 = 'armağan';
        expect(localeCompare(w1, w2, locale, sorting_order)).to.be.above(0);
      })

      it('and the first is the same as the other, but without capital letters', function(){
        const w1 = 'Ağrı';
        const w2 = 'ağrı';
        expect(localeCompare(w1, w2, locale, sorting_order)).to.be.equal(0);
      })

      it('and the first word comes after the second in the dictionary', function(){
        const w1 = 'Zaman';
        const w2 = 'Ağrı';
        expect(localeCompare(w1, w2, locale, sorting_order)).to.be.below(0);
      })
    })
  })
})
