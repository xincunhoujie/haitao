var text = document.createElement("p");//创建容器标签
        var content = document.createTextNode("<h1>七星鲁王宫</h1>");//创建标签内容
        var id = document.createAttribute("id");//为容器创建一个属性 id
        id.value = "id-ming";//为创建的id命名
class.value = "class-ming";//为创建的id命名


        text.appendChild(content);//将内容放入容器
        text.setAttributeNode(id);//将属性id放入容器
text.setAttributeNode(class);//将属性id放入容器

        //将上面创建的标签放入页面已有的 id="neirong"的div中，并显示出来

        var neirong = document.getElementById("footer");//获取页面标签
        neirong.appendChild(text);//将内容放入获取的标签 neirong中
