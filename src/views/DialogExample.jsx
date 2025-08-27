import { style } from '@react-spectrum/s2/style' with {type: 'macro'};
import { ActionButton, CloseButton, CustomDialog, DialogTrigger, ColorArea, ColorSwatch, ColorSlider, ColorSwatchPicker } from '@react-spectrum/s2';
import { useRef, useEffect } from "react";

export default function DialogExample() {
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
            <div style={{ padding: "32px" }}>
              <ColorArea />
              <ColorSlider
                styles={style({marginTop: 16})}
                defaultValue="#7f0000"
                channel="red"
                name="red"
                />
              <ColorSwatchPicker styles={style({marginTop: 16})} >
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
