// ══════════════════════════════════════════
//  ABAYA STUDIO — Complete App Logic
// ══════════════════════════════════════════

// ── STATE ──────────────────────────────────
var lang = 'ar';
var DB = {
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  abayas: [
    { id: 1, name: 'عباية كلوش كلاسيك', nameEn: 'Classic Klosh', sku: 'AB-001', price: 320, cost: 180, fabric: 'كريب', color: 'أسود', minAlert: 10, imgs: [], stock: { S: 45, M: 62, L: 28, XL: 7, XXL: 0 } },
    { id: 2, name: 'عباية فراشة مطرزة', nameEn: 'Embroidered Farasha', sku: 'AB-002', price: 480, cost: 240, fabric: 'جورجيت', color: 'عاجي', minAlert: 8, imgs: [], stock: { S: 0, M: 14, L: 20, XL: 4, XXL: 0 } },
    { id: 3, name: 'عباية بحرينية سادة', nameEn: 'Plain Bahraini', sku: 'AB-003', price: 280, cost: 140, fabric: 'نيدا', color: 'كحلي', minAlert: 10, imgs: [], stock: { S: 18, M: 35, L: 42, XL: 12, XXL: 5 } }
  ],
  fabrics: [
    { id: 1, name: 'قماش كريب أسود', nameEn: 'Black Crepe', sku: 'FK-001', qty: 320, unit: 'متر', minAlert: 50, supplier: 'الخليجي', perSize: { S: 3.5, M: 4, L: 4.5, XL: 5, XXL: 5.5 } },
    { id: 2, name: 'قماش جورجيت رمادي', nameEn: 'Gray Georgette', sku: 'FK-002', qty: 45, unit: 'متر', minAlert: 50, supplier: 'النسيج التركي', perSize: { S: 3, M: 3.5, L: 4, XL: 4.5, XXL: 5 } },
    { id: 3, name: 'قماش نيدا كحلي', nameEn: 'Navy Nida', sku: 'FK-003', qty: 180, unit: 'متر', minAlert: 40, supplier: 'الخليجي', perSize: { S: 4, M: 4.5, L: 5, XL: 5.5, XXL: 6 } },
    { id: 4, name: 'أكياس تغليف مطبوعة', nameEn: 'Printed Bags', sku: 'PK-001', qty: 12, unit: 'قطعة', minAlert: 50, supplier: 'التغليف الذهبي', perSize: {} },
    { id: 5, name: 'علب هدايا فاخرة', nameEn: 'Luxury Gift Boxes', sku: 'PK-002', qty: 200, unit: 'قطعة', minAlert: 30, supplier: 'التغليف الذهبي', perSize: {} }
  ],
  tailors: [
    { id: 1, name: 'أبو محمد', nameEn: 'Abu Mohammed', phone: '0559000001', spec: 'كلوش · فراشة', cap: 5, rating: 4.8, onTime: 94, orders: 2 },
    { id: 2, name: 'أبو خالد', nameEn: 'Abu Khaled', phone: '0559000002', spec: 'مطرز · بحريني', cap: 8, rating: 4.9, onTime: 98, orders: 0 },
    { id: 3, name: 'ورشة النور', nameEn: 'Al-Nour Workshop', phone: '0559000003', spec: 'جميع الأنواع', cap: 20, rating: 4.5, onTime: 89, orders: 1 }
  ],
  orders: [
    { id: 104, abayaId: 1, abayaName: 'كلوش كلاسيك', tailorId: 1, tailorName: 'أبو محمد', phone: '0559000001', sizes: { S: 5, M: 8, L: 5, XL: 2 }, deadline: '2025-05-28', cost: 3600, done: 12, total: 20, status: 'late', notes: '' },
    { id: 105, abayaId: 3, abayaName: 'بحرينية سادة', tailorId: 2, tailorName: 'أبو خالد', phone: '0559000002', sizes: { M: 5, L: 6, XL: 4 }, deadline: '2025-06-05', cost: 2100, done: 3, total: 15, status: 'progress', notes: '' }
  ],
  invoices: [
    { id: 1, supplier: 'مورد الأقمشة الخليجي', desc: 'كريب 200م', amount: 8400, date: '2025-05-28', status: 'paid' },
    { id: 2, supplier: 'التغليف الذهبي', desc: 'أكياس + علب', amount: 2200, date: '2025-06-01', status: 'pending' },
    { id: 3, supplier: 'مورد نيدا تركي', desc: 'نيدا 300م', amount: 15600, date: '2025-06-02', status: 'late' }
  ],
  transfers: [
    { id: 1, from: 'المستودع الرئيسي', to: 'فرع الرياض', product: 'كلوش كلاسيك', size: 'M', qty: 30, date: '2025-06-01', status: 'done' },
    { id: 2, from: 'المستودع الرئيسي', to: 'فرع جدة', product: 'بحرينية سادة', size: 'L', qty: 30, date: '2025-06-03', status: 'transit' }
  ],
  settings: { company: 'شركتي', phone: '' }
};

// ── TRANSLATIONS ──────────────────────────
var T = {
  ar: {
    home:'الرئيسية',abayas:'العبايات',fabric:'الأقمشة',orders:'الإنتاج',tailors:'الخياطون',transfer:'النقل',barcode:'باركود',invoices:'الفواتير',reports:'تقارير',settings:'الإعدادات',
    total_ab:'إجمالي العبايات',all_branches:'جميع الفروع',stock_val:'قيمة المخزون',sar:'ر.س',prod_orders:'طلبات إنتاج',in_prog:'قيد التنفيذ',low_stock:'مخزون منخفض',need_reorder:'يحتاج تجديد',
    alerts:'تنبيهات',branches:'الفروع',size_sys:'نظام المقاسات — اكتب ما تريد',products:'المنتجات',all:'الكل',klosh:'كلوش',farasha:'فراشة',bahraini:'بحرينية',
    add_abaya:'إضافة عباية جديدة',add:'إضافة',fabric_stock:'مخزون الأقمشة',fabric_calc_title:'احتساب الأقمشة لطلب جديد',
    select_abaya_calc:'اختر العباية',auto_calc:'احتساب تلقائي',required_fabric:'المطلوب',in_stock:'المتوفر',remaining:'المتبقي',total_units:'إجمالي العبايات',
    add_material:'إضافة قماش / مستهلكات',active_orders:'الطلبات النشطة',new_order:'طلب إنتاج جديد',
    tailors_list:'قائمة الخياطين',add_tailor:'إضافة خياط جديد',cur_orders:'طلبات',commit:'الالتزام',rating:'التقييم',
    new_transfer:'نقل مخزون بين الفروع',transfer_history:'سجل النقل',from_branch:'من فرع',to_branch:'إلى فرع',
    main_warehouse:'المستودع الرئيسي',riyadh_branch:'فرع الرياض',jeddah_branch:'فرع جدة',dammam_branch:'فرع الدمام',
    bc_type:'نوع الباركود',bc_sale:'باركود البيع',bc_sale_sub:'عباية + مقاس + سعر',bc_cons:'المستهلكات',bc_cons_sub:'تغليف + مواد',bc_fab:'الأقمشة',bc_fab_sub:'قماش + كمية',bc_ship:'شحن ونقل',bc_ship_sub:'شحنة + وجهة',
    select_product:'اختر المنتج',size:'المقاس',copies:'عدد النسخ',branch:'الفرع',print_bc:'طباعة الباركود',scan_bc:'مسح باركود',
    all:'الكل',pending:'معلقة',paid:'مدفوعة',late_p:'متأخرة',add_inv:'إضافة فاتورة',
    financial_summary:'ملخص مالي',reports_sec:'التقارير',permissions:'المستخدمون والصلاحيات',
    rpt1:'مخزون بالمقاسات والفروع',rpt1s:'كل مقاس في كل فرع',rpt2:'تكاليف الإنتاج والأرباح',rpt2s:'تكلفة + هامش لكل تصميم',rpt3:'أداء الخياطين',rpt3s:'إنتاج والتزام بالمواعيد',rpt4:'النقل بين الفروع',rpt4s:'شحنات الدخول والخروج',
    company_info:'معلومات الشركة',company_name:'اسم الشركة',company_phone:'رقم الهاتف',data_mgmt:'إدارة البيانات',export_data:'تصدير كل البيانات (JSON)',clear_data:'مسح كل البيانات',
    abaya_name:'اسم العباية',price:'السعر (ر.س)',fabric_type:'نوع القماش',color:'اللون',prod_cost:'تكلفة الإنتاج (ر.س)',min_alert:'حد التنبيه',sizes_qty:'المقاسات والكميات',product_imgs:'صور المنتج',drag_imgs:'اسحب الصور أو اضغط للرفع',main_img:'رئيسية',save:'حفظ',cancel:'إلغاء',
    mat_name:'الاسم',qty:'الكمية',unit:'الوحدة',supplier:'المورد',fabric_per_size:'استهلاك القماش لكل مقاس',meter:'متر',piece:'قطعة',spool:'بكرة',kg:'كيلو',
    select_tailor:'اختر الخياط',tailor_phone:'رقم الخياط (واتساب)',deadline:'موعد التسليم',notes:'ملاحظات',save_send:'حفظ وإرسال للخياط',
    tailor_name:'الاسم',speciality:'التخصص',capacity:'الطاقة الإنتاجية اليومية (قطعة)',
    product:'المنتج',ship_date:'تاريخ الشحن',confirm_transfer:'تأكيد النقل',
    inv_desc:'البيان',amount:'المبلغ (ر.س)',inv_date:'التاريخ',status:'الحالة',
    wa_ready:'رسالة الخياط — جاهزة',send_wa:'إرسال للخياط عبر واتساب',late:'متأخر',in_progress_tag:'جاري',done_tag:'مكتمل',transit:'في الطريق',
    sufficient:'كافي',low:'منخفض',out:'نفذ',active:'نشط',busy:'مشغول',available:'متاح',full:'ممتلئ',
    abaya_val:'قيمة مخزون العبايات',fabric_val:'قيمة الأقمشة',prod_cost_tot:'تكاليف الإنتاج الكلية',inv_total:'إجمالي الفواتير المعلقة',grand_total:'إجمالي قيمة المخزون'
  },
  en: {
    home:'Home',abayas:'Abayas',fabric:'Fabrics',orders:'Production',tailors:'Tailors',transfer:'Transfer',barcode:'Barcode',invoices:'Invoices',reports:'Reports',settings:'Settings',
    total_ab:'Total Abayas',all_branches:'All branches',stock_val:'Inventory Value',sar:'SAR',prod_orders:'Production Orders',in_prog:'In progress',low_stock:'Low Stock',need_reorder:'Needs reorder',
    alerts:'Alerts',branches:'Branches',size_sys:'Size System — type anything',products:'Products',all:'All',klosh:'Klosh',farasha:'Farasha',bahraini:'Bahraini',
    add_abaya:'Add New Abaya',add:'Add',fabric_stock:'Fabric Inventory',fabric_calc_title:'Fabric Calculation for Order',
    select_abaya_calc:'Select Abaya',auto_calc:'Auto Calculate',required_fabric:'Required',in_stock:'In stock',remaining:'Remaining',total_units:'Total units',
    add_material:'Add Fabric / Consumables',active_orders:'Active Orders',new_order:'New Production Order',
    tailors_list:'Tailors List',add_tailor:'Add New Tailor',cur_orders:'Orders',commit:'On-time',rating:'Rating',
    new_transfer:'Inter-branch Stock Transfer',transfer_history:'Transfer History',from_branch:'From branch',to_branch:'To branch',
    main_warehouse:'Main Warehouse',riyadh_branch:'Riyadh Branch',jeddah_branch:'Jeddah Branch',dammam_branch:'Dammam Branch',
    bc_type:'Barcode Type',bc_sale:'Sale Barcode',bc_sale_sub:'Abaya + Size + Price',bc_cons:'Consumables',bc_cons_sub:'Packaging + Materials',bc_fab:'Fabrics',bc_fab_sub:'Fabric + Quantity',bc_ship:'Shipping',bc_ship_sub:'Shipment + Destination',
    select_product:'Select Product',size:'Size',copies:'Copies',branch:'Branch',print_bc:'Print Barcode',scan_bc:'Scan Barcode',
    all:'All',pending:'Pending',paid:'Paid',late_p:'Overdue',add_inv:'Add Invoice',
    financial_summary:'Financial Summary',reports_sec:'Reports',permissions:'Users & Permissions',
    rpt1:'Inventory by Size & Branch',rpt1s:'Each size per branch',rpt2:'Production Costs & Margins',rpt2s:'Cost + margin per design',rpt3:'Tailor Performance',rpt3s:'Output & on-time delivery',rpt4:'Inter-branch Transfers',rpt4s:'Inbound and outbound',
    company_info:'Company Info',company_name:'Company Name',company_phone:'Phone Number',data_mgmt:'Data Management',export_data:'Export All Data (JSON)',clear_data:'Clear All Data',
    abaya_name:'Abaya Name',price:'Price (SAR)',fabric_type:'Fabric Type',color:'Color',prod_cost:'Production Cost (SAR)',min_alert:'Alert Threshold',sizes_qty:'Sizes & Quantities',product_imgs:'Product Images',drag_imgs:'Drag images or tap to upload',main_img:'Main',save:'Save',cancel:'Cancel',
    mat_name:'Name',qty:'Quantity',unit:'Unit',supplier:'Supplier',fabric_per_size:'Fabric per size (production)',meter:'Meter',piece:'Piece',spool:'Spool',kg:'Kg',
    select_tailor:'Select Tailor',tailor_phone:'Tailor WhatsApp Number',deadline:'Deadline',notes:'Notes',save_send:'Save & Send to Tailor',
    tailor_name:'Name',speciality:'Speciality',capacity:'Daily Capacity (units)',
    product:'Product',ship_date:'Shipping Date',confirm_transfer:'Confirm Transfer',
    inv_desc:'Description',amount:'Amount (SAR)',inv_date:'Date',status:'Status',
    wa_ready:'Tailor Message — Ready',send_wa:'Send via WhatsApp',late:'Late',in_progress_tag:'In Progress',done_tag:'Done',transit:'In Transit',
    sufficient:'OK',low:'Low',out:'Out',active:'Active',busy:'Busy',available:'Available',full:'Full',
    abaya_val:'Abaya Inventory Value',fabric_val:'Fabric Value',prod_cost_tot:'Total Production Costs',inv_total:'Pending Invoices Total',grand_total:'Total Inventory Value'
  }
};

function tr(k) { return (T[lang] && T[lang][k]) || k; }

// ── LOCALSTORAGE ──────────────────────────
function save() { try { localStorage.setItem('abaya_db', JSON.stringify(DB)); } catch(e){} }
function load() {
  try {
    var d = localStorage.getItem('abaya_db');
    if (d) DB = JSON.parse(d);
  } catch(e){}
}

// ── NAVIGATION ────────────────────────────
var currentScreen = 'home';
function go(name, btn) {
  document.querySelectorAll('.sc').forEach(function(s){ s.classList.remove('on'); });
  document.querySelectorAll('.nb').forEach(function(b){ b.classList.remove('on'); });
  var sc = document.getElementById('s-' + name);
  if (sc) sc.classList.add('on');
  if (btn) btn.classList.add('on');
  currentScreen = name;
  renderScreen(name);
  window.scrollTo(0, 0);
}

function renderScreen(name) {
  if (name === 'home') renderHome();
  if (name === 'abayas') renderAbayas();
  if (name === 'fabric') renderFabric();
  if (name === 'orders') renderOrders();
  if (name === 'tailors') renderTailors();
  if (name === 'transfer') renderTransfer();
  if (name === 'barcode') renderBarcode();
  if (name === 'invoices') renderInvoices('all');
  if (name === 'reports') renderReports();
  if (name === 'settings') renderSettings();
  if (name === 'add-abaya') renderAddAbaya();
  if (name === 'add-fabric') renderAddFabric();
  if (name === 'add-order') renderAddOrder();
  if (name === 'add-tailor') {}
  if (name === 'add-invoice') renderAddInvoice();
}

// ── LANGUAGE ──────────────────────────────
function setLang(l) {
  lang = l;
  document.body.className = l === 'en' ? 'en' : '';
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('lbtn-ar').className = 'lang-btn' + (l === 'ar' ? ' on' : '');
  document.getElementById('lbtn-en').className = 'lang-btn' + (l === 'en' ? ' on' : '');
  document.getElementById('tname').textContent = l === 'ar' ? 'استوديو العبايات' : 'Abaya Studio';
  document.getElementById('tsub').textContent = l === 'ar' ? 'نظام الإدارة المتكامل' : 'Complete Management System';
  // update all nav labels
  document.querySelectorAll('[data-t]').forEach(function(el) {
    var k = el.getAttribute('data-t');
    var v = tr(k);
    if (v && v !== k) el.textContent = v;
  });
  // update placeholders
  document.querySelectorAll('[data-ph-' + l + ']').forEach(function(el) {
    el.placeholder = el.getAttribute('data-ph-' + l);
  });
  renderScreen(currentScreen);
}

// ── HOME ──────────────────────────────────
function renderHome() {
  var totalAbayas = 0;
  DB.abayas.forEach(function(a) {
    DB.sizes.forEach(function(s) { totalAbayas += (a.stock[s] || 0); });
  });
  var totalVal = DB.abayas.reduce(function(sum, a) {
    var qty = DB.sizes.reduce(function(q, s) { return q + (a.stock[s] || 0); }, 0);
    return sum + qty * a.price;
  }, 0);
  var activeOrders = DB.orders.filter(function(o) { return o.status !== 'done'; }).length;
  var lowStock = DB.abayas.filter(function(a) {
    var qty = DB.sizes.reduce(function(q, s) { return q + (a.stock[s] || 0); }, 0);
    return qty < a.minAlert;
  }).length + DB.fabrics.filter(function(f) { return f.qty < f.minAlert; }).length;

  document.getElementById('kpi-total').textContent = totalAbayas;
  document.getElementById('kpi-val').textContent = (totalVal / 1000).toFixed(0) + 'K';
  document.getElementById('kpi-orders').textContent = activeOrders;
  document.getElementById('kpi-low').textContent = lowStock;

  // alerts
  var alerts = [];
  DB.orders.filter(function(o){ return o.status === 'late'; }).forEach(function(o) {
    alerts.push({ type: 'red', icon: 'ti-clock-exclamation', title: (lang==='ar'?'طلب #':'Order #') + o.id + (lang==='ar'?' متأخر':' is late'), sub: (lang==='ar'?o.abayaName+' — '+tr('select_tailor')+': '+o.tailorName:o.abayaName+' — Tailor: '+o.tailorName) });
  });
  DB.fabrics.filter(function(f){ return f.qty < f.minAlert && f.qty > 0; }).forEach(function(f) {
    alerts.push({ type: 'amb', icon: 'ti-alert-triangle', title: (lang==='ar'?f.name:f.nameEn) + (lang==='ar'?' وصل للحد الأدنى':' reached minimum'), sub: (lang==='ar'?'المتبقي: ':'Remaining: ') + f.qty + ' — ' + (lang==='ar'?'الحد: ':'Min: ') + f.minAlert });
  });
  DB.fabrics.filter(function(f){ return f.qty === 0; }).forEach(function(f) {
    alerts.push({ type: 'red', icon: 'ti-alert-triangle', title: (lang==='ar'?f.name:f.nameEn) + (lang==='ar'?' نفذ تماماً':' is out of stock'), sub: '' });
  });

  var al = document.getElementById('alerts-list');
  if (alerts.length === 0) {
    al.innerHTML = '<div class="row"><div class="ri"><div class="rn" style="color:var(--green)">✓ ' + (lang==='ar'?'لا توجد تنبيهات':'No alerts') + '</div></div></div>';
  } else {
    al.innerHTML = alerts.map(function(a) {
      return '<div class="alert '+a.type+'"><i class="ti '+a.icon+'" aria-hidden="true"></i><div><div class="at">'+a.title+'</div>'+(a.sub?'<div class="as2">'+a.sub+'</div>':'')+'</div></div>';
    }).join('');
  }

  // branches
  document.getElementById('branches-list').innerHTML = [
    { name: lang==='ar'?'فرع الرياض — العليا':'Riyadh Branch — Al Olaya', sub: '183 '+(lang==='ar'?'عباية · 4 موظفين':'abayas · 4 staff'), cls:'gn', icon:'ti-building-store', tag:'tok', tagTxt: tr('active') },
    { name: lang==='ar'?'فرع جدة — التحلية':'Jeddah Branch — Al-Tahlia', sub: '221 '+(lang==='ar'?'عباية · 3 موظفين':'abayas · 3 staff'), cls:'gn', icon:'ti-building-store', tag:'tok', tagTxt: tr('active') },
    { name: tr('main_warehouse'), sub: '443 '+(lang==='ar'?'عباية + أقمشة + مستهلكات':'abayas + fabrics + consumables'), cls:'br', icon:'ti-building-warehouse', tag:'tok', tagTxt: tr('active') }
  ].map(function(b) {
    return '<div class="row"><div class="av '+b.cls+'"><i class="ti '+b.icon+'" aria-hidden="true"></i></div><div class="ri"><div class="rn">'+b.name+'</div><div class="rs2">'+b.sub+'</div></div><div class="re"><span class="tag '+b.tag+'">'+b.tagTxt+'</span></div></div>';
  }).join('');
}

// ── SIZES ─────────────────────────────────
function renderSizes() {
  var list = document.getElementById('sz-list');
  if (!list) return;
  list.innerHTML = '';
  DB.sizes.forEach(function(s, i) {
    var item = document.createElement('div');
    item.className = 'sz-item';
    var inp = document.createElement('input');
    inp.value = s;
    inp.addEventListener('input', function() {
      DB.sizes[i] = this.value;
      save();
      renderAbayas();
      updateBCSizes();
    });
    var del = document.createElement('button');
    del.className = 'sz-del';
    del.innerHTML = '<i class="ti ti-x" style="font-size:12px" aria-hidden="true"></i>';
    del.addEventListener('click', function() {
      DB.sizes.splice(i, 1);
      save();
      renderSizes();
      renderAbayas();
      updateBCSizes();
    });
    item.appendChild(inp);
    item.appendChild(del);
    list.appendChild(item);
  });
}

function addSize() {
  var inp = document.getElementById('sz-inp');
  var v = (inp.value || '').trim();
  if (!v) return;
  DB.sizes.push(v);
  inp.value = '';
  save();
  renderSizes();
  renderAbayas();
  updateBCSizes();
}

// ── ABAYAS ────────────────────────────────
function renderAbayas() {
  renderSizes();
  var grid = document.getElementById('abaya-grid');
  if (!grid) return;
  grid.innerHTML = '';
  DB.abayas.forEach(function(a) {
    var tile = document.createElement('div');
    tile.className = 'atile';
    var totalQty = DB.sizes.reduce(function(q, s) { return q + (a.stock[s] || 0); }, 0);
    var isLow = totalQty < a.minAlert;
    var chips = DB.sizes.map(function(s) {
      var q = a.stock[s] || 0;
      return '<div class="szchip'+(q===0?' empty':'')+'"><div class="szletter">'+s+'</div><div class="szqty">'+q+'</div></div>';
    }).join('');
    var imgHtml = a.imgs && a.imgs[0]
      ? '<img src="'+a.imgs[0]+'" alt=""/>'
      : '<i class="ti ti-hanger" aria-hidden="true"></i>';
    tile.innerHTML =
      '<div class="aimg">'+imgHtml+'<div class="cam-hint"><i class="ti ti-camera" aria-hidden="true"></i>'+(lang==='ar'?'صورة':'Photo')+'</div></div>'+
      '<div class="ainfo">'+
        '<div class="aname">'+(lang==='en'?a.nameEn:a.name)+'</div>'+
        '<div class="asku">'+a.sku+'</div>'+
        '<div class="aprice">'+a.price+' '+(lang==='ar'?'ر.س':'SAR')+(isLow?' <span class="tag tlo" style="font-size:9px;padding:1px 5px">'+tr('low')+'</span>':'')+'</div>'+
        '<div class="aszrow">'+chips+'</div>'+
      '</div>';
    grid.appendChild(tile);
  });
  // add tile
  var add = document.createElement('div');
  add.className = 'atile';
  add.style.cssText = 'border:1.5px dashed var(--border);background:none;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;padding:18px;cursor:pointer;min-height:150px';
  add.innerHTML = '<i class="ti ti-plus" style="font-size:24px;color:var(--brand-soft)" aria-hidden="true"></i><span style="font-size:11px;color:var(--text3)">'+(lang==='ar'?'إضافة عباية':'Add Abaya')+'</span>';
  add.onclick = function() { go('add-abaya', null); };
  grid.appendChild(add);
  // populate calc select
  var calcSel = document.getElementById('calc-abaya');
  if (calcSel) {
    var cv = calcSel.value;
    calcSel.innerHTML = '<option value="">—</option>' + DB.abayas.map(function(a) {
      return '<option value="'+a.id+'">'+(lang==='en'?a.nameEn:a.name)+' ('+a.sku+')</option>';
    }).join('');
    calcSel.value = cv;
  }
}

function renderAddAbaya() {
  var fields = document.getElementById('new-sizes-fields');
  if (!fields) return;
  fields.innerHTML = '';
  DB.sizes.forEach(function(s) {
    var d = document.createElement('div');
    d.innerHTML = '<label class="flbl">'+s+'</label><input type="number" class="fi" id="ns-'+s.replace(/[^a-zA-Z0-9]/g,'_')+'" min="0" placeholder="0"/>';
    fields.appendChild(d);
  });
  document.getElementById('new-name').value = '';
  document.getElementById('new-sku').value = '';
  document.getElementById('new-price').value = '';
  document.getElementById('new-fabric').value = '';
  document.getElementById('new-color').value = '';
  document.getElementById('new-cost').value = '';
  document.getElementById('new-min').value = '';
  document.getElementById('img-thumbs').innerHTML = '<div class="thumb" style="border-style:dashed;background:none;cursor:pointer" onclick="document.getElementById(\'img-upload\').click()"><i class="ti ti-plus" aria-hidden="true" style="opacity:.35;font-size:20px"></i></div>';
}

var newImgData = [];
function previewImgs(input) {
  newImgData = [];
  var thumbs = document.getElementById('img-thumbs');
  thumbs.innerHTML = '';
  var files = Array.from(input.files);
  files.forEach(function(file, i) {
    var reader = new FileReader();
    reader.onload = function(e) {
      newImgData.push(e.target.result);
      var d = document.createElement('div');
      d.className = 'thumb';
      d.innerHTML = '<img src="'+e.target.result+'" alt=""/>'+(i===0?'<div class="mb">'+tr('main_img')+'</div>':'');
      thumbs.appendChild(d);
    };
    reader.readAsDataURL(file);
  });
  var add = document.createElement('div');
  add.className = 'thumb';
  add.style.cssText = 'border-style:dashed;background:none;cursor:pointer';
  add.innerHTML = '<i class="ti ti-plus" aria-hidden="true" style="opacity:.35;font-size:20px"></i>';
  add.onclick = function(){ document.getElementById('img-upload').click(); };
  thumbs.appendChild(add);
}

function saveAbaya() {
  var name = document.getElementById('new-name').value.trim();
  if (!name) { alert(lang==='ar'?'أدخل اسم العباية':'Enter abaya name'); return; }
  var sku = document.getElementById('new-sku').value.trim() || ('AB-00' + (DB.abayas.length + 1));
  var price = parseFloat(document.getElementById('new-price').value) || 0;
  var cost = parseFloat(document.getElementById('new-cost').value) || 0;
  var minAlert = parseInt(document.getElementById('new-min').value) || 5;
  var fabric = document.getElementById('new-fabric').value.trim();
  var color = document.getElementById('new-color').value.trim();
  var stock = {};
  DB.sizes.forEach(function(s) {
    var el = document.getElementById('ns-' + s.replace(/[^a-zA-Z0-9]/g,'_'));
    stock[s] = el ? (parseInt(el.value) || 0) : 0;
  });
  DB.abayas.push({ id: Date.now(), name: name, nameEn: name, sku: sku, price: price, cost: cost, fabric: fabric, color: color, minAlert: minAlert, imgs: newImgData.slice(0,3), stock: stock });
  save();
  newImgData = [];
  go('abayas', document.querySelectorAll('.nb')[1]);
  alert(lang==='ar'?'تم حفظ العباية: '+name:'Abaya saved: '+name);
}

// ── FABRIC ────────────────────────────────
function renderFabric() {
  var list = document.getElementById('fabric-list');
  if (!list) return;
  list.innerHTML = DB.fabrics.map(function(f) {
    var status = f.qty === 0 ? 'tout' : f.qty < f.minAlert ? 'tlo' : 'tok';
    var statusTxt = f.qty === 0 ? tr('out') : f.qty < f.minAlert ? tr('low') : tr('sufficient');
    var avClass = f.qty === 0 ? 'rs' : f.qty < f.minAlert ? 'am' : 'bl';
    return '<div class="row"><div class="av '+avClass+'"><i class="ti ti-ripple" aria-hidden="true"></i></div><div class="ri"><div class="rn">'+(lang==='en'?f.nameEn:f.name)+'</div><div class="rs2">'+f.sku+' · '+f.supplier+'</div></div><div class="re"><div class="rv">'+f.qty+'</div><div class="ru">'+f.unit+'</div><span class="tag '+status+'">'+statusTxt+'</span></div></div>';
  }).join('');
  // populate calc select for abayas
  var sel = document.getElementById('calc-abaya');
  if (sel) {
    sel.innerHTML = '<option value="">—</option>' + DB.abayas.map(function(a) {
      return '<option value="'+a.id+'">'+(lang==='en'?a.nameEn:a.name)+'</option>';
    }).join('');
  }
}

function renderAddFabric() {
  var fields = document.getElementById('fab-per-size-fields');
  if (!fields) return;
  fields.innerHTML = '';
  DB.sizes.forEach(function(s) {
    var d = document.createElement('div');
    d.innerHTML = '<label class="flbl">'+s+'</label><input type="number" class="fi" id="fps-'+s.replace(/[^a-zA-Z0-9]/g,'_')+'" min="0" step="0.5" placeholder="0"/>';
    fields.appendChild(d);
  });
}

function rebuildFabricCalcFields() {
  var sel = document.getElementById('calc-abaya');
  var abayaId = sel ? parseInt(sel.value) : null;
  var abaya = abayaId ? DB.abayas.find(function(a){ return a.id === abayaId; }) : null;
  var fields = document.getElementById('fabric-qty-fields');
  var box = document.getElementById('faccalc-box');
  if (!fields) return;
  fields.innerHTML = '';
  if (!abaya) { if(box) box.style.display='none'; return; }
  DB.sizes.forEach(function(s) {
    var d = document.createElement('div');
    d.innerHTML = '<label class="flbl">'+s+'</label><input type="number" class="fi" id="cq-'+s.replace(/[^a-zA-Z0-9]/g,'_')+'" min="0" value="0" oninput="calcFabric()"/>';
    fields.appendChild(d);
  });
  if (box) box.style.display = 'block';
  calcFabric();
}

function calcFabric() {
  var sel = document.getElementById('calc-abaya');
  var abayaId = sel ? parseInt(sel.value) : null;
  var abaya = abayaId ? DB.abayas.find(function(a){ return a.id === abayaId; }) : null;
  if (!abaya) return;
  var total = 0;
  var fabricNeeds = {};
  DB.sizes.forEach(function(s) {
    var el = document.getElementById('cq-' + s.replace(/[^a-zA-Z0-9]/g,'_'));
    var qty = el ? (parseFloat(el.value) || 0) : 0;
    total += qty;
    DB.fabrics.forEach(function(f) {
      var perSz = f.perSize[s] || 0;
      if (perSz > 0) {
        if (!fabricNeeds[f.id]) fabricNeeds[f.id] = { fabric: f, needed: 0 };
        fabricNeeds[f.id].needed += qty * perSz;
      }
    });
  });
  var rows = document.getElementById('fab-calc-rows');
  if (rows) {
    var html = '';
    Object.values(fabricNeeds).forEach(function(fn) {
      var left = fn.fabric.qty - fn.needed;
      var color = left < 0 ? 'var(--red)' : left < fn.fabric.minAlert ? 'var(--amber)' : 'var(--green)';
      html += '<div class="fcrow"><span class="fcl">'+(lang==='en'?fn.fabric.nameEn:fn.fabric.name)+' '+tr('required_fabric')+'</span><span class="fcv">'+fn.needed.toFixed(1)+fn.fabric.unit+'</span></div>';
      html += '<div class="fcrow"><span class="fcl">'+tr('remaining')+'</span><span class="fcv" style="color:'+color+'">'+left.toFixed(1)+fn.fabric.unit+'</span></div>';
    });
    if (!html) html = '<div class="fcrow"><span class="fcl" style="opacity:.6">'+(lang==='ar'?'لا يوجد قماش مرتبط بهذه العباية':'No fabric linked to this abaya')+'</span></div>';
    rows.innerHTML = html;
  }
  var totEl = document.getElementById('fc-tot');
  if (totEl) totEl.textContent = total;
}

function saveFabric() {
  var name = document.getElementById('fab-name').value.trim();
  if (!name) { alert(lang==='ar'?'أدخل الاسم':'Enter name'); return; }
  var sku = document.getElementById('fab-sku').value.trim() || ('FK-00'+(DB.fabrics.length+1));
  var qty = parseFloat(document.getElementById('fab-qty').value) || 0;
  var unit = document.getElementById('fab-unit').value;
  var minAlert = parseFloat(document.getElementById('fab-min').value) || 0;
  var supplier = document.getElementById('fab-supplier').value.trim();
  var perSize = {};
  DB.sizes.forEach(function(s) {
    var el = document.getElementById('fps-' + s.replace(/[^a-zA-Z0-9]/g,'_'));
    var v = el ? (parseFloat(el.value) || 0) : 0;
    if (v > 0) perSize[s] = v;
  });
  DB.fabrics.push({ id: Date.now(), name: name, nameEn: name, sku: sku, qty: qty, unit: unit, minAlert: minAlert, supplier: supplier, perSize: perSize });
  save();
  go('fabric', document.querySelectorAll('.nb')[2]);
  alert(lang==='ar'?'تم الحفظ':'Saved');
}

// ── ORDERS ────────────────────────────────
function renderOrders() {
  var list = document.getElementById('orders-list');
  if (!list) return;
  if (DB.orders.length === 0) {
    list.innerHTML = '<div class="row"><div class="ri"><div class="rn" style="color:var(--text3)">'+(lang==='ar'?'لا توجد طلبات':'No orders')+'</div></div></div>';
    return;
  }
  list.innerHTML = DB.orders.map(function(o) {
    var pct = Math.round((o.done / o.total) * 100);
    var statusCls = o.status === 'late' ? 'tlt' : o.status === 'done' ? 'tdn' : 'tpn';
    var statusTxt = o.status === 'late' ? tr('late') : o.status === 'done' ? tr('done_tag') : tr('in_progress_tag');
    var szLine = Object.entries(o.sizes).filter(function(e){ return e[1]>0; }).map(function(e){ return e[0]+'×'+e[1]; }).join(' · ');
    var waMsg = (lang==='ar'?o.tailorName+' ، السلام عليكم 🌿\n\n':'Hello '+o.tailorName+' 🌿\n\n')
      +(lang==='ar'?'طلب #':'Order #')+o.id+' — '+o.abayaName+'\n'
      +'📐 '+szLine+'\n'
      +'📅 '+(lang==='ar'?'موعد التسليم: ':'Deadline: ')+o.deadline+'\n'
      +(o.notes?'📝 '+o.notes+'\n':'')
      +(lang==='ar'?'[صور العباية مرفقة ↑]':'[Abaya photos attached ↑]');
    var waLink = 'https://wa.me/966'+o.phone.replace(/^0/,'')+encodeURIComponent('\n'+waMsg);
    return '<div class="ocard">'
      +'<div class="ohead"><div><div class="otitle">'+(lang==='ar'?'طلب #':'Order #')+o.id+' — '+o.abayaName+'</div><div class="ometa">'+o.deadline+'</div></div><span class="tag '+statusCls+'">'+statusTxt+'</span></div>'
      +'<div class="obody">'
      +'<div class="odet"><i class="ti ti-user" aria-hidden="true"></i>'+o.tailorName+' · '+o.phone+'</div>'
      +'<div class="odet"><i class="ti ti-resize" aria-hidden="true"></i>'+szLine+'</div>'
      +'<div class="odet"><i class="ti ti-coin" aria-hidden="true"></i>'+(lang==='ar'?'تكلفة: ':'Cost: ')+o.cost+' '+(lang==='ar'?'ر.س':'SAR')+'</div>'
      +'<div class="pbar"><div class="pfill" style="width:'+pct+'%"></div></div>'
      +'<div class="plabs"><span>'+o.done+' / '+o.total+'</span><span>'+pct+'%</span></div>'
      +'<div class="wabox"><div class="wahd"><i class="ti ti-brand-whatsapp" aria-hidden="true"></i>'+tr('wa_ready')+'</div>'
      +'<div class="waimg-row">'+(o.abayaId ? (DB.abayas.find(function(a){return a.id===o.abayaId;})||{imgs:[]}).imgs.slice(0,3).map(function(img){ return '<div class="waimg"><img src="'+img+'" style="width:100%;height:100%;object-fit:cover;border-radius:8px" alt=""/></div>'; }).join('') : '')+'<div class="waimg"><i class="ti ti-hanger" aria-hidden="true"></i></div></div>'
      +'<div class="watxt">'+waMsg+'</div>'
      +'</div>'
      +'<a href="'+waLink+'" target="_blank" style="text-decoration:none"><button class="btn wa" style="margin-top:8px"><i class="ti ti-brand-whatsapp" aria-hidden="true"></i>'+tr('send_wa')+'</button></a>'
      +'</div></div>';
  }).join('');
}

function renderAddOrder() {
  var sel = document.getElementById('ord-abaya');
  if (sel) sel.innerHTML = '<option value="">—</option>' + DB.abayas.map(function(a){ return '<option value="'+a.id+'">'+(lang==='en'?a.nameEn:a.name)+'</option>'; }).join('');
  var tsel = document.getElementById('ord-tailor');
  if (tsel) tsel.innerHTML = '<option value="">—</option>' + DB.tailors.map(function(t){ return '<option value="'+t.id+'">'+(lang==='en'?t.nameEn:t.name)+'</option>'; }).join('');
  rebuildOrderSizeFields();
}

function rebuildOrderSizeFields() {
  var c = document.getElementById('ord-size-fields');
  if (!c) return;
  c.innerHTML = '';
  DB.sizes.forEach(function(s) {
    var d = document.createElement('div');
    d.innerHTML = '<label class="flbl">'+s+'</label><input type="number" class="fi" id="os-'+s.replace(/[^a-zA-Z0-9]/g,'_')+'" min="0" placeholder="0"/>';
    c.appendChild(d);
  });
}

function saveOrder() {
  var abayaId = parseInt(document.getElementById('ord-abaya').value);
  var abaya = DB.abayas.find(function(a){ return a.id === abayaId; });
  if (!abaya) { alert(lang==='ar'?'اختر العباية':'Select abaya'); return; }
  var tailorId = parseInt(document.getElementById('ord-tailor').value);
  var tailor = DB.tailors.find(function(t){ return t.id === tailorId; });
  var sizes = {};
  var total = 0;
  DB.sizes.forEach(function(s) {
    var el = document.getElementById('os-' + s.replace(/[^a-zA-Z0-9]/g,'_'));
    var v = el ? (parseInt(el.value) || 0) : 0;
    if (v > 0) { sizes[s] = v; total += v; }
  });
  if (total === 0) { alert(lang==='ar'?'أدخل كمية على الأقل':'Enter at least one quantity'); return; }
  var orderId = 100 + DB.orders.length + 1;
  DB.orders.push({
    id: orderId,
    abayaId: abayaId,
    abayaName: lang==='en'?abaya.nameEn:abaya.name,
    tailorId: tailorId,
    tailorName: tailor ? (lang==='en'?tailor.nameEn:tailor.name) : document.getElementById('ord-tailor').value,
    phone: document.getElementById('ord-phone').value.trim() || (tailor ? tailor.phone : ''),
    sizes: sizes,
    deadline: document.getElementById('ord-date').value,
    cost: parseFloat(document.getElementById('ord-cost').value) || 0,
    done: 0,
    total: total,
    status: 'progress',
    notes: document.getElementById('ord-notes').value.trim()
  });
  save();
  go('orders', document.querySelectorAll('.nb')[3]);
  alert(lang==='ar'?'تم إنشاء الطلب #'+orderId:'Order #'+orderId+' created');
}

// ── TAILORS ───────────────────────────────
function renderTailors() {
  var list = document.getElementById('tailors-list');
  if (!list) return;
  if (DB.tailors.length === 0) {
    list.innerHTML = '<div class="row"><div class="ri"><div class="rn" style="color:var(--text3)">'+(lang==='ar'?'لا يوجد خياطون':'No tailors yet')+'</div></div></div>';
    return;
  }
  list.innerHTML = DB.tailors.map(function(t) {
    var activeOrds = DB.orders.filter(function(o){ return o.tailorId === t.id && o.status !== 'done'; }).length;
    var statusCls = activeOrds >= 3 ? 'tfl' : activeOrds > 0 ? 'tby' : 'tav';
    var statusTxt = activeOrds >= 3 ? tr('full') : activeOrds > 0 ? tr('busy') : tr('available');
    var initials = (lang==='en'?t.nameEn:t.name).split(' ').slice(0,2).map(function(w){ return w[0]; }).join('');
    return '<div class="tcard" onclick="this.classList.toggle(\'sel\')">'
      +'<div class="ttop"><div class="tav">'+initials+'</div><div class="tinfo"><div class="tn">'+(lang==='en'?t.nameEn:t.name)+'</div><div class="ts">'+t.spec+'</div></div><span class="tag '+statusCls+'">'+statusTxt+'</span></div>'
      +'<div class="tstats"><div><div class="tsv">'+activeOrds+'</div><div class="tsl">'+tr('cur_orders')+'</div></div><div><div class="tsv">'+t.onTime+'%</div><div class="tsl">'+tr('commit')+'</div></div><div><div class="tsv">'+t.rating+'</div><div class="tsl">'+tr('rating')+'</div></div></div>'
      +'</div>';
  }).join('');
}

function saveTailor() {
  var name = document.getElementById('t-name').value.trim();
  if (!name) { alert(lang==='ar'?'أدخل الاسم':'Enter name'); return; }
  DB.tailors.push({
    id: Date.now(),
    name: name, nameEn: name,
    phone: document.getElementById('t-phone').value.trim(),
    spec: document.getElementById('t-spec').value.trim(),
    cap: parseInt(document.getElementById('t-cap').value) || 5,
    rating: 5.0, onTime: 100, orders: 0
  });
  save();
  go('tailors', document.querySelectorAll('.nb')[4]);
  alert(lang==='ar'?'تم إضافة الخياط':'Tailor added');
}

// ── TRANSFER ──────────────────────────────
function renderTransfer() {
  var sel = document.getElementById('tr-product');
  if (sel) {
    sel.innerHTML = DB.abayas.map(function(a){ return '<option value="'+a.id+'">'+(lang==='en'?a.nameEn:a.name)+'</option>'; }).join('');
  }
  updateTransferSizes();
  var list = document.getElementById('transfer-list');
  if (list) {
    list.innerHTML = DB.transfers.map(function(t) {
      var stCls = t.status === 'done' ? 'tdn' : t.status === 'transit' ? 'ttr' : 'tpn';
      var stTxt = t.status === 'done' ? tr('done_tag') : t.status === 'transit' ? tr('transit') : tr('pending');
      return '<div class="row"><div class="av gn"><i class="ti ti-arrows-transfer-up" aria-hidden="true"></i></div><div class="ri"><div class="rn">'+t.from+' ← '+t.to+'</div><div class="rs2">'+t.product+' · '+t.size+' · '+t.qty+' · '+t.date+'</div></div><div class="re"><span class="tag '+stCls+'">'+stTxt+'</span></div></div>';
    }).join('');
  }
}

function updateTransferSizes() {
  var sel = document.getElementById('tr-size');
  if (sel) sel.innerHTML = DB.sizes.map(function(s){ return '<option>'+s+'</option>'; }).join('');
}

function saveTransfer() {
  var prodId = parseInt(document.getElementById('tr-product').value);
  var abaya = DB.abayas.find(function(a){ return a.id === prodId; });
  DB.transfers.push({
    id: Date.now(),
    from: document.getElementById('tr-from').value,
    to: document.getElementById('tr-to').value,
    product: abaya ? (lang==='en'?abaya.nameEn:abaya.name) : '',
    size: document.getElementById('tr-size').value,
    qty: parseInt(document.getElementById('tr-qty').value) || 0,
    date: document.getElementById('tr-date').value,
    status: 'transit'
  });
  save();
  renderTransfer();
  alert(lang==='ar'?'تم تأكيد النقل':'Transfer confirmed');
}

// ── BARCODE ───────────────────────────────
var bcType = 'sale';
function selBC(el, type) {
  bcType = type;
  document.querySelectorAll('.bct').forEach(function(b){ b.classList.remove('on'); });
  el.classList.add('on');
  updateBC();
}

function renderBarcode() {
  var sel = document.getElementById('bc-sel');
  if (sel) {
    sel.innerHTML = '<option value="">—</option>' + DB.abayas.map(function(a){
      return '<option value="'+a.id+'|'+(lang==='en'?a.nameEn:a.name)+'|'+a.price+'|'+a.sku+'">'+(lang==='en'?a.nameEn:a.name)+' ('+a.sku+')</option>';
    }).join('');
  }
  updateBCSizes();
}

function updateBCSizes() {
  var sel = document.getElementById('bc-sz');
  if (sel) sel.innerHTML = DB.sizes.map(function(s){ return '<option>'+s+'</option>'; }).join('');
  updateBC();
}

function updateBC() {
  var sel = document.getElementById('bc-sel');
  var prev = document.getElementById('bcprev');
  if (!sel || !sel.value) { if (prev) prev.style.display = 'none'; return; }
  var parts = sel.value.split('|');
  var sz = document.getElementById('bc-sz') ? document.getElementById('bc-sz').value : '';
  var code = parts[3] + sz.replace(/[^a-zA-Z0-9]/g,'') + (bcType === 'sale' ? 'S' : bcType === 'cons' ? 'C' : bcType === 'fabric' ? 'F' : 'T');
  if (prev) prev.style.display = 'block';
  var cl = document.getElementById('bccodel');
  var nl = document.getElementById('bcnamel');
  var sl = document.getElementById('bcskul');
  if (cl) cl.textContent = code;
  if (nl) nl.textContent = parts[1] + ' — ' + sz + ' — ' + parts[2] + ' ' + tr('sar');
  if (sl) sl.textContent = 'SKU: ' + parts[3];
  drawBC(code);
}

function drawBC(code) {
  var c = document.getElementById('bcc');
  if (!c) return;
  var ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 220, 55);
  ctx.fillStyle = 'white'; ctx.fillRect(0, 0, 220, 55);
  var str = (code + '').split('').map(function(ch){ return ch.charCodeAt(0); }).join('').slice(0, 40).padEnd(40,'10101');
  var bw = 210 / str.length; var x = 5;
  for (var i = 0; i < str.length; i++) {
    if (parseInt(str[i]) % 2 === 0) { ctx.fillStyle = '#1a1208'; ctx.fillRect(x, 3, Math.max(.8, bw - .3), 40); }
    x += bw;
  }
}

function printBarcode() {
  var sel = document.getElementById('bc-sel');
  if (!sel || !sel.value) { alert(lang==='ar'?'اختر منتجاً':'Select a product'); return; }
  var parts = sel.value.split('|');
  var sz = document.getElementById('bc-sz').value;
  var copies = parseInt(document.getElementById('bc-copies').value) || 1;
  var w = window.open('', '_blank');
  var canvas = document.getElementById('bcc');
  var img = canvas.toDataURL();
  var html = '<!DOCTYPE html><html><head><title>Barcode</title></head><body style="text-align:center;font-family:sans-serif">';
  for (var i = 0; i < copies; i++) {
    html += '<div style="display:inline-block;margin:8px;border:1px solid #eee;padding:10px;border-radius:8px">';
    html += '<img src="'+img+'" style="display:block;margin:0 auto"/>';
    html += '<div style="font-size:11px;letter-spacing:2px;font-family:monospace;color:#555">'+document.getElementById('bccodel').textContent+'</div>';
    html += '<div style="font-size:12px;font-weight:bold;margin-top:3px">'+parts[1]+' — '+sz+'</div>';
    html += '<div style="font-size:11px;color:#888">'+parts[2]+' '+(lang==='ar'?'ر.س':'SAR')+' · '+parts[3]+'</div>';
    html += '</div>';
  }
  html += '<script>window.print();<\/script></body></html>';
  w.document.write(html);
  w.document.close();
}

// ── INVOICES ──────────────────────────────
var invFilter = 'all';
function filterInv(f, btn) {
  invFilter = f;
  document.querySelectorAll('.pills .pill').forEach(function(p){ p.classList.remove('on'); });
  if (btn) btn.classList.add('on');
  renderInvoices(f);
}

function renderInvoices(filter) {
  var list = document.getElementById('invoices-list');
  if (!list) return;
  var data = DB.invoices;
  if (filter && filter !== 'all') data = data.filter(function(i){ return i.status === filter; });
  if (data.length === 0) {
    list.innerHTML = '<div class="row"><div class="ri"><div class="rn" style="color:var(--text3)">'+(lang==='ar'?'لا توجد فواتير':'No invoices')+'</div></div></div>';
    return;
  }
  list.innerHTML = data.map(function(inv) {
    var stCls = inv.status === 'paid' ? 'tdn' : inv.status === 'late' ? 'tlt' : 'tpn';
    var stTxt = inv.status === 'paid' ? tr('paid') : inv.status === 'late' ? tr('late_p') : tr('pending');
    var avCls = inv.status === 'paid' ? 'bl' : inv.status === 'late' ? 'rs' : 'am';
    return '<div class="row"><div class="av '+avCls+'"><i class="ti ti-file-invoice" aria-hidden="true"></i></div><div class="ri"><div class="rn">'+inv.supplier+'</div><div class="rs2">'+inv.date+' · '+inv.desc+'</div></div><div class="re"><div class="rv">'+inv.amount.toLocaleString()+'</div><div class="ru">'+tr('sar')+'</div><span class="tag '+stCls+'">'+stTxt+'</span></div></div>';
  }).join('');
}

function renderAddInvoice() {
  var d = new Date();
  var dateStr = d.toISOString().split('T')[0];
  var el = document.getElementById('inv-date');
  if (el) el.value = dateStr;
}

function saveInvoice() {
  var supplier = document.getElementById('inv-supplier').value.trim();
  if (!supplier) { alert(lang==='ar'?'أدخل اسم المورد':'Enter supplier name'); return; }
  DB.invoices.push({
    id: Date.now(),
    supplier: supplier,
    desc: document.getElementById('inv-desc').value.trim(),
    amount: parseFloat(document.getElementById('inv-amount').value) || 0,
    date: document.getElementById('inv-date').value,
    status: document.getElementById('inv-status').value
  });
  save();
  go('invoices', document.querySelectorAll('.nb')[7]);
  alert(lang==='ar'?'تم حفظ الفاتورة':'Invoice saved');
}

// ── REPORTS ───────────────────────────────
function renderReports() {
  var abayaVal = DB.abayas.reduce(function(sum, a) {
    return sum + DB.sizes.reduce(function(q, s){ return q + (a.stock[s]||0); }, 0) * a.price;
  }, 0);
  var prodCost = DB.orders.reduce(function(sum, o){ return sum + (o.cost||0); }, 0);
  var pendingInv = DB.invoices.filter(function(i){ return i.status !== 'paid'; }).reduce(function(sum, i){ return sum + i.amount; }, 0);
  var fs = document.getElementById('financial-summary');
  if (fs) {
    fs.innerHTML = '<div class="cp">'
      +'<div class="inv-line"><span class="il">'+tr('abaya_val')+'</span><span class="iv">'+abayaVal.toLocaleString()+' '+tr('sar')+'</span></div>'
      +'<div class="inv-line"><span class="il">'+tr('prod_cost_tot')+'</span><span class="iv">'+prodCost.toLocaleString()+' '+tr('sar')+'</span></div>'
      +'<div class="inv-line"><span class="il">'+tr('inv_total')+'</span><span class="iv" style="color:var(--red)">'+pendingInv.toLocaleString()+' '+tr('sar')+'</span></div>'
      +'<div class="inv-line"><span class="il" style="font-weight:700;color:var(--text)">'+tr('grand_total')+'</span><span class="iv" style="color:var(--brand-mid)">'+abayaVal.toLocaleString()+' '+tr('sar')+'</span></div>'
      +'</div>';
  }
  document.getElementById('report-output').innerHTML = '';
}

function showReport(type) {
  var out = document.getElementById('report-output');
  if (!out) return;
  var html = '<div class="card cp" style="margin-top:10px">';
  if (type === 'sizes') {
    html += '<div style="font-size:12px;font-weight:700;color:var(--brand-mid);margin-bottom:10px">'+tr('rpt1')+'</div>';
    DB.abayas.forEach(function(a) {
      html += '<div style="font-size:12px;font-weight:700;color:var(--text);margin-bottom:4px">'+(lang==='en'?a.nameEn:a.name)+' ('+a.sku+')</div>';
      DB.sizes.forEach(function(s) {
        var q = a.stock[s] || 0;
        html += '<div class="inv-line" style="padding:4px 0"><span class="il">'+s+'</span><span class="iv">'+q+'</span></div>';
      });
      html += '<div style="height:8px"></div>';
    });
  } else if (type === 'costs') {
    DB.abayas.forEach(function(a) {
      var margin = a.price > 0 ? Math.round(((a.price - a.cost) / a.price) * 100) : 0;
      html += '<div class="inv-line"><span class="il">'+(lang==='en'?a.nameEn:a.name)+'</span><span class="iv" style="font-size:12px">'+(lang==='ar'?'تكلفة: ':'Cost: ')+a.cost+' · '+(lang==='ar'?'هامش: ':'Margin: ')+margin+'%</span></div>';
    });
  } else if (type === 'tailors') {
    DB.tailors.forEach(function(t) {
      var ords = DB.orders.filter(function(o){ return o.tailorId === t.id; }).length;
      html += '<div class="inv-line"><span class="il">'+(lang==='en'?t.nameEn:t.name)+'</span><span class="iv" style="font-size:12px">'+ords+' '+(lang==='ar'?'طلب · ':'orders · ')+t.onTime+'% '+tr('commit')+' · ⭐'+t.rating+'</span></div>';
    });
  } else if (type === 'transfers') {
    DB.transfers.forEach(function(t) {
      html += '<div class="inv-line"><span class="il">'+t.from+' → '+t.to+'</span><span class="iv" style="font-size:12px">'+t.product+' · '+t.size+' · '+t.qty+'</span></div>';
    });
  }
  html += '</div>';
  out.innerHTML = html;
  out.scrollIntoView({ behavior: 'smooth' });
}

// ── SETTINGS ──────────────────────────────
function renderSettings() {
  var c = document.getElementById('st-company');
  var p = document.getElementById('st-phone');
  if (c) c.value = DB.settings.company || '';
  if (p) p.value = DB.settings.phone || '';
  var ul = document.getElementById('users-list');
  if (ul) {
    ul.innerHTML = '<div class="cp">'
      +'<div class="prow"><div class="pav">أد</div><div class="pname">'+(lang==='ar'?'المدير العام':'Admin')+'</div><span class="prole adm">'+(lang==='ar'?'مدير':'Admin')+'</span></div>'
      +'<div class="prow"><div class="pav">مح</div><div class="pname">'+(lang==='ar'?'المحاسب':'Accountant')+'</div><span class="prole mgr">'+(lang==='ar'?'محاسب':'Accountant')+'</span></div>'
      +'<div class="prow"><div class="pav">مش</div><div class="pname">'+(lang==='ar'?'مشرف الفرع':'Branch Manager')+'</div><span class="prole brn">'+(lang==='ar'?'مشرف':'Manager')+'</span></div>'
      +'</div>';
  }
}

function saveSettings() {
  DB.settings.company = document.getElementById('st-company').value.trim();
  DB.settings.phone = document.getElementById('st-phone').value.trim();
  save();
  alert(lang==='ar'?'تم الحفظ':'Saved');
}

function exportData() {
  var blob = new Blob([JSON.stringify(DB, null, 2)], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = 'abaya-studio-backup.json';
  a.click();
  URL.revokeObjectURL(url);
}

function clearData() {
  if (confirm(lang==='ar'?'هل أنت متأكد من مسح كل البيانات؟':'Are you sure you want to clear all data?')) {
    localStorage.removeItem('abaya_db');
    location.reload();
  }
}

// ── INIT ──────────────────────────────────
load();
renderHome();
