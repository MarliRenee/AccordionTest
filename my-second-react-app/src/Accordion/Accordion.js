import React, {Component} from 'react';
import './Accordion.css'

export default class Accordion extends Component {
  static defaultProps = {
    buttonSections: []
  };

  state = {
    activeSectionIndex: null,
  }

  handleSetActiveSecion = (sectionIndex) => {
    this.setState({ activeSectionIndex: sectionIndex })
  }

  renderItem(buttonSections, idx, activeSectionIndex) {
    return (
      <div>
        <li className='Accordion__item' key={idx}>
          <button
            type='button'
            onClick={() => this.handleSetActiveSecion(idx)}
          >
            {buttonSections.title}
          </button>
          {(activeSectionIndex === idx) && <p>{buttonSections.content}</p>}
        </li>
      </div>
    )
  }

  render() {
    const { activeSectionIndex } = this.state
    const { buttonSections } = this.props
    return (
      <ul className='Accordion'>
        <h1>Accordion React Test</h1>
        {buttonSections.map((buttonSections, idx) =>
          this.renderItem(buttonSections, idx, activeSectionIndex)
        )}
      </ul>
    )
  }
}