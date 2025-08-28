import { style } from '@react-spectrum/s2/style' with {type: 'macro'};
import { Form, TextField, Checkbox, Button, Picker, PickerItem } from '@react-spectrum/s2';
import { useState } from 'react';

export default function FormExample() {
  const [isPending, setIsPending] = useState(false);

  const onKeyDown = event => {
    if (event.code === "Space" || event.code === "Enter") {
      event.preventDefault();
    }
  };

  const onPress = event => {
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
          <Picker label="Favorite ice cream">
            <PickerItem>Chocolate</PickerItem>
            <PickerItem>Mint</PickerItem>
            <PickerItem>Strawberry</PickerItem>
            <PickerItem>Vanilla</PickerItem>
            <PickerItem>Chocolate Chip Cookie Dough</PickerItem>
          </Picker>
          <Checkbox onKeyDown={onKeyDown}>Remember me</Checkbox>
          <Button styles={style({width: "100%"})} isPending={isPending} onPress={onPress}>Log in</Button>
        </Form>
      </div>
    </>
  )
}
