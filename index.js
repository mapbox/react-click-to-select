var React = require('react');

/**
 * This component is wrapped around any part of a page.
 * When that part of the page is clicked, it selects
 * the text within.
 */
var ClickToSelect = React.createClass({
  propTypes: {
    children: React.PropTypes.any.isRequired
  },
  select: function(e) {
    e.preventDefault();
    var self = React.findDOMNode(this),
      range = document.createRange(),
      sel = window.getSelection();
    range.selectNodeContents(self);
    sel.removeAllRanges();
    sel.addRange(range);
  },
  render: function() {
    return React.createElement(
      'span',
      { onClick: this.select },
      this.props.children);
  }
});

module.exports = ClickToSelect;
