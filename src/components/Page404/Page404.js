import React from 'react';
import { Button, Result } from 'antd';

function Page404(props) {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary"><a href="/">Back Home</a></Button>}
        />
    );
}

export default Page404;