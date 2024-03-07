import cogoToast from "cogo-toast";

const success = (msg) => cogoToast.success(msg || "This is a success message");
const info = (msg) => cogoToast.info(msg || "This is a success message");
const warn = (msg) => cogoToast.warn(msg || "This is a success message");
const loading = (msg) => cogoToast.loading(msg || "This is a success message");
const error = (msg) => cogoToast.error(msg || "This is a success message");

export { error, info, loading, success, warn };
