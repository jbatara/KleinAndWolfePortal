const randomLocation = require('random-location');
var fs = require('fs');
export const customers =[{
      "id": 1,
      "name": "Customer1",
      "date": "2018-11-13T00:16:40.256Z",
      "location": {
        "latitude": 40.816279864797565,
        "longitude": 80.84023411039927
      }
    },
    {
      "id": 2,
      "name": "Customer2",
      "date": "2018-11-26T09:17:59.983Z",
      "location": {
        "latitude": 41.163113501019424,
        "longitude": 80.75480174827871
      }
    },
    {
      "id": 3,
      "name": "Customer3",
      "date": "2018-11-12T23:03:50.317Z",
      "location": {
        "latitude": 40.85245724670939,
        "longitude": 80.61361667459276
      }
    },
    {
      "id": 4,
      "name": "Customer4",
      "date": "2018-11-23T13:03:55.167Z",
      "location": {
        "latitude": 41.45152769398765,
        "longitude": 81.2648276287856
      }
    },
    {
      "id": 5,
      "name": "Customer5",
      "date": "2018-11-07T00:55:19.548Z",
      "location": {
        "latitude": 40.89789860972749,
        "longitude": 81.30970674979748
      }
    },
    {
      "id": 6,
      "name": "Customer6",
      "date": "2018-11-04T03:38:11.000Z",
      "location": {
        "latitude": 40.910328502467436,
        "longitude": 80.95407242890398
      }
    },
    {
      "id": 7,
      "name": "Customer7",
      "date": "2018-11-19T03:50:53.388Z",
      "location": {
        "latitude": 41.05679988172085,
        "longitude": 81.33417523635951
      }
    },
    {
      "id": 8,
      "name": "Customer8",
      "date": "2018-11-30T09:49:51.106Z",
      "location": {
        "latitude": 40.88720911089529,
        "longitude": 81.20029479966333
      }
    },
    {
      "id": 9,
      "name": "Customer9",
      "date": "2018-11-27T09:00:41.601Z",
      "location": {
        "latitude": 41.32796101470879,
        "longitude": 81.05033647981105
      }
    },
    {
      "id": 10,
      "name": "Customer10",
      "date": "2018-11-11T20:28:26.638Z",
      "location": {
        "latitude": 41.24188347337958,
        "longitude": 80.78491273887639
      }
    },
    {
      "id": 11,
      "name": "Customer11",
      "date": "2018-11-01T09:53:30.817Z",
      "location": {
        "latitude": 41.06650204396437,
        "longitude": 81.44865053230758
      }
    },
    {
      "id": 12,
      "name": "Customer12",
      "date": "2018-11-25T07:02:12.442Z",
      "location": {
        "latitude": 41.27460401553063,
        "longitude": 80.38470398045283
      }
    },
    {
      "id": 13,
      "name": "Customer13",
      "date": "2018-11-30T11:32:30.080Z",
      "location": {
        "latitude": 41.505708636793486,
        "longitude": 81.37532646714635
      }
    },
    {
      "id": 14,
      "name": "Customer14",
      "date": "2018-11-07T16:49:11.670Z",
      "location": {
        "latitude": 41.33615719696452,
        "longitude": 80.5747901526829
      }
    },
    {
      "id": 15,
      "name": "Customer15",
      "date": "2018-11-22T08:20:47.641Z",
      "location": {
        "latitude": 41.46437928691315,
        "longitude": 80.84789995240602
      }
    },
    {
      "id": 16,
      "name": "Customer16",
      "date": "2018-11-11T05:13:56.159Z",
      "location": {
        "latitude": 41.16942369092359,
        "longitude": 80.90892992747287
      }
    },
    {
      "id": 17,
      "name": "Customer17",
      "date": "2018-11-22T19:08:00.310Z",
      "location": {
        "latitude": 41.08221760385262,
        "longitude": 81.19739044349913
      }
    },
    {
      "id": 18,
      "name": "Customer18",
      "date": "2018-11-11T17:08:04.291Z",
      "location": {
        "latitude": 41.266656670579735,
        "longitude": 80.98063158383913
      }
    },
    {
      "id": 19,
      "name": "Customer19",
      "date": "2018-11-07T15:00:31.264Z",
      "location": {
        "latitude": 41.559496565501675,
        "longitude": 80.94548475097818
      }
    },
    {
      "id": 20,
      "name": "Customer20",
      "date": "2018-11-05T18:45:17.016Z",
      "location": {
        "latitude": 41.41550493676529,
        "longitude": 81.24672230408709
      }
    },
    {
      "id": 21,
      "name": "Customer21",
      "date": "2018-11-15T19:07:47.351Z",
      "location": {
        "latitude": 41.39001874704277,
        "longitude": 80.67856753029132
      }
    },
    {
      "id": 22,
      "name": "Customer22",
      "date": "2018-11-01T08:51:56.992Z",
      "location": {
        "latitude": 41.482686276101774,
        "longitude": 81.28605811885129
      }
    },
    {
      "id": 23,
      "name": "Customer23",
      "date": "2018-11-27T21:16:42.251Z",
      "location": {
        "latitude": 40.86706654863827,
        "longitude": 81.1581879571936
      }
    },
    {
      "id": 24,
      "name": "Customer24",
      "date": "2018-11-14T06:40:31.961Z",
      "location": {
        "latitude": 41.46692843310633,
        "longitude": 80.47864327410706
      }
    },
    {
      "id": 25,
      "name": "Customer25",
      "date": "2018-11-22T04:38:23.127Z",
      "location": {
        "latitude": 41.55266224143591,
        "longitude": 80.74065110544309
      }
    },
    {
      "id": 26,
      "name": "Customer26",
      "date": "2018-11-30T15:40:57.722Z",
      "location": {
        "latitude": 41.05187612231146,
        "longitude": 81.1642972762007
      }
    },
    {
      "id": 27,
      "name": "Customer27",
      "date": "2018-11-02T21:06:12.531Z",
      "location": {
        "latitude": 41.05562398720403,
        "longitude": 80.76804990701929
      }
    },
    {
      "id": 28,
      "name": "Customer28",
      "date": "2018-11-12T06:37:10.581Z",
      "location": {
        "latitude": 41.4506277774217,
        "longitude": 80.67751145787379
      }
    },
    {
      "id": 29,
      "name": "Customer29",
      "date": "2018-11-20T13:12:45.989Z",
      "location": {
        "latitude": 41.57828483750666,
        "longitude": 81.0239268009766
      }
    },
    {
      "id": 30,
      "name": "Customer30",
      "date": "2018-11-05T13:09:09.015Z",
      "location": {
        "latitude": 41.05912634941944,
        "longitude": 81.09607865515473
      }
    },
    {
      "id": 31,
      "name": "Customer31",
      "date": "2018-12-01T07:48:46.668Z",
      "location": {
        "latitude": 41.60146689390556,
        "longitude": 81.2396856469984
      }
    },
    {
      "id": 32,
      "name": "Customer32",
      "date": "2018-11-11T01:48:34.232Z",
      "location": {
        "latitude": 40.82545059959521,
        "longitude": 81.08659841877018
      }
    },
    {
      "id": 33,
      "name": "Customer33",
      "date": "2018-11-07T06:28:49.552Z",
      "location": {
        "latitude": 41.304994767018584,
        "longitude": 80.56391596251443
      }
    },
    {
      "id": 34,
      "name": "Customer34",
      "date": "2018-11-05T16:18:20.112Z",
      "location": {
        "latitude": 41.01567822682822,
        "longitude": 81.42854680848487
      }
    },
    {
      "id": 35,
      "name": "Customer35",
      "date": "2018-11-14T05:35:49.408Z",
      "location": {
        "latitude": 41.26257579706168,
        "longitude": 81.21503620190207
      }
    },
    {
      "id": 36,
      "name": "Customer36",
      "date": "2018-11-01T08:05:06.104Z",
      "location": {
        "latitude": 41.12248188454302,
        "longitude": 80.38268843927727
      }
    },
    {
      "id": 37,
      "name": "Customer37",
      "date": "2018-11-11T17:39:58.035Z",
      "location": {
        "latitude": 41.431425991063705,
        "longitude": 80.79354376529703
      }
    },
    {
      "id": 38,
      "name": "Customer38",
      "date": "2018-11-11T09:05:52.980Z",
      "location": {
        "latitude": 41.60709844903835,
        "longitude": 80.74526003036
      }
    },
    {
      "id": 39,
      "name": "Customer39",
      "date": "2018-11-24T10:06:42.587Z",
      "location": {
        "latitude": 40.99600500971324,
        "longitude": 80.45873467306666
      }
    },
    {
      "id": 40,
      "name": "Customer40",
      "date": "2018-11-17T04:09:20.262Z",
      "location": {
        "latitude": 41.1336054724187,
        "longitude": 81.27731258845074
      }
    },
    {
      "id": 41,
      "name": "Customer41",
      "date": "2018-11-07T02:55:33.402Z",
      "location": {
        "latitude": 41.09366516086242,
        "longitude": 81.36892287779374
      }
    },
    {
      "id": 42,
      "name": "Customer42",
      "date": "2018-11-25T12:39:47.897Z",
      "location": {
        "latitude": 41.4733203366779,
        "longitude": 80.87820486287622
      }
    },
    {
      "id": 43,
      "name": "Customer43",
      "date": "2018-11-21T16:35:30.409Z",
      "location": {
        "latitude": 41.18499487936267,
        "longitude": 80.54809656697425
      }
    },
    {
      "id": 44,
      "name": "Customer44",
      "date": "2018-11-27T18:03:12.272Z",
      "location": {
        "latitude": 41.165178382698564,
        "longitude": 80.64216907324698
      }
    },
    {
      "id": 45,
      "name": "Customer45",
      "date": "2018-11-15T01:09:07.641Z",
      "location": {
        "latitude": 41.07369226840481,
        "longitude": 81.12308757187397
      }
    },
    {
      "id": 46,
      "name": "Customer46",
      "date": "2018-11-09T12:21:35.884Z",
      "location": {
        "latitude": 41.031529911321535,
        "longitude": 80.7749438998554
      }
    },
    {
      "id": 47,
      "name": "Customer47",
      "date": "2018-11-02T18:25:10.973Z",
      "location": {
        "latitude": 41.43888276961988,
        "longitude": 80.58928363996289
      }
    },
    {
      "id": 48,
      "name": "Customer48",
      "date": "2018-11-05T18:31:16.390Z",
      "location": {
        "latitude": 41.518947538556056,
        "longitude": 80.83729581240249
      }
    },
    {
      "id": 49,
      "name": "Customer49",
      "date": "2018-11-14T17:34:01.377Z",
      "location": {
        "latitude": 41.410330827632436,
        "longitude": 80.45826191688755
      }
    },
    {
      "id": 50,
      "name": "Customer50",
      "date": "2018-11-26T16:33:16.524Z",
      "location": {
        "latitude": 41.338600694325805,
        "longitude": 80.44021287957197
      }
    },
    {
      "id": 51,
      "name": "Customer51",
      "date": "2018-11-10T23:35:58.469Z",
      "location": {
        "latitude": 41.25387805618699,
        "longitude": 81.49647004208057
      }
    },
    {
      "id": 52,
      "name": "Customer52",
      "date": "2018-11-23T12:35:12.824Z",
      "location": {
        "latitude": 41.01382422682057,
        "longitude": 80.79586684119651
      }
    },
    {
      "id": 53,
      "name": "Customer53",
      "date": "2018-11-29T09:27:01.956Z",
      "location": {
        "latitude": 41.16429420263005,
        "longitude": 81.00065895415669
      }
    },
    {
      "id": 54,
      "name": "Customer54",
      "date": "2018-11-04T07:34:59.611Z",
      "location": {
        "latitude": 41.43412754089217,
        "longitude": 80.7595317887414
      }
    },
    {
      "id": 55,
      "name": "Customer55",
      "date": "2018-11-19T21:54:26.964Z",
      "location": {
        "latitude": 41.46400657289188,
        "longitude": 80.7356551049923
      }
    },
    {
      "id": 56,
      "name": "Customer56",
      "date": "2018-11-07T16:16:06.517Z",
      "location": {
        "latitude": 40.97560006408294,
        "longitude": 80.65928097615352
      }
    },
    {
      "id": 57,
      "name": "Customer57",
      "date": "2018-11-12T17:33:36.484Z",
      "location": {
        "latitude": 41.45766719401428,
        "longitude": 80.41952013475996
      }
    },
    {
      "id": 58,
      "name": "Customer58",
      "date": "2018-11-18T18:59:17.820Z",
      "location": {
        "latitude": 40.99400114356602,
        "longitude": 81.08613250919863
      }
    },
    {
      "id": 59,
      "name": "Customer59",
      "date": "2018-11-05T10:55:40.863Z",
      "location": {
        "latitude": 41.286054158306506,
        "longitude": 81.04284048609773
      }
    },
    {
      "id": 60,
      "name": "Customer60",
      "date": "2018-11-07T05:11:50.990Z",
      "location": {
        "latitude": 40.98000622058718,
        "longitude": 80.84988979785192
      }
    },
    {
      "id": 61,
      "name": "Customer61",
      "date": "2018-11-03T10:39:05.832Z",
      "location": {
        "latitude": 41.127294732323136,
        "longitude": 80.77038005871384
      }
    },
    {
      "id": 62,
      "name": "Customer62",
      "date": "2018-11-19T09:52:38.102Z",
      "location": {
        "latitude": 41.186848551857224,
        "longitude": 81.42776489906117
      }
    },
    {
      "id": 63,
      "name": "Customer63",
      "date": "2018-11-28T10:10:31.827Z",
      "location": {
        "latitude": 41.479740035518795,
        "longitude": 81.29718478516433
      }
    },
    {
      "id": 64,
      "name": "Customer64",
      "date": "2018-11-11T23:48:09.487Z",
      "location": {
        "latitude": 41.231850005875465,
        "longitude": 80.76591493554055
      }
    },
    {
      "id": 65,
      "name": "Customer65",
      "date": "2018-11-12T23:41:47.214Z",
      "location": {
        "latitude": 41.46153349096118,
        "longitude": 80.42032026378821
      }
    },
    {
      "id": 66,
      "name": "Customer66",
      "date": "2018-11-10T13:22:36.584Z",
      "location": {
        "latitude": 40.83130364057527,
        "longitude": 81.12567701043646
      }
    },
    {
      "id": 67,
      "name": "Customer67",
      "date": "2018-11-03T02:57:49.526Z",
      "location": {
        "latitude": 41.07983569787224,
        "longitude": 80.89858930594671
      }
    },
    {
      "id": 68,
      "name": "Customer68",
      "date": "2018-11-25T14:11:00.033Z",
      "location": {
        "latitude": 41.081902458045484,
        "longitude": 80.55078828803111
      }
    },
    {
      "id": 69,
      "name": "Customer69",
      "date": "2018-11-09T14:55:11.368Z",
      "location": {
        "latitude": 40.95739280545872,
        "longitude": 81.27428512961498
      }
    },
    {
      "id": 70,
      "name": "Customer70",
      "date": "2018-11-29T21:27:15.245Z",
      "location": {
        "latitude": 41.37079652876674,
        "longitude": 81.17180635041117
      }
    },
    {
      "id": 71,
      "name": "Customer71",
      "date": "2018-11-01T14:01:20.173Z",
      "location": {
        "latitude": 41.60623885509128,
        "longitude": 80.70597921063946
      }
    },
    {
      "id": 72,
      "name": "Customer72",
      "date": "2018-11-15T03:58:44.075Z",
      "location": {
        "latitude": 41.158089356683945,
        "longitude": 81.37199535459332
      }
    },
    {
      "id": 73,
      "name": "Customer73",
      "date": "2018-11-17T23:58:09.898Z",
      "location": {
        "latitude": 41.35175751850642,
        "longitude": 80.48292461393147
      }
    },
    {
      "id": 74,
      "name": "Customer74",
      "date": "2018-11-17T23:44:26.948Z",
      "location": {
        "latitude": 40.89387992947921,
        "longitude": 80.60130263320485
      }
    },
    {
      "id": 75,
      "name": "Customer75",
      "date": "2018-11-07T21:53:50.399Z",
      "location": {
        "latitude": 41.3783660007989,
        "longitude": 81.06811457582107
      }
    },
    {
      "id": 76,
      "name": "Customer76",
      "date": "2018-11-12T13:56:39.161Z",
      "location": {
        "latitude": 41.376259714960966,
        "longitude": 80.50044081028075
      }
    },
    {
      "id": 77,
      "name": "Customer77",
      "date": "2018-11-21T19:41:51.655Z",
      "location": {
        "latitude": 41.32358928454645,
        "longitude": 80.6358953457984
      }
    },
    {
      "id": 78,
      "name": "Customer78",
      "date": "2018-11-17T11:56:50.486Z",
      "location": {
        "latitude": 40.97030269036371,
        "longitude": 81.23583212924578
      }
    },
    {
      "id": 79,
      "name": "Customer79",
      "date": "2018-11-26T16:40:35.871Z",
      "location": {
        "latitude": 41.22283996588649,
        "longitude": 80.67439244325338
      }
    },
    {
      "id": 80,
      "name": "Customer80",
      "date": "2018-11-27T05:40:10.864Z",
      "location": {
        "latitude": 41.49471402857969,
        "longitude": 81.05575054379209
      }
    },
    {
      "id": 81,
      "name": "Customer81",
      "date": "2018-11-19T18:48:13.848Z",
      "location": {
        "latitude": 41.354441198512944,
        "longitude": 81.10600160217817
      }
    },
    {
      "id": 82,
      "name": "Customer82",
      "date": "2018-11-29T17:16:26.656Z",
      "location": {
        "latitude": 40.827018774265056,
        "longitude": 81.1544911784252
      }
    },
    {
      "id": 83,
      "name": "Customer83",
      "date": "2018-11-02T09:52:54.170Z",
      "location": {
        "latitude": 41.2895633376668,
        "longitude": 81.38783636541659
      }
    },
    {
      "id": 84,
      "name": "Customer84",
      "date": "2018-11-30T08:37:19.894Z",
      "location": {
        "latitude": 41.216775364709434,
        "longitude": 80.69656196565556
      }
    },
    {
      "id": 85,
      "name": "Customer85",
      "date": "2018-11-10T13:39:47.360Z",
      "location": {
        "latitude": 40.942942223159406,
        "longitude": 81.09735037795492
      }
    },
    {
      "id": 86,
      "name": "Customer86",
      "date": "2018-11-20T10:24:25.951Z",
      "location": {
        "latitude": 41.462221563050676,
        "longitude": 81.0405694425249
      }
    },
    {
      "id": 87,
      "name": "Customer87",
      "date": "2018-11-06T09:02:09.300Z",
      "location": {
        "latitude": 41.4676620398581,
        "longitude": 80.6078948150639
      }
    },
    {
      "id": 88,
      "name": "Customer88",
      "date": "2018-11-30T10:55:00.495Z",
      "location": {
        "latitude": 40.987074813580534,
        "longitude": 80.57186105867399
      }
    },
    {
      "id": 89,
      "name": "Customer89",
      "date": "2018-11-13T06:53:24.115Z",
      "location": {
        "latitude": 41.065976029547386,
        "longitude": 80.43204605224398
      }
    },
    {
      "id": 90,
      "name": "Customer90",
      "date": "2018-11-19T17:07:46.871Z",
      "location": {
        "latitude": 41.498927926929106,
        "longitude": 81.36006933243989
      }
    },
    {
      "id": 91,
      "name": "Customer91",
      "date": "2018-11-08T19:32:02.640Z",
      "location": {
        "latitude": 41.245014063170835,
        "longitude": 81.3456576590452
      }
    },
    {
      "id": 92,
      "name": "Customer92",
      "date": "2018-11-27T08:09:44.372Z",
      "location": {
        "latitude": 41.554741479891995,
        "longitude": 80.73100711080752
      }
    },
    {
      "id": 93,
      "name": "Customer93",
      "date": "2018-11-14T01:57:14.988Z",
      "location": {
        "latitude": 41.37447523600471,
        "longitude": 81.0431339894726
      }
    },
    {
      "id": 94,
      "name": "Customer94",
      "date": "2018-11-29T12:21:59.407Z",
      "location": {
        "latitude": 41.32416264779791,
        "longitude": 81.35628838321827
      }
    },
    {
      "id": 95,
      "name": "Customer95",
      "date": "2018-11-25T04:01:03.065Z",
      "location": {
        "latitude": 41.06253907697014,
        "longitude": 81.04969138813823
      }
    },
    {
      "id": 96,
      "name": "Customer96",
      "date": "2018-11-04T20:53:12.796Z",
      "location": {
        "latitude": 40.82260171869516,
        "longitude": 80.84349655596263
      }
    },
    {
      "id": 97,
      "name": "Customer97",
      "date": "2018-11-28T03:42:37.530Z",
      "location": {
        "latitude": 40.90797074646855,
        "longitude": 81.10632000704861
      }
    },
    {
      "id": 98,
      "name": "Customer98",
      "date": "2018-11-08T02:55:22.445Z",
      "location": {
        "latitude": 40.910441419818085,
        "longitude": 81.05255945675967
      }
    },
    {
      "id": 99,
      "name": "Customer99",
      "date": "2018-11-20T17:57:35.275Z",
      "location": {
        "latitude": 41.183249375885744,
        "longitude": 81.32418742764672
      }
    },
    {
      "id": 100,
      "name": "Customer100",
      "date": "2018-11-30T03:30:57.813Z",
      "location": {
        "latitude": 40.9306427448407,
        "longitude": 80.88311915691554
      }
    }
  ];

export const ordersArray = [{
    "id": 1,
    "date": "2018-11-01T20:14:18.479Z",
    "subtotal": 131,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 7
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 5
      }
    ],
    "origination": {
      "latitude": 40.987074813580534,
      "longitude": 80.57186105867399
    },
    "customer": {
      "id": 88,
      "name": "Customer88",
      "date": "2018-11-30T10:55:00.495Z",
      "location": {
        "latitude": 40.987074813580534,
        "longitude": 80.57186105867399
      }
    }
  },
  {
    "id": 2,
    "date": "2018-11-22T21:50:48.076Z",
    "subtotal": 225.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 7
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 8
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 6
      }
    ],
    "origination": {
      "latitude": 40.85245724670939,
      "longitude": 80.61361667459276
    },
    "customer": {
      "id": 3,
      "name": "Customer3",
      "date": "2018-11-12T23:03:50.317Z",
      "location": {
        "latitude": 40.85245724670939,
        "longitude": 80.61361667459276
      }
    }
  },
  {
    "id": 3,
    "date": "2018-11-16T16:33:16.582Z",
    "subtotal": 155,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 6
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 8
      }
    ],
    "origination": {
      "latitude": 40.89387992947921,
      "longitude": 80.60130263320485
    },
    "customer": {
      "id": 74,
      "name": "Customer74",
      "date": "2018-11-17T23:44:26.948Z",
      "location": {
        "latitude": 40.89387992947921,
        "longitude": 80.60130263320485
      }
    }
  },
  {
    "id": 4,
    "date": "2018-11-27T20:47:28.478Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.46437928691315,
      "longitude": 80.84789995240602
    },
    "customer": {
      "id": 15,
      "name": "Customer15",
      "date": "2018-11-22T08:20:47.641Z",
      "location": {
        "latitude": 41.46437928691315,
        "longitude": 80.84789995240602
      }
    }
  },
  {
    "id": 5,
    "date": "2018-11-22T11:13:55.710Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 40.97030269036371,
      "longitude": 81.23583212924578
    },
    "customer": {
      "id": 78,
      "name": "Customer78",
      "date": "2018-11-17T11:56:50.486Z",
      "location": {
        "latitude": 40.97030269036371,
        "longitude": 81.23583212924578
      }
    }
  },
  {
    "id": 6,
    "date": "2018-11-22T17:19:06.742Z",
    "subtotal": 94.5,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 9
    }],
    "origination": {
      "latitude": 40.910441419818085,
      "longitude": 81.05255945675967
    },
    "customer": {
      "id": 98,
      "name": "Customer98",
      "date": "2018-11-08T02:55:22.445Z",
      "location": {
        "latitude": 40.910441419818085,
        "longitude": 81.05255945675967
      }
    }
  },
  {
    "id": 7,
    "date": "2018-11-06T09:30:57.231Z",
    "subtotal": 345.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 7
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 4
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 8
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 5
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 8
      }
    ],
    "origination": {
      "latitude": 41.32416264779791,
      "longitude": 81.35628838321827
    },
    "customer": {
      "id": 94,
      "name": "Customer94",
      "date": "2018-11-29T12:21:59.407Z",
      "location": {
        "latitude": 41.32416264779791,
        "longitude": 81.35628838321827
      }
    }
  },
  {
    "id": 8,
    "date": "2018-11-03T04:25:44.632Z",
    "subtotal": 134,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 4
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 8
      }
    ],
    "origination": {
      "latitude": 41.081902458045484,
      "longitude": 80.55078828803111
    },
    "customer": {
      "id": 68,
      "name": "Customer68",
      "date": "2018-11-25T14:11:00.033Z",
      "location": {
        "latitude": 41.081902458045484,
        "longitude": 80.55078828803111
      }
    }
  },
  {
    "id": 9,
    "date": "2018-11-13T07:22:41.453Z",
    "subtotal": 172,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 3
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 7
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 6
      }
    ],
    "origination": {
      "latitude": 41.32358928454645,
      "longitude": 80.6358953457984
    },
    "customer": {
      "id": 77,
      "name": "Customer77",
      "date": "2018-11-21T19:41:51.655Z",
      "location": {
        "latitude": 41.32358928454645,
        "longitude": 80.6358953457984
      }
    }
  },
  {
    "id": 10,
    "date": "2018-11-10T22:08:16.860Z",
    "subtotal": 137.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 6
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 3
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 3
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 1
      }
    ],
    "origination": {
      "latitude": 41.57828483750666,
      "longitude": 81.0239268009766
    },
    "customer": {
      "id": 29,
      "name": "Customer29",
      "date": "2018-11-20T13:12:45.989Z",
      "location": {
        "latitude": 41.57828483750666,
        "longitude": 81.0239268009766
      }
    }
  },
  {
    "id": 11,
    "date": "2018-11-03T22:55:17.020Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.338600694325805,
      "longitude": 80.44021287957197
    },
    "customer": {
      "id": 50,
      "name": "Customer50",
      "date": "2018-11-26T16:33:16.524Z",
      "location": {
        "latitude": 41.338600694325805,
        "longitude": 80.44021287957197
      }
    }
  },
  {
    "id": 12,
    "date": "2018-11-18T06:02:23.214Z",
    "subtotal": 367.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 9
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 10
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 9
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 2
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 4
      }
    ],
    "origination": {
      "latitude": 41.05679988172085,
      "longitude": 81.33417523635951
    },
    "customer": {
      "id": 7,
      "name": "Customer7",
      "date": "2018-11-19T03:50:53.388Z",
      "location": {
        "latitude": 41.05679988172085,
        "longitude": 81.33417523635951
      }
    }
  },
  {
    "id": 13,
    "date": "2018-11-09T17:32:50.211Z",
    "subtotal": 31.5,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 3
    }],
    "origination": {
      "latitude": 41.05912634941944,
      "longitude": 81.09607865515473
    },
    "customer": {
      "id": 30,
      "name": "Customer30",
      "date": "2018-11-05T13:09:09.015Z",
      "location": {
        "latitude": 41.05912634941944,
        "longitude": 81.09607865515473
      }
    }
  },
  {
    "id": 14,
    "date": "2018-11-06T19:03:44.716Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.163113501019424,
      "longitude": 80.75480174827871
    },
    "customer": {
      "id": 2,
      "name": "Customer2",
      "date": "2018-11-26T09:17:59.983Z",
      "location": {
        "latitude": 41.163113501019424,
        "longitude": 80.75480174827871
      }
    }
  },
  {
    "id": 15,
    "date": "2018-11-21T23:31:01.551Z",
    "subtotal": 360,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 10
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 10
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 6
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 2
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 5
      }
    ],
    "origination": {
      "latitude": 41.46692843310633,
      "longitude": 80.47864327410706
    },
    "customer": {
      "id": 24,
      "name": "Customer24",
      "date": "2018-11-14T06:40:31.961Z",
      "location": {
        "latitude": 41.46692843310633,
        "longitude": 80.47864327410706
      }
    }
  },
  {
    "id": 16,
    "date": "2018-11-14T04:50:35.331Z",
    "subtotal": 199,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 9
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 3
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 7
      }
    ],
    "origination": {
      "latitude": 41.27460401553063,
      "longitude": 80.38470398045283
    },
    "customer": {
      "id": 12,
      "name": "Customer12",
      "date": "2018-11-25T07:02:12.442Z",
      "location": {
        "latitude": 41.27460401553063,
        "longitude": 80.38470398045283
      }
    }
  },
  {
    "id": 17,
    "date": "2018-11-29T15:31:32.600Z",
    "subtotal": 116.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 7
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 2
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 2
      }
    ],
    "origination": {
      "latitude": 41.127294732323136,
      "longitude": 80.77038005871384
    },
    "customer": {
      "id": 61,
      "name": "Customer61",
      "date": "2018-11-03T10:39:05.832Z",
      "location": {
        "latitude": 41.127294732323136,
        "longitude": 80.77038005871384
      }
    }
  },
  {
    "id": 18,
    "date": "2018-11-22T16:20:56.862Z",
    "subtotal": 167.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 5
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 10
      }
    ],
    "origination": {
      "latitude": 41.08221760385262,
      "longitude": 81.19739044349913
    },
    "customer": {
      "id": 17,
      "name": "Customer17",
      "date": "2018-11-22T19:08:00.310Z",
      "location": {
        "latitude": 41.08221760385262,
        "longitude": 81.19739044349913
      }
    }
  },
  {
    "id": 19,
    "date": "2018-11-03T06:11:36.835Z",
    "subtotal": 84,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 8
    }],
    "origination": {
      "latitude": 41.245014063170835,
      "longitude": 81.3456576590452
    },
    "customer": {
      "id": 91,
      "name": "Customer91",
      "date": "2018-11-08T19:32:02.640Z",
      "location": {
        "latitude": 41.245014063170835,
        "longitude": 81.3456576590452
      }
    }
  },
  {
    "id": 20,
    "date": "2018-11-22T16:37:15.853Z",
    "subtotal": 372,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 10
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 6
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 8
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 1
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 9
      }
    ],
    "origination": {
      "latitude": 41.266656670579735,
      "longitude": 80.98063158383913
    },
    "customer": {
      "id": 18,
      "name": "Customer18",
      "date": "2018-11-11T17:08:04.291Z",
      "location": {
        "latitude": 41.266656670579735,
        "longitude": 80.98063158383913
      }
    }
  },
  {
    "id": 21,
    "date": "2018-11-01T08:08:15.789Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.32796101470879,
      "longitude": 81.05033647981105
    },
    "customer": {
      "id": 9,
      "name": "Customer9",
      "date": "2018-11-27T09:00:41.601Z",
      "location": {
        "latitude": 41.32796101470879,
        "longitude": 81.05033647981105
      }
    }
  },
  {
    "id": 22,
    "date": "2018-11-11T02:16:50.748Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.05912634941944,
      "longitude": 81.09607865515473
    },
    "customer": {
      "id": 30,
      "name": "Customer30",
      "date": "2018-11-05T13:09:09.015Z",
      "location": {
        "latitude": 41.05912634941944,
        "longitude": 81.09607865515473
      }
    }
  },
  {
    "id": 23,
    "date": "2018-11-11T19:41:32.012Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.16942369092359,
      "longitude": 80.90892992747287
    },
    "customer": {
      "id": 16,
      "name": "Customer16",
      "date": "2018-11-11T05:13:56.159Z",
      "location": {
        "latitude": 41.16942369092359,
        "longitude": 80.90892992747287
      }
    }
  },
  {
    "id": 24,
    "date": "2018-11-11T22:58:11.512Z",
    "subtotal": 83.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 1
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 2
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 5
      }
    ],
    "origination": {
      "latitude": 41.431425991063705,
      "longitude": 80.79354376529703
    },
    "customer": {
      "id": 37,
      "name": "Customer37",
      "date": "2018-11-11T17:39:58.035Z",
      "location": {
        "latitude": 41.431425991063705,
        "longitude": 80.79354376529703
      }
    }
  },
  {
    "id": 25,
    "date": "2018-11-15T21:29:49.070Z",
    "subtotal": 33.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 1
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 2
      }
    ],
    "origination": {
      "latitude": 41.286054158306506,
      "longitude": 81.04284048609773
    },
    "customer": {
      "id": 59,
      "name": "Customer59",
      "date": "2018-11-05T10:55:40.863Z",
      "location": {
        "latitude": 41.286054158306506,
        "longitude": 81.04284048609773
      }
    }
  },
  {
    "id": 26,
    "date": "2018-11-18T02:46:40.741Z",
    "subtotal": 94.5,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 9
    }],
    "origination": {
      "latitude": 41.505708636793486,
      "longitude": 81.37532646714635
    },
    "customer": {
      "id": 13,
      "name": "Customer13",
      "date": "2018-11-30T11:32:30.080Z",
      "location": {
        "latitude": 41.505708636793486,
        "longitude": 81.37532646714635
      }
    }
  },
  {
    "id": 27,
    "date": "2018-11-01T16:10:15.943Z",
    "subtotal": 108,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 7
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 3
      }
    ],
    "origination": {
      "latitude": 41.505708636793486,
      "longitude": 81.37532646714635
    },
    "customer": {
      "id": 13,
      "name": "Customer13",
      "date": "2018-11-30T11:32:30.080Z",
      "location": {
        "latitude": 41.505708636793486,
        "longitude": 81.37532646714635
      }
    }
  },
  {
    "id": 28,
    "date": "2018-11-19T19:33:25.315Z",
    "subtotal": 31.5,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 3
    }],
    "origination": {
      "latitude": 40.82260171869516,
      "longitude": 80.84349655596263
    },
    "customer": {
      "id": 96,
      "name": "Customer96",
      "date": "2018-11-04T20:53:12.796Z",
      "location": {
        "latitude": 40.82260171869516,
        "longitude": 80.84349655596263
      }
    }
  },
  {
    "id": 29,
    "date": "2018-12-01T05:26:04.647Z",
    "subtotal": 10.5,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 1
    }],
    "origination": {
      "latitude": 41.1336054724187,
      "longitude": 81.27731258845074
    },
    "customer": {
      "id": 40,
      "name": "Customer40",
      "date": "2018-11-17T04:09:20.262Z",
      "location": {
        "latitude": 41.1336054724187,
        "longitude": 81.27731258845074
      }
    }
  },
  {
    "id": 30,
    "date": "2018-11-05T02:26:28.347Z",
    "subtotal": 276.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 3
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 10
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 9
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 4
      }
    ],
    "origination": {
      "latitude": 41.479740035518795,
      "longitude": 81.29718478516433
    },
    "customer": {
      "id": 63,
      "name": "Customer63",
      "date": "2018-11-28T10:10:31.827Z",
      "location": {
        "latitude": 41.479740035518795,
        "longitude": 81.29718478516433
      }
    }
  },
  {
    "id": 31,
    "date": "2018-11-04T00:12:16.011Z",
    "subtotal": 42,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 4
    }],
    "origination": {
      "latitude": 41.37079652876674,
      "longitude": 81.17180635041117
    },
    "customer": {
      "id": 70,
      "name": "Customer70",
      "date": "2018-11-29T21:27:15.245Z",
      "location": {
        "latitude": 41.37079652876674,
        "longitude": 81.17180635041117
      }
    }
  },
  {
    "id": 32,
    "date": "2018-11-13T19:56:04.872Z",
    "subtotal": 73.5,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 7
    }],
    "origination": {
      "latitude": 41.60146689390556,
      "longitude": 81.2396856469984
    },
    "customer": {
      "id": 31,
      "name": "Customer31",
      "date": "2018-12-01T07:48:46.668Z",
      "location": {
        "latitude": 41.60146689390556,
        "longitude": 81.2396856469984
      }
    }
  },
  {
    "id": 33,
    "date": "2018-11-15T15:15:30.391Z",
    "subtotal": 220.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 3
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 6
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 10
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 2
      }
    ],
    "origination": {
      "latitude": 41.41550493676529,
      "longitude": 81.24672230408709
    },
    "customer": {
      "id": 20,
      "name": "Customer20",
      "date": "2018-11-05T18:45:17.016Z",
      "location": {
        "latitude": 41.41550493676529,
        "longitude": 81.24672230408709
      }
    }
  },
  {
    "id": 34,
    "date": "2018-11-30T18:50:14.762Z",
    "subtotal": 202,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 6
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 6
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 7
      }
    ],
    "origination": {
      "latitude": 40.98000622058718,
      "longitude": 80.84988979785192
    },
    "customer": {
      "id": 60,
      "name": "Customer60",
      "date": "2018-11-07T05:11:50.990Z",
      "location": {
        "latitude": 40.98000622058718,
        "longitude": 80.84988979785192
      }
    }
  },
  {
    "id": 35,
    "date": "2018-11-23T07:04:46.267Z",
    "subtotal": 280.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 4
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 7
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 2
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 9
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 4
      }
    ],
    "origination": {
      "latitude": 40.910328502467436,
      "longitude": 80.95407242890398
    },
    "customer": {
      "id": 6,
      "name": "Customer6",
      "date": "2018-11-04T03:38:11.000Z",
      "location": {
        "latitude": 40.910328502467436,
        "longitude": 80.95407242890398
      }
    }
  },
  {
    "id": 36,
    "date": "2018-11-15T06:08:58.887Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.35175751850642,
      "longitude": 80.48292461393147
    },
    "customer": {
      "id": 73,
      "name": "Customer73",
      "date": "2018-11-17T23:58:09.898Z",
      "location": {
        "latitude": 41.35175751850642,
        "longitude": 80.48292461393147
      }
    }
  },
  {
    "id": 37,
    "date": "2018-11-15T09:13:07.788Z",
    "subtotal": 115.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 8
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 1
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 2
      }
    ],
    "origination": {
      "latitude": 41.3783660007989,
      "longitude": 81.06811457582107
    },
    "customer": {
      "id": 75,
      "name": "Customer75",
      "date": "2018-11-07T21:53:50.399Z",
      "location": {
        "latitude": 41.3783660007989,
        "longitude": 81.06811457582107
      }
    }
  },
  {
    "id": 38,
    "date": "2018-11-27T23:49:41.848Z",
    "subtotal": 145,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 7
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 1
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 5
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 1
      }
    ],
    "origination": {
      "latitude": 41.43412754089217,
      "longitude": 80.7595317887414
    },
    "customer": {
      "id": 54,
      "name": "Customer54",
      "date": "2018-11-04T07:34:59.611Z",
      "location": {
        "latitude": 41.43412754089217,
        "longitude": 80.7595317887414
      }
    }
  },
  {
    "id": 39,
    "date": "2018-11-04T18:37:57.160Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.06650204396437,
      "longitude": 81.44865053230758
    },
    "customer": {
      "id": 11,
      "name": "Customer11",
      "date": "2018-11-01T09:53:30.817Z",
      "location": {
        "latitude": 41.06650204396437,
        "longitude": 81.44865053230758
      }
    }
  },
  {
    "id": 40,
    "date": "2018-11-12T20:39:19.653Z",
    "subtotal": 309.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 5
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 6
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 5
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 3
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 9
      }
    ],
    "origination": {
      "latitude": 41.45152769398765,
      "longitude": 81.2648276287856
    },
    "customer": {
      "id": 4,
      "name": "Customer4",
      "date": "2018-11-23T13:03:55.167Z",
      "location": {
        "latitude": 41.45152769398765,
        "longitude": 81.2648276287856
      }
    }
  },
  {
    "id": 41,
    "date": "2018-11-08T19:41:37.282Z",
    "subtotal": 247,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 4
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 6
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 1
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 9
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 3
      }
    ],
    "origination": {
      "latitude": 41.304994767018584,
      "longitude": 80.56391596251443
    },
    "customer": {
      "id": 33,
      "name": "Customer33",
      "date": "2018-11-07T06:28:49.552Z",
      "location": {
        "latitude": 41.304994767018584,
        "longitude": 80.56391596251443
      }
    }
  },
  {
    "id": 42,
    "date": "2018-11-23T08:55:27.277Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.24188347337958,
      "longitude": 80.78491273887639
    },
    "customer": {
      "id": 10,
      "name": "Customer10",
      "date": "2018-11-11T20:28:26.638Z",
      "location": {
        "latitude": 41.24188347337958,
        "longitude": 80.78491273887639
      }
    }
  },
  {
    "id": 43,
    "date": "2018-11-11T22:20:24.027Z",
    "subtotal": 194,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 4
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 8
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 4
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 2
      }
    ],
    "origination": {
      "latitude": 41.4676620398581,
      "longitude": 80.6078948150639
    },
    "customer": {
      "id": 87,
      "name": "Customer87",
      "date": "2018-11-06T09:02:09.300Z",
      "location": {
        "latitude": 41.4676620398581,
        "longitude": 80.6078948150639
      }
    }
  },
  {
    "id": 44,
    "date": "2018-11-15T00:16:20.081Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.16942369092359,
      "longitude": 80.90892992747287
    },
    "customer": {
      "id": 16,
      "name": "Customer16",
      "date": "2018-11-11T05:13:56.159Z",
      "location": {
        "latitude": 41.16942369092359,
        "longitude": 80.90892992747287
      }
    }
  },
  {
    "id": 45,
    "date": "2018-11-30T17:19:59.856Z",
    "subtotal": 253.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 3
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 4
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 5
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 3
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 8
      }
    ],
    "origination": {
      "latitude": 41.46692843310633,
      "longitude": 80.47864327410706
    },
    "customer": {
      "id": 24,
      "name": "Customer24",
      "date": "2018-11-14T06:40:31.961Z",
      "location": {
        "latitude": 41.46692843310633,
        "longitude": 80.47864327410706
      }
    }
  },
  {
    "id": 46,
    "date": "2018-11-24T17:12:37.327Z",
    "subtotal": 209.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 9
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 10
      }
    ],
    "origination": {
      "latitude": 41.27460401553063,
      "longitude": 80.38470398045283
    },
    "customer": {
      "id": 12,
      "name": "Customer12",
      "date": "2018-11-25T07:02:12.442Z",
      "location": {
        "latitude": 41.27460401553063,
        "longitude": 80.38470398045283
      }
    }
  },
  {
    "id": 47,
    "date": "2018-11-18T01:31:24.725Z",
    "subtotal": 251,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 4
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 6
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 2
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 6
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 5
      }
    ],
    "origination": {
      "latitude": 41.05187612231146,
      "longitude": 81.1642972762007
    },
    "customer": {
      "id": 26,
      "name": "Customer26",
      "date": "2018-11-30T15:40:57.722Z",
      "location": {
        "latitude": 41.05187612231146,
        "longitude": 81.1642972762007
      }
    }
  },
  {
    "id": 48,
    "date": "2018-11-04T13:01:17.388Z",
    "subtotal": 318.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 10
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 9
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 7
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 4
      }
    ],
    "origination": {
      "latitude": 41.06253907697014,
      "longitude": 81.04969138813823
    },
    "customer": {
      "id": 95,
      "name": "Customer95",
      "date": "2018-11-25T04:01:03.065Z",
      "location": {
        "latitude": 41.06253907697014,
        "longitude": 81.04969138813823
      }
    }
  },
  {
    "id": 49,
    "date": "2018-11-10T14:25:21.010Z",
    "subtotal": 108.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 2
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 5
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 3
      }
    ],
    "origination": {
      "latitude": 41.06650204396437,
      "longitude": 81.44865053230758
    },
    "customer": {
      "id": 11,
      "name": "Customer11",
      "date": "2018-11-01T09:53:30.817Z",
      "location": {
        "latitude": 41.06650204396437,
        "longitude": 81.44865053230758
      }
    }
  },
  {
    "id": 50,
    "date": "2018-11-28T01:52:03.814Z",
    "subtotal": 164.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 8
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 7
      }
    ],
    "origination": {
      "latitude": 40.942942223159406,
      "longitude": 81.09735037795492
    },
    "customer": {
      "id": 85,
      "name": "Customer85",
      "date": "2018-11-10T13:39:47.360Z",
      "location": {
        "latitude": 40.942942223159406,
        "longitude": 81.09735037795492
      }
    }
  },
  {
    "id": 51,
    "date": "2018-11-19T11:55:22.623Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.231850005875465,
      "longitude": 80.76591493554055
    },
    "customer": {
      "id": 64,
      "name": "Customer64",
      "date": "2018-11-11T23:48:09.487Z",
      "location": {
        "latitude": 41.231850005875465,
        "longitude": 80.76591493554055
      }
    }
  },
  {
    "id": 52,
    "date": "2018-11-05T13:24:25.418Z",
    "subtotal": 257.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 9
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 2
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 7
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 7
      }
    ],
    "origination": {
      "latitude": 41.07983569787224,
      "longitude": 80.89858930594671
    },
    "customer": {
      "id": 67,
      "name": "Customer67",
      "date": "2018-11-03T02:57:49.526Z",
      "location": {
        "latitude": 41.07983569787224,
        "longitude": 80.89858930594671
      }
    }
  },
  {
    "id": 53,
    "date": "2018-11-12T09:26:54.599Z",
    "subtotal": 113,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 2
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 8
      }
    ],
    "origination": {
      "latitude": 41.127294732323136,
      "longitude": 80.77038005871384
    },
    "customer": {
      "id": 61,
      "name": "Customer61",
      "date": "2018-11-03T10:39:05.832Z",
      "location": {
        "latitude": 41.127294732323136,
        "longitude": 80.77038005871384
      }
    }
  },
  {
    "id": 54,
    "date": "2018-11-03T10:50:47.211Z",
    "subtotal": 10.5,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 1
    }],
    "origination": {
      "latitude": 40.89789860972749,
      "longitude": 81.30970674979748
    },
    "customer": {
      "id": 5,
      "name": "Customer5",
      "date": "2018-11-07T00:55:19.548Z",
      "location": {
        "latitude": 40.89789860972749,
        "longitude": 81.30970674979748
      }
    }
  },
  {
    "id": 55,
    "date": "2018-11-02T13:55:24.750Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.16942369092359,
      "longitude": 80.90892992747287
    },
    "customer": {
      "id": 16,
      "name": "Customer16",
      "date": "2018-11-11T05:13:56.159Z",
      "location": {
        "latitude": 41.16942369092359,
        "longitude": 80.90892992747287
      }
    }
  },
  {
    "id": 56,
    "date": "2018-11-18T08:37:29.739Z",
    "subtotal": 215.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 4
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 9
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 7
      }
    ],
    "origination": {
      "latitude": 41.39001874704277,
      "longitude": 80.67856753029132
    },
    "customer": {
      "id": 21,
      "name": "Customer21",
      "date": "2018-11-15T19:07:47.351Z",
      "location": {
        "latitude": 41.39001874704277,
        "longitude": 80.67856753029132
      }
    }
  },
  {
    "id": 57,
    "date": "2018-11-12T07:05:46.985Z",
    "subtotal": 31.5,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 3
    }],
    "origination": {
      "latitude": 41.462221563050676,
      "longitude": 81.0405694425249
    },
    "customer": {
      "id": 86,
      "name": "Customer86",
      "date": "2018-11-20T10:24:25.951Z",
      "location": {
        "latitude": 41.462221563050676,
        "longitude": 81.0405694425249
      }
    }
  },
  {
    "id": 58,
    "date": "2018-11-25T03:19:38.965Z",
    "subtotal": 267.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 4
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 9
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 2
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 3
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 6
      }
    ],
    "origination": {
      "latitude": 41.07983569787224,
      "longitude": 80.89858930594671
    },
    "customer": {
      "id": 67,
      "name": "Customer67",
      "date": "2018-11-03T02:57:49.526Z",
      "location": {
        "latitude": 41.07983569787224,
        "longitude": 80.89858930594671
      }
    }
  },
  {
    "id": 59,
    "date": "2018-11-10T03:45:57.558Z",
    "subtotal": 63,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 6
    }],
    "origination": {
      "latitude": 40.97030269036371,
      "longitude": 81.23583212924578
    },
    "customer": {
      "id": 78,
      "name": "Customer78",
      "date": "2018-11-17T11:56:50.486Z",
      "location": {
        "latitude": 40.97030269036371,
        "longitude": 81.23583212924578
      }
    }
  },
  {
    "id": 60,
    "date": "2018-11-07T07:23:49.809Z",
    "subtotal": 259.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 7
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 4
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 8
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 6
      }
    ],
    "origination": {
      "latitude": 41.4733203366779,
      "longitude": 80.87820486287622
    },
    "customer": {
      "id": 42,
      "name": "Customer42",
      "date": "2018-11-25T12:39:47.897Z",
      "location": {
        "latitude": 41.4733203366779,
        "longitude": 80.87820486287622
      }
    }
  },
  {
    "id": 61,
    "date": "2018-11-05T18:07:04.413Z",
    "subtotal": 244,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 2
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 6
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 6
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 1
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 7
      }
    ],
    "origination": {
      "latitude": 41.498927926929106,
      "longitude": 81.36006933243989
    },
    "customer": {
      "id": 90,
      "name": "Customer90",
      "date": "2018-11-19T17:07:46.871Z",
      "location": {
        "latitude": 41.498927926929106,
        "longitude": 81.36006933243989
      }
    }
  },
  {
    "id": 62,
    "date": "2018-11-23T18:23:34.441Z",
    "subtotal": 21,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 2
    }],
    "origination": {
      "latitude": 41.304994767018584,
      "longitude": 80.56391596251443
    },
    "customer": {
      "id": 33,
      "name": "Customer33",
      "date": "2018-11-07T06:28:49.552Z",
      "location": {
        "latitude": 41.304994767018584,
        "longitude": 80.56391596251443
      }
    }
  },
  {
    "id": 63,
    "date": "2018-11-08T10:47:34.299Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.1336054724187,
      "longitude": 81.27731258845074
    },
    "customer": {
      "id": 40,
      "name": "Customer40",
      "date": "2018-11-17T04:09:20.262Z",
      "location": {
        "latitude": 41.1336054724187,
        "longitude": 81.27731258845074
      }
    }
  },
  {
    "id": 64,
    "date": "2018-11-29T20:03:58.831Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.3783660007989,
      "longitude": 81.06811457582107
    },
    "customer": {
      "id": 75,
      "name": "Customer75",
      "date": "2018-11-07T21:53:50.399Z",
      "location": {
        "latitude": 41.3783660007989,
        "longitude": 81.06811457582107
      }
    }
  },
  {
    "id": 65,
    "date": "2018-11-07T02:46:45.535Z",
    "subtotal": 52.5,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 5
    }],
    "origination": {
      "latitude": 40.9306427448407,
      "longitude": 80.88311915691554
    },
    "customer": {
      "id": 100,
      "name": "Customer100",
      "date": "2018-11-30T03:30:57.813Z",
      "location": {
        "latitude": 40.9306427448407,
        "longitude": 80.88311915691554
      }
    }
  },
  {
    "id": 66,
    "date": "2018-11-16T21:44:30.568Z",
    "subtotal": 210.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 9
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 4
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 7
      }
    ],
    "origination": {
      "latitude": 41.07369226840481,
      "longitude": 81.12308757187397
    },
    "customer": {
      "id": 45,
      "name": "Customer45",
      "date": "2018-11-15T01:09:07.641Z",
      "location": {
        "latitude": 41.07369226840481,
        "longitude": 81.12308757187397
      }
    }
  },
  {
    "id": 67,
    "date": "2018-11-10T17:43:54.877Z",
    "subtotal": 73.5,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 7
    }],
    "origination": {
      "latitude": 40.88720911089529,
      "longitude": 81.20029479966333
    },
    "customer": {
      "id": 8,
      "name": "Customer8",
      "date": "2018-11-30T09:49:51.106Z",
      "location": {
        "latitude": 40.88720911089529,
        "longitude": 81.20029479966333
      }
    }
  },
  {
    "id": 68,
    "date": "2018-11-10T17:58:09.936Z",
    "subtotal": 177,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 7
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 9
      }
    ],
    "origination": {
      "latitude": 40.816279864797565,
      "longitude": 80.84023411039927
    },
    "customer": {
      "id": 1,
      "name": "Customer1",
      "date": "2018-11-13T00:16:40.256Z",
      "location": {
        "latitude": 40.816279864797565,
        "longitude": 80.84023411039927
      }
    }
  },
  {
    "id": 69,
    "date": "2018-11-15T04:07:42.372Z",
    "subtotal": 107,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 8
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 2
      }
    ],
    "origination": {
      "latitude": 41.45152769398765,
      "longitude": 81.2648276287856
    },
    "customer": {
      "id": 4,
      "name": "Customer4",
      "date": "2018-11-23T13:03:55.167Z",
      "location": {
        "latitude": 41.45152769398765,
        "longitude": 81.2648276287856
      }
    }
  },
  {
    "id": 70,
    "date": "2018-11-28T15:33:07.236Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 40.827018774265056,
      "longitude": 81.1544911784252
    },
    "customer": {
      "id": 82,
      "name": "Customer82",
      "date": "2018-11-29T17:16:26.656Z",
      "location": {
        "latitude": 40.827018774265056,
        "longitude": 81.1544911784252
      }
    }
  },
  {
    "id": 71,
    "date": "2018-11-15T00:42:41.797Z",
    "subtotal": 90,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 2
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 6
      }
    ],
    "origination": {
      "latitude": 41.01567822682822,
      "longitude": 81.42854680848487
    },
    "customer": {
      "id": 34,
      "name": "Customer34",
      "date": "2018-11-05T16:18:20.112Z",
      "location": {
        "latitude": 41.01567822682822,
        "longitude": 81.42854680848487
      }
    }
  },
  {
    "id": 72,
    "date": "2018-11-06T23:42:28.514Z",
    "subtotal": 73.5,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 7
    }],
    "origination": {
      "latitude": 41.43412754089217,
      "longitude": 80.7595317887414
    },
    "customer": {
      "id": 54,
      "name": "Customer54",
      "date": "2018-11-04T07:34:59.611Z",
      "location": {
        "latitude": 41.43412754089217,
        "longitude": 80.7595317887414
      }
    }
  },
  {
    "id": 73,
    "date": "2018-11-14T12:51:05.105Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.09366516086242,
      "longitude": 81.36892287779374
    },
    "customer": {
      "id": 41,
      "name": "Customer41",
      "date": "2018-11-07T02:55:33.402Z",
      "location": {
        "latitude": 41.09366516086242,
        "longitude": 81.36892287779374
      }
    }
  },
  {
    "id": 74,
    "date": "2018-11-10T16:33:29.841Z",
    "subtotal": 180,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 8
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 4
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 5
      }
    ],
    "origination": {
      "latitude": 41.01382422682057,
      "longitude": 80.79586684119651
    },
    "customer": {
      "id": 52,
      "name": "Customer52",
      "date": "2018-11-23T12:35:12.824Z",
      "location": {
        "latitude": 41.01382422682057,
        "longitude": 80.79586684119651
      }
    }
  },
  {
    "id": 75,
    "date": "2018-11-22T14:46:43.940Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.4676620398581,
      "longitude": 80.6078948150639
    },
    "customer": {
      "id": 87,
      "name": "Customer87",
      "date": "2018-11-06T09:02:09.300Z",
      "location": {
        "latitude": 41.4676620398581,
        "longitude": 80.6078948150639
      }
    }
  },
  {
    "id": 76,
    "date": "2018-11-25T15:12:50.406Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.554741479891995,
      "longitude": 80.73100711080752
    },
    "customer": {
      "id": 92,
      "name": "Customer92",
      "date": "2018-11-27T08:09:44.372Z",
      "location": {
        "latitude": 41.554741479891995,
        "longitude": 80.73100711080752
      }
    }
  },
  {
    "id": 77,
    "date": "2018-11-25T08:31:04.601Z",
    "subtotal": 116,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 3
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 3
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 5
      }
    ],
    "origination": {
      "latitude": 40.827018774265056,
      "longitude": 81.1544911784252
    },
    "customer": {
      "id": 82,
      "name": "Customer82",
      "date": "2018-11-29T17:16:26.656Z",
      "location": {
        "latitude": 40.827018774265056,
        "longitude": 81.1544911784252
      }
    }
  },
  {
    "id": 78,
    "date": "2018-11-28T12:27:53.907Z",
    "subtotal": 243.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 9
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 6
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 8
      }
    ],
    "origination": {
      "latitude": 41.031529911321535,
      "longitude": 80.7749438998554
    },
    "customer": {
      "id": 46,
      "name": "Customer46",
      "date": "2018-11-09T12:21:35.884Z",
      "location": {
        "latitude": 41.031529911321535,
        "longitude": 80.7749438998554
      }
    }
  },
  {
    "id": 79,
    "date": "2018-11-25T08:59:10.327Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.26257579706168,
      "longitude": 81.21503620190207
    },
    "customer": {
      "id": 35,
      "name": "Customer35",
      "date": "2018-11-14T05:35:49.408Z",
      "location": {
        "latitude": 41.26257579706168,
        "longitude": 81.21503620190207
      }
    }
  },
  {
    "id": 80,
    "date": "2018-11-08T20:17:42.891Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.518947538556056,
      "longitude": 80.83729581240249
    },
    "customer": {
      "id": 48,
      "name": "Customer48",
      "date": "2018-11-05T18:31:16.390Z",
      "location": {
        "latitude": 41.518947538556056,
        "longitude": 80.83729581240249
      }
    }
  },
  {
    "id": 81,
    "date": "2018-11-10T16:19:48.945Z",
    "subtotal": 266.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 10
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 1
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 10
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 5
      }
    ],
    "origination": {
      "latitude": 40.99400114356602,
      "longitude": 81.08613250919863
    },
    "customer": {
      "id": 58,
      "name": "Customer58",
      "date": "2018-11-18T18:59:17.820Z",
      "location": {
        "latitude": 40.99400114356602,
        "longitude": 81.08613250919863
      }
    }
  },
  {
    "id": 82,
    "date": "2018-11-04T05:32:52.229Z",
    "subtotal": 177,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 7
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 9
      }
    ],
    "origination": {
      "latitude": 41.07983569787224,
      "longitude": 80.89858930594671
    },
    "customer": {
      "id": 67,
      "name": "Customer67",
      "date": "2018-11-03T02:57:49.526Z",
      "location": {
        "latitude": 41.07983569787224,
        "longitude": 80.89858930594671
      }
    }
  },
  {
    "id": 83,
    "date": "2018-11-24T05:23:20.701Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.266656670579735,
      "longitude": 80.98063158383913
    },
    "customer": {
      "id": 18,
      "name": "Customer18",
      "date": "2018-11-11T17:08:04.291Z",
      "location": {
        "latitude": 41.266656670579735,
        "longitude": 80.98063158383913
      }
    }
  },
  {
    "id": 84,
    "date": "2018-11-28T21:41:52.985Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.05562398720403,
      "longitude": 80.76804990701929
    },
    "customer": {
      "id": 27,
      "name": "Customer27",
      "date": "2018-11-02T21:06:12.531Z",
      "location": {
        "latitude": 41.05562398720403,
        "longitude": 80.76804990701929
      }
    }
  },
  {
    "id": 85,
    "date": "2018-11-25T22:28:44.810Z",
    "subtotal": 174,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 5
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 1
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 10
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 1
      }
    ],
    "origination": {
      "latitude": 41.127294732323136,
      "longitude": 80.77038005871384
    },
    "customer": {
      "id": 61,
      "name": "Customer61",
      "date": "2018-11-03T10:39:05.832Z",
      "location": {
        "latitude": 41.127294732323136,
        "longitude": 80.77038005871384
      }
    }
  },
  {
    "id": 86,
    "date": "2018-11-07T07:08:43.370Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.482686276101774,
      "longitude": 81.28605811885129
    },
    "customer": {
      "id": 22,
      "name": "Customer22",
      "date": "2018-11-01T08:51:56.992Z",
      "location": {
        "latitude": 41.482686276101774,
        "longitude": 81.28605811885129
      }
    }
  },
  {
    "id": 87,
    "date": "2018-11-12T01:37:23.653Z",
    "subtotal": 105,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 10
    }],
    "origination": {
      "latitude": 41.60146689390556,
      "longitude": 81.2396856469984
    },
    "customer": {
      "id": 31,
      "name": "Customer31",
      "date": "2018-12-01T07:48:46.668Z",
      "location": {
        "latitude": 41.60146689390556,
        "longitude": 81.2396856469984
      }
    }
  },
  {
    "id": 88,
    "date": "2018-11-27T18:37:54.654Z",
    "subtotal": 94.5,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 9
    }],
    "origination": {
      "latitude": 41.05912634941944,
      "longitude": 81.09607865515473
    },
    "customer": {
      "id": 30,
      "name": "Customer30",
      "date": "2018-11-05T13:09:09.015Z",
      "location": {
        "latitude": 41.05912634941944,
        "longitude": 81.09607865515473
      }
    }
  },
  {
    "id": 89,
    "date": "2018-11-08T06:03:55.444Z",
    "subtotal": 54,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 2
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 2
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 1
      }
    ],
    "origination": {
      "latitude": 40.99400114356602,
      "longitude": 81.08613250919863
    },
    "customer": {
      "id": 58,
      "name": "Customer58",
      "date": "2018-11-18T18:59:17.820Z",
      "location": {
        "latitude": 40.99400114356602,
        "longitude": 81.08613250919863
      }
    }
  },
  {
    "id": 90,
    "date": "2018-11-20T19:04:14.377Z",
    "subtotal": 84,
    "cart": [{
      "id": 1,
      "name": "Harar Highlands",
      "roast": "Dark",
      "origin": "ethiopia",
      "price": 10.5,
      "qty": 8
    }],
    "origination": {
      "latitude": 41.081902458045484,
      "longitude": 80.55078828803111
    },
    "customer": {
      "id": 68,
      "name": "Customer68",
      "date": "2018-11-25T14:11:00.033Z",
      "location": {
        "latitude": 41.081902458045484,
        "longitude": 80.55078828803111
      }
    }
  },
  {
    "id": 91,
    "date": "2018-11-19T22:40:38.498Z",
    "subtotal": 199,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 8
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 10
      }
    ],
    "origination": {
      "latitude": 40.86706654863827,
      "longitude": 81.1581879571936
    },
    "customer": {
      "id": 23,
      "name": "Customer23",
      "date": "2018-11-27T21:16:42.251Z",
      "location": {
        "latitude": 40.86706654863827,
        "longitude": 81.1581879571936
      }
    }
  },
  {
    "id": 92,
    "date": "2018-11-08T03:12:01.609Z",
    "subtotal": 96.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 4
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 3
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 2
      }
    ],
    "origination": {
      "latitude": 41.163113501019424,
      "longitude": 80.75480174827871
    },
    "customer": {
      "id": 2,
      "name": "Customer2",
      "date": "2018-11-26T09:17:59.983Z",
      "location": {
        "latitude": 41.163113501019424,
        "longitude": 80.75480174827871
      }
    }
  },
  {
    "id": 93,
    "date": "2018-11-05T13:27:27.263Z",
    "subtotal": 229.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 10
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 3
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 2
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 7
      }
    ],
    "origination": {
      "latitude": 41.505708636793486,
      "longitude": 81.37532646714635
    },
    "customer": {
      "id": 13,
      "name": "Customer13",
      "date": "2018-11-30T11:32:30.080Z",
      "location": {
        "latitude": 41.505708636793486,
        "longitude": 81.37532646714635
      }
    }
  },
  {
    "id": 94,
    "date": "2018-11-19T14:13:12.442Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 40.97560006408294,
      "longitude": 80.65928097615352
    },
    "customer": {
      "id": 56,
      "name": "Customer56",
      "date": "2018-11-07T16:16:06.517Z",
      "location": {
        "latitude": 40.97560006408294,
        "longitude": 80.65928097615352
      }
    }
  },
  {
    "id": 95,
    "date": "2018-11-04T04:13:43.439Z",
    "subtotal": 391,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 10
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 4
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 10
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 2
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 10
      }
    ],
    "origination": {
      "latitude": 41.46400657289188,
      "longitude": 80.7356551049923
    },
    "customer": {
      "id": 55,
      "name": "Customer55",
      "date": "2018-11-19T21:54:26.964Z",
      "location": {
        "latitude": 41.46400657289188,
        "longitude": 80.7356551049923
      }
    }
  },
  {
    "id": 96,
    "date": "2018-11-03T23:06:31.044Z",
    "subtotal": 53.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 4
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 1
      }
    ],
    "origination": {
      "latitude": 41.45766719401428,
      "longitude": 80.41952013475996
    },
    "customer": {
      "id": 57,
      "name": "Customer57",
      "date": "2018-11-12T17:33:36.484Z",
      "location": {
        "latitude": 41.45766719401428,
        "longitude": 80.41952013475996
      }
    }
  },
  {
    "id": 97,
    "date": "2018-11-06T12:27:12.159Z",
    "subtotal": 186,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 2
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 10
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 5
      }
    ],
    "origination": {
      "latitude": 41.27460401553063,
      "longitude": 80.38470398045283
    },
    "customer": {
      "id": 12,
      "name": "Customer12",
      "date": "2018-11-25T07:02:12.442Z",
      "location": {
        "latitude": 41.27460401553063,
        "longitude": 80.38470398045283
      }
    }
  },
  {
    "id": 98,
    "date": "2018-11-11T06:30:45.997Z",
    "subtotal": 329,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 4
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 10
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 9
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 7
      },
      {
        "id": 5,
        "name": "Nairobi Explorer",
        "roast": "light",
        "type": "kenya",
        "price": 12,
        "qty": 1
      }
    ],
    "origination": {
      "latitude": 41.27460401553063,
      "longitude": 80.38470398045283
    },
    "customer": {
      "id": 12,
      "name": "Customer12",
      "date": "2018-11-25T07:02:12.442Z",
      "location": {
        "latitude": 41.27460401553063,
        "longitude": 80.38470398045283
      }
    }
  },
  {
    "id": 99,
    "date": "2018-11-06T18:39:08.028Z",
    "subtotal": 293.5,
    "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 6
      },
      {
        "id": 2,
        "name": "Kopi Tubruk",
        "roast": "Dark",
        "type": "sumatra",
        "price": 11.5,
        "qty": 7
      },
      {
        "id": 3,
        "name": "Cinnamon Roast",
        "roast": "light",
        "type": "peru",
        "price": 10,
        "qty": 9
      },
      {
        "id": 4,
        "name": "Morning Cup",
        "roast": "medium",
        "type": "columbia",
        "price": 10,
        "qty": 6
      }
    ],
    "origination": {
      "latitude": 41.183249375885744,
      "longitude": 81.32418742764672
    },
    "customer": {
      "id": 99,
      "name": "Customer99",
      "date": "2018-11-20T17:57:35.275Z",
      "location": {
        "latitude": 41.183249375885744,
        "longitude": 81.32418742764672
      }
    }
  },
  {
    "id": 100,
    "date": "2018-11-02T22:59:44.347Z",
    "subtotal": 0,
    "cart": [],
    "origination": {
      "latitude": 41.06650204396437,
      "longitude": 81.44865053230758
    },
    "customer": {
      "id": 11,
      "name": "Customer11",
      "date": "2018-11-01T09:53:30.817Z",
      "location": {
        "latitude": 41.06650204396437,
        "longitude": 81.44865053230758
      }
    }
  }
];

export const trafficArray = [{
    "id": 1,
    "date": "2018-11-25T10:48:36.651Z",
    "location": {
      "latitude": 41.26426747188511,
      "longitude": 80.65774637884769
    },
    "order": null
  },
  {
    "id": 2,
    "date": "2018-11-25T08:02:46.265Z",
    "location": {
      "latitude": 41.08790282841222,
      "longitude": 81.43136191085512
    },
    "order": null
  },
  {
    "id": 3,
    "date": "2018-11-05T09:37:09.535Z",
    "location": {
      "latitude": 41.09123917539389,
      "longitude": 81.45101068184054
    },
    "order": null
  },
  {
    "id": 4,
    "date": "2018-11-18T17:59:16.438Z",
    "location": {
      "latitude": 41.38841520060204,
      "longitude": 80.6758780778837
    },
    "order": null
  },
  {
    "id": 5,
    "date": "2018-11-23T08:15:50.204Z",
    "location": {
      "latitude": 41.358692723317,
      "longitude": 80.58488274637165
    },
    "order": null
  },
  {
    "id": 6,
    "date": "2018-11-02T21:21:12.465Z",
    "location": {
      "latitude": 41.13812601593208,
      "longitude": 80.50839176085698
    },
    "order": null
  },
  {
    "id": 7,
    "date": "2018-11-26T04:46:59.528Z",
    "location": {
      "latitude": 41.3545096466278,
      "longitude": 80.67282248866432
    },
    "order": null
  },
  {
    "id": 8,
    "date": "2018-11-16T15:59:08.346Z",
    "location": {
      "latitude": 40.89692904704815,
      "longitude": 80.93725112503284
    },
    "order": null
  },
  {
    "id": 9,
    "date": "2018-11-26T19:41:17.129Z",
    "location": {
      "latitude": 41.23594527345798,
      "longitude": 81.34015393606177
    },
    "order": null
  },
  {
    "id": 10,
    "date": "2018-11-11T01:20:18.216Z",
    "location": {
      "latitude": 40.96952279617893,
      "longitude": 80.9372127020487
    },
    "order": null
  },
  {
    "id": 11,
    "date": "2018-11-10T10:23:10.561Z",
    "location": {
      "latitude": 41.410413650789415,
      "longitude": 81.0209681870324
    },
    "order": null
  },
  {
    "id": 12,
    "date": "2018-11-11T13:47:26.331Z",
    "location": {
      "latitude": 41.37634959716851,
      "longitude": 80.91947816806272
    },
    "order": null
  },
  {
    "id": 13,
    "date": "2018-11-03T02:19:35.908Z",
    "location": {
      "latitude": 41.096497399695046,
      "longitude": 81.45349354947895
    },
    "order": null
  },
  {
    "id": 14,
    "date": "2018-11-22T17:01:18.820Z",
    "location": {
      "latitude": 40.9763310223175,
      "longitude": 80.80558739017283
    },
    "order": null
  },
  {
    "id": 15,
    "date": "2018-11-19T02:23:41.892Z",
    "location": {
      "latitude": 41.17663741554847,
      "longitude": 81.1885025738988
    },
    "order": null
  },
  {
    "id": 16,
    "date": "2018-11-24T04:50:33.727Z",
    "location": {
      "latitude": 41.35117724071118,
      "longitude": 80.36747166909704
    },
    "order": null
  },
  {
    "id": 17,
    "date": "2018-11-18T14:26:39.799Z",
    "location": {
      "latitude": 40.869556364109,
      "longitude": 80.6581653785528
    },
    "order": null
  },
  {
    "id": 18,
    "date": "2018-11-15T17:58:55.789Z",
    "location": {
      "latitude": 41.54404474930697,
      "longitude": 80.8980694955396
    },
    "order": null
  },
  {
    "id": 19,
    "date": "2018-11-05T16:42:32.845Z",
    "location": {
      "latitude": 41.50450536384266,
      "longitude": 81.26733606116703
    },
    "order": null
  },
  {
    "id": 20,
    "date": "2018-11-13T11:05:00.117Z",
    "location": {
      "latitude": 40.90502449109977,
      "longitude": 80.81066790633231
    },
    "order": null
  },
  {
    "id": 21,
    "date": "2018-11-26T00:37:27.897Z",
    "location": {
      "latitude": 41.486302356076834,
      "longitude": 80.99052173023225
    },
    "order": null
  },
  {
    "id": 22,
    "date": "2018-11-28T17:20:02.386Z",
    "location": {
      "latitude": 41.27864471223789,
      "longitude": 81.09381128356088
    },
    "order": null
  },
  {
    "id": 23,
    "date": "2018-11-16T08:21:28.426Z",
    "location": {
      "latitude": 40.878374597324054,
      "longitude": 80.5687404696558
    },
    "order": null
  },
  {
    "id": 24,
    "date": "2018-11-14T08:08:37.288Z",
    "location": {
      "latitude": 41.30126210651243,
      "longitude": 81.02572765548517
    },
    "order": null
  },
  {
    "id": 25,
    "date": "2018-11-20T11:31:45.801Z",
    "location": {
      "latitude": 41.25918372963508,
      "longitude": 80.46940978660564
    },
    "order": null
  },
  {
    "id": 26,
    "date": "2018-11-25T16:35:15.117Z",
    "location": {
      "latitude": 40.83109281151731,
      "longitude": 80.72547444838482
    },
    "order": null
  },
  {
    "id": 27,
    "date": "2018-11-03T02:44:19.892Z",
    "location": {
      "latitude": 41.07470903443213,
      "longitude": 81.21794341246773
    },
    "order": null
  },
  {
    "id": 28,
    "date": "2018-11-02T15:59:31.301Z",
    "location": {
      "latitude": 41.63333702059849,
      "longitude": 80.88180387476417
    },
    "order": null
  },
  {
    "id": 29,
    "date": "2018-11-26T09:04:15.846Z",
    "location": {
      "latitude": 41.434241992784,
      "longitude": 80.50992556752313
    },
    "order": null
  },
  {
    "id": 30,
    "date": "2018-11-21T00:26:28.686Z",
    "location": {
      "latitude": 40.83188436938334,
      "longitude": 80.80147745456871
    },
    "order": null
  },
  {
    "id": 31,
    "date": "2018-11-29T14:23:02.027Z",
    "location": {
      "latitude": 41.04776444862551,
      "longitude": 80.65591459441721
    },
    "order": null
  },
  {
    "id": 32,
    "date": "2018-11-09T19:25:48.404Z",
    "location": {
      "latitude": 41.0727057145325,
      "longitude": 81.06190317495948
    },
    "order": null
  },
  {
    "id": 33,
    "date": "2018-11-07T02:57:13.244Z",
    "location": {
      "latitude": 41.36427494729825,
      "longitude": 80.6235922766522
    },
    "order": null
  },
  {
    "id": 34,
    "date": "2018-11-11T17:51:40.808Z",
    "location": {
      "latitude": 41.159280517614285,
      "longitude": 81.3749122690128
    },
    "order": null
  },
  {
    "id": 35,
    "date": "2018-11-17T03:58:07.858Z",
    "location": {
      "latitude": 40.91608657765975,
      "longitude": 80.65293770351346
    },
    "order": null
  },
  {
    "id": 36,
    "date": "2018-11-29T20:38:07.750Z",
    "location": {
      "latitude": 41.391263138104144,
      "longitude": 80.36847979522544
    },
    "order": null
  },
  {
    "id": 37,
    "date": "2018-11-25T21:11:47.534Z",
    "location": {
      "latitude": 41.23427032714468,
      "longitude": 80.85581710189
    },
    "order": null
  },
  {
    "id": 38,
    "date": "2018-11-25T20:28:37.356Z",
    "location": {
      "latitude": 41.3293450839962,
      "longitude": 80.8193965183428
    },
    "order": null
  },
  {
    "id": 39,
    "date": "2018-11-26T12:13:17.530Z",
    "location": {
      "latitude": 41.291870049281435,
      "longitude": 80.8492104430598
    },
    "order": null
  },
  {
    "id": 40,
    "date": "2018-11-24T12:08:14.595Z",
    "location": {
      "latitude": 41.4389911084009,
      "longitude": 81.08274158820157
    },
    "order": null
  },
  {
    "id": 41,
    "date": "2018-11-22T20:48:14.538Z",
    "location": {
      "latitude": 41.235046695480825,
      "longitude": 81.1323728069107
    },
    "order": null
  },
  {
    "id": 42,
    "date": "2018-11-28T01:20:44.429Z",
    "location": {
      "latitude": 41.56454989751135,
      "longitude": 80.8661108594308
    },
    "order": null
  },
  {
    "id": 43,
    "date": "2018-11-14T05:51:57.591Z",
    "location": {
      "latitude": 41.10384055089676,
      "longitude": 80.71760296873894
    },
    "order": null
  },
  {
    "id": 44,
    "date": "2018-11-20T20:57:24.107Z",
    "location": {
      "latitude": 41.6153263336213,
      "longitude": 80.69389269434159
    },
    "order": null
  },
  {
    "id": 45,
    "date": "2018-11-18T21:26:50.030Z",
    "location": {
      "latitude": 41.57200262182569,
      "longitude": 80.55521691744192
    },
    "order": null
  },
  {
    "id": 46,
    "date": "2018-11-29T10:12:46.580Z",
    "location": {
      "latitude": 41.172376383070755,
      "longitude": 81.43634967203778
    },
    "order": null
  },
  {
    "id": 47,
    "date": "2018-11-01T10:30:47.385Z",
    "location": {
      "latitude": 41.03371059394776,
      "longitude": 81.0978010871033
    },
    "order": null
  },
  {
    "id": 48,
    "date": "2018-11-18T20:43:25.980Z",
    "location": {
      "latitude": 41.37412846513518,
      "longitude": 81.29701117786531
    },
    "order": null
  },
  {
    "id": 49,
    "date": "2018-11-24T10:41:12.059Z",
    "location": {
      "latitude": 41.01141934116135,
      "longitude": 81.24765564717926
    },
    "order": null
  },
  {
    "id": 50,
    "date": "2018-11-18T13:23:26.332Z",
    "location": {
      "latitude": 40.93043804381337,
      "longitude": 81.21763409216494
    },
    "order": null
  },
  {
    "id": 51,
    "date": "2018-11-05T08:41:15.123Z",
    "location": {
      "latitude": 40.912669143572465,
      "longitude": 81.29398912138141
    },
    "order": null
  },
  {
    "id": 52,
    "date": "2018-11-13T19:52:57.200Z",
    "location": {
      "latitude": 41.02976056339885,
      "longitude": 81.42137760369997
    },
    "order": null
  },
  {
    "id": 53,
    "date": "2018-11-13T23:38:43.996Z",
    "location": {
      "latitude": 41.41343462363438,
      "longitude": 80.8999281839319
    },
    "order": null
  },
  {
    "id": 54,
    "date": "2018-11-12T23:50:13.628Z",
    "location": {
      "latitude": 41.01762493992341,
      "longitude": 80.8169408540475
    },
    "order": null
  },
  {
    "id": 55,
    "date": "2018-11-11T01:45:35.783Z",
    "location": {
      "latitude": 41.44484564418006,
      "longitude": 80.54700592976424
    },
    "order": null
  },
  {
    "id": 56,
    "date": "2018-11-18T12:32:40.630Z",
    "location": {
      "latitude": 40.996735027468475,
      "longitude": 80.60337747294753
    },
    "order": null
  },
  {
    "id": 57,
    "date": "2018-11-06T19:04:19.366Z",
    "location": {
      "latitude": 41.238448064602444,
      "longitude": 81.06846283276933
    },
    "order": null
  },
  {
    "id": 58,
    "date": "2018-11-30T06:20:05.978Z",
    "location": {
      "latitude": 40.848656768546235,
      "longitude": 81.03645157410119
    },
    "order": null
  },
  {
    "id": 59,
    "date": "2018-11-18T16:13:36.379Z",
    "location": {
      "latitude": 41.230581692693846,
      "longitude": 80.84351080797869
    },
    "order": null
  },
  {
    "id": 60,
    "date": "2018-11-10T10:30:46.466Z",
    "location": {
      "latitude": 41.454634246713056,
      "longitude": 80.99331226860885
    },
    "order": null
  },
  {
    "id": 61,
    "date": "2018-11-04T01:47:42.854Z",
    "location": {
      "latitude": 41.355647021287496,
      "longitude": 81.16547212225767
    },
    "order": null
  },
  {
    "id": 62,
    "date": "2018-11-08T17:09:43.065Z",
    "location": {
      "latitude": 40.881627050022566,
      "longitude": 81.22585032222634
    },
    "order": null
  },
  {
    "id": 63,
    "date": "2018-11-15T01:51:46.984Z",
    "location": {
      "latitude": 41.08980212821324,
      "longitude": 81.22968247618613
    },
    "order": null
  },
  {
    "id": 64,
    "date": "2018-11-24T21:56:45.823Z",
    "location": {
      "latitude": 41.59127934582936,
      "longitude": 80.61396192282668
    },
    "order": null
  },
  {
    "id": 65,
    "date": "2018-11-10T15:11:26.270Z",
    "location": {
      "latitude": 41.369639530418034,
      "longitude": 80.71987126054034
    },
    "order": null
  },
  {
    "id": 66,
    "date": "2018-11-22T02:04:53.983Z",
    "location": {
      "latitude": 41.18366651507924,
      "longitude": 80.61113359312124
    },
    "order": null
  },
  {
    "id": 67,
    "date": "2018-11-21T02:54:08.393Z",
    "location": {
      "latitude": 41.09250611128738,
      "longitude": 81.2329254087879
    },
    "order": null
  },
  {
    "id": 68,
    "date": "2018-11-07T18:14:25.185Z",
    "location": {
      "latitude": 41.36815245627341,
      "longitude": 80.82502781921686
    },
    "order": null
  },
  {
    "id": 69,
    "date": "2018-11-25T23:07:19.829Z",
    "location": {
      "latitude": 40.866810985253004,
      "longitude": 81.23556772574013
    },
    "order": null
  },
  {
    "id": 70,
    "date": "2018-11-03T12:09:35.542Z",
    "location": {
      "latitude": 41.17000954608625,
      "longitude": 80.63991395491081
    },
    "order": null
  },
  {
    "id": 71,
    "date": "2018-11-01T16:28:21.923Z",
    "location": {
      "latitude": 41.38425649501151,
      "longitude": 80.61551416777725
    },
    "order": null
  },
  {
    "id": 72,
    "date": "2018-11-29T16:17:07.820Z",
    "location": {
      "latitude": 41.664076396932515,
      "longitude": 81.02220210381122
    },
    "order": null
  },
  {
    "id": 73,
    "date": "2018-11-06T17:14:27.861Z",
    "location": {
      "latitude": 40.896171769184285,
      "longitude": 81.19660941226802
    },
    "order": null
  },
  {
    "id": 74,
    "date": "2018-11-29T10:45:17.350Z",
    "location": {
      "latitude": 40.92635283934682,
      "longitude": 81.13375384055398
    },
    "order": null
  },
  {
    "id": 75,
    "date": "2018-11-24T04:14:17.372Z",
    "location": {
      "latitude": 41.22044990730368,
      "longitude": 81.20586372026814
    },
    "order": null
  },
  {
    "id": 76,
    "date": "2018-11-14T13:33:39.796Z",
    "location": {
      "latitude": 41.10307032500686,
      "longitude": 81.0573055864638
    },
    "order": null
  },
  {
    "id": 77,
    "date": "2018-11-13T22:24:12.169Z",
    "location": {
      "latitude": 41.32634922711705,
      "longitude": 81.31777029176395
    },
    "order": null
  },
  {
    "id": 78,
    "date": "2018-11-24T02:30:43.611Z",
    "location": {
      "latitude": 41.35306083305827,
      "longitude": 81.42306049614832
    },
    "order": null
  },
  {
    "id": 79,
    "date": "2018-11-07T18:15:44.189Z",
    "location": {
      "latitude": 41.05717232565589,
      "longitude": 80.66750055965244
    },
    "order": null
  },
  {
    "id": 80,
    "date": "2018-11-24T01:40:13.921Z",
    "location": {
      "latitude": 41.03725049476328,
      "longitude": 81.36074552249917
    },
    "order": null
  },
  {
    "id": 81,
    "date": "2018-11-13T15:57:14.012Z",
    "location": {
      "latitude": 40.83338942005236,
      "longitude": 81.066748279518
    },
    "order": null
  },
  {
    "id": 82,
    "date": "2018-11-16T07:05:58.753Z",
    "location": {
      "latitude": 40.89243124462756,
      "longitude": 80.67700624713896
    },
    "order": null
  },
  {
    "id": 83,
    "date": "2018-11-26T23:55:05.815Z",
    "location": {
      "latitude": 40.87795074214461,
      "longitude": 80.9086020378822
    },
    "order": null
  },
  {
    "id": 84,
    "date": "2018-11-07T20:50:34.666Z",
    "location": {
      "latitude": 40.97582521476685,
      "longitude": 80.67748010891592
    },
    "order": null
  },
  {
    "id": 85,
    "date": "2018-11-23T08:16:39.717Z",
    "location": {
      "latitude": 41.10699814388279,
      "longitude": 81.20073302136962
    },
    "order": null
  },
  {
    "id": 86,
    "date": "2018-11-27T23:16:14.483Z",
    "location": {
      "latitude": 40.97285223941172,
      "longitude": 80.82440563555264
    },
    "order": null
  },
  {
    "id": 87,
    "date": "2018-11-03T22:13:46.763Z",
    "location": {
      "latitude": 41.42860175806917,
      "longitude": 81.15350876458704
    },
    "order": null
  },
  {
    "id": 88,
    "date": "2018-11-01T08:17:06.978Z",
    "location": {
      "latitude": 41.10371354636208,
      "longitude": 81.08321902009996
    },
    "order": null
  },
  {
    "id": 89,
    "date": "2018-11-01T19:35:55.707Z",
    "location": {
      "latitude": 41.179418742081836,
      "longitude": 80.49048932887975
    },
    "order": null
  },
  {
    "id": 90,
    "date": "2018-11-29T09:20:18.334Z",
    "location": {
      "latitude": 41.00046667722541,
      "longitude": 81.26511350623507
    },
    "order": null
  },
  {
    "id": 91,
    "date": "2018-11-21T23:13:38.371Z",
    "location": {
      "latitude": 41.07789562135687,
      "longitude": 80.49705677647339
    },
    "order": null
  },
  {
    "id": 92,
    "date": "2018-11-23T01:33:28.997Z",
    "location": {
      "latitude": 40.899748191709044,
      "longitude": 80.87704250265925
    },
    "order": null
  },
  {
    "id": 93,
    "date": "2018-11-22T16:15:35.924Z",
    "location": {
      "latitude": 40.91757343369175,
      "longitude": 80.90606848633422
    },
    "order": null
  },
  {
    "id": 94,
    "date": "2018-11-07T15:43:36.042Z",
    "location": {
      "latitude": 41.2478050513612,
      "longitude": 80.34435537186937
    },
    "order": null
  },
  {
    "id": 95,
    "date": "2018-11-17T16:09:59.004Z",
    "location": {
      "latitude": 41.4011881759704,
      "longitude": 80.60866066989526
    },
    "order": null
  },
  {
    "id": 96,
    "date": "2018-11-02T02:26:00.657Z",
    "location": {
      "latitude": 41.21558457065539,
      "longitude": 80.4753791097581
    },
    "order": null
  },
  {
    "id": 97,
    "date": "2018-11-16T19:39:26.263Z",
    "location": {
      "latitude": 41.074997533416976,
      "longitude": 80.44250472260768
    },
    "order": null
  },
  {
    "id": 98,
    "date": "2018-11-21T20:49:58.426Z",
    "location": {
      "latitude": 41.41115952604998,
      "longitude": 81.19162209527134
    },
    "order": null
  },
  {
    "id": 99,
    "date": "2018-11-20T07:08:37.333Z",
    "location": {
      "latitude": 40.98605530081276,
      "longitude": 81.30860143641038
    },
    "order": null
  },
  {
    "id": 100,
    "date": "2018-11-10T23:05:43.880Z",
    "location": {
      "latitude": 40.93936488777573,
      "longitude": 80.56211036878183
    },
    "order": null
  },
  {
    "id": 100,
    "date": "2018-11-28T12:27:53.907Z",
    "location": {
      "latitude": 41.21564201768276,
      "longitude": 80.43463360440269
    },
    "order": {
      "id": 78,
      "date": "2018-11-28T12:27:53.907Z",
      "subtotal": 243.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 9
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 6
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 8
        }
      ],
      "origination": {
        "latitude": 41.031529911321535,
        "longitude": 80.7749438998554
      },
      "customer": {
        "id": 46,
        "name": "Customer46",
        "date": "2018-11-09T12:21:35.884Z",
        "location": {
          "latitude": 41.031529911321535,
          "longitude": 80.7749438998554
        }
      }
    }
  },
  {
    "id": 101,
    "date": "2018-11-08T06:03:55.444Z",
    "location": {
      "latitude": 41.16800780346231,
      "longitude": 81.04314959855469
    },
    "order": {
      "id": 89,
      "date": "2018-11-08T06:03:55.444Z",
      "subtotal": 54,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 2
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 2
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 1
        }
      ],
      "origination": {
        "latitude": 40.99400114356602,
        "longitude": 81.08613250919863
      },
      "customer": {
        "id": 58,
        "name": "Customer58",
        "date": "2018-11-18T18:59:17.820Z",
        "location": {
          "latitude": 40.99400114356602,
          "longitude": 81.08613250919863
        }
      }
    }
  },
  {
    "id": 102,
    "date": "2018-11-22T17:19:06.742Z",
    "location": {
      "latitude": 41.356791597234896,
      "longitude": 81.35769916871811
    },
    "order": {
      "id": 6,
      "date": "2018-11-22T17:19:06.742Z",
      "subtotal": 94.5,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 9
      }],
      "origination": {
        "latitude": 40.910441419818085,
        "longitude": 81.05255945675967
      },
      "customer": {
        "id": 98,
        "name": "Customer98",
        "date": "2018-11-08T02:55:22.445Z",
        "location": {
          "latitude": 40.910441419818085,
          "longitude": 81.05255945675967
        }
      }
    }
  },
  {
    "id": 103,
    "date": "2018-11-10T14:25:21.010Z",
    "location": {
      "latitude": 41.45647328422775,
      "longitude": 80.98707112598889
    },
    "order": {
      "id": 49,
      "date": "2018-11-10T14:25:21.010Z",
      "subtotal": 108.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 2
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 5
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 3
        }
      ],
      "origination": {
        "latitude": 41.06650204396437,
        "longitude": 81.44865053230758
      },
      "customer": {
        "id": 11,
        "name": "Customer11",
        "date": "2018-11-01T09:53:30.817Z",
        "location": {
          "latitude": 41.06650204396437,
          "longitude": 81.44865053230758
        }
      }
    }
  },
  {
    "id": 104,
    "date": "2018-11-12T20:39:19.653Z",
    "location": {
      "latitude": 40.960623528086124,
      "longitude": 81.15416013452977
    },
    "order": {
      "id": 40,
      "date": "2018-11-12T20:39:19.653Z",
      "subtotal": 309.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 5
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 6
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 5
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 3
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 9
        }
      ],
      "origination": {
        "latitude": 41.45152769398765,
        "longitude": 81.2648276287856
      },
      "customer": {
        "id": 4,
        "name": "Customer4",
        "date": "2018-11-23T13:03:55.167Z",
        "location": {
          "latitude": 41.45152769398765,
          "longitude": 81.2648276287856
        }
      }
    }
  },
  {
    "id": 105,
    "date": "2018-11-06T12:27:12.159Z",
    "location": {
      "latitude": 41.11374379595845,
      "longitude": 81.2585850501106
    },
    "order": {
      "id": 97,
      "date": "2018-11-06T12:27:12.159Z",
      "subtotal": 186,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 2
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 10
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 5
        }
      ],
      "origination": {
        "latitude": 41.27460401553063,
        "longitude": 80.38470398045283
      },
      "customer": {
        "id": 12,
        "name": "Customer12",
        "date": "2018-11-25T07:02:12.442Z",
        "location": {
          "latitude": 41.27460401553063,
          "longitude": 80.38470398045283
        }
      }
    }
  },
  {
    "id": 106,
    "date": "2018-11-03T23:06:31.044Z",
    "location": {
      "latitude": 41.55950560901742,
      "longitude": 80.55909822752407
    },
    "order": {
      "id": 96,
      "date": "2018-11-03T23:06:31.044Z",
      "subtotal": 53.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 1
        }
      ],
      "origination": {
        "latitude": 41.45766719401428,
        "longitude": 80.41952013475996
      },
      "customer": {
        "id": 57,
        "name": "Customer57",
        "date": "2018-11-12T17:33:36.484Z",
        "location": {
          "latitude": 41.45766719401428,
          "longitude": 80.41952013475996
        }
      }
    }
  },
  {
    "id": 107,
    "date": "2018-11-06T18:39:08.028Z",
    "location": {
      "latitude": 41.03071550720436,
      "longitude": 80.97852656806546
    },
    "order": {
      "id": 99,
      "date": "2018-11-06T18:39:08.028Z",
      "subtotal": 293.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 6
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 7
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 9
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 6
        }
      ],
      "origination": {
        "latitude": 41.183249375885744,
        "longitude": 81.32418742764672
      },
      "customer": {
        "id": 99,
        "name": "Customer99",
        "date": "2018-11-20T17:57:35.275Z",
        "location": {
          "latitude": 41.183249375885744,
          "longitude": 81.32418742764672
        }
      }
    }
  },
  {
    "id": 108,
    "date": "2018-11-18T02:46:40.741Z",
    "location": {
      "latitude": 41.23335696807181,
      "longitude": 80.48293654760397
    },
    "order": {
      "id": 26,
      "date": "2018-11-18T02:46:40.741Z",
      "subtotal": 94.5,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 9
      }],
      "origination": {
        "latitude": 41.505708636793486,
        "longitude": 81.37532646714635
      },
      "customer": {
        "id": 13,
        "name": "Customer13",
        "date": "2018-11-30T11:32:30.080Z",
        "location": {
          "latitude": 41.505708636793486,
          "longitude": 81.37532646714635
        }
      }
    }
  },
  {
    "id": 109,
    "date": "2018-11-15T00:42:41.797Z",
    "location": {
      "latitude": 40.984846439440744,
      "longitude": 80.785813045261
    },
    "order": {
      "id": 71,
      "date": "2018-11-15T00:42:41.797Z",
      "subtotal": 90,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 2
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 6
        }
      ],
      "origination": {
        "latitude": 41.01567822682822,
        "longitude": 81.42854680848487
      },
      "customer": {
        "id": 34,
        "name": "Customer34",
        "date": "2018-11-05T16:18:20.112Z",
        "location": {
          "latitude": 41.01567822682822,
          "longitude": 81.42854680848487
        }
      }
    }
  },
  {
    "id": 110,
    "date": "2018-11-27T23:49:41.848Z",
    "location": {
      "latitude": 41.29943604702586,
      "longitude": 81.1617104368684
    },
    "order": {
      "id": 38,
      "date": "2018-11-27T23:49:41.848Z",
      "subtotal": 145,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 7
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 1
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 5
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 1
        }
      ],
      "origination": {
        "latitude": 41.43412754089217,
        "longitude": 80.7595317887414
      },
      "customer": {
        "id": 54,
        "name": "Customer54",
        "date": "2018-11-04T07:34:59.611Z",
        "location": {
          "latitude": 41.43412754089217,
          "longitude": 80.7595317887414
        }
      }
    }
  },
  {
    "id": 111,
    "date": "2018-11-03T06:11:36.835Z",
    "location": {
      "latitude": 41.598929004168895,
      "longitude": 80.61030418063373
    },
    "order": {
      "id": 19,
      "date": "2018-11-03T06:11:36.835Z",
      "subtotal": 84,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 8
      }],
      "origination": {
        "latitude": 41.245014063170835,
        "longitude": 81.3456576590452
      },
      "customer": {
        "id": 91,
        "name": "Customer91",
        "date": "2018-11-08T19:32:02.640Z",
        "location": {
          "latitude": 41.245014063170835,
          "longitude": 81.3456576590452
        }
      }
    }
  },
  {
    "id": 112,
    "date": "2018-11-12T09:26:54.599Z",
    "location": {
      "latitude": 41.249683230773705,
      "longitude": 81.02059694796321
    },
    "order": {
      "id": 53,
      "date": "2018-11-12T09:26:54.599Z",
      "subtotal": 113,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 2
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 8
        }
      ],
      "origination": {
        "latitude": 41.127294732323136,
        "longitude": 80.77038005871384
      },
      "customer": {
        "id": 61,
        "name": "Customer61",
        "date": "2018-11-03T10:39:05.832Z",
        "location": {
          "latitude": 41.127294732323136,
          "longitude": 80.77038005871384
        }
      }
    }
  },
  {
    "id": 113,
    "date": "2018-11-01T20:14:18.479Z",
    "location": {
      "latitude": 41.41355216303694,
      "longitude": 81.08715816490682
    },
    "order": {
      "id": 1,
      "date": "2018-11-01T20:14:18.479Z",
      "subtotal": 131,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 7
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 5
        }
      ],
      "origination": {
        "latitude": 40.987074813580534,
        "longitude": 80.57186105867399
      },
      "customer": {
        "id": 88,
        "name": "Customer88",
        "date": "2018-11-30T10:55:00.495Z",
        "location": {
          "latitude": 40.987074813580534,
          "longitude": 80.57186105867399
        }
      }
    }
  },
  {
    "id": 114,
    "date": "2018-11-16T16:33:16.582Z",
    "location": {
      "latitude": 41.289439602779225,
      "longitude": 80.63239271417652
    },
    "order": {
      "id": 3,
      "date": "2018-11-16T16:33:16.582Z",
      "subtotal": 155,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 6
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 8
        }
      ],
      "origination": {
        "latitude": 40.89387992947921,
        "longitude": 80.60130263320485
      },
      "customer": {
        "id": 74,
        "name": "Customer74",
        "date": "2018-11-17T23:44:26.948Z",
        "location": {
          "latitude": 40.89387992947921,
          "longitude": 80.60130263320485
        }
      }
    }
  },
  {
    "id": 115,
    "date": "2018-11-03T23:06:31.044Z",
    "location": {
      "latitude": 40.80546519773202,
      "longitude": 81.03239422586645
    },
    "order": {
      "id": 96,
      "date": "2018-11-03T23:06:31.044Z",
      "subtotal": 53.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 1
        }
      ],
      "origination": {
        "latitude": 41.45766719401428,
        "longitude": 80.41952013475996
      },
      "customer": {
        "id": 57,
        "name": "Customer57",
        "date": "2018-11-12T17:33:36.484Z",
        "location": {
          "latitude": 41.45766719401428,
          "longitude": 80.41952013475996
        }
      }
    }
  },
  {
    "id": 116,
    "date": "2018-11-23T07:04:46.267Z",
    "location": {
      "latitude": 41.30998243216325,
      "longitude": 81.49471455590033
    },
    "order": {
      "id": 35,
      "date": "2018-11-23T07:04:46.267Z",
      "subtotal": 280.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 7
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 2
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 9
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 4
        }
      ],
      "origination": {
        "latitude": 40.910328502467436,
        "longitude": 80.95407242890398
      },
      "customer": {
        "id": 6,
        "name": "Customer6",
        "date": "2018-11-04T03:38:11.000Z",
        "location": {
          "latitude": 40.910328502467436,
          "longitude": 80.95407242890398
        }
      }
    }
  },
  {
    "id": 117,
    "date": "2018-11-08T06:03:55.444Z",
    "location": {
      "latitude": 41.46202585030917,
      "longitude": 81.0577797578104
    },
    "order": {
      "id": 89,
      "date": "2018-11-08T06:03:55.444Z",
      "subtotal": 54,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 2
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 2
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 1
        }
      ],
      "origination": {
        "latitude": 40.99400114356602,
        "longitude": 81.08613250919863
      },
      "customer": {
        "id": 58,
        "name": "Customer58",
        "date": "2018-11-18T18:59:17.820Z",
        "location": {
          "latitude": 40.99400114356602,
          "longitude": 81.08613250919863
        }
      }
    }
  },
  {
    "id": 118,
    "date": "2018-11-15T15:15:30.391Z",
    "location": {
      "latitude": 40.89027330771606,
      "longitude": 80.78373892147115
    },
    "order": {
      "id": 33,
      "date": "2018-11-15T15:15:30.391Z",
      "subtotal": 220.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 3
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 6
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 10
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 2
        }
      ],
      "origination": {
        "latitude": 41.41550493676529,
        "longitude": 81.24672230408709
      },
      "customer": {
        "id": 20,
        "name": "Customer20",
        "date": "2018-11-05T18:45:17.016Z",
        "location": {
          "latitude": 41.41550493676529,
          "longitude": 81.24672230408709
        }
      }
    }
  },
  {
    "id": 119,
    "date": "2018-11-19T19:33:25.315Z",
    "location": {
      "latitude": 40.79262731532158,
      "longitude": 80.88481139050654
    },
    "order": {
      "id": 28,
      "date": "2018-11-19T19:33:25.315Z",
      "subtotal": 31.5,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 3
      }],
      "origination": {
        "latitude": 40.82260171869516,
        "longitude": 80.84349655596263
      },
      "customer": {
        "id": 96,
        "name": "Customer96",
        "date": "2018-11-04T20:53:12.796Z",
        "location": {
          "latitude": 40.82260171869516,
          "longitude": 80.84349655596263
        }
      }
    }
  },
  {
    "id": 120,
    "date": "2018-11-14T12:51:05.105Z",
    "location": {
      "latitude": 41.29290031733241,
      "longitude": 80.38060013622231
    },
    "order": {
      "id": 73,
      "date": "2018-11-14T12:51:05.105Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.09366516086242,
        "longitude": 81.36892287779374
      },
      "customer": {
        "id": 41,
        "name": "Customer41",
        "date": "2018-11-07T02:55:33.402Z",
        "location": {
          "latitude": 41.09366516086242,
          "longitude": 81.36892287779374
        }
      }
    }
  },
  {
    "id": 121,
    "date": "2018-11-22T16:37:15.853Z",
    "location": {
      "latitude": 40.803992803324405,
      "longitude": 80.72562839518685
    },
    "order": {
      "id": 20,
      "date": "2018-11-22T16:37:15.853Z",
      "subtotal": 372,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 10
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 6
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 8
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 1
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 9
        }
      ],
      "origination": {
        "latitude": 41.266656670579735,
        "longitude": 80.98063158383913
      },
      "customer": {
        "id": 18,
        "name": "Customer18",
        "date": "2018-11-11T17:08:04.291Z",
        "location": {
          "latitude": 41.266656670579735,
          "longitude": 80.98063158383913
        }
      }
    }
  },
  {
    "id": 122,
    "date": "2018-11-11T19:41:32.012Z",
    "location": {
      "latitude": 41.2364266809068,
      "longitude": 80.96632629911196
    },
    "order": {
      "id": 23,
      "date": "2018-11-11T19:41:32.012Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.16942369092359,
        "longitude": 80.90892992747287
      },
      "customer": {
        "id": 16,
        "name": "Customer16",
        "date": "2018-11-11T05:13:56.159Z",
        "location": {
          "latitude": 41.16942369092359,
          "longitude": 80.90892992747287
        }
      }
    }
  },
  {
    "id": 123,
    "date": "2018-11-28T01:52:03.814Z",
    "location": {
      "latitude": 41.45387067414827,
      "longitude": 80.82584856798435
    },
    "order": {
      "id": 50,
      "date": "2018-11-28T01:52:03.814Z",
      "subtotal": 164.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 8
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 7
        }
      ],
      "origination": {
        "latitude": 40.942942223159406,
        "longitude": 81.09735037795492
      },
      "customer": {
        "id": 85,
        "name": "Customer85",
        "date": "2018-11-10T13:39:47.360Z",
        "location": {
          "latitude": 40.942942223159406,
          "longitude": 81.09735037795492
        }
      }
    }
  },
  {
    "id": 124,
    "date": "2018-11-23T07:04:46.267Z",
    "location": {
      "latitude": 41.51976864785744,
      "longitude": 80.90438658962725
    },
    "order": {
      "id": 35,
      "date": "2018-11-23T07:04:46.267Z",
      "subtotal": 280.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 7
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 2
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 9
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 4
        }
      ],
      "origination": {
        "latitude": 40.910328502467436,
        "longitude": 80.95407242890398
      },
      "customer": {
        "id": 6,
        "name": "Customer6",
        "date": "2018-11-04T03:38:11.000Z",
        "location": {
          "latitude": 40.910328502467436,
          "longitude": 80.95407242890398
        }
      }
    }
  },
  {
    "id": 125,
    "date": "2018-11-22T21:50:48.076Z",
    "location": {
      "latitude": 41.16011444691149,
      "longitude": 80.97015398671489
    },
    "order": {
      "id": 2,
      "date": "2018-11-22T21:50:48.076Z",
      "subtotal": 225.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 7
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 8
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 6
        }
      ],
      "origination": {
        "latitude": 40.85245724670939,
        "longitude": 80.61361667459276
      },
      "customer": {
        "id": 3,
        "name": "Customer3",
        "date": "2018-11-12T23:03:50.317Z",
        "location": {
          "latitude": 40.85245724670939,
          "longitude": 80.61361667459276
        }
      }
    }
  },
  {
    "id": 126,
    "date": "2018-11-25T08:31:04.601Z",
    "location": {
      "latitude": 41.43610526854192,
      "longitude": 81.38822351515002
    },
    "order": {
      "id": 77,
      "date": "2018-11-25T08:31:04.601Z",
      "subtotal": 116,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 3
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 3
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 5
        }
      ],
      "origination": {
        "latitude": 40.827018774265056,
        "longitude": 81.1544911784252
      },
      "customer": {
        "id": 82,
        "name": "Customer82",
        "date": "2018-11-29T17:16:26.656Z",
        "location": {
          "latitude": 40.827018774265056,
          "longitude": 81.1544911784252
        }
      }
    }
  },
  {
    "id": 127,
    "date": "2018-11-06T12:27:12.159Z",
    "location": {
      "latitude": 41.29236196453684,
      "longitude": 81.20142640309325
    },
    "order": {
      "id": 97,
      "date": "2018-11-06T12:27:12.159Z",
      "subtotal": 186,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 2
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 10
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 5
        }
      ],
      "origination": {
        "latitude": 41.27460401553063,
        "longitude": 80.38470398045283
      },
      "customer": {
        "id": 12,
        "name": "Customer12",
        "date": "2018-11-25T07:02:12.442Z",
        "location": {
          "latitude": 41.27460401553063,
          "longitude": 80.38470398045283
        }
      }
    }
  },
  {
    "id": 128,
    "date": "2018-11-08T19:41:37.282Z",
    "location": {
      "latitude": 41.01230756947884,
      "longitude": 81.31602014558001
    },
    "order": {
      "id": 41,
      "date": "2018-11-08T19:41:37.282Z",
      "subtotal": 247,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 6
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 1
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 9
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 3
        }
      ],
      "origination": {
        "latitude": 41.304994767018584,
        "longitude": 80.56391596251443
      },
      "customer": {
        "id": 33,
        "name": "Customer33",
        "date": "2018-11-07T06:28:49.552Z",
        "location": {
          "latitude": 41.304994767018584,
          "longitude": 80.56391596251443
        }
      }
    }
  },
  {
    "id": 129,
    "date": "2018-11-13T07:22:41.453Z",
    "location": {
      "latitude": 41.36854456198707,
      "longitude": 81.04728807409681
    },
    "order": {
      "id": 9,
      "date": "2018-11-13T07:22:41.453Z",
      "subtotal": 172,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 3
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 7
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 6
        }
      ],
      "origination": {
        "latitude": 41.32358928454645,
        "longitude": 80.6358953457984
      },
      "customer": {
        "id": 77,
        "name": "Customer77",
        "date": "2018-11-21T19:41:51.655Z",
        "location": {
          "latitude": 41.32358928454645,
          "longitude": 80.6358953457984
        }
      }
    }
  },
  {
    "id": 130,
    "date": "2018-11-24T17:12:37.327Z",
    "location": {
      "latitude": 41.16893675888162,
      "longitude": 80.50876607698773
    },
    "order": {
      "id": 46,
      "date": "2018-11-24T17:12:37.327Z",
      "subtotal": 209.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 9
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 10
        }
      ],
      "origination": {
        "latitude": 41.27460401553063,
        "longitude": 80.38470398045283
      },
      "customer": {
        "id": 12,
        "name": "Customer12",
        "date": "2018-11-25T07:02:12.442Z",
        "location": {
          "latitude": 41.27460401553063,
          "longitude": 80.38470398045283
        }
      }
    }
  },
  {
    "id": 131,
    "date": "2018-12-01T05:26:04.647Z",
    "location": {
      "latitude": 41.34049562641809,
      "longitude": 81.25894711241837
    },
    "order": {
      "id": 29,
      "date": "2018-12-01T05:26:04.647Z",
      "subtotal": 10.5,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 1
      }],
      "origination": {
        "latitude": 41.1336054724187,
        "longitude": 81.27731258845074
      },
      "customer": {
        "id": 40,
        "name": "Customer40",
        "date": "2018-11-17T04:09:20.262Z",
        "location": {
          "latitude": 41.1336054724187,
          "longitude": 81.27731258845074
        }
      }
    }
  },
  {
    "id": 132,
    "date": "2018-11-12T01:37:23.653Z",
    "location": {
      "latitude": 41.20867059149031,
      "longitude": 80.72320837198244
    },
    "order": {
      "id": 87,
      "date": "2018-11-12T01:37:23.653Z",
      "subtotal": 105,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 10
      }],
      "origination": {
        "latitude": 41.60146689390556,
        "longitude": 81.2396856469984
      },
      "customer": {
        "id": 31,
        "name": "Customer31",
        "date": "2018-12-01T07:48:46.668Z",
        "location": {
          "latitude": 41.60146689390556,
          "longitude": 81.2396856469984
        }
      }
    }
  },
  {
    "id": 133,
    "date": "2018-11-14T12:51:05.105Z",
    "location": {
      "latitude": 40.87379429560713,
      "longitude": 80.97690168835842
    },
    "order": {
      "id": 73,
      "date": "2018-11-14T12:51:05.105Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.09366516086242,
        "longitude": 81.36892287779374
      },
      "customer": {
        "id": 41,
        "name": "Customer41",
        "date": "2018-11-07T02:55:33.402Z",
        "location": {
          "latitude": 41.09366516086242,
          "longitude": 81.36892287779374
        }
      }
    }
  },
  {
    "id": 134,
    "date": "2018-11-12T20:39:19.653Z",
    "location": {
      "latitude": 41.146195769558716,
      "longitude": 80.68022802190191
    },
    "order": {
      "id": 40,
      "date": "2018-11-12T20:39:19.653Z",
      "subtotal": 309.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 5
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 6
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 5
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 3
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 9
        }
      ],
      "origination": {
        "latitude": 41.45152769398765,
        "longitude": 81.2648276287856
      },
      "customer": {
        "id": 4,
        "name": "Customer4",
        "date": "2018-11-23T13:03:55.167Z",
        "location": {
          "latitude": 41.45152769398765,
          "longitude": 81.2648276287856
        }
      }
    }
  },
  {
    "id": 135,
    "date": "2018-11-07T07:08:43.370Z",
    "location": {
      "latitude": 41.102364008058906,
      "longitude": 80.39940004442064
    },
    "order": {
      "id": 86,
      "date": "2018-11-07T07:08:43.370Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.482686276101774,
        "longitude": 81.28605811885129
      },
      "customer": {
        "id": 22,
        "name": "Customer22",
        "date": "2018-11-01T08:51:56.992Z",
        "location": {
          "latitude": 41.482686276101774,
          "longitude": 81.28605811885129
        }
      }
    }
  },
  {
    "id": 136,
    "date": "2018-11-29T20:03:58.831Z",
    "location": {
      "latitude": 41.32754339630587,
      "longitude": 80.92549420693763
    },
    "order": {
      "id": 64,
      "date": "2018-11-29T20:03:58.831Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.3783660007989,
        "longitude": 81.06811457582107
      },
      "customer": {
        "id": 75,
        "name": "Customer75",
        "date": "2018-11-07T21:53:50.399Z",
        "location": {
          "latitude": 41.3783660007989,
          "longitude": 81.06811457582107
        }
      }
    }
  },
  {
    "id": 137,
    "date": "2018-11-05T18:07:04.413Z",
    "location": {
      "latitude": 41.0991625151757,
      "longitude": 81.02793519416996
    },
    "order": {
      "id": 61,
      "date": "2018-11-05T18:07:04.413Z",
      "subtotal": 244,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 2
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 6
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 6
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 1
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 7
        }
      ],
      "origination": {
        "latitude": 41.498927926929106,
        "longitude": 81.36006933243989
      },
      "customer": {
        "id": 90,
        "name": "Customer90",
        "date": "2018-11-19T17:07:46.871Z",
        "location": {
          "latitude": 41.498927926929106,
          "longitude": 81.36006933243989
        }
      }
    }
  },
  {
    "id": 138,
    "date": "2018-11-18T01:31:24.725Z",
    "location": {
      "latitude": 41.1717967320437,
      "longitude": 81.23241812512121
    },
    "order": {
      "id": 47,
      "date": "2018-11-18T01:31:24.725Z",
      "subtotal": 251,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 6
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 2
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 6
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 5
        }
      ],
      "origination": {
        "latitude": 41.05187612231146,
        "longitude": 81.1642972762007
      },
      "customer": {
        "id": 26,
        "name": "Customer26",
        "date": "2018-11-30T15:40:57.722Z",
        "location": {
          "latitude": 41.05187612231146,
          "longitude": 81.1642972762007
        }
      }
    }
  },
  {
    "id": 139,
    "date": "2018-11-15T04:07:42.372Z",
    "location": {
      "latitude": 41.03303155319539,
      "longitude": 80.7430439964456
    },
    "order": {
      "id": 69,
      "date": "2018-11-15T04:07:42.372Z",
      "subtotal": 107,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 8
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 2
        }
      ],
      "origination": {
        "latitude": 41.45152769398765,
        "longitude": 81.2648276287856
      },
      "customer": {
        "id": 4,
        "name": "Customer4",
        "date": "2018-11-23T13:03:55.167Z",
        "location": {
          "latitude": 41.45152769398765,
          "longitude": 81.2648276287856
        }
      }
    }
  },
  {
    "id": 140,
    "date": "2018-11-10T17:43:54.877Z",
    "location": {
      "latitude": 41.20979419896117,
      "longitude": 80.81847444015547
    },
    "order": {
      "id": 67,
      "date": "2018-11-10T17:43:54.877Z",
      "subtotal": 73.5,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 7
      }],
      "origination": {
        "latitude": 40.88720911089529,
        "longitude": 81.20029479966333
      },
      "customer": {
        "id": 8,
        "name": "Customer8",
        "date": "2018-11-30T09:49:51.106Z",
        "location": {
          "latitude": 40.88720911089529,
          "longitude": 81.20029479966333
        }
      }
    }
  },
  {
    "id": 141,
    "date": "2018-11-11T06:30:45.997Z",
    "location": {
      "latitude": 40.9649808741693,
      "longitude": 81.11495437260294
    },
    "order": {
      "id": 98,
      "date": "2018-11-11T06:30:45.997Z",
      "subtotal": 329,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 10
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 9
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 7
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 1
        }
      ],
      "origination": {
        "latitude": 41.27460401553063,
        "longitude": 80.38470398045283
      },
      "customer": {
        "id": 12,
        "name": "Customer12",
        "date": "2018-11-25T07:02:12.442Z",
        "location": {
          "latitude": 41.27460401553063,
          "longitude": 80.38470398045283
        }
      }
    }
  },
  {
    "id": 142,
    "date": "2018-11-16T21:44:30.568Z",
    "location": {
      "latitude": 40.973711592154714,
      "longitude": 81.15700756059148
    },
    "order": {
      "id": 66,
      "date": "2018-11-16T21:44:30.568Z",
      "subtotal": 210.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 9
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 4
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 7
        }
      ],
      "origination": {
        "latitude": 41.07369226840481,
        "longitude": 81.12308757187397
      },
      "customer": {
        "id": 45,
        "name": "Customer45",
        "date": "2018-11-15T01:09:07.641Z",
        "location": {
          "latitude": 41.07369226840481,
          "longitude": 81.12308757187397
        }
      }
    }
  },
  {
    "id": 143,
    "date": "2018-11-18T06:02:23.214Z",
    "location": {
      "latitude": 41.42275920615382,
      "longitude": 80.60817369966148
    },
    "order": {
      "id": 12,
      "date": "2018-11-18T06:02:23.214Z",
      "subtotal": 367.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 9
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 10
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 9
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 2
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 4
        }
      ],
      "origination": {
        "latitude": 41.05679988172085,
        "longitude": 81.33417523635951
      },
      "customer": {
        "id": 7,
        "name": "Customer7",
        "date": "2018-11-19T03:50:53.388Z",
        "location": {
          "latitude": 41.05679988172085,
          "longitude": 81.33417523635951
        }
      }
    }
  },
  {
    "id": 144,
    "date": "2018-11-29T20:03:58.831Z",
    "location": {
      "latitude": 41.16666132192387,
      "longitude": 81.3668320325263
    },
    "order": {
      "id": 64,
      "date": "2018-11-29T20:03:58.831Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.3783660007989,
        "longitude": 81.06811457582107
      },
      "customer": {
        "id": 75,
        "name": "Customer75",
        "date": "2018-11-07T21:53:50.399Z",
        "location": {
          "latitude": 41.3783660007989,
          "longitude": 81.06811457582107
        }
      }
    }
  },
  {
    "id": 145,
    "date": "2018-11-10T16:19:48.945Z",
    "location": {
      "latitude": 41.0874279182845,
      "longitude": 80.75863012669345
    },
    "order": {
      "id": 81,
      "date": "2018-11-10T16:19:48.945Z",
      "subtotal": 266.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 10
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 1
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 10
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 5
        }
      ],
      "origination": {
        "latitude": 40.99400114356602,
        "longitude": 81.08613250919863
      },
      "customer": {
        "id": 58,
        "name": "Customer58",
        "date": "2018-11-18T18:59:17.820Z",
        "location": {
          "latitude": 40.99400114356602,
          "longitude": 81.08613250919863
        }
      }
    }
  },
  {
    "id": 146,
    "date": "2018-11-27T18:37:54.654Z",
    "location": {
      "latitude": 41.01665214778396,
      "longitude": 80.91945970666691
    },
    "order": {
      "id": 88,
      "date": "2018-11-27T18:37:54.654Z",
      "subtotal": 94.5,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 9
      }],
      "origination": {
        "latitude": 41.05912634941944,
        "longitude": 81.09607865515473
      },
      "customer": {
        "id": 30,
        "name": "Customer30",
        "date": "2018-11-05T13:09:09.015Z",
        "location": {
          "latitude": 41.05912634941944,
          "longitude": 81.09607865515473
        }
      }
    }
  },
  {
    "id": 147,
    "date": "2018-11-20T19:04:14.377Z",
    "location": {
      "latitude": 41.20907746329854,
      "longitude": 81.30726133112496
    },
    "order": {
      "id": 90,
      "date": "2018-11-20T19:04:14.377Z",
      "subtotal": 84,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 8
      }],
      "origination": {
        "latitude": 41.081902458045484,
        "longitude": 80.55078828803111
      },
      "customer": {
        "id": 68,
        "name": "Customer68",
        "date": "2018-11-25T14:11:00.033Z",
        "location": {
          "latitude": 41.081902458045484,
          "longitude": 80.55078828803111
        }
      }
    }
  },
  {
    "id": 148,
    "date": "2018-11-18T06:02:23.214Z",
    "location": {
      "latitude": 40.964074868896006,
      "longitude": 80.7222227786839
    },
    "order": {
      "id": 12,
      "date": "2018-11-18T06:02:23.214Z",
      "subtotal": 367.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 9
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 10
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 9
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 2
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 4
        }
      ],
      "origination": {
        "latitude": 41.05679988172085,
        "longitude": 81.33417523635951
      },
      "customer": {
        "id": 7,
        "name": "Customer7",
        "date": "2018-11-19T03:50:53.388Z",
        "location": {
          "latitude": 41.05679988172085,
          "longitude": 81.33417523635951
        }
      }
    }
  },
  {
    "id": 149,
    "date": "2018-11-22T21:50:48.076Z",
    "location": {
      "latitude": 41.3409993755325,
      "longitude": 81.44916275066949
    },
    "order": {
      "id": 2,
      "date": "2018-11-22T21:50:48.076Z",
      "subtotal": 225.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 7
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 8
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 6
        }
      ],
      "origination": {
        "latitude": 40.85245724670939,
        "longitude": 80.61361667459276
      },
      "customer": {
        "id": 3,
        "name": "Customer3",
        "date": "2018-11-12T23:03:50.317Z",
        "location": {
          "latitude": 40.85245724670939,
          "longitude": 80.61361667459276
        }
      }
    }
  },
  {
    "id": 150,
    "date": "2018-11-04T13:01:17.388Z",
    "location": {
      "latitude": 41.56241307163163,
      "longitude": 80.95569040645367
    },
    "order": {
      "id": 48,
      "date": "2018-11-04T13:01:17.388Z",
      "subtotal": 318.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 10
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 9
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 7
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 4
        }
      ],
      "origination": {
        "latitude": 41.06253907697014,
        "longitude": 81.04969138813823
      },
      "customer": {
        "id": 95,
        "name": "Customer95",
        "date": "2018-11-25T04:01:03.065Z",
        "location": {
          "latitude": 41.06253907697014,
          "longitude": 81.04969138813823
        }
      }
    }
  },
  {
    "id": 151,
    "date": "2018-11-15T06:08:58.887Z",
    "location": {
      "latitude": 41.16694182293146,
      "longitude": 80.70647733647806
    },
    "order": {
      "id": 36,
      "date": "2018-11-15T06:08:58.887Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.35175751850642,
        "longitude": 80.48292461393147
      },
      "customer": {
        "id": 73,
        "name": "Customer73",
        "date": "2018-11-17T23:58:09.898Z",
        "location": {
          "latitude": 41.35175751850642,
          "longitude": 80.48292461393147
        }
      }
    }
  },
  {
    "id": 152,
    "date": "2018-11-28T21:41:52.985Z",
    "location": {
      "latitude": 41.38090773588973,
      "longitude": 80.98380648875384
    },
    "order": {
      "id": 84,
      "date": "2018-11-28T21:41:52.985Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.05562398720403,
        "longitude": 80.76804990701929
      },
      "customer": {
        "id": 27,
        "name": "Customer27",
        "date": "2018-11-02T21:06:12.531Z",
        "location": {
          "latitude": 41.05562398720403,
          "longitude": 80.76804990701929
        }
      }
    }
  },
  {
    "id": 153,
    "date": "2018-11-06T19:03:44.716Z",
    "location": {
      "latitude": 41.07674749473209,
      "longitude": 81.114076234103
    },
    "order": {
      "id": 14,
      "date": "2018-11-06T19:03:44.716Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.163113501019424,
        "longitude": 80.75480174827871
      },
      "customer": {
        "id": 2,
        "name": "Customer2",
        "date": "2018-11-26T09:17:59.983Z",
        "location": {
          "latitude": 41.163113501019424,
          "longitude": 80.75480174827871
        }
      }
    }
  },
  {
    "id": 154,
    "date": "2018-11-01T16:10:15.943Z",
    "location": {
      "latitude": 40.80809408887633,
      "longitude": 80.84884416129964
    },
    "order": {
      "id": 27,
      "date": "2018-11-01T16:10:15.943Z",
      "subtotal": 108,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 7
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 3
        }
      ],
      "origination": {
        "latitude": 41.505708636793486,
        "longitude": 81.37532646714635
      },
      "customer": {
        "id": 13,
        "name": "Customer13",
        "date": "2018-11-30T11:32:30.080Z",
        "location": {
          "latitude": 41.505708636793486,
          "longitude": 81.37532646714635
        }
      }
    }
  },
  {
    "id": 155,
    "date": "2018-11-05T13:24:25.418Z",
    "location": {
      "latitude": 41.232499919746694,
      "longitude": 80.61337366257274
    },
    "order": {
      "id": 52,
      "date": "2018-11-05T13:24:25.418Z",
      "subtotal": 257.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 9
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 2
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 7
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 7
        }
      ],
      "origination": {
        "latitude": 41.07983569787224,
        "longitude": 80.89858930594671
      },
      "customer": {
        "id": 67,
        "name": "Customer67",
        "date": "2018-11-03T02:57:49.526Z",
        "location": {
          "latitude": 41.07983569787224,
          "longitude": 80.89858930594671
        }
      }
    }
  },
  {
    "id": 156,
    "date": "2018-11-06T12:27:12.159Z",
    "location": {
      "latitude": 41.01871322270709,
      "longitude": 81.28068089075914
    },
    "order": {
      "id": 97,
      "date": "2018-11-06T12:27:12.159Z",
      "subtotal": 186,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 2
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 10
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 5
        }
      ],
      "origination": {
        "latitude": 41.27460401553063,
        "longitude": 80.38470398045283
      },
      "customer": {
        "id": 12,
        "name": "Customer12",
        "date": "2018-11-25T07:02:12.442Z",
        "location": {
          "latitude": 41.27460401553063,
          "longitude": 80.38470398045283
        }
      }
    }
  },
  {
    "id": 157,
    "date": "2018-11-10T03:45:57.558Z",
    "location": {
      "latitude": 40.881711916513126,
      "longitude": 80.74412933852112
    },
    "order": {
      "id": 59,
      "date": "2018-11-10T03:45:57.558Z",
      "subtotal": 63,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 6
      }],
      "origination": {
        "latitude": 40.97030269036371,
        "longitude": 81.23583212924578
      },
      "customer": {
        "id": 78,
        "name": "Customer78",
        "date": "2018-11-17T11:56:50.486Z",
        "location": {
          "latitude": 40.97030269036371,
          "longitude": 81.23583212924578
        }
      }
    }
  },
  {
    "id": 158,
    "date": "2018-11-25T08:59:10.327Z",
    "location": {
      "latitude": 40.97646105422476,
      "longitude": 80.65851273096382
    },
    "order": {
      "id": 79,
      "date": "2018-11-25T08:59:10.327Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.26257579706168,
        "longitude": 81.21503620190207
      },
      "customer": {
        "id": 35,
        "name": "Customer35",
        "date": "2018-11-14T05:35:49.408Z",
        "location": {
          "latitude": 41.26257579706168,
          "longitude": 81.21503620190207
        }
      }
    }
  },
  {
    "id": 159,
    "date": "2018-11-18T08:37:29.739Z",
    "location": {
      "latitude": 41.160781582869475,
      "longitude": 81.46244431924252
    },
    "order": {
      "id": 56,
      "date": "2018-11-18T08:37:29.739Z",
      "subtotal": 215.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 9
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 7
        }
      ],
      "origination": {
        "latitude": 41.39001874704277,
        "longitude": 80.67856753029132
      },
      "customer": {
        "id": 21,
        "name": "Customer21",
        "date": "2018-11-15T19:07:47.351Z",
        "location": {
          "latitude": 41.39001874704277,
          "longitude": 80.67856753029132
        }
      }
    }
  },
  {
    "id": 160,
    "date": "2018-11-23T07:04:46.267Z",
    "location": {
      "latitude": 41.30915345090346,
      "longitude": 80.6603768548969
    },
    "order": {
      "id": 35,
      "date": "2018-11-23T07:04:46.267Z",
      "subtotal": 280.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 7
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 2
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 9
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 4
        }
      ],
      "origination": {
        "latitude": 40.910328502467436,
        "longitude": 80.95407242890398
      },
      "customer": {
        "id": 6,
        "name": "Customer6",
        "date": "2018-11-04T03:38:11.000Z",
        "location": {
          "latitude": 40.910328502467436,
          "longitude": 80.95407242890398
        }
      }
    }
  },
  {
    "id": 161,
    "date": "2018-11-23T07:04:46.267Z",
    "location": {
      "latitude": 41.47098130564958,
      "longitude": 81.3807394360957
    },
    "order": {
      "id": 35,
      "date": "2018-11-23T07:04:46.267Z",
      "subtotal": 280.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 7
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 2
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 9
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 4
        }
      ],
      "origination": {
        "latitude": 40.910328502467436,
        "longitude": 80.95407242890398
      },
      "customer": {
        "id": 6,
        "name": "Customer6",
        "date": "2018-11-04T03:38:11.000Z",
        "location": {
          "latitude": 40.910328502467436,
          "longitude": 80.95407242890398
        }
      }
    }
  },
  {
    "id": 162,
    "date": "2018-11-23T18:23:34.441Z",
    "location": {
      "latitude": 41.26387063421496,
      "longitude": 80.34245662214573
    },
    "order": {
      "id": 62,
      "date": "2018-11-23T18:23:34.441Z",
      "subtotal": 21,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 2
      }],
      "origination": {
        "latitude": 41.304994767018584,
        "longitude": 80.56391596251443
      },
      "customer": {
        "id": 33,
        "name": "Customer33",
        "date": "2018-11-07T06:28:49.552Z",
        "location": {
          "latitude": 41.304994767018584,
          "longitude": 80.56391596251443
        }
      }
    }
  },
  {
    "id": 163,
    "date": "2018-12-01T05:26:04.647Z",
    "location": {
      "latitude": 41.31002349469777,
      "longitude": 80.3827281328973
    },
    "order": {
      "id": 29,
      "date": "2018-12-01T05:26:04.647Z",
      "subtotal": 10.5,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 1
      }],
      "origination": {
        "latitude": 41.1336054724187,
        "longitude": 81.27731258845074
      },
      "customer": {
        "id": 40,
        "name": "Customer40",
        "date": "2018-11-17T04:09:20.262Z",
        "location": {
          "latitude": 41.1336054724187,
          "longitude": 81.27731258845074
        }
      }
    }
  },
  {
    "id": 164,
    "date": "2018-11-22T16:20:56.862Z",
    "location": {
      "latitude": 41.15413882578916,
      "longitude": 81.15211636031299
    },
    "order": {
      "id": 18,
      "date": "2018-11-22T16:20:56.862Z",
      "subtotal": 167.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 5
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 10
        }
      ],
      "origination": {
        "latitude": 41.08221760385262,
        "longitude": 81.19739044349913
      },
      "customer": {
        "id": 17,
        "name": "Customer17",
        "date": "2018-11-22T19:08:00.310Z",
        "location": {
          "latitude": 41.08221760385262,
          "longitude": 81.19739044349913
        }
      }
    }
  },
  {
    "id": 165,
    "date": "2018-11-05T02:26:28.347Z",
    "location": {
      "latitude": 41.28985095404055,
      "longitude": 80.77910374485496
    },
    "order": {
      "id": 30,
      "date": "2018-11-05T02:26:28.347Z",
      "subtotal": 276.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 3
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 10
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 9
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 4
        }
      ],
      "origination": {
        "latitude": 41.479740035518795,
        "longitude": 81.29718478516433
      },
      "customer": {
        "id": 63,
        "name": "Customer63",
        "date": "2018-11-28T10:10:31.827Z",
        "location": {
          "latitude": 41.479740035518795,
          "longitude": 81.29718478516433
        }
      }
    }
  },
  {
    "id": 166,
    "date": "2018-11-04T04:13:43.439Z",
    "location": {
      "latitude": 41.5825987132382,
      "longitude": 80.68875501084025
    },
    "order": {
      "id": 95,
      "date": "2018-11-04T04:13:43.439Z",
      "subtotal": 391,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 10
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 4
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 10
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 2
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 10
        }
      ],
      "origination": {
        "latitude": 41.46400657289188,
        "longitude": 80.7356551049923
      },
      "customer": {
        "id": 55,
        "name": "Customer55",
        "date": "2018-11-19T21:54:26.964Z",
        "location": {
          "latitude": 41.46400657289188,
          "longitude": 80.7356551049923
        }
      }
    }
  },
  {
    "id": 167,
    "date": "2018-11-25T03:19:38.965Z",
    "location": {
      "latitude": 41.17029981856391,
      "longitude": 80.82017432311595
    },
    "order": {
      "id": 58,
      "date": "2018-11-25T03:19:38.965Z",
      "subtotal": 267.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 9
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 2
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 3
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 6
        }
      ],
      "origination": {
        "latitude": 41.07983569787224,
        "longitude": 80.89858930594671
      },
      "customer": {
        "id": 67,
        "name": "Customer67",
        "date": "2018-11-03T02:57:49.526Z",
        "location": {
          "latitude": 41.07983569787224,
          "longitude": 80.89858930594671
        }
      }
    }
  },
  {
    "id": 168,
    "date": "2018-11-11T19:41:32.012Z",
    "location": {
      "latitude": 41.49557658022697,
      "longitude": 81.06151492288632
    },
    "order": {
      "id": 23,
      "date": "2018-11-11T19:41:32.012Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.16942369092359,
        "longitude": 80.90892992747287
      },
      "customer": {
        "id": 16,
        "name": "Customer16",
        "date": "2018-11-11T05:13:56.159Z",
        "location": {
          "latitude": 41.16942369092359,
          "longitude": 80.90892992747287
        }
      }
    }
  },
  {
    "id": 169,
    "date": "2018-11-09T17:32:50.211Z",
    "location": {
      "latitude": 41.57722735009545,
      "longitude": 80.65656373537288
    },
    "order": {
      "id": 13,
      "date": "2018-11-09T17:32:50.211Z",
      "subtotal": 31.5,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 3
      }],
      "origination": {
        "latitude": 41.05912634941944,
        "longitude": 81.09607865515473
      },
      "customer": {
        "id": 30,
        "name": "Customer30",
        "date": "2018-11-05T13:09:09.015Z",
        "location": {
          "latitude": 41.05912634941944,
          "longitude": 81.09607865515473
        }
      }
    }
  },
  {
    "id": 170,
    "date": "2018-11-25T08:31:04.601Z",
    "location": {
      "latitude": 41.01269774271429,
      "longitude": 81.1617901130565
    },
    "order": {
      "id": 77,
      "date": "2018-11-25T08:31:04.601Z",
      "subtotal": 116,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 3
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 3
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 5
        }
      ],
      "origination": {
        "latitude": 40.827018774265056,
        "longitude": 81.1544911784252
      },
      "customer": {
        "id": 82,
        "name": "Customer82",
        "date": "2018-11-29T17:16:26.656Z",
        "location": {
          "latitude": 40.827018774265056,
          "longitude": 81.1544911784252
        }
      }
    }
  },
  {
    "id": 171,
    "date": "2018-11-15T04:07:42.372Z",
    "location": {
      "latitude": 41.32201956030561,
      "longitude": 80.49881599328184
    },
    "order": {
      "id": 69,
      "date": "2018-11-15T04:07:42.372Z",
      "subtotal": 107,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 8
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 2
        }
      ],
      "origination": {
        "latitude": 41.45152769398765,
        "longitude": 81.2648276287856
      },
      "customer": {
        "id": 4,
        "name": "Customer4",
        "date": "2018-11-23T13:03:55.167Z",
        "location": {
          "latitude": 41.45152769398765,
          "longitude": 81.2648276287856
        }
      }
    }
  },
  {
    "id": 172,
    "date": "2018-11-18T08:37:29.739Z",
    "location": {
      "latitude": 41.62552447239916,
      "longitude": 81.183955335065
    },
    "order": {
      "id": 56,
      "date": "2018-11-18T08:37:29.739Z",
      "subtotal": 215.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 9
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 7
        }
      ],
      "origination": {
        "latitude": 41.39001874704277,
        "longitude": 80.67856753029132
      },
      "customer": {
        "id": 21,
        "name": "Customer21",
        "date": "2018-11-15T19:07:47.351Z",
        "location": {
          "latitude": 41.39001874704277,
          "longitude": 80.67856753029132
        }
      }
    }
  },
  {
    "id": 173,
    "date": "2018-11-05T18:07:04.413Z",
    "location": {
      "latitude": 41.15300688818459,
      "longitude": 80.52758523828636
    },
    "order": {
      "id": 61,
      "date": "2018-11-05T18:07:04.413Z",
      "subtotal": 244,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 2
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 6
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 6
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 1
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 7
        }
      ],
      "origination": {
        "latitude": 41.498927926929106,
        "longitude": 81.36006933243989
      },
      "customer": {
        "id": 90,
        "name": "Customer90",
        "date": "2018-11-19T17:07:46.871Z",
        "location": {
          "latitude": 41.498927926929106,
          "longitude": 81.36006933243989
        }
      }
    }
  },
  {
    "id": 174,
    "date": "2018-11-05T13:27:27.263Z",
    "location": {
      "latitude": 40.84815675093577,
      "longitude": 80.62629037727643
    },
    "order": {
      "id": 93,
      "date": "2018-11-05T13:27:27.263Z",
      "subtotal": 229.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 10
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 3
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 2
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 7
        }
      ],
      "origination": {
        "latitude": 41.505708636793486,
        "longitude": 81.37532646714635
      },
      "customer": {
        "id": 13,
        "name": "Customer13",
        "date": "2018-11-30T11:32:30.080Z",
        "location": {
          "latitude": 41.505708636793486,
          "longitude": 81.37532646714635
        }
      }
    }
  },
  {
    "id": 175,
    "date": "2018-11-10T17:43:54.877Z",
    "location": {
      "latitude": 41.15848965055006,
      "longitude": 80.73985480502826
    },
    "order": {
      "id": 67,
      "date": "2018-11-10T17:43:54.877Z",
      "subtotal": 73.5,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 7
      }],
      "origination": {
        "latitude": 40.88720911089529,
        "longitude": 81.20029479966333
      },
      "customer": {
        "id": 8,
        "name": "Customer8",
        "date": "2018-11-30T09:49:51.106Z",
        "location": {
          "latitude": 40.88720911089529,
          "longitude": 81.20029479966333
        }
      }
    }
  },
  {
    "id": 176,
    "date": "2018-11-14T12:51:05.105Z",
    "location": {
      "latitude": 40.84148013543362,
      "longitude": 81.10822003945677
    },
    "order": {
      "id": 73,
      "date": "2018-11-14T12:51:05.105Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.09366516086242,
        "longitude": 81.36892287779374
      },
      "customer": {
        "id": 41,
        "name": "Customer41",
        "date": "2018-11-07T02:55:33.402Z",
        "location": {
          "latitude": 41.09366516086242,
          "longitude": 81.36892287779374
        }
      }
    }
  },
  {
    "id": 177,
    "date": "2018-11-18T01:31:24.725Z",
    "location": {
      "latitude": 40.99277280465782,
      "longitude": 80.51878051126702
    },
    "order": {
      "id": 47,
      "date": "2018-11-18T01:31:24.725Z",
      "subtotal": 251,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 6
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 2
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 6
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 5
        }
      ],
      "origination": {
        "latitude": 41.05187612231146,
        "longitude": 81.1642972762007
      },
      "customer": {
        "id": 26,
        "name": "Customer26",
        "date": "2018-11-30T15:40:57.722Z",
        "location": {
          "latitude": 41.05187612231146,
          "longitude": 81.1642972762007
        }
      }
    }
  },
  {
    "id": 178,
    "date": "2018-11-04T05:32:52.229Z",
    "location": {
      "latitude": 41.325975306527475,
      "longitude": 81.20139782226624
    },
    "order": {
      "id": 82,
      "date": "2018-11-04T05:32:52.229Z",
      "subtotal": 177,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 7
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 9
        }
      ],
      "origination": {
        "latitude": 41.07983569787224,
        "longitude": 80.89858930594671
      },
      "customer": {
        "id": 67,
        "name": "Customer67",
        "date": "2018-11-03T02:57:49.526Z",
        "location": {
          "latitude": 41.07983569787224,
          "longitude": 80.89858930594671
        }
      }
    }
  },
  {
    "id": 179,
    "date": "2018-11-06T18:39:08.028Z",
    "location": {
      "latitude": 41.56617133876837,
      "longitude": 81.12209032929479
    },
    "order": {
      "id": 99,
      "date": "2018-11-06T18:39:08.028Z",
      "subtotal": 293.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 6
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 7
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 9
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 6
        }
      ],
      "origination": {
        "latitude": 41.183249375885744,
        "longitude": 81.32418742764672
      },
      "customer": {
        "id": 99,
        "name": "Customer99",
        "date": "2018-11-20T17:57:35.275Z",
        "location": {
          "latitude": 41.183249375885744,
          "longitude": 81.32418742764672
        }
      }
    }
  },
  {
    "id": 180,
    "date": "2018-11-06T09:30:57.231Z",
    "location": {
      "latitude": 41.50590213416844,
      "longitude": 81.03902822622341
    },
    "order": {
      "id": 7,
      "date": "2018-11-06T09:30:57.231Z",
      "subtotal": 345.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 7
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 4
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 8
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 5
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 8
        }
      ],
      "origination": {
        "latitude": 41.32416264779791,
        "longitude": 81.35628838321827
      },
      "customer": {
        "id": 94,
        "name": "Customer94",
        "date": "2018-11-29T12:21:59.407Z",
        "location": {
          "latitude": 41.32416264779791,
          "longitude": 81.35628838321827
        }
      }
    }
  },
  {
    "id": 181,
    "date": "2018-11-25T22:28:44.810Z",
    "location": {
      "latitude": 40.9813564819239,
      "longitude": 80.78351436295743
    },
    "order": {
      "id": 85,
      "date": "2018-11-25T22:28:44.810Z",
      "subtotal": 174,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 5
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 1
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 10
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 1
        }
      ],
      "origination": {
        "latitude": 41.127294732323136,
        "longitude": 80.77038005871384
      },
      "customer": {
        "id": 61,
        "name": "Customer61",
        "date": "2018-11-03T10:39:05.832Z",
        "location": {
          "latitude": 41.127294732323136,
          "longitude": 80.77038005871384
        }
      }
    }
  },
  {
    "id": 182,
    "date": "2018-11-18T02:46:40.741Z",
    "location": {
      "latitude": 41.20000394742595,
      "longitude": 81.14918423426543
    },
    "order": {
      "id": 26,
      "date": "2018-11-18T02:46:40.741Z",
      "subtotal": 94.5,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 9
      }],
      "origination": {
        "latitude": 41.505708636793486,
        "longitude": 81.37532646714635
      },
      "customer": {
        "id": 13,
        "name": "Customer13",
        "date": "2018-11-30T11:32:30.080Z",
        "location": {
          "latitude": 41.505708636793486,
          "longitude": 81.37532646714635
        }
      }
    }
  },
  {
    "id": 183,
    "date": "2018-11-03T10:50:47.211Z",
    "location": {
      "latitude": 41.184181304906325,
      "longitude": 80.81764112092476
    },
    "order": {
      "id": 54,
      "date": "2018-11-03T10:50:47.211Z",
      "subtotal": 10.5,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 1
      }],
      "origination": {
        "latitude": 40.89789860972749,
        "longitude": 81.30970674979748
      },
      "customer": {
        "id": 5,
        "name": "Customer5",
        "date": "2018-11-07T00:55:19.548Z",
        "location": {
          "latitude": 40.89789860972749,
          "longitude": 81.30970674979748
        }
      }
    }
  },
  {
    "id": 184,
    "date": "2018-11-19T14:13:12.442Z",
    "location": {
      "latitude": 40.92312552258358,
      "longitude": 81.03465179864267
    },
    "order": {
      "id": 94,
      "date": "2018-11-19T14:13:12.442Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 40.97560006408294,
        "longitude": 80.65928097615352
      },
      "customer": {
        "id": 56,
        "name": "Customer56",
        "date": "2018-11-07T16:16:06.517Z",
        "location": {
          "latitude": 40.97560006408294,
          "longitude": 80.65928097615352
        }
      }
    }
  },
  {
    "id": 185,
    "date": "2018-11-14T12:51:05.105Z",
    "location": {
      "latitude": 41.2259381306144,
      "longitude": 81.48495796935781
    },
    "order": {
      "id": 73,
      "date": "2018-11-14T12:51:05.105Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.09366516086242,
        "longitude": 81.36892287779374
      },
      "customer": {
        "id": 41,
        "name": "Customer41",
        "date": "2018-11-07T02:55:33.402Z",
        "location": {
          "latitude": 41.09366516086242,
          "longitude": 81.36892287779374
        }
      }
    }
  },
  {
    "id": 186,
    "date": "2018-11-08T20:17:42.891Z",
    "location": {
      "latitude": 40.890270540698154,
      "longitude": 80.85648863579462
    },
    "order": {
      "id": 80,
      "date": "2018-11-08T20:17:42.891Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.518947538556056,
        "longitude": 80.83729581240249
      },
      "customer": {
        "id": 48,
        "name": "Customer48",
        "date": "2018-11-05T18:31:16.390Z",
        "location": {
          "latitude": 41.518947538556056,
          "longitude": 80.83729581240249
        }
      }
    }
  },
  {
    "id": 187,
    "date": "2018-11-04T05:32:52.229Z",
    "location": {
      "latitude": 41.009429713037285,
      "longitude": 80.56874667108666
    },
    "order": {
      "id": 82,
      "date": "2018-11-04T05:32:52.229Z",
      "subtotal": 177,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 7
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 9
        }
      ],
      "origination": {
        "latitude": 41.07983569787224,
        "longitude": 80.89858930594671
      },
      "customer": {
        "id": 67,
        "name": "Customer67",
        "date": "2018-11-03T02:57:49.526Z",
        "location": {
          "latitude": 41.07983569787224,
          "longitude": 80.89858930594671
        }
      }
    }
  },
  {
    "id": 188,
    "date": "2018-11-05T02:26:28.347Z",
    "location": {
      "latitude": 40.992275373407665,
      "longitude": 80.77604631924652
    },
    "order": {
      "id": 30,
      "date": "2018-11-05T02:26:28.347Z",
      "subtotal": 276.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 3
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 10
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 9
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 4
        }
      ],
      "origination": {
        "latitude": 41.479740035518795,
        "longitude": 81.29718478516433
      },
      "customer": {
        "id": 63,
        "name": "Customer63",
        "date": "2018-11-28T10:10:31.827Z",
        "location": {
          "latitude": 41.479740035518795,
          "longitude": 81.29718478516433
        }
      }
    }
  },
  {
    "id": 189,
    "date": "2018-11-28T21:41:52.985Z",
    "location": {
      "latitude": 41.497789383024276,
      "longitude": 80.54482801221856
    },
    "order": {
      "id": 84,
      "date": "2018-11-28T21:41:52.985Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.05562398720403,
        "longitude": 80.76804990701929
      },
      "customer": {
        "id": 27,
        "name": "Customer27",
        "date": "2018-11-02T21:06:12.531Z",
        "location": {
          "latitude": 41.05562398720403,
          "longitude": 80.76804990701929
        }
      }
    }
  },
  {
    "id": 190,
    "date": "2018-11-03T22:55:17.020Z",
    "location": {
      "latitude": 41.2909353950135,
      "longitude": 80.34179186599906
    },
    "order": {
      "id": 11,
      "date": "2018-11-03T22:55:17.020Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.338600694325805,
        "longitude": 80.44021287957197
      },
      "customer": {
        "id": 50,
        "name": "Customer50",
        "date": "2018-11-26T16:33:16.524Z",
        "location": {
          "latitude": 41.338600694325805,
          "longitude": 80.44021287957197
        }
      }
    }
  },
  {
    "id": 191,
    "date": "2018-11-10T17:58:09.936Z",
    "location": {
      "latitude": 41.12523018782472,
      "longitude": 80.72083656479599
    },
    "order": {
      "id": 68,
      "date": "2018-11-10T17:58:09.936Z",
      "subtotal": 177,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 7
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 9
        }
      ],
      "origination": {
        "latitude": 40.816279864797565,
        "longitude": 80.84023411039927
      },
      "customer": {
        "id": 1,
        "name": "Customer1",
        "date": "2018-11-13T00:16:40.256Z",
        "location": {
          "latitude": 40.816279864797565,
          "longitude": 80.84023411039927
        }
      }
    }
  },
  {
    "id": 192,
    "date": "2018-11-02T22:59:44.347Z",
    "location": {
      "latitude": 41.58217696395359,
      "longitude": 81.04357890948627
    },
    "order": {
      "id": 100,
      "date": "2018-11-02T22:59:44.347Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.06650204396437,
        "longitude": 81.44865053230758
      },
      "customer": {
        "id": 11,
        "name": "Customer11",
        "date": "2018-11-01T09:53:30.817Z",
        "location": {
          "latitude": 41.06650204396437,
          "longitude": 81.44865053230758
        }
      }
    }
  },
  {
    "id": 193,
    "date": "2018-11-22T17:19:06.742Z",
    "location": {
      "latitude": 41.04504925382012,
      "longitude": 80.94231361972392
    },
    "order": {
      "id": 6,
      "date": "2018-11-22T17:19:06.742Z",
      "subtotal": 94.5,
      "cart": [{
        "id": 1,
        "name": "Harar Highlands",
        "roast": "Dark",
        "origin": "ethiopia",
        "price": 10.5,
        "qty": 9
      }],
      "origination": {
        "latitude": 40.910441419818085,
        "longitude": 81.05255945675967
      },
      "customer": {
        "id": 98,
        "name": "Customer98",
        "date": "2018-11-08T02:55:22.445Z",
        "location": {
          "latitude": 40.910441419818085,
          "longitude": 81.05255945675967
        }
      }
    }
  },
  {
    "id": 194,
    "date": "2018-11-14T04:50:35.331Z",
    "location": {
      "latitude": 41.24837186493327,
      "longitude": 80.83606238548171
    },
    "order": {
      "id": 16,
      "date": "2018-11-14T04:50:35.331Z",
      "subtotal": 199,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 9
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 3
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 7
        }
      ],
      "origination": {
        "latitude": 41.27460401553063,
        "longitude": 80.38470398045283
      },
      "customer": {
        "id": 12,
        "name": "Customer12",
        "date": "2018-11-25T07:02:12.442Z",
        "location": {
          "latitude": 41.27460401553063,
          "longitude": 80.38470398045283
        }
      }
    }
  },
  {
    "id": 195,
    "date": "2018-11-11T02:16:50.748Z",
    "location": {
      "latitude": 41.51869815446647,
      "longitude": 80.52839063169706
    },
    "order": {
      "id": 22,
      "date": "2018-11-11T02:16:50.748Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.05912634941944,
        "longitude": 81.09607865515473
      },
      "customer": {
        "id": 30,
        "name": "Customer30",
        "date": "2018-11-05T13:09:09.015Z",
        "location": {
          "latitude": 41.05912634941944,
          "longitude": 81.09607865515473
        }
      }
    }
  },
  {
    "id": 196,
    "date": "2018-11-25T08:31:04.601Z",
    "location": {
      "latitude": 41.340053398227454,
      "longitude": 80.61957597983215
    },
    "order": {
      "id": 77,
      "date": "2018-11-25T08:31:04.601Z",
      "subtotal": 116,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 3
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 3
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 5
        }
      ],
      "origination": {
        "latitude": 40.827018774265056,
        "longitude": 81.1544911784252
      },
      "customer": {
        "id": 82,
        "name": "Customer82",
        "date": "2018-11-29T17:16:26.656Z",
        "location": {
          "latitude": 40.827018774265056,
          "longitude": 81.1544911784252
        }
      }
    }
  },
  {
    "id": 197,
    "date": "2018-11-23T07:04:46.267Z",
    "location": {
      "latitude": 41.20205937734608,
      "longitude": 81.0368983194747
    },
    "order": {
      "id": 35,
      "date": "2018-11-23T07:04:46.267Z",
      "subtotal": 280.5,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 4
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 7
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 2
        },
        {
          "id": 4,
          "name": "Morning Cup",
          "roast": "medium",
          "type": "columbia",
          "price": 10,
          "qty": 9
        },
        {
          "id": 5,
          "name": "Nairobi Explorer",
          "roast": "light",
          "type": "kenya",
          "price": 12,
          "qty": 4
        }
      ],
      "origination": {
        "latitude": 40.910328502467436,
        "longitude": 80.95407242890398
      },
      "customer": {
        "id": 6,
        "name": "Customer6",
        "date": "2018-11-04T03:38:11.000Z",
        "location": {
          "latitude": 40.910328502467436,
          "longitude": 80.95407242890398
        }
      }
    }
  },
  {
    "id": 198,
    "date": "2018-11-14T12:51:05.105Z",
    "location": {
      "latitude": 41.12553030360176,
      "longitude": 80.53060470475889
    },
    "order": {
      "id": 73,
      "date": "2018-11-14T12:51:05.105Z",
      "subtotal": 0,
      "cart": [],
      "origination": {
        "latitude": 41.09366516086242,
        "longitude": 81.36892287779374
      },
      "customer": {
        "id": 41,
        "name": "Customer41",
        "date": "2018-11-07T02:55:33.402Z",
        "location": {
          "latitude": 41.09366516086242,
          "longitude": 81.36892287779374
        }
      }
    }
  },
  {
    "id": 199,
    "date": "2018-11-14T04:50:35.331Z",
    "location": {
      "latitude": 41.50989026254884,
      "longitude": 81.35554983050797
    },
    "order": {
      "id": 16,
      "date": "2018-11-14T04:50:35.331Z",
      "subtotal": 199,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 9
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 3
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 7
        }
      ],
      "origination": {
        "latitude": 41.27460401553063,
        "longitude": 80.38470398045283
      },
      "customer": {
        "id": 12,
        "name": "Customer12",
        "date": "2018-11-25T07:02:12.442Z",
        "location": {
          "latitude": 41.27460401553063,
          "longitude": 80.38470398045283
        }
      }
    }
  },
  {
    "id": 200,
    "date": "2018-11-25T08:31:04.601Z",
    "location": {
      "latitude": 41.25541404528137,
      "longitude": 81.18942159844535
    },
    "order": {
      "id": 77,
      "date": "2018-11-25T08:31:04.601Z",
      "subtotal": 116,
      "cart": [{
          "id": 1,
          "name": "Harar Highlands",
          "roast": "Dark",
          "origin": "ethiopia",
          "price": 10.5,
          "qty": 3
        },
        {
          "id": 2,
          "name": "Kopi Tubruk",
          "roast": "Dark",
          "type": "sumatra",
          "price": 11.5,
          "qty": 3
        },
        {
          "id": 3,
          "name": "Cinnamon Roast",
          "roast": "light",
          "type": "peru",
          "price": 10,
          "qty": 5
        }
      ],
      "origination": {
        "latitude": 40.827018774265056,
        "longitude": 81.1544911784252
      },
      "customer": {
        "id": 82,
        "name": "Customer82",
        "date": "2018-11-29T17:16:26.656Z",
        "location": {
          "latitude": 40.827018774265056,
          "longitude": 81.1544911784252
        }
      }
    }
  }
];

var STARTDATE = new Date(2018, 10, 1);
var ENDDATE = new Date(2018, 10, 31);
const CENTEROFWORLD = {
  latitude: 41.2284,
  longitude: 80.9098
}
const SEARCHRADIUS = 50000;

export const PRODUCTS = [{
  id: 1,
  name: 'Harar Highlands',
  roast: 'Dark',
  origin: 'ethiopia',
  price: 10.50
}, {
  id: 2,
  name: 'Kopi Tubruk',
  roast: 'Dark',
  type: 'sumatra',
  price: 11.50
}, {
  id: 3,
  name: 'Cinnamon Roast',
  roast: 'light',
  type: 'peru',
  price: 10.00
}, {
  id: 4,
  name: 'Morning Cup',
  roast: 'medium',
  type: 'columbia',
  price: 10.00
}, {
  id: 5,
  name: 'Nairobi Explorer',
  roast: 'light',
  type: 'kenya',
  price: 12.00
}, {
  id: 6,
  name: 'Original Espresso',
  roast: 'medium',
  type: 'guatamala',
  price: 11.00
}]

export const INITIAL_STATE = {
  state: {
  orders: ordersArray,
  traffic: trafficArray,
  startDate: STARTDATE,
  endDate: ENDDATE,
  products: PRODUCTS
}
};

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function createCustomers(qty, startDate, endDate) {
  let newCustomers = [];

  for (let i = 1; i <= qty; i++) {
    let newCustomer = {
      id: i,
      name: "Customer" + i,
      date: randomDate(startDate, endDate),
      location: randomLocation.randomCirclePoint(CENTEROFWORLD, SEARCHRADIUS)
    }
    customers.push(newCustomer);
  }

  let customerString = '[';
  customers.forEach(c => {
    let newString = JSON.stringify(c) + ", "
    customerString += newString;
  });

  customerString += ']';


  fs.writeFile('customers2.json', customerString, (err) => {
    if (err) {
      throw err;
    }
  });
}

// createCustomers(100,STARTDATE,ENDDATE);

function createRandomCart(productArray) {
  let cart = [];
  const length = productArray.length;
  const itemCount = Math.floor(Math.random() * length);

  for (let i = 0; i < itemCount; i++) {
    let newProduct = {
      ...productArray[i],
      qty: Math.ceil(Math.random() * 10)
    }
    cart.push(newProduct);
  }
  return cart;
}

function calculateSubTotal(productObjArray) {
  let subTotal = 0;
  const length = productObjArray.length;
  for(let i = 0; i < length; i++){
    let product = productObjArray[i];
    subTotal += (product.price * product.qty)
  }
  return subTotal;
}

function createOrders(qty, startDate, endDate, inputCustomerArray) {
  let orders = [];
  const len = inputCustomerArray.length;
  
  for (let i = 1; i <= qty; i++) {
    const cart = createRandomCart(PRODUCTS);
    const subTotal = calculateSubTotal(cart);
    const randomIndex = Math.floor(Math.random() * len);
    let newCustomer = inputCustomerArray[randomIndex];
    let order = {
      id: i,
      date: randomDate(startDate, endDate),
      subtotal: subTotal,
      cart: cart,
      origination: newCustomer.location,
      customer: newCustomer
    }
    orders.push(order);
  }

  let orderString = '';
  orders.forEach(o =>{
    let newString = JSON.stringify(o) + ", "
    orderString += newString;
  });
  
  fs.writeFile('orders.json', orderString, (err) => {
    if (err) {
      throw err;
    }
  });

}

// createOrders(100, STARTDATE, ENDDATE, customersArray);


function createTraffic(qty, startDate, endDate, inputOrderArray) {

  const randomTraffic = createRandomTraffic(100, startDate, endDate);
  const startIndex = randomTraffic.length;
  const endIndex = randomTraffic.length + qty;

  let orderTraffic = [];
  const len = inputOrderArray.length;

  for (let i = startIndex; i <= endIndex; i++) {
    const orderIndex = Math.floor(Math.random()*len);
    const order = inputOrderArray[orderIndex];
    const randomIndex = Math.floor(Math.random() * len);
    let newTraffic = {
      id: i,
      date: order.date,
      location: randomLocation.randomCirclePoint(CENTEROFWORLD, SEARCHRADIUS),
      order: order
    }
    orderTraffic.push(newTraffic);
  }
  
  let traffic = [...randomTraffic, ...orderTraffic];

  let trafficString = '';
  traffic.forEach(o => {
    let newString = JSON.stringify(o) + ", "
    trafficString += newString;
  });

  fs.writeFile('traffic.json', trafficString, (err) => {
    if (err) {
      throw err;
    }
  });
}

function createRandomTraffic(qty, startDate, endDate) {
  let traffic = [];


  for (let i = 1; i <= qty; i++) {
   let newTraffic = {
      id: i,
      date: randomDate(startDate, endDate),
      location: randomLocation.randomCirclePoint(CENTEROFWORLD, SEARCHRADIUS),
      order: null
    }
    traffic.push(newTraffic);
  }
  return traffic;
}

// createTraffic(100, STARTDATE, ENDDATE, ordersArray);