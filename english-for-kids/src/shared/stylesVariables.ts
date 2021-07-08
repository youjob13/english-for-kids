import classesMainPage from '../components/MainPage/mainPage.module.scss';
import classesCategory from '../components/Category/category.module.scss';
import classesCard from '../components/Card/card.module.scss';
import classesEndGamePopup from '../components/EndGamePopup/endGamePopup.module.scss';
import classesNavigation from '../components/Header/Navigation/navigation.module.scss';
import classesFooter from '../components/Footer/footer.module.scss';
import classesStatistics from '../components/Statistics/statistics.module.scss';
import classesMenuBtn from './baseComponents/MenuButton/menuButton.module.scss';
import classesAnswers from '../components/Category/AnswerList/answers.module.scss';
import classesHeader from '../components/Header/header.module.scss';
import classesPreloader from './baseComponents/Preloader/preloader.module.scss';
import classesTitle from './baseComponents/Title/title.module.scss';

export const APP_WRAPPER = 'app-wrapper';
export const APP_CONTENT = 'app-content';

export const HEADER = classesHeader.header;

export const TITLE_STYLES = classesTitle.title;
export const PRELOADER_STYLES = classesPreloader.preloader;

export const ANSWER_LIST_STYLES = classesAnswers.answerList;
export const ANSWER_ITEM_STYLES = classesAnswers.answerItem;

export const TABLE_STYLES = classesStatistics.table;
export const TABLE_ROW_STYLES = classesStatistics.tableRow;
export const TABLE_TITLE_STYLES = classesStatistics.tableTitle;
export const TABLE_TITLE_ACTIVE_STYLES = `${classesStatistics.tableTitle} ${classesStatistics.tableTitleActive}`;
export const TABLE_BODY_STYLES = classesStatistics.tableBody;

export const LABEL_STYLES = classesMenuBtn.label;
export const MENU_BTN_STYLES = classesMenuBtn.inputMenuBtn;
export const MENU_BTN_ACTIVE_STYLES = classesMenuBtn.inputMenuBtnActive;

export const STATISTICS_HEADER_STYLES = classesStatistics.statisticsHeader;
export const BUTTONS_WRAPPER_STYLES = classesStatistics.buttonsWrapper;
export const BUTTON_STYLES = classesStatistics.button;
export const TABLE_WRAPPER_STYLES = classesStatistics.tableWrapper;

export const FOOTER_STYLES = classesFooter.footer;
export const FOOTER_LOGO_STYLES = classesFooter.footerLogo;
export const FOOTER_LINK_STYLES = classesFooter.footerLink;

export const CONTENT_STYLES = classesMainPage.content;

export const CATEGORY_FIELD_STYLES = classesCategory.categoryField;
export const START_GAME_STYLES = classesCategory.startGame;
export const REPEAT_WORD_STYLES = classesCategory.repeatWord;
export const CARD_WRAPPER_GUESSED_STYLES = classesCategory.cardWrapperGuessed;
export const CARD_WRAPPER_STYLES = classesCategory.cardWrapper;
export const CARD_CONTAINER_STYLES = classesCategory.cardContainer;
export const CARD_CONTAINER_ROTATED_STYLES =
  classesCategory.cardContainerRotated;
export const CARD_FRONT_STYLES = classesCategory.cardFront;
export const CARD_BACK_STYLES = classesCategory.cardBack;
export const TRANSLATION_BTN_STYLES = classesCategory.translationBtn;
export const PLAY_SOUND_BTN_STYLES = classesCategory.playSoundBtn;
export const BUTTON_IMAGES_STYLES = classesCategory.buttonImages;
export const STAR_STYLES = classesCategory.star;

export const TRAIN_STYLES = `${classesCard.card} ${classesCard.isStartedGame}`;
export const PLAY_STYLES = `${classesCard.card} ${classesCard}`;
export const CARD_IMAGE_STYLES = classesCard.cardImage;
export const CARD_NAME_STYLES = classesCard.cardName;

export const OVERLAY_STYLES = classesEndGamePopup.overlay;
export const TEXT_CONTENT_STYLES = classesEndGamePopup.content;
export const END_GAME_POPUP_TITLE_STYLES = classesEndGamePopup.title;
export const WRONGS_STYLES = classesEndGamePopup.wrongs;
export const ENG_GAME_POPUP_IMAGE_STYLES = classesEndGamePopup.image;

export const NAV_MENU_STYLES = classesNavigation.navMenu;
export const NAV_ITEM_STYLES = classesNavigation.navItem;
export const NAV_ITEM_ICON_STYLES = classesNavigation.navItemIcon;
export const NAV_ITEM_ICON_WRAPPER_STYLES =
  classesNavigation.navItemIconWrapper;
export const NAV_ITEM_ACTIVE_STYLES = classesNavigation.navItemActive;
export const NAV_ITEM_ICON_ACTIVE_STYLES = classesNavigation.navItemIconActive;
export const NAV_MENU_HIDDEN_STYLES = `${classesNavigation.navMenu} ${classesNavigation.navMenuHidden}`;
