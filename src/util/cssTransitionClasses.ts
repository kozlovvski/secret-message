import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";

export default (
  styles: { readonly [key: string]: string },
  className: string
): CSSTransitionClassNames => ({
  appear: styles[`${className}-appear`],
  appearActive: styles[`${className}-appear-active`],
  appearDone: styles[`${className}-appear-done`],
  enter: styles[`${className}-enter`],
  enterActive: styles[`${className}-enter-active`],
  enterDone: styles[`${className}-enter-done`],
  exit: styles[`${className}-exit`],
  exitActive: styles[`${className}-exit-active`],
  exitDone: styles[`${className}-exit-done`],
});
