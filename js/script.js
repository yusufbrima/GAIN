
// Languge and Internationalization Settings 
let language; 
function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({ 
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url:  '/language/' +  localStorage.getItem('language') + '.json', 
    dataType: 'json', 
    async: false, 
    dataType: 'json', 
    success: function (lang) { 
        language = lang
    } });
    
    return language;
}
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    language = getLanguage();
    // console.log(language.values.Empower);
    $('#lang_selector').text(language.lang);
    $('#lang_selector2').text(language.lang);
    $(".framework_menu").text(language.menu.framework);
    $(".cosponsors_menu").text(language.menu.cosponsors);
    $(".mentor_menu").text(language.menu.mentor);
    $(".eligibility_menu").text(language.menu.eligibility);
    $(".team_menu").text(language.menu.team);
    $(".contact_menu").text(language.menu.contact);
    $(".our_values").text(language.our_values);

    $(".Integrity_Content").text(language.values.Integrity.Value);
    $(".Integrity").text(language.values.Integrity.Title);

    $(".Sustainability_Content").text(language.values.Sustainability.Value);
    $(".Sustainability").text(language.values.Sustainability.Title);

    $(".Compassion_Content").text(language.values.Compassion.Value);
    $(".Compassion").text(language.values.Compassion.Title);

    $(".Altruism_Content").text(language.values.Altruism.Value);
    $(".Altruism").text(language.values.Altruism.Title);

    $(".Respect_Content").text(language.values.Respect.Value);
    $(".Respect").text(language.values.Respect.Title);

    $(".Empower_Content").text(language.values.Empower.Value);
    $(".Empower").text(language.values.Empower.Title);

    $(".programme_framework").html(language.programme_framework);

    $(".MentorRecruitment_Content").html(language.Framework.MentorRecruitment.Value);
    $(".MentorRecruitment").html(language.Framework.MentorRecruitment.Title);

    $(".MenteeRecruitment_Content").html(language.Framework.MenteeRecruitment.Value);
    $(".MenteeRecruitment").html(language.Framework.MenteeRecruitment.Title);

    $(".Pairing_Content").html(language.Framework.Pairing.Value);
    $(".Pairing").html(language.Framework.Pairing.Title);

    $(".Mentoring_Content").html(language.Framework.Mentoring.Value);
    $(".Mentoring").html(language.Framework.Mentoring.Title);

    $(".Feedback_Content").html(language.Framework.Feedback.Value);
    $(".Feedback").text(language.Framework.Feedback.Title);

    $(".Closing_Content").html(language.Framework.Closing.Value);
    $(".Closing").html(language.Framework.Closing.Title);

    $(".mentorApplication").html(language.mentorApplication);
    $(".menteeApplication").html(language.menteeApplication);
    $(".mentee_apply").html(language.ApplyNow);
    $(".application_notification").html(language.ApplicationNotification);
    
    
    $(".Mentee_Eligibility").html(language.Mentee_Eligibility);
    $(".Underrepresented_Content").html(language.Eligibility.Underrepresented.Value);
    $(".Underrepresented").html(language.Eligibility.Underrepresented.Title);

    $(".FirstGeneration_Content").html(language.Eligibility.FirstGeneration.Value);
    $(".FirstGeneration").html(language.Eligibility.FirstGeneration.Title);

    $(".GenderedMinorities_Content").html(language.Eligibility.GenderedMinorities.Value);
    $(".GenderedMinorities").html(language.Eligibility.GenderedMinorities.Title);

    $(".LowIncome_Content").html(language.Eligibility.LowIncome.Value);
    $(".LowIncome").html(language.Eligibility.LowIncome.Title);

    $(".DisabledPersons_Content").html(language.Eligibility.DisabledPersons.Value);
    $(".DisabledPersons").html(language.Eligibility.DisabledPersons.Title);

    $(".LGBTQ_Content").html(language.Eligibility.LGBTQ.Value);
    $(".LGBTQ").html(language.Eligibility.LGBTQ.Title);

    $(".CoSponsors").html(language.CoSponsors);

    $(".BecomeMentor").html(language.BecomeMentor);
    $(".MentorContent").html(language.MentorContent);

    $(".AdvisoryCommittee").html(language.AdvisoryCommittee);
    $(".CommitteeLead").html(language.CommitteeLead);
    $(".AdvisoryCommitteeTeam").html(language.AdvisoryCommitteeTeam);


    $(".OurTeam").html(language.OurTeam);
    $(".GAINLead").html(language.GAINLead);
    $(".Treasurer").html(language.Treasurer);

    $(".CallToAction").html(language.CallToAction);

    $(".GetInTouch").html(language.GetInTouch);
    $(".MenteeMessage").html(language.MenteeMessage);
    $(".ReachOut").html(language.ReachOut);
    $(".CurrentGradStudents").html(language.CurrentGradStudents);
    $(".GetInvolved").html(language.GetInvolved);
    $(".Donors").html(language.Donors);
    $(".Partnership").html(language.Partnership);

    $(".ContactUs").html(language.ContactUs);
    $(".Submit").text(language.Submit);
    $(".YourEmail").text(language.YourEmail);
    $(".YourName").text(language.YourName);
    $(".YourSubject").text(language.YourSubject);
    $(".YourMessage").text(language.YourMessage);

    $(".University").html(language.University);
    $(".QuickLinks").html(language.QuickLinks);
    $(".AboutUsQuick").text(language.AboutUsQuick);
    $(".AboutUs").text(language.AboutUsQuick);
    $(".ContactUsQuick").html(language.ContactUs);
    $(".PrivacyPolicy").html(language.PrivacyPolicy);
    $(".TermsAndConditions").html(language.TermsAndConditions);
    $(".Connect").html(language.Connect);
    $(".CopyRight").html(language.CopyRight);
    $(".AllRightsReserved").html(language.AllRightsReserved);
    $(".BackToTop").html(language.BackToTop);

    $(".Welcome").html(language.Welcome);

    /*Typerwriter Script*/
    var app = document.getElementById('typed');

    var typewriter = new Typewriter(app, {
    loop: true
    });
    typewriter.typeString(language.missionTitle)
    .pauseFor(2500)
    .deleteAll()
    .typeString("<strong>" + language.mission + "</strong>")
    .pauseFor(2500)
        //.deleteChars(7)
        .deleteAll()
        .typeString('<strong>' +  language.vision + '</strong>')
        .pauseFor(2500)
        .start();

    
  

    // console.log(language.mission)

}

$(document).ready(function(){
    var userLang = navigator.language || navigator.userLanguage;
    var lang = userLang.split('-')[0];
    setLanguage(lang);
});


$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    
    $('.scrollspy').scrollSpy();

    $('.dropdown-trigger').dropdown();


    // var userLang = navigator.language || navigator.userLanguage;
    // var lang = userLang.split('-')[0];
    // setLanguage(lang);
    // language = getLanguage();
    // console.log(localStorage.getItem('language') )

});

$(document).ready(function(){ 
    $('#contact_us').validate({
      submitHandler: function(form) {
        $.ajax({  
          url:"../contact.php",  
          method:"POST",  
          data:$('#contact_us').serialize(),  
          beforeSend:function(){  
            $('#response').html("<img src='images/loader.gif' class='loader'>");    
          },  
          success:function(data){  
            $('form').trigger("reset"); 
            swal("Notification", data,'success'); 
            $('#response').fadeIn().html(data);  
            console.log(data);
            setTimeout(function(){  
             $('#response').fadeOut("slow"); 
                     //window.location.href="welcome.php"; 
                   }, 10000);  
  
  
          },
          error: function (xhr, ajaxOptions, thrownError) {
               swal("Notification", xhr.responseText,'error'); 
          } 
        });
        return false;
      },
      // other options
    });
  });


