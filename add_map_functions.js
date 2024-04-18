$(function () {
    $('#map-image').maphilight();

    // Variable to store default text
    var defaultText = "Hover over the area to see text.";
    var myDiv = document.getElementById('map-text-div');

    // Hover event for the image map area
$('area[shape="poly"]').hover(
    function () {
        var content = getContent(this); // Get HTML content from a function, you can customize this function
        var highlightImage = $(this).data('highlight-image');
        $('#map-text-div').css('display', ''); // Reset display property
        $('.custom-container2').css({
            'background-color': 'rgb(35, 35, 35)'
        });

    // Fade out the current elements
    $('#map-text-div h3, #background-image, #text-div').fadeOut(0, function () {
        if (this.id === 'background-image') {
            // Set the new background image and fade it in
            $(this).css({
                'background-color': '#253336',
                'background-image': 'url(' + highlightImage + ')',
            }).fadeIn(300);
        } else if (this.id === 'text-div') {
            // Fade out the current text content and update with the new content
            $(this).html(content).fadeIn(300);
        } else {
            // Remove default text and update background color
            $(this).html('').fadeIn(300);
        }
    });
        // Highlight the corresponding poly shape
        $(this).data('maphilight', {
            'strokeColor': 'F8CB2E',
            'strokeWidth': 0.1,
            'fillColor': 'F8CB2E', // Set default fill color to light yellow
            'fillOpacity': 0.5,
            'alwaysOn': false
        }).trigger('alwaysOn.maphilight');
    },
    function () {
        // Reset content and fade out the current background image
        $('#background-image').fadeOut(300, function () {
            // Remove the background image
            $(this).css({
                'background-color': '#253336',
                'background-image': 'none',
            }).fadeIn(300);
        });

        // Reset background color of the custom-container
        $('.custom-container2').css({
            'background-color': 'transparent'
        });

        // Fade out the current text content and update with the default content
        $('#text-div').fadeOut(0, function () {
            $(this).html('<p></p>').fadeIn(100);
        });

        // Remove highlighting from the poly shape
        $(this).data('maphilight', {}).trigger('alwaysOn.maphilight');

        $('#map-text-div').css('display', 'flex'); // Reset display property
        // Reset the default text content
        $('#map-text-div h3').fadeIn(400).html('Inuka has made impactful placements in emerging markets across the globe');
    }
);

// Hover event for Mauritius (circle)
$('area[alt="mauritius"][shape="circle"]').hover(
    function () {
        handleHover(this);
    },
    function () {
        handleHoverOut();
    }
);

// Hover event for Singapore (circle)
$('area[alt="singapore"][shape="circle"]').hover(
    function () {
        handleHover(this);
    },
    function () {
        handleHoverOut();
    }
);


// Hover event for Singapore (circle)
$('area[alt="philippines"][shape="circle"]').hover(
    function () {
        handleHover(this);
    },
    function () {
        handleHoverOut();
    }
);

function handleHover(area) {
    var content = getContent(area);
    var highlightImage = $(area).data('highlight-image') || '';

    $('#map-text-div').css('display', ''); // Reset display property
        $('.custom-container2').css({
            'background-color': 'rgb(35, 35, 35)'
        });

    // Fade out the current elements
    $('#map-text-div h3, #background-image, #text-div').fadeOut(0, function () {
        if (this.id === 'background-image') {
            // Set the new background image and fade it in
            $(this).css({
                'background-color': '#253336',
                'background-image': 'url(' + highlightImage + ')',
            }).fadeIn(300);
        } else if (this.id === 'text-div') {
            // Fade out the current text content and update with the new content
            $(this).html(content).fadeIn(300);
        } else {
            // Remove default text and update background color
            $(this).html('').fadeIn(300);
        }
    });

   
}

function handleHoverOut() {
    // Reset content and fade out the current background image
    $('#background-image').fadeOut(300, function () {
        // Remove the background image
        $(this).css({
            'background-color': '#253336',
            'background-image': 'none',
        }).fadeIn(300);
    });

    // Reset background color of the custom-container
    $('.custom-container2').css({
        'background-color': 'transparent'
    });

    // Fade out the current text content and update with the default content
    $('#text-div').fadeOut(0, function () {
        $(this).html('<p></p>').fadeIn(100);
    });

    // Remove highlighting from the circle shape

    $('#map-text-div').css('display', 'flex'); // Reset display property
    // Reset the default text content
    $('#map-text-div h3').fadeIn(400).html('Inuka has made impactful placements in emerging markets across the globe');
}


    // Function to get HTML content based on the area
    function getContent(area) {
        switch ($(area).attr('alt')) {
    case 'kenya':
        return '<h2 style="color: #efd181; font-weight: 500">Kenya</h2>' +
            '<p style="color: white; font-weight: bold;">Recent Placements</p>' +

            '<p style="color: white;"><span style="color: #efd181;">Role : </span>Development Director, East Africa</p>' +
            '<p><span style="color: #efd181;">Company type : </span>Green Hydrogen Developer</p>' +  '<br>' +

            '<p><span style="color: #efd181;">Role : </span>Associate Investment Director</p>' +
            '<p><span style="color: #efd181;">Company type : </span>Renewable Energy Fund</p>' + '<br>' +


            '<p><span style="color: #efd181;">Role : </span>Chief Operating Officer</p>' +
            '<p><span style="color: #efd181;">Company type : </span>Mini Grid Association</p>' + '<br>' +

            '<p><span style="color: #efd181;">Role : </span>Senior Associate</p>' +
            '<p><span style="color: #efd181;">Company type : </span>Renewable Energy Fund</p>' + '<br>' +
            
            '<p><span style="color: #efd181;">Role : </span>CEO</p>' +
            '<p><span style="color: #efd181;">Company type : </span>Hydropower Developer</p>';


    case 'france':
        return '<h2 style="color: #efd181; font-weight: 500;">France</h2>' +
                '<p style="color: white;"><span style="color: #efd181;">Role : </span> Environmental & Social Manager</p>' +
                '<p><span style="color: #efd181;">Company type : </span> Renewable Energy Developer</p>' ;

    case 'singapore':
        return '<h2 style="color: #efd181; font-weight: 500">Singapore</h2>' +
                '<p style="color: white; font-weight: bold;">Recent Placements</p>' +

            '<p style="color: white;"><span style="color: #efd181;">Role : </span>Investment Director</p>' +
            '<p><span style="color: #efd181;">Company type : </span> Renewable Energy Fund</p>' + '<br>' +

            '<p style="color: white;"><span style="color: #efd181;">Role : </span> Investment Associate </p>' +
            '<p><span style="color: #efd181;">Company type : </span> Infrastructure Fund</p>' + '<br>' +

            '<p style="color: white;"><span style="color: #efd181;">Role : </span> Business Development Manager </p>' +
            '<p><span style="color: #efd181;">Company type : </span> Renewable Energy IPP </p>' + '<br>' +
            
            '<p style="color: white;"><span style="color: #efd181;">Role : </span>Project Finance Manager</p>' +
            '<p><span style="color: #efd181;">Company type : </span> Renewable Energy Developer</p>'+ '<br>' +
            
            '<p style="color: white;"><span style="color: #efd181;">Role : </span>ESG Manager</p>' +
            '<p><span style="color: #efd181;">Company type : </span> Renewable Energy Fund</p>' ;

    case 'southafrica':
        return '<h2 style="color: #efd181; font-weight: 500">South Africa</h2>' +
            '<p style="color: white; font-weight: bold;">Recent Placements</p>' +

                '<p style="color: white;"><span style="color: #efd181;">Role : </span> Development Director, Southern Africa</p>' +
                '<p><span style="color: #efd181;">Company type : </span>Green Hydrogen Developer </p>' + '<br>' +

                '<p style="color: white;"><span style="color: #efd181;">Role : </span> Head of Procurement</p>' +
                '<p><span style="color: #efd181;">Company type : </span>  Renewable Energy IPP </p>' + '<br>' +

                '<p style="color: white;"><span style="color: #efd181;">Role : </span> Asset Director</p>' +
                '<p><span style="color: #efd181;">Company type : </span>Renewable Energy Fund </p>' + '<br>' +

                '<p style="color: white;"><span style="color: #efd181;">Role : </span>Non-Executive Director</p>' +
                '<p><span style="color: #efd181;">Company type : </span> Renewable Energy Fund</p>' + '<br>' +

                '<p style="color: white;"><span style="color: #efd181;">Role : </span> Investment Associate</p>' +
                '<p><span style="color: #efd181;">Company type : </span>Renewable Energy Fund </p>';

                

    case 'oman':
        return '<h2 style="color: #efd181; font-weight: 500">Oman</h2>' +
            '<p style="color: white; font-weight: bold;">Recent Placements</p>' +
            '<p style="color: white;"><span style="color: #efd181;">Role : </span> Financial Analyst</p>' +
            '<p><span style="color: #efd181;">Company type : </span>Global Energy Conglomerate</p>';

    case 'egypt':
        return '<h2 style="color: #efd181; font-weight: 500">Egypt</h2>' +
            '<p style="color: white; font-weight: bold;">Recent Placements</p>' +
            '<p style="color: white;"><span style="color: #efd181;">Role : </span>Business Development Manager</p>' +
            '<p><span style="color: #efd181;">Company type : </span> Renewable Energy Developer </p>';

    case 'india':
        return '<h3 style="color: #efd181; font-weight: 500">India</h3>' +
        '<p style="color: white; font-weight: bold;">Recent Placements</p>' +

        '<p style="color: white;"><span style="color: #efd181;">Role : </span>Country Manager</p>' +
        '<p><span style="color: #efd181;">Company type : </span> Renewable Energy IPP </p>' + '<br>' +

        '<p style="color: white;"><span style="color: #efd181;">Role : </span>Investment Director</p>' +
        '<p><span style="color: #efd181;">Company type : </span> Infrastructure Fund </p>' + '<br>' +

        '<p style="color: white;"><span style="color: #efd181;">Role : </span> Investment Associate </p>' +
        '<p><span style="color: #efd181;">Company type : </span> Investment Advisory Firm</p>';


    case 'nigeria':
        return '<h2 style="color: #efd181; font-weight: 500">Nigeria</h2>' +
            '<p style="color: white; font-weight: bold;">Recent Placements</p>' +

            '<p style="color: white;"><span style="color: #efd181;">Role : </span> Business Operations Director </p>' +
            '<p><span style="color: #efd181;">Company type : </span> Energy Access Fund </p>' + '<br>' +

            '<p style="color: white;"><span style="color: #efd181;">Role : </span> Chief Executive Officer </p>' +
            '<p><span style="color: #efd181;">Company type : </span>Mini Grid Association </p>' + '<br>' +

            '<p style="color: white;"><span style="color: #efd181;"> Role : </span> Head of Digital Infrastructure </p>' +
            '<p><span style="color: #efd181;">Company type : </span> Private Equity Fund Portfolio Company</p>';
            

    case 'ivorycoast':
        return '<h2 style="color: #efd181; font-weight: 500">Ivory Coast</h2>' +
            '<p style="color: white; font-weight: bold;">Recent Placements</p>' +
            '<p style="color: white;"><span style="color: #efd181;">Role : </span> Associate </p>' +
            '<p><span style="color: #efd181;">Company type : </span>  Financial Advisory Firm </p>';

    case 'morocco':
        return '<h2 style="color: #efd181; font-weight: 500">Morocco</h2>' +
            '<p style="color: white; font-weight: bold;">Recent Placements</p>' +
            '<p style="color: white;"><span style="color: #efd181;"> Role : </span>Senior Analyst</p>' +
            '<p><span style="color: #efd181;">Company type : </span>Infrastructure Fund</p>';
            

    case 'england':
        return '<h2 style="color: #efd181; font-weight: 500">England</h2>' +
            '<p style="color: white; font-weight: bold;">Recent Placements</p>' +
            
            '<p style="color: white;"><span style="color: #efd181;">Role : </span>  Head of Energy Trading </p>' +
            '<p><span style="color: #efd181;">Company type : </span> Green Hydrogen Developer</p>' + '<br>' +

            '<p style="color: white;"><span style="color: #efd181;">Role : </span> Principal ESG Consultant </p>' +
            '<p><span style="color: #efd181;">Company type : </span> Investment Advisory Firm</p>' + '<br>' +


            '<p style="color: white;"><span style="color: #efd181;">Role : </span> Senior BD Manager</p>' +
            '<p><span style="color: #efd181;">Company type : </span> Renewable Energy Developer</p>' + '<br>' +

            '<p style="color: white;"><span style="color: #efd181;">Role : </span> Consulting Manager, Climate Finance</p>' +
            '<p><span style="color: #efd181;">Company type : </span> Management Consulting Firm  </p>' + '<br>' +

            '<p style="color: white;"><span style="color: #efd181;">Role : </span>Engagement Manager, Climate Adaptation</p>' +
            '<p><span style="color: #efd181;">Company type : </span>  Management Consulting Firm</p>';

            

    case 'mauritius':
        return '<h2 style="color: #efd181; font-weight: 500">Mauritius</h2>' +
            '<p style="color: white; font-weight: bold;">Recent Placements</p>' +
            '<p style="color: white;"><span style="color: #efd181;">Role : </span> Financial Account</p>' +
            '<p><span style="color: #efd181;">Company type : </span>Renewable Energy Fund</p>';


    case 'philippines':
        return '<h2 style="color: #efd181; font-weight: 500">Philippines</h2>' +
            '<p style="color: white; font-weight: bold;">Recent Placements</p>' +
            '<p style="color: white;"><span style="color: #efd181;">Role : </span> General Counsel</p>' +
            '<p><span style="color: #efd181;">Company type : </span>Renewable Energy Developer</p>'  + '<br>' +

            '<p style="color: white;"><span style="color: #efd181;">Role : </span>Vice President</p>' +
            '<p><span style="color: #efd181;">Company type : </span>Infrastructure Fund</p>' ;

    case 'malaysia':
        return '<h2 style="color: #efd181; font-weight: 500">Malaysia</h2>' +
            '<p style="color: white; font-weight: bold;">Recent Placements</p>' +
            '<p style="color: white;"><span style="color: #efd181;">Role : </span> Head of Development</p>' +
            '<p><span style="color: #efd181;">Company type : </span>Renewable Energy Developer</p>';
    // Add more cases for other areas if needed

    default:
        return '<p>' + defaultText + '</p>';
}

    }

    // Function to get the corresponding poly area for a given circle area
    function getCorrespondingPoly(circleArea) {
        var correspondingPolyAlt = $(circleArea).attr('alt');
        return $('area[alt="' + correspondingPolyAlt + '"][shape="poly"]');
    }
});
