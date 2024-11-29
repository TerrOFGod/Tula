# Tправила запуска
С ервер в основном не связан с клиентом его можно не запускать ничего не измениться
для запуска клиента для начала создаете аккаунты в Clerk, Convex, Liveblocks с проектами tula
настройки Clerk обязательно создайте jwt для convex и активируйте организации:![alt text](image.png)![alt text](image-1.png)![alt text](image-2.png)![alt text](image-3.png)![alt text](image-4.png)![alt text](image-5.png)![alt text](image-6.png)
настройка Convex в переменные окружения, входа обязательно введите ссылку на clerk jwt:![alt text](image-7.png) ![alt text](image-8.png)
Из Liveblocks нам нужны ключи api
Все ключи Api меняем в файле .env.local, так же поменяйте ссылку в файле auth.config.ts
Вначале запускайте convex затем клиент 
nextJs - npm run dev
convex - npx convex dev