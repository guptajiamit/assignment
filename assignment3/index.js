// solution1
function area(a, b, c) {
    var s = (a + b + c) / 2;
    var area;
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
}
//area(5,6,7);

//solution 2 
// if input is multi format 40c,40C,40°c, 40°C
function temperature(a) {
    var b = a.split("");
    var temp;
    if ((b[b.length - 1] == "c") || (b[b.length - 1] == "C")) {
        temp = a.split("°C");
        console.log(temp);
        console.log((temp[0] * 9 / 5) + 32);
        //return((temp[0]*9/5)+32);

    }
    else {
        temp = a.split("°F");
        console.log(temp);
        console.log((temp[0] - 32) * 5 / 9);
    }

}

//temperature("60°C");
//temperature("45°F");

//solution 3
function largest(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}

//largest(21,27,29);

//solution 4
function lowertoupper(a) {
    var temp = a.split(" ");
    var b;
    //console.log(temp);
    for (i = 0; i < temp.length; i++) {
        temp[i] = temp[i].replace(temp[i][0], temp[i][0].toUpperCase());
        //  console.log(temp[i]);
    }
    b = temp.join(" ");
    console.log(a);
    console.log(b);
}

//lowertoupper("hello this is amit. how are you");

//solution 5
function numbercheck(a) {
    var b;
    var c;
    b = a % 3;
    c = a % 7;
    if ((b == 0 || c == 0) && (a >= 0)) {
        console.log("number is divisible by 3 or 7");
    }
    else {
        console.log("number is not divisible by 3 or 7 or negative number");
    }
}
//numbercheck(9);

//solution 6
function dnamatch() {
    var a = "GAGCCTACTAACGGGAT"
    var b = "CATCGTAATGACGGCCT"
    var count = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            count++;
        }
    }
    console.log(count);
}

//dnamatch();
//soltion 7 todo
function solution7(a)
{
    var temp=[];
    var abc="abcdefghijklmnopqrstuvwxyz";
    abc= abc.split("");
    console.log(abc);
    a=a.split("");
    //a.sort();
    var temp=[];
    console.log(a);
    for(i=0;i<abc.length;i++)
    {
        for(j=0;j<a.length;j++) 
        {
        if(abc[i]==a[j].toLowerCase())
        {
        temp[i]=1;
        }
    }
if(temp[i]!=1)
{
    console.log("Not pangram");
}
    }
    
    console.log(temp);
}
solution7("THE quick brown FOX jumps over the lazy dog.");
//soltion 8 todo
function solution8(a)
{
var temp=[];
temp=a.split("");
temp.sort();
var flag=false;
for(i=0;i<temp.length;i++)
{
    if(temp[i]==temp[i+1])
    {
        console.log("word "+ a+" is not isogram");
        flag = true;
        return;
    }
}
if(flag==false)
{
    console.log("word "+ a+" is isogram");
}
}

//solution8("lumberjacks");
//solution8("isosgram");

//solution 9
function acronym(a) {
    var temp = a.split(" ");
    var b = [];
    var c;
    //console.log(temp);
    for (i = 0; i < temp.length; i++) {
        b[i] = temp[i][0].toUpperCase();
        //  console.log(temp[i]);
    }
    c = b.join("");
    console.log(a);
    console.log(c);
}

//acronym("lot of love");

//solution 10

var fb = {
    auth_name: "amit",
    auth_image: "amit.jpg",
    auth_post: [
        {
            content: "first post",
            Likes: [{name: "first user"}, {name: "second user"}],
            Comments: [{name: "first user"}, {name: "second user"}],
            Share: [{name: "first user"}, {name: "second user"}]
        },
        {
            content: "second post",
            Likes: [{name: "first user"}, {name: "second user"}],
            Comments: [{name: "first user"}, {name: "second user"}],
            Share: [{name: "first user"}, {name: "second user"}]
        }
        ,
        {
            content: "third post",
            Likes: [{name: "first user"}, {name: "second user"}],
            Comments: [{name: "first user"}, {name: "second user"}],
            Share: [{name: "first user"}, {name: "second user"}]
        },
        {
            content: "fourth post",
            Likes: [{name: "first user"}, {name: "second user"}],
            Comments: [{name: "first user"}, {name: "second user"}],
            Share: [{name: "first user"}, {name: "second user"}]
        },
        {
            content: "5 post",
            Likes: [{name: "first user"}, {name: "second user"},{name: "third user"}],
            Comments: [{name: "first user"}, {name: "third user"}],
            Share: [{name: "first user"}, {name: "third user"}]
        },
        {
            content: "6 post",
            Likes: [{name: "first user"}, {name: "third user"}],
            Comments: [{name: "first user"}, {name: "third user"}],
            Share: [{name: "first user"}, {name: "third user"}]
        },
        {
            content: "7 post",
            Likes: [{name: "first user"}, {name: "third user"}],
            Comments: [{name: "first user"}, {name: "third user"}],
            Share: [{name: "first user"}, {name: "third user"}]
        },
        {
            content: "8 post",
            Likes: [{name: "first user"}, {name: "third user"}],
            Comments: [{name: "first user"}, {name: "third user"}],
            Share: [{name: "first user"}, {name: "third user"}]
        },
        {
            content: "9 post",
            Likes: [{name: "first user"}, {name: "third user"}],
            Comments: [{name: "first user"}, {name: "third user"}],
            Share: [{name: "first user"}, {name: "third user"}]
        },
        {
            content: "10 post",
            Likes: [{name: "first user"}, {name: "third user"}],
            Comments: [{name: "first user"}, {name: "third user"}],
            Share: [{name: "first user"}, {name: "third user"}]
        }
    ]

}
function display()
{
    console.log(fb.auth_post.length);
   console.log(fb.auth_post[4].Likes.length);
   for(i=0;i<fb.auth_post[4].Likes.length;i++)
   {
    console.log(fb.auth_post[4].Likes[i].name);
   }
    
    console.log(fb.auth_post[4].Likes[0].name);

    var count=0;
    
    for(i=0;i<fb.auth_post[4].Likes.length;i++)
    {
        for(j=0;j<fb.auth_post[4].Comments.length;j++)
        {
            if(fb.auth_post[4].Likes[i].name==fb.auth_post[4].Comments[j].name)
                {
                    count++;
                    console.log(fb.auth_post[4].Likes[i].name);
                }
        }

    }
    console.log(count);
var a;
var totalpost=0 ;
var comment=[];
var count =[];
for(i=0;i<10;i++)
{
totalpost=totalpost+fb.auth_post[i].Comments.length;
comment =comment.concat(fb.auth_post[i].Comments);
}
console.log(comment);
console.log(totalpost);
for(i=0;i<totalpost;i++)
{   count[i]=0;
    for(j=0;j<totalpost;j++)
    {
        if(comment[i].name == comment[j].name)
        {
            count[i]++;
        }
    }

}
console.log(count);
console.log("max value")
console.log(Math.max(...count));
}   


//display();

//solution 11

var fbflist = [
    {fname:"ajay singh"},
    {fname:"ajay paul"},
    {fname:"akash singh"},
    {fname:"fake singh"},
    {fname:"ajay gupta"},
    {fname:"prakash sinha"},
    {fname:"pratyush hegde"},
    {fname:"venkt singh"},
    {fname:"hanuman singh"},
    {fname:"awasome singh"}];

    function displayflist()
    {
       var count =-1;
       console.log(fbflist.length);
        for(i=0;i<fbflist.length;i++)
        {
           if(fbflist[i].fname.split(" ")[0] =="fake")
           {
                count =i;
           }

        }
        //console.log(fbflist);
        console.log(count);
        fbflist.splice(count,1);
        console.log(fbflist.length);
        fbflist.splice(fbflist.length,0,{fname:"nitin garg"},{fname:"prashant pradhan"});
        console.log(fbflist.length);
        /*fbflist.sort(mycomparator);
        
        function mycomparator(a,b) {
          return ((a.fname > b.fname) - (a.fname < b.fname));
         }
        console.log(fbflist);*/
        /*fbflist.sort(mycomparator);
        function mycomparator(a,b) {
            return ((a.fname.length > b.fname.length) - (a.fname.length < b.fname.length));
            //return ((a.fname.length - b.fname.length) );
          }
          console.log(fbflist);
*/
        var sortbyname=[];
        var sortbylength=[];
        

                for(i=0;i<fbflist.length;i++)
                {
                    sortbyname.push(fbflist[i].fname);
                    sortbylength.push(fbflist[i].fname);
                    //initials[i]=fbflist[i].fname.split(" ");
                }
                sortbyname.sort();
                sortbylength.sort(mycomparator)
                function mycomparator(a,b) {
                   return ((a.length - b.length) );
                  }
                        
        console.log(sortbyname);
        console.log(sortbylength);
        var initials=[];
        var temp=[];
        var b=[];
        var sortbyfirst=[];
        for(i=0;i<fbflist.length;i++)
        {
            temp=fbflist[i].fname.split(" ");
            b[0]=temp[0][0].toUpperCase();
            b[1]=temp[1][0].toUpperCase();
            initials[i] = b.join("");
            sortbyfirst[i]=temp[0];
           // console.log(temp);
        }


       // console.log(initials);
       // sortbyfirst.sort();
       for(i=0;i<fbflist.length;i++)
        {
            for(j=0;j<fbflist.length;j++)
            {
                if((sortbyfirst[i] == sortbyfirst[j]) && (i!=j) )
                {
                    console.log(fbflist[i].fname);
                }
            }
        }
    
        console.log(sortbyfirst);
    }
//    displayflist();  
  
