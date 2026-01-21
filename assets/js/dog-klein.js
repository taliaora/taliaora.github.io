(function () {
  const dog = document.getElementById("floatingDog");
  const bottle = document.getElementById("kleinBottle");
  const portal = document.getElementById("portalWarp");

  if (!dog || !bottle || !portal) return;

  let docked = false;
  let docking = false;

  function center(el) {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  function startPortal() {
    portal.classList.remove("is-active");
    void portal.offsetWidth; // restart animation
    portal.classList.add("is-active");
  }

  function dockDog() {
    if (docked || docking) return;
    docking = true;

    // stop floating
    dog.classList.remove("is-floating");
    dog.classList.add("is-docked");

    // show bottle + play gif only while docking
    bottle.classList.remove("is-hidden");
    const animSrc = bottle.getAttribute("data-anim");
    if (animSrc) bottle.src = animSrc;

    // portal warp
    startPortal();

    // move dog to bottle
    const a = center(dog);
    const b = center(bottle);
    const dx = b.x - a.x;
    const dy = b.y - a.y;

    dog.style.transform = `translate(${dx}px, ${dy}px) scale(0.85)`;
    dog.title = "dog.hover(false); // relocated to KleinBottle.manifold()";

    function onEnd(e) {
      if (e.propertyName !== "transform") return;
      dog.removeEventListener("transitionend", onEnd);

      // stop gif after docking by swapping to static
      const staticSrc = bottle.getAttribute("data-static");
      if (staticSrc) bottle.src = staticSrc;

      // optionally hide bottle again after docking:
      // bottle.classList.add("is-hidden");

      docked = true;
      docking = false;
    }

    dog.addEventListener("transitionend", onEnd);
  }

  dog.addEventListener("click", dockDog);
  dog.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") dockDog();
  });
})();

