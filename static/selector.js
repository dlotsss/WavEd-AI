document.querySelectorAll('.classes a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Отключаем стандартное поведение ссылки

            // Получаем название курса и класс
            const course = this.closest('.subject').dataset.course;
            const classNumber = this.dataset['class'];

            // Формируем новый URL в формате /tests/<subject>/<class_name>
            const newUrl = `${window.location.origin}/tests/${course}/${classNumber}`;

            // Обновляем адресную строку без перезагрузки страницы
            history.pushState(null, '', newUrl);
        });
    });