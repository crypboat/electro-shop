 /* ===== ELECTRO SHOP — script.js ===== */

// ── CONFIG ──────────────────────────────────────────────
const WHATSAPP_NUMBER = '8801968025755';
const MESSENGER_PAGE  = 'https://m.me/abdullah.binusuf.96';
const LANG = { current: 'en' };

// ── PRODUCT DATA ─────────────────────────────────────────
const PRODUCTS = [
  // FOOD
  { id:1, name:'Chicken Biryani', nameBn:'চিকেন বিরিয়ানি', cat:'food', price:180, emoji:'🍛', badge:'Popular' },
  { id:2, name:'Beef Burger',     nameBn:'বিফ বার্গার',     cat:'food', price:120, emoji:'🍔', badge:'Hot' },
  { id:3, name:'Vegetable Roll',  nameBn:'সবজি রোল',        cat:'food', price:60,  emoji:'🌯' },
  { id:4, name:'Fruit Salad',     nameBn:'ফ্রুট সালাদ',     cat:'food', price:80,  emoji:'🥗' },

  // TOOLS
  { id:5,  name:'Hammer Set',       nameBn:'হ্যামার সেট',    cat:'tools', price:350, emoji:'🔨', badge:'New' },
  { id:6,  name:'Screwdriver Kit',  nameBn:'স্ক্রু ড্রাইভার', cat:'tools', price:280, emoji:'🔧' },
  { id:7,  name:'Power Drill',      nameBn:'পাওয়ার ড্রিল',  cat:'tools', price:2500, emoji:'⚙️', badge:'Best' },
  { id:8,  name:'Measuring Tape',   nameBn:'মেজারিং টেপ',   cat:'tools', price:150, emoji:'📏' },

  // PLANTS
  { id:9,  name:'Money Plant',    nameBn:'মানি প্ল্যান্ট',   cat:'plants', price:120, emoji:'🪴', badge:'Popular' },
  { id:10, name:'Rose Bush',      nameBn:'গোলাপ গাছ',        cat:'plants', price:200, emoji:'🌹' },
  { id:11, name:'Bonsai Tree',    nameBn:'বনসাই গাছ',        cat:'plants', price:1800, emoji:'🌳', badge:'Premium' },
  { id:12, name:'Cactus',         nameBn:'ক্যাকটাস',         cat:'plants', price:150, emoji:'🌵' },

  // ELECTRIC
  { id:13, name:'LED Bulb 9W',      nameBn:'LED বাল্ব ৯ওয়াট', cat:'electric', price:80,  emoji:'💡', badge:'Hot', image:'pic/bulb.jpg'},
  { id:14, name:'Power Extension',  nameBn:'পাওয়ার এক্সটেনশন', cat:'electric', price:350, emoji:'🔌' },
  { id:15, name:'USB Charger 65W',  nameBn:'USB চার্জার ৬৫W', cat:'electric', price:680, emoji:'⚡', badge:'New' },
  { id:16, name:'Ceiling Fan',      nameBn:'সিলিং ফ্যান',    cat:'electric', price:2800, emoji:'🌀', badge:'Best' },

  // CONFECTIONERY
  { id:17, name:'Chocolate Cake',   nameBn:'চকোলেট কেক',     cat:'confectionery', price:650, emoji:'🎂', badge:'Popular' },
  { id:18, name:'Misti Doi',        nameBn:'মিষ্টি দই',       cat:'confectionery', price:80,  emoji:'🍮' },
  { id:19, name:'Rasogolla Box',    nameBn:'রসগোল্লা বক্স',  cat:'confectionery', price:250, emoji:'🍡' },
  { id:20, name:'Chocolate Bar',    nameBn:'চকোলেট বার',      cat:'confectionery', price:45,  emoji:'🍫' },

  // COFFEE
  { id:21, name:'Espresso (Single)', nameBn:'এসপ্রেসো',        cat:'coffee', price:80,  emoji:'☕', badge:'Hot' },
  { id:22, name:'Cappuccino',        nameBn:'ক্যাপুচিনো',      cat:'coffee', price:120, emoji:'🫖' },
  { id:23, name:'Cold Brew',         nameBn:'কোল্ড ব্রু',      cat:'coffee', price:150, emoji:'🧊', badge:'New' },
  { id:24, name:'Caramel Latte',     nameBn:'ক্যারামেল লাটে',  cat:'coffee', price:160, emoji:'🧇' },

  // GROCERY
  { id:25, name:'Basmati Rice 5kg',  nameBn:'বাসমতি চাল ৫কেজি', cat:'grocery', price:420, emoji:'🌾', badge:'Best' },
  { id:26, name:'Mustard Oil 1L',    nameBn:'সরিষার তেল ১লি',   cat:'grocery', price:180, emoji:'🫙' },
  { id:27, name:'Dal (Lentil) 1kg',  nameBn:'মসুর ডাল ১কেজি',  cat:'grocery', price:130, emoji:'🫘' },
  { id:28, name:'Sugar 1kg',         nameBn:'চিনি ১কেজি',       cat:'grocery', price:95,  emoji:'🍬' },

  // PHARMACY
  { id:29, name:'Paracetamol 500mg', nameBn:'প্যারাসিটামল ৫০০মিগ্রা', cat:'pharmacy', price:5,   emoji:'💊', badge:'OTC' },
  { id:30, name:'Vitamin C Tablet',  nameBn:'ভিটামিন সি ট্যাবলেট',     cat:'pharmacy', price:120, emoji:'🔴' },
  { id:31, name:'First Aid Kit',     nameBn:'ফার্স্ট এইড কিট',         cat:'pharmacy', price:350, emoji:'🩹', badge:'Essential' },
  { id:32, name:'Hand Sanitizer',    nameBn:'হ্যান্ড স্যানিটাইজার',      cat:'pharmacy', price:85,  emoji:'🧴' },
];

// ── SERVICE DATA ──────────────────────────────────────────
const SERVICES = [
  { id:'s1', icon:'⚡', name:'Electrician',   nameBn:'ইলেক্ট্রিশিয়ান',  desc:'Wiring, repairs, installations, and electrical troubleshooting at home or office.',  descBn:'বাড়ি বা অফিসে ওয়্যারিং, মেরামত, ইনস্টলেশন এবং বৈদ্যুতিক সমস্যা সমাধান।' },
  { id:'s2', icon:'🔧', name:'Plumber',       nameBn:'প্লাম্বার',         desc:'Pipe fitting, leak repairs, bathroom fixtures, and drainage solutions.',               descBn:'পাইপ ফিটিং, লিক মেরামত, বাথরুম ফিক্সচার এবং ড্রেনেজ সমাধান।' },
  { id:'s3', icon:'🪚', name:'Carpenter',     nameBn:'কাঠমিস্ত্রি',       desc:'Furniture making, wood repairs, custom cabinets, and door/window installations.',      descBn:'আসবাবপত্র তৈরি, কাঠ মেরামত, কাস্টম ক্যাবিনেট এবং দরজা/জানালা ইনস্টলেশন।' },
  { id:'s4', icon:'🏭', name:'Workshop',      nameBn:'ওয়ার্কশপ',          desc:'Metalwork, welding, machinery repair, and custom fabrication services.',                descBn:'ধাতু কাজ, ওয়েল্ডিং, মেশিনারি মেরামত এবং কাস্টম ফ্যাব্রিকেশন সেবা।' },
  { id:'s5', icon:'🔩', name:'Hardware Shop', nameBn:'হার্ডওয়্যার শপ',    desc:'All construction materials, fasteners, paints, tools, and building supplies.',        descBn:'সব নির্মাণ সামগ্রী, ফাস্টেনার, রং, যন্ত্রপাতি এবং বিল্ডিং সরবরাহ।' },
];

// ── STATE ─────────────────────────────────────────────────
let cart      = [];
let selected  = {}; // productId → { qty, delivery }
let activeFilter = 'all';
let searchTerm   = '';

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderServices();
  updateCartUI();
  window.addEventListener('scroll', handleScroll);
});

// ── LANGUAGE ─────────────────────────────────────────────
function toggleLang() {
  LANG.current = LANG.current === 'en' ? 'bn' : 'en';
  const btn = document.getElementById('langToggle');
  btn.textContent = LANG.current === 'en' ? 'বাংলা' : 'English';
  document.body.classList.toggle('bn', LANG.current === 'bn');
  applyLang();
  renderProducts();
  renderServices();
}

function applyLang() {
  const l = LANG.current;
  document.querySelectorAll('[data-en]').forEach(el => {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
    const val = el.getAttribute(`data-${l}`);
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-en-placeholder]').forEach(el => {
    el.placeholder = el.getAttribute(`data-${l}-placeholder`) || el.getAttribute('data-en-placeholder');
  });
}

// ── MENU ─────────────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ── PRODUCTS RENDER ───────────────────────────────────────
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const noRes = document.getElementById('noResults');
  grid.innerHTML = '';

  const filtered = PRODUCTS.filter(p => {
    const matchCat  = activeFilter === 'all' || p.cat === activeFilter;
    const term      = searchTerm.toLowerCase();
    const matchName = p.name.toLowerCase().includes(term) || p.nameBn.includes(term);
    return matchCat && matchName;
  });

  if (!filtered.length) {
    noRes.style.display = 'block';
    return;
  }
  noRes.style.display = 'none';

  filtered.forEach((p, i) => {
    const isSelected = !!selected[p.id];
    const qty = selected[p.id]?.qty || 1;
    const del = selected[p.id]?.delivery || 'home';
    const l = LANG.current;
    const displayName = l === 'bn' ? p.nameBn : p.name;

    const card = document.createElement('div');
    card.className = `product-card${isSelected ? ' selected' : ''}`;
    card.setAttribute('data-cat', p.cat);
    card.style.animationDelay = `${i * 0.05}s`;

    card.innerHTML = `
      <div class="product-img-wrap">
        <div class="product-emoji-img">${p.emoji}</div>
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        <div class="select-check ${isSelected ? 'checked' : ''}" onclick="toggleSelect(${p.id})" title="Select for bulk order">
          ${isSelected ? '<i class="fas fa-check"></i>' : ''}
        </div>
      </div>
      <div class="product-body">
        <div class="product-cat">${p.cat.toUpperCase()}</div>
        <div class="product-name">${displayName}</div>
        <div class="product-price">৳${p.price.toLocaleString()}</div>

        <div class="qty-wrap">
          <span class="qty-label">${l === 'bn' ? 'পরিমাণ:' : 'Qty:'}</span>
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
            <span class="qty-num" id="qty-${p.id}">${qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
          </div>
        </div>

        <div class="delivery-wrap">
          <label class="del-opt ${del === 'home' ? 'selected' : ''}" id="del-home-${p.id}">
            <input type="radio" name="del-${p.id}" value="home" ${del === 'home' ? 'checked' : ''}
              onchange="setDelivery(${p.id}, 'home')">
            🏠 ${l === 'bn' ? 'হোম ডেলিভারি' : 'Home Delivery'}
          </label>
          <label class="del-opt ${del === 'office' ? 'selected' : ''}" id="del-office-${p.id}">
            <input type="radio" name="del-${p.id}" value="office" ${del === 'office' ? 'checked' : ''}
              onchange="setDelivery(${p.id}, 'office')">
            🏢 ${l === 'bn' ? 'অফিস ডেলিভারি' : 'Office Delivery'}
          </label>
        </div>

        <div class="product-btns">
          <button class="btn-add-cart" onclick="addToCart(${p.id})">
            <i class="fas fa-cart-plus"></i>
            ${l === 'bn' ? 'কার্টে যোগ করুন' : 'Add to Cart'}
          </button>
          <div class="product-btns-row">
            <button class="btn-whatsapp" onclick="orderWhatsApp(${p.id})">
              <i class="fab fa-whatsapp"></i> WhatsApp
            </button>
            <button class="btn-messenger" onclick="orderMessenger(${p.id})">
              <i class="fab fa-facebook-messenger"></i> Messenger
            </button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── SERVICES RENDER ───────────────────────────────────────
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = '';
  const l = LANG.current;

  SERVICES.forEach((s, i) => {
    const name = l === 'bn' ? s.nameBn : s.name;
    const desc = l === 'bn' ? s.descBn : s.desc;
    const card = document.createElement('div');
    card.className = 'service-card';
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="service-icon">${s.icon}</div>
      <div class="service-name">${name}</div>
      <div class="service-desc">${desc}</div>
      <div class="service-btns">
        <button class="btn-whatsapp" onclick="serviceWhatsApp('${name}')">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </button>
        <button class="btn-messenger" onclick="serviceMessenger()">
          <i class="fab fa-facebook-messenger"></i> Messenger
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── FILTER & SEARCH ───────────────────────────────────────
function filterCat(cat) {
  activeFilter = cat;
  document.querySelectorAll('.cat-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-cat') === cat);
  });
  renderProducts();
}

function searchProducts() {
  searchTerm = document.getElementById('searchInput').value;
  renderProducts();
}

function clearSearch() {
  searchTerm = '';
  document.getElementById('searchInput').value = '';
  renderProducts();
}

// ── QTY & DELIVERY ────────────────────────────────────────
function getOrInitProduct(id) {
  if (!selected[id]) selected[id] = { qty: 1, delivery: 'home' };
  return selected[id];
}

function changeQty(id, delta) {
  const s = getOrInitProduct(id);
  s.qty = Math.max(1, s.qty + delta);
  const el = document.getElementById(`qty-${id}`);
  if (el) el.textContent = s.qty;
  // Update cart if item is in cart
  const cartItem = cart.find(c => c.id === id);
  if (cartItem) {
    cartItem.qty = s.qty;
    updateCartUI();
  }
}

function setDelivery(id, type) {
  const s = getOrInitProduct(id);
  s.delivery = type;
  const home   = document.getElementById(`del-home-${id}`);
  const office = document.getElementById(`del-office-${id}`);
  if (home)   home.classList.toggle('selected', type === 'home');
  if (office) office.classList.toggle('selected', type === 'office');
  // Update cart if in cart
  const cartItem = cart.find(c => c.id === id);
  if (cartItem) { cartItem.delivery = type; updateCartUI(); }
}

// ── TOGGLE SELECT (for bulk WhatsApp) ────────────────────
function toggleSelect(id) {
  if (selected[id]) {
    delete selected[id];
  } else {
    selected[id] = { qty: 1, delivery: 'home' };
  }
  renderProducts();
}

// ── CART ─────────────────────────────────────────────────
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  const s = getOrInitProduct(id);
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty = s.qty;
    existing.delivery = s.delivery;
  } else {
    cart.push({ ...product, qty: s.qty, delivery: s.delivery });
  }
  updateCartUI();
  showToast(`✅ ${LANG.current === 'bn' ? 'কার্টে যোগ হয়েছে!' : 'Added to cart!'}`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
  showToast(LANG.current === 'bn' ? '🗑 কার্ট খালি হয়েছে' : '🗑 Cart cleared');
}

function updateCartUI() {
  const totalProducts = cart.length;
  const totalItems    = cart.reduce((sum, c) => sum + c.qty, 0);
  const totalPrice    = cart.reduce((sum, c) => sum + c.price * c.qty, 0);

  document.getElementById('totalProducts').textContent = totalProducts;
  document.getElementById('totalItems').textContent    = totalItems;
  document.getElementById('totalPrice').textContent    = `৳${totalPrice.toLocaleString()}`;
  document.getElementById('cartBadge').textContent     = totalItems;
  document.getElementById('fcItems').textContent       = `${totalItems} ${LANG.current === 'bn' ? 'আইটেম' : 'items'}`;
  document.getElementById('fcPrice').textContent       = `৳${totalPrice.toLocaleString()}`;

  // Floating cart visibility
  const fc = document.getElementById('floatingCart');
  fc.classList.toggle('visible', totalItems > 0);

  // Cart actions
  document.getElementById('cartActions').style.display = cart.length ? 'flex' : 'none';
  document.getElementById('cartEmpty').style.display   = cart.length ? 'none' : 'flex';

  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  // Remove old cart items (but keep empty msg)
  container.querySelectorAll('.cart-item').forEach(el => el.remove());

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    const l = LANG.current;
    const name = l === 'bn' ? item.nameBn : item.name;
    const delLabel = item.delivery === 'home'
      ? (l === 'bn' ? '🏠 হোম ডেলিভারি' : '🏠 Home Delivery')
      : (l === 'bn' ? '🏢 অফিস ডেলিভারি' : '🏢 Office Delivery');

    div.innerHTML = `
      <div style="width:64px;height:64px;background:var(--bg3);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:2.2rem;flex-shrink:0;">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${name}</div>
        <div class="cart-item-meta">${l === 'bn' ? 'পরিমাণ:' : 'Qty:'} ${item.qty} · ${delLabel}</div>
      </div>
      <div class="cart-item-price">৳${(item.price * item.qty).toLocaleString()}</div>
      <button class="btn-remove" onclick="removeFromCart(${item.id})" title="Remove">
        <i class="fas fa-trash"></i>
      </button>
    `;
    document.getElementById('cartItems').appendChild(div);
  });
}

// ── WHATSAPP / MESSENGER ─────────────────────────────────
function orderWhatsApp(id) {
  const product = PRODUCTS.find(p => p.id === id);
  const s = getOrInitProduct(id);
  const l = LANG.current;
  const name = l === 'bn' ? product.nameBn : product.name;
  const del  = s.delivery === 'home' ? 'Home Delivery' : 'Office Delivery';
  const msg  = `Hello ELECTRO SHOP! 👋\n\nI want to order:\n📦 Product: ${name}\n💰 Price: ৳${product.price} x ${s.qty} = ৳${product.price * s.qty}\n🚚 Delivery: ${del}\n\nPlease confirm my order. Thank you!`;
  window.open(`https://wa.me/qr/BGTPIGL7YP7TA1${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function orderMessenger(id) {
  window.open('https://m.me/abdullah.binusuf.96', '_blank');
}

function serviceWhatsApp(serviceName) {
  const msg = `Hello ELECTRO SHOP! 👋\n\nI need a ${serviceName} service.\n\nPlease contact me to book an appointment. Thank you!`;
  window.open(`https://wa.me/qr/BGTPIGL7YP7TA1${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function serviceMessenger() {
  window.open('https://m.me/abdullah.binusuf.96', '_blank');
}

function sendAllWhatsApp() {
  const selectedIds = Object.keys(selected).map(Number);
  if (!selectedIds.length) {
    showToast(LANG.current === 'bn' ? '⚠️ কোনো পণ্য নির্বাচন করুন!' : '⚠️ Select at least one product!');
    return;
  }
  const lines = selectedIds.map(id => {
    const p = PRODUCTS.find(pr => pr.id === id);
    const s = selected[id];
    const name = LANG.current === 'bn' ? p.nameBn : p.name;
    const del  = s.delivery === 'home' ? 'Home Delivery' : 'Office Delivery';
    return `• ${name} — Qty: ${s.qty}, ${del}, ৳${p.price * s.qty}`;
  });
  const total = selectedIds.reduce((sum, id) => {
    const p = PRODUCTS.find(pr => pr.id === id);
    return sum + p.price * selected[id].qty;
  }, 0);
  const msg = `Hello ELECTRO SHOP! 👋\n\nBulk Order:\n\n${lines.join('\n')}\n\n💰 Total: ৳${total.toLocaleString()}\n\nPlease confirm my order. Thank you!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function checkoutWhatsApp() {
  if (!cart.length) {
    showToast(LANG.current === 'bn' ? '⚠️ কার্ট খালি!' : '⚠️ Cart is empty!');
    return;
  }
  const lines = cart.map(item => {
    const name = LANG.current === 'bn' ? item.nameBn : item.name;
    const del  = item.delivery === 'home' ? 'Home Delivery' : 'Office Delivery';
    return `• ${name} — Qty: ${item.qty}, ${del}, ৳${item.price * item.qty}`;
  });
  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const msg = `Hello ELECTRO SHOP! 👋\n\nMy Cart Order:\n\n${lines.join('\n')}\n\n💰 Total: ৳${total.toLocaleString()}\n\nPlease confirm my order. Thank you!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ── CONTACT / COMMENTS ────────────────────────────────────
function submitComment() {
  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const msg  = document.getElementById('contactMsg').value.trim();
  const l = LANG.current;

  if (!name || !msg) {
    showToast(l === 'bn' ? '⚠️ নাম ও বার্তা আবশ্যক' : '⚠️ Name and message are required');
    return;
  }

  const list = document.getElementById('commentsList');
  const now  = new Date();
  const timeStr = now.toLocaleString('en-BD', { hour12: true, hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'short' });

  const item = document.createElement('div');
  item.className = 'comment-item';
  item.innerHTML = `
    <div class="comment-header">
      <span class="comment-name">👤 ${escHtml(name)}${phone ? ` · 📞 ${escHtml(phone)}` : ''}</span>
      <span class="comment-time">${timeStr}</span>
    </div>
    <div class="comment-msg">${escHtml(msg)}</div>
  `;
  list.insertBefore(item, list.firstChild);

  // Reset
  document.getElementById('contactName').value = '';
  document.getElementById('contactPhone').value = '';
  document.getElementById('contactMsg').value  = '';
  showToast(l === 'bn' ? '✅ বার্তা পাঠানো হয়েছে!' : '✅ Message submitted!');
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── HELPERS ───────────────────────────────────────────────
function scrollToCart() {
  document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
}

function handleScroll() {
  const header = document.getElementById('mainHeader');
  header.style.boxShadow = window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.5)' : 'none';
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});
