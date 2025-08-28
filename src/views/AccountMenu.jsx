import { style } from '@react-spectrum/s2/style' with {type: 'macro'};
import { ActionButton, Avatar, DialogTrigger, Popover, Text, Divider, Menu, MenuItem, SubmenuTrigger, MenuSection } from '@react-spectrum/s2';
import Buildings from '@react-spectrum/s2/icons/Buildings';
import Settings from '@react-spectrum/s2/icons/Settings';

export default function AccountMenu() {
  return (
    <DialogTrigger>
      <ActionButton aria-label="Account">
        <Avatar src="https://i.imgur.com/xIe7Wlb.png" />
      </ActionButton>
      <Popover hideArrow>
        <div className={style({
          paddingTop: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        })}>
          <div className={style({
            display: 'flex',
            gap: 12,
            alignItems: 'center',
            marginX: 12
          })}>
            <Avatar src="https://i.imgur.com/xIe7Wlb.png" size={56} />
            <div>
              <div className={style({ font: 'title' })}>Anata no Namae</div>
              <div className={style({ font: 'ui' })}>user@example.com</div>
            </div>
          </div>
          <Divider styles={style({ marginX: 12 })} />
          <Menu aria-label="Account">
            <MenuSection>
              <SubmenuTrigger>
                <MenuItem>
                  <Buildings />
                  <Text slot="label">Organization</Text>
                  <Text slot="value">Nike</Text>
                </MenuItem>
                <Menu selectionMode="single" selectedKeys={['nike']}>
                  <MenuItem id="adobe">Adobe</MenuItem>
                  <MenuItem id="nike">Nike</MenuItem>
                  <MenuItem id="apple">Apple</MenuItem>
                </Menu>
              </SubmenuTrigger>
              <MenuItem>
                <Settings />
                <Text slot="label">Settings</Text>
              </MenuItem>
            </MenuSection>
            <MenuSection>
              <MenuItem>Legal notices</MenuItem>
              <MenuItem>Sign out</MenuItem>
            </MenuSection>
          </Menu>
        </div>
      </Popover>
    </DialogTrigger>
  )
}
