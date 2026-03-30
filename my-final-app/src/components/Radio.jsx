import { useState } from 'react';

function Radio() {
    const [selected, setSelected] = useState('');

    return (
        <>
            <h3 className="mb-4 font-semibold text-heading">
                If your investments suddenly drops by 30%, what would you do?
            </h3>
            <ul className="w-48 bg-neutral-primary-soft border border-default rounded-base">
                <li className="w-full border-b border-default">
                    <div className="flex items-center ps-3">
                        <input
                            id="list-radio-license"
                            type="radio"
                            value="sell"
                            name="list-radio"
                            checked={selected === 'sell'}
                            onChange={(e) => setSelected(e.target.value)}
                            className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                        />
                        <label htmlFor="list-radio-license" className="w-full py-3 select-none ms-2 text-sm font-medium text-heading">
                            Sell everything
                        </label>
                    </div>
                </li>
                <li className="w-full border-b border-default">
                    <div className="flex items-center ps-3">
                        <input
                            id="list-radio-id"
                            type="radio"
                            value="wait"
                            name="list-radio"
                            checked={selected === 'wait'}
                            onChange={(e) => setSelected(e.target.value)}
                            className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                        />
                        <label htmlFor="list-radio-id" className="w-full py-3 select-none ms-2 text-sm font-medium text-heading">
                            Wait
                        </label>
                    </div>
                </li>
                <li className="w-full border-b border-default">
                    <div className="flex items-center ps-3">
                        <input
                            id="list-radio-military"
                            type="radio"
                            value="buy"
                            name="list-radio"
                            checked={selected === 'buy'}
                            onChange={(e) => setSelected(e.target.value)}
                            className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                        />
                        <label htmlFor="list-radio-military" className="w-full py-3 select-none ms-2 text-sm font-medium text-heading">
                            Buy more
                        </label>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Radio;