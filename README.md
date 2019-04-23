เริ่มต้นด้วย app.js

ใช้ฟังก์ชัน componentDidMount 
ดึงข้อมูลจาก jsonplaceholder ด้วยคำสั่ง axios.get()
จากนั้นจะจัดเก็บค่า res.data ที่ได้ลงใน state.todos:[]
โดยข้อมูลที่ได้มี id,title,completed,
ส่วน Route จะมี "/about" เพื่อดึงไปหาหน้า About.js
ส่วน Route จะมี "/" จะมีเรียกใช้ <AddTodo> และ <Todos>
โดยจะส่งฟังก์ชัน addTodo(title) ไปกับ AddTodo
และส่งค่า state.todos และ ส่งฟังก์ชัน delTodo(id) 
ักับ markComplete(id) ไปกับ <Todos>

ใน Todos.js
้ิเอาค่า Todos มา map มาเป็น todo แล้วส่งค่าไปให้ <TodoItem>
พร้อมกับ ฟังก์ชัน markComplete และ ฟังก์ชัน delTodo

ใน TodoItem.js 
เรารับ todo มาใช้ โดยดึงเอามาแต่ id,title,completed
มี <p> เป็นอันใหญ่ แสดงผล เป็น title
มี <input> เป็น checkbox เมื่อทำการ change 
จะเชื่อมกับ markComplete พร้อมส่ง id ไปด้วย
่ส่วนสถานะ checked ของ <input> จะแสดงผลของ completed
มี <button> เมื่อทำการ click จะ เชื่อมกับ delTodo 
พร้อมส่ง id ไปด้วย 

กลับไปที่ app.js
- ฟังก์ชัน delTodo จะทำการ ส่งค่า id ไปให้ jsonplaceholder
โดยคำสั่ง axios.delete และจะได้ค่า res กลับมาโดยค่าที่ได้
คืออันที่เราลบไป โดย filter out อันนี้ออกไปจาก todos:[]
- ฟังก์ชัน markComplete จะเข้าไปทำการเปลี่ยนค่าใน todos 
โดยเลือกจาก เอาอันที่ id ตรงกันมากลับ completed ตรงกันข้าม
แล้วคืน todo กลับไป
- ส่วน ฟังก์ชัน addTodo ส่งไปพร้อมกับ <AddTodo> 

ใน AddTodo.js
มี <input> ที่รับค่า title โดยมี value ที่ได้จาก state 
และ เมื่อ change ก็จะส่งค่ากลับยัง state
ส่วน <input> เป็นปุ่ม ผูกกับ <form> เมื่อ submit จะทำการ
เรียกฟังก์ชัน addTodo โดยผูกกับ state.title 

กลับไปยัง app.js
เมื่อฟังก์ชัน addTodo ถูกใช้งาน จะทำการส่งไปยัง jsonplaceholder
ด้วยคำสั่ง axios.post พร้อมกับ title และ completed:false
หลังจากนั้นจะได้ข้อมูลกลับมาคือ res โดย เราขอแก้ res.data.id
ด้วย uuid เพราะตัวสั่งกลับมาปกติ id มีอันเดียวคือ 101 
่พอแก้ id เสร็จ ก็เอกค่าไปรวมกับ todos 
หลังจากนั้น ComponentDidMount ก็จะทำงานตามปกติคือ update
หน้าจอ



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
