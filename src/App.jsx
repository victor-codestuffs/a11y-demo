import { style } from '@react-spectrum/s2/style' with {type: 'macro'};
import { Provider, TabList, Tabs, Tab } from '@react-spectrum/s2';
import { useState } from 'react';
import FormExample from './views/FormExample.jsx'
import DialogExample from './views/DialogExample.jsx'
import AppFrameExample from './views/AppFrameExample.jsx'
import '@react-spectrum/s2/page.css';
import './App.css'

function App() {
  const [tab, setTab] = useState("react-aria-1");
  const tabs = ["Form Example", "Dialog Example", "App Frame Example"];
  return (
    <Provider background="base" styles={style({width: "100%"})}>
      <header style={{ height: "48px", display: "flex", justifyContent: "center" }}>
        <Tabs
          aria-label="Examples"
          selectedKey={tab}
          onSelectionChange={setTab}>
          <TabList>
            {tabs.map((str, i) => (<Tab key={i}>{str}</Tab>))}
          </TabList>
        </Tabs>
      </header>
      <main style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        {tab === "react-aria-1" && (
          <FormExample />
        )}
        {tab === "react-aria-2" && (
          <DialogExample />
        )}
        {tab === "react-aria-3" && (
          <AppFrameExample />
        )}
      </main>
    </Provider>
  )
}

export default App
