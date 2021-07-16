import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToggleSwitch } from '../.';

const App = () => {
  return (
    <div>
      <ToggleSwitch enabled={false} onChange={() => {}} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
