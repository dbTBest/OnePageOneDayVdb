<!--

/*************************************************
文章的组件 
   textData为测试用的JSON对象，结构为
   {
   "title":...
   ,"parts":[
   {
   "partTitle":...
   ,"ps":[一段文字，一段文字，]
   ,"imgs":[图片的URL，图片的URL] 若无图片则为空数组
   }
   ,...
   ]
   }
   
   ReactDOM.render(
            <Text textData={textData}/>
            ,document.getElementById("TextBoxCol")
        );
    textData为JSON对象即可，
    TextBoxCol可以是任意类为textBox的element
  
**************************************************************/

-->

    <script type="text/babel">
        var textData={
    "title":"h1"
    ,"parts":[
        {
            "partTitle":"partTitle"
            ,"ps":[
                "text text text text text text text text text text text text text text text text"
                ,"text text text text text text text text text text text text text text text text"
                ,"text text text text text text text text text text text text text text text text"
            ]
            ,"imgs":[
                "http://static.ghostchina.com/image/6/d1/fcb3879e14429d75833a461572e64.jpg"
                ,"http://static.ghostchina.com/image/6/d1/fcb3879e14429d75833a461572e64.jpg"
            ]
        }
        ,{
            "partTitle":"partTitle"
            ,"ps":[
                "text text text text text text text text text text text text text text text text"
                ,"text text text text text text text text text text text text text text text text"
                ,"text text text text text text text text text text text text text text text text"
            ]
            ,"imgs":[]
        }
    ]
};
        var Text=React.createClass({
            
            getTextBoxH1Dom:function(textBoxH1Data){
                return <h1 className="textBoxH1">{textBoxH1Data}</h1>;
            }
            
            ,getPartDom:function(partDomData){
                var partTitle=partDomData.partTitle
                    ,ps=partDomData.ps
                    ,imgs=partDomData.imgs
                    ,partTitleDom=<h4 className="textBoxH3 small-mode-title-font">{partTitle}</h4>
                    ,psArrDom=[]
                    ,imgsArrDom=[]
                    ,resultArr=[]
                ;
                
                for(var i in ps){
                    psArrDom.push(<p className="textBoxP">{ps[i]}</p>);
                }
                
                for(var j in imgs){
                    imgsArrDom.push(
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="thumbnail">
                                <img src={imgs[j]} alt="" className="textBoxImg" />
                            </div>
                        </div>
                    );
                }
                
                resultArr.push(partTitleDom);
                resultArr=resultArr.concat(psArrDom);
                imgsArrDom.length&&(function(){resultArr.push(
                    <div className="row">
                    {imgsArrDom}
                    </div>  
                );})();
                
                return (
                    <div className="textPart1 textPart">
                    {resultArr}
                    </div>
                    );
            }
            
            ,getPartDoms:function(partDomsData){
                return partDomsData.map((partDomData)=>{
                   return this.getPartDom(partDomData); 
                });
            }
            
            ,getTextDom:function(textData){
                var textBoxH1Dom=this.getTextBoxH1Dom(textData.title);
                var partDoms=this.getPartDoms(textData.parts);
                var resultArr=[textBoxH1Dom,partDoms];
                
                return resultArr;
            }
            
            ,render:function(){
                return <div className="textBox">{this.getTextDom(this.props.textData)}</div>;
            }
        });

        ReactDOM.render(
            <Text textData={textData}/>
            ,document.getElementById("TextBoxCol")
        );
    </script>
