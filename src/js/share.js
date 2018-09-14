const twitterBaseUrl = 'https://twitter.com/intent/tweet?text=';
const facebookBaseUrl = 'https://www.facebook.com/dialog/feed?display=popup&app_id=741666719251986&redirect_uri=http://www.theguardian.com&link=';
const googleBaseUrl = 'https://plus.google.com/share?url=';


export default function share(title, shareURL, hashTag, fbImg, twImg) {
    var twImgText = twImg ? ` ${twImg.trim()} ` : '';
    var fbImgQry = fbImg ? `&picture=${encodeURIComponent(fbImg)}` : '';

    return function (network, extra='') {
        var twitterMessage = `${extra}${title}${twImgText}${hashTag}`;
        var shareWindow;

        if (network === 'twitter') {
            shareWindow = twitterBaseUrl + encodeURIComponent("Our #BeyondtheBlade films and podcasts aim to challenge misconceptions about knife crime in the UK. You can watch all of them here gu.com/blade ");
        } else if (network === 'facebook') {
            shareWindow = facebookBaseUrl + 'gu.com/blade' + "?CMP=fb_gu" + fbImgQry;
        } else if (network === 'email') {
            shareWindow = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + 'gu.com/blade';
        } else if (network === 'google') {
            shareWindow = googleBaseUrl + shareURL;
        }

        window.open(shareWindow, network + 'share', 'width=640,height=320');
    }
}
