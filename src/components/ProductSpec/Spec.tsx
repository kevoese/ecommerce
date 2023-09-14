import React from 'react';

interface Props {
  spec?: any;
}

const Spec = ({ spec }: Props) => (
  <div className='px-4'>
    <h5 className="font-medium leading-6 mb-4">
      Information
    </h5>
    <div className="spec-desc">
      <table>
        <tbody>
          {
            spec?.map?.((item: any, index: number) => (
              <tr key={index}>
                <td className="text-sm leading-6 font-medium pr-4 py-2 w-[164px] sm:w-[265px]">
                  {item?.key}
                </td>
                <td className="text-sm leading-6 py-2">
                  {item?.value}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  </div>
);

export default Spec;
