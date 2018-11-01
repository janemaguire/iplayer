/**
* @preserve Copyright (c) 2013 British Broadcasting Corporation
* (http://www.bbc.co.uk) and TAL Contributors (1)
*
* (1) TAL Contributors are listed in the AUTHORS file and at
*     https://github.com/fmtvp/TAL/AUTHORS - please extend this file,
*     not this notice.
*
* @license Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
* All rights reserved
* Please contact us for an alternative licence
*/

define(
  "sampleapp/appui/datasources/simplefeed",
  [
    "antie/class"
  ],
  function(Class) {
    return Class.extend({
      // You will probably want to do something more useful then returning static data
      loadData : function(callbacks) {
        callbacks.onSuccess(
          [
            {
              "id":"1",
              "title":"Blackadder",
              "img" : "static/img/shows/blackadder.jpg"
            },
            {
              "id":"2",
              "title":"Blue Planet II",
              "img" : "static/img/shows/blue-planet.jpg"
            },
            {
              "id":"3",
              "title":"Doctor Who",
              "img" : "static/img/shows/doctor-who.jpg"
            },
            {
              "id":"4",
              "title":"Fleabag",
              "img" : "static/img/shows/fleabag.jpg"
            },
            {
              "id":"5",
              "title":"Inside No 9",
              "img" : "static/img/shows/inside-no-9.jpg"
            },
            {
              "id":"6",
              "title":"Luther",
              "img" : "static/img/shows/luther.jpg"
            },
            {
              "id":"7",
              "title":"Strictly Come Dancing",
              "img" : "static/img/shows/strictly.jpg"
            },
            {
              "id":"8",
              "title":"University Challenge",
              "img" : "static/img/shows/university-challenge.jpg"
            }
          ]
        );
      }
    });
  });
