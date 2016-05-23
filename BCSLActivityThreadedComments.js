/*

Blogger Gadget Commentaires Filetés - Activités récentes.

Distribution non autorisée au-delà du blog : http://bloggercode-blogconnexion.blogspot.com/

AUTHOR : SORAYA LAMBRECHTS

*/


function threadperpost(postinfo) {
  var refpost = postinfo.entry.title.$t;
  for (var URI = 0; URI < postinfo.entry.link.length; URI++) {
    if (postinfo.entry.link[URI].rel == 'alternate') {
      uripost = postinfo.entry.link[URI].href;
      break;
    }
  }
/*  var imagepost = postinfo.entry.media$thumbnail.url.replace(/s72-c/, "s50-c");*/
  var numbcommentspost = postinfo.entry["thr$total"].$t;
  if (numbcommentspost > 1) {
    numbcommentspost = numbcommentspost + " commentaires";
  } else {
    numbcommentspost = numbcommentspost + " commentaire";
  }
  document.write(" sur <a href='"+uripost+"' title='Total : "+numbcommentspost+"'>"+refpost+"</a>");
}


function activitycomments(commentaires) {

/* Coordonnées assistance */

  var DistributionUri    = "http://bloggercode-blogconnexion.blogspot.com/";
  var DistributionName   = "Blogger_Code";
  var CreatorUri         = "https://plus.google.com/114671227071069817799";
  var CreatorName        = "Soraya_Lambrechts";
  var valeurtotale       = commentaires.feed.openSearch$totalResults.$t;
  var blogcreator        = commentaires.feed.author[0].name.$t;
  var L1Btn              = "Lire"; 
  var L1Bul              = "Acc&#232;der &#224; ce commentaire"; 
  var L2Btn              = "Lire";
  var L2Bul              = "Acc&#232;der &#224; cette r&#233;ponse";
  var L2ThumbSize        = "20";
  var level1             = 0;
  

document.write("<div class='bctheme-"+ClassTheme+"' style='background-color: "+backgroundColorBox+"; padding: "+paddingbox+"px; font-size: "+txtsize+"px;'>");


/* DONNEES COMMENTAIRES */

  for (var L1 = 0; L1 < entreeaffiche; L1++) {
    var entree_1 = commentaires.feed.entry[L1];

    var L1PostUri = "";
    for (var L1a = 0; L1a < entree_1.link.length; L1a++) {
      if (entree_1.link[L1a].rel == 'alternate') {
        L1PostUri = entree_1.link[L1a].href;
        break;
      }
    }

    var L1DisplayTime;
    for (var L1b = 0; L1b < entree_1.gd$extendedProperty.length; L1b++) {
      if (entree_1.gd$extendedProperty[L1b].name == 'blogger.displayTime') {
        L1DisplayTime = "<div class='bc-comment-single-displaytime'>"+entree_1.gd$extendedProperty[L1b].value+"</div>";
        break;
      }
    }

    var L1Related = "";
    for (var L1c = 0; L1c < entree_1.link.length; L1c++) {
      if (entree_1.link[L1c].rel == 'related') {
        L1Related = entree_1.link[L1c].href;
        break;
      }
    }

    var L1Itemclass = "";
    for (var L1d = 0; L1d < entree_1.gd$extendedProperty.length; L1d++) {
      if (entree_1.gd$extendedProperty[L1d].name == 'blogger.itemClass') {
        L1Itemclass = entree_1.gd$extendedProperty[L1d].value;
        break;
      }
    }

    var L1AuthorName     = entree_1.author[0].name.$t;
    var L1AuthorThumbUri = entree_1.author[0].gd$image.src;
    var L1Title          = entree_1.title.$t;

    var L1AuthorClass      = "";
    if (L1AuthorName === postcreator) { var L1AuthorClass = " postcreator" }
    if (L1AuthorName === blogcreator) { var L1AuthorClass = " blogcreator" }

    try {
      var L1AuthorUri = entree_1.author[0].uri.$t;
      var L1AuthorNameLink = "<span class='notranslate"+L1AuthorClass+"'><a href='"+L1AuthorUri+"' rel='"+AuthorLinkNoFollow+"' target='"+AuthorLinkTarget+"' title='"+L1AuthorName+"'>"+L1AuthorName+"</a></span>";
    }
    catch (error) {
      var L1AuthorUri = "";
      var L1AuthorNameLink = "<span class='notranslate sdfduweb"+L1AuthorClass+"'>"+L1AuthorName+"</span>";
    }

      if (L1AuthorThumbUri != "http://img2.blogblog.com/img/b16-rounded.gif" && L1AuthorThumbUri != "http://img1.blogblog.com/img/openid16-rounded.gif" && L1AuthorThumbUri != "http://img1.blogblog.com/img/blank.gif") {
        L1AuthorThumbUri = L1AuthorThumbUri.replace(/\/s\d\d+-c\//, '/s'+L1ThumbSize+'-c/');
        L1AuthorThumbUri = L1AuthorThumbUri.replace(/s1600/, 's'+L1ThumbSize+'-c');
        L1AuthorThumbUri = L1AuthorThumbUri.replace(/s220/, 's'+L1ThumbSize+'-c');
        var L1AuthorThumbUri = "<div class='bc-comment-L1img'><img src='"+L1AuthorThumbUri+"' width='"+L1ThumbSize+"' height='"+L1ThumbSize+"' alt='' style='border-radius: "+L1ThumbBorderRadius+"px;'/></div>"; }

    if (L1AuthorThumbUri == "http://img1.blogblog.com/img/blank.gif") {
      var L1AuthorThumbUri = "<div class='bc-comment-L1img'><img src='https://3.bp.blogspot.com/-4ifvKtCH5I8/VyUEQZn_-jI/AAAAAAAAAs8/pRyRT6kHUD8VZhQylgK5LKKSgLwwBzrTQCLcB/s1600/avatar-freepix.jpg' width='"+L1ThumbSize+"' height='"+L1ThumbSize+"' alt='' style='border-radius: "+L1ThumbBorderRadius+"px;'/></div>"; }
    else {
      if (L1AuthorThumbUri == "http://img2.blogblog.com/img/b16-rounded.gif") {
        var L1AuthorThumbUri = "<div class='bc-comment-L1img'><img src='https://lh4.googleusercontent.com/-jRkwoGM8WeE/UFEb_-t7e7I/AAAAAAAANUc/Ad2OQ6OztJw/s"+L1ThumbSize+"/blogger_logo.png' width='"+L1ThumbSize+"' height='"+L1ThumbSize+"' alt='' style='border-radius: "+L1ThumbBorderRadius+"px;'/></div>"; }
      if (L1AuthorThumbUri == "http://img1.blogblog.com/img/openid16-rounded.gif") {
        var L1AuthorThumbUri = "<div class='bc-comment-L1img'><img src='https://lh6.googleusercontent.com/-rzJ1ocx9LPU/UVazBqI10HI/AAAAAAAAOfA/B6m7LqlR0yY/s"+L1ThumbSize+"/openid.jpeg' width='"+L1ThumbSize+"' height='"+L1ThumbSize+"' alt='' style='border-radius: "+L1ThumbBorderRadius+"px;'/></div>"; }
    }

    if (L1Title == "") {
      var L1Title = "<div class='bc-comment-single-summary'><span class='verrouico'></span></div>";
    }
    else {
      var L1Title = L1Title.replace(/</gi, "&lt;");
      var L1Title = L1Title.replace(/&lt;br>/gi, " ");
      var L1Title = L1Title.replace(/ :\)/gi, ' <img src="https://lh4.googleusercontent.com/-tViBfx-maJM/Tg9rqx4VZHI/AAAAAAAAF8Q/lRuAKZay_yM/s1600/smile.png" alt=""/>');
      var L1Title = L1Title.replace(/ :-\)/gi, ' <img src="https://lh4.googleusercontent.com/-tViBfx-maJM/Tg9rqx4VZHI/AAAAAAAAF8Q/lRuAKZay_yM/s1600/smile.png" alt=""/>');
      var L1Title = L1Title.replace(/ ;\)/gi, ' <img src="https://lh4.googleusercontent.com/-nIEAlAoepb4/Tg9rneZLQvI/AAAAAAAAF8Q/q5KHM7YwpDI/s1600/wink.png" alt=""/>');
      var L1Title = L1Title.replace(/ ;-\)/gi, ' <img src="https://lh4.googleusercontent.com/-nIEAlAoepb4/Tg9rneZLQvI/AAAAAAAAF8Q/q5KHM7YwpDI/s1600/wink.png" alt=""/>');
      var L1Title = L1Title.replace(/ :\(/gi, ' <img src="https://lh3.googleusercontent.com/-cV0GY-0Kju8/Tg9roR-yHhI/AAAAAAAAF8Q/7CXLSkRW6PU/s1600/frown.png" alt=""/>');
      var L1Title = L1Title.replace(/ :-\(/gi, ' <img src="https://lh3.googleusercontent.com/-cV0GY-0Kju8/Tg9roR-yHhI/AAAAAAAAF8Q/7CXLSkRW6PU/s1600/frown.png" alt=""/>');
      var L1Title = L1Title.replace(/ :d/gi, ' <img src="https://lh3.googleusercontent.com/-ottGgzmgpXI/Tg9roxGQ7KI/AAAAAAAAF8Q/hi0KY62pAtc/s1600/grin.png" alt=""/>');
      var L1Title = L1Title.replace(/ :p/gi, ' <img src="https://lh4.googleusercontent.com/-ZwNK5pAw69s/Tg9rroGul7I/AAAAAAAAF8Q/bB-f6iIFuG4/s1600/tongue.png" alt=""/>');
      var L1Title = "<span class='notranslate'>&#171;</span>&nbsp;<span class='bc-comment-summary-cite'>"+L1Title+"</span>&nbsp;<span class='notranslate'>&#187;</span>";
      var L1Title = "<div class='bc-comment-single-summary'>"+L1Title+"</div>";
    }
    var BCclassName = DistributionName+"_"+CreatorName;




/* DONNEES COMMENTAIRES PARENTS */

    if (L1Related != "") {

      var L2AuthorName     = "";
      var L2AuthorThumbUri = "";
      var L2Title          = "";
      var L2AuthorUri      = "";
      var L2AuthorNameLink = "";


      for (var L2 = 0; L2 < entreemax; L2++) {
        var entree_2 = commentaires.feed.entry[L2];

        var L2Self = "";
        if (L2 == commentaires.feed.entry.length) break;
        for (var L2a = 0; L2a < entree_2.link.length; L2a++) {
          if (entree_2.link[L2a].rel == 'self') {
            L2Self = entree_2.link[L2a].href;
            break;
          }

        }

        if (L1Related === L2Self) {

          var L2PostUri = "";
          for (var L2b = 0; L2b < entree_2.link.length; L2b++) {
            if (entree_2.link[L2b].rel == 'alternate') {
              L2PostUri = entree_2.link[L2b].href;
              break;
            }
          }

          var L2Itemclass = "";
          for (var L2d = 0; L2d < entree_2.gd$extendedProperty.length; L2d++) {
            if (entree_2.gd$extendedProperty[L2d].name == 'blogger.itemClass') {
              L2Itemclass = entree_2.gd$extendedProperty[L2d].value;
              break;
            }
          }

          var L2AuthorName     = entree_2.author[0].name.$t;
          var L2AuthorThumbUri = entree_2.author[0].gd$image.src;
          var L2Title          = entree_2.title.$t;

          var L2AuthorClass    = "";
          if (L2AuthorName === postcreator) { var L2AuthorClass = " postcreator" }
          if (L2AuthorName === blogcreator) { var L2AuthorClass = " blogcreator" }

          try {
            var L2AuthorUri = entree_2.author[0].uri.$t;
            var L2AuthorNameLink = "<span class='notranslate"+L2AuthorClass+"'><a href='"+L2AuthorUri+"' rel='"+AuthorLinkNoFollow+"' target='"+AuthorLinkTarget+"' title='"+L2AuthorName+"'>"+L2AuthorName+"</a></span>";
          }
          catch (error) {
            var L2AuthorUri = "";
            var L2AuthorNameLink = "<span class='notranslate sdfduweb"+L2AuthorClass+"'>"+L2AuthorName+"</span>";
          }

          if (L2AuthorThumbUri == 'http://img1.blogblog.com/img/blank.gif') {
            var L2AuthorThumbUri = '<div class="bc-comment-L2img"><img src="http://img1.blogblog.com/img/anon36.png" width="'+L2ThumbSize+'" height="'+L2ThumbSize+'" alt="" style="border-radius: '+L1ThumbBorderRadius+'px;"/></div>'; }
          else {
            if (L2AuthorThumbUri == 'http://img2.blogblog.com/img/b16-rounded.gif') {
              var L2AuthorThumbUri = '<div class="bc-comment-L2img"><img src="https://lh4.googleusercontent.com/-jRkwoGM8WeE/UFEb_-t7e7I/AAAAAAAANUc/Ad2OQ6OztJw/s'+L2ThumbSize+'/blogger_logo.png" width="'+L2ThumbSize+'" height="'+L2ThumbSize+'" alt="" style="border-radius: '+L1ThumbBorderRadius+'px;"/></div>'; }
            if (L2AuthorThumbUri == 'http://img1.blogblog.com/img/openid16-rounded.gif') {
              var L2AuthorThumbUri = '<div class="bc-comment-L2img"><img src="https://lh6.googleusercontent.com/-rzJ1ocx9LPU/UVazBqI10HI/AAAAAAAAOfA/B6m7LqlR0yY/s'+L2ThumbSize+'/openid.jpeg" width="'+L2ThumbSize+'" height="'+L2ThumbSize+'" alt="" style="border-radius: '+L1ThumbBorderRadius+'px;"/></div>'; }
            if (L2AuthorThumbUri != 'http://img2.blogblog.com/img/b16-rounded.gif' && L2AuthorThumbUri != 'http://img1.blogblog.com/img/openid16-rounded.gif') {
              L2AuthorThumbUri = L2AuthorThumbUri.replace(/\/s\d\d+-c\//, "/s"+L2ThumbSize+"-c/");
              L2AuthorThumbUri = L2AuthorThumbUri.replace(/s1600/, "s"+L2ThumbSize+"-c");
              L2AuthorThumbUri = L2AuthorThumbUri.replace(/s220/, "s"+L2ThumbSize+"-c");
              var L2AuthorThumbUri = '<div class="bc-comment-L2img"><img src="'+L2AuthorThumbUri+'" width="'+L2ThumbSize+'" height="'+L2ThumbSize+'" alt="" style="border-radius: '+L1ThumbBorderRadius+'px;"/></div>'; }
          }

        }

      }

    }

    if (L1PostUri == "") {
      var L1PostUri = "";
      var commentstatut = "level1Delete";
    } else {
      if (L1Related == "") {
        var L1PostUri = "<a class='comment-hyperlink' href='"+L1PostUri+"' title='"+L1Bul+"'>"+L1Btn+"</a>";
        var commentstatut = "level1New";
      } else {
        var L1PostUri = "<a class='comment-hyperlink' href='"+L1PostUri+"' title='"+L2Bul+"'>"+L1Btn+"</a>";
        var commentstatut = "level2New";
      }
    }


/* TITRE MESSAGE */


    var level1 = level1 + 1;
    var FeedPost = "";
    try {
      if (level1>NumberPosts) {
        var FeedPost = "";
      }
      else {
        if(entree_1["thr$in-reply-to"]) {
          var INREPLYLINK = entree_1["thr$in-reply-to"].href;
          var INREPLYSOURCE = entree_1["thr$in-reply-to"].source;
          var INREPLYSOURCE = INREPLYSOURCE.replace(/default/g, 'summary');
          var FeedPost = "<script type='text/javascript' src='"+INREPLYSOURCE+"?alt=json-in-script&callback=threadperpost'></script>";
        }
      }
    }
    catch (error) {
      var FeedPost = "";
    }


/* TEXTES PUBLIcS */


  var L1New              = "<div class='bc-comment-single-activity'>"+L1AuthorNameLink+" a d&#233;pos&#233; un commentaire"+FeedPost+".</div>";
  var L1Del              = "<div class='bc-comment-single-activity'>Ce commentaire a &#233;t&#233; supprim&#233; <span class='verrouico'></span>"+FeedPost+".</div>";
  if (L2AuthorName == "") {
    var L2NewL1NewDif    = "<div class='bc-comment-single-activity'>"+L1AuthorNameLink+" a r&#233;pondu &#224; un ancien commentaire"+FeedPost+".</div>";
    var L2NewL1NewIde    = "<div class='bc-comment-single-activity'>"+L1AuthorNameLink+" a r&#233;pondu &#224; un ancien commentaire"+FeedPost+".</div>";
    var L2DelL1NewDif    = "<div class='bc-comment-single-activity'>Cette r&#233;ponse a &#233;t&#233; supprim&#233;e sur un ancien commentaire"+FeedPost+".</div>";
    var L2DelL1NewIde    = "<div class='bc-comment-single-activity'>Cette r&#233;ponse a &#233;t&#233; supprim&#233;e sur un ancien commentaire"+FeedPost+".</div>";
    var L2NewL1DelDif    = "<div class='bc-comment-single-activity'>"+L1AuthorNameLink+" a r&#233;pondu &#224; un commentaire dont l'objet a &#233;t&#233; supprim&#233; <span class='verrouico'></span>"+FeedPost+".</div>";
    var L2NewL1DelIde    = "<div class='bc-comment-single-activity'>"+L1AuthorNameLink+" a r&#233;pondu &#224; un commentaire dont l'objet a &#233;t&#233; supprim&#233; <span class='verrouico'></span>"+FeedPost+".</div>";
  } else {
    var L2NewL1NewDif    = "<div class='bc-comment-single-activity'>"+L1AuthorNameLink+" a r&#233;pondu &#224; un commentaire d&#233;pos&#233; par "+L2AuthorNameLink+""+FeedPost+".</div>";
    var L2NewL1NewIde    = "<div class='bc-comment-single-activity'>"+L1AuthorNameLink+" a ajout&#233; une r&#233;ponse &#224; son commentaire"+FeedPost+".</div>";
    var L2DelL1NewDif    = "<div class='bc-comment-single-activity'>Cette r&#233;ponse a &#233;t&#233; supprim&#233;e sur un commentaire de "+L2AuthorNameLink+""+FeedPost+".</div>";
    var L2DelL1NewIde    = "<div class='bc-comment-single-activity'>Cette r&#233;ponse a &#233;t&#233; supprim&#233;e sur un commentaire de "+L2AuthorNameLink+""+FeedPost+".</div>";
    var L2NewL1DelDif    = "<div class='bc-comment-single-activity'>"+L1AuthorNameLink+" a r&#233;pondu &#224; un ancien commentaire"+FeedPost+".</div>";
    var L2NewL1DelIde    = "<div class='bc-comment-single-activity'>"+L1AuthorNameLink+" a r&#233;pondu &#224; un ancien commentaire"+FeedPost+".</div>";
  }
  var L2DelL1Del         = "<div class='bc-comment-single-activity'>Cette r&#233;ponse a &#233;t&#233; supprim&#233;e sur un commentaire dont l'objet a &#233;galement &#233;t&#233; supprim&#233; <span class='verrouico'></span>"+FeedPost+".</div>";

/* TEXTES ADMIN */

  var L1Admin           = "<div class='item-control "+L1Itemclass+"'><div class='L1Admin'>Votre commentaire.</div></div>";
  if (L2AuthorName == "") {
    var L2AdminL1NewIde = "<div class='item-control "+L1Itemclass+"'><div class='L1Admin'>Votre r&#233;ponse &#224; un ancien commentaire.</div></div>";
    var L2AdminL1NewDif = "<div class='item-control "+L1Itemclass+"'><div class='L1Admin'>Votre r&#233;ponse &#224; un ancien commentaire.</div></div>";
    var L1AdminL2NewDif = "";
    var L2AdminL1DelIde = "<div class='item-control "+L1Itemclass+"'><div class='L1Admin'>Votre r&#233;ponse &#224; un commentaire supprim&#233;.</div></div>";
    var L2AdminL1DelDif = "<div class='item-control "+L1Itemclass+"'><div class='L1Admin'>Votre r&#233;ponse &#224; un commentaire supprim&#233;.</div></div>";
  } else {
    var L2AdminL1NewIde = "<div class='item-control "+L1Itemclass+"'><div class='L1Admin'>Votre r&#233;ponse &#224; votre commentaire.</div></div>";
    var L2AdminL1NewDif = "<div class='item-control "+L1Itemclass+"'><div class='L1Admin'>Votre r&#233;ponse &#224; un commentaire de "+L2AuthorName+".</div></div>";
    var L1AdminL2NewDif = "<div class='item-control "+L2Itemclass+"'><div class='L2Admin'>Vous avez re&#231;u une r&#233;ponse de "+L1AuthorName+".</div></div>";
    var L2AdminL1DelIde = "<div class='item-control "+L1Itemclass+"'><div class='L1Admin'>Votre r&#233;ponse &#224; un ancien commentaire.</div></div>";
    var L2AdminL1DelDif = "<div class='item-control "+L1Itemclass+"'><div class='L1Admin'>Votre r&#233;ponse &#224; un ancien commentaire.</div></div>";
  }
  var L1AdminL2DelIde   = "<div class='item-control "+L2Itemclass+"'><div class='L2Admin'>Votre r&#233;ponse sur votre commentaire a &#233;t&#233; supprim&#233;.</div></div>";
  var L1AdminL2DelDif   = "<div class='item-control "+L2Itemclass+"'><div class='L2Admin'>Cette r&#233;ponse a &#233;t&#233; supprim&#233;e sur votre commentaire.</div></div>";


/* RECOMPOSITION */

document.write("<div class='bc-comment-single'>");
document.write("<div class='bc-comment-single-content "+commentstatut+"'>");


if (L1Related == "" && L1PostUri == "") { /* Discussion verrouillee */
  document.write("<div class='bc-comment-single-informations' style='margin-left: "+L1ThumbSize+"px;'>"+L1DisplayTime+L1Del+"</div>");
}

if (L1Related == "" && L1PostUri != "") { /* Discussion ouverte */
  document.write(L1Admin);
  document.write(L1AuthorThumbUri);
  document.write("<div class='bc-comment-single-informations' style='margin-left: "+L1ThumbSize+"px;'>"+L1DisplayTime+L1New+L1Title+L1PostUri+"</div>");
}

if (L1Related != "" && L1PostUri == "" && L2PostUri == "") { /* Reponse supprimee - Discussion verrouillee */
  document.write("<div class='bc-comment-single-informations' style='margin-left: "+L1ThumbSize+"px;'>"+L1DisplayTime+L2DelL1Del+"</div>");
}

if (L1Related != "" && L1PostUri == "" && L2PostUri != "" && L1AuthorName == L2AuthorName) { /* Reponse supprimee - Discussion ouverte - Auteurs identiques */
  document.write(L1AdminL2DelIde);
  document.write("<div class='bc-comment-single-informations' style='margin-left: "+L1ThumbSize+"px;'>"+L1DisplayTime+L2DelL1NewIde+"</div>");
}

if (L1Related != "" && L1PostUri == "" && L2PostUri != "" && L1AuthorName != L2AuthorName) { /* Reponse supprimee - Discussion ouverte - Auteurs differents */
  document.write(L1AdminL2DelDif);
  document.write("<div class='bc-comment-single-informations' style='margin-left: "+L1ThumbSize+"px;'>"+L1DisplayTime+L2DelL1NewDif+"</div>");
}

if (L1Related != "" && L1PostUri != "" && L2PostUri == "" && L1AuthorName == L2AuthorName) { /* Reponse conservee - Discussion verrouillee - Auteurs identiques */
  document.write(L2AdminL1DelIde);
  document.write(L1AuthorThumbUri);
  document.write("<div class='bc-comment-single-informations' style='margin-left: "+L1ThumbSize+"px;'>"+L1DisplayTime+L2NewL1DelIde+L1Title+L1PostUri+"</div>");
}

if (L1Related != "" && L1PostUri != "" && L2PostUri == "" && L1AuthorName != L2AuthorName) { /* Reponse conservee - Discussion verrouillee - Auteurs differents */
  document.write(L2AdminL1DelDif);
  document.write(L1AuthorThumbUri);
  document.write("<div class='bc-comment-single-informations' style='margin-left: "+L1ThumbSize+"px;'>"+L1DisplayTime+L2NewL1DelDif+L1Title+L1PostUri+"</div>");
}

if (L1Related != "" && L1PostUri != "" && L2PostUri != "" && L1AuthorName == L2AuthorName) { /* Reponse conservee - Discussion ouverte - Auteurs identiques */
  document.write(L2AdminL1NewIde);
  document.write(L1AuthorThumbUri);
  document.write("<div class='bc-comment-single-informations' style='margin-left: "+L1ThumbSize+"px;'>"+L1DisplayTime+L2NewL1NewIde+L1Title+L1PostUri+"</div>");
}

if (L1Related != "" && L1PostUri != "" && L2PostUri != "" && L1AuthorName != L2AuthorName) { /* Reponse conservee - Discussion ouverte - Auteurs differents */
  document.write(L2AdminL1NewDif);
  document.write(L1AdminL2NewDif);
  document.write(L1AuthorThumbUri);
  document.write("<div class='bc-comment-single-informations' style='margin-left: "+L1ThumbSize+"px;'>"+L1DisplayTime+L2NewL1NewDif+L1Title+L1PostUri+"</div>");
}
document.write("<div style='clear: both;'></div></div></div>");

  }

document.write("<span class='item-control blog-admin'><span class='BCCrash "+BCclassName+"'>Message admin : </span></span></div>");

}
