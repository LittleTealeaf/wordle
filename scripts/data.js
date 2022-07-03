const createData = (key, value) => {
    if(value == null) {
        return (element) => delete element.dataset[key];
    } else {
        return (element) => element.dataset[key] = value;
    }
}

const STATE_UNKNOWN = createData('state','unknown');
const STATE_WRONG = createData('state','wrong');
const STATE_PARTIAL = createData('state','partial');
const STATE_CORRECT = createData('state','correct');


const HIDE = createData('hide','');
const SHOW = createData('hide',null);
