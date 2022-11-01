import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import logo from "./../Assets/work-life-balance-logo.png";
import sound from "../Assets/example_sound.mp3";

const Notifiction = () => {
  const [permission, setPermission] = useState(false);

  const quotes = [
    "Believe in yourself! Have faith in your abilities! Be led by the dreams in your heart.",
    "Strength is the product of struggle. Work hard, stay consistent, and be patient.",
    "Never give up. You always get what you work for.",
    "All our dreams can come true, if we have the courage to pursue them. Nothing can be done without hope and confidence.",
  ];

  const [play] = useSound(sound, { volume: 0.25 });

  useEffect(() => {
    Notification.requestPermission();
    //lunch_break();
    const lunch = setInterval(() => {
      lunch_break();
    }, 1600000);
    const quoteNotif = setInterval(() => {
      let randomNum;
      randomNum = parseInt(0 + Math.random() * (4 - 0));
      showNotification("quote", quotes[randomNum]);
    }, 360000);

    const backPosture = setInterval(() => {
      showNotification(
        "reminder",
        "Hey! remember straight and proper posture is good for you,\n and please drink water"
      );
    }, 1800000);

    const shortBreaks = setInterval(() => {
      showNotification(
        "break",
        "Hey, its time to take quick break and walk around a bit"
      );
    }, 3610000);

    return () => (
      clearInterval(quoteNotif),
      clearInterval(backPosture),
      clearInterval(shortBreaks),
      clearInterval(lunch)
    );
  }, []);

  const lunch_break = async () => {
    const time = new Date();
    console.log(time.getHours(), "rrr---");
    if (time.getHours() >= 13 && time.getHours() <= 14) {
      console.log(time.getHours());
      await showNotification("Hey! its time for Lunch..!");
    }
  };

  function showNotification(event, text) {
    play();
    const notification = new Notification("Work-Life-Balance", {
      body: text,
      icon: logo,
    });
  }
  const notifyUser = (notifiactionText = "Notifiactions are enabled..!") => {
    if (Notification.permission === "granted") {
      showNotification();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((resp) => {
        showNotification("hfuief");
      });
    }
  };
  return <div></div>;
};

export default Notifiction;
