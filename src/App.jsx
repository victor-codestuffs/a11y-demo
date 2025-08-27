import { style } from '@react-spectrum/s2/style' with {type: 'macro'};
import { Provider, TabList, Tabs, Tab } from '@react-spectrum/s2';
import '@react-spectrum/s2/page.css';
import { useState } from 'react';
import './App.css'
import KeysExample from './views/Keys.jsx'
import FocusOrderExample from './views/FocusOrder.jsx'
import DialogExample from './views/Dialog.jsx'
import AppFrameExample from './views/AppFrame.jsx'

function App() {
  const [tab, setTab] = useState("react-aria-1");
  return (
    <Provider background="base" styles={style({width: "100%"})}>
      <header style={{ height: "48px", display: "flex", justifyContent: "center" }}>
        <Tabs
          aria-label="Examples"
          selectedKey={tab}
          onSelectionChange={setTab}>
          <TabList>
            {["One", "Two", "Three", "Four"].map((str, i) => (<Tab key={i}>Example {str}</Tab>))}
          </TabList>
        </Tabs>
      </header>
      <main style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        {tab === "react-aria-1" && (
          <KeysExample />
        )}
        {tab === "react-aria-2" && (
          <FocusOrderExample />
        )}
        {tab === "react-aria-3" && (
          <DialogExample />
        )}
        {tab === "react-aria-4" && (
          <AppFrameExample />
        )}
      </main>
    </Provider>
  )
}

export default App
