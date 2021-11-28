class Blur {
  constructor({ wrapper, text }) {
    this.wrapper = wrapper;
    this.text = text;
  }
  blurSiteTextCountdown() {
    const txtArrayCountodown = ["3", "2", "1", "Start!"];
    let letter = 0;
    let word = 0;
    const time = 40;
    // Implementacja
    this.wrapper.classList.add("blur");
    const addLetter = () => {
      this.text.textContent += txtArrayCountodown[word][letter];
      letter++;
      if (txtArrayCountodown[word].length == letter) {
        letter = 0;
        let out = setTimeout(() => {
          this.text.textContent = "";
          if (word < txtArrayCountodown.length - 1) {
            word++;
          } else {
            return;
          }
          addLetter();
        }, 1000);
        return out;
      }
      setTimeout(addLetter, time);
    };

    setTimeout(() => {
      this.wrapper.classList.remove("blur");
    }, 4000);
    addLetter();
  }
}
export const blur = new Blur({
  wrapper: document.querySelector(".MainWrap"),
  text: document.querySelector(".text"),
});

blur.blurSiteTextCountdown();
