window.onload = () => {
  setupClasses = (cssClass) => {
    if (document.body.classList.contains(cssClass)) {
      document.body.classList.remove(cssClass);
    } else {
      document.body.classList.add(cssClass);
    }
  };

  const buttonBold = document.getElementById("bold");
  buttonBold.addEventListener("click", () => {
    setupClasses('bold');
  });

  const visible = document.getElementById("visible");
  visible.addEventListener("click", () => {
    setupClasses('visible');
  });

  const rock = document.getElementById("rock");
  rock.addEventListener("click", () => {
    setupClasses('rock');
  });

  const acid = document.getElementById("acid");
  acid.addEventListener("click", () => {
    setupClasses('acid');
  });



  const jump = document.getElementById("jump");
  jump.addEventListener("click", () => {
    document.body.classList.add('jump');
    setTimeout(()=>{
        document.body.classList.remove('jump');
    }, 2000)  
  });
};
