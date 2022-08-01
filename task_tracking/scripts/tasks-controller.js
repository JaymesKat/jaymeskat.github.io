var  tasksController = (function () {
  var taskPage;
  var initialised = false;
  return {
    init: function (page) {
      if (!initialised) {
        taskPage = page;
        $(taskPage)
          .find('[required="required"]')
          .prev("label")
          .append("<span>*</span>")
          .children("span")
          .addClass("required");
        $(taskPage).find("tbody tr:even").addClass("even");
        $(taskPage)
          .find("#btnAddTask")
          .click(function (evt) {
            evt.preventDefault();
            $(taskPage).find("#taskCreation").removeClass("not");
          });
        $(taskPage)
          .find("tbody tr")
          .click(function (evt) {
            $(evt.target)
              .closest("td")
              .siblings()
              .andSelf()
              .toggleClass("rowHighlight");
          });
        $(taskPage)
          .find("#tblTasks tbody")
          .on("click", ".deleteRow", function (evt) {
            evt.preventDefault();
            $(evt.target).parents("tr").remove();
          });
        $(taskPage)
          .find("#saveTask")
          .click(function (evt) {
            evt.preventDefault();
            if ($(taskPage).find('form').valid()) {
                var task = $("form").toObject();
                $("#taskRow")
                .tmpl(task)
                .appendTo($(taskPage).find("#tblTasks tbody"));
            }
          });
        $(taskPage)
          .find("#printToConsole")
          .click(function (evt) {
            evt.preventDefault();
            var task = $("form").toObject();
            JSON.stringify(task);
          });
        $(taskPage)
          .find("#loadObject")
          .click(function (evt) {
            evt.preventDefault();
            var task = {
              task: "Shopping",
              requiredBy: "14-08-2022",
              category: "Work"
            }
            $("form").fromObject(task);
          });
        initialised = true;
      }
    },
  };
})();
