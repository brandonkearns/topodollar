'use strict';

angular.module('incomeMaps')
  .controller('StateCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    var infoOnStates = [
        {'name': 'Alabama',                         'abbreviation': 'AL'},
        {'name': 'Alaska',                          'abbreviation': 'AK'},
        {'name': 'American Samoa',                  'abbreviation': 'AS'},
        {'name': 'Arizona',                         'abbreviation': 'AZ'},
        {'name': 'Arkansas',                        'abbreviation': 'AR'},
        {'name': 'California',                      'abbreviation': 'CA'},
        {'name': 'Colorado',                        'abbreviation': 'CO'},
        {'name': 'Connecticut',                     'abbreviation': 'CT'},
        {'name': 'Delaware',                        'abbreviation': 'DE'},
        {'name': 'DC',                              'abbreviation': 'DC'},
        {'name': 'Florida',                         'abbreviation': 'FL'},
        {'name': 'Georgia',                         'abbreviation': 'GA'},
        {'name': 'Hawaii',                          'abbreviation': 'HI'},
        {'name': 'Idaho',                           'abbreviation': 'ID'},
        {'name': 'Illinois',                        'abbreviation': 'IL'},
        {'name': 'Indiana',                         'abbreviation': 'IN'},
        {'name': 'Iowa',                            'abbreviation': 'IA'},
        {'name': 'Kansas',                          'abbreviation': 'KS'},
        {'name': 'Kentucky',                        'abbreviation': 'KY'},
        {'name': 'Louisiana',                       'abbreviation': 'LA'},
        {'name': 'Maine',                           'abbreviation': 'ME'},
        {'name': 'Maryland',                        'abbreviation': 'MD'},
        {'name': 'Massachusetts',                   'abbreviation': 'MA'},
        {'name': 'Michigan',                        'abbreviation': 'MI'},
        {'name': 'Minnesota',                       'abbreviation': 'MN'},
        {'name': 'Mississippi',                     'abbreviation': 'MS'},
        {'name': 'Missouri',                        'abbreviation': 'MO'},
        {'name': 'Montana',                         'abbreviation': 'MT'},
        {'name': 'Nebraska',                        'abbreviation': 'NE'},
        {'name': 'Nevada',                          'abbreviation': 'NV'},
        {'name': 'Nh',                              'abbreviation': 'NH'},
        {'name': 'Nj',                              'abbreviation': 'NJ'},
        {'name': 'Nm',                              'abbreviation': 'NM'},
        {'name': 'Ny',                              'abbreviation': 'NY'},
        {'name': 'Nc',                              'abbreviation': 'NC'},
        {'name': 'Nd',                              'abbreviation': 'ND'},
        {'name': 'Ohio',                            'abbreviation': 'OH'},
        {'name': 'Oklahoma',                        'abbreviation': 'OK'},
        {'name': 'Oregon',                          'abbreviation': 'OR'},
        {'name': 'Pennsylvania',                    'abbreviation': 'PA'},
        {'name': 'Ri',                              'abbreviation': 'RI'},
        {'name': 'Sc',                              'abbreviation': 'SC'},
        {'name': 'Sd',                              'abbreviation': 'SD'},
        {'name': 'Tennessee',                       'abbreviation': 'TN'},
        {'name': 'Texas',                           'abbreviation': 'TX'},
        {'name': 'Utah',                            'abbreviation': 'UT'},
        {'name': 'Vermont',                         'abbreviation': 'VT'},
        {'name': 'Virginia',                        'abbreviation': 'VA'},
        {'name': 'Washington',                      'abbreviation': 'WA'},
        {'name': 'Wv',                              'abbreviation': 'WV'},
        {'name': 'Wisconsin',                       'abbreviation': 'WI'},
        {'name': 'Wyoming',                         'abbreviation': 'WY'}
    ];
    $scope.newStates = [
        {'name': 'Alabama',                         'abbreviation': 'AL'},
        {'name': 'Alaska',                          'abbreviation': 'AK'},
        {'name': 'American Samoa',                  'abbreviation': 'AS'},
        {'name': 'Arizona',                         'abbreviation': 'AZ'},
        {'name': 'Arkansas',                        'abbreviation': 'AR'},
        {'name': 'California',                      'abbreviation': 'CA'},
        {'name': 'Colorado',                        'abbreviation': 'CO'},
        {'name': 'Connecticut',                     'abbreviation': 'CT'},
        {'name': 'Delaware',                        'abbreviation': 'DE'},
        {'name': 'District Of Columbia',            'abbreviation': 'DC'},
        {'name': 'Federated States Of Micronesia',  'abbreviation': 'FM'},
        {'name': 'Florida',                         'abbreviation': 'FL'},
        {'name': 'Georgia',                         'abbreviation': 'GA'},
        {'name': 'Guam',                            'abbreviation': 'GU'},
        {'name': 'Hawaii',                          'abbreviation': 'HI'},
        {'name': 'Idaho',                           'abbreviation': 'ID'},
        {'name': 'Illinois',                        'abbreviation': 'IL'},
        {'name': 'Indiana',                         'abbreviation': 'IN'},
        {'name': 'Iowa',                            'abbreviation': 'IA'},
        {'name': 'Kansas',                          'abbreviation': 'KS'},
        {'name': 'Kentucky',                        'abbreviation': 'KY'},
        {'name': 'Louisiana',                       'abbreviation': 'LA'},
        {'name': 'Maine',                           'abbreviation': 'ME'},
        {'name': 'Marshall Islands',                'abbreviation': 'MH'},
        {'name': 'Maryland',                        'abbreviation': 'MD'},
        {'name': 'Massachusetts',                   'abbreviation': 'MA'},
        {'name': 'Michigan',                        'abbreviation': 'MI'},
        {'name': 'Minnesota',                       'abbreviation': 'MN'},
        {'name': 'Mississippi',                     'abbreviation': 'MS'},
        {'name': 'Missouri',                        'abbreviation': 'MO'},
        {'name': 'Montana',                         'abbreviation': 'MT'},
        {'name': 'Nebraska',                        'abbreviation': 'NE'},
        {'name': 'Nevada',                          'abbreviation': 'NV'},
        {'name': 'New Hampshire',                   'abbreviation': 'NH'},
        {'name': 'New Jersey',                      'abbreviation': 'NJ'},
        {'name': 'New Mexico',                      'abbreviation': 'NM'},
        {'name': 'New York',                        'abbreviation': 'NY'},
        {'name': 'North Carolina',                  'abbreviation': 'NC'},
        {'name': 'North Dakota',                    'abbreviation': 'ND'},
        {'name': 'Northern Mariana Islands',        'abbreviation': 'MP'},
        {'name': 'Ohio',                            'abbreviation': 'OH'},
        {'name': 'Oklahoma',                        'abbreviation': 'OK'},
        {'name': 'Oregon',                          'abbreviation': 'OR'},
        {'name': 'Palau',                           'abbreviation': 'PW'},
        {'name': 'Pennsylvania',                    'abbreviation': 'PA'},
        {'name': 'Puerto Rico',                     'abbreviation': 'PR'},
        {'name': 'Rhode Island',                    'abbreviation': 'RI'},
        {'name': 'South Carolina',                  'abbreviation': 'SC'},
        {'name': 'South Dakota',                    'abbreviation': 'SD'},
        {'name': 'Tennessee',                       'abbreviation': 'TN'},
        {'name': 'Texas',                           'abbreviation': 'TX'},
        {'name': 'Utah',                            'abbreviation': 'UT'},
        {'name': 'Vermont',                         'abbreviation': 'VT'},
        {'name': 'Virgin Islands',                  'abbreviation': 'VI'},
        {'name': 'Virginia',                        'abbreviation': 'VA'},
        {'name': 'Washington',                      'abbreviation': 'WA'},
        {'name': 'West Virginia',                   'abbreviation': 'WV'},
        {'name': 'Wisconsin',                       'abbreviation': 'WI'},
        {'name': 'Wyoming',                         'abbreviation': 'WY'}
    ];

    renderMap($stateParams.name);

    $scope.updateState = function(updateState) {

      renderMap(updateState);
    };

    function renderMap(state) { 
      console.log('State:');
      console.log(state);
      d3.json('/api/states/' + state, function(error, state) {
        console.log(state);
        var selectedState = _.find(infoOnStates, function(infoOnState) {
          return infoOnState.name === state.name;
        });

        var i;
        var width = 960,
            height = 1160;

        var quantize = d3.scale.quantize()
            .domain([0, 125000])
            .range(d3.range(9).map(function(i) { return 'q' + i + '-9'; }));

        var svg = d3.select('body').append('svg')
                .attr('width', width)
                .attr('height', height);


        var projection = d3.geo.mercator()
                     .center(state.data.transform.translate)
                     .scale(5000)
                     .translate([ width / 2 , height / 2 ]);


        var path = d3.geo.path()
               .projection(projection);
      svg.selectAll('path')
        .data(topojson.feature(state.data, state.data.objects[selectedState.abbreviation]).features)
        .enter().append('path')
        .attr('class', function(d) { return quantize(d.properties.income); })
        .attr('d', path)
        .on('click', function(d) {
          reportData(d);
          console.log(d.properties.income);
        });

        function reportData(tract) {
         d3.select('#databox').text(function() {
           return '$' + tract.properties.income;
         });
        }
      });
    }
    console.log('StateParams name');
    console.log($stateParams.name);


  }]);
