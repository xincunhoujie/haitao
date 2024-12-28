let element = document.getElementById('footer'); // 根据容器的id获取元素
element.innerHTML += '<div class="xinhtml">这是新添加的HTML代码</div>'; // 在容器中添加新的HTML代码

element.insertAdjacentHTML('beforebegin', '<div>新div</div>');
