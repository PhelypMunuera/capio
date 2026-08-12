import { useDialogState } from './consts';
import { Dialog } from '@base-ui/react/dialog';
import { demoDialog } from './Handler';
import penscilLine from '../../assets/pencil-line.svg';
import trash from '../../assets/trash.svg';
import { DeleteEmployee } from '../DeleteEmployee';
import { EditEmployee } from '../EditEmployee'

export function Trigger(){
    const {setOpen, setTriggerId} = useDialogState();
    return(
    <div >
      <Dialog.Trigger  handle={demoDialog} id="edit" payload={<EditEmployee/>}>
        <button type="button" onClick={() => {setTriggerId('edit'); setOpen(true);}}>
            <img src={penscilLine} alt="Icone para editar" />
        </button>
      </Dialog.Trigger>

      <Dialog.Trigger  handle={demoDialog} id="delete" payload={<DeleteEmployee/>}>
        <button type="button" onClick={() => {setTriggerId('delete'); setOpen(true);}}>
            <img src={trash} alt="Icone para excluir" />
        </button>
      </Dialog.Trigger>
    </div>
    )
  }
