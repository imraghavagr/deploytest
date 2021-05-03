//Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

//Define Gesture Description

export const loveYouGesture = new GestureDescription('i_love_you');

// Thumb 
loveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.20);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.20);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.20);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.20);

// Index
loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);
loveYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.20);
loveYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.20);

// Pinky
loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.20);
loveYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.20);
loveYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.20);

for(let finger of [Finger.Middle, Finger.Ring]){
    loveYouGesture.addCurl(finger, FingerCurl.FullCurl, .75); 
    loveYouGesture.addCurl(finger, FingerCurl.HalfCurl, .75); 
    loveYouGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}
