
  $("#click").click(function () {
    var key = $("#key").val();
    keys(key);
})
function keys(key) {
    $("#posts").empty();
    $.get("https://www.instagram.com/explore/tags/"+key+"/?__a=1", function (data, status) {
        console.log(data);
        $("#location").text(data.graphql.hashtag.name);
       
        var num = "number of count :" + data.graphql.hashtag.edge_hashtag_to_media.count;
        $("#num").text(num);

        for (node in data.graphql.hashtag.edge_hashtag_to_top_posts.edges) {
            var post = data.graphql.hashtag.edge_hashtag_to_top_posts.edges[node];


            var row = `  <div class="col-4" >
                                     <img  src="${post.node.display_url}" height="300" width="300" >  

                                     <div class="row" >
                                     <div class="col" > Like ${post.node.edge_liked_by.count}   </div>
                                     <div class="col" > Comment${post.node.edge_media_to_comment.count}  </div>
                                     </div>

                                     <div class="row" >
                                     <div class="col" > 
                                     ${post.node.edge_media_to_caption.edges[0].node.text}
                                     </div> 
                                     </div> 
                        </div> `;

            console.log(row);

            $("#posts").append(row);
        }
    })
    }
