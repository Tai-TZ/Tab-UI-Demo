const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

//slide 
const tabActive = $('.tab-item.active') //HTML element
const line = $('.tabs .line') //CSS

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'


tabs.forEach((tab, index) => {
    const pane = panes[index] //panes dựa vào biến index của tabs để lấy phần tử 
    // xử lý tab đầu tiên, biến index = 0, và lúc đó phần tử đầu tiên trong mảng panes cũng sẽ được lấy ra thông qua biến index. 

    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active') //tim thang nao dang co active thi xoa di
        $('.tab-pane.active').classList.remove('active') //tim thang nao dang co active thi xoa di

        this.classList.add('active') //add class to active
        pane.classList.add('active') //add class to active


        //slide  click
        line.style.left = tab.offsetLeft + 'px'
        line.style.width = tab.offsetWidth + 'px'

    }
})
