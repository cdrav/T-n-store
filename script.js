// --- 1. Datos de Productos ---
const CONFIG = {
    phoneNumber: '573017638046', // Número único para todo el sitio (sin el + para la API)
    storeName: 'TínStore',
    currency: '$'
};

const products = [
    // --- Medias ---
    {
        id: 'medias-cereza',
        name: 'Medias Cereza',
        category: 'medias',
        price: 8000,
        image: 'imagenes/media-cereza.jpeg',
        sizes: ['Única'],
        desc: 'Tobilleras con bordado de cerezas. Diseños surtidos, no se repiten.',
        stock: 3
    },
    {
        id: 'medias-stitch',
        name: 'Medias Stitch',
        category: 'medias',
        price: 10000,
        image: 'imagenes/media-stitch.jpeg',
        sizes: ['Única'],
        desc: 'Colección Stitch, 5 estampados diferentes. Diseño surtido al azar.',
        badge: 'Popular',
        stock: 5
    },
    {
        id: 'medias-vaca',
        name: 'Medias Vaca',
        category: 'medias',
        price: 6000,
        image: 'imagenes/media-vaca-blanca.jpeg',
        sizes: ['Única'],
        desc: 'Estampado de vaquita, disponible en negra, rayas, blanca o "sweet milk". Diseño surtido al azar.',
        stock: 5
    },
    {
        id: 'medias-huellas',
        name: 'Medias Huellitas',
        category: 'medias',
        price: 8000,
        image: 'imagenes/media-huellas.jpeg',
        sizes: ['Única'],
        desc: 'Bordado de huellitas en negro, blanco o gris. Diseño surtido al azar.',
        stock: 6
    },

    // --- Termos ---
    {
        id: 'termo-stitch-azul',
        name: 'Termo Stitch Azul',
        category: 'termos',
        price: 35000,
        image: 'imagenes/termo-stitch-azul.jpeg',
        sizes: ['Única'],
        desc: 'Termo deportivo con correa, edición Stitch.',
        badge: '¡Última unidad!',
        stock: 1
    },
    {
        id: 'termo-stitch-rosado',
        name: 'Termo Stitch Rosado',
        category: 'termos',
        price: 35000,
        image: 'imagenes/termo-stitch-rosado.jpeg',
        sizes: ['Única'],
        desc: 'Termo deportivo con correa, edición Stitch.',
        stock: 3
    },

    // --- Pantuflas ---
    {
        id: 'pantuflas-gato-negro',
        name: 'Pantuflas Gato Negro',
        category: 'pantuflas',
        price: 30000,
        image: 'imagenes/pantuflas-gato-negro.jpeg',
        sizes: ['Única'],
        desc: 'Pantuflas afelpadas con bordado de gatito. Comodidad total para casa.',
        badge: '¡Última unidad!',
        stock: 1
    },

    // --- Relojes ---
    {
        id: 'reloj-smart',
        name: 'Reloj Inteligente Smart Watch',
        category: 'relojes',
        price: 75000,
        image: 'imagenes/reloj-smart.jpeg',
        sizes: ['Única'],
        desc: 'Smartwatch con notificaciones, llamadas y monitoreo de actividad.',
        badge: 'Pocas unidades',
        stock: 2,
        refImage: true
    }
];

// --- Información: Rastreo / Envíos / Cambios ---
const INFO_CONTENT = {
    tracking: {
        title: 'Rastrear Pedido',
        body: `
            <p>Por ahora no tenemos rastreo automático en línea. Apenas confirmamos y despachamos tu pedido, te escribimos por WhatsApp con el estado del envío (y el número de guía de Interrapidísimo cuando aplique).</p>
            <a href="https://wa.me/573017638046?text=Hola!%20Quiero%20conocer%20el%20estado%20de%20mi%20pedido" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 mt-2 bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition"><i class="fa-brands fa-whatsapp"></i> Consultar mi pedido</a>
        `
    },
    shipping: {
        title: 'Política de Envíos',
        body: `
            <p><i class="fa-solid fa-house text-brand mr-2"></i><b>Roldanillo, Valle del Cauca</b> (sede del emprendimiento): domicilio <b>gratis</b>, entrega el mismo día o al siguiente día hábil.</p>
            <p><i class="fa-solid fa-truck text-brand mr-2"></i><b>Resto de Colombia:</b> envío nacional con Interrapidísimo. El costo depende de tu ciudad y te lo confirmamos por WhatsApp antes de despachar. Tiempo estimado: 2 a 5 días hábiles.</p>
            <p class="text-xs text-gray-400">Los tiempos pueden variar según la zona y la operación de la transportadora.</p>
            <a href="https://wa.me/573017638046?text=Hola!%20Quiero%20saber%20el%20costo%20de%20env%C3%ADo%20a%20mi%20ciudad" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 mt-2 bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition"><i class="fa-brands fa-whatsapp"></i> Consultar costo a mi ciudad</a>
        `
    },
    returns: {
        title: 'Cambios y Devoluciones',
        body: `
            <p>Tienes <b>5 días hábiles</b> desde que recibes tu pedido para solicitar un cambio.</p>
            <ul class="list-disc list-inside space-y-1">
                <li>El producto debe estar sin usar, con sus etiquetas y empaque original.</li>
                <li>Si llegó dañado o fue un error nuestro en el pedido, nosotros cubrimos el envío del cambio.</li>
                <li>Si el cambio es por talla o gusto, el costo de envío corre por cuenta del cliente.</li>
            </ul>
            <a href="https://wa.me/573017638046?text=Hola!%20Quiero%20solicitar%20un%20cambio%20o%20devoluci%C3%B3n" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 mt-2 bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition"><i class="fa-brands fa-whatsapp"></i> Solicitar un cambio</a>
        `
    }
};

function openInfoModal(type) {
    const info = INFO_CONTENT[type];
    if (!info) return;
    document.getElementById('info-modal-title').innerText = info.title;
    document.getElementById('info-modal-body').innerHTML = info.body;
    document.getElementById('info-modal').classList.remove('hidden');
}

function closeInfoModal() {
    document.getElementById('info-modal').classList.add('hidden');
}

// --- 2. Lógica del Carrito ---
let cart = [];
try {
    cart = JSON.parse(localStorage.getItem('tinStore_cart')) || [];
} catch (e) {
    console.error("Error cargando carrito, reiniciando...", e);
    localStorage.removeItem('tinStore_cart');
}

function addToCart(name, price, qtyId, sizeId, btnElement, stock) {
    const qtyInput = document.getElementById(qtyId);
    const sizeInput = document.getElementById(sizeId);

    if (!qtyInput || !sizeInput) {
        console.error("Error: No se encontraron los elementos de entrada.");
        return;
    }

    const qty = parseInt(qtyInput.value);
    const size = sizeInput.value;

    if(isNaN(qty) || qty < 1) {
        alert("Por favor ingresa una cantidad válida");
        return;
    }

    const existingItem = cart.find(item => item.name === name && item.size === size);
    const currentQtyInCart = existingItem ? existingItem.qty : 0;

    if (stock && (currentQtyInCart + qty) > stock) {
        alert(`Solo quedan ${stock} unidades disponibles de "${name}".`);
        return;
    }

    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ name, price, qty, size });
    }
    
    localStorage.setItem('tinStore_cart', JSON.stringify(cart));
    updateCartUI();
    
    // Efecto visual botón
    if(btnElement) {
        const btn = btnElement;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.classList.remove('bg-gray-900');
        btn.classList.add('bg-green-500');
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('bg-green-500');
            btn.classList.add('bg-gray-900');
        }, 1000);
    }
}

function updateCartUI() {
    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    const countElement = document.getElementById('cart-count');
    if(countElement) countElement.innerText = totalCount;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if(modal) {
        modal.classList.toggle('hidden');
        if (!modal.classList.contains('hidden')) {
            renderCartItems();
        }
    }
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    const totalElem = document.getElementById('cart-total');
    if(!container || !totalElem) return;

    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = '<div class="text-center py-8"><i class="fa-solid fa-basket-shopping text-4xl text-gray-300 mb-3"></i><p class="text-gray-500">Tu carrito está vacío.</p></div>';
    } else {
        const itemsHTML = cart.map((item, index) => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            return `
                <div class="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <div>
                        <p class="font-semibold text-sm text-gray-800">${item.name} <span class="text-gray-500 text-xs">(${item.size})</span> <span class="text-brand text-xs ml-1 font-bold">x${item.qty}</span></p>
                        <p class="text-gray-500 text-xs font-bold">$${itemTotal.toLocaleString()}</p>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-gray-400 hover:text-red-500 transition p-1">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>`;
        }).join('');
        container.innerHTML = itemsHTML;
    }
    totalElem.innerText = '$' + total.toLocaleString();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('tinStore_cart', JSON.stringify(cart));
    renderCartItems();
    updateCartUI();
}

function sendOrder() {
    const name = document.getElementById('customer-name').value;
    const address = document.getElementById('customer-address').value;
    const phone = document.getElementById('customer-phone').value;

    if (cart.length === 0) {
        alert('Agrega productos al carrito primero.');
        return;
    }
    if (!name || !address || !phone) {
        alert('Por favor completa tus datos de envío.');
        return;
    }

    // Generar número de orden aleatorio para referencia
    const orderId = Math.floor(Math.random() * 10000) + 1;
    const date = new Date().toLocaleDateString();

    let message = `*NUEVO PEDIDO WEB #ORD-${orderId}* 🛍️%0A`;
    message += `📅 Fecha: ${date}%0A%0A`;
    message += `*DETALLE DEL PEDIDO:*%0A---------------------------%0A`;
    
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        message += `✅ *${item.name}*%0A   └ Talla: ${item.size} | Cant: ${item.qty} | $${itemTotal.toLocaleString()}%0A`;
        total += itemTotal;
    });
    
    message += `---------------------------%0A💰 *TOTAL A PAGAR: $${total.toLocaleString()}*%0A%0A`;
    message += `📍 *DATOS DE ENVÍO:*%0A`;
    message += `👤 Cliente: ${name}%0A`;
    message += `🏠 Dirección: ${address}%0A`;
    message += `📱 Contacto: ${phone}%0A%0A`;
    message += `_Espero confirmación para realizar el pago. Gracias!_`;

    window.open(`https://wa.me/${CONFIG.phoneNumber}?text=${message}`, '_blank');

    // Vaciar carrito y formulario tras enviar el pedido
    cart = [];
    localStorage.removeItem('tinStore_cart');
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-address').value = '';
    document.getElementById('customer-phone').value = '';
    updateCartUI();
    renderCartItems();
    toggleCart();
}

// --- 4. Funciones de Renderizado y Filtros ---
function handleImageError(img) {
    img.onerror = null; // Evita bucles infinitos
    // Imagen gris con texto "Sin Imagen" en código base64 (funciona offline)
    img.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3QgZmlsbD0iI2VlZSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiLz48dGV4dCBmaWxsPSIjNTU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMCIgZHk9IjEwLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiB4PSI1MCUiIHk9IjUwJSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U2luIEltYWdlbjwvdGV4dD48L3N2Zz4=';
}

function renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = products.map(product => {
        const sizes = product.sizes || ['Única'];
        return `
        <div class="product-card ${product.category} bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 p-4 group">
            <div class="relative bg-gray-100 rounded-lg overflow-hidden h-64 mb-4 ring-1 ring-black/5">
                <img src="${product.image}" class="object-contain w-full h-full transform group-hover:scale-105 transition duration-500" alt="${product.name}" loading="lazy" onerror="handleImageError(this)">
                ${product.badge ? `<span class="absolute top-2 left-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded">${product.badge}</span>` : ''}
                ${product.refImage ? `<span class="absolute bottom-2 right-2 bg-gray-900/80 text-white text-[10px] font-semibold px-2 py-1 rounded">Imagen de referencia</span>` : ''}
            </div>
            <h3 class="text-lg font-semibold text-gray-800">${product.name}</h3>
            <p class="text-gray-500 text-sm mb-1">${product.desc || ''}</p>
            ${product.stock ? `<p class="text-xs text-gray-400 mb-2">${product.stock === 1 ? 'Queda 1 unidad' : 'Quedan ' + product.stock + ' unidades'}</p>` : ''}
            <div class="flex flex-col gap-2">
                <span class="text-xl font-bold text-gray-900">$${product.price.toLocaleString()}</span>
                <div class="flex justify-between items-center gap-2">
                    <select id="size-${product.id}" class="border border-gray-200 rounded-lg text-sm py-1 px-2 focus:border-brand outline-none bg-white w-24">
                        ${sizes.map(s => `<option value="${s}">${s === 'Única' ? 'Única' : 'Talla ' + s}</option>`).join('')}
                    </select>
                    <div class="flex items-center gap-2">
                        <input type="number" id="qty-${product.id}" min="1" ${product.stock ? `max="${product.stock}"` : ''} value="1" class="w-12 border border-gray-200 rounded-lg text-center py-1 text-sm focus:border-brand outline-none">
                        <button onclick="addToCart('${product.name}', ${product.price}, 'qty-${product.id}', 'size-${product.id}', this, ${product.stock || 'null'})" class="bg-gray-900 text-white p-2 rounded-full hover:bg-brand transition shadow-md">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>`
    }).join('');
}

function selectCategory(category) {
    const section = document.getElementById('coleccion');
    if(section) section.scrollIntoView({ behavior: 'smooth' });
    filterSelection(category);
}

function filterSelection(category) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// --- 5. Inicialización ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();

    // Lógica del Carrusel (Solo si existe en la página)
    const carouselSlides = document.querySelectorAll('#hero-carousel > div');
    if (carouselSlides.length > 0) {
        let activeSlide = 0;
        setInterval(() => {
            carouselSlides[activeSlide].classList.remove('opacity-100');
            carouselSlides[activeSlide].classList.add('opacity-0');
            activeSlide = (activeSlide + 1) % carouselSlides.length;
            carouselSlides[activeSlide].classList.remove('opacity-0');
            carouselSlides[activeSlide].classList.add('opacity-100');
        }, 3500);
    }
});