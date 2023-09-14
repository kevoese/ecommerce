import React from 'react';

interface Props {
  data: {
    name: string;
    route: string;
    Component: any;
    props?: any;
  }[]
}

const NavSelect = ({ data }: Props) => {
  const [selectedRoute, setSelectedRoute] = React.useState(data?.[0]?.route);

  const getComponent = (route: string) => {
    const result = data?.find?.((item: any) => item?.route === route);
    return result?.Component(result?.props);
  };

  return (
    <div>
      <header className="flex gap-6 mb-8">
        {data?.map?.((item, index) => (
          <div
            className={`cursor-pointer pb-1 ${selectedRoute === item?.route ? 'shadow-border-blue' : ''}`}
            key={index}
            onClick={() => setSelectedRoute(item?.route)}
          >
            <span
              className={`font-medium text-sm leading-6 ${selectedRoute === item?.route ? 'text-thrive-blue' : 'text-grey-ash'}`}
            >
              {item?.name}
            </span>
          </div>
        ))}
      </header>
      <section className='min-h-[200px] mb-16 sm:mb-20'>
        {
          getComponent(selectedRoute)
        }
      </section>
    </div>
  );
};

export default NavSelect;
