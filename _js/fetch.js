//header 시작
function headerLayout() {
  fetch("/_inc/header.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      document.getElementById("div-header").innerHTML = html;

      const header = document.getElementById('header');
      const headerMobileBtn = document.querySelector('.header__nav-mobile-btn.list');
      const headerMobileLList = document.querySelector('.header__m-sub-menu');
      const headerMobileLListClose = document.querySelector('.header__nav-mobile-btn-icon.close');
      const headerNavMobileListItem = document.querySelectorAll('.header__nav-mobile-list-item')
      const headerMsubList = document.querySelectorAll('.header__nav-mobile-list-item .header__sub-list')


      headerNavMobileListItem.forEach((el, idx) => {
        el.addEventListener('click', () => {
          for (let i = 0; i < headerMsubList.length; i++) {
            headerMsubList[i].classList.remove('active')
            headerNavMobileListItem[i].querySelector('img').classList.remove('active')

          }
          el.querySelector('.header__sub-list').classList.toggle('active')
          el.querySelector('img').classList.toggle('active')
        })
      })

      header.addEventListener('mouseenter', () => {
        header.classList.remove('header-style-off');
        header.classList.add('header-style-on');
      });

      header.addEventListener('mouseleave', () => {
        header.classList.remove('header-style-on');
        header.classList.add('header-style-off');
      });

      headerMobileBtn.addEventListener('click', () => {
        if (headerMobileLList.classList.contains('mobile-list-style-on')) {
          headerMobileLList.classList.remove('mobile-list-style-on');
          headerMobileLList.classList.add('mobile-list-style-off');
        } else {
          headerMobileLList.classList.remove('mobile-list-style-off');
          headerMobileLList.classList.add('mobile-list-style-on');
        }
      })
      headerMobileLListClose.addEventListener('click', () => {
        if (headerMobileLList.classList.contains('mobile-list-style-on')) {
          headerMobileLList.classList.remove('mobile-list-style-on');
          headerMobileLList.classList.add('mobile-list-style-off');
        } else {
          headerMobileLList.classList.remove('mobile-list-style-off');
          headerMobileLList.classList.add('mobile-list-style-on');
        }
      })
    });
}
//header 끝

//footer 시작
function footerLayout() {
  fetch("/_inc/footer.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      document.getElementById("div-footer").innerHTML = html;
    });
}
export {
  headerLayout,
  footerLayout
}