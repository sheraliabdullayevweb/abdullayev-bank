const elHeaderSearch = document.querySelector('.header-search-btn')
const elOverlay = document.querySelector('.overlay')
const elExitModul = document.querySelector('.exit-modul')
const noneOverlay = function () {
    elOverlay.style.display = 'none'
}
elHeaderSearch.addEventListener('click', () => {
    elOverlay.style.display = 'flex'
})
const elHamburgerExitBtn = document.querySelector('.hamburger-exit-btn')
elHamburgerExitBtn.addEventListener('click',()=>{
    // elHamburger.style.display = 'none'
    elHamburger.style.right = '-50%'

})
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        noneOverlay();
    // elHamburger.style.display = 'none'
    elHamburger.style.right = '50%'
}
})
elExitModul.addEventListener('click', () => {
    noneOverlay();
})
elOverlay.children[0].children[0].children[1].addEventListener('click', () => {
    alert('Nothing found!')
})

const elAloqaTitlte = document.querySelector('.aloqa-title')
const elContainerAloqa = document.querySelector('.container-aloqa')
elAloqaTitlte.classList.add('ch')
elContainerAloqa.style.display = 'none'
const elValyutaKurslari = document.querySelector('.kurslar')
const elKursAlmashish = document.querySelector('.kurs-almashish')
const elValyutAloqa = document.querySelector('.aloqa')
elKursAlmashish.addEventListener('click', () => {
    elKursAlmashish.classList.add('kurslar')
    elValyutaKurslari.classList.remove('kurslar')
    elValyutAloqa.classList.remove('kurslar')
    elValyutaTitle.classList.add('dhiden')
    elContainerKurslar.classList.add('dhiden')
    elContainerValyutaAlmash.classList.remove('dhiden')
    elValyutaAlmashTitle.classList.remove('dhiden')
    elAloqaTitlte.classList.add('ch')
    elContainerAloqa.style.display = 'none'
    document.querySelector('title').textContent = 'Abadullayev Bank | Valuyta almashish'
})
elValyutaKurslari.addEventListener('click', () => {
    elValyutaKurslari.classList.add('kurslar')
    elKursAlmashish.classList.remove('kurslar')
    elValyutAloqa.classList.remove('kurslar')
    elValyutaTitle.classList.remove('dhiden')
    elContainerKurslar.classList.remove('dhiden')
    elContainerValyutaAlmash.classList.add('dhiden')
    elValyutaAlmashTitle.classList.add('dhiden')
    elAloqaTitlte.classList.add('ch')
    elContainerAloqa.style.display = 'none'
    document.querySelector('title').textContent = 'Abadullayev Bank | Valuyta kurslari'
})
elValyutAloqa.addEventListener('click', () => {
    elValyutAloqa.classList.add('kurslar')
    elKursAlmashish.classList.remove('kurslar')
    elValyutaKurslari.classList.remove('kurslar')
    elValyutaTitle.classList.add('dhiden')
    elContainerKurslar.classList.add('dhiden')
    elContainerValyutaAlmash.classList.add('dhiden')
    elValyutaAlmashTitle.classList.add('dhiden')
    elAloqaTitlte.classList.remove('ch')
    elContainerAloqa.style.display = 'flex'
    document.querySelector('title').textContent = 'Abadullayev Bank | Biz bilan bog`laning'
})
const elValyutaTitle = document.querySelector('.valyuta-title')
const elContainerKurslar = document.querySelector('.container-kurslar')
const elValyutaAlmashTitle = document.querySelector('.valyuta-almash-title')
const elContainerValyutaAlmash = document.querySelector('.container-valyuta-almash')
elContainerValyutaAlmash.classList.add('dhiden')
elValyutaAlmashTitle.classList.add('dhiden')
const elValyutaAlmashUsd = document.querySelector('.USD')
const elValyutaAlmashEur = document.querySelector('.EUR')
const elValyutaAlmashRub = document.querySelector('.RUB')
const elValyutaAlmashUzs = document.querySelector('.UZS')
const elValyutaAlmashUsd2 = document.querySelector('.USD2')
const elValyutaAlmashEur2 = document.querySelector('.EUR2')
const elValyutaAlmashRub2 = document.querySelector('.RUB2')
const elValyutaAlmashUzs2 = document.querySelector('.UZS2')

const elValyutaAlmashUsdDisplay = document.querySelector('.usddisplay')
const elValyutaAlmashEurDisplay = document.querySelector('.eurdisplay')
const elValyutaAlmashRubDisplay = document.querySelector('.rubdisplay')
const elValyutaAlmashUzsDisplay = document.querySelector('.uzsdisplay')
const elValyutaAlmashUsdDisplay2 = document.querySelector('.usddisplay2')
const elValyutaAlmashEurDisplay2 = document.querySelector('.eurdisplay2')
const elValyutaAlmashRubDisplay2 = document.querySelector('.rubdisplay2')
const elValyutaAlmashUzsDisplay2 = document.querySelector('.uzsdisplay2')

elValyutaAlmashUsdDisplay.addEventListener('input',()=>{
    if(elValyutaAlmashUsdDisplay.value != ''){
        elValyutaAlmashUzsDisplay2.value = elValyutaAlmashUsdDisplay.value * 12200;
    }else(
        elValyutaAlmashUzsDisplay2.value = ''
    )
    if(elValyutaAlmashUsdDisplay.value != ''){
        elValyutaAlmashUsdDisplay2.value = elValyutaAlmashUsdDisplay.value;
    }else(
        elValyutaAlmashUsdDisplay2.value = ''
    )
    if(elValyutaAlmashUsdDisplay.value != ''){
        elValyutaAlmashEurDisplay2.value = elValyutaAlmashUsdDisplay.value / 1.0491803278688525;
    }else(
        elValyutaAlmashEurDisplay2.value = ''
    )
    if(elValyutaAlmashUsdDisplay.value != ''){
        elValyutaAlmashRubDisplay2.value = Math.floor(elValyutaAlmashUsdDisplay.value / 0.008183306055646482);
    }else(
        elValyutaAlmashRubDisplay2.value = ''
    )
})
elValyutaAlmashEurDisplay.addEventListener('input',()=>{
    if(elValyutaAlmashEurDisplay.value != ''){
        elValyutaAlmashUzsDisplay2.value = elValyutaAlmashEurDisplay.value * 12800;
    }else(
        elValyutaAlmashUzsDisplay2.value = ''
    )
    if(elValyutaAlmashEurDisplay.value != ''){
        elValyutaAlmashUsdDisplay2.value = elValyutaAlmashEurDisplay.value * 1.0491803278688525;
    }else(
        elValyutaAlmashUsdDisplay2.value = ''
    )
    if(elValyutaAlmashEurDisplay.value != ''){
        elValyutaAlmashRubDisplay2.value = elValyutaAlmashEurDisplay.value / 0.0078125;
    }else(
        elValyutaAlmashRubDisplay2.value = ''
    )
})
elValyutaAlmashRubDisplay.addEventListener('input',()=>{
    if(elValyutaAlmashRubDisplay.value != ''){
        elValyutaAlmashUzsDisplay2.value = elValyutaAlmashRubDisplay.value * 100;
    }else(
        elValyutaAlmashUzsDisplay2.value = ''
    )
    if(elValyutaAlmashRubDisplay.value != ''){
        elValyutaAlmashEurDisplay2.value = elValyutaAlmashRubDisplay.value * 0.0078125;
    }else(
        elValyutaAlmashEurDisplay2.value = ''
    )
    if(elValyutaAlmashRubDisplay.value != ''){
        elValyutaAlmashUsdDisplay2.value = Math.ceil(elValyutaAlmashUsdDisplay.value * 0.008183306055646482);
    }else(
        elValyutaAlmashUsdDisplay2.value = ''
    )
})
elValyutaAlmashUzsDisplay.addEventListener('input',()=>{
    if(elValyutaAlmashUzsDisplay.value != ''){
        elValyutaAlmashUzsDisplay2.value = elValyutaAlmashUzsDisplay.value * 1;
    }else(
        elValyutaAlmashUzsDisplay2.value = ''
    )
    if(elValyutaAlmashUzsDisplay.value != ''){
        elValyutaAlmashUsdDisplay2.value = elValyutaAlmashUzsDisplay.value / 12200;
    }else(
        elValyutaAlmashUsdDisplay2.value = ''
    )
    if(elValyutaAlmashUzsDisplay.value != ''){
        elValyutaAlmashEurDisplay2.value = elValyutaAlmashUzsDisplay.value / 12800;
    }else(
        elValyutaAlmashEurDisplay2.value = ''
    )
    if(elValyutaAlmashUzsDisplay.value != ''){
        elValyutaAlmashRubDisplay2.value = elValyutaAlmashUzsDisplay.value / 100;
    }else(
        elValyutaAlmashRubDisplay2.value = ''
    )
})

elValyutaAlmashEurDisplay.classList.add('dhiden')
elValyutaAlmashRubDisplay.classList.add('dhiden')
elValyutaAlmashUzsDisplay.classList.add('dhiden')
elValyutaAlmashEurDisplay2.classList.add('dhiden')
elValyutaAlmashRubDisplay2.classList.add('dhiden')
elValyutaAlmashUzsDisplay2.classList.add('dhiden')

elValyutaAlmashUsd.addEventListener('click', () => {
    elValyutaAlmashUsd.classList.add('USD')
    elValyutaAlmashEur.classList.remove('USD')
    elValyutaAlmashRub.classList.remove('USD')
    elValyutaAlmashUzs.classList.remove('USD')
    elValyutaAlmashUsdDisplay.classList.remove('dhiden')
    elValyutaAlmashEurDisplay.classList.add('dhiden')
    elValyutaAlmashRubDisplay.classList.add('dhiden')
    elValyutaAlmashUzsDisplay.classList.add('dhiden')
})
elValyutaAlmashEur.addEventListener('click', () => {
    elValyutaAlmashEur.classList.add('USD') 
    elValyutaAlmashUsd.classList.remove('USD')
    elValyutaAlmashRub.classList.remove('USD')
    elValyutaAlmashUzs.classList.remove('USD')
    elValyutaAlmashUsdDisplay.classList.add('dhiden')
    elValyutaAlmashEurDisplay.classList.remove('dhiden')
    elValyutaAlmashRubDisplay.classList.add('dhiden')
    elValyutaAlmashUzsDisplay.classList.add('dhiden')
}) 
elValyutaAlmashRub.addEventListener('click', () => {
    elValyutaAlmashRub.classList.add('USD')
    elValyutaAlmashEur.classList.remove('USD')
    elValyutaAlmashUsd.classList.remove('USD')
    elValyutaAlmashUzs.classList.remove('USD')
    elValyutaAlmashUsdDisplay.classList.add('dhiden')
    elValyutaAlmashEurDisplay.classList.add('dhiden')
    elValyutaAlmashRubDisplay.classList.remove('dhiden')
    elValyutaAlmashUzsDisplay.classList.add('dhiden')
})
elValyutaAlmashUzs.addEventListener('click', () => {
    elValyutaAlmashUzs.classList.add('USD')
    elValyutaAlmashEur.classList.remove('USD')
    elValyutaAlmashRub.classList.remove('USD')
    elValyutaAlmashUsd.classList.remove('USD')
    elValyutaAlmashUsdDisplay.classList.add('dhiden')
    elValyutaAlmashEurDisplay.classList.add('dhiden')
    elValyutaAlmashRubDisplay.classList.add('dhiden')
    elValyutaAlmashUzsDisplay.classList.remove('dhiden')
})


elValyutaAlmashUsd2.addEventListener('click', () => {
    elValyutaAlmashUsd2.classList.add('USD2')
    elValyutaAlmashEur2.classList.remove('USD2')
    elValyutaAlmashRub2.classList.remove('USD2')
    elValyutaAlmashUzs2.classList.remove('USD2')
    elValyutaAlmashUsdDisplay2.classList.remove('dhiden')
    elValyutaAlmashEurDisplay2.classList.add('dhiden')
    elValyutaAlmashRubDisplay2.classList.add('dhiden')
    elValyutaAlmashUzsDisplay2.classList.add('dhiden')
})
elValyutaAlmashEur2.addEventListener('click', () => {
    elValyutaAlmashEur2.classList.add('USD2') 
    elValyutaAlmashUsd2.classList.remove('USD2')
    elValyutaAlmashRub2.classList.remove('USD2')
    elValyutaAlmashUzs2.classList.remove('USD2')
    elValyutaAlmashUsdDisplay2.classList.add('dhiden')
    elValyutaAlmashEurDisplay2.classList.remove('dhiden')
    elValyutaAlmashRubDisplay2.classList.add('dhiden')
    elValyutaAlmashUzsDisplay2.classList.add('dhiden')
}) 
elValyutaAlmashRub2.addEventListener('click', () => {
    elValyutaAlmashRub2.classList.add('USD2')
    elValyutaAlmashEur2.classList.remove('USD2')
    elValyutaAlmashUsd2.classList.remove('USD2')
    elValyutaAlmashUzs2.classList.remove('USD2')
    elValyutaAlmashUsdDisplay2.classList.add('dhiden')
    elValyutaAlmashEurDisplay2.classList.add('dhiden')
    elValyutaAlmashRubDisplay2.classList.remove('dhiden')
    elValyutaAlmashUzsDisplay2.classList.add('dhiden')
})
elValyutaAlmashUzs2.addEventListener('click', () => {
    elValyutaAlmashUzs2.classList.add('USD2')
    elValyutaAlmashEur2.classList.remove('USD2')
    elValyutaAlmashRub2.classList.remove('USD2')
    elValyutaAlmashUsd2.classList.remove('USD2')
    elValyutaAlmashUsdDisplay2.classList.add('dhiden')
    elValyutaAlmashEurDisplay2.classList.add('dhiden')
    elValyutaAlmashRubDisplay2.classList.add('dhiden')
    elValyutaAlmashUzsDisplay2.classList.remove('dhiden')
})

const eltelegramCopy = document.querySelector('.telegram-copy')
const elinstagramCopy = document.querySelector('.instagram-copy')

eltelegramCopy.addEventListener('click',()=>{
    navigator.clipboard.writeText(
        eltelegramCopy.previousElementSibling.textContent
    )
    eltelegramCopy.textContent = 'COPIED'
    setTimeout(() => {
      }, "5000");
    elinstagramCopy.textContent = 'COPY'
      
})
elinstagramCopy.addEventListener('click',()=>{
    navigator.clipboard.writeText(
        elinstagramCopy.previousElementSibling.textContent
    )
    elinstagramCopy.textContent = 'COPIED'
    setTimeout(() => {
        elinstagramCopy.textContent = 'COPY'
      }, "5000");
    eltelegramCopy.textContent = 'COPY'
})

const elHeaderUl = document.querySelector('.header-ul')
const elHeaderGlass = document.querySelector('.fa-magnifying-glass')
const elHamburger = document.querySelector('.hamburger')
const elHamburgerBtn = document.querySelector('.hamburger-btn')

elHamburger.append(elHeaderUl)

elHamburgerBtn.addEventListener('click',()=>{
    // elHamburger.style.display = 'block'
    elHamburger.style.right = '0'
})