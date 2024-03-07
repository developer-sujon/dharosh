// export const phoneRegex = /(^(\+88|0088|88)?(01){1}[3456789]{1}(\d){8})$/;
export const phoneRegex = /^(01[3-9]\d{8})$/;
export const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,20}$/;
export const MAX_FILE_SIZE = 500 * 1024; // 500KB
const validFileExtensions = {
  image: ["jpg", "png", "gif", "png", "jpeg", "svg", "webp"],
};

class FormValidation {
  static isEmpty(value) {
    return value.length <= 0;
  }

  static isValidImg(fileName, fileType) {
    return (
      fileName &&
      validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
    );
  }

  static isEmail(value) {
    // eslint-disable-next-line no-useless-escape
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmail.test(value);
  }
  static isMongoId(value) {
    let regexMongodbId = /^[0-9a-fA-F]{24}$/;
    return regexMongodbId.test(value);
  }
  static isMobile(value) {
    let regexMobile = phoneRegex;
    return regexMobile.test(value);
  }
  static validateMongoDBObjectId(id) {
    const pattern = /^[0-9a-fA-F]{24}$/;
    return pattern.test(id);
  }
}

export default FormValidation;
