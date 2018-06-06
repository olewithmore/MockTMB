/**
 * Created by olewithmore on 6/4/2018.
 */
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
];

detailDataGuarantee.dataLand.landRight = [
  { f: "เลขที่เอกสารสิทธิ์", s: "000001"},
  { f: "วันที่ประเมิน", s: "01/01/2561"},
  { f: "วันที่จดทะเบียนกรมที่ดิน", s: "01/01/2525"}
];

detailDataGuarantee.detailLand = {};

detailDataGuarantee.detailAssetmentLand = {};

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
      '1',
      'PREMIER HOUSING LOAN',
      '3000000',
      '0134323456'
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
      '1',
      '345656',
      'ที่ดินเปล่า',
      'N',
      '5000000',
      '00000001',
      'โฉนดที่ดิน ต.ในเมือง อ.เมือง จ.เชียงใหม่ 12345',
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
      '1',
      'นายขอกู้ ธนาคาร',
      '3 2456 77890 98 7',
      'ไม่ใช่',
      '59/306 ถ.สวย ต.ในเมือง อ.เมือง จ.นนทบุรี 1100',
      'นางขอกู้ร่วม ธนาคาร'
    ]
  },
  {
    td: [
      '2',
      'นางขอกู้ร่วม ธนาคาร',
      '3 2456 77890 98 8',
      'ไม่ใช่',
      '59/306 ถ.สวย ต.ในเมือง อ.เมือง จ.นนทบุรี 1100',
      'นายขอกู้ ธนาคาร'
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
      '1',
      'จำนองเป็นประกัน',
      '3,100,000',
      '3,100,000'
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
      '1',
      '236852',
      '236852',
      'โฉนดที่ดิน',
      'โฉนดที่ดิน  236852 ต.ในมือง อ.เมือง จ.นนทบุรี 11000',
      'PR001-000000001',
      'PR001-000000001',
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
      '1',
      'DOC000001',
      'สัญญากู้เงินต่าง ๆ',
      'สัญญากู้เงิน',
      '2018-DOC000001.xls',
      'สัญญากู้เงินเพื่อผู้บริโภค',
      '1',
      '1',
      '2'
    ]
  },
  {
    td: [
      '2',
      'DOC000002',
      'สหนังสือยินยอมต่าง ๆ',
      'บันทึกข้อตกลงสินเชื่อ',
      '2018-DOC000002.xls',
      'บันทึกข้อตกลงสินเชื่อ',
      '2',
      '1',
      '3'
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
      '1',
      'H4350/M004',
      'จดทะเบียนสิทธินิติกรรมจำนอง',
      'หนังสือจำนองสัญญาที่ดิน',
      '2018-H4350-M004.xls',
      'หนังสือสัญญาจำนองที่ดิน',
      '1',
      '1',
      '2'
    ]
  },
  {
    td: [
      '2',
      'H4350/M005',
      'จดทะเบียนสิทธินิติกรรมจำนอง',
      'บันทึกต่อท้ายสัญญาจำนองเป็นประกัน',
      '2018-H4350-M005.xls',
      'บันทึกต่อท้ายสัญญาจำนองเป็นประกัน',
      '2',
      '1',
      '3'
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
  "ประเภทหลักประกัน"
];

mainDataTableGuarantee.body = [
    {
      dataTip: true,
      dataTipFor: 'detailGuarantee',
      td: [
        '1',
        'PR0001',
        '1 ถ.หนองน้ำ ต.ในเมือง อ.เมือง จ.เชียงราย 10170',
        '10,000,000',
        '01/01/2561',
        '000001 ที่ดิน'
      ]
    },
    {
      td: [
        '2',
        'PR0002',
        '2 ถ.หนองน้ำ ต.ในเมือง อ.เมือง จ.เชียงราย 10170',
        '5,000,000',
        '01/01/2561',
        '000001 ที่ดิน'
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
  "คณะกรรมการลงวันที่"
];

mainDataTableContact.body = [
  {
    dataTip: true,
    dataTipFor: 'detailContact',
    td: [
      "1",
      "53-4310-00001",
      "01/01/2561",
      "10/01/25561",
      "5,000,000",
      "สินเชื่อรายย่อย",
      "AR-000001",
      "000010153",
      "1111/2561",
      "10/01/25561"
    ]
  },
  {
    td: [
      "2",
      "53-4310-00001",
      "01/01/2561",
      "10/01/25561",
      "5,000,000",
      "สินเชื่อรายย่อย",
      "AR-000002",
      "000010153",
      "1111/2561",
      "10/01/25561"
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