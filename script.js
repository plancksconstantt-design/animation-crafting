$(document).ready(function(){
     let current = 100;

    //+5/-5
    $('.btn-minus').click(() => {
         let nextNum = current -5;
    
    let currentDigits = current.toString().padStart(3, '0').split('');
    let nextDigits = nextNum.toString().padStart(3, '0').split('');
    
    for(let i = 0; i < 3; i++) {
        if(currentDigits[i] !== nextDigits[i]) {
            let posClass = '.pos-' + (i+1);
            let oldDigit = $(posClass);
            
            oldDigit.addClass('old');
            
            let newDigit = $('<div class="digit ' + posClass.substring(1) + ' new">' + 
                           nextDigits[i] + '</div>');
            
            $('.numbers').append(newDigit);
            
            setTimeout(() => {
                oldDigit.remove();
                newDigit.removeClass('new');
            }, 800);
        }
    }
    
    current = nextNum;
    })
    
    $('.btn-plus').click(() => {
         let nextNum = current +5;
    
    let currentDigits = current.toString().padStart(3, '0').split('');
    let nextDigits = nextNum.toString().padStart(3, '0').split('');
    
    for(let i = 0; i < 3; i++) {
        if(currentDigits[i] !== nextDigits[i]) {
            let posClass = '.pos-' + (i+1);
            let oldDigit = $(posClass);
            
            oldDigit.addClass('old');
            
            let newDigit = $('<div class="digit ' + posClass.substring(1) + ' new">' + 
                           nextDigits[i] + '</div>');
            
            $('.numbers').append(newDigit);
            
            setTimeout(() => {
                oldDigit.remove();
                newDigit.removeClass('new');
            }, 800);
        }
    }
    
    current = nextNum;
    })

//плавное изменение цифр
$('.btn-next').click(() => {
    let nextNum = current +1;
    
    let currentDigits = current.toString().padStart(3, '0').split('');
    let nextDigits = nextNum.toString().padStart(3, '0').split('');
    
    for(let i = 0; i < 3; i++) {
        if(currentDigits[i] !== nextDigits[i]) {
            let posClass = '.pos-' + (i+1);
            let oldDigit = $(posClass);
            
            oldDigit.addClass('old');
            
            let newDigit = $('<div class="digit ' + posClass.substring(1) + ' new">' + 
                           nextDigits[i] + '</div>');
            
            $('.numbers').append(newDigit);
            
            setTimeout(() => {
                oldDigit.remove();
                newDigit.removeClass('new');
            }, 800);
        }
    }
    
    current = nextNum;
});

//летающие цифры
function flyNumber(num){
        let span = $('<span>') //создаем span
        span.addClass('fly');

        if (num > 0){
            span.addClass('positive')
        } else {
            span.addClass('negative')
        }
        span.text(num);
        $('.numbers').append(span);



        setTimeout(() => {
            let leftPosition = num > 0 ? 300 : 100;

            span.css('top', -250);
            span.css('left', leftPosition);
            span.css('opacity', 0);
        }, 100);
    }

//снег
$(".btn-snow").click(function(){

         const snowflake = $('<img class="snowflake" src="snow.png">');
         const leftPosition = Math.random() * (window.innerWidth - 30);

         // Устанавливаем начальную позицию
            snowflake.css('left', leftPosition)
            snowflake.css('top',0)

         $('body').append(snowflake);
          snowflake.animate({
            'top': window.innerHeight,
            'opacity': 0
        }, 3000, function() {
            $(this).remove();
        });

    })
    

$(".btn-snow")
    .mousedown(function() {
        $(this).addClass("pressed");
    })
    .mouseup(function() {
        $(this).removeClass("pressed");
    });

})

