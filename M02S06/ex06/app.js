$(() => {
    var $appRoot = $('#app-root');
    var $personForm = $('#person-form');
  
    getPersons().done(function (response) {
      createUl(response.persons).appendTo($appRoot);
    });
  
    $personForm.on('submit', function (event) {
      event.preventDefault();
      var $form = $(this);
      var data = $form.serializeArray();
      var payload = {
        person: {},
      };
  
      data.forEach((inputData) => {
        var inputName = inputData.name;
        var inputValue = inputData.value;
  
        if (inputName === 'skills') {
          inputValue = inputValue.replaceAll(',', ' ');
        }
  
        payload.person[inputName] = inputValue;
      });
  
      createPerson(payload).done(function () {
        $appRoot.empty();
        // DOM: appRoot.innerHTML = '';
  
        getPersons().done(function (response) {
          createUl(response.persons).appendTo($appRoot);
        });
      });
    });
  
    // hoisting works for function keyword only
    // [{"name":"Dragos Iordache","skills":["HTML","CSS","JavaScript","Node.js"]}]
    function createUl(data) {
      var $ul = $('<ul>');
  
      data.forEach(function (item) {
        var name = item.name;
        var skills = item.skills;
        var $skillsUl = createSkillsUl(skills);
  
        $li = $('<li>', {
          text: name,
        })
          .append($skillsUl)
          .appendTo($ul);
      });
  
      return $ul;
    }
  
    function createSkillsUl(skills = []) {
      var $ul = $('<ul>');
  
      skills.forEach(function (skill) {
        $li = $('<li>', {
          text: skill,
        });
  
        $ul.append($li);
      });
  
      return $ul;
    }
  
    function getPersons() {
      return $.ajax({
        method: 'GET',
        url: 'http://localhost:8080/persons',
      });
    }
  
    function createPerson(payload) {
      return $.ajax({
        method: 'POST',
        url: 'http://localhost:8080/persons',
        data: payload,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
      });
    }
  });
  