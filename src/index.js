import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component is wrapped around any part of a page.
 * When that part of the page is clicked, it selects
 * the text within.
 */
class ClickToSelect extends React.PureComponent {
  select = e => {
    e.preventDefault();
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(this._target);
    sel.removeAllRanges();
    sel.addRange(range);
  };

  getRef = target => {
    this._target = target;
  };

  render() {
    return (
      <div ref={this.getRef} onClick={this.select}>
        {this.props.children}
      </div>
    );
  }
}

ClickToSelect.propTypes = {
  children: PropTypes.any.isRequired
};

export default ClickToSelect;
