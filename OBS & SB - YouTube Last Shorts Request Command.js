document.addEventListener("DOMContentLoaded", () => {
  try {
    const params = new URLSearchParams(location.search);
    const client = new StreamerbotClient({
      host: params.get("host") || "127.0.0.1",
      port: parseInt(params.get("port") || 8080, 10),
      endpoint: params.get("endpoint") || "/",
      password: params.get("password") || "",
      autoReconnect: true,
      immediate: true,
      onConnect: () => {
        console.log("✅ Streamer.bot verbunden!");
      },
      onDisconnect: () => {
        console.warn("⚠️ Streamer.bot getrennt - versuche Reconnect...");
      },
      onError: () => {
        console.error("❌ Streamer.bot Verbindungsfehler!");
      },
    });

    const htmlProperty = "html";
    const bodyProperty = "body";

    const html =
      document.documentElement || document.querySelector(htmlProperty);
    const body = document.body || document.querySelector(bodyProperty);

    const copy = "copy";
    const dragstart = "dragstart";
    const keydown = "keydown";
    const select = "select";

    const fontFamilyVar = "--font-family-var";
    const robotoBold = getComputedStyle(html)
      .getPropertyValue(fontFamilyVar)
      .trim();

    const clear = "";
    const zero = 0;
    const none = "none";
    const def = "default";

    const src = "src";
    const title = "title";

    let ytLastShortsVidId = null || clear;
    let ytLastShortsVidTitle = null || clear;
    let duration = null || zero;
    let playerCreated = false;

    client.on("Misc.GlobalVariableUpdated", ({ data }) => {
      if (!data || !data.name) return;

      if (data.name === "ytLastShortsId") {
        ytLastShortsVidId = data.newValue;
        console.log("🔄 Aktualisierte YouTube ShortsId:", ytLastShortsVidId);
      }

      if (data.name === "ytLastShortsTitle") {
        ytLastShortsVidTitle = data.newValue;
        console.log(
          "🔄 Aktualisierter YouTube Shorts-Titel:",
          ytLastShortsVidTitle,
        );
      }

      if (data.name === "ytShortsfullUrlDelay") {
        duration = parseInt(data.newValue, 10);
        console.log(
          "🔄 Aktualisierte Dauer des YouTube Shorts (ms):",
          duration,
        );
      }

      if (
        !playerCreated &&
        ytLastShortsVidId &&
        ytLastShortsVidTitle &&
        duration
      ) {
        playerCreated = true;
        ytLastShortsRequestToken();
      }
    });

    const diamond = "#";
    const get = (id) =>
      document.getElementById(id) || document.querySelector(diamond + id);

    const ytLastShortsRequestIframeDiv = get(
      "ytLastShortsRequestIframeContainerId",
    );
    const ytLastShortsRequestIframe = get("ytLastShortsRequestIframeId");

    (function jssYtLastShortsRequestIframeDivToken() {
      const width = "width";
      const height = "height";

      const cssWidth = window
        .getComputedStyle(ytLastShortsRequestIframeDiv)
        .getPropertyValue(width)
        .trim();
      const cssHeight = window
        .getComputedStyle(ytLastShortsRequestIframeDiv)
        .getPropertyValue(height)
        .trim();

      Object.assign(ytLastShortsRequestIframeDiv.style, {
        width: cssWidth,
        height: cssHeight,
      });
    })();

    (function jssYtLastShortsRequestIframeToken() {
      const width = "width";
      const height = "height";

      const widthIfr = 1080;
      const heightIfr = 1920;
      const borderRadiusNumber = 25 + "px";
      const pixel = "px";

      const cssInlineWidth = widthIfr.toString() + pixel;
      const cssInlineHeight = heightIfr.toString() + pixel;

      ytLastShortsRequestIframe.setAttribute(width, widthIfr);
      ytLastShortsRequestIframe.setAttribute(height, heightIfr);

      Object.assign(ytLastShortsRequestIframe.style, {
        width: cssInlineWidth,
        height: cssInlineHeight,
        borderRadius: borderRadiusNumber,
      });
    })();

    (function youtubeIframeSetAttributeToken() {
      try {
        const loading = "loading";
        const eager = "eager";

        const allow = "allow";

        const accelerometer = "accelerometer;";
        const clipboardWrite = "clipboard-write;";
        const encryptedMedia = "encrypted-media;";
        const gyroscope = "gyroscope;";
        const pictureInPicture = "picture-in-picture;";
        const webShare = "web-share;";

        if (ytLastShortsRequestIframeDiv && ytLastShortsRequestIframe) {
          ytLastShortsRequestIframe.setAttribute(loading, eager);
          ytLastShortsRequestIframe.setAttribute(
            allow,
            `${accelerometer} ${clipboardWrite} ${encryptedMedia} ${gyroscope} ${pictureInPicture} ${webShare}`,
          );
        }
      } catch (error) {
        console.error(
          "Fehler beim setzen des Attribute des Iframe Element:",
          error,
        );
      }
    })();

    function clearYouTubeIframeToken() {
      try {
        if (ytLastShortsRequestIframeDiv && ytLastShortsRequestIframe) {
          ytLastShortsRequestIframe.setAttribute(src, clear);
          ytLastShortsRequestIframe.setAttribute(title, clear);
        }
      } catch (error) {
        console.error(
          "Fehler beim Entleeren des YouTube Iframe Element:",
          error,
        );
      }
    }
    clearYouTubeIframeToken();

    function ytLastShortsRequestToken() {
      try {
        const youtubeLastShortsId = ytLastShortsVidId;
        const youtubeLastShortsTitleText = ytLastShortsVidTitle;
        const dealy = duration;

        const youtubeLastShortsUrl = `https://www.youtube.com/embed/${youtubeLastShortsId}/?autoplay=1&muted=0&loop=1&controls=1&rel=0`;

        clearYouTubeIframeToken();

        if (youtubeLastShortsId && youtubeLastShortsTitleText) {
          ytLastShortsRequestIframe.setAttribute(src, youtubeLastShortsUrl);
          ytLastShortsRequestIframe.setAttribute(
            title,
            youtubeLastShortsTitleText,
          );
        }

        setTimeout(() => {
          clearYouTubeIframeToken();
          playerCreated = false;
        }, dealy);
      } catch (error) {
        console.error(
          "Fehler beim Youtube Last Shorts Request Iframe Element:",
          error,
        );
      }
    }

    (function htmlElementSecurityToken() {
      const elementArray = [
        body,
        ytLastShortsRequestIframeDiv,
        ytLastShortsRequestIframe,
      ];
      const eventArray = [copy, dragstart, keydown, select];

      elementArray.forEach((element) => {
        if (!element) return;

        eventArray.forEach((event) => {
          if (!event) return;

          element.addEventListener(event, (e) => e.preventDefault());
        });
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        Object.assign(element.style, {
          fontFamily: robotoBold,
          WebkitUserSelect: none,
          userSelect: none,
          cursor: def,
          pointerEvents: none,
        });
      });
    })();
  } catch (error) {
    console.error("Haupt-Fehler:", error);
  }
});
