import { Dialog } from '@base-ui/react/dialog';
import {useDialogState} from './consts';
import {demoDialog} from './Handler';

import style from './style.module.css'

export function DialogUI() {
  const {open, triggerId, handleOpenChange
  } = useDialogState();

  return (
    <>
    <Dialog.Root
      handle={demoDialog}
      open={open}
      onOpenChange={handleOpenChange}
      triggerId={triggerId}
    >
      {({ payload }) => (
        <Dialog.Portal>
          <Dialog.Backdrop className={style.backdrop} />
          <Dialog.Popup className={style.content}>
            {payload !== undefined && (
              <Dialog.Viewport>{payload}</Dialog.Viewport>
            )}
          </Dialog.Popup>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  </>
);
}


