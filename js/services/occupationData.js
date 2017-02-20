app.service("OccupationDataService", function($http, $q) {
    var deferred;

    var computerProgrammerData = `
{
	"data": {
		"occupation": {
			"onet": "15-1131",
			"title": "Computer Programmers"
		},
		"region": {
			"type": "MSA",
			"id": "42660",
			"title": "Seattle-Tacoma-Bellevue, WA"
		},
		"summary": {
			"jobs": {
				"year": 2015,
				"regional": 12352,
				"national_avg": 6501
			},
			"jobs_growth": {
				"start_year": 2013,
				"end_year": 2018,
				"regional": 10.2,
				"national_avg": 8.5
			},
			"earnings": {
				"regional": 57.24,
				"national_avg": 38.20
			}
		},
		"trend_comparison": {
			"start_year": 2013,
			"end_year": 2018,
			"regional": [
				11904,
				12384,
				12352,
				12680,
				12920,
				13114
			],
			"state": [
				13103,
				13598,
				13599,
				13968,
				14244,
				14469
			],
			"nation": [
				300651,
				307024,
				314154,
				318998,
				326205
			]
		},
		"employing_industries": {
			"year": 2015,
			"jobs": 12352,
			"industries": [
				{
					"naics": "511210",
					"title": "Software Publishers",
					"in_occupation_jobs": 4654,
					"jobs": 52886
				},
				{
					"naics": "541512",
					"title": "Computer Systems Design Services",
					"in_occupation_jobs": 1873,
					"jobs": 20582
				},
				{
					"naics": "541512",
					"title": "Custom Computer Programming Services",
					"in_occupation_jobs": 1388,
					"jobs": 15252
				},
				{
					"naics": "541512",
					"title": "Aircraft Manufacturing",
					"in_occupation_jobs": 444,
					"jobs": 71612
				},
				{
					"naics": "541512",
					"title": "Other Computer Related Services",
					"in_occupation_jobs": 296,
					"jobs": 3245
				}
			]
		}
	}
}`;

    var graphicDesignerTestData = `
{
	"data": {
    "occupation": {
        "onet": "14-2567",
        "title": "Graphic Designers"
    },
    "region": {
        "type": "MSA",
        "id": "35204",
        "title": "New York"
    },
    "summary": {
        "jobs": {
            "year": 2016,
            "regional": 9671,
            "national_avg": 3194
        },
        "jobs_growth": {
            "start_year": 2012,
            "end_year": 2019,
            "regional": 6.5,
            "national_avg": 4.2
        },
        "earnings": {
            "regional": 52.69,
            "national_avg": 32.16
        }
    },
    "trend_comparison": {
        "start_year": 2012,
        "end_year": 2019,
        "regional": [
            9832,
            10238,
            10238,
            10408,
            10732,
            10824,
            11486,
            12847
        ],
        "state": [
            10286,
            10783,
            10835,
            11467,
            12893,
            13285,
            16837,
            17395
        ],
        "nation": [
            281304,
            294381,
            301356,
            345692,
            360283,
            402394,
            412907,
            414938
        ]
    },
    "employing_industries": {
        "year": 2016,
        "jobs": 10732,
        "industries": [
            {
                "naics": "284742",
                "title": "Design Agencies",
                "in_occupation_jobs": 3928,
                "jobs": 43987
            },
            {
                "naics": "901734",
                "title": "Publishing Companies",
                "in_occupation_jobs": 998,
                "jobs": 12987
            },
            {
                "naics": "843976",
                "title": "Consulting Companies",
                "in_occupation_jobs": 730,
                "jobs": 10983
            },
            {
                "naics": "217865",
                "title": "Web Development Agencies",
                "in_occupation_jobs": 5932,
                "jobs": 73204
            },
            {
                "naics": "457384",
                "title": "Sales & Marketing Agencies",
                "in_occupation_jobs": 234,
                "jobs": 5931
            }
        ]
    }
}
}`;

    function handleData(response) {
        deferred.resolve(response);
    }

    function handleError(response) {
        console.error("Unable to correctly fetch data");
        console.error(response);
    }

    this.getOccupationData = function(occupationDataRequest) {
        deferred = $q.defer();

        // In real world applications, we would do this to request data from an api
        // $http.post("/occupation/get", occupationDataRequest).then(handleData, handleError);
        
        // We are justs mocking the request for now
        setTimeout(function() {
            if (occupationDataRequest.occupationID === "15-1131") {
                handleData(JSON.parse(computerProgrammerData));
            } else {
                handleData(JSON.parse(graphicDesignerTestData));
            }
            
        }, 400);
        
        return deferred.promise;
    };
    
});