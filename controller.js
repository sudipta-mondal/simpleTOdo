var cars = ["MainProject", "MaxRevenue", "Tiller1"];


  function addProjectUI(){
    var projectNameTextBox = "projectNameTextBox";
  
    console.log("6"+projectNameTextBox);
    addProject(document.getElementById("projectNameTextBox").value);
  }


  function addProject(idName){
    document.getElementById("projectNameTextBox");
    var s =projectStringGenerator(idName);
    document.getElementById("accordion").innerHTML+=s;
  }

  function addToDO(inputString){
    
    var title = ("'"+inputString+"TitleTextBox'");
    var description = ("'"+inputString+"DescriptionTextBox'");
    console.log(title);
    console.log(description);
    
    title = title.replace("'","");
    title = title.replace("'","");
    description = description.replace("'","");
    description = description.replace("'","");
    
    console.log(title);
    console.log(description);

    title=document.getElementById(title).value;
    description=document.getElementById(description).value;
    console.log(title);
    console.log(description);
   
    var toDOCard = "<div class='card'> <div class='card-body'> <h4 class='card-title'><a class='editable editable-click'>"+title+"</a></h4> <p class='card-text'>"+description+".</p> <a href='#' class='card-link'>Edit</a> <a href='#' class='card-link'>Delete</a> </div> </div>"
    document.getElementById(inputString).innerHTML+=toDOCard;
  }

  function projectStringGenerator(idName){
    var rowName = idName+"Row";
    var ouput = "addToDO('collapseTwoRow')";
    var rowNameq = "\"addToDO(\'"+rowName+"')\"";
   
    console.log(rowName);
    console.log(rowNameq);
    console.log(ouput);
    //console.log("onclick='addToDO("+rowNameid+")\">Add ToDO</button>");
    var p = "<div class='card'> <div class='card-header'> <a class='collapsed card-link' data-toggle='collapse' href='#"+idName+"'> "+idName+" </a> </div> <div id='"+idName+"' class='collapse' data-parent='#accordion'> <div class='card-body'> <div class='form-row'><div class='col-3'><input type='text' class='form-control' placeholder='Title' id='"+idName+"RowTitleTextBox' > </div><div class='col-7'><input type='text' class='form-control' placeholder='Description' id='"+idName+"RowDescriptionTextBox' ></div><div class='col-2'><button type='button' class='btn btn-primary' onclick="+rowNameq+">Add ToDO</button></div> <div class='row' id='"+rowName+"'>  </div> </div> </div> </div>"
    var s = "<div class='card'> <div class='card-header'> <a class='collapsed card-link' data-toggle='collapse' href='#"+idName+"'> "+idName+" </a> </div> <div id='"+idName+"' class='collapse' data-parent='#accordion'> <div class='card-body'> <button type='button' class='btn btn-primary'>Add ToDO</button> </div> </div> </div>";
    console.log(p);
    return p;
  }