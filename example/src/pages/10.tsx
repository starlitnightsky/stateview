import React from 'react';

import { Stateview, Layer } from '~/index';
import { Logined, UnLogin } from '../layers/10';
import styles from './index.less';

/**
 * 嵌套Demo：3个状态切换 
 */
export default () => {
  return (
    <Stateview default='unlogin' className={styles.panel} group="a">
      <Layer state='logined' component={<Logined name='跳转到未登录状态' />} />
      <Layer state='unlogin' component={<UnLogin name='跳转到登录状态' />} />
    </Stateview>
  );
}
