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

export default {
  typeGuarantee,
  typeDoc,
  typeStatus,
  typeAct
};