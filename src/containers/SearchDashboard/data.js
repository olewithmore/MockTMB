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

detailDataContact[0] = {};


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
  mainDataTableGuarantee,
  mainDataTableContact
};