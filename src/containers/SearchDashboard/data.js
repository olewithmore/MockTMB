/**
 * Created by olewithmore on 6/4/2018.
 */


const classNameTextRight = "text-right";
const classNameTextCenter = "text-center";

let typeGuarantee = [
  { value: 'all', label: 'ทั้งหมด', className: 'State-ACT' },
  { value: '01', label: '000001 ที่ดิน', className: 'State-NSW' },
  { value: '02', label: '000002 อาคารสิ่งปลูกสร้าง', className: 'State-Vic' },
  { value: '03', label: '000003 เครื่องจักร', className: 'State-Qld' },
  { value: '04', label: '000004 ห้องชุด', className: 'State-WA' },
  { value: '05', label: '000005 บัญชีเงินฝาก', className: 'State-SA' }
];

let typeDoc = [
  { value: 'all', label: 'รายการทั้งหมด', className: 'State-ACT' },
  { value: 'new-south-wales', label: 'โฉนด', className: 'State-NSW' },
  { value: 'victoria', label: 'นส 3', className: 'State-Vic' },
  { value: 'queensland', label: 'นส 3 ก.', className: 'State-Qld' },
  { value: 'western-australia', label: 'นส 3 ข.', className: 'State-WA' },
  { value: 'south-australia', label: 'ตราจอง', className: 'State-SA' }
];

let typeStatus = [
  { value: 'all', label: 'รายการทั้งหมด', className: 'State-ACT' },
  { value: 'new', label: 'รายการใหม่', className: 'State-NSW' },
  { value: 'close', label: 'ปิดงาน/ส่งเอกสาร', className: 'State-Vic' }
];

let typeAct = [
  { value: 'all', label: 'รายการทั้งหมด', className: 'State-ACT' },
  { value: 'new', label: 'PREMIER HOUSING LOAN', className: 'State-NSW' }
];

let detailCustomer = [
  { f: "ชื่อ-นามสกุล", s: "นายขอกู้ ธนาคาร"},
  { f: "บัตรประชาชน", s: "3 2456 77890 98 9"},
  { f: "ที่อยู่ตามทะเบียน", s: "59/306 ถ.สวย ต.ในเมือง อ.เมือง จ.นนทบุรี 11000"},
  { f: "สถานะ", s: "โสด"},
  { f: "วัน/เดือน/ปี เกิด", s: "20 มิถุนายน 2520"},
  { f: "อายุ", s: "41 ปี"},
  { f: "อาชีพ", s: "พนักงานบริษัทเอกชน"},
  { f: "คู่สมรส", s: "นางขอกู้ร่วม ธนาคาร"},
  { f: "เบอร์ติดต่อ", s: "096-234-5632"}
];

/******************************* data guarantee detail *******************************/

let detailDataGuarantee = {};

detailDataGuarantee.dataLand = {};

detailDataGuarantee.dataLand.landLeft = [
  { f: "ประเภทเอกสารสิทธิ์", s: "01-โฉนดที่ดิน"},
  { f: "ชื่อผู้ถือกรรมสิทธิ์", s: "นายกรรมสิทธิ์ ที่ดิน"},
  { f: "ประเภทหลักประกัน", s: "286003-ที่ดินเปล่า"},
  { f: "ได้มาโดย", s: "การซื้อ-ขาย"},
  { f: "เนื้อที่", s: "1 ไร่ 1 งาน 37.9 วา"},
  { f: "เลขที่เอกสารสิทธิ์", s: "000001"},
  { f: "วันที่ประเมิน", s: "01/01/2561"},
  { f: "วันที่จดทะเบียนกรมที่ดิน", s: "01/01/2525"}
];

detailDataGuarantee.dataLand.detailOfDeed = [
  { f: "เลขที่โฉนด", s: "236542"},
  { f: "เลขที่ดิน", s: "1234"},
  { f: "เล่ม", s: "1"},
  { f: "ระวาง", s: "5136 IV 6645-10"},
  { f: "หน้าสำรวจ", s: "11000"},
  { f: "หน้า", s: "51"}
];

detailDataGuarantee.dataLand.adminRegion = [
  { f: "รหัสตามเขตปกครอง", s: "120105"},
  { f: "ที่ตั้งเขต", s: "ต.ในเมือง อ.เมือง จ.นนทบุรี 11000"}
];

detailDataGuarantee.dataLand.position = [
  { f: "เลขที่", s: "1"},
  { f: "หมู่บ้าน", s: "-"},
  { f: "ถนน", s: "สะอาด"},
  { f: "อำเภอ/เขต", s: "ในเมือง"},
  { f: "หมู่", s: "-"},
  { f: "ตรอก/ซอย", s: "1"},
  { f: "ตำบล/แขวง", s: "ในเมือง"},
  { f: "จังหวัด", s: "นนทบุรี"}
];

detailDataGuarantee.detailAssetmentLand = {};


detailDataGuarantee.detailEstimate = {};

detailDataGuarantee.detailEstimate.valuationDetails = [];

detailDataGuarantee.detailEstimate.valuationDetails[0] = {};
detailDataGuarantee.detailEstimate.valuationDetails[0].header = [
  "ประเภท",
  "ตรว./ ตรม.ละ (บาท)",
  "เนื้อที่",
  "จำนวนเงิน (บาท)"
];
detailDataGuarantee.detailEstimate.valuationDetails[0].body = [
  {
    td: [
      {
        content: '-',
        classNameTd: classNameTextCenter
      },
      {
        content: '35,000.00',
        classNameTd: classNameTextRight
      },
      {
        content: '100.00',
        classNameTd: classNameTextRight
      },
      {
        content: '3,500,000.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'ราคาประเมินครั้งก่อน เมื่อ 01/01/2018',
        colspan: 4
      }
    ]
  },
  {
    headerClass: "header-in-body",
    td: [
      {
        content: 'ประเภท',
        classNameTd: classNameTextCenter
      },
      {
        content: 'ตรว./ ตรม.ละ (บาท)',
        classNameTd: classNameTextCenter
      },
      {
        content: 'เนื้อที่',
        classNameTd: classNameTextCenter
      },
      {
        content: 'จำนวนเงิน (บาท)',
        classNameTd: classNameTextCenter
      }
    ]
  },
  {
    td: [
      {
        content: 'ที่ดิน'
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'สิ่งปลูกสร้าง'
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'อื่นๆ'
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'รวมราคาประเมินครั้งก่อน',
        classNameTd: classNameTextCenter,
        colspan: 3
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'ราคาประเมินตามสภาพปัจจุบัน เมื่อ 06/01/2018',
        colspan: 4
      }
    ]
  },
  {
    headerClass: "header-in-body",
    td: [
      {
        content: 'ประเภท',
        classNameTd: classNameTextCenter
      },
      {
        content: 'ตรว./ ตรม.ละ (บาท)',
        classNameTd: classNameTextCenter
      },
      {
        content: 'เนื้อที่',
        classNameTd: classNameTextCenter
      },
      {
        content: 'จำนวนเงิน (บาท)',
        classNameTd: classNameTextCenter
      }
    ]
  },
  {
    td: [
      {
        content: 'ที่ดิน'
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '4,000,000.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'สิ่งปลูกสร้าง'
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'อื่นๆ'
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'รวมราคาประเมินมูลค่าตลาด',
        classNameTd: classNameTextCenter,
        colspan: 3
      },
      {
        content: '4,000,000.00',
        classNameTd: classNameTextRight
      }
    ]
  }
];

detailDataGuarantee.detailEstimate.valuationDetails[1] = {};
detailDataGuarantee.detailEstimate.valuationDetails[1].header = [
  "ประเภท",
  "ตรว./ ตรม.ละ (บาท)",
  "เนื้อที่",
  "จำนวนเงิน (บาท)"
];
detailDataGuarantee.detailEstimate.valuationDetails[1].body = [
  {
    td: [
      {
        content: 'ที่ดิน',
        classNameTd: classNameTextCenter
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'สิ่งปลูกสร้าง',
        classNameTd: classNameTextCenter
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'อื่นๆ',
        classNameTd: classNameTextCenter
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'รวมราคาประเมินครั้งก่อน',
        classNameTd: classNameTextCenter,
        colspan: 3
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      }
    ]
  }
];

detailDataGuarantee.detailEstimate.valuationDetails[2] = {};
detailDataGuarantee.detailEstimate.valuationDetails[2].header = [
  "ประเภท",
  "ตรว./ ตรม.ละ (บาท)",
  "เนื้อที่",
  "จำนวนเงิน (บาท)"
];
detailDataGuarantee.detailEstimate.valuationDetails[2].body = [
  {
    td: [
      {
        content: 'ที่ดิน',
        classNameTd: classNameTextCenter
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '4,000,000.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'สิ่งปลูกสร้าง',
        classNameTd: classNameTextCenter
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'อื่นๆ',
        classNameTd: classNameTextCenter
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0.00',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: 'รวมราคาประเมินมูลค่าตลาด',
        classNameTd: classNameTextCenter,
        colspan: 3
      },
      {
        content: '4,000,000.00',
        classNameTd: classNameTextRight
      }
    ]
  }
];

/******************************* data guarantee detail *******************************/


/******************************* data contact detail *******************************/

let detailDataContact = [];

detailDataContact[0] = [];

detailDataContact[0][0] = {
  left: [
    { f: "ลูกค้า", s: "0000001  นายขอกู้ ธนาคาร"},
    { f: "มติครั้งที่", s: "-"},
    { f: "เลขที่งาน", s: "00-1111-4532145"},
    { f: "วันที่อนุมัติ", s: "01/01/2525"},
    { f: "เลขขอประเมิน", s: "AR4563-5432-876"},
    { f: "คณะกรรมการลงวันที่", s: "01/01/2525"}
  ],
  right: [
    { f: "ลูกค้าฝ่าย/สาขา", s: "พหลโยธิน"},
    { f: "วันที่ทำสัญญา", s: "01/01/2525"},
    { f: "คณะกรรมการ", s: "สินเชื่อรายย่อย"},
    { f: "เลขรับ Workflow", s: "55555/2561"}
  ]
};

detailDataContact[0][1] = {};
detailDataContact[0][1].header = [
  "ลำดับ",
  "ประเภทสัญญา",
  "วงเงินกู้ (บาท)",
  "เลขที่บัญชี"
];
detailDataContact[0][1].body = [
  {
    td: [
      {
        content: '1'
      },
      {
        content: 'PREMIER HOUSING LOAN'
      },
      {
        content: '3,000,000.00',
        classNameTd: classNameTextRight
      },
      {
        content: '0134323456',
        classNameTd: classNameTextCenter
      }
    ]
  }
];

detailDataContact[0][2] = {};
detailDataContact[0][2].header = [
  "ลำดับ",
  "เลขที่โฉนด/เอกสารสิทธิ์",
  "ประเภทหลักประกัน",
  "สถานะไถ่ถอน",
  "ราคาประเมิน (บาท)",
  "รหัสหลักประกัน",
  "รายละเอียดหลักประกัน",
];
detailDataContact[0][2].body = [
  {
    td: [
      {
        content: '1',
      },
      {
        content: '345656',
      },
      {
        content: 'ที่ดินเปล่า',
      },
      {
        content: 'N',
      },
      {
        content: '5,000,000.00',
        classNameTd: classNameTextRight
      },
      {
        content: '00000001',
      },
      {
        content: 'โฉนดที่ดิน ต.ในเมือง อ.เมือง จ.เชียงใหม่ 12345',
      }
    ]
  }
];


detailDataContact[1] = [];

detailDataContact[1][0] = {};
detailDataContact[1][0].header = [
  "ลำดับ",
  "ชื่อ",
  "บัตรประชาชน / เลขนิติบุคคล",
  "นิติบุคคล",
  "ที่อยู่ตามทะเบียน",
  "ชื่อคู่สมรส",
];
detailDataContact[1][0].body = [
  {
    td: [
      {
        content: '1',
      },
      {
        content: 'นายขอกู้ ธนาคาร'
      },
      {
        content: '3 2456 77890 98 7',
        classNameTd: classNameTextCenter
      },
      {
        content: 'ไม่ใช่',
        classNameTd: classNameTextCenter
      },
      {
        content: '59/306 ถ.สวย ต.ในเมือง อ.เมือง จ.นนทบุรี 1100'
      },
      {
        content: 'นางขอกู้ร่วม ธนาคาร'
      }
    ]
  },
  {
    td: [
      {
        content: '2',
      },
      {
        content: 'นางขอกู้ร่วม ธนาคาร'
      },
      {
        content: '3 2456 77890 98 8',
        classNameTd: classNameTextCenter
      },
      {
        content: 'ไม่ใช่',
        classNameTd: classNameTextCenter
      },
      {
        content: '59/306 ถ.สวย ต.ในเมือง อ.เมือง จ.นนทบุรี 1100'
      },
      {
        content: 'นายขอกู้ ธนาคาร'
      }
    ]
  }
];


detailDataContact[2] = [];

detailDataContact[2][0] = {};
detailDataContact[2][0].header = [
  "ลำดับ",
  "ประเภท",
  "วงเงินนิติกรรม (บาท)",
  "วงเงิน (บาท)"
];
detailDataContact[2][0].body = [
  {
    td: [
      {
        content: '1'
      },
      {
        content: 'จำนองเป็นประกัน'
      },
      {
        content: '3,100,000.00',
        classNameTd: classNameTextRight
      },
      {
        content: '3,100,000.00',
        classNameTd: classNameTextRight
      }
    ]
  }
];

detailDataContact[2][1] = {
  left: [
    { f: "วันที่จำนอง", s: "วันที่จำนอง"},
    { f: "วงเงินจำนอง", s: "3100000.00"},
    { f: "สำนักงานที่ดินจังหวัด", s: "นนทบุรี"},
    { f: "สาขา", s: "นนทบุรี"},
  ]
};

detailDataContact[2][2] = {};
detailDataContact[2][2].header = [];
detailDataContact[2][2].header[0] = [
  {
    text: "ลำดับ",
    ill: false
  },
  {
    text: "เลขที่โฉนด/เอกสารสิทธิ์",
    ill: true,
    n: 2
  },
  {
    text: "ประเภทหลักประกัน",
    ill: false
  },
  {
    text: "รายละเอียดหลักประกัน",
    ill: false
  },
  {
    text: "รหัสหลักประกัน",
    ill: false
  },
  {
    text: "รหัสหลักประกันย่อย",
    ill: false
  }
];
detailDataContact[2][2].header[1] = [
  "หลักประกันหลัก",
  "หลักประกันย่อย"
];
detailDataContact[2][2].body = [
  {
    td: [
      {
        content: '1'
      },
      {
        content: '236852'
      },
      {
        content: '236852'
      },
      {
        content: 'โฉนดที่ดิน'
      },
      {
        content: 'โฉนดที่ดิน  236852 ต.ในมือง อ.เมือง จ.นนทบุรี 11000',
      },
      {
        content: 'PR001-000000001',
        classNameTd: classNameTextCenter
      },
      {
        content: 'PR001-000000001',
        classNameTd: classNameTextCenter
      }
    ]
  }
];


detailDataContact[4] = [];

detailDataContact[4][0] = {};
detailDataContact[4][0].header = [];
detailDataContact[4][0].header[0] = [
  {
    text: "ลำดับ",
    ill: false
  },
  {
    text: "เลขที่เอกสาร",
    ill: false
  },
  {
    text: "เอกสาร",
    ill: true,
    n: 3
  },
  {
    text: "รายการเอกสาร",
    ill: false
  },
  {
    text: "เอกสาร",
    ill: true,
    n: 3
  }
];
detailDataContact[4][0].header[1] = [
  "ประเภทหลัก",
  "ประเภทย่อย",
  "ชื่อไฟล์",
  "ต้นฉบับ",
  "สำเนา",
  "รวม",
];
detailDataContact[4][0].body = [
  {
    td: [
      {
        content: '1'
      },
      {
        content: 'DOC000001'
      },
      {
        content: 'สัญญากู้เงินต่าง ๆ'
      },
      {
        content: 'สัญญากู้เงิน'
      },
      {
        content: '2018-DOC000001.pdf'
      },
      {
        content: 'สัญญากู้เงินเพื่อผู้บริโภค'
      },
      {
        content: '1',
        classNameTd: classNameTextRight
      },
      {
        content: '1',
        classNameTd: classNameTextRight
      },
      {
        content: '2',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: '2'
      },
      {
        content: 'DOC000002'
      },
      {
        content: 'หนังสือยินยอมต่าง ๆ'
      },
      {
        content: 'บันทึกข้อตกลงสินเชื่อ'
      },
      {
        content: '2018-DOC000002.pdf'
      },
      {
        content: 'บันทึกข้อตกลงสินเชื่อ'
      },
      {
        content: '2',
        classNameTd: classNameTextRight
      },
      {
        content: '1',
        classNameTd: classNameTextRight
      },
      {
        content: '3',
        classNameTd: classNameTextRight
      }
    ]
  }
];


detailDataContact[4][1] = {};
detailDataContact[4][1].header = [];
detailDataContact[4][1].header[0] = [
  {
    text: "ลำดับ",
    ill: false
  },
  {
    text: "เลขที่เอกสารสิทธิ์",
    ill: false
  },
  {
    text: "หลักประกัน",
    ill: true,
    n: 2
  },
  {
    text: "รายการเอกสาร",
    ill: false
  },
  {
    text: "เอกสาร",
    ill: true,
    n: 3
  }
];
detailDataContact[4][1].header[1] = [
  "ประเภทหลัก",
  "ประเภทย่อย",
  "ชื่อไฟล์",
  "ต้นฉบับ",
  "สำเนา",
  "รวม",
];
detailDataContact[4][1].body = [
  {
    td: [
      {
        content: '1'
      },
      {
        content: 'H4350/M004'
      },
      {
        content: 'จดทะเบียนสิทธินิติกรรมจำนอง'
      },
      {
        content: 'หนังสือจำนองสัญญาที่ดิน'
      },
      {
        content: '2018-H4350-M004.pdf'
      },
      {
        content: 'หนังสือสัญญาจำนองที่ดิน'
      },
      {
        content: '1',
        classNameTd: classNameTextRight
      },
      {
        content: '1',
        classNameTd: classNameTextRight
      },
      {
        content: '2',
        classNameTd: classNameTextRight
      }
    ]
  },
  {
    td: [
      {
        content: '2'
      },
      {
        content: 'H4350/M005'
      },
      {
        content: 'จดทะเบียนสิทธินิติกรรมจำนอง'
      },
      {
        content: 'บันทึกต่อท้ายสัญญาจำนองเป็นประกัน'
      },
      {
        content: '2018-H4350-M005.pdf'
      },
      {
        content: 'บันทึกต่อท้ายสัญญาจำนองเป็นประกัน'
      },
      {
        content: '2',
        classNameTd: classNameTextRight
      },
      {
        content: '1',
        classNameTd: classNameTextRight
      },
      {
        content: '3',
        classNameTd: classNameTextRight
      }
    ]
  }
];

/******************************* data contact detail *******************************/

let mainDataTableGuarantee = {};

mainDataTableGuarantee.header = [
  "ลำดับ",
  "รหัสหลักประกัน",
  "ที่ตั้ง",
  "ราคาประเมินล่าสุด",
  "วันครบกำหนดประเมิน",
  "ประเภทหลักประกัน",
  "รายละเอียด"
];

mainDataTableGuarantee.body = [
    {
      dataTip: true,
      dataTipFor: 'detailGuarantee',
      td: [
        {
          content: "1"
        },
        {
          content: "PR0001"
        },
        {
          content: "1 ถ.หนองน้ำ ต.ในเมือง อ.เมือง จ.เชียงราย 10170"
        },
        {
          content: "10,000,000.00",
          classNameTd: classNameTextRight
        },
        {
          content: "01/01/2561",
          classNameTd: classNameTextCenter
        },
        {
          content: "000001 ที่ดิน"
        },
        {
          content: "searchIcon",
          classNameTd: classNameTextCenter
        }
      ]
    },
  {
    td: [
      {
        content: "2"
      },
      {
        content: "PR0002"
      },
      {
        content: "1 ถ.หนองน้ำ ต.ในเมือง อ.เมือง จ.เชียงราย 10170"
      },
      {
        content: "5,000,000.00",
        classNameTd: classNameTextRight
      },
      {
        content: "01/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "000001 ที่ดิน"
      },
      {
        content: "searchIcon",
        classNameTd: classNameTextCenter
      }
    ]
  },
  {
    td: [
      {
        content: "3"
      },
      {
        content: "PR0003"
      },
      {
        content: "1 ถ.หนองน้ำ ต.ในเมือง อ.เมือง จ.เชียงราย 10170"
      },
      {
        content: "7,000,000.00",
        classNameTd: classNameTextRight
      },
      {
        content: "01/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "000001 ที่ดิน"
      },
      {
        content: "searchIcon",
        classNameTd: classNameTextCenter
      }
    ]
  },
  {
    td: [
      {
        content: "4"
      },
      {
        content: "PR0004"
      },
      {
        content: "1 ถ.หนองน้ำ ต.ในเมือง อ.เมือง จ.เชียงราย 10170"
      },
      {
        content: "2,000,000.00",
        classNameTd: classNameTextRight
      },
      {
        content: "01/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "000001 ที่ดิน"
      },
      {
        content: "searchIcon",
        classNameTd: classNameTextCenter
      }
    ]
  },
  {
    td: [
      {
        content: "5"
      },
      {
        content: "PR0005"
      },
      {
        content: "1 ถ.หนองน้ำ ต.ในเมือง อ.เมือง จ.เชียงราย 10170"
      },
      {
        content: "600,000.00",
        classNameTd: classNameTextRight
      },
      {
        content: "01/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "000001 ที่ดิน"
      },
      {
        content: "searchIcon",
        classNameTd: classNameTextCenter
      }
    ]
    }
];


let mainDataTableContact = {};

mainDataTableContact.header = [
  "ลำดับ",
  "เลขที่งาน",
  "วันที่ทำสัญญา",
  "วันที่อนุมัติ",
  "วงเงินกู้",
  "คณะกรรมการ",
  "เลขขอประเมิน",
  "CA No.",
  "เลขรับ Workflow",
  "คณะกรรมการลงวันที่",
  "รายละเอียด"
];

mainDataTableContact.body = [
  {
    dataTip: true,
    dataTipFor: 'detailContact',
    td: [
      {
        content: "1",
      },
      {
        content: "53-4310-00001",
      },
      {
        content: "01/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "10/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "5,000,000.00",
        classNameTd: classNameTextRight
      },
      {
        content: "สินเชื่อรายย่อย",
        classNameTd: classNameTextCenter
      },
      {
        content: "AR-000001"
      },
      {
        content: "000010153"
      },
      {
        content: "1111/2561"
      },
      {
        content: "10/01/25561",
        classNameTd: classNameTextCenter
      },
      {
        content: "searchIcon",
        classNameTd: classNameTextCenter
      }
    ]
  },
  {
    td: [
      {
        content: "2",
      },
      {
        content: "53-4310-00002",
      },
      {
        content: "01/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "10/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "8,000,000.00",
        classNameTd: classNameTextRight
      },
      {
        content: "สินเชื่อรายย่อย",
        classNameTd: classNameTextCenter
      },
      {
        content: "AR-000002"
      },
      {
        content: "000010153"
      },
      {
        content: "1111/2561"
      },
      {
        content: "10/01/25561",
        classNameTd: classNameTextCenter
      },
      {
        content: "searchIcon",
        classNameTd: classNameTextCenter
      }
    ]
  },
  {
    td: [
      {
        content: "3",
      },
      {
        content: "53-4310-00003",
      },
      {
        content: "01/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "10/01/2563",
        classNameTd: classNameTextCenter
      },
      {
        content: "7,000,000.00",
        classNameTd: classNameTextRight
      },
      {
        content: "สินเชื่อรายย่อย",
        classNameTd: classNameTextCenter
      },
      {
        content: "AR-000001"
      },
      {
        content: "000010153"
      },
      {
        content: "1111/2561"
      },
      {
        content: "10/01/25561",
        classNameTd: classNameTextCenter
      },
      {
        content: "searchIcon",
        classNameTd: classNameTextCenter
      }
    ]
  },
  {
    td: [
      {
        content: "4",
      },
      {
        content: "53-4310-00004",
      },
      {
        content: "01/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "10/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "9,000,000.00",
        classNameTd: classNameTextRight
      },
      {
        content: "สินเชื่อรายย่อย",
        classNameTd: classNameTextCenter
      },
      {
        content: "AR-000004"
      },
      {
        content: "000010153"
      },
      {
        content: "1111/2561"
      },
      {
        content: "10/01/25561",
        classNameTd: classNameTextCenter
      },
      {
        content: "searchIcon",
        classNameTd: classNameTextCenter
      }
    ]
  },
  {
    td: [
      {
        content: "5",
      },
      {
        content: "53-4310-00005",
      },
      {
        content: "01/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "10/01/2561",
        classNameTd: classNameTextCenter
      },
      {
        content: "500,000.00",
        classNameTd: classNameTextRight
      },
      {
        content: "สินเชื่อรายย่อย",
        classNameTd: classNameTextCenter
      },
      {
        content: "AR-000005"
      },
      {
        content: "000010153"
      },
      {
        content: "1111/2561"
      },
      {
        content: "10/01/25561",
        classNameTd: classNameTextCenter
      },
      {
        content: "searchIcon",
        classNameTd: classNameTextCenter
      }
    ]
  }
];

export default {
  typeGuarantee,
  typeDoc,
  typeStatus,
  typeAct,
  detailCustomer,
  detailDataGuarantee,
  detailDataContact,
  mainDataTableGuarantee,
  mainDataTableContact
};