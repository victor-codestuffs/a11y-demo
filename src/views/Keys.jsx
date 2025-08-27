import { style } from '@react-spectrum/s2/style' with {type: 'macro'};
import { Form, TextField, Checkbox, Button } from '@react-spectrum/s2';
import { useState } from 'react';

export default function Keys() {
  const [isPending, setIsPending] = useState(false);

  const blockCheckbox = event => {
    if (event.code === "Space" || event.code === "Enter") {
      event.preventDefault();
    }
  };

  const onLoginPress = event => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
    }, 4000);
  };

  return (
    <>
      <div style={{ width: "288px", marginTop: "80px" }}>
        <Form>
          <TextField label="Email" />
          <TextField label="Password" type="password" excludeFromTabOrder />
          <Checkbox onKeyDown={event => blockCheckbox(event)}>Remember me</Checkbox>
          <Button styles={style({width: "100%"})} isPending={isPending} onPress={onLoginPress}>Log in</Button>
        </Form>
      </div>
    </>
  )
}
