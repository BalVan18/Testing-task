const label = document.querySelector(".label");
const labelInput = document.querySelector(".label-input");
const ico = document.querySelector(".label-svg");
const text = document.querySelector(".label-text");

let fileList;

// Событие выбора файла(ов)
if (labelInput) {
    labelInput.addEventListener("change", function (e) {

        // создаём массив файлов
        fileList = [];
        for (let i = 0; i < labelInput.files.length; i++) {
            fileList.push(labelInput.files[i]);
        }

        // вызов функции для каждого файла
        fileList.forEach(file => {
            uploadFile(file);
        });

    });
}

// выводим название
const uploadFile = (file) => {

    if (fileList.length > 0) {
        ico.style.display = 'none';
        label.classList.add('label--active');
    }

    // Показ загружаемых файлов
    if (file && fileList.length > 1) {
        if (fileList.length <= 4) {
            text.textContent = `Выбрано ${fileList.length} файла`;
        }
        if (fileList.length > 4) {
            text.textContent = `Выбрано ${fileList.length} файлов`;
        }
    } else {
        text.textContent = file.name;
    }
}

