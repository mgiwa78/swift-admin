import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";
const btnClasses = {
  confirmButton:
    "btn d-flex gap-2 justify-content-center align-items-center fw-bold btn-primary",
  closeButton:
    "btn d-flex gap-2 justify-content-center align-items-center fw-bold btn-dander",
  cancelButton:
    "btn d-flex gap-2 justify-content-center align-items-center fw-bold btn-secondary",
};

const useAlert = (
  title: string,
  conFirmText: string,
  onConFirm: any,
  onComplete?: any
) => {
  Swal.fire({
    title: title,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: conFirmText,
    customClass: {
      ...btnClasses,
    },
    denyButtonText: `Don't save`,
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      await onConFirm();
      Swal.fire({
        title: `${onComplete || "Saved!"}`,
        customClass: {
          confirmButton:
            "btn d-flex gap-2 justify-content-center align-items-center fw-bold btn-primary",
          closeButton:
            "btn d-flex gap-2 justify-content-center align-items-center fw-bold btn-dander",
          cancelButton:
            "btn d-flex gap-2 justify-content-center align-items-center fw-bold btn-secondary",
        },
      });
    } else if (result.isDenied) {
      //   Swal.fire("Changes are not saved", "", "info");
    }
  });
};

export default useAlert;
