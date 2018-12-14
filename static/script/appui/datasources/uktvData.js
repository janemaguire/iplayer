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
    "sampleapp/appui/datasources/uktvData", [
        "antie/class"
    ],
    function(Class) {
        return Class.extend({
            // You will probably want to do something more useful then returning static data
            loadData: function(callbacks) {
                callbacks.onSuccess(
                    [
                    {
                        landing_episode: {
                            credits_cuepoint: 5206,
                            is_feature: false,
                            has_subtitles: false,
                            image: "https://uktv-res.cloudinary.com/image/upload/v1532016147/zwdafntadtjh3fwmvmje.jpg",
                            brand_name: "Inspector George Gently",
                            hide_episode_title: false,
                            brand_id: 168,
                            duration: 120,
                            brand_slug: "inspector-george-gently",
                            id: 7835,
                            house_number: "CTAV493P",
                            channel: "drama",
                            guidance_age: "PG",
                            guidance_text: "Contains Violence",
                            variant: "84h",
                            series_id: 10139,
                            available_end: "2018-12-29T20:00:00Z",
                            episode_number: 2,
                            name: "Bomber's Moon",
                            watch_online_link: "https://uktvplay.uktv.co.uk/shows/inspector-george-gently/watch-online/5818540332001",
                            video_id: 5818540332001,
                            available_start: "2018-11-29T22:00:00Z",
                            synopsis: "Martin Shaw is the veteran Northumberland detective faced with the rapidly-changing world of the 1960s. An ex-POW's body is found in a fishing village's harbour.",
                            available_end_unix: 1546113600,
                            series_number: "1"
                        },
                        slug: "inspector-george-gently",
                        subcategories: [
                            11,
                            7
                        ],
                        description: "Crime drama, set in the 1960s, about an old-school detective trying to come to terms with a time when the lines between the police and criminals have become blurred.",
                        series: [
                        {
                            id: 10139,
                            number: "1"
                        }],
                        image: "https://uktv-res.cloudinary.com/image/upload/v1480683611/ngph0kkjjxasbmuntfdn.jpg",
                        available_episodes: 3,
                        hide_episode_title: false,
                        item_type: "brand",
                        id: 168,
                        name: "Inspector George Gently",
                        nextOn: "",
                        responseId: "7ca3b7b4-bcf0-4db4-b8d3-260b1d3148e1",
                        space: "brand",
                        itemId: 168
                    },
                    {
                        landing_episode: {
                            credits_cuepoint: 2736.6,
                            is_feature: false,
                            has_subtitles: false,
                            image: "https://uktv-res.cloudinary.com/image/upload/v1525087287/oap3yi9hfa39fwb2el2x.jpg",
                            brand_name: "The Beast",
                            hide_episode_title: false,
                            brand_id: 2685,
                            duration: 75,
                            brand_slug: "the-beast",
                            id: 119447,
                            house_number: "CTBS196B",
                            channel: "drama",
                            guidance_age: "15",
                            guidance_text: "Contains Violence",
                            variant: "82h",
                            series_id: 15954,
                            available_end: "2019-05-31T22:59:00Z",
                            episode_number: 1,
                            name: "Pilot",
                            watch_online_link: "https://uktvplay.uktv.co.uk/shows/the-beast/watch-online/5817246865001",
                            video_id: 5817246865001,
                            available_start: "2018-05-10T08:00:00Z",
                            synopsis: "Patrick Swayze stars in the crime drama series. An FBI agent and his rookie partner go undercover to dismantle an illegal weapons ring.",
                            available_end_unix: 1559343540,
                            series_number: "1"
                        },
                        slug: "the-beast",
                        subcategories: [
                            12,
                            7
                        ],
                        description: "Tough drama series about a maverick FBI agent and his cautious rookie partner.",
                        name: "The Beast",
                        series: [
                        {
                            id: 15954,
                            number: "1"
                        }],
                        image: "https://uktv-res.cloudinary.com/image/upload/v1523709894/f31rqwhzphn6liawkcvw.jpg",
                        available_episodes: 13,
                        hide_episode_title: false,
                        item_type: "brand",
                        id: 2685,
                        sibling_collection: {
                            subcategories: [
                                2,
                                5,
                                12,
                                11,
                                7
                            ],
                            subtitle: "UKTV Play Exclusives",
                            name: "UKTV Play Exclusives",
                            items: [
                            {
                                subcategories: [
                                    12,
                                    11
                                ],
                                name: "Pan Am",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1523623472/fvk1etyafq70btzdqnkh.jpg",
                                available_episodes: 14,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 2686,
                                slug: "pan-am"
                            },
                            {
                                subcategories: [
                                    2,
                                    5
                                ],
                                name: "Bad Teacher",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1523709892/ncgdhxvv9dhdkdyyomoh.jpg",
                                available_episodes: 13,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 2683,
                                slug: "bad-teacher"
                            },
                            {
                                subcategories: [
                                    12
                                ],
                                name: "Rake",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1523709893/tmxzznd00xrk2lf6gfkw.jpg",
                                available_episodes: 13,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 2684,
                                slug: "rake"
                            },
                            {
                                subcategories: [
                                    12,
                                    7
                                ],
                                name: "The Beast",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1523709894/f31rqwhzphn6liawkcvw.jpg",
                                available_episodes: 13,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 2685,
                                slug: "the-beast"
                            },
                            {
                                subcategories: [
                                    2,
                                    5
                                ],
                                name: "Breaking In",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1524747153/jeotilnsormcnnfjgfkx.jpg",
                                available_episodes: 20,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 2699,
                                slug: "breaking-in"
                            },
                            {
                                subcategories: [
                                    5,
                                    2
                                ],
                                name: "The Michael J Fox Show",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1524747157/xvmluw7qvouqyyojfxr6.jpg",
                                available_episodes: 22,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 2700,
                                slug: "the-michael-j-fox-show"
                            },
                            {
                                subcategories: [
                                    2,
                                    5
                                ],
                                name: "Mr Sunshine",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1525784362/no8avtkammtznzwbx0c8.jpg",
                                available_episodes: 13,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 2710,
                                slug: "mr-sunshine"
                            }],
                            full_width_image: "https://uktv-res.cloudinary.com/image/upload/v1544025442/icdpuastyfbuedm9ra51.jpg",
                            id: 66,
                            shows_list_image: null,
                            banner_background_colour: "#C6D5DC",
                            page_header_image: null,
                            type: "sibling",
                            slug: "uktv-play-exclusives",
                            portrait_image: null
                        },
                        nextOn: "",
                        responseId: "7ca3b7b4-bcf0-4db4-b8d3-260b1d3148e1",
                        space: "brand",
                        itemId: 2685
                    },
                    {
                        landing_episode: {
                            credits_cuepoint: 2693,
                            is_feature: false,
                            has_subtitles: false,
                            image: "https://uktv-res.cloudinary.com/image/upload/v1542812849/ersedbwisqiv7gu8c1lj.jpg",
                            brand_name: "The Bill",
                            hide_episode_title: false,
                            brand_id: 116,
                            duration: 60,
                            brand_slug: "the-bill",
                            id: 66587,
                            house_number: "CTAN222F",
                            channel: "drama",
                            guidance_age: "PG",
                            guidance_text: "Contains Mature Themes",
                            variant: "84",
                            series_id: 6840,
                            available_end: "2019-01-05T11:00:00Z",
                            episode_number: 79,
                            name: "Shout",
                            watch_online_link: "https://uktvplay.uktv.co.uk/shows/the-bill/watch-online/5969435941001",
                            video_id: 5969435941001,
                            available_start: "2018-12-06T12:00:00Z",
                            synopsis: "DC Spears and PC Clarke are horribly exposed when they are used as bait to catch a rapist.",
                            available_end_unix: 1546686000,
                            series_number: "17"
                        },
                        slug: "the-bill",
                        subcategories: [
                            7,
                            13
                        ],
                        description: "Long-running drama with the bobbies and detectives at London's Sun Hill police station.",
                        series: [
                        {
                            id: 6840,
                            number: "17"
                        }],
                        image: "https://uktv-res.cloudinary.com/image/upload/v1542024133/rk5xnerg8ud4lfzbgibs.jpg",
                        available_episodes: 22,
                        hide_episode_title: false,
                        item_type: "brand",
                        id: 116,
                        name: "The Bill",
                        nextOn: "",
                        responseId: "7ca3b7b4-bcf0-4db4-b8d3-260b1d3148e1",
                        space: "brand",
                        itemId: 116
                    },
                    {
                        landing_episode: {
                            credits_cuepoint: 8649.24,
                            is_feature: true,
                            has_subtitles: false,
                            image: "https://uktv-res.cloudinary.com/image/upload/v1498052064/n9wtv73qmq6gj2pbdfdq.jpg",
                            brand_name: "Catherine Cookson: Colour Blind",
                            hide_episode_title: false,
                            brand_id: 1688,
                            duration: 180,
                            brand_slug: "catherine-cookson-colour-blind",
                            id: 109435,
                            house_number: "CTBL731L",
                            channel: "drama",
                            guidance_age: "PG",
                            guidance_text: "Contains Mature Themes",
                            variant: "82",
                            series_id: 14304,
                            available_end: "2020-12-31T23:59:00Z",
                            episode_number: 1,
                            name: "Catherine Cookson: Colour Blind",
                            watch_online_link: "https://uktvplay.uktv.co.uk/shows/catherine-cookson-colour-blind/watch-online/5816546159001",
                            video_id: 5816546159001,
                            available_start: "2018-12-01T00:00:00Z",
                            synopsis: "An emotional adaptation of Catherine Cookson's best-selling 1920s novel. Bridget McQueen and her new husband, a black seaman, are faced with bigotry on all sides.",
                            available_end_unix: 1609459140,
                            series_number: "1"
                        },
                        slug: "catherine-cookson-colour-blind",
                        subcategories: [
                            43,
                            11
                        ],
                        description: "Feature-length TV versions adaptated from books written by the popular Tyneside novelist",
                        name: "Catherine Cookson: Colour Blind",
                        series: [
                        {
                            id: 14304,
                            number: "1"
                        }],
                        image: "https://uktv-res.cloudinary.com/image/upload/v1469028696/y0eel6lqdqiqphxwyb0v.jpg",
                        available_episodes: 1,
                        hide_episode_title: false,
                        item_type: "brand",
                        id: 1688,
                        sibling_collection: {
                            subcategories: [
                                43,
                                11
                            ],
                            subtitle: "Catherine Cookson",
                            name: "Catherine Cookson",
                            channel_slug: "drama",
                            full_width_image: "https://uktv-res.cloudinary.com/image/upload/v1533891753/pi4vkhvul3wvtytecxhg.jpg",
                            id: 1,
                            channel_id: 4646,
                            shows_list_image: "https://uktv-res.cloudinary.com/image/upload/v1533640485/lcfgitiexwp0q8w1r1dm.jpg",
                            banner_background_colour: "#D3E2E7",
                            items: [
                            {
                                subcategories: [
                                    11,
                                    43
                                ],
                                name: "Catherine Cookson's The Dwelling Place",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1472829760/ki8svp2mmyoudkzmwuir.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 1749,
                                slug: "catherine-cooksons-the-dwelling-place"
                            },
                            {
                                subcategories: [
                                    11,
                                    43
                                ],
                                name: "Catherine Cookson's The Fifteen Streets",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1464704785/ag7bx0ypblailwg3ixdg.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 607,
                                slug: "catherine-cooksons-the-fifteen-streets"
                            },
                            {
                                subcategories: [
                                    11,
                                    43
                                ],
                                name: "Catherine Cookson's The Rag Nymph",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1469028696/xscmz4pistcn12zke144.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 1739,
                                slug: "catherine-cooksons-the-rag-nymph"
                            },
                            {
                                subcategories: [
                                    11,
                                    43
                                ],
                                name: "Catherine Cookson's The Tide of Life",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1465397276/a16q2fvrmauykltnx0xg.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 872,
                                slug: "catherine-cooksons-the-tide-of-life"
                            },
                            {
                                subcategories: [
                                    43,
                                    11
                                ],
                                name: "Catherine Cookson: Colour Blind",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1469028696/y0eel6lqdqiqphxwyb0v.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 1688,
                                slug: "catherine-cookson-colour-blind"
                            },
                            {
                                subcategories: [
                                    11,
                                    43
                                ],
                                name: "Catherine Cookson: The Cinder Path",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1464704738/cce0bk44lgd2wxdfd1my.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 1683,
                                slug: "catherine-cookson-the-cinder-path"
                            },
                            {
                                subcategories: [
                                    11,
                                    43
                                ],
                                name: "Catherine Cookson: The Gambling Man",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1466504161/ab0dluysrnosqkg3ided.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 1682,
                                slug: "catherine-cookson-the-gambling-man"
                            },
                            {
                                subcategories: [
                                    43,
                                    11
                                ],
                                name: "Catherine Cookson: The Girl",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1465397322/tisixizsipw9ezb8jj7k.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 1681,
                                slug: "catherine-cookson-the-girl"
                            },
                            {
                                subcategories: [
                                    43,
                                    11
                                ],
                                name: "Catherine Cookson: The Glass Virgin",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1464704831/ddpidb7tyjfzhvoktkfz.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 1687,
                                slug: "catherine-cookson-the-glass-virgin"
                            },
                            {
                                subcategories: [
                                    11,
                                    43
                                ],
                                name: "Catherine Cookson: The Man Who Cried",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1484307748/rnbrb5nlhrzkqrvwkixk.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 582,
                                slug: "catherine-cookson-the-man-who-cried"
                            },
                            {
                                subcategories: [
                                    43,
                                    11
                                ],
                                name: "Catherine Cookson: The Moth",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1466504243/rlrvkbsgympkgzllmq2q.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 1685,
                                slug: "catherine-cookson-the-moth"
                            },
                            {
                                subcategories: [
                                    43,
                                    11
                                ],
                                name: "Catherine Cookson: The Round Tower",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1464704869/uil4xcmms9j7uxeqtupa.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 1679,
                                slug: "catherine-cookson-the-round-tower"
                            },
                            {
                                subcategories: [
                                    43,
                                    11
                                ],
                                name: "Catherine Cookson: The Secret",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1464704906/wc2eff0urp9d36iuuvdd.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 1684,
                                slug: "catherine-cookson-the-secret"
                            },
                            {
                                subcategories: [
                                    43,
                                    11
                                ],
                                name: "Catherine Cookson: The Wingless Bird",
                                image: "https://uktv-res.cloudinary.com/image/upload/v1464704939/auaypx1i5epzxeepkev0.jpg",
                                available_episodes: 1,
                                hide_episode_title: false,
                                item_type: "brand",
                                id: 1680,
                                slug: "catherine-cookson-the-wingless-bird"
                            }],
                            page_header_image: null,
                            type: "sibling",
                            slug: "catherine-cookson",
                            portrait_image: "https://uktv-res.cloudinary.com/image/upload/v1533640485/wjx8uai1aqpowho9exfo.jpg"
                        },
                        nextOn: "",
                        responseId: "7ca3b7b4-bcf0-4db4-b8d3-260b1d3148e1",
                        space: "brand",
                        itemId: 1688
                    },
                    {
                        landing_episode: {
                            credits_cuepoint: 2672.96,
                            is_feature: false,
                            has_subtitles: false,
                            image: "https://uktv-res.cloudinary.com/image/upload/v1494586928/gyjs0xcaiu4rpi748wmh.jpg",
                            brand_name: "Mercy Street",
                            hide_episode_title: false,
                            brand_id: 2267,
                            duration: 60,
                            brand_slug: "mercy-street",
                            id: 115965,
                            house_number: "CTBO838K",
                            channel: "drama",
                            guidance_age: "12",
                            guidance_text: "Contains Mature Themes",
                            variant: "83h",
                            series_id: 15312,
                            available_end: "2020-10-31T23:59:00Z",
                            episode_number: 1,
                            name: "The New Nurse",
                            watch_online_link: "https://uktvplay.uktv.co.uk/shows/mercy-street/watch-online/5816946890001",
                            video_id: 5816946890001,
                            available_start: "2017-07-10T23:00:00Z",
                            synopsis: "Medical drama series about two volunteer nurses on opposing sides of the Civil War. Mary Phinney begins work at Mansion House, a hotel turned Union hospital.",
                            available_end_unix: 1604188740,
                            series_number: "1"
                        },
                        slug: "mercy-street",
                        subcategories: [
                            10,
                            11,
                            11
                        ],
                        description: "Medical drama series about two volunteer nurses who work at a hotel turned Union hospital in the occupied Southern city of Alexandria, Virginia",
                        series: [
                        {
                            id: 15312,
                            number: "1"
                        },
                        {
                            id: 15314,
                            number: "2"
                        }],
                        image: "https://uktv-res.cloudinary.com/image/upload/v1538732848/nelxnrk3hesb5unum8qb.jpg",
                        available_episodes: 12,
                        hide_episode_title: false,
                        item_type: "brand",
                        id: 2267,
                        name: "Mercy Street",
                        nextOn: "",
                        responseId: "7ca3b7b4-bcf0-4db4-b8d3-260b1d3148e1",
                        space: "brand",
                        itemId: 2267
                    },
                    {
                        landing_episode: {
                            credits_cuepoint: 2626.44,
                            is_feature: false,
                            has_subtitles: false,
                            image: "https://uktv-res.cloudinary.com/image/upload/v1542645027/ynh0bpuo94pxdxr0pgab.jpg",
                            brand_name: "Casualty",
                            hide_episode_title: false,
                            brand_id: 130,
                            duration: 60,
                            brand_slug: "casualty",
                            id: 121722,
                            house_number: "DRRB033L",
                            channel: "drama",
                            guidance_age: "PG",
                            guidance_text: "Contains Mature Themes",
                            variant: "82h",
                            series_id: 16189,
                            available_end: "2019-01-05T09:00:00Z",
                            episode_number: 24,
                            name: "Excess Baggage",
                            watch_online_link: "https://uktvplay.uktv.co.uk/shows/casualty/watch-online/5967705809001",
                            video_id: 5967705809001,
                            available_start: "2018-12-06T10:00:00Z",
                            synopsis: "New. Rita helps a man change his stubborn attitude after he refuses to tell people he has a neurological disease, while Dixie is forced to give Iain a verbal warning.",
                            available_end_unix: 1546678800,
                            series_number: "29"
                        },
                        slug: "casualty",
                        subcategories: [
                            13,
                            10
                        ],
                        description: "Drama series about the staff and patients at Holby City Hospital's emergency department, charting the ups and downs in their personal and professional lives.",
                        series: [
                        {
                            id: 16189,
                            number: "29"
                        }],
                        image: "https://uktv-res.cloudinary.com/image/upload/v1505214229/rszrkewydkdli1yrwi03.jpg",
                        available_episodes: 22,
                        hide_episode_title: false,
                        item_type: "brand",
                        id: 130,
                        name: "Casualty",
                        nextOn: "",
                        responseId: "7ca3b7b4-bcf0-4db4-b8d3-260b1d3148e1",
                        space: "brand",
                        itemId: 130
                    },
                    {
                        subcategories: [
                            11,
                            43
                        ],
                        name: "A Place to Call Home",
                        image: "https://uktv-res.cloudinary.com/image/upload/v1512746960/vd8dgxftfcjt2mjdiskp.jpg",
                        available_episodes: 23,
                        hide_episode_title: false,
                        item_type: "brand",
                        id: 2558,
                        slug: "a-place-to-call-home",
                        nextOn: "",
                        responseId: "7ca3b7b4-bcf0-4db4-b8d3-260b1d3148e1",
                        space: "brand",
                        itemId: 2558
                    },
                    {
                        landing_episode: {
                            credits_cuepoint: 3511.48,
                            is_feature: false,
                            has_subtitles: false,
                            image: "https://uktv-res.cloudinary.com/image/upload/v1430821780/ioy8lqdlij5skcrdhr5s.jpg",
                            brand_name: "Call the Midwife",
                            hide_episode_title: true,
                            brand_id: 525,
                            duration: 80,
                            brand_slug: "call-the-midwife",
                            id: 108810,
                            house_number: "DRIB405E",
                            channel: "drama",
                            guidance_age: "PG",
                            guidance_text: "",
                            variant: "82h",
                            series_id: 14078,
                            available_end: "2018-12-31T14:40:00Z",
                            episode_number: 5,
                            name: "Call the Midwife ",
                            watch_online_link: "https://uktvplay.uktv.co.uk/shows/call-the-midwife/watch-online/None",
                            video_id: 5971489031001,
                            available_start: "2018-12-01T16:00:00Z",
                            synopsis: "Drama series based on Jennifer Worth's memoirs. A woman with eight children desperately seeks an alternative to having her ninth. The community prepares for the summer fete.",
                            available_end_unix: 1546267200,
                            series_number: "2"
                        },
                        slug: "call-the-midwife",
                        subcategories: [
                            10,
                            11
                        ],
                        description: "Drama following the lives of a group of midwives working in the poverty-stricken East End of London during the 1950s, based on the best-selling memoirs of Jennifer Worth.",
                        series: [
                        {
                            id: 15142,
                            number: "1"
                        },
                        {
                            id: 12793,
                            number: "1"
                        },
                        {
                            id: 14078,
                            number: "2"
                        }],
                        image: "https://uktv-res.cloudinary.com/image/upload/v1484317592/cfh0gpymhvt3sqo0rqxc.jpg",
                        available_episodes: 11,
                        hide_episode_title: true,
                        item_type: "brand",
                        id: 525,
                        name: "Call the Midwife",
                        nextOn: "",
                        responseId: "7ca3b7b4-bcf0-4db4-b8d3-260b1d3148e1",
                        space: "brand",
                        itemId: 525
                    },
                    {
                        subcategories: [
                            1,
                            2,
                            4
                        ],
                        name: "As Time Goes By",
                        image: "https://uktv-res.cloudinary.com/image/upload/v1474453959/u7nepqgxfhonootsjuxs.jpg",
                        available_episodes: 16,
                        hide_episode_title: false,
                        item_type: "brand",
                        id: 204,
                        slug: "as-time-goes-by",
                        nextOn: "",
                        responseId: "7ca3b7b4-bcf0-4db4-b8d3-260b1d3148e1",
                        space: "brand",
                        itemId: 204
                    },
                    {
                        subcategories: [
                            16,
                            23
                        ],
                        name: "My Tattoo Addiction",
                        image: "https://uktv-res.cloudinary.com/image/upload/v1468405181/tq4lqfavd5i9tzr577j8.jpg",
                        available_episodes: 3,
                        hide_episode_title: true,
                        item_type: "brand",
                        id: 2126,
                        slug: "my-tattoo-addiction",
                        nextOn: "",
                        responseId: "7ca3b7b4-bcf0-4db4-b8d3-260b1d3148e1",
                        space: "brand",
                        itemId: 2126
                    },
                    {
                        subcategories: [
                            13
                        ],
                        name: "Classic Eastenders",
                        image: "https://uktv-res.cloudinary.com/image/upload/v1537543123/way3053ny4i1oolcmevx.jpg",
                        available_episodes: 44,
                        hide_episode_title: true,
                        item_type: "brand",
                        id: 2753,
                        slug: "classic-eastenders",
                        nextOn: "",
                        responseId: "7ca3b7b4-bcf0-4db4-b8d3-260b1d3148e1",
                        space: "brand",
                        itemId: 2753
                    },
                    {
                        subcategories: [
                            52,
                            4,
                            6,
                            51
                        ],
                        name: "Beat the Internet",
                        image: "https://uktv-res.cloudinary.com/image/upload/v1538753684/d2u992fftvt6oujk1lls.jpg",
                        available_episodes: 6,
                        hide_episode_title: true,
                        item_type: "brand",
                        id: 2912,
                        slug: "beat-the-internet",
                        nextOn: "",
                        responseId: "7ca3b7b4-bcf0-4db4-b8d3-260b1d3148e1",
                        space: "brand",
                        itemId: 2912
                    }]
                );
            }
        });
    });
