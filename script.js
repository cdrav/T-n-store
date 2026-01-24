// --- 1. Datos de Productos ---
const CONFIG = {
    phoneNumber: '573226942830', // Número único para todo el sitio (sin el + para la API)
    storeName: 'TínStore',
    currency: '$'
};

const products = [
    // --- Pijamas ---
    {
        id: 'pijama-seda-soft',
        name: 'Pijama Seda Soft',
        category: 'pijamas',
        price: 85000,
        image: 'imagenes/descarga (2).jpg',
        sizes: ['S', 'M', 'L', 'XL'],
        desc: 'Tacto suave y fresco para noches de ensueño.',
        badge: 'Nuevo'
    },
    {
        id: 'pijama-verano-lino',
        name: 'Pijama de Verano Lino',
        category: 'pijamas',
        price: 95000,
        image: 'https://images.unsplash.com/photo-1585224252582-d55c3c783504?w=500&auto=format&fit=crop',
        sizes: ['S', 'M', 'L'],
        desc: 'Frescura y elegancia con nuestro lino premium.',
    },
    {
        id: 'pijama-algodon-estampado',
        name: 'Pijama Algodón Estampado',
        category: 'pijamas',
        price: 78000,
        image: 'https://images.unsplash.com/photo-1617364852202-162445d575c3?w=500&auto=format&fit=crop',
        sizes: ['S', 'M', 'L', 'XL'],
        desc: 'Comodidad y diversión con diseños únicos.',
    },
    {
        id: 'pijama-polar-invierno',
        name: 'Pijama Polar Invierno',
        category: 'pijamas',
        price: 120000,
        image: 'https://images.unsplash.com/photo-1609603639342-52612f0d4f4b?w=500&auto=format&fit=crop',
        sizes: ['M', 'L', 'XL'],
        desc: 'Calidez garantizada para las noches más frías.',
        badge: 'Más Vendido'
    },

    // --- Termos ---
    {
        id: 'termo-stitch-original',
        name: 'Termo Stitch Original',
        category: 'termos',
        price: 45000,
        image: 'imagenes/images.jpg',
        sizes: ['Única'],
        desc: 'Edición especial para fans de Stitch.',
    },
    {
        id: 'termo-acero-pastel',
        name: 'Termo Acero Pastel',
        category: 'termos',
        price: 55000,
        image: 'https://images.unsplash.com/photo-1611213256292-399e74a43133?w=500&auto=format&fit=crop',
        sizes: ['Única'],
        desc: 'Mantiene tus bebidas frías o calientes con estilo.',
    },
    {
        id: 'termo-motivacional-litro',
        name: 'Termo Motivacional 1L',
        category: 'termos',
        price: 60000,
        image: 'https://images.unsplash.com/photo-1570904404130-197a01dd3a6f?w=500&auto=format&fit=crop',
        sizes: ['Única'],
        desc: 'Mantente hidratado y motivado todo el día.',
        badge: 'Popular'
    },

    // --- Medias ---
    {
        id: 'medias-pattern-divertidas',
        name: 'Medias Pattern Divertidas',
        category: 'medias',
        price: 15000,
        image: 'imagenes/descarga (3).jpg',
        sizes: ['Única'],
        desc: 'Dale un toque de color y alegría a tus pies.',
    },
    {
        id: 'medias-aguacate-style',
        name: 'Medias de Aguacate',
        category: 'medias',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1619561949789-36c9a7503f6f?w=500&auto=format&fit=crop',
        sizes: ['Única'],
        desc: 'El accesorio perfecto para los amantes del aguacate.',
    },
    {
        id: 'medias-arte-famoso',
        name: 'Medias Obras de Arte',
        category: 'medias',
        price: 22000,
        image: 'https://images.unsplash.com/photo-1576481953331-b59a710b71b9?w=500&auto=format&fit=crop',
        sizes: ['Única'],
        desc: 'Lleva el arte contigo a donde vayas.',
        badge: 'Exclusivo'
    },

    // --- Kits ---
    {
        id: 'kit-regalo',
        name: 'Kit Regalo Pareja',
        category: 'pijamas termos medias',
        price: 110000,
        image: 'imagenes/descarga (1).jpg',
        sizes: ['Única'],
        desc: 'El regalo perfecto para compartir.',
        badge: '-10%'
    },
    {
        id: 'pijama-satin-azul',
        name: 'Pijama Satín Azul',
        category: 'pijamas',
        price: 88000,
        image: 'imagenes/descarga (2).jpg',
        sizes: ['S', 'M', 'L'],
        desc: 'Elegancia y frescura en color azul profundo.'
    },
    {
        id: 'termo-inteligente',
        name: 'Termo Digital LED',
        category: 'termos',
        price: 55000,
        image: 'imagenes/images.jpg',
        sizes: ['Única'],
        desc: 'Muestra la temperatura de tu bebida al tacto.',
        badge: 'Tecnología'
    },
    {
        id: 'medias-invisibles',
        name: 'Medias Tobilleras Pack x3',
        category: 'medias',
        price: 25000,
        image: 'imagenes/descarga (3).jpg',
        sizes: ['Única'],
        desc: 'Comodidad invisible para tu calzado deportivo.'
    },
    {
        id: 'kit-relax-total',
        name: 'Kit Relax Total',
        category: 'pijamas termos medias',
        price: 135000,
        image: 'imagenes/descarga (1).jpg',
        sizes: ['Única'],
        desc: 'Pijama + Antifaz + Termo. El descanso merecido.',
        badge: 'Regalo Ideal'
    },
    {
        id: 'pijama-satin-rosa',
        name: 'Pijama Satín Rosa',
        category: 'pijamas',
        price: 88000,
        image: 'imagenes/descarga (2).jpg',
        sizes: ['S', 'M', 'L'],
        desc: 'Suavidad y elegancia en color rosa pastel.'
    },
    {
        id: 'termo-cafe-oficina',
        name: 'Termo Café Oficina',
        category: 'termos',
        price: 48000,
        image: 'imagenes/images.jpg',
        sizes: ['Única'],
        desc: 'Ideal para mantener tu café caliente en el trabajo.'
    },
    {
        id: 'medias-gatitos',
        name: 'Medias Gatitos',
        category: 'medias',
        price: 15000,
        image: 'imagenes/descarga (3).jpg',
        sizes: ['Única'],
        desc: 'Diseño adorable para los amantes de los gatos.'
    },
    {
        id: 'kit-pareja-premium',
        name: 'Kit Pareja Premium',
        category: 'pijamas termos medias',
        price: 150000,
        image: 'imagenes/descarga (1).jpg',
        sizes: ['Única'],
        desc: 'La experiencia completa para dos personas.',
        badge: 'VIP'
    }
];

// --- 2. Lógica del Carrito ---
let cart = [];
try {
    cart = JSON.parse(localStorage.getItem('tinStore_cart')) || [];
} catch (e) {
    console.error("Error cargando carrito, reiniciando...", e);
    localStorage.removeItem('tinStore_cart');
}

function addToCart(name, price, qtyId, sizeId, btnElement) {
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
            <div class="relative bg-gray-100 rounded-lg overflow-hidden h-64 mb-4">
                <img src="${product.image}" class="object-contain w-full h-full transform group-hover:scale-105 transition duration-500" alt="${product.name}" onerror="handleImageError(this)">
                ${product.badge ? `<span class="absolute top-2 left-2 bg-brand text-white text-xs font-bold px-2 py-1 rounded">${product.badge}</span>` : ''}
            </div>
            <h3 class="text-lg font-semibold text-gray-800">${product.name}</h3>
            <p class="text-gray-500 text-sm mb-3">${product.desc || ''}</p>
            <div class="flex flex-col gap-2">
                <span class="text-xl font-bold text-gray-900">$${product.price.toLocaleString()}</span>
                <div class="flex justify-between items-center gap-2">
                    <select id="size-${product.id}" class="border border-gray-200 rounded-lg text-sm py-1 px-2 focus:border-brand outline-none bg-white w-24">
                        ${sizes.map(s => `<option value="${s}">${s === 'Única' ? 'Única' : 'Talla ' + s}</option>`).join('')}
                    </select>
                    <div class="flex items-center gap-2">
                        <input type="number" id="qty-${product.id}" min="1" value="1" class="w-12 border border-gray-200 rounded-lg text-center py-1 text-sm focus:border-brand outline-none">
                        <button onclick="addToCart('${product.name}', ${product.price}, 'qty-${product.id}', 'size-${product.id}', this)" class="bg-gray-900 text-white p-2 rounded-full hover:bg-brand transition shadow-md">
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

    const buttons = document.querySelectorAll('.filter-btn');
    let btnToActivate = null;
    buttons.forEach(btn => {
        if(btn.getAttribute('onclick').includes(`'${category}'`)) {
            btnToActivate = btn;
        }
    });
    
    filterSelection(category, btnToActivate);
}

function filterSelection(category, btn) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(b => {
        b.classList.remove('bg-brand', 'text-white', 'border-brand');
        b.classList.add('text-gray-600', 'border-gray-200', 'bg-white');
    });
    if(btn) {
        btn.classList.remove('text-gray-600', 'border-gray-200', 'bg-white');
        btn.classList.add('bg-brand', 'text-white', 'border-brand');
    }
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