import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component is wrapped around any part of a page.
 * When that part of the page is clicked, it selects
 * the text within.
 */
class ClickToSelect extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    containerElement: PropTypes.oneOf(['span', 'div']),
  };

  static defaultProps = {
    containerElement: 'span',
  };

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
    const Element = this.props.containerElement === 'div' ? div : span;

    return (
      <Element ref={this.getRef} onClick={this.select}>
        {this.props.children}
      </Element>
    );
  }
}

export default ClickToSelect;
