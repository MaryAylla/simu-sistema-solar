document.addEventListener('DOMContentLoaded', () => {

    const celestialData = {
        sun: {
            name: 'Sol',
            description: 'A estrela no centro do nosso Sistema Solar. É uma esfera quase perfeita de plasma quente, com um campo magnético interno que gera poderosas atividades, como manchas solares e erupções. Sua energia sustenta a vida na Terra através da luz e do calor.',
            facts: {
                'Tipo': 'Estrela (Anã Amarela - G2V)',
                'Diâmetro Equatorial': '1.392.684 km (109 vezes o da Terra)',
                'Massa': '1.989 × 10^30 kg (99.86% da massa total do Sistema Solar)',
                'Gravidade na Superfície': '274 m/s² (28 vezes a da Terra)',
                'Temperatura na Superfície': 'Aproximadamente 5.500 °C (5.778 K)',
                'Temperatura no Núcleo': 'Aproximadamente 15 milhões °C (15 × 10^6 K)',
                'Distância da Terra (média)': '149.6 milhões de km (1 Unidade Astronômica)',
                'Período de Rotação': 'Aproximadamente 25-30 dias (diferencial por latitude)',
                'Composição Química': 'Aproximadamente 73.5% Hidrogênio, 25% Hélio, 1.5% outros elementos'
            }
        },
        planets: [
            { name: 'Mercúrio', orbitRadius: 90, animationDuration: '8.8s', description: 'O menor e mais interno planeta do Sistema Solar. Sua superfície rochosa e cheia de crateras enfrenta variações extremas de temperatura devido à ausência de uma atmosfera significativa para reter calor.', facts: { 'Diâmetro Equatorial': '4.879 km', 'Massa': '3.301 × 10^23 kg (0.055 vezes a da Terra)', 'Gravidade na Superfície': '3.7 m/s² (0.38 g)', 'Temperatura na Superfície': '-173 °C (noite) a 427 °C (dia)', 'Distância Média do Sol': '57.9 milhões de km (0.39 UA)', 'Período Orbital': '88 dias terrestres', 'Período de Rotação': '58.6 dias terrestres', 'Satélites Naturais': 'Nenhum' } },
            { name: 'Vênus', orbitRadius: 140, animationDuration: '22.5s', description: 'O segundo planeta a partir do Sol, frequentemente chamado de "gêmeo da Terra" devido ao seu tamanho similar. No entanto, possui uma atmosfera densa e tóxica de dióxido de carbono, resultando no efeito estufa mais intenso do Sistema Solar e temperaturas escaldantes.', facts: { 'Diâmetro Equatorial': '12.104 km', 'Massa': '4.867 × 10^24 kg (0.815 vezes a da Terra)', 'Gravidade na Superfície': '8.87 m/s² (0.91 g)', 'Temperatura na Superfície': 'Aproximadamente 462 °C', 'Distância Média do Sol': '108.2 milhões de km (0.72 UA)', 'Período Orbital': '225 dias terrestres', 'Período de Rotação': '243 dias terrestres (retrógrado)', 'Satélites Naturais': 'Nenhum' } },
            { name: 'Terra', orbitRadius: 190, animationDuration: '36.5s', description: 'Nosso planeta natal, o único corpo celeste conhecido por abrigar vida. Sua atmosfera rica em oxigênio, a presença abundante de água líquida e um campo magnético forte são cruciais para a existência e proteção da vida.', facts: { 'Diâmetro Equatorial': '12.756 km', 'Massa': '5.972 × 10^24 kg', 'Gravidade na Superfície': '9.81 m/s² (1 g)', 'Temperatura Média na Superfície': '15 °C', 'Distância Média do Sol': '149.6 milhões de km (1 UA)', 'Período Orbital': '365.25 dias terrestres', 'Período de Rotação': '23.9 horas', 'Satélites Naturais': '1 (Lua)' }, moons: [{ name: 'Lua', orbitRadius: 32, animationDuration: '2.7s' }] },
            { name: 'Marte', orbitRadius: 250, animationDuration: '68.7s', description: 'O quarto planeta a partir do Sol, conhecido como o "Planeta Vermelho" devido à presença de óxido de ferro em sua superfície. Apresenta características geológicas como vulcões extintos, cânions profundos e evidências de água líquida no passado.', facts: { 'Diâmetro Equatorial': '6.792 km', 'Massa': '6.417 × 10^23 kg (0.107 vezes a da Terra)', 'Gravidade na Superfície': '3.72 m/s² (0.38 g)', 'Temperatura Média na Superfície': '-63 °C', 'Distância Média do Sol': '227.9 milhões de km (1.52 UA)', 'Período Orbital': '687 dias terrestres', 'Período de Rotação': '24.6 horas', 'Satélites Naturais': '2 (Fobos e Deimos)' } },
            { name: 'Júpiter', orbitRadius: 350, animationDuration: '120s', description: 'O maior planeta do Sistema Solar, um gigante gasoso com faixas distintas de nuvens coloridas e a Grande Mancha Vermelha, uma tempestade anticiclônica maior que a Terra.', facts: { 'Diâmetro Equatorial': '142.984 km', 'Massa': '1.898 × 10^27 kg (318 vezes a da Terra)', 'Gravidade na Superfície (nível das nuvens)': '24.79 m/s² (2.53 g)', 'Temperatura na Atmosfera (topo das nuvens)': 'Aproximadamente -145 °C', 'Distância Média do Sol': '778.5 milhões de km (5.20 UA)', 'Período Orbital': '11.9 anos terrestres', 'Período de Rotação': '9.9 horas', 'Satélites Naturais': '79 conhecidos (incluindo Io, Europa, Ganimedes e Calisto)' } },
            { name: 'Saturno', orbitRadius: 450, animationDuration: '290s', description: 'O sexto planeta a partir do Sol, famoso por seu espetacular sistema de anéis, que são compostos por bilhões de pequenas partículas de gelo, rocha e poeira.', facts: { 'Diâmetro Equatorial': '120.536 km', 'Massa': '5.683 × 10^26 kg (95 vezes a da Terra)', 'Gravidade na Superfície (nível das nuvens)': '10.44 m/s² (1.07 g)', 'Temperatura na Atmosfera (topo das nuvens)': 'Aproximadamente -178 °C', 'Distância Média do Sol': '1.434 bilhões de km (9.54 UA)', 'Período Orbital': '29.5 anos terrestres', 'Período de Rotação': '10.7 horas', 'Satélites Naturais': '82 conhecidos (incluindo Titã e Encélado)' } },
            { name: 'Urano', orbitRadius: 530, animationDuration: '840s', description: 'Um gigante de gelo com uma coloração azul-esverdeada devido ao metano em sua atmosfera. Seu eixo de rotação é extremamente inclinado, quase paralelo ao seu plano orbital.', facts: { 'Diâmetro Equatorial': '51.118 km', 'Massa': '8.681 × 10^25 kg (14 vezes a da Terra)', 'Gravidade na Superfície (nível das nuvens)': '8.69 m/s² (0.89 g)', 'Temperatura na Atmosfera (topo das nuvens)': 'Aproximadamente -216 °C', 'Distância Média do Sol': '2.871 bilhões de km (19.19 UA)', 'Período Orbital': '84 anos terrestres', 'Período de Rotação': '17.2 horas (retrógrado)', 'Satélites Naturais': '27 conhecidos (incluindo Titânia e Oberon)' } },
            { name: 'Netuno', orbitRadius: 610, animationDuration: '1650s', description: 'O oitavo e mais distante planeta do Sol (desde a reclassificação de Plutão). É outro gigante de gelo com ventos extremamente fortes e várias grandes tempestades, incluindo a Grande Mancha Escura (similar à de Júpiter, mas já desapareceu).', facts: { 'Diâmetro Equatorial': '49.528 km', 'Massa': '1.024 × 10^26 kg (17 vezes a da Terra)', 'Gravidade na Superfície (nível das nuvens)': '11.15 m/s² (1.14 g)', 'Temperatura na Atmosfera (topo das nuvens)': 'Aproximadamente -214 °C', 'Distância Média do Sol': '4.495 bilhões de km (30.07 UA)', 'Período Orbital': '165 anos terrestres', 'Período de Rotação': '16.1 horas', 'Satélites Naturais': '14 conhecidos (incluindo Tritão)' } },
            { name: 'Plutão', orbitRadius: 680, animationDuration: '2480s', description: 'Um planeta anão localizado no Cinturão de Kuiper. É um mundo gelado com uma atmosfera tênue que se expande quando se aproxima do Sol. Possui cinco luas conhecidas, incluindo Caronte, que é quase metade do seu tamanho.', facts: { 'Diâmetro Equatorial': '2.377 km', 'Massa': '1.303 × 10^22 kg (0.0022 vezes a da Terra)', 'Gravidade na Superfície': '0.62 m/s² (0.063 g)', 'Temperatura na Superfície': 'Aproximadamente -229 °C', 'Distância Média do Sol': '5.9 bilhões de km (39.5 UA)', 'Período Orbital': '248 anos terrestres', 'Período de Rotação': '6.4 dias terrestres (retrógrado)', 'Satélites Naturais': '5 conhecidos (Caronte, Nix, Hidra, Cérbero e Estige)' } }
        ]
    };

    const solarSystemContainer = document.getElementById('solar-system');
    const sunEl = document.getElementById('sun');
    const infoPanel = document.getElementById('info-panel');
    const planetNameEl = document.getElementById('planet-name');
    const planetDescriptionEl = document.getElementById('planet-description');
    const planetFactsEl = document.getElementById('planet-facts');
    const closePanelBtn = document.getElementById('close-panel-btn');

    celestialData.planets.forEach(planetInfo => {
        const orbit = document.createElement('div');
        orbit.classList.add('orbit');
        orbit.style.width = `${planetInfo.orbitRadius * 2}px`;
        orbit.style.height = `${planetInfo.orbitRadius * 2}px`;
        orbit.style.animationDuration = planetInfo.animationDuration;

        const planet = document.createElement('div');
        planet.classList.add('planet');
        const normalizedName = planetInfo.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        planet.classList.add(`planet-${normalizedName.toLowerCase()}`);
        planet.dataset.name = planetInfo.name;

        if (planetInfo.moons) {
            planetInfo.moons.forEach(moonInfo => {
                const moonOrbit = document.createElement('div');
                moonOrbit.classList.add('moon-orbit');
                moonOrbit.style.width = `${moonInfo.orbitRadius * 2}px`;
                moonOrbit.style.height = `${moonInfo.orbitRadius * 2}px`;
                moonOrbit.style.animationDuration = moonInfo.animationDuration;

                const moon = document.createElement('div');
                moon.classList.add('moon');
                moon.dataset.name = moonInfo.name;
                
                moonOrbit.appendChild(moon);
                planet.appendChild(moonOrbit);
            });
        }
        
        orbit.appendChild(planet);
        solarSystemContainer.appendChild(orbit);
    });

    function showInfo(data, element) {
        const currentActive = document.querySelector('.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }

        element.classList.add('active');

        planetNameEl.textContent = data.name;
        planetDescriptionEl.textContent = data.description || '';

        planetFactsEl.innerHTML = '';
        if (data.facts) {
            for (const [key, value] of Object.entries(data.facts)) {
                const factItem = document.createElement('li');
                factItem.innerHTML = `<strong>${key}:</strong> ${value}`;
                planetFactsEl.appendChild(factItem);
            }
        }

        infoPanel.classList.add('visible');
        document.body.classList.add('panel-open');
    }

    sunEl.addEventListener('click', (event) => {
        showInfo(celestialData.sun, event.currentTarget);
        event.stopPropagation();
    });

    solarSystemContainer.addEventListener('click', (event) => {
        const clickedElement = event.target;

        if (clickedElement.classList.contains('planet')) {
            const planetName = clickedElement.dataset.name;
            const planetInfo = celestialData.planets.find(p => p.name === planetName);
            if (planetInfo) {
                showInfo(planetInfo, clickedElement);
            }
        }
    });

    closePanelBtn.addEventListener('click', () => {
        infoPanel.classList.remove('visible');
        document.body.classList.remove('panel-open');

        const currentActive = document.querySelector('.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
    });
});