import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import BrowserTool from 'core/tools/browser';

moduleForComponent('device-info', 'Integration | Component | device info', {
  integration: true
});

test('it renders', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{device-info}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#device-info}}
      template block text
    {{/device-info}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');

  for (let p in BrowserTool) {
    console.log(" ---> " + p);
  }
  //console.log("Browser:" + BrowserTool.platformVersion);
});

//# sourceMappingURL=device-info-test-compiled.js.map