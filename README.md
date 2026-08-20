# PCMii

PC build configurator — plan and price your custom PC build, right on your desktop.

## О проекте

PCMii — десктопное приложение для планирования и подбора комплектующих ПК.
Построено на Electron, работает на Linux.

## Скачать

Готовое приложение доступно в разделе [Releases](../../releases) —
скачай `.AppImage`, сделай исполняемым и запусти:

```bash
chmod +x PCMii-*.AppImage
./PCMii-*.AppImage
```

## Запуск из исходного кода

```bash
git clone https://github.com/rewigxd/PCMii.git
cd PCMii
npm install
npm start
```

## Сборка самостоятельно

```bash
npm install
npm run dist
```

Готовые файлы (`.AppImage`, `.deb`) появятся в папке `dist/`.

## Технологии

- [Electron](https://www.electronjs.org/) — обёртка в десктопное приложение
- HTML / CSS / JavaScript — сама логика конфигуратора

## Лицензия

MIT — см. [LICENSE](LICENSE).

## Автор

[rewig](https://github.com/rewigxd)
