   var images = [
        "https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg",
        "https://mail.google.com/mail/u/0?ui=2&ik=fe79098d85&attid=0.1&permmsgid=msg-f:1706922402427431753&th=17b034e19fd7eb49&view=fimg&disp=thd&attbid=ANGjdJ_woi-1rNj_F0oO3zHAF_rKasOltQBeX9PVVjeyqszxX3nOxVp5eOV1ykUOn9H9P1zDjAybQSdLqUo295TMEE6kUa21QOANGRnPR8Ef9oca9_VnMq5R_LjVCz8&ats=2524608000000&sz=w1680-h939;",
        "https://mail.google.com/mail/u/0?ui=2&ik=fe79098d85&attid=0.1&permmsgid=msg-f:1706922602000154425&th=17b03510174dff39&view=fimg&disp=thd&attbid=ANGjdJ_75bMl6YLBFRxcqLajrek-harpFf0-b0e8_JCrfb5Rb4KO_2c-5CtgjtInIn67Y24KD-wUihZvkh20GDZI7sumQvS9zCuq5iPaIhsvYgjgJHvuqRNHd94gpqo&ats=2524608000000&sz=w1680-h939",
        "https://mail.google.com/mail/u/0?ui=2&ik=fe79098d85&attid=0.1&permmsgid=msg-f:1706922721425375257&th=17b0352be59a4019&view=fimg&disp=thd&attbid=ANGjdJ8ANF8ULQgQaWI7yF1xSVxWb04DqzI4ryxYFCl_eisluEsWuzhZBdY-ok10RRgH2ZnrhjekpgKF90mXZllPPKXs8gKYcgzNsibJ2WZOBYZIXpNcwLNo1-VRrb4&ats=2524608000000&sz=w1680-h939",
        "https://mail.google.com/mail/u/0?ui=2&ik=fe79098d85&attid=0.1&permmsgid=msg-f:1706922721425375257&th=17b0352be59a4019&view=fimg&disp=thd&attbid=ANGjdJ8ANF8ULQgQaWI7yF1xSVxWb04DqzI4ryxYFCl_eisluEsWuzhZBdY-ok10RRgH2ZnrhjekpgKF90mXZllPPKXs8gKYcgzNsibJ2WZOBYZIXpNcwLNo1-VRrb4&ats=2524608000000&sz=w1680-h939",
        "https://mail.google.com/mail/u/0?ui=2&ik=fe79098d85&attid=0.1&permmsgid=msg-f:1706922942532601690&th=17b0355f609ec75a&view=fimg&disp=thd&attbid=ANGjdJ9rawrkGh1e-3PJ-y7ehf7-oIf0dusUqOrhcNBTBanVFRnxhvO2AtuTBTyBSvPRQTbr3-DjrrfYYu2-Lr52ZgbxyEqtEIwsKDpHJ-WjG4IdnEh18tnm3LHHxAM&ats=2524608000000&sz=w1680-h939",
   ];

var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"]; 
var i = 0; function update() { i++; 
var numbers_of_family_member_in_array = 5 if(i > numbers_of_family_member_in_array ) { i = 0; } 
var updatedImage = images[i]; 
var updatedName = names[i]; document.getElementById("names").src = updatedImage; document.getElementById("names").innerHTML = updatedName; }