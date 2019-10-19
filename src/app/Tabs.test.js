//import MyTabs from './Tabs'
//import { mount } from 'enzyme'
describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://google.com');
    });
  
    it('should be titled "Google"', async () => {
      await expect(page.title()).resolves.toMatch('Google');
    });

    it('lol', () => {
        const wrapper = mount(<MyTabs />); // mount/render/shallow when applicable

        expect(wrapper.find('#1')).toExist();
    })
  });