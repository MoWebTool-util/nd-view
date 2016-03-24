/**
 * @module View
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict'

var Widget = require('nd-widget')
var Template = require('nd-template')

/**
 * @class
 * @extends {Widget}
 * @implements {Template}
 * @param  {config} [config]   attrs
 */
var View = Widget.extend({

  // 使用 handlebars
  Implements: [Template],

  attrs: {
    // 统一样式前缀
    classPrefix: 'ui-view',

    // 模板
    template: require('./src/view.handlebars'),

    // 数据
    model: {},

    actions: []
  },

  events: {
    'click .toolbar > button': function(e) {
      this.trigger(e.currentTarget.getAttribute('data-role'))
    }
  },

  initAttrs: function(config) {
    View.superclass.initAttrs.call(this, config)

    this.set('model', {
      actions: this.get('actions')
    })
  },

  getContainer: function() {
    return this.element.children('.content')
  }

})

module.exports = View
