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
  let origOffsetY = contents.offset().top - 85;
  let origOffsetX =
    $(document).width() - (contents.offset().left + contents.width());
  console.log("contents.offset().left: " + contents.offset().left);
  console.log("contents.width(): " + contents.width());
  console.log("$(document).width(): " + $(document).width());
  console.log(
    "$(document).width() - (contents.offset().left + contents.width()): " +
      ($(document).width() - (contents.offset().left + contents.width()))
  );
  console.log("origOffsetY: " + origOffsetY);

  function scroll() {
    console.log("scroll: " + $(window).scrollTop());
    if ($(window).scrollTop() >= origOffsetY) {
      contents.addClass("contents-fixed");
      contents.css("right", origOffsetX);
    } else {
      contents.removeClass("contents-fixed");
      contents.css("right", "auto");
    }
  }
  document.onscroll = scroll;
});
