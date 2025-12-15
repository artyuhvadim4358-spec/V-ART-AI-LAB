// Кнопка перехода в портфолио на диске
function createSecretAccessButton() {
  const container = document.querySelector('portfolio-link') ||  document.getElementById('buttonContainer');

  if (!container) {
      console.error('Контейнер не найден');
      return;
    }
  
  const button = document.createElement('a');
  
  button.href = 'https://drive.google.com/drive/folders/1jFj9CC6snhMr0JEfHs6ovVWUDFhyKiYg?usp=drive_link';
  button.className = 'contact-button';
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  
  button.textContent = '🔒 Секретный доступ по ссылке';
  button.title = 'Нажмите для перехода к Google Drive';
  
  container.appendChild(button);

  console.log('✅ Кнопка создана!');
  console.log('HTML:', button.outerHTML);

  return secretButton;
}
