$(document).ready(function () {
  // Override styles of the footnotes.
  document.querySelectorAll("d-footnote").forEach(function (footnote) {
    footnote.shadowRoot
      .querySelector("sup > span")
      .setAttribute("style", "color: var(--global-theme-color);");
    footnote.shadowRoot
      .querySelector("d-hover-box")
      .shadowRoot.querySelector("style")
      .sheet.insertRule(
        ".panel {background-color: var(--global-bg-color) !important;}"
      );
    footnote.shadowRoot
      .querySelector("d-hover-box")
      .shadowRoot.querySelector("style")
      .sheet.insertRule(
        ".panel {border-color: var(--global-divider-color) !important;}"
      );
  });
  // Override styles of the citations.
  document.querySelectorAll("d-cite").forEach(function (cite) {
    cite.shadowRoot
      .querySelector("div > span")
      .setAttribute("style", "color: var(--global-theme-color);");
    cite.shadowRoot
      .querySelector("style")
      .sheet.insertRule(
        "ul li a {color: var(--global-text-color) !important; text-decoration: none;}"
      );
    cite.shadowRoot
      .querySelector("style")
      .sheet.insertRule(
        "ul li a:hover {color: var(--global-theme-color) !important;}"
      );
    cite.shadowRoot
      .querySelector("d-hover-box")
      .shadowRoot.querySelector("style")
      .sheet.insertRule(
        ".panel {background-color: var(--global-bg-color) !important;}"
      );
    cite.shadowRoot
      .querySelector("d-hover-box")
      .shadowRoot.querySelector("style")
      .sheet.insertRule(
        ".panel {border-color: var(--global-divider-color) !important;}"
      );
  });
  // EDIT : Make distill menu fixed after certain scroll point
  let contents = $("d-contents");
  let origOffsetY = contents.offset().top - 32;
  let origWidth = contents.width();
  let origOffsetX =
    $(document).width() - (contents.offset().left + contents.width());
  let docWidth = $(document).width();

  // need to update for responsive design
  function calcFixedMenu() {
    if ($(window).scrollTop() >= origOffsetY) {
      contents.addClass("contents-fixed");

      // max-width: 1024px
      if (docWidth <= 1024) {
        contents.css("right", "0px");
        contents.css("width", "auto");
        contents.css("position", "fixed");
      } else {
        contents.css("right", "calc(" + origOffsetX + "px - 5em)");
        contents.css("width", origWidth + "px");
      }
    } else {
      contents.removeClass("contents-fixed");
      contents.css("right", "auto");
      contents.css("width", "auto");
    }
  }
  document.onscroll = calcFixedMenu;
  document.onresize = calcFixedMenu;
});
