import { style } from '@react-spectrum/s2/style' with {type: 'macro'};
import { Provider, TabList, Tabs, Tab } from '@react-spectrum/s2';
import { useState, useEffect } from 'react';
import FormExample from './views/FormExample.jsx'
import PopoverExample from './views/PopoverExample.jsx'
import AppFrameExample from './views/AppFrameExample.jsx'
import '@react-spectrum/s2/page.css';
import './App.css'

function App() {
  const [tab, setTab] = useState(0);
  const tabs = ["Form Example", "Popover Example", "App Frame Example"];

  useEffect(() => {
    document.title = `a11y demo: ${tabs[tab]}`;
  }, [tab])

  return (
    <Provider background="base" styles={style({width: "100%"})}>
      <header style={{ height: "48px", display: "flex", justifyContent: "center" }}>
        <Tabs
          aria-label="Examples"
          selectedKey={tab}
          onSelectionChange={setTab}>
          <TabList>
            {tabs.map((str, i) => (<Tab id={i} key={i}>{str}</Tab>))}
          </TabList>
        </Tabs>
      </header>
      <main style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        {tab === 0 && (
          <FormExample />
        )}
        {tab === 1 && (
          <PopoverExample />
        )}
        {tab === 2 && (
          <AppFrameExample />
        )}
      </main>
    </Provider>
  )
}

export default App
