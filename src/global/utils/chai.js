import chai from 'chai'
import chai_spies from 'chai-spies'
import chaiEnzyme from 'chai-enzyme'

chai.use(chai_spies);
chai.use(chaiEnzyme());

export default chai;
