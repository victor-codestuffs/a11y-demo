import { style } from '@react-spectrum/s2/style' with {type: 'macro'};
import { ActionButtonGroup, ActionButton, Avatar, Button, ButtonGroup, ToggleButton, ToggleButtonGroup, TooltipTrigger, Tooltip, Text, Divider, Picker, PickerItem, TreeView, TreeViewItem, TreeViewItemContent, ActionMenu, MenuItem, TextArea, NumberField } from '@react-spectrum/s2';
import MenuHamburger from '@react-spectrum/s2/icons/MenuHamburger';
import Select from '@react-spectrum/s2/icons/Select';
import Brush from '@react-spectrum/s2/icons/Brush';
import Background from '@react-spectrum/s2/icons/Background';
import AddContent from '@react-spectrum/s2/icons/AddContent';
import Draw from '@react-spectrum/s2/icons/Draw';
import ColorFill from '@react-spectrum/s2/icons/ColorFill';
import Eyedropper from '@react-spectrum/s2/icons/Eyedropper';
import MagicWand from '@react-spectrum/s2/icons/MagicWand';
import LassoSelect from '@react-spectrum/s2/icons/LassoSelect';
import StampClone from '@react-spectrum/s2/icons/StampClone';
import Blur from '@react-spectrum/s2/icons/Blur';
import Gradient from '@react-spectrum/s2/icons/Gradient';
import ZoomIn from '@react-spectrum/s2/icons/ZoomIn';
import Ruler from '@react-spectrum/s2/icons/Ruler';
import Hand from '@react-spectrum/s2/icons/Hand';
import VectorDraw from '@react-spectrum/s2/icons/VectorDraw';
import Undo from '@react-spectrum/s2/icons/Undo';
import Redo from '@react-spectrum/s2/icons/Redo';
import Invite from '@react-spectrum/s2/icons/Invite';
import Download from '@react-spectrum/s2/icons/Download';
import Folder from '@react-spectrum/s2/icons/Folder';
import Edit from '@react-spectrum/s2/icons/Edit';
import Delete from '@react-spectrum/s2/icons/Delete';
import FileText from '@react-spectrum/s2/icons/FileText';
import TextAlignLeft from '@react-spectrum/s2/icons/TextAlignLeft';
import TextAlignCenter from '@react-spectrum/s2/icons/TextAlignCenter';
import TextAlignRight from '@react-spectrum/s2/icons/TextAlignRight';
import { useState } from 'react';

function TreeViewItemMenu() {
  return (
    <ActionMenu>
      <MenuItem id="edit">
        <Edit />
        <Text>Edit</Text>
      </MenuItem>
      <MenuItem id="delete">
        <Delete />
        <Text>Delete</Text>
      </MenuItem>
    </ActionMenu>
  )
}

export default function AppFrameExample() {
  const [text, setText] = useState("Hello world");
  const [fontSize, setFontSize] = useState(24);
  const [textAlign, setTextAlign] = useState(1);

  const getTextAlign = (value) => {
    if (value === 0) return"left";
    if (value === 1) return"center";
    return "right";
  }

  const fontStyle = {
    color: "black",
    fontSize,
    textAlign: getTextAlign(textAlign),
  };

  return (
    <>
      <div style={{ display: "flex", flexFlow: "column", width: "100%" }}>
        <nav className="u-frame-color" style={{ display: "flex", height: "48px", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "12px" }}>
            <ActionButton isQuiet><MenuHamburger /></ActionButton>
            <div>Untitled</div>
          </div>
          <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "flex-end", gap: "8px", marginRight: "12px", marginLeft: "auto" }}>
            <ActionButtonGroup isQuiet>
              <ActionButton isDisabled><Undo /></ActionButton>
              <ActionButton isDisabled><Redo /></ActionButton>
            </ActionButtonGroup>
            <Picker isQuiet aria-label="Zoom" menuWidth={144} defaultSelectedKey={1}>
              {[
                "Zoom in",
                "Zoom out",
                "100%",
                "200%",
                "Fit to screen",
                "Fill screen",
              ].map((str, i) => (
                <PickerItem key={i}>{str}</PickerItem>
              ))}
            </Picker>
            <ButtonGroup>
              <Button variant='secondary'><Invite /><Text>Invite</Text></Button>
              <Button variant='accent' autoFocus><Download /><Text>Download</Text></Button>
            </ButtonGroup>
            <Divider orientation='vertical' />
            <ActionButton isQuiet><Avatar src="https://i.imgur.com/xIe7Wlb.png" size="28" /></ActionButton>
          </div>
        </nav>
        <div style={{ display: "flex", margin: "4px" }}>
          <div>
            <div className="u-frame-color u-border-radius" style={{ padding: "8px" }}>
              <ToggleButtonGroup orientation='vertical' isQuiet isEmphasized selectionMode="single" disallowEmptySelection defaultSelectedKeys={[0]}>
                {[
                  { icon: <Select />, tooltip: "Select" },
                  { icon: <MagicWand />, tooltip: "MagicWand" },
                  { icon: <LassoSelect />, tooltip: "LassoSelect" },
                  { icon: <Brush />, tooltip: "Brush" },
                  { icon: <VectorDraw />, tooltip: "VectorDraw" },
                  { icon: <Draw />, tooltip: "Draw" },
                  { icon: <ColorFill />, tooltip: "ColorFill" },
                  { icon: <StampClone />, tooltip: "StampClone" },
                  { icon: <Blur />, tooltip: "Blur" },
                  { icon: <Gradient />, tooltip: "Gradient" },
                  { icon: <Background />, tooltip: "Background" },
                  { icon: <ZoomIn />, tooltip: "ZoomIn" },
                  { icon: <Ruler />, tooltip: "Ruler" },
                  { icon: <Hand />, tooltip: "Hand" },
                  { icon: <AddContent />, tooltip: "AddContent" },
                  { icon: <Eyedropper />, tooltip: "Eyedropper" },
                ].map((tool, i) => (
                  <TooltipTrigger placement="right" key={i}>
                    <ToggleButton id={i}>{tool.icon}</ToggleButton>
                    <Tooltip>{tool.tooltip}</Tooltip>
                  </TooltipTrigger>
                ))}
              </ToggleButtonGroup>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", height: "calc(100vh - 104px)" }}>
            <div style={{ backgroundColor: "#fff", height: "640px", width: "720px", margin: "auto" }}>
                <p style={fontStyle}>
                  {text}
                </p>
            </div>
          </div>
          <div style={{ width: "290px", display: "flex", flexFlow: "column", gap: "4px" }}>
            <div className="u-frame-color u-border-radius" style={{ height: "300px", padding: "16px" }}>
              <h4 style={{ margin: 0 }}>
                Outliner
              </h4>
              <TreeView
                aria-label="test static tree"
                isEmphasized
                isDetached
                selectionMode='none'
                styles={style({marginTop: 16})}
                >
                <TreeViewItem id="projects" textValue="Projects">
                  <TreeViewItemContent>
                    <Text>Projects</Text>
                    <Folder />
                    <TreeViewItemMenu />
                  </TreeViewItemContent>
                  <TreeViewItem id="projects-1" textValue="Projects-1">
                    <TreeViewItemContent>
                      <Text>Projects-1</Text>
                      <Folder />
                      <TreeViewItemMenu />
                    </TreeViewItemContent>
                    <TreeViewItem id="projects-1A" textValue="Projects-1A">
                      <TreeViewItemContent>
                        <Text>Projects-1A</Text>
                        <FileText />
                        <TreeViewItemMenu />
                      </TreeViewItemContent>
                    </TreeViewItem>
                  </TreeViewItem>
                  <TreeViewItem id="projects-2" textValue="Projects-2">
                    <TreeViewItemContent>
                      <Text>Projects-2</Text>
                      <FileText />
                      <TreeViewItemMenu />
                    </TreeViewItemContent>
                  </TreeViewItem>
                </TreeViewItem>
              </TreeView>
            </div>
            <div className="u-frame-color u-border-radius" style={{ padding: "16px" }}>
              <h4 style={{ margin: 0 }}>
                Properties
              </h4>
              <TextArea
                styles={style({marginTop: 16})}
                value={text}
                label="Text"
                onChange={setText}
                />
              <NumberField
                styles={style({marginTop: 16})}
                value={fontSize}
                label="Font size"
                minValue={1}
                onChange={setFontSize}
                />
              <ToggleButtonGroup
                styles={style({marginTop: 16})}
                isJustified
                selectionMode="single"
                disallowEmptySelection
                defaultSelectedKeys={[textAlign]}
                onSelectionChange={(v) => { setTextAlign(...v) }}
                >
                {[
                  { icon: <TextAlignLeft />, tooltip: "Left" },
                  { icon: <TextAlignCenter />, tooltip: "Center" },
                  { icon: <TextAlignRight />, tooltip: "Right" }
                ].map((it, i) => (
                  <TooltipTrigger key={i}>
                    <ToggleButton id={i}>{it.icon}</ToggleButton>
                    <Tooltip>{it.tooltip}</Tooltip>
                  </TooltipTrigger>
                ))}
              </ToggleButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
