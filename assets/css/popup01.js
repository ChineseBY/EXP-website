setTimeout(function() {
    document.getElementById('popup01').style.opacity = 1;
}, 1600);

document.getElementById('popup01').addEventListener('click',function(){
    this.style.display = 'none';
    // //chatgpt-adding header
    // // 创建新的 header 元素
    // var header = document.createElement('header');
            
    // // 创建并设置 logo 部分
    // var logoDiv = document.createElement('div');
    // logoDiv.className = 'logo';
    // var logoImg = document.createElement('img');
    // logoImg.src = 'assets/img/logo.png';
    // logoImg.alt = '';
    // logoDiv.appendChild(logoImg);

    // // 创建并设置 nav 部分
    // var nav = document.createElement('nav');
    // var ul = document.createElement('ul');
    // ul.className = 'menu';

    // var menuItems = ['menu1', 'menu2', 'menu3'];
    // menuItems.forEach(function(item) {
    //     var li = document.createElement('li');
    //     var a = document.createElement('a');
    //     a.href = '#';
    //     a.textContent = item;
    //     li.appendChild(a);
    //     ul.appendChild(li);
    // });

    // nav.appendChild(ul);

    // // 将 logo 和 nav 添加到 header 中
    // header.appendChild(logoDiv);
    // header.appendChild(nav);

    // // 将 header 添加到 body 中
    // document.body.appendChild(header);
    // //chatgpt-adding header



    var worker_01 = document.getElementById('worker_01');
    var worker_02 = document.getElementById('worker_02');
    var worker_03 = document.getElementById('worker_03');
    var worker_04 = document.getElementById('worker_04');

    worker_01.style.display = 'block';
    worker_01.classList.add('worker_01_anim');
    worker_01.addEventListener('animationend', function onworker_01_end() {
        worker_01.style.display = 'none';
        worker_02.style.display = 'block';
        worker_02.classList.add('worker_02_anim');
        worker_02.addEventListener('animationend', function onworker_02_end() {
            worker_02.style.display = 'none';
            worker_03.style.display = 'block';
            worker_03.classList.add('worker_03_anim');
            worker_03.addEventListener('animationend', function onworker_03_end() {
                worker_03.style.display = 'none';
                worker_04.style.display = 'block';
                worker_04.classList.add('worker_04_anim');
                worker_04.addEventListener('animationend', function onworker_04_end() {
                    // worker_04.style.display = 'none';
                    selector_01();
                    //进入popup_main

                    worker_01.removeEventListener('animationend', onworker_01_end);
                    worker_02.removeEventListener('animationend', onworker_02_end);
                    worker_03.removeEventListener('animationend', onworker_03_end);
                    worker_04.removeEventListener('animationend', onworker_04_end);
                });
            });
        });
    });
});