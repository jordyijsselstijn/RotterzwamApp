$("#valueTemp").noUiSlider({
    start: [ 18, 22 ],
    range: {
        'min': 10,
        'max': 30
    },
    connect: true,
    // Set some default formatting options.
    // These options will be applied to any Link
    // that doesn't overwrite these values.
    format: wNumb({
        decimals: 1
    })
});

// Any selector is acceptable, so we'll
// select both inputs.
$("#valueTemp").Link('lower').to($(".input1"), null, wNumb({
    // Prefix the value with an Euro symbol
    prefix: '',
    // Write the value without decimals
    decimals: 0,
    postfix: ''
}));

// Any selector is acceptable, so we'll
// select both inputs.
$("#valueTemp").Link('upper').to($(".input2"), null, wNumb({
    // Prefix the value with an Euro symbol
    prefix: '',
    // Write the value without decimals
    decimals: 0,
    postfix: ''
}));






$("#valueHum").noUiSlider({
    start: [ 65, 95 ],
    range: {
        'min': 0,
        'max': 100
    },
    connect: true,
    // Set some default formatting options.
    // These options will be applied to any Link
    // that doesn't overwrite these values.
    format: wNumb({
        decimals: 0
    })
});

// Any selector is acceptable, so we'll
// select both inputs.
$("#valueHum").Link('lower').to($(".input3"), null, wNumb({
    // Prefix the value with an Euro symbol
    prefix: '',
    // Write the value without decimals
    decimals: 0,
    postfix: ''
}));

// Any selector is acceptable, so we'll
// select both inputs.
$("#valueHum").Link('upper').to($(".input4"), null, wNumb({
    // Prefix the value with an Euro symbol
    prefix: '',
    // Write the value without decimals
    decimals: 0,
    postfix: ''
}));


function setText( value, handleElement, slider ){
    $("#someElement").text( value );
}

// Link accepts functions too.
// The arguments are the slider value,
// the .noUi-handle element and the slider instance.
$("#rangeSlider").Link('upper').to(setText);

// When you pass a string to a link,
// it will create a hidden input.
// You'll see the value appear when you
// alert the form contents.
$("#rangeSlider").Link('upper').to("inputName");


$('button').click(function(){
    // Use jQuery to make get the values from the form.
    // We'll decode the generated URL to keep it readable.
    alert(decodeURIComponent( $("sliderForm").serialize() ));

    // Don't submit the form.
    return false;
});