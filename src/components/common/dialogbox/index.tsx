import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface DialogBoxProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: string;
    content?: string
    confirmButtonText?: string
    onConfirmation: () => void;
    clickOutsideToClose?: boolean;
    children?: React.ReactNode;
}

const DialogBox: React.FC<DialogBoxProps> = ({ open = false,
    setOpen = () => { },
    title,
    content,
    confirmButtonText = 'Submit',
    onConfirmation = () => { },
    clickOutsideToClose = false,
    children
}) => {

    const handleClose = (event: any, reason: string) => {
        if (reason === "backdropClick" && !clickOutsideToClose) {
            // Ignore backdrop click
            return;
        }
        setOpen(false); // close on other reasons like 'escapeKeyDown'
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                maxWidth={'sm'}
                fullWidth={true}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {title && <DialogTitle>{title}</DialogTitle>}
                {children && <DialogContent sx={{ minHeight: '350px', height: '400px' }}
                >
                    <DialogContentText id="alert-dialog-slide-description">
                        {children}
                    </DialogContentText>
                </DialogContent>}
                <DialogActions>
                    <Button onClick={() => handleClose(null, '')}>Cancel</Button>
                    <Button onClick={onConfirmation}>{confirmButtonText}</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default DialogBox;