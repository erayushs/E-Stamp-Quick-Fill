//LOCAL STORAGE SAVING
console.log("I am running")

document.getElementById('set').addEventListener('click', myFunction)

function myFunction() {


    let Purchased_by = document.getElementById('TextField6Mand').value;
    let Property_Des = document.getElementById('TextArea8Mand').value;

    let FirstParty = document.getElementById('TextField11Mand').value;
    let FPaddr1 = document.getElementById('TextField12Mand').value;
    let FPaddr2 = document.getElementById('TextField13Mand').value;
    let FPaddr3 = document.getElementById('TextField14Mand').value;
    let FPpinco = document.getElementById('TextField15Mand').value;
    let FPpanno = document.getElementById('TextField16Mand').value;

    let SecondParty = document.getElementById('TextField18Mand').value;
    let SPaddr1 = document.getElementById('TextField19Mand').value;
    let SPaddr2 = document.getElementById('TextField20Mand').value;
    let SPaddr3 = document.getElementById('TextField21Mand').value;
    let SPpinco = document.getElementById('TextField22Mand').value;
    let SPpanno = document.getElementById('TextField23Mand').value;

    let SD_PaidBy = document.getElementById('TextField24Mand').value;
    let SD_amount = document.getElementById('TextField28Mand').value;

    let FP_mob_NO = document.getElementById('fpMobNo').value;
    let FP_mail_ID = document.getElementById('fpEmailId').value;
    let SP_mob_NO = document.getElementById('spMobNo').value;
    let SP_mail_ID = document.getElementById('spEmailId').value;

    VarNameList = [
        Purchased_by, Property_Des, FirstParty, FPaddr1, FPaddr2,
        FPaddr3, FPpinco, FPpanno,
        SecondParty, SPaddr1, SPaddr2, SPaddr3,
        SPpinco, SPpanno, SD_PaidBy, SD_amount,
        FP_mob_NO, FP_mail_ID, SP_mob_NO, SP_mail_ID
    ];

    VarKeyList = [
        'Pkey',
        'Prokey',
        'Fkey', 'F_add_o_key', 'F_add_two_key', 'F_add_thr_key', 'PinF_key', 'PanF_key',
        'Skey', 'S_add_o_key', 'S_add_two_key', 'S_add_thr_key', 'PinS_key', 'PanS_key',
        'SDPBkey', 'SDAkey',
        'FPMkey', 'FPmailkey', 'SPMkey', 'SPmailkey',
    ];

    for (let i = 0; i < 20; i++) {
        localStorage.setItem(`${VarKeyList[i]}`, `${VarNameList[i]}`)
    };
}

/*
//GET FROM LOCAL STORAGE

Purchased_by = document.getElementById('TextField6Mand');
Property_Des = document.getElementById('TextArea8Mand');

FirstParty = document.getElementById('TextField11Mand');
FPaddr1 = document.getElementById('TextField12Mand');
FPaddr2 = document.getElementById('TextField13Mand');
FPaddr3 = document.getElementById('TextField14Mand');
FPpinco = document.getElementById('TextField15Mand');
FPpanno = document.getElementById('TextField16Mand');

SecondParty = document.getElementById('TextField18Mand');
SPaddr1 = document.getElementById('TextField19Mand');
SPaddr2 = document.getElementById('TextField20Mand');
SPaddr3 = document.getElementById('TextField21Mand');
SPpinco = document.getElementById('TextField22Mand');
SPpanno = document.getElementById('TextField23Mand');

SD_PaidBy = document.getElementById('TextField24Mand');
SD_amount = document.getElementById('TextField28Mand');

FP_mob_NO = document.getElementById('fpMobNo');
FP_mail_ID = document.getElementById('fpEmailId');
SP_mob_NO = document.getElementById('spMobNo');
SP_mail_ID = document.getElementById('spEmailId');

VarNameList = [
    Purchased_by, Property_Des, FirstParty, FPaddr1, FPaddr2,
    FPaddr3, FPpinco, FPpanno,
    SecondParty, SPaddr1, SPaddr2, SPaddr3,
    SPpinco, SPpanno, SD_PaidBy, SD_amount,
    FP_mob_NO, FP_mail_ID, SP_mob_NO, SP_mail_ID
];


VarKeyList = [
    'Pkey',
    'Prokey',
    'Fkey', 'F_add_o_key', 'F_add_two_key', 'F_add_thr_key', 'PinF_key', 'PanF_key',
    'Skey', 'S_add_o_key', 'S_add_two_key', 'S_add_thr_key', 'PinS_key', 'PanS_key',
    'SDPBkey', 'SDAkey',
    'FPMkey', 'FPmailkey', 'SPMkey', 'SPmailkey',
];


document.getElementsByTagName('img')[4].onclick = function () {
    for (let i = 0; i < 20; i++) {
        VarNameList[i].value = localStorage.getItem(`${VarKeyList[i]}`)
    };
}


*/