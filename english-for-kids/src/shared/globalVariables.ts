import classesMainPage from '../components/MainPage/mainPage.module.scss';
import classesCategory from '../components/Category/category.module.scss';
import classesCard from '../components/Card/card.module.scss';
import classesEndGamePopup from '../components/EndGamePopup/endGamePopup.module.scss';
import classesNavigation from '../components/Header/Navigation/navigation.module.scss';

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

export const TRAIN_STYLES = `${classesCard.card} ${classesCard.isStartedGame}`;
export const PLAY_STYLES = `${classesCard.card} ${classesCard}`;
export const CARD_IMAGE_STYLES = classesCard.cardImage;
export const CARD_NAME_STYLES = classesCard.cardName;

export const OVERLAY_STYLES = classesEndGamePopup.overlay;
export const TEXT_CONTENT_STYLES = classesEndGamePopup.content;
export const TITLE_STYLES = classesEndGamePopup.title;

export const NAV_MENU = classesNavigation.navMenu;
export const NAV_ITEM = classesNavigation.navItem;
export const NAV_ITEM_ACTIVE = classesNavigation.navItemActive;
