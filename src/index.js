import HtmlParser from './HtmlParser';
import * as htmlparser2 from 'htmlparser2';
export default HtmlParser;

export { default as processNodes } from './processNodes';
export { default as convertNodeToElement } from './convertNodeToElement';

// expose htmlparser2 so it can be used if required
export { htmlparser2 };
