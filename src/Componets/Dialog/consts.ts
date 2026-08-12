import type { Dialog } from '@base-ui/react';
import { useState } from 'react';

export function useDialogState(){
    const [open, setOpen] = useState(false);
    const [triggerId, setTriggerId] = useState<string | null>(null);

    function handleOpenChange (isOpen: boolean, eventDetails: Dialog.Root.ChangeEventDetails)  {
        setOpen(isOpen);
        setTriggerId(eventDetails.trigger?.id ?? null)
    }
    return {
        open,
        setOpen,
        triggerId,
        setTriggerId,
        handleOpenChange,
      };
}
    
 
