// --- 1. Datos de Productos ---
const CONFIG = {
    phoneNumber: '573017638046', // Número único para todo el sitio (sin el + para la API)
    storeName: 'TínStore',
    currency: '$',
    wompiPublicKey: 'pub_prod_AwwLlOJmf0WNyRZwSuBrGB17lneUNbRF',
    // URL del Cloudflare Worker que calcula la firma de integridad (ver wompi-signature-worker.js)
    wompiSignatureEndpoint: 'https://tinstore-wompi-signature.cristian23wwe.workers.dev'
};

const products = [
    // --- Medias ---
    {
        id: 'medias-cereza',
        name: 'Medias Cereza',
        category: 'medias',
        price: 9200,
        image: 'imagenes/media-cereza.jpeg',
        sizes: ['Única'],
        desc: 'Tobilleras con bordado de cerezas. Diseños surtidos, no se repiten.',
        stock: 3
    },
    {
        id: 'medias-stitch',
        name: 'Medias Stitch',
        category: 'medias',
        price: 11200,
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
        price: 7100,
        image: 'imagenes/media-vaca-blanca.jpeg',
        sizes: ['Única'],
        desc: 'Estampado de vaquita, disponible en negra, rayas, blanca o "sweet milk". Diseño surtido al azar.',
        stock: 5
    },
    {
        id: 'medias-huellas',
        name: 'Medias Huellitas',
        category: 'medias',
        price: 9200,
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
        price: 37000,
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
        price: 37000,
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
        price: 31900,
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
        price: 78400,
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

function addToCart(id, name, price, qtyId, sizeId, btnElement, stock) {
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

    const existingItem = cart.find(item => item.id === id && item.size === size);
    const currentQtyInCart = existingItem ? existingItem.qty : 0;

    if (stock && (currentQtyInCart + qty) > stock) {
        alert(`Solo quedan ${stock} unidades disponibles de "${name}".`);
        return;
    }

    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ id, name, price, qty, size });
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

async function payWithWompi() {
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
    if (!CONFIG.wompiSignatureEndpoint) {
        alert('El pago con Wompi todavía no está completamente configurado. Por favor coordina tu pedido por WhatsApp mientras tanto.');
        return;
    }

    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const reference = 'TINSTORE-' + Date.now();
    const amountInCents = String(Math.round(total * 100));
    const currency = 'COP';

    // Avisamos el pedido por correo en segundo plano (no depende de abrir nada en el
    // celular del cliente, así que no falla en navegadores in-app ni bloqueadores de
    // ventanas emergentes). Esto NO confirma el pago -- eso llega por correo de Wompi --
    // solo garantiza que el pedido (qué y a dónde enviarlo) nunca se pierda.
    if (CONFIG.wompiSignatureEndpoint) {
        fetch(`${CONFIG.wompiSignatureEndpoint}/notify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cart, name, address, phone, reference, total })
        }).catch(e => console.error('No se pudo enviar el aviso de pedido por correo:', e));
    }

    let signature;
    try {
        const sigParams = new URLSearchParams({ reference, amount_in_cents: amountInCents, currency });
        const res = await fetch(`${CONFIG.wompiSignatureEndpoint}?${sigParams.toString()}`);
        const json = await res.json();
        signature = json.signature;
        if (!signature) throw new Error('Firma vacía');
    } catch (e) {
        console.error('No se pudo obtener la firma de integridad:', e);
        alert('No pudimos preparar el pago en este momento. Por favor intenta de nuevo o coordina tu pedido por WhatsApp.');
        return;
    }

    // Guardamos el pedido para poder confirmarlo por WhatsApp cuando el cliente vuelva del pago
    localStorage.setItem('tinStore_pendingOrder', JSON.stringify({ cart, name, address, phone, reference, total }));

    const redirectUrl = window.location.origin + window.location.pathname + '?wompi_return=1';
    const params = new URLSearchParams({
        'public-key': CONFIG.wompiPublicKey,
        'currency': currency,
        'amount-in-cents': amountInCents,
        'reference': reference,
        'signature:integrity': signature,
        'redirect-url': redirectUrl
    });

    window.location.href = 'https://checkout.wompi.co/p/?' + params.toString();
}

async function checkWompiReturn() {
    const params = new URLSearchParams(window.location.search);
    if (!params.has('wompi_return')) return;

    // Limpiar la URL de inmediato para que un refresh no repita el proceso
    window.history.replaceState({}, document.title, window.location.pathname);

    const pendingRaw = localStorage.getItem('tinStore_pendingOrder');
    if (!pendingRaw) return;

    const pending = JSON.parse(pendingRaw);
    const wompiTransactionId = params.get('id');

    // Consultamos el estado real de la transacción con la llave pública (no revela datos sensibles)
    let status = null;
    if (wompiTransactionId) {
        try {
            const res = await fetch(`https://production.wompi.co/v1/transactions/${wompiTransactionId}`, {
                headers: { 'Authorization': `Bearer ${CONFIG.wompiPublicKey}` }
            });
            const json = await res.json();
            status = json && json.data ? json.data.status : null;
        } catch (e) {
            console.error('No se pudo verificar el estado de la transacción en Wompi:', e);
        }
    }

    if (status === 'DECLINED' || status === 'ERROR' || status === 'VOIDED') {
        localStorage.removeItem('tinStore_pendingOrder');
        alert('Tu pago no fue aprobado por Wompi. Puedes intentarlo de nuevo o coordinar tu pedido por WhatsApp. Tu carrito sigue guardado.');
        return;
    }

    const isConfirmed = status === 'APPROVED';
    const header = isConfirmed
        ? `*NUEVO PEDIDO WEB - PAGO CONFIRMADO* 🛍️💜✅`
        : `*NUEVO PEDIDO WEB - PAGO EN VERIFICACIÓN* 🛍️💜⏳`;
    const totalLabel = isConfirmed ? 'TOTAL PAGADO' : 'TOTAL A VERIFICAR';
    const footerNote = isConfirmed
        ? `_Pago verificado como aprobado en Wompi. ¡Gracias!_`
        : `_No pude confirmar automáticamente el estado del pago. Por favor verifica la referencia en tu panel de Wompi antes de despachar._`;

    let message = `${header}\n`;
    message += `🔖 Referencia: ${pending.reference}\n`;
    message += `🧾 ID transacción Wompi: ${wompiTransactionId || 'N/A'}\n\n`;
    message += `*DETALLE DEL PEDIDO:*\n---------------------------\n`;
    pending.cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        message += `✅ *${item.name}*\n   └ Talla: ${item.size} | Cant: ${item.qty} | $${itemTotal.toLocaleString()}\n`;
    });
    message += `---------------------------\n💰 *${totalLabel}: $${pending.total.toLocaleString()}*\n\n`;
    message += `📍 *DATOS DE ENVÍO:*\n`;
    message += `👤 Cliente: ${pending.name}\n`;
    message += `🏠 Dirección: ${pending.address}\n`;
    message += `📱 Contacto: ${pending.phone}\n\n`;
    message += footerNote;

    localStorage.removeItem('tinStore_pendingOrder');
    localStorage.removeItem('tinStore_cart');
    cart = [];
    updateCartUI();

    // No usamos window.open() aquí: los navegadores bloquean ventanas emergentes
    // que se abren solas al cargar la página (sin un clic directo del usuario en ese instante).
    // Mostramos la confirmación en pantalla con un botón para que la persona lo abra ella misma.
    const waUrl = `https://wa.me/${CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
    document.getElementById('info-modal-title').innerText = isConfirmed ? '¡Pago confirmado! 🎉' : 'Pago en verificación';
    document.getElementById('info-modal-body').innerHTML = `
        <p>${isConfirmed ? 'Tu pago fue aprobado por Wompi.' : 'Recibimos tu intento de pago, pero no pudimos confirmar el estado automáticamente.'} Para completar tu pedido, confírmalo con nosotros por WhatsApp:</p>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 mt-3 bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition"><i class="fa-brands fa-whatsapp"></i> Confirmar pedido por WhatsApp</a>
    `;
    document.getElementById('info-modal').classList.remove('hidden');
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
        <div class="product-card ${product.category} w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 p-4 group">
            <div class="relative bg-gray-100 rounded-lg overflow-hidden h-64 mb-4 ring-1 ring-black/5">
                <img src="${product.image}" class="object-contain w-full h-full transform group-hover:scale-105 transition duration-500" alt="${product.name}" loading="lazy" onerror="handleImageError(this)">
                ${product.badge ? `<span class="absolute top-2 left-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded">${product.badge}</span>` : ''}
                ${product.refImage ? `<span class="absolute bottom-2 right-2 bg-gray-900/80 text-white text-[10px] font-semibold px-2 py-1 rounded">Imagen de referencia</span>` : ''}
            </div>
            <h3 class="text-lg font-semibold text-gray-800 text-center">${product.name}</h3>
            <p class="text-gray-500 text-sm mb-1 text-center">${product.desc || ''}</p>
            ${product.stock ? `<p class="text-xs text-gray-400 mb-2 text-center">${product.stock === 1 ? 'Queda 1 unidad' : 'Quedan ' + product.stock + ' unidades'}</p>` : ''}
            <div class="flex flex-col gap-2 text-center">
                <span class="text-xl font-bold text-gray-900">$${product.price.toLocaleString()}</span>
                <div class="flex justify-between items-center gap-2">
                    <select id="size-${product.id}" class="border border-gray-200 rounded-lg text-sm py-1 px-2 focus:border-brand outline-none bg-white w-24">
                        ${sizes.map(s => `<option value="${s}">${s === 'Única' ? 'Única' : 'Talla ' + s}</option>`).join('')}
                    </select>
                    <div class="flex items-center gap-2">
                        <input type="number" id="qty-${product.id}" min="1" ${product.stock ? `max="${product.stock}"` : ''} value="1" class="w-12 border border-gray-200 rounded-lg text-center py-1 text-sm focus:border-brand outline-none">
                        <button onclick="addToCart('${product.id}', '${product.name}', ${product.price}, 'qty-${product.id}', 'size-${product.id}', this, ${product.stock || 'null'})" class="bg-gray-900 text-white p-2 rounded-full hover:bg-brand transition shadow-md">
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
    checkWompiReturn();

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