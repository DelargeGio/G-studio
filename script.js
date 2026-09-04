<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>El Norteño | Menú Digital Pro</title>
    <style>
        :root {
            --bg-dark: #0d0d0d;
            --card-bg: rgba(255, 255, 255, 0.03);
            --border-color: rgba(255, 255, 255, 0.08);
            --gold-primary: #f59e0b;
            --gold-glow: rgba(245, 158, 11, 0.15);
            --text-main: #ffffff;
            --text-muted: #9ca3af;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            -webkit-tap-highlight-color: transparent;
        }

        body {
            background-color: var(--bg-dark);
            color: var(--text-main);
            min-height: 100vh;
            padding-bottom: 6rem;
        }

        /* Header & Logo Animado */
        header {
            text-align: center;
            padding: 2.5rem 1rem 1.5rem 1rem;
            background: linear-gradient(to bottom, rgba(20,20,20,0.8), transparent);
        }

        .logo-container {
            display: inline-block;
            margin-bottom: 0.75rem;
        }

        .logo-animado {
            width: 80px;
            height: 80px;
            object-fit: contain;
            animation: spinIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, 
                       float 4s ease-in-out infinite 1.2s;
            filter: drop-shadow(0 4px 12px rgba(245, 158, 11, 0.3));
        }

        @keyframes spinIn {
            0% {
                transform: rotate(-360deg) scale(0.2);
                opacity: 0;
            }
            100% {
                transform: rotate(0deg) scale(1);
                opacity: 1;
            }
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-6px);
            }
        }

        h1 {
            font-size: 1.75rem;
            letter-spacing: 2px;
            font-weight: 800;
            text-transform: uppercase;
            color: var(--text-main);
        }

        .subtitle {
            font-size: 0.85rem;
            color: var(--gold-primary);
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-top: 0.25rem;
            font-weight: 600;
        }

        /* Selector de Mesa */
        .mesa-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            padding: 0.5rem 1.25rem;
            border-radius: 50px;
            margin: 1.25rem auto;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .mesa-badge:hover {
            border-color: var(--gold-primary);
            background: var(--gold-glow);
        }

        .instruccion {
            text-align: center;
            font-size: 0.85rem;
            color: var(--text-muted);
            max-width: 320px;
            margin: 0 auto 2rem auto;
            line-height: 1.4;
        }

        /* Contenedor de Secciones y Menú */
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 1rem;
        }

        .section-title {
            font-size: 1.1rem;
            color: var(--gold-primary);
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin: 2rem 0 1rem 0;
            border-left: 3px solid var(--gold-primary);
            padding-left: 0.50rem;
            font-weight: 700;
        }

        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
        }

        /* Tarjetas de Platillos */
        .menu-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .menu-card:hover {
            transform: translateY(-4px);
            border-color: rgba(245, 158, 11, 0.4);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            background: rgba(255, 255, 255, 0.05);
        }

        .card-content h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 0.35rem;
        }

        .card-content p {
            font-size: 0.85rem;
            color: var(--text-muted);
            line-height: 1.4;
            margin-bottom: 1rem;
        }

        .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid var(--border-color);
            padding-top: 0.75rem;
        }

        .price {
            font-size: 1.15rem;
            font-weight: 700;
            color: var(--gold-primary);
        }

        .btn-add {
            background: var(--gold-primary);
            color: #000;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-weight: 700;
            font-size: 0.85rem;
            cursor: pointer;
            transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .btn-add:active {
            transform: scale(0.95);
            opacity: 0.8;
        }

        /* Barra Inferior de Orden flotante */
        .order-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(15, 15, 15, 0.92);
            backdrop-filter: blur(10px);
            border-top: 1px solid var(--border-color);
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 900px;
            margin: 0 auto;
            border-radius: 16px 16px 0 0;
        }

        .order-info span {
            display: block;
            font-size: 0.75rem;
            color: var(--text-muted);
            text-transform: uppercase;
        }

        .order-total {
            font-size: 1.25rem;
            font-weight: 800;
            color: var(--text-main);
        }

        .btn-send {
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: #000;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 10px;
            font-weight: 700;
            font-size: 0.9rem;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }
    </style>
</head>
<body>

    <header>
        <div class="logo-container">
            <!-- Reemplaza "logo.png" por la ruta de tu logo real -->
            <img src="logo.png" alt="El Norteño Logo" class="logo-animado" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23f59e0b\'><path d=\'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\'/></svg>'">
        </div>
        <h1>El Norteño</h1>
        <div class="subtitle">Selección Suprema al Carbón</div>
        
        <div class="mesa-badge">
            📍 MESA 1 (CAMBIAR)
        </div>

        <p class="instruccion">
            Haz tu pedido al instante. Selecciona tus platillos y envíalos directo a la cocina para tu mesa.
        </p>
    </header>

    <div class="container">
        <h2 class="section-title">Especialidades & Estreno</h2>
        
        <div class="menu-grid">
            <!-- Platillo 1 -->
            <div class="menu-card">
                <div class="card-content">
                    <h3>Barriga (Esp.)</h3>
                    <p>Corte especial al carbón con toque de la casa.</p>
                </div>
                <div class="card-footer">
                    <span class="price">$40</span>
                    <button class="btn-add" onclick="agregarItem('Barriga (Esp.)', 40)">+ Agregar</button>
                </div>
            </div>

            <!-- Platillo 2 -->
            <div class="menu-card">
                <div class="card-content">
                    <h3>Campechano (Mix)</h3>
                    <p>La combinación perfecta de carnes al carbón.</p>
                </div>
                <div class="card-footer">
                    <span class="price">$40</span>
                    <button class="btn-add" onclick="agregarItem('Campechano (Mix)', 40)">+ Agregar</button>
                </div>
            </div>

            <!-- Platillo 3 -->
            <div class="menu-card">
                <div class="card-content">
                    <h3>Taco Pirata (Grande)</h3>
                    <p>Generoso tamaño con costra de queso asadero y carne jugosa.</p>
                </div>
                <div class="card-footer">
                    <span class="price">$90</span>
                    <button class="btn-add" onclick="agregarItem('Taco Pirata (Grande)', 90)">+ Agregar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Barra de Orden Flotante -->
    <div class="order-bar container">
        <div class="order-info">
            <span>Ver tu orden</span>
            <div class="order-total" id="total-text">$0</div>
        </div>
        <button class="btn-send" onclick="enviarCocina()">Enviar a Cocina</button>
    </div>

    <script>
        let total = 0;

        function agregarItem(nombre, precio) {
            total += precio;
            document.getElementById('total-text').innerText = `$${total}`;
        }

        function enviarCocina() {
            if(total === 0) {
                alert("Por favor selecciona al menos un platillo.");
                return;
            }
            alert("¡Orden enviada a cocina con éxito!");
            total = 0;
            document.getElementById('total-text').innerText = `$0`;
        }
    </script>
</body>
</html>