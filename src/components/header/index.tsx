import { TITLE } from './constants';
import './header.css';

export const Header = () => {

    return (
        <div className="header">
            <h1>{ TITLE }</h1>
        </div>
    );
}
