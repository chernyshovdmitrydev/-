import eventBus from '@/pages/eventBus';

export default function gotoPage(pageName, pageParams) {
  eventBus.$emit('gotoPage', pageName, pageParams);
}
