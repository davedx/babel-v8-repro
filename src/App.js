import {View, PropTypes} from 'react-view';

export const App = () => (
  <View
    componentName="Button"
    props={{
      children: {
        value: 'Hello',
        type: PropTypes.ReactNode,
        description: 'Visible label.',
      },
      onClick: {
        value: '() => alert("click")',
        type: PropTypes.Function,
        description: 'Function called when button is clicked.',
      },
      disabled: {
        value: false,
        type: PropTypes.Boolean,
        description: 'Indicates that the button is disabled',
      },
    }}
    scope={{
    }}
    imports={{
      'your-button-component': {
        named: ['Button'],
      },
    }}
  />
);