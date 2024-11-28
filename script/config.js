// Pega os elementos da página de configurações
const speedSlider = document.getElementById('text-speed');
const speedValue = document.getElementById('speed-value');
const fontSizeSlider = document.getElementById('font-size');
const fontSizeValue = document.getElementById('font-size-value');
const saveButton = document.getElementById('save-settings');

// Função para atualizar os valores na tela
function updateSettingsDisplay() {
    speedValue.textContent = `${speedSlider.value}ms`;
    fontSizeValue.textContent = `${fontSizeSlider.value}px`;
}

// Salva as configurações no localStorage
function saveSettings() {
    const settings = {
        textSpeed: speedSlider.value,
        fontSize: fontSizeSlider.value
    };
    localStorage.setItem('gameSettings', JSON.stringify(settings));
    alert('Configurações salvas!');
}

// Carrega as configurações do localStorage e aplica
function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('gameSettings'));
    if (savedSettings) {
        speedSlider.value = savedSettings.textSpeed;
        fontSizeSlider.value = savedSettings.fontSize;
        updateSettingsDisplay();
    }
}

// Evento para salvar as configurações
saveButton.addEventListener('click', saveSettings);

// Atualiza a exibição quando o usuário mexer nos sliders
speedSlider.addEventListener('input', updateSettingsDisplay);
fontSizeSlider.addEventListener('input', updateSettingsDisplay);

// Carrega as configurações quando a página for carregada
loadSettings();