import classesMainPage from '../components/MainPage/mainPage.module.scss';
import classesCategory from '../components/Category/category.module.scss';
import classesCard from '../components/Card/card.module.scss';
import classesEndGamePopup from '../components/EndGamePopup/endGamePopup.module.scss';
import classesNavigation from '../components/Header/Navigation/navigation.module.scss';
import classesFooter from '../components/Footer/footer.module.scss';

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
export const TITLE_STYLES = classesEndGamePopup.title;
export const WRONGS_STYLES = classesEndGamePopup.wrongs;
export const ENG_GAME_POPUP_IMAGE_STYLES = classesEndGamePopup.image;

export const NAV_MENU = classesNavigation.navMenu;
export const NAV_ITEM = classesNavigation.navItem;
export const NAV_ITEM_ACTIVE = classesNavigation.navItemActive;
