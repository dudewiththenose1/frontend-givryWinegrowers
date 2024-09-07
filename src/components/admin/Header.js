import React from 'react';

import { accountService } from '@/_services/account.service';
import { useNavigate } from 'react-router-dom';

import { Button} from '@nextui-org/react';

const Header = () => {
    const navigate = useNavigate()
    const logout = () => {
        accountService.logout();
        navigate("/home")
    }
    return (
        <div className="AHeader">
            <Button onClick={logout} color="danger"  variant="flat">
                Log out
            </Button>
        </div>
    );
};

export default Header;