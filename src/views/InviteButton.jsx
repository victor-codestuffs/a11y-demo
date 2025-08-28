import { style } from '@react-spectrum/s2/style' with {type: 'macro'};
import { Button, ButtonGroup, DialogTrigger, Text, CustomDialog, Heading, TextField, Image } from '@react-spectrum/s2';
import Invite from '@react-spectrum/s2/icons/Invite';
import previewImg from '../assets/preview.png';

export default function InviteButton() {
  return (
    <DialogTrigger>
      <Button variant='secondary'><Invite /><Text>Invite</Text></Button>
      <CustomDialog padding="none">
        <div className={style({
          display: 'flex',
          size: 'full',
          flexDirection: {
            default: 'column',
            sm: 'row'
          }
        })}>
          <Image
            alt=""
            src={previewImg}
            styles={style({
              width: {
                default: 'full',
                sm: 208
              },
              height: {
                default: 112,
                sm: 'auto'
              },
              objectFit: 'cover'
            })} />
          <div className={style({
            padding: {
              default: 24,
              sm: 32
            },
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 32
          })}>
            <div className={style({
              display: 'flex',
              flexDirection: 'column',
              rowGap: 32,
              flexGrow: 1
            })}>
              <Heading slot="title" styles={style({
                font: 'heading',
                marginY: 0
              })}>Invite</Heading>
              <TextField label="Name" isRequired />
              <TextField label="Email" isRequired />
            </div>
            <ButtonGroup styles={style({
              marginStart: 'auto'
            })}>
              <Button slot="close" variant="secondary">Cancel</Button>
              <Button variant="accent">Send</Button>
            </ButtonGroup>
          </div>
        </div>
      </CustomDialog>
    </DialogTrigger>
  )
}
