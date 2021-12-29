import renderer from 'react-test-renderer';
import Calculator from '../src/Pages/calculator'
import CommonButton from '../src/Pages/commonButton';

describe("Check For Calculator",()=>{
    test('Check for = functionality ',()=>{
     const tree=renderer.create(<Calculator/>);
     const instance: any = tree.getInstance();
     instance.state.val = '5+9';
     expect(eval(instance.state.val)).toBe(14);
    });
    test('Check for history functionality',()=>{
    const tree=renderer.create(<Calculator/>);
    const instance:any=tree.getInstance();
    const historyArray=[];
    instance.state.val='7+9';
    historyArray.push('7+9 = 16');
    instance.evaluateValue();
    instance.state.val='8+10';
    historyArray.push('8+10 = 18');
    instance.evaluateValue();
    expect(instance.state.store).toEqual(historyArray);
    });
    test('Test Case for clear Value',()=>{
        const tree=renderer.create(<Calculator/>);
        const instance:any=tree.getInstance();
        instance.state.val='3+4';
        instance.evaluateValue();
        instance.clearValue();
        expect(instance.state.val).toEqual('');

    });
    test('Test case for clear whole history',()=>{
        const tree=renderer.create(<Calculator/>);
        const instance:any=tree.getInstance();
        instance.state.val='6+7';
        instance.evaluateValue();
        instance.state.val='9+67';
        instance.evaluateValue();
        instance.clearWholeHistory();
        expect(instance.state.store).toEqual([]);
    });
    test('Test case for back value',()=>{
        const tree=renderer.create(<Calculator/>);
        const instance:any=tree.getInstance();
        instance.state.val='2+3';
        instance.backVlue();
        console.log(instance.state.val);
        expect(instance.state.val).toEqual('2+');
    });
});
describe("Check for common Button Props",()=>{
    test("Check For Title",()=>{
     const tree=renderer.create(<CommonButton title={'Shivani'} onClick={()=>{}}/>)
     const instance=tree.getInstance();
     expect(instance?.props.title).toBe('Shivani');
    });
});