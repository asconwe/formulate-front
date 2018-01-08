import React from 'react';
import Box from './Box';
import CreateCustomElementContainer from './CustomElementContainer';
import DraftTextLine from './DraftTextLine';
import DraftTextArea from './DraftTextArea';
// import LiveText from './LiveText'

export const DraftHeader = ({ setValue, value }) => (<h2><DraftTextLine setValue={setValue} value={value} /></h2>)

export const DraftParagraph = ({ setValue, value }) => (<p><DraftTextArea setValue={setValue} value={value} /></p>)

const elementLibrary = (mode, type, id) => {
  const elements = {
    live: {
      Box,
      // Header: LiveHeader,
      // Paragraph: LiveParagraph
    },
    draft:
      {
        Box,
        Header: CreateCustomElementContainer(DraftHeader, id),
        Paragraph: CreateCustomElementContainer(DraftParagraph, id)
      }
  }

  return elements[mode][type];
}

export default elementLibrary