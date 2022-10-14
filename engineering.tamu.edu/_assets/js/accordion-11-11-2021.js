/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
*   Simple accordion pattern example
*/

'use strict';

Array.prototype.slice.call(document.querySelectorAll('.Accordion')).forEach(function (accordion) {

  // Allow for multiple accordion sections to be expanded at the same time
  var allowMultiple = accordion.hasAttribute('data-allow-multiple');
  // Allow for each toggle to both open and close individually
  var allowToggle = (allowMultiple) ? allowMultiple : accordion.hasAttribute('data-allow-toggle');

  // Create the array of toggle elements for the accordion group
  var triggers = Array.prototype.slice.call(accordion.querySelectorAll('.Accordion-trigger'));
  console.log("The Triggers Array ", triggers);
  var panels = Array.prototype.slice.call(accordion.querySelectorAll('.Accordion-panel'));
  console.log("The Panels Array ", panels);

 accordion.addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('Accordion-trigger')) {
       // Check if the current toggle is expanded.
       var isExpanded = target.getAttribute('aria-expanded') == 'true';
       console.log("The aria expanded value 0", isExpanded);       
       var active = accordion.querySelector('[aria-expanded="true"]');
       console.log("The aria active value 0", active);
       console.log("The aria control value 0", target.getAttribute('aria-controls'));
       
       if (!isExpanded) {
         // Set the expanded state on the triggering element
         target.setAttribute('aria-expanded', 'true');
        console.log("The aria expanded value 0", isExpanded); 
         // Hide the accordion sections, using aria-controls to specify the desired section
         document.getElementById(target.getAttribute('aria-controls')).removeAttribute('hidden');
         console.log("The aria control value 2", target.getAttribute('aria-controls')); 
       }
       else if (isExpanded) {
         // Set the expanded state on the triggering element
         target.setAttribute('aria-expanded', 'false');
         // Hide the accordion sections, using aria-controls to specify the desired section
         console.log("The aria control value 3", target.getAttribute('aria-controls'));
         document.getElementById(target.getAttribute('aria-controls')).setAttribute('hidden', '');
       }
      event.preventDefault();
    }
 });

  // These are used to style the accordion when one of the buttons has focus
  accordion.querySelectorAll('.Accordion-trigger').forEach(function (trigger) {

    trigger.addEventListener('focus', function (event) {
      accordion.classList.add('focus');
    });

    trigger.addEventListener('blur', function (event) {
      accordion.classList.remove('focus');
    });

  });

});

Array.prototype.slice.call(document.querySelectorAll('.Accordion-Start')).forEach(function (accordionBody) {
  // Create the array of toggle elements for the accordion group
  var triggersBody = Array.prototype.slice.call(accordionBody.querySelectorAll('.Accordion-trigger-start'));
  var panelBody = Array.prototype.slice.call(accordionBody.querySelectorAll('.Accordion-panel-start'));
  accordionBody.addEventListener('click', function (event) {
    var targetBody = event.target;
    if (targetBody.classList.contains('Accordion-trigger-start')) {
        // Check if the current toggle is expanded.
        var isExpandedBody = targetBody.getAttribute('aria-expanded') == 'true';
        var activeBody = accordionBody.querySelector('[aria-expanded="true"]');
        if (!isExpandedBody) {
            var accordButtons = document.querySelectorAll('[class="Accordion-trigger-start new-icon"]');
            accordButtons.forEach( function (button) {
            if(button.getAttribute('aria-controls') != targetBody.getAttribute('aria-controls')) {
                if(button.getAttribute('aria-expanded') == 'true') {
                    button.setAttribute('aria-expanded', 'false');
                    document.getElementById(button.getAttribute('aria-controls')).setAttribute('hidden', '');;
                }
            }
            });
            // Set the expanded state on the triggering element
            targetBody.setAttribute('aria-expanded', 'true');
            // Hide the accordion sections, using aria-controls to specify the desired section
            document.getElementById(targetBody.getAttribute('aria-controls')).removeAttribute('hidden');
        } else if (isExpandedBody) {
            // Set the expanded state on the triggering element
            targetBody.setAttribute('aria-expanded', 'false');
            // Hide the accordion sections, using aria-controls to specify the desired section
            document.getElementById(targetBody.getAttribute('aria-controls')).setAttribute('hidden', '');
        }
      event.preventDefault();
    }
 });
  // These are used to style the accordion when one of the buttons has focus
  accordionBody.querySelectorAll('.Accordion-trigger-start').forEach(function (triggersBody) {

    triggersBody.addEventListener('focus', function (event) {
      accordionBody.classList.add('focus');
    });

    triggersBody.addEventListener('blur', function (event) {
      accordionBody.classList.remove('focus');
    });

  });

});/*End of display style accordion*/