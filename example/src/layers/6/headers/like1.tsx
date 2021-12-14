import React from 'react';
import { useStateContext } from '~/index';
import styles from './player.less';

export function Like1(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.show('p2')
    // stateview.show('like0')
    // stateview.show('play1')
    // stateview.show('notdraw1')
  }

  return <span onClick={sayHello}><svg className={styles.icon} t="1639443244126" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1479" width="200" height="200"><path d="M511.4 511.9m-426.3 0a426.3 426.3 0 1 0 852.6 0 426.3 426.3 0 1 0-852.6 0Z" fill="#FF7A4E" p-id="1480"></path><path d="M511.4 958.2c-60.2 0-118.7-11.8-173.7-35.1-53.1-22.5-100.9-54.7-141.9-95.6-41-41-73.2-88.7-95.6-141.9-23.3-55-35.1-113.5-35.1-173.7s11.8-118.7 35.1-173.7c22.5-53.1 54.7-100.9 95.6-141.9 41-41 88.7-73.2 141.9-95.6 55-23.3 113.5-35.1 173.7-35.1 60.2 0 118.7 11.8 173.7 35.1 53.1 22.5 100.9 54.7 141.9 95.6 41 41 73.2 88.7 95.6 141.9 23.3 55 35.1 113.5 35.1 173.7s-11.7 118.7-35 173.7C900.2 738.8 868 786.5 827 827.5s-88.7 73.2-141.9 95.6c-55 23.3-113.4 35.1-173.7 35.1z m0-852.6c-224 0-406.3 182.3-406.3 406.3s182.3 406.3 406.3 406.3 406.3-182.3 406.3-406.3c0.1-224-182.2-406.3-406.3-406.3z" fill="#FF7A4E" p-id="1481"></path><path d="M531.9 250.5l58.4 118.4c4.4 8.9 12.9 15 22.6 16.5l130.6 19c24.7 3.6 34.5 33.9 16.7 51.3l-94.5 92.1c-7.1 6.9-10.3 16.9-8.7 26.6l22.3 130.1c4.2 24.6-21.6 43.3-43.6 31.7L519 674.8c-8.8-4.6-19.2-4.6-28 0l-116.8 61.4c-22.1 11.6-47.9-7.1-43.6-31.7l22.3-130.1c1.7-9.8-1.6-19.7-8.7-26.6l-94.5-92.1c-17.9-17.4-8-47.7 16.7-51.3l130.6-19c9.8-1.4 18.3-7.6 22.6-16.5L478 250.5c11-22.4 42.9-22.4 53.9 0z" fill="#FFFFFF" p-id="1482"></path></svg></span>;
}
