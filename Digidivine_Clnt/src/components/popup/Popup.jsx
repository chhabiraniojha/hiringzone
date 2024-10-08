import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function Popup({
  alertStatus,
  SetAlertStatus,
  alertMessage,
  alertMessageTtype,
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => SetAlertStatus(!alertStatus);

  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog open={alertStatus} handler={handleOpen}>
        <DialogHeader> Alert </DialogHeader>
        <DialogBody
          className={ 
            alertMessageTtype && alertMessageTtype == "success"
              ? "text-green-600  font-semibold"
              : alertMessageTtype == "error"
              ? "text-red-600   font-semibold "
              : "text-black-600  font-semibold " 
               
          }
        >
          {alertMessage}
        </DialogBody>
        <DialogFooter>
          {/* <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button> */}
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default Popup;
