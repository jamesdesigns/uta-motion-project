const observableModule = require("tns-core-modules/data/observable");

function HomeItemsViewModel() {
    const viewModel = observableModule.fromObject({

        items: [
            {
                name: "Ogden",
                station: "Ogden Station",
                address: "2393 South Wall Avenue",
                city: "Ogden, UT 84511",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: { 
                    NBtime: `        5:24 AM      6:24 AM      6:54 AM \n\n        7:24 AM      7:54 AM      8:24 AM\n\n        8:54 AM      9:24 AM      NO STOP\n\n        10:24 AM    NO STOP   11:24 AM \n\n        12:24 PM    1:24 PM      2:24 PM \n\n        3:24 PM      3:54 PM      4:24 PM\n\n        4:54 PM      5:24 PM      5:54 PM\n\n        6:24 PM      6:54 PM      7:24 PM\n\n        7:54 PM      NO STOP   8:54 PM\n\n        NO STOP   9:54 PM     10:54 PM`,
                    SBtime: "        NO STOP   NO STOP   5:07 AM \n\n        5:37 AM      6:07 AM      6:37 AM\n\n        7:07 AM      7:37 AM      8:07 AM\n\n        8:37 AM      9:37 AM      10:37 AM\n\n        11:37 AM    12:37 PM    1:37 PM\n\n        NO STOP   2:37 PM      3:07 PM\n\n        3:37 PM      4:07 PM      4:37 PM\n\n        5:07 PM      5:37 PM      6:07 PM\n\n        6:37 PM      7:07 PM      8:07 PM\n\n        9:07 PM   10:07 PM   10:37 PM\n\n        11:07 PM"
                },
            },
            {
                name: "Roy",
                station: "Roy Station",
                address: "4155 S. Sandridge Dr.",
                city: "Roy, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        5:16 AM      6:16 AM      6:46 AM\n\n        7:16 AM      7:46 AM      8:16 AM\n\n        8:46 AM      9:16 AM      NO STOP\n\n        10:16 AM    NO STOP   11:16 AM\n\n        12:16 PM    1:16 PM      2:16 PM\n\n        3:16 PM      3:46 PM      4:16 PM\n\n        4:46 PM      5:16 PM      5:46 PM\n\n        6:16 PM      6:46 PM      7:16 PM\n\n        7:46 PM      NO STOP   8:46 PM\n\n        NO STOP   9:46 PM     10:46 PM\n\n        11:46 PM   12:16 PM",
                    SBtime: "        NO STOP   NO STOP   5:16 AM\n\n        5:46 AM      6:16 AM      6:46 PM\n\n        7:16 AM      7:46 AM      8:16 AM\n\n        8:46 AM      9:46 AM      10:46 AM\n\n        11:46 AM    12:46 PM    1:46 PM\n\n        NO STOP   2:46 PM      3:16 PM\n\n        3:46 PM      4:16 PM      4:46 PM\n\n        5:16 PM      5:46 PM      6:16 PM\n\n        6:46 PM      7:16 PM      8:16 PM\n\n        9:16 PM      10:16 PM    10:46 PM\n\n        11:16 PM"
                },
            },
            {
                name: "Clearfield",
                station: "Clearfield Station",
                address: "1250 S. State St.",
                city: "Clearfield, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        5:07 AM      6:07 AM      6:37 AM\n\n        7:07 AM      7:37 AM      8:07 AM\n\n        8:37 AM      9:07 AM      NO STOP\n\n        10:07 AM    NO STOP   11:07 AM\n\n        12:07 PM    1:07 PM      2:07 PM\n\n        3:07 PM      3:37 PM      4:07 PM\n\n        4:37 PM      5:07 PM      5:37 PM\n\n        6:07 PM      6:37 PM      7:07 PM\n\n        7:37 PM      NO STOP   8:37 PM\n\n        NO STOP   9:37 PM      10:37 PM\n\n        11:37 PM    12:07 AM",
                    SBtime: "        NO STOP   NO STOP   5:25 AM \n\n        5:55 AM      6:25 AM      6:55 AM\n\n        7:25 AM      7:55 AM      8:25 AM\n\n        8:55 AM      9:55 AM      10:55 AM\n\n        11:55 AM    12:55 PM    1:55 PM\n\n        NO STOP   2:55 PM      3:25 PM\n\n        3:55 PM      4:25 PM     4:55 PM\n\n        5:25 PM      5:55 PM      6:25 PM\n\n        6:55 PM      7:25 PM      8:25 PM\n\n        9:25 PM      10:25 PM    10:55 PM\n\n        11:25 PM"
                },            
            },
            {
                name: "Layton",
                station: "Layton Station",
                address: "150 S. Main St.",
                city: "Layton, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        5:02 AM      6:02 AM      6:32 AM\n\n        7:02 AM      7:32 AM      8:02 AM\n\n        8:32 AM      9:02 AM      NO STOP\n\n        10:02 AM    NO STOP   11:02 AM\n\n        12:02 PM    1:02 PM      2:02 PM\n\n        3:02 PM      3:32 PM      4:02 PM\n\n        4:32 PM      5:02 PM      5:32 PM\n\n        6:02 PM      6:32 PM      7:02 PM\n\n        7:32 PM      NO STOP   8:32 PM\n\n        NO STOP   9:32 PM     10:32 PM\n\n        11:32 PM   12:02 AM",
                    SBtime: "        NO STOP   NO STOP   5:32 AM\n\n        6:02 AM      6:32 AM      7:02 AM\n\n        7:32 AM      8:02 AM      8:32 AM\n\n        9:02 AM      10:02 AM    11:02 AM\n\n        12:02 PM    1:02 PM      2:02 PM\n\n        NO STOP   3:02 PM      3:32 PM\n\n        4:02 PM      4:32 PM      5:02 PM\n\n        5:32 PM      6:02 PM      6:32 PM\n\n        7:02 PM      7:32 PM      8:32 PM\n\n        9:32 PM     10:32 PM     11:02 PM\n\n        11:32 PM"
                },            
            },
            {
                name: "Farmington",
                station: "Farmington Station",
                address: "450 N. 850 W.",
                city: "Farmington, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        4:53 AM      5:53 AM      6:23 AM\n\n        6:53 AM      7:23 AM      7:53 AM\n\n        8:23 AM      8:53 AM      NO STOP\n\n        9:53 AM      NO STOP   10:53 AM\n\n        11:53 AM    12:53 PM    1:53 PM\n\n        2:53 PM      3:23 PM      3:53 PM\n\n        4:23 PM      4:53 PM      5:23 PM\n\n        5:53 PM      6:23 PM      6:53 PM\n\n        7:23 PM      NO STOP   8:23 PM\n\n        NO STOP   9:23 PM      10:23 PM\n\n        11:23 PM    11:53 PM",
                    SBtime: "        NO STOP   NO STOP    5:39 AM\n\n        6:09 AM      6:39 AM       7:09 AM\n\n        7:39 AM      8:09 AM       8:39 AM\n\n        9:09 AM      10:09 AM     11:09 AM\n\n        12:09 PM    1:09 PM       2:09 PM\n\n        NO STOP   3:09 PM       3:39 PM\n\n        4:09 PM      4:39 PM       5:09 PM\n\n        5:39 PM      6:09 PM       6:39 PM\n\n        7:09 PM      7:39 PM       8:39 PM\n\n        9:39 PM      10:39 PM     11:09 PM\n\n        11:39 PM"
                },            
            },
            {
                name: "Woods Cross",
                station: "Wood Cross Station",
                address: "750 S. 800 W.",
                city: "Woods Cross, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        4:42 AM      5:42 AM      6:12 AM\n\n        6:42 AM      7:12 AM      7:42 AM\n\n        8:12 AM      8:42 AM      NO STOP\n\n        9:42 AM      NO STOP   10:42 AM\n\n        11:42 AM    12:42 PM    1:42 PM\n\n        2:42 PM      3:12 PM      3:42 PM\n\n        4:12 PM      4:42 PM      5:12 PM\n\n        5:42 PM      6:12 PM      6:42 PM\n\n        7:12 PM      NO STOP   8:12 PM\n\n        NO STOP   9:12 PM      10:12 PM\n\n        11:12 PM    11:42 PM",
                    SBtime: "        NO STOP   NO STOP    5:50 AM\n\n        6:20 AM      6:50 AM       7:20 AM\n\n        7:50 AM      8:20 AM       8:50 AM\n\n        9:20 AM      10:20 AM     11:20 AM\n\n        12:20 PM    1:20 PM       2:20 PM\n\n        NO STOP   3:20 PM       3:50 PM\n\n        4:20 PM      4:50 PM       5:20 PM\n\n        5:50 PM      6:20 PM       6:50 PM\n\n        7:20 PM      7:50 PM       8:50 PM\n\n        9:50 PM     10:50 PM      11:20 PM\n\n        11:50 PM"
                },            
            },
            {
                name: "North Temple",
                station: "North Temple Station",
                address: "500 W. North Temple",
                city: "Salt Lake City, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        4:31 AM      5:31 AM      6:01 AM\n\n        6:31 AM      7:01 AM      7:31 AM\n\n        8:01 AM      8:31 AM      9:01 AM\n\n        9:31 AM      10:01 AM    10:31 AM\n\n        11:31 AM    12:31 PM    1:31 PM\n\n        2:31 PM      3:01 PM      3:31 PM\n\n        4:01 PM      4:31 PM      5:01 PM\n\n        5:31 PM      6:01 PM      6:31 PM\n\n        7:01 PM      7:31 PM      8:01 PM\n\n        8:31 PM      9:01 PM      10:01 PM\n\n        11:01 PM    11:31 PM",
                    SBtime: "        5:03 AM      5:33 AM      6:03 AM\n\n        6:33 AM      7:03 AM      7:33 AM\n\n        8:03 AM      8:33 AM      9:03 AM\n\n        9:33 AM      10:33 AM    11:33 AM\n\n        12:33 PM    1:33 PM      2:33 PM\n\n        3:03 PM      3:33 PM      4:03 PM\n\n        4:33 PM      5:03 PM      5:33 PM\n\n        6:03 PM      6:33 PM      7:03 PM\n\n        7:33 PM      8:03 PM      9:03 PM\n\n        10:03 PM   11:03 PM    11:33 PM\n\n        12:03 AM"
                },            
            },
            {
                name: "Salt Lake Central",
                station: "Salt Lake Central",
                address: "250 S. 600 W.",
                city: "Salt Lake City, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        4:25 AM      5:25 AM      5:55 AM\n\n        6:25 AM      6:55 AM      7:25 AM\n\n        8:25 AM      8:55 AM      9:25 AM\n\n       9:55 AM      10:25 AM     11:25 AM\n\n       12:25 PM    1:25 PM       2:25 PM\n\n       2:55 PM      3:25 PM       3:55 PM\n\n       4:25 PM      4:55 PM       5:25 PM\n\n       5:55 PM      6:25 PM      6:55 PM\n\n       7:25 PM      7:55 PM      8:25 PM\n\n       8:55 PM      9:55 PM      10:55 PM\n\n       11:25 PM",
                    SBtime: "        5:06 AM      5:36 AM      6:06 AM\n\n        6:36 AM      7:06 AM      7:36 AM\n\n        8:06 AM      8:36 AM      9:06 AM\n\n       9:36 AM      10:36 AM     11:36 AM\n\n       12:36 PM    1:36 PM       2:36 PM\n\n       3:06 PM      3:36 PM       4:06 PM\n\n       4:36 PM      5:06 PM       5:36 PM\n\n       6:06 PM      6:36 PM      7:06 PM\n\n       7:36 PM      8:06 PM      9:06 PM\n\n       10:06 PM   11:06 PM    11:36 PM\n\n       12:06 AM"
                },            
            },
            {
                name: "Murray Central Station",
                station: "Murray Central Station",
                address: "140 W. Vine St.",
                city: "Murray, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        NO STOP   NO STOP    5:46 AM\n\n        6:16 AM      6:46 AM       7:16 AM\n\n        7:46 AM      8:16 AM       8:46 AM\n\n        9:16 AM      9:46 AM       10:16 AM\n\n        11:16 PM    12:16 PM     1:16 PM\n\n        2:16 PM      NO STOP    3:16 PM\n\n        NO STOP   4:16 PM       4:46 PM\n\n        5:16 PM      5:46 PM       6:16 PM\n\n        6:46 PM      7:16 PM       7:46 PM\n\n        8:16 PM      8:46 PM       9:46 PM\n\n        10:46 PM",
                    SBtime: "        5:06 AM      5:36 AM       6:06 AM\n\n        6:36 AM      7:06 AM       7:36 AM\n\n        8:06 AM      8:36 AM       9:06 AM\n\n        9:36 AM      10:36 AM     11:36 AM\n\n        12:36 PM    1:36 PM       2:36 PM\n\n        3:06 PM      3:36 PM       4:06 PM\n\n        4:36 PM      5:06 PM       5:36 PM\n\n        6:06 PM      6:36 PM       7:06 PM\n\n        7:36 PM      8:06 PM       9:06 PM\n\n        10:06 PM   11:06 PM     11:36 PM\n\n        12:06 AM"
                },            
            },
            {
                name: "South Jordan Station",
                station: "South Jordan Station",
                address: "10351 South Jordan Gateway",
                city: "South Jordan, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: { 
                    NBtime: "        NO STOP   NO STOP    5:36 AM\n\n        6:06 AM      6:36 AM       7:06 AM\n\n        7:36 AM      8:06 AM       8:36 AM\n\n        9:06 AM      9:36 AM       10:06 AM\n\n        11:06 PM    12:06 PM     1:06 PM\n\n        2:06 PM      NO STOP    3:06 PM\n\n        NO STOP   4:06 PM       4:36 PM\n\n        5:06 PM      5:36 PM       6:06 PM\n\n        6:36 PM      7:06 PM       7:36 PM\n\n        8:06 PM      8:36 PM       9:36 PM\n\n        10:36 PM    11:06 PM",
                    SBtime: "        5:25 AM      5:55 AM       6:25 AM\n\n        6:55 AM      7:25 AM       7:55 AM\n\n        8:25 AM      8:55 AM       NO STOP\n\n        9:55 AM      10:55 AM     11:55 AM\n\n        12:55 PM    1:55 PM       2:55 PM\n\n        3:25 PM      3:55 PM       4:25 PM\n\n        4:55 PM      5:25 PM       5:55 PM\n\n        6:25 PM      6:55 PM       7:25 PM\n\n        NO STOP   8:25 PM       9:25 PM\n\n        10:25 PM    11:25 PM     11:55 PM\n\n        NO STOP"
                },            
            },
            {
                name: "Draper Station",
                station: "Draper Station",
                address: "12997 S. FrontRunner Blvd.",
                city: "Draper, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        5:31 AM      6:01 AM       6:31 AM\n\n        7:01 AM      7:31 AM       8:10 AM\n\n        8:31 AM      9:01 AM       NO STOP\n\n        10:01 AM    11:01 AM     12:01 AM\n\n        1:01 PM      2:01 PM       3:01 PM\n\n        3:31 PM      4:01 PM       4:31 PM\n\n        5:01 PM      5:31 PM       6:01 PM\n\n        6:31 PM      7:01 PM       7:31 PM\n\n        NO STOP   8:31 PM       9:31 PM\n\n        10:31 PM    11:31 PM     12:01 AM\n\n        NO STOP",
                    SBtime: "        NO STOP   NO STOP     5:31 AM\n\n        6:01 AM      6:31 AM        7:01 AM \n\n        7:31 AM      8:01 AM        8:31 AM\n\n        9:01 AM      9:31 AM        10:01 AM\n\n        11:01 AM    12:01 PM      1:01 PM\n\n        2:01 PM      NO STOP     3:01 PM\n\n        NO STOP   4:01 PM        4:31 PM\n\n        5:01 PM      5:31 PM        6:01 PM\n\n        6:31 PM      7:01 PM        7:31 PM\n\n        8:01 PM      8:31 PM        9:31 PM\n\n        10:31 PM    11:01 PM      11:31 PM\n\n        12:31 AM    1:31 AM        2:01 AM"
                },            
            },
            {
                name: "Lehi Station",
                station: "Lehi Station",
                address: "3101 N. Ashton Blvd.",
                city: "Lehi, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        NO STOP   NO STOP     5:16 AM\n\n        5:46 AM      6:16 AM        6:46 AM\n\n        7:16 AM      7:46 AM        8:16 AM\n\n        8:46 AM      9:16 AM        9:46 AM\n\n        10:46 AM    11:46 AM      12:46 PM\n\n        1:46 PM      NO STOP     2:46 PM\n\n        NO STOP   3:46 PM        4:16 PM\n\n        4:46 PM      5:16 PM        5:46 PM\n\n        6:16 PM      6:46 PM        7:16 PM\n\n        7:46 PM      8:16 PM        9:16 PM\n\n        10:16 PM   10:46 PM      11:16 PM\n\n        12:16 AM   1:16 AM   1:46 AM",
                    SBtime: "        5:45 AM      6:15 AM        6:45 AM\n\n        7:15 AM      7:45 AM        8:15 AM\n\n        8:45 AM      9:15 AM        NO STOP\n\n        10:15 AM   11:15 AM       12:15 PM\n\n        1:15 PM     2:15 PM         3:15 PM\n\n        3:45 PM     4:15 PM         4:45 PM\n\n        5:15 PM     5:45 PM         4:31 PM\n\n        5:01 PM     5:31 PM         6:01 PM\n\n        6:31 PM     7:01 PM         7:31 PM\n\n        8:01 PM     8:31 PM         9:31 PM\n\n        10:31 PM   11:01 PM      11:31 PM\n\n        12:31 AM   1:31 AM        2:01 AM"
                },            
            },
            {
                name: "American Fork Station",
                station: "American Fork Station",
                address: "782 W. 200 S.",
                city: "American Fork, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        NO STOP   NO STOP     5:06 AM\n\n        5:36 AM      6:06 AM        6:36 AM\n\n        7:06 AM      7:36 AM        8:06 AM\n\n        8:36 AM      9:06 AM        9:36 AM\n\n        10:36 AM   11:36 AM       12:36 PM\n\n        1:36 PM      NO STOP     3:36 PM\n\n        4:06 PM      4:36 PM        5:06 PM\n\n        5:36 PM      6:06 PM        6:36 PM\n\n        7:06 PM      7:36 PM        8:06 PM\n\n        9:06 PM      10:06 PM     10:36 PM\n\n        11:06 PM    12:06 AM     1:06 AM\n\n        1:36 AM  ",
                    SBtime: "        5:52 AM       6:22 AM       6:52 AM\n\n        7:22 AM      7:52 AM        8:22 AM\n\n        8:52 AM      9:22 AM        NO STOP\n\n        10:22 AM   11:22 AM      12:22 PM\n\n        1:22 PM      2:22 PM       3:22 PM\n\n        3:52 PM      4:22 PM       4:52 PM\n\n        5:22 PM      5:52 PM       6:22 PM\n\n        6:52 PM      7:22 PM       7:52 PM\n\n        NO STOP   8:52 PM       9:52 PM\n\n        10:52 PM   11:52 PM      12:22 AM\n\n        NO STOP"
                },
            },
            {
                name: "Orem Central",
                station: "Orem Central Station",
                address: "1350 W. 900 S.",
                city: "Orem, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        NO STOP   NO STOP   4:56 AM\n\n        5:26 AM      5:56 AM      6:26 AM\n\n        5:56 AM      7:26 AM      7:56 AM\n\n        8:26 AM      8:56 AM      9:26 AM\n\n        10:26 AM   11:26 AM     12:26 PM\n\n        1:26 PM      NO STOP   2:26 PM\n\n        NO STOP   3:26 PM      3:56 PM\n\n        4:26 PM      4:56 PM      5:26 PM\n\n        5:56 PM      6:26 PM      6:56 PM\n\n        7:26 PM      7:56 PM      8:56 PM\n\n        9:56 PM     10:26 PM     10:56 PM\n\n        11:56 PM   12:56 AM   1:26 AM",
                    SBtime: "        6:05 AM      6:35 AM       7:05 AM\n\n        7:35 AM      8:05 AM       8:35 AM\n\n        9:05 AM      9:35 AM       NO STOP\n\n        10:35 AM   11:35 AM      12:35 PM\n\n        1:35 PM      2:35 PM       3:35 PM\n\n        4:05 PM      4:35 PM       5:05 PM\n\n        5:35 PM      6:05 PM       6:35 PM\n\n        7:05 PM      7:35 PM       8:05 PM\n\n        NO STOP   9:05 PM      10:05 PM\n\n        11:05 PM   12:05 PM     12:35 AM\n\n        NO STOP"
                },
            },
            {
                name: "Provo Station",
                station: "Provo Station",
                address: "690 S. University Ave.",
                city: "Provo, UT",
                url: "https://www.rideuta.com",
                northBound: "North Bound",
                southBound: "South Bound",
                favorite: false,
                routes: {
                    NBtime: "        NO STOP   NO STOP   4:47 AM\n\n        5:17 AM      5:47 AM      6:17 AM\n\n        6:47 AM      7:17 AM      7:47 AM\n\n        8:17 AM      8:47 AM      9:17 AM\n\n        10:17 AM   11:17 AM    12:17 PM\n\n        1:17 PM      NO STOP   2:17 PM\n\n        NO STOP   3:17 PM      3:47 PM\n\n        4:17 PM      4:47 PM      5:17 PM\n\n        5:47 PM      6:17 PM      6:47 PM\n\n        7:17 PM      7:47 PM      8:47 PM\n\n        9:47 PM     10:17 PM     10:47 PM\n\n        11:47 PM   12:47 AM   1:17 AM",
                    SBtime: "        6:12 AM      6:42 AM      7:12 AM\n\n        7:42 AM      8:12 AM      8:42 AM\n\n        9:12 AM      9:42 AM      NO STOP\n\n        10:42 AM   11:42 AM     12:42 PM\n\n        1:42 PM      2:42 PM       3:42 PM\n\n        4:12 PM      4:42 PM       5:12 PM\n\n        5:42 PM      6:12 PM       6:42 PM\n\n        7:12 PM      7:42 PM       8:12 PM\n\n        NO STOP   9:12 PM      10:12 PM\n\n        11:12 PM   12:12 AM     12:42 AM\n\n        NO STOP"
                },
            }
        ]
    });

    return viewModel;
}

module.exports = HomeItemsViewModel;
