import { useLoaderData, useParams } from 'react-router-dom';

import AsyncComponent from '@/components/async';
import { TUserDetailLoader } from '@/interfaces/loaders';

function UserDetail() {
  const params = useParams();
  const { info } = useLoaderData() as TUserDetailLoader;

  return (
    <div className="UserDetail">
      <h1>UserDetail: {params?.userId}</h1>
      <AsyncComponent data={info.fullName} loadingElement={<p>Loading...</p>}>
        {(resolvedData) => <div>{resolvedData}</div>}
      </AsyncComponent>

      <AsyncComponent data={info.company} loadingElement={<p>Loading...</p>}>
        {(resolvedData) => <div>{resolvedData}</div>}
      </AsyncComponent>
    </div>
  );
}

export default UserDetail;
