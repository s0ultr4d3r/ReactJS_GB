1. Подключить BrowserRouter (из react-router-dom).
2. Создать верхний компонент Router со Switch и Route’ами.
3. Разбить приложение на чаты с помощью роутера (URLs: /chat/<chat_id>/).
4. Реализовать хранение сообщений в словаре с id в качестве ключа.
5. Реализовать хранение чатов в словаре с id в качестве ключа, а в качестве значения со словарем из названия чата и списка id-шников сообщений из этого чата.
6. Сделать страницу профиля, располагающуюся по пути /profile/, и ссылку на нее в Header’е мессенджера.
7. * Реализовать добавление новых чатов в мессенджер. Для этого нужно связать воедино чаты, хранящиеся в state MessageField, и чаты, отрисовывающиеся в ChatList.
Подсказки:

1) можно перенести state в другой компонент;
2) можно прокидывать функции в нижестоящие компоненты в качестве props.


не меняется надпись в Header (обилие div ?)