// Audio output devices API

// document.querySelector("#myButton").addEventListener("click", async () => {
//   if (!navigator.mediaDevices.selectAudioOutput) {
//     console.log("selectAudioOutput() not supported or not in secure context.");
//     return;
//   }

//   // Display prompt to select device
//   const audioDevice = await navigator.mediaDevices.selectAudioOutput();

//   // Create an audio element and start playing audio on the default device
//   const audio = document.createElement("audio");
//   audio.src = "https://cdn.val9ja.com/wp-content/uploads/2024/04/Vibez_Inc_Ft_Muyeez_Seyi_Vibez_-_Instagram.mp3";
//   audio.play();

//   // Change the sink to the selected audio output device.
//   audio.setSinkId(audioDevice.deviceId);
// });

// Battery Status API

// navigator.getBattery().then((battery) => {
//   function updateAllBatteryInfo() {
//     updateChargeInfo();
//     updateLevelInfo();
//     updateChargingInfo();
//     updateDischargingInfo();
//   }
//   updateAllBatteryInfo();

//   battery.addEventListener("chargingchange", () => {
//     updateChargeInfo();
//   });
//   function updateChargeInfo() {
//     console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
//   }

//   battery.addEventListener("levelchange", () => {
//     updateLevelInfo();
//   });
//   function updateLevelInfo() {
//     console.log(`Battery level: ${battery.level * 100}%`);
//   }

//   battery.addEventListener("chargingtimechange", () => {
//     updateChargingInfo();
//   });
//   function updateChargingInfo() {
//     console.log(`Battery charging time: ${battery.chargingTime} seconds`);
//   }

//   battery.addEventListener("dischargingtimechange", () => {
//     updateDischargingInfo();
//   });
//   function updateDischargingInfo() {
//     console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
//   }
// });

//  CSS Paint API

// registerPaint(
//   "boxbg",
//   class {
//     static get contextOptions() {
//       return { alpha: true };
//     }

//     /*
//        use this function to retrieve any custom properties (or regular properties, such as 'height')
//        defined for the element, return them in the specified array
//     */
//     static get inputProperties() {
//       return ["--boxColor", "--widthSubtractor"];
//     }

//     paint(ctx, size, props) {
//       /*
//          ctx -> drawing context
//          size -> paintSize: width and height
//          props -> properties: get() method
//       */

//       ctx.fillStyle = props.get("--boxColor");
//       ctx.fillRect(
//         0,
//         size.height / 3,
//         size.width * 0.4 - props.get("--widthSubtractor"),
//         size.height * 0.6
//       );
//     }
//   }
// );

// Device memory API

const RAM = navigator.deviceMemory;
console.log(RAM);
