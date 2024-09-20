document.addEventListener('scroll', function () {
    const aboutMeSection = document.getElementById('scrolleffect');
    const sectionPosition = aboutMeSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    // Add visible class to the about-me section only
    if (sectionPosition < viewportHeight) {
        aboutMeSection.classList.add('visible');
    } else {
        aboutMeSection.classList.remove('visible');
    }
});

var eduContent = document.getElementById('edu-content');
var eduButton = document.getElementById('edu-button');
var workContent = document.getElementById('work-content');
var workButton = document.getElementById('work-button');

eduButton.onclick = function(){
    if(eduContent.className == 'open'){
        eduContent.className = '';
    } else {
        eduContent.className = 'open';
        workContent.className = ''; // Close work content when education is opened
    }
};

workButton.onclick = function(){
    if(workContent.className == 'open'){
        workContent.className = '';
    } else {
        workContent.className = 'open';
        eduContent.className = ''; // Close education content when work is opened
    }
};

