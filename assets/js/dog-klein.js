(function () {
  const dog = document.getElementById("floatingDog");
  const dock = document.getElementById("kleinDock");
  if (!dog || !dock) return;

  let docked = false;

  function center(el) {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  function dockDog() {
    if (docked) return;
    docked = true;

    // stop hover animation
    dog.classList.add("is-docked");

    // move to klein bottle
    const a = center(dog);
    const b = center(dock);
    const dx = b.x - a.x;
    const dy = b.y - a.y;

    dog.style.transition = "transform 550ms ease, opacity 250ms ease";
    dog.style.transform = `translate(${dx}px, ${dy}px) scale(0.85)`;
    dog.title = "dog.hover(false); // relocated to KleinBottle.manifold()";

    setTimeout(() => {
      dog.style.opacity = "0.75";
    }, 600);
  }

  dog.addEventListener("click", dockDog);
  dog.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") dockDog();
  });
})();
