const createSubmission =
  document.getElementsByTagName("tbody")[10].innerText ===
  "E-Stamping - Create Submission";

const editSubmission =
  document.getElementsByTagName("tbody")[10].innerText ===
  "E-Stamping - Edit Submission";

const getElement = (id) => {
  if (createSubmission || editSubmission) {
    return document.getElementById(`TextField${id}Mand`);
  } else {
    return document.querySelector(
      `input[type="hidden"][name="TextField${id}"]`
    );
  }
};

const getAreaElement = (id) => {
  if (createSubmission || editSubmission) {
    return document.getElementById(`TextArea${id}Mand`);
  } else {
    return document.querySelector(`input[type="hidden"][name="TextArea${id}"]`);
  }
};

const getContactElement = (id) => document.getElementById(id);

let obj = {
  purchaser: getElement(6).value,
  documentDes: getAreaElement(8).value,
  considerationP: getElement(9).value,
  f_name: getElement(11).value,
  f_ad1: getElement(12).value,
  f_ad2: getElement(13).value,
  f_ad3: getElement(14).value,
  f_pinC: getElement(15).value,
  f_pan: getElement(16).value,
  s_name: getElement(18).value,
  s_ad1: getElement(19).value,
  s_ad2: getElement(20).value,
  s_ad3: getElement(21).value,
  s_pinC: getElement(22).value,
  s_pan: getElement(23).value,
  paidBy: getElement(24).value,
  amount: getElement(28).value,
  f_mobile: getContactElement("fpMobNo").value,
  f_email: getContactElement("fpEmailId").value,
  s_mobile: getContactElement("spMobNo").value,
  s_email: getContactElement("spEmailId").value,
};

localStorage.setItem("data", JSON.stringify(obj));
