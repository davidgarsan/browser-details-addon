import Ember from 'ember';
import layout from '../templates/components/device-info';
//import CoreResolver from 'core/resolvers/default';
import BrowserTool from 'core/tools/browser';

export default Ember.Component.extend({
  layout: layout,
  //core: CoreResolver,
  //browser: BrowserTool,

  out: Ember.computed('size', {
    get() {
      return [
        BrowserTool.get('screenWidth'),
        BrowserTool.get('screenHeight')
      ];
    }
  })
});
