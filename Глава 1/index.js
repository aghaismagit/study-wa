// 1) Для массива из 100 элементов укажите число шагов для выполнения следующих операций: 
//     а) Чтение 
//     Ответ: 1 шаг. Компьютер всегда точно знает расположение массива, по этому для чтения требуется всего 1 шаг
//     б) Поиск значений, которого нет в массиве: 
//     Ответ: 100 шагов. Массив будет проверяться до самого последнего элемента, пытаясь найти запрашиваемый
//     в) Вставка значения в начало массива
//     Ответ: 101 шаг. Первым делом нужно свободить место в начале массива. Для этого каждый элемент нужно сдвинуть вправо. После чего на освободившееся место вставляется новый
//     г) Удаление первого значения массива
//     Ответ: 100 шагов. Проиходит удаление, после чего все элементы необходимо сдвинуть влево, чтобы заполнить пустоту
//     д) Удаление последнего элемента массива
//     Ответ: 1 шаг, т.к. ничего после удаления сдвигать не нужно
// 2) Для множества на базе массива из 100 элементов уажите число шагов для выполнения следующих операций:
//     а) Чтение
//     Ответ: 1
//     б) Поиск значения, которого нет в массиве
//     Ответ: 100
//     в) Вставка нового значения в начала множества
//     Ответ: 201
//     г) Вставка нового значения в конец множества
//     Ответ:101
//     д) Удаление первого значения множества
//     Ответ: 100
//     е) Удаление последнего значения множества
//     Ответ: 1
// 3) Обычно операция поиска в массиве направлена на нахождение первого 
// экземпляра заданного значения, но иногда нужно найти каждый экземпляр 
// этого значения. Допустим, мы хотим подсчитать, сколько раз в массиве 
// встречается значение "apple". Сколько шагов нам нужно, чтобы найти все 
// его экземпляры? Дайте ответ с точки зрения N. 
// Ответ: N шагов. Так как компьютер не знает, где именно в массиве находятся "apple", то необходимо проверить каждый элемент

