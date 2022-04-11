function entry(val) {
                document.getElementById("in1").value+=val;
            }
            function ans() {
                var x = document.getElementById("in1").value;
                var y = eval(x);
                document.getElementById("in1").value = y; 
            }
            function del() {
                document.getElementById("in1").value = "";

            }
            function rem() {
                var st = document.getElementById("in1").value;
                var stl = st.slice(0,st.length-1);
                document.getElementById("in1").value = stl;
            } 
