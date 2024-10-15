const getElement = (id) => document.getElementById(`TextField${id}Mand`);

const getAreaElement = (id) => document.getElementById(`TextArea${id}Mand`);

const getContactElement = (id) => document.getElementById(id);

let data = JSON.parse(localStorage.getItem("data"));

if (data) {
  getElement(6).value = data.purchaser;
  getAreaElement(8).value = data.documentDes;
  getElement(9).value = data.considerationP;
  getElement(11).value = data.f_name;
  getElement(12).value = data.f_ad1;
  getElement(13).value = data.f_ad2;
  getElement(14).value = data.f_ad3;
  getElement(15).value = data.f_pinC;
  getElement(16).value = data.f_pan;
  getElement(18).value = data.s_name;
  getElement(19).value = data.s_ad1;
  getElement(20).value = data.s_ad2;
  getElement(21).value = data.s_ad3;
  getElement(22).value = data.s_pinC;
  getElement(23).value = data.s_pan;
  getElement(24).value = data.paidBy;
  getElement(28).value = data.amount;
  getContactElement("fpMobNo").value = data.f_mobile;
  getContactElement("fpEmailId").value = data.f_email;
  getContactElement("spMobNo").value = data.s_mobile;
  getContactElement("spEmailId").value = data.s_email;
} else {
  alert("No data found");
}
