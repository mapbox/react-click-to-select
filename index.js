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
    var range = document.createRange(),
      sel = window.getSelection();
    range.selectNodeContents(this._target);
    sel.removeAllRanges();
    sel.addRange(range);
  },
  render: function() {
    return React.createElement(
      'span',
      {
        onClick: this.select,
        ref: function(target) {
          this._target = target;
        }
      },
      this.props.children);
  }
});

module.exports = ClickToSelect;
