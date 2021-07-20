import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToggleSwitch } from 'awesome-component-library';
import 'awesome-component-library/dist/tailwind.css';

const App = () => {
  const [isToggled, setIsToggled] = React.useState(false);
  return (
    <div>
      <ToggleSwitch
        enabled={isToggled}
        onChange={(v: boolean) => setIsToggled(v)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
