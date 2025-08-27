import {style} from '@react-spectrum/s2/style' with {type: 'macro'};
import { Provider, Button } from '@react-spectrum/s2';
import './App.css'
import '@react-spectrum/s2/page.css';

function App() {
  return (
    <Provider background="base">
      <header style={{ height: "48px" }}>
        hello
      </header>
      <main style={{ flex: 1 }}>
        <Button
          variant="accent"
          onPress={() => alert('Hey there!')}>
          Hello Spectrum 2!
        </Button>
      </main>
    </Provider>
  )
}

export default App
