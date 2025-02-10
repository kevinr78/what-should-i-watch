import { toast } from "react-toastify";

const showSuccessToast = function (msg: string) {
  toast.success(msg);
};

const showErrorToast = function (msg: string) {
  toast.error(msg);
};

const showInfoToast = function (msg: string) {
  toast.info(msg);
};

export { showErrorToast, showSuccessToast, showInfoToast };
