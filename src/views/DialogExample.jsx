import { style } from '@react-spectrum/s2/style' with {type: 'macro'};
import { ActionButton, CloseButton, CustomDialog, DialogTrigger, ColorArea, ColorSwatch, ColorField, ColorSwatchPicker } from '@react-spectrum/s2';
import { useEffect, useState } from "react";

export default function DialogExample() {
  const [color, setColor] = useState("rgb(255, 255, 255)")
  useEffect(() => {
    function stopPropagation(event) {
      event.stopImmediatePropagation()
    }

    document.addEventListener("keydown", stopPropagation, true);
    return () => {
      document.removeEventListener("keydown", stopPropagation, true);
    }
  }, []);

  return (
    <>
      <div style={{ marginTop: "80px", display: "flex", flexFlow: "column", alignItems: "center" }}>
        <DialogTrigger>
          <ActionButton>Open dialog</ActionButton>
          <CustomDialog padding="none">
            <div style={{ padding: "32px 24px 24px" }}>
              <ColorArea
                value={color}
                colorSpace='rgb'
                onChange={setColor}
                />
              <ColorField value={color} label="R" channel="red" colorSpace="rgb" labelPosition="side" styles={style({ width: 192, marginTop: 16 })} onChange={setColor} />
              <ColorField value={color} label="G" channel="green" colorSpace="rgb" labelPosition="side" styles={style({ width: 192, marginTop: 8 })} onChange={setColor} />
              <ColorField value={color} label="B" channel="blue" colorSpace="rgb" labelPosition="side" styles={style({ width: 192, marginTop: 8 })} onChange={setColor} />
              <ColorSwatchPicker styles={style({marginTop: 16})} onChange={setColor}>
                <ColorSwatch color="#A00" rounding='default' size='S' />
                <ColorSwatch color="#f80" rounding='default' size='S' />
                <ColorSwatch color="#080" rounding='default' size='S' />
                <ColorSwatch color="#08f" rounding='default' size='S' />
                <ColorSwatch color="#088" rounding='default' size='S' />
                <ColorSwatch color="#008" rounding='default' size='S' />
                <ColorSwatch color="#000" rounding='default' size='S' />
              </ColorSwatchPicker>
              <CloseButton styles={style({
                position: 'absolute',
                top: 0,
                insetEnd: 0
              })} />
            </div>
          </CustomDialog>
        </DialogTrigger>
      </div>
    </>
  )
}
