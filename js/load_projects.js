
/**
 * Load projects from JSON
 */
$(document).ready(function(){
    $.getJSON("../docs/project_data.json", function( data ) {
        for (var i in data) {
            console.log(data[i]);

            const project_desc = data[i]["project_desc"];
            const project_name = data[i]["project_name"];
            const img = '../' + data[i]["img"];
            const github_url = data[i]["github_url"];
            const text = data[i]["text"];
            const date = data[i]["date"];
            
            let lang = "../imgs/" + data[i]["lang"] + ".png";

            let target_window = "";
            if (data[i]["openInNewTab"])
                target_window=`target="_blank"`;

            project_template = `
            <div class="floating-box-project">
                <div class="horizontal-flex">
                    <div class="image-cropper-border">
                        <img src="`+img+`" />
                    </div>

                    <p style="margin-left: 20px;"></p>

                    <div class="align-left">
                        <div class="vertical-flex">
                            <h3 class="project-desc">`+project_desc+`</h3>
                            <div style="padding-top: 20px"></div>
                            <h4 class="project-description">`+text+`</h4>
                        </div>
                    </div>

                    <div style="padding-left: 40px"></div>

                    <div class="vertical-flex">
                        <h1 class="project-title">`+project_name+`</h1>
                        <table>
                        <tr>
                        <td><img src="`+lang+`" class="language-icon" /></td>
                        <td><a href="`+github_url+`" `+target_window+` class="fa fa-github"></a></td>
                        <tr>
                        </table>
                        <p><i>`+date+`</i></p>
                    </div>
                </div>
            </div>
            <div style="padding-top: 30px"></div>
            `;
            $("#projects-list").append(project_template);
        }     
    });
});