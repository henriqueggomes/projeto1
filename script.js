(function(){
    var script = {
 "start": "this.init()",
 "layout": "absolute",
 "data": {
  "name": "Player436"
 },
 "height": "100%",
 "id": "rootPlayer",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E"
 ],
 "downloadEnabled": false,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "minWidth": 20,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "borderSize": 0,
 "definitions": [{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F1D8462E_FA67_47AD_41C5_49CBF01C2A42",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_t.jpg",
 "class": "Panorama",
 "label": "WhatsApp Image 2021-09-16 at 21.58.24",
 "id": "panorama_F225A37F_F94F_EFEB_41E2_D025D265995F",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_0/b/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_0/f/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_0/u/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_0/d/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_0/l/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_0/r/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500",
   "backwardYaw": -101.2,
   "yaw": 85.11,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F5658A25_F954_791F_41D9_81ED2CE68F43",
  "this.overlay_F452586D_F957_B9EC_41E6_6DDCDECBE487",
  "this.panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F1D8F62E_FA67_47AD_41A2_9DB1AE90C798",
 "duration": 1000
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.registerKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695', this.Container_E82CD898_F954_D935_41E1_9FA4153ED695.get('visible')); this.registerKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E', this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, false); this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true, -1, this.effect_EFCA7522_F954_AB15_41D2_50C21F9D563B, 'showEffect', false); this.keepComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, false); this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true, -1, this.effect_EACB542F_F954_A96B_41E6_CE0DDC347EDB, 'showEffect', false)",
   "media": "this.panorama_F225A37F_F94F_EFEB_41E2_D025D265995F",
   "end": "if(this.existsKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E')){ if(this.getKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E')) { this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true, -1, this.effect_EFCA7522_F954_AB15_41D2_50C21F9D563B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, false, -1, this.effect_F1D8F62E_FA67_47AD_41A2_9DB1AE90C798, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E'); if(this.existsKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')){ if(this.getKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')) { this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true, -1, this.effect_EACB542F_F954_A96B_41E6_CE0DDC347EDB, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, false, -1, this.effect_F1D8862E_FA67_47AD_41EA_4DCF1E93A797, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')",
   "start": "this.keepComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true); this.keepComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_camera"
  },
  {
   "begin": "this.registerKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695', this.Container_E82CD898_F954_D935_41E1_9FA4153ED695.get('visible')); this.registerKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E', this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, false); this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true, -1, this.effect_EFC9C522_F954_AB15_41C7_0FB4A15BEBC1, 'showEffect', false); this.keepComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, false); this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true, -1, this.effect_EACA3438_F954_A974_41D2_37706D20EC58, 'showEffect', false)",
   "media": "this.panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500",
   "end": "if(this.existsKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E')){ if(this.getKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E')) { this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true, -1, this.effect_EFC9C522_F954_AB15_41C7_0FB4A15BEBC1, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, false, -1, this.effect_F1D8462E_FA67_47AD_41C5_49CBF01C2A42, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E'); if(this.existsKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')){ if(this.getKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')) { this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true, -1, this.effect_EACA3438_F954_A974_41D2_37706D20EC58, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, false, -1, this.effect_F1D8562E_FA67_47AD_41BD_0295AEEB23DE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')",
   "start": "this.keepComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true); this.keepComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_camera"
  },
  {
   "begin": "this.registerKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695', this.Container_E82CD898_F954_D935_41E1_9FA4153ED695.get('visible')); this.registerKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E', this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E.get('visible')); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, false); this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true, -1, this.effect_EFC94522_F954_AB15_41CD_2EA78D40F034, 'showEffect', false); this.keepComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, false); this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true, -1, this.effect_EACD8439_F954_A974_41E9_4EC124F731AC, 'showEffect', false)",
   "media": "this.panorama_F376ACD4_F94C_D93C_41D6_321DA854756C",
   "end": "if(this.existsKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E')){ if(this.getKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E')) { this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true, -1, this.effect_EFC94522_F954_AB15_41CD_2EA78D40F034, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, false, -1, this.effect_F1D8662E_FA67_47AD_41D5_CA6B94BC909A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E'); if(this.existsKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')){ if(this.getKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')) { this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true, -1, this.effect_EACD8439_F954_A974_41E9_4EC124F731AC, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, false, -1, this.effect_F1D8762E_FA67_47AD_41E9_1D33C500F852, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')",
   "start": "this.keepComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true); this.keepComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_camera"
  },
  {
   "begin": "this.registerKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695', this.Container_E82CD898_F954_D935_41E1_9FA4153ED695.get('visible')); this.registerKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E', this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E.get('visible')); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, false); this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true, -1, this.effect_EFC8E522_F954_AB15_41C9_B9C0F3D6302B, 'showEffect', false); this.keepComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, false); this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true, -1, this.effect_EACDE43A_F954_A975_41EA_3CD7433C10E1, 'showEffect', false)",
   "media": "this.panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59",
   "end": "if(this.existsKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E')){ if(this.getKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E')) { this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true, -1, this.effect_EFC8E522_F954_AB15_41C9_B9C0F3D6302B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, false, -1, this.effect_F1D8162E_FA67_47AD_41D1_CC1BA607BB1B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E'); if(this.existsKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')){ if(this.getKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')) { this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true, -1, this.effect_EACDE43A_F954_A975_41EA_3CD7433C10E1, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, false, -1, this.effect_F1DBC62E_FA67_47AD_41D6_51851A83F94B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')",
   "start": "this.keepComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true); this.keepComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_camera"
  },
  {
   "begin": "this.registerKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695', this.Container_E82CD898_F954_D935_41E1_9FA4153ED695.get('visible')); this.registerKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E', this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E.get('visible')); this.setEndToItemIndex(this.mainPlayList, 4, 0); this.keepComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, false); this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true, -1, this.effect_EFCF9522_F954_AB15_41EF_0495CDACF338, 'showEffect', false); this.keepComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, false); this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true, -1, this.effect_EACD443B_F954_A96B_41C2_6EB5BB2F6980, 'showEffect', false)",
   "media": "this.panorama_F3791972_F94C_BBF5_41D7_0B9834B10494",
   "end": "if(this.existsKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E')){ if(this.getKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E')) { this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true, -1, this.effect_EFCF9522_F954_AB15_41EF_0495CDACF338, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, false, -1, this.effect_F1DBD62E_FA67_47AD_41C9_280D569FCF1E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E'); if(this.existsKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')){ if(this.getKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695')) { this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true, -1, this.effect_EACD443B_F954_A96B_41C2_6EB5BB2F6980, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, false, -1, this.effect_F1DBF62E_FA67_47AD_41D9_139C9174FF79, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E82CD898_F954_D935_41E1_9FA4153ED695'); this.trigger('tourEnded')",
   "start": "this.keepComponentVisibility(this.Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E, true); this.keepComponentVisibility(this.Container_E82CD898_F954_D935_41E1_9FA4153ED695, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EACA3438_F954_A974_41D2_37706D20EC58",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 69.18,
  "pitch": 0
 },
 "id": "camera_F1D9162E_FA67_47AD_41EF_3791A3DD54F6"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F1D8862E_FA67_47AD_41EA_4DCF1E93A797",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.89,
  "pitch": 0
 },
 "id": "camera_F6B63592_FA67_4575_41E6_0F3279CBDAAC"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F1D8662E_FA67_47AD_41D5_CA6B94BC909A",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EACDE43A_F954_A975_41EA_3CD7433C10E1",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EFC8E522_F954_AB15_41C9_B9C0F3D6302B",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_t.jpg",
 "class": "Panorama",
 "label": "WhatsApp Image 2021-09-16 at 21.58.28",
 "id": "panorama_F376ACD4_F94C_D93C_41D6_321DA854756C",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_0/b/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_0/f/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_0/u/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_0/d/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_0/l/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_0/r/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500",
   "backwardYaw": 111.36,
   "yaw": -89.73,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F3791972_F94C_BBF5_41D7_0B9834B10494",
   "backwardYaw": 37.44,
   "yaw": 155.18,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F7496714_F95C_D73D_41D9_93097048B74C",
  "this.overlay_F4D13692_F95C_E934_41D0_762E93FCABBC",
  "this.panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.82,
  "pitch": 0
 },
 "id": "camera_F1C3F60F_FA67_476B_41E4_1B0BB4251FE2"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.27,
  "pitch": 0
 },
 "id": "camera_F6BCB573_FA67_45BB_41CF_19751BFFAE12"
},
{
 "thumbnailUrl": "media/panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_t.jpg",
 "class": "Panorama",
 "label": "WhatsApp Image 2021-09-16 at 21.58.32",
 "id": "panorama_F3791972_F94C_BBF5_41D7_0B9834B10494",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_0/b/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_0/f/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_0/u/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_0/d/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_0/l/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_0/r/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59",
   "backwardYaw": 92.52,
   "yaw": -110.82,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F376ACD4_F94C_D93C_41D6_321DA854756C",
   "backwardYaw": 155.18,
   "yaw": 37.44,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F72436F3_F954_56FB_41DE_FD43DDF69667",
  "this.overlay_F7FB0053_F957_E93B_41C3_172124D39CBE",
  "this.panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_EB52056A_F954_6B15_41D9_D1411F581F2A.mp3",
  "oggUrl": "media/audio_EB52056A_F954_6B15_41D9_D1411F581F2A.ogg"
 },
 "data": {
  "label": "Alok - Favela"
 },
 "class": "MediaAudio",
 "id": "audio_EB52056A_F954_6B15_41D9_D1411F581F2A",
 "autoplay": true
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EACD443B_F954_A96B_41C2_6EB5BB2F6980",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F1D8762E_FA67_47AD_41E9_1D33C500F852",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F1D8562E_FA67_47AD_41BD_0295AEEB23DE",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_camera"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EFC9C522_F954_AB15_41C7_0FB4A15BEBC1",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F1DBC62E_FA67_47AD_41D6_51851A83F94B",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.8,
  "pitch": 0
 },
 "id": "camera_F6A58563_FA67_45DB_41E4_5487B769B8C8"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.64,
  "pitch": -14.19
 },
 "id": "panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_camera"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EACD8439_F954_A974_41E9_4EC124F731AC",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": 34.63,
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 34.63,
  "pitch": 1.11
 },
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetPitch": 1.11,
   "targetStereographicFactor": 0,
   "duration": 3000
  }
 ],
 "id": "panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_camera"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EFCA7522_F954_AB15_41D2_50C21F9D563B",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EFC94522_F954_AB15_41CD_2EA78D40F034",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -142.56,
  "pitch": 0
 },
 "id": "camera_F1C805E0_FA67_44D5_41ED_90BA4C2EDDF8"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.64,
  "pitch": 0
 },
 "id": "camera_F68755A1_FA67_4556_41E7_17F0E8C084D2"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EFCF9522_F954_AB15_41EF_0495CDACF338",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_t.jpg",
 "class": "Panorama",
 "label": "WhatsApp Image 2021-09-16 at 21.58.31",
 "id": "panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_0/b/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_0/f/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_0/u/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_0/d/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_0/l/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_0/r/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F3791972_F94C_BBF5_41D7_0B9834B10494",
   "backwardYaw": -110.82,
   "yaw": 92.52,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F781E37D_F954_AFEF_41DA_8D7209B2E3D0",
  "this.overlay_F7693C54_F954_D93D_41BB_2E67EA5A2560",
  "this.overlay_F763290B_F94C_DB2B_41D6_F9B1C844E8BE",
  "this.panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F1DBD62E_FA67_47AD_41C9_280D569FCF1E",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F1D8162E_FA67_47AD_41D1_CC1BA607BB1B",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_t.jpg",
 "class": "Panorama",
 "label": "WhatsApp Image 2021-09-16 at 21.58.26 (1)",
 "id": "panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_0/b/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_0/f/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_0/u/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_0/d/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_0/l/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_0/r/0/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F376ACD4_F94C_D93C_41D6_321DA854756C",
   "backwardYaw": -89.73,
   "yaw": 111.36,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F225A37F_F94F_EFEB_41E2_D025D265995F",
   "backwardYaw": 85.11,
   "yaw": -101.2,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F42955D5_F95C_EB3F_41CF_ABBAAE16F9CC",
  "this.overlay_F77FF1B7_F95C_AB7B_41D1_01445824C5F3",
  "this.overlay_F7B223DD_F954_6F2F_41D9_58E56A5CA859",
  "this.panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.48,
  "pitch": 0
 },
 "id": "camera_F1C7C5EF_FA67_44AA_41E3_FAEBB8FBDCCD"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EACB542F_F954_A96B_41E6_CE0DDC347EDB",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F1DBF62E_FA67_47AD_41D9_139C9174FF79",
 "duration": 1000
},
{
 "minHeight": 50,
 "progressBorderSize": 0,
 "id": "MainViewer",
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "minWidth": 100,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "paddingLeft": 0,
 "toolTipShadowColor": "#333333",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "layout": "absolute",
 "height": "5.97%",
 "id": "Container_E8269AF9_F957_DEF7_41E2_74C6E7B7942E",
 "left": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_E82CD898_F954_D935_41E1_9FA4153ED695",
  "this.Container_EB402288_F95C_A914_41E4_0D156F4403F5",
  "this.Container_EB125163_F95C_EB1B_41E4_0DE2037EA68D"
 ],
 "scrollBarWidth": 10,
 "show": "this.playGlobalAudio(this.audio_EB52056A_F954_6B15_41D9_D1411F581F2A)",
 "overflow": "scroll",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "5.344%",
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Music player"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "VENHA CONHCER \u000dNOSSA \u00c1REA \u000dGOURMET !!!!! "
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_1_HS_0_0.png",
      "width": 369,
      "height": 156
     }
    ]
   },
   "pitch": 1.08,
   "yaw": 50.35,
   "hfov": 83.09,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_F5658A25_F954_791F_41D9_81ED2CE68F43",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_1_HS_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": 1.08,
   "hfov": 83.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500, this.camera_F6A58563_FA67_45DB_41E4_5487B769B8C8); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8A58842_F97D_F915_41A2_3C32815321BD",
   "pitch": -34.06,
   "yaw": 85.11,
   "hfov": 30.41,
   "distance": 100
  }
 ],
 "id": "overlay_F452586D_F957_B9EC_41E6_6DDCDECBE487",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.06,
   "hfov": 30.41
  }
 ]
},
{
 "rotate": true,
 "angle": 33,
 "distance": 21.13,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_tcap0",
 "inertia": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 45
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500, this.camera_F68755A1_FA67_4556_41E7_17F0E8C084D2); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8A62852_F97D_F935_41EC_21BB8D950CD5",
   "pitch": -21.22,
   "yaw": -89.73,
   "hfov": 20.93,
   "distance": 100
  }
 ],
 "id": "overlay_F7496714_F95C_D73D_41D9_93097048B74C",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.22,
   "hfov": 20.93
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3791972_F94C_BBF5_41D7_0B9834B10494, this.camera_F1C805E0_FA67_44D5_41ED_90BA4C2EDDF8); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8A64852_F97D_F935_41E6_D7750F526914",
   "pitch": -46.62,
   "yaw": 155.18,
   "hfov": 18.23,
   "distance": 100
  }
 ],
 "id": "overlay_F4D13692_F95C_E934_41D0_762E93FCABBC",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -46.62,
   "hfov": 18.23
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 45
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59, this.camera_F1C7C5EF_FA67_44AA_41E3_FAEBB8FBDCCD); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8A15852_F97D_F935_418F_A0C81870E0F0",
   "pitch": -35.15,
   "yaw": -110.82,
   "hfov": 16.68,
   "distance": 100
  }
 ],
 "id": "overlay_F72436F3_F954_56FB_41DE_FD43DDF69667",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -35.15,
   "hfov": 16.68
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F376ACD4_F94C_D93C_41D6_321DA854756C, this.camera_F1C3F60F_FA67_476B_41E4_1B0BB4251FE2); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8A1E852_F97D_F935_41EB_C64D161D5CD4",
   "pitch": -61.36,
   "yaw": 37.44,
   "hfov": 9.78,
   "distance": 100
  }
 ],
 "id": "overlay_F7FB0053_F957_E93B_41C3_172124D39CBE",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -61.36,
   "hfov": 9.78
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 45
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8A69852_F97D_F935_41E6_CAF77C65C2B5",
   "pitch": -43.75,
   "yaw": -19.7,
   "hfov": 22.73,
   "distance": 100
  }
 ],
 "id": "overlay_F781E37D_F954_AFEF_41DA_8D7209B2E3D0",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -43.75,
   "hfov": 22.73
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3791972_F94C_BBF5_41D7_0B9834B10494, this.camera_F1D9162E_FA67_47AD_41EF_3791A3DD54F6); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8A6D852_F97D_F935_41D0_BA9E3A3F9B43",
   "pitch": -38.83,
   "yaw": 92.52,
   "hfov": 24.51,
   "distance": 100
  }
 ],
 "id": "overlay_F7693C54_F954_D93D_41BB_2E67EA5A2560",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -38.83,
   "hfov": 24.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "A MELHOR CONVENIENCIA \u000dDO VALE !!!! "
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_1_HS_2_0.png",
      "width": 369,
      "height": 156
     }
    ]
   },
   "pitch": -25.12,
   "yaw": 44.19,
   "hfov": 75.24,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_F763290B_F94C_DB2B_41D6_F9B1C844E8BE",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_1_HS_2_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -25.12,
   "hfov": 75.24
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 45
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F225A37F_F94F_EFEB_41E2_D025D265995F, this.camera_F6B63592_FA67_4575_41E6_0F3279CBDAAC); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8A70852_F97D_F935_41D1_0D86164C003B",
   "pitch": -33.51,
   "yaw": -101.2,
   "hfov": 18.72,
   "distance": 100
  }
 ],
 "id": "overlay_F42955D5_F95C_EB3F_41CF_ABBAAE16F9CC",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.51,
   "hfov": 18.72
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F376ACD4_F94C_D93C_41D6_321DA854756C, this.camera_F6BCB573_FA67_45BB_41CF_19751BFFAE12); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8A75852_F97D_F935_41CC_137F65A21F82",
   "pitch": -19.18,
   "yaw": 111.36,
   "hfov": 21.2,
   "distance": 100
  }
 ],
 "id": "overlay_F77FF1B7_F95C_AB7B_41D1_01445824C5F3",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19.18,
   "hfov": 21.2
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "TUDO EM UM \u000dS\u00d3 LUGAR !!! "
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_1_HS_2_0.png",
      "width": 371,
      "height": 147
     }
    ]
   },
   "pitch": -23.27,
   "yaw": -25.23,
   "hfov": 76.71,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_F7B223DD_F954_6F2F_41D9_58E56A5CA859",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_1_HS_2_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": -23.27,
   "hfov": 76.71
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 45
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_E82CD898_F954_D935_41E1_9FA4153ED695",
 "left": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "SOM 1"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_EB402288_F95C_A914_41E4_0D156F4403F5",
 "left": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "SOM 2"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_EB125163_F95C_EB1B_41E4_0DE2037EA68D",
 "left": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "SOM 3"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_F225A37F_F94F_EFEB_41E2_D025D265995F_1_HS_1_0.png",
   "width": 1200,
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8A58842_F97D_F915_41A2_3C32815321BD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_1_HS_0_0.png",
   "width": 1200,
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8A62852_F97D_F935_41EC_21BB8D950CD5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_F376ACD4_F94C_D93C_41D6_321DA854756C_1_HS_1_0.png",
   "width": 1200,
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8A64852_F97D_F935_41E6_D7750F526914",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_1_HS_0_0.png",
   "width": 1200,
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8A15852_F97D_F935_418F_A0C81870E0F0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_F3791972_F94C_BBF5_41D7_0B9834B10494_1_HS_1_0.png",
   "width": 1200,
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8A1E852_F97D_F935_41EB_C64D161D5CD4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_1_HS_0_0.png",
   "width": 1200,
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8A69852_F97D_F935_41E6_CAF77C65C2B5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_F376FDA9_F94C_FB17_41DF_58E8D4DB1F59_1_HS_1_0.png",
   "width": 1200,
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8A6D852_F97D_F935_41D0_BA9E3A3F9B43",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_1_HS_0_0.png",
   "width": 1200,
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8A70852_F97D_F935_41D1_0D86164C003B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_F30A8B07_F94C_5F1B_41E5_10FD04A54500_1_HS_1_0.png",
   "width": 1200,
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8A75852_F97D_F935_41CC_137F65A21F82",
 "frameDuration": 41
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "shadow": false,
 "mouseWheelEnabled": true,
 "scripts": {
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "contentOpaque": false,
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
