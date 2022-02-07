import makeSectionManagementTitle from './sectionManagement.js';
import printSectionList from './sectionList.js';
import deleteSection from './deleteSection.js';
import addSection from './addSection.js';

function selectSectionBtn() {
  const $sectionBtns = document.querySelectorAll('.section-line-menu-button');
  const $sectionInput = document.querySelector('.section-input');
  const $sectionLists = document.querySelector('.section-list');

  $sectionInput.innerHTML = '';
  $sectionBtns.forEach(($sectionBtn) => {
    const $lineName = $sectionBtn.innerText;
    $sectionBtn.addEventListener('click', () => {
      makeSectionManagementTitle($sectionInput, $lineName);
      printSectionList($lineName);
      deleteSection($lineName);
      addSection($lineName);
    });
    deleteSection($lineName);
  });
  $sectionLists.setAttribute('hidden', true);
}

function makeSectionTitle($sectionManagement) {
  $sectionManagement.innerHTML = '';
  $sectionManagement.insertAdjacentHTML(
    'beforeend',
    `<h3>구간을 수정할 노선을 선택해주세요</h3>`,
  );
}

export default function makeSectionBtnToEdit() {
  const $sectionManagement = document.querySelector('.section-management');
  const $keys = Object.keys(localStorage).sort();

  makeSectionTitle($sectionManagement);
  $keys.forEach(($key) => {
    if ($key !== 'station') {
      $sectionManagement.insertAdjacentHTML(
        'beforeend',
        `<button class="section-line-menu-button">${$key}</button>`,
      );
    }
  });
  selectSectionBtn();
}
