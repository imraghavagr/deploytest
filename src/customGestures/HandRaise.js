//Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

//Define Gesture Description

export const handraiseGesture = new GestureDescription('handRaise');

/*
     0: 'Thumb',
      1: 'Index',
      2: 'Middle',
      3: 'Ring',
      4: 'Pinky
 */

for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    handraiseGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    handraiseGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}
