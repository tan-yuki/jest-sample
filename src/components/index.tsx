import React from 'react';
import { ContentPicker } from 'box-ui-elements';
import 'box-ui-elements/dist/picker.css';

export default function Box() {
  return (
    <ContentPicker token="ACCESS_TOKEN" language="en-US" />
  );
}
