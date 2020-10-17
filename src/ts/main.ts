import 'simple-steering-wheel';
import { AreaSelector } from 'simple-steering-wheel';
import { Props, sendRequestSubsequently } from './connection.service';

const leftRightControl = document.getElementById('left-right') as AreaSelector;
leftRightControl.addEventListener('changed', () => {
  const x = 1 - (leftRightControl.pointFromZeroPercents().x + 1) / 2;
  sendRequestSubsequently({ [Props.Servo1]: Math.round(30 + x * 140) });
});

const mainControl = document.getElementById('main-control') as AreaSelector;
mainControl.addEventListener('changed', () => {
  const x = (mainControl.pointFromZeroPercents().x + 1) / 2;
  const y = 1 - (mainControl.pointFromZeroPercents().y + 1) / 2;
  sendRequestSubsequently({ [Props.Servo2]: Math.round(40 + x * 90) });
  sendRequestSubsequently({ [Props.Servo3]: Math.round(y * 170) });
});
