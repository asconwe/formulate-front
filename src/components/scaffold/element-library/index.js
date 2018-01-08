import React from 'react';
import Box from './Box';
import DraftTextLine from './DraftTextLine';
import DraftTextArea from './DraftTextArea';
// import LiveText from './LiveText'

export const DraftHeader = ({setValue, value}) => (<h2><DraftTextLine setValue={setValue} value={value}/></h2>)

export const DraftParagraph = ({ setValue, value }) => (<p><DraftTextArea setValue={setValue} value={value} /></p>)

export default {
  Box,
  DraftHeader,
  DraftParagraph
}