import React from 'react';
import { Button, Result } from 'antd';

function Page500(props) {
    return (
        <Result
            style={{marginTop:'4%'}}
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button type="primary"><a href="/">Back Home</a></Button>}
        />
    );
}

export default Page500;