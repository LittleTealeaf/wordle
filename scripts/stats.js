class Stats {
    constructor() {
        this.element = document.getElementById("stats");
        this.graph = this.element.getElementsByClassName("graph").item(0);
        this.hidenodata = false;
        this.update([]);
    }

    update(data) {
        if(data.length == 0) {
            this.hide();
            this.hidenodata = true;
            return;
        } else if(this.hidenodata) {
            this.show();
        }

        this.graph.innerHTML = "";


        const values = {};
        var max = 0;
        var range = 0;

        data.forEach(i => {
            if(values[i] == null) {
                values[i] = 1;
            } else {
                values[i]++;
            }

            if(values[i] > max) {
                max = values[i];
            }
            if(i > range) {
                range = i;
            }
        });

        for(var i = 1; i <= range; i++) {

            if(values[i] == null) {
                values[i] = 0;
                if(values[i-1] == 0) {
                    continue;
                }
            }

            const percentage = values[i] / max * 95;



            const column = document.createElement("div");
            column.classList.add("column");

            const visual = document.createElement("div");
            visual.classList.add("visual");
            column.appendChild(visual);



            const bar = document.createElement("div");
            bar.classList.add("bar");
            bar.style.height = `${percentage}%`
            visual.appendChild(bar);



            const label = document.createElement("div");
            label.classList.add("label");
            label.innerHTML = i;
            column.appendChild(label);




            this.graph.appendChild(column);
        }


    }

    hide() {
        HIDE(this.element);
    }
    show() {
        SHOW(this.element);
    }
}
